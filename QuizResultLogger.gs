/**
 * ============================================================
 *  2000 Essential Words — Quiz Result Logger
 *  Apps Script Web App backend for the HTML vocabulary quiz
 * ============================================================
 *
 * SETUP INSTRUCTIONS:
 * 1. Open your spreadsheet:
 *    https://docs.google.com/spreadsheets/d/1f3sEEs1hYfyOlvvEXqCdWH3lPM87ezXfkbMzX7A7cxk/edit
 * 2. Go to Extensions > Apps Script
 * 3. Delete any default code in Code.gs, and paste this entire file in
 * 4. Click the disk icon (Save), name the project e.g. "QuizResultLogger"
 * 5. Click "Deploy" > "New deployment"
 *    - Click the gear icon next to "Select type" > choose "Web app"
 *    - Description: "Quiz logger v1"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone" (this allows students' browsers to POST
 *      results without logging into Google — required since students
 *      will not have your Google account)
 * 6. Click "Deploy"
 * 7. Authorize the script when prompted (it's your own script/sheet, so
 *    this is safe — click "Advanced" > "Go to [project name] (unsafe)" if
 *    Google shows the unverified-app warning, since this is your own
 *    private script, not a published one)
 * 8. Copy the "Web app URL" it gives you — it looks like:
 *    https://script.google.com/macros/s/AKfycb.../exec
 * 9. Paste that URL into the HTML quiz file where it says:
 *    const GAS_ENDPOINT_URL = "PASTE_YOUR_WEB_APP_URL_HERE";
 *
 * IMPORTANT: Every time you edit this script after the first deploy,
 * you must create a NEW deployment version (Deploy > Manage deployments
 * > pencil/edit icon > Version: "New version" > Deploy) for changes to
 * take effect on the live URL. Editing the code alone does NOT update
 * the already-deployed web app.
 * ============================================================
 */

// Name of the tab in your spreadsheet where results should be logged.
var SHEET_NAME = "quiz result";

// Column order must match row 1 of your sheet exactly:
// timeDate, studentName, unitThemeName, part1wrongSpellingWords,
// part2wrongMCQWords, lookUpWords
var EXPECTED_HEADERS = [
  "timeDate",
  "studentName",
  "unitThemeName",
  "part1wrongSpellingWords",
  "part2wrongMCQWords",
  "lookUpWords"
];

/**
 * Handles POST requests sent from the HTML quiz when a student finishes.
 * Expected JSON body (sent as a string in a form field called "payload"
 * to avoid CORS preflight issues — see HTML quiz fetch code):
 * {
 *   studentName: "Amy Chen",
 *   unitThemeName: "Theme 3 - Food",
 *   part1wrongSpellingWords: "apple, banana, orange",
 *   part2wrongMCQWords: "possible, likely",
 *   lookUpWords: "cloud, chance"
 * }
 */
function doPost(e) {
  try {
    var data = parseIncomingData(e);

    var sheet = getOrCreateSheet();

    var timeZone = Session.getScriptTimeZone() || "Asia/Taipei";
    var timeDate = Utilities.formatDate(new Date(), timeZone, "yyyy-MM-dd HH:mm:ss");

    var row = [
      timeDate,
      data.studentName || "",
      data.unitThemeName || "",
      data.part1wrongSpellingWords || "",
      data.part2wrongMCQWords || "",
      data.lookUpWords || ""
    ];

    sheet.appendRow(row);

    return jsonResponse({ status: "success", message: "Result logged.", row: row });
  } catch (err) {
    return jsonResponse({ status: "error", message: String(err) });
  }
}

/**
 * Allows a simple GET request to check the web app is alive
 * (visit the deployed URL directly in a browser to test).
 */
function doGet(e) {
  return jsonResponse({
    status: "ok",
    message: "Quiz logger is running. Use POST to submit results."
  });
}

/**
 * Parses incoming data whether it arrives as:
 * - e.postData.contents being raw JSON (application/json), OR
 * - e.parameter.payload being a JSON string (form-encoded, avoids CORS preflight)
 */
function parseIncomingData(e) {
  // Case 1: Apps Script successfully parsed application/x-www-form-urlencoded
  // body into e.parameter (most common case for our HTML quiz's fetch call).
  if (e.parameter && e.parameter.payload) {
    return JSON.parse(e.parameter.payload);
  }

  // Case 2: raw body wasn't auto-parsed into e.parameter (can happen with some
  // content-type/charset combinations). Manually decode "payload=<urlencoded json>".
  if (e.postData && e.postData.contents) {
    var raw = e.postData.contents;
    var match = raw.match(/(?:^|&)payload=([^&]*)/);
    if (match) {
      var decoded = decodeURIComponent(match[1].replace(/\+/g, " "));
      return JSON.parse(decoded);
    }
    // Last resort: maybe the whole body IS raw JSON (e.g. application/json callers).
    try {
      return JSON.parse(raw);
    } catch (err) {
      // Fall through
    }
  }
  throw new Error("No valid payload received.");
}

/**
 * Gets the "quiz result" sheet, creating it with headers if it doesn't exist.
 * Also verifies/repairs the header row so column order always matches.
 */
function getOrCreateSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  var firstRow = sheet.getRange(1, 1, 1, EXPECTED_HEADERS.length).getValues()[0];
  var headersMatch = EXPECTED_HEADERS.every(function (h, i) {
    return firstRow[i] === h;
  });

  if (!headersMatch) {
    sheet.getRange(1, 1, 1, EXPECTED_HEADERS.length).setValues([EXPECTED_HEADERS]);
  }

  return sheet;
}

/**
 * Returns a JSON response with the correct content type.
 */
function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Optional: run this once manually from the Apps Script editor
 * (select function "testAppend" in the toolbar dropdown, click Run)
 * to confirm the sheet logging works before connecting the HTML quiz.
 */
function testAppend() {
  var fakeEvent = {
    parameter: {
      payload: JSON.stringify({
        studentName: "Test Student",
        unitThemeName: "Theme 1 - Test",
        part1wrongSpellingWords: "apple, banana",
        part2wrongMCQWords: "possible",
        lookUpWords: "cloud"
      })
    }
  };
  var result = doPost(fakeEvent);
  Logger.log(result.getContent());
}

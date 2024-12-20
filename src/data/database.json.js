import * as XLSX from "xlsx";

async function fetchExcelData(url) {
  try {
    // Fetch the Excel file
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();

    // Parse the file using SheetJS
    const workbook = XLSX.read(arrayBuffer, { type: "array" });

    // Convert all sheets to JSON
    const allSheets = {};
    workbook.SheetNames.forEach((sheetName) => {
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { defval: null }); // `defval: null` ensures empty cells are null
      allSheets[sheetName] = sheetData;
    });

    return allSheets;
  } catch (error) {
    console.error("Error fetching or parsing Excel file:", error);
    return null;
  }
}

// Example Usage
const googleSheetUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vS0HGVsH4E-Bmd8NTH5JFmXfYpoqo6gxfxX9SOK9IDnqrL-EW1QdDwS4DR7vVF1v9xVDerZ9GXeguYV/pub?output=xlsx";

fetchExcelData(googleSheetUrl).then((allSheets) => {
  process.stdout.write(allSheets);
});

import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

export const exportExcelFile = (finalDataDetail) => {
  const fileType = "xlsx";

  var workbook = XLSX.utils.book_new();
  var ws = XLSX.utils.json_to_sheet(finalDataDetail);
  XLSX.utils.book_append_sheet(workbook, ws, "Results");
  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });
  const fileData = new Blob([excelBuffer], { type: fileType });
  // eslint-disable-next-line
  FileSaver.saveAs(fileData, "myfile" + ".xlsx");
};
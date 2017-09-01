function myFunction() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  
  var lastRow = sheet.getLastRow();
//  var lastColumn = sheet.getLastColumn();
//  var lastRow=18;
  var lastColumn=5;
  
  numExec=0;
  outputStr="";
  
  for (var i = 1; i <= lastRow; i++) {
    for (var j = 1; j <= lastColumn; j++) {
      numExec++;
      if (i==1){
        outputStr+=" |= "+cellString(i,j);
      } else {
        outputStr+=" | "+cellString(i,j);
      }
    }
//    outputStr+="newline";
    outputStr+="\n";
  }
  
  var doc = DocumentApp.create('Table Output');
  doc.getBody().setText(outputStr)
}
function cellString(row,col){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0]; // sheets are counted starting from 0
  var cell = sheet.getRange(row, col);
  var text = cell.getDisplayValue();
  var lines = text.split("\r");
  text = lines.join(" __ ");
  lines = text.split("\n");
  return lines.join(" __ ");
//  return text;
}

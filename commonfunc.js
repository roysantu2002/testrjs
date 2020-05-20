var fs = require('fs')
var os = require('os');


const { v4: uuidv4 } = require('uuid');
var uniqueID = uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

function generateTestID(){
    return uniqueID;
}

function createDir(path, dirname) {

    const directory = path + dirname;

if (!fs.existsSync(directory)){
    fs.mkdirSync(directory);
  
  }else
  {
      console.log("Directory already exist");
  }
}
  

//
function createFile(path, fileName, dateTime, browserName)  {
// 
 
    var htmlContent = `
        <html><head><title>ARENA TEST AUTOMATION</title>
        <body>
        <table bordercolor=#99ccff border=1 cellpadding=3 cellspacing=3 style=font-family:arialfont-size:x-small width=60% align=center>
        <TH colspan=2 bgcolor = #F0F8FF><FONT COLOR=#000000><B><I>ARENA AUTOMATION</I></B></TH></FONT>
        <tr>
        <td bgcolor=C0C0C0><B>Test Scope</B></td>
        <td>ARENA WORK FLOW TESTING</td>
        </tr>
        <tr><td bgcolor=C0C0C0><B>Date</B></td>
        <td>${new Date()}</td>
        </tr><tr>
         <td bgcolor=C0C0C0><B>Host OS</B></td>
         <td></td>
          </tr>
           <tr>
           <td bgcolor=C0C0C0><B>Host Name</B></td>
            <td></td>
            </tr>
            <tr>
            <td bgcolor=C0C0C0><B>Browser Name</B></td>
            <td>  ${os.userInfo().username} </td>
            <tr>
            <td bgcolor=C0C0C0><B>Date & Time</B></td>
             <td> dtTime </td>
            </tr>
            <P><br><table bordercolor=#99ccff  border=1 cellpadding=1 cellspacing=1 style=font-family:arialfont-size:x-small width=100% align=center>
            <TH colspan=6 bgcolor = #F0F8FF><FONT COLOR=#000000><B><I>DETAILED EXECUTION REPORT(S)</I></B></TH></FONT>
            <TR><TD align=left bgcolor=C0C0C0 ><font size=2+ color=blue><B><I>SL</I></B></Font></TD>
            <TD align=left bgcolor=C0C0C0 ><font size=2+ color=blue><B><I>Test Scenario</I></B></Font></TD>
             <TD align=left bgcolor=C0C0C0 ><font size=2+ color=blue><B><I>Expected Result</I></B></Font></TD>
             <TD align=center bgcolor=C0C0C0><font size=2+ color=blue><B><I>Actual Result</I></B></font></TD>
              <TD align=center bgcolor=C0C0C0><font size=2+ color=blue><B><I>Screen</I></B></font></TD>
              <TD align=center bgcolor=C0C0C0><font size=2+  color=blue><B><I>STATUS</I></B></TD></font></TR>
              `;

              console.log(path + "\\" + fileName)
              fs.writeFile(path + "\\" + fileName, htmlContent, (error) => { /* handle error */ })
}
let current_datetime = new Date();
let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();
const dirPath = "D:\\test-help\\" + formatted_date



//let fileName = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds() + ".html"

let fileNameTxt = current_datetime.getDate()  + "-" + (current_datetime.getMonth()+1) + "-" + current_datetime.getFullYear() + "-" + current_datetime.getHours() + "-" + current_datetime.getMinutes() + "-" + current_datetime.getSeconds() + ".html";
//var path = String("D:/test-help", formatted_date);
console.log(dirPath )

createDir(dirPath, formatted_date);

var testID = generateTestID()

console.log(testID)

var testID = generateTestID()

console.log(testID)

createFile(dirPath, fileNameTxt, "dateTime", "browserName")
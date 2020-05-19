var fs = require('fs')

function createDir(path, dirname) {

    const directory = path + dirname;

if (!fs.existsSync(directory)){
    fs.mkdirSync(directory);
  
  }else
  {
      console.log("Directory already exist");
  }
}
  
    // const directory = path + dirname
    // const mkdirP = async (directory) => {
    //     try {
    //       return await fs.mkdirAsync(directory);
    //     } catch (error) {
    //       if (error.code != 'EEXIST') {
    //         throw e;
    //       }
    //     }
    //   };
      
    //console.log(path + dirname)
    //var htmlContent = '<html>Whatever</html>';
    //fs.writeFile(directory + "\\" + "_test.html", htmlContent, (error) => { /* handle error */ });


let current_datetime = new Date();
let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();
const path = "D:\\test-help\\" + formatted_date

//let fileName = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds() + ".html"

let fileName = current_datetime.getDate()  + "-" + (current_datetime.getMonth()+1) + "-" + current_datetime.getFullYear() + "-" + current_datetime.getHours() + "-" + current_datetime.getMinutes() + "-" + current_datetime.getSeconds() + ".html";
//var path = String("D:/test-help", formatted_date);
createDir("D:\\test-help\\", formatted_date);

//et current_datetime = new Date()
//let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds() 
//console.log(formatted_date)



//
function createFile(path, fileName, dateTime, browserName)  {
// 
    var htmlContent = [
        "<html><head><title>ARENA TEST AUTOMATION</title>",
        "<body>",
        "<table bordercolor=#99ccff border=1 cellpadding=3 cellspacing=3 style=font-family:arialfont-size:x-small width=60% align=center>",
        "<TH colspan=2 bgcolor = #F0F8FF><FONT COLOR=#000000><B><I>ARENA AUTOMATION</I></B></TH></FONT>",
        "<tr>",
        "<td bgcolor=C0C0C0><B>Test Scope</B></td>",
        "<td>ARENA WORKFlow</td>",
        "</tr>",
        "<tr><td bgcolor=C0C0C0><B>Date</B></td>",
        "<td>"+dateTime+"</td>",
        "</tr><tr>",
         "<td bgcolor=C0C0C0><B>Host OS</B></td>",
         "<td></td>",
          "</tr>",
           "<tr>",
           "<td bgcolor=C0C0C0><B>Host Name</B></td>",
            "<td></td>",
            "</tr>",
            "<tr>",
            "<td bgcolor=C0C0C0><B>Browser Name</B></td>",
            "<td>" + browserName + "</td>",
            "<tr>",
            "<td bgcolor=C0C0C0><B>Date & Time</B></td>",
             "<td> dtTime </td>",
            "</tr>",
            "<P><br><table bordercolor=#99ccff  border=1 cellpadding=1 cellspacing=1 style=font-family:arialfont-size:x-small width=100% align=center>",
            "<TH colspan=6 bgcolor = #F0F8FF><FONT COLOR=#000000><B><I>DETAILED EXECUTION REPORT(S)</I></B></TH></FONT>",
            "<TR><TD align=left bgcolor=C0C0C0 ><font size=2+ color=blue><B><I>SL</I></B></Font></TD>",
            "<TD align=left bgcolor=C0C0C0 ><font size=2+ color=blue><B><I>Test Scenario</I></B></Font></TD>",
             "<TD align=left bgcolor=C0C0C0 ><font size=2+ color=blue><B><I>Expected Result</I></B></Font></TD>",
             "<TD align=center bgcolor=C0C0C0><font size=2+ color=blue><B><I>Actual Result</I></B></font></TD>",
              "<TD align=center bgcolor=C0C0C0><font size=2+ color=blue><B><I>Screen</I></B></font></TD>",
              "<TD align=center bgcolor=C0C0C0><font size=2+  color=blue><B><I>STATUS</I></B></TD></font></TR>"
    ].join("\n")

    console.log(path + "\\" + fileName)
    fs.writeFile(path + "\\" + fileName, htmlContent, (error) => { /* handle error */ })

}

createFile(path, fileName, "dateTime", "browserName")
const os = require('os');
var syslog = require("syslog-client");
const lineReader = require('line-reader');

var options = {
    syslogHostname: os.hostname(),
    transport: syslog.Transport.Udp,
    port: 514
};
var client = syslog.createClient("127.0.0.1", options);
var logOptions = {
	facility: syslog.Facility.User,
    severity: syslog.Severity.Informational,
};
// var message = " 192.104.132.10 logclient 2020-04-10 00:01:36,319 ERROR main@MainApp:25 java.lang.Exception10"
var message = " 2020-04-05 21:53:52,602 CKAN1:192.168.0.1 INFO ra=22&cc=ss&error=1";
client.log(message, logOptions, function(error) {
    if (error) {
        console.error(error);
    } else {
        console.log("sent message successfully");
    }
});

// lineReader.eachLine('/home/lap12674-local/input2', function(line) {
//     client.log(" "+line, logOptions, function(error) {
//         if (error) {
//             console.error(error);
//         } else {
//             // console.log("sent message successfully");
//         }
//     });
//     // console.log(line);
// });
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
var message = " 2020-04-05 21:53:52,602 CKAN1:192.168.0.1 INFO service_list cuongv";
client.log(message, logOptions, function(error) {
    if (error) {
        console.error(error);
    } else {
        console.log("sent message successfully");
    }
});

// lineReader.eachLine('/home/lap12674-local/input', function(line) {
//     client.log(" "+line, logOptions, function(error) {
//         if (error) {
//             console.error(error);
//         } else {
//             // console.log("sent message successfully");
//         }
//     });
//     // console.log(line);
// });
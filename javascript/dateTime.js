
function dateTime() {
    var currentdate = new Date();
    var datetime = "Last Sync: " + currentdate.getDay() + "/"+currentdate.getMonth()
        + "/" + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    console.log(currentdate);
    alert(currentdate);
}
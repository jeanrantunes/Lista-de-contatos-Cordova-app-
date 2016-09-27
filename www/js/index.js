document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    //alert(cordova.file.externalDataDirectory);
    var listContacts = new ListContacts(cordova.file.externalRootDirectory+"Contacts/list.json");
    listContacts.getListContacts();
}
/*$(document).ready(function(){
    var listContacts = new ListContacts("Contacts/list.json");
    listContacts.getListContacts();  
});*/

/*
function fail(e) {
    console.log("FileSystem Error");
    console.dir(e);
}

function gotFile(fileEntry) {
    fileEntry.file(function(file) {
        var reader = new FileReader();

        reader.onloadend = function(e) {   
            var parsedData = JSON.parse(this.result);
            alert(parsedData[0].Email);
        }
        reader.readAsText(file);
    });
}*/

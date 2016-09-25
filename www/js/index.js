
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
//alert(cordova.file.externalRootDirectory);
    
    //listPath(myPath);
    window.resolveLocalFileSystemURL(cordova.file.externalRootDirectory + "list.json", gotFile, fail);
     
    
    
}
function fail(e) {
    console.log("FileSystem Error");
    console.dir(e);
}

function gotFile(fileEntry) {
    $data = "";
    fileEntry.file(function(file) {
        var reader = new FileReader();

        reader.onloadend = function(e) {
           
            
            var parsedData = JSON.parse(this.result);
            alert(parsedData[0].Email);
        }

        reader.readAsText(file);

    });


}

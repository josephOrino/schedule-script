// Ensure there is an open document  
if (app.documents.length > 0) {  
    var doc = app.activeDocument;  
    var textlayers;

    var schedule = prompt("Paste here the schedule: ");
    var scheduleArr = schedule.split(" | ");

    switch (scheduleArr.length) {
        case 26:
            textlayers = 25;
            break;
            case 23:
                textlayers = 22;
                break;
                case 20:
                    textlayers = 19;
                    break;
                    case 17:
                        textlayers = 16;
                        break;
                        case 14:
                            textlayers = 13;
                            break;
    }

    var firstText = scheduleArr[0] + " | " + scheduleArr[1] + " | THE 3RD SPORTS CENTER";

    doc.artLayers[0].textItem.contents = firstText;

    // Loop through layers to find the first text layer  
    for (var i = 1; i < textlayers; i++) {  
        var layer = doc.artLayers[i];  

        if (layer.kind == LayerKind.TEXT) {  
            layer.textItem.contents = scheduleArr[i+1];  
        }  
    }  

    var filePath = doc.fullName.parent; // Get the directory of the active document
    var fileName = doc.name.replace(/\.[^\.]+$/, ""); // Remove the file extension
    var jpegFile = new File(filePath + '/SchedulesMade/' + scheduleArr[1] + ".jpg");
    
    var jpegOptions = new JPEGSaveOptions();
    jpegOptions.quality = 12; // Maximum quality
    jpegOptions.formatOptions = FormatOptions.STANDARDBASELINE; // Baseline Standard
    jpegOptions.matte = MatteType.NONE;
    
    doc.saveAs(jpegFile, jpegOptions, true, Extension.LOWERCASE);
    alert("File saved as JPEG: " + jpegFile.fsName);
} else {  
    alert("No active document found!");  
}  

// Ensure there is an open document  
if (app.documents.length > 0) {  
    var doc = app.activeDocument;  
    var textlayers;
    var groupName;

    var schedule = prompt("Paste here the schedule: ");
    var scheduleArr = schedule.split(" | ");

    switch (scheduleArr.length) {
        case 26:
            textlayers = 25;
            groupName = "8 Games";
            break;
            case 23:
                textlayers = 22;
                groupName = "7 Games";
                break;
                case 20:
                    textlayers = 19;
                    groupName = "6 Games";
                    break;
                    case 17:
                        textlayers = 16;
                        groupName = "5 Games";
                        break;
                        case 14:
                            textlayers = 13;
                            groupName = "4 Games";
                            break;
    }
    alert(groupName);
    var group = doc.layerSets.getByName(groupName);
    group.visible = !group.visible; // Toggle visibility

    var firstText = scheduleArr[0] + " | " + scheduleArr[1] + " | THE 3RD SPORTS CENTER";

    doc.artLayers[0].textItem.contents = firstText;

    // Loop through layers to find the first text layer  
    for (var i = 0; i < group.artLayers.length; i++) {
        var layer = group.artLayers[i];
        if (layer.kind == LayerKind.TEXT) {  
            layer.textItem.contents = scheduleArr[i+2];  
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

    group.visible = !group.visible; // Toggle visibility
} else {  
    alert("No active document found!");  
}  

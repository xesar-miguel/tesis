var controladorArchivos="CargaArchivo";
function CargarArchivo(nameFile) {
    var data = new FormData();
    var files = $("#" + nameFile).get(0).files;
    if (files.length > 0) {
        $.each(files, function (key, value) {
         //   console.debug(key + ": " + value);
            data.append("UploadedImage", files[key]);
        });
    }
    var ajaxRequest = $.ajax({
        type: "POST",
        url: controladorArchivos,
        contentType: false,
        processData: false,
        data: data
    });
    ajaxRequest.done(function (xhr, textStatus) {
        console.debug("estado->" + textStatus);
    });
}

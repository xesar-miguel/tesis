function initTeclas(){
	teclas();
}

function mostrarTipoPerfilDiv(divID) {
	// ocultar todos los demas
	$('#divTipoPerfilUSU_IPR').hide();
	$('#divTipoPerfilADM_REG').hide();
	$('#divTipoPerfilCAT_ESP').hide();
	// mostrar solo uno
	if (divID != null) {
		$(divID).show();
	}
}

function adjuntarArchivos(){
	// subir archivo -> fil_copiaCertificado
    var fil_copiaDniTitular = $('input[name="fil_copiaDniTitular"]');
    eventSubirArchivoAsincrono(fil_copiaDniTitular, 'fil_copiaDniTitular',
        'login.htm?action=subirArchivoAsincrono',
        function(data) {
 
            if (handleErrorJson(data)) {
                handleUploadErrorJson(fil_copiaDniTitular, 'fil_copiaDniTitular', data);
                return;
            }

            handleUploadSuccess(fil_copiaDniTitular, 'fil_copiaDniTitular', data);

            console.log('data: ' + JSON.stringify(data));

        },
        function(data, textStatus, errorThrown) {
            handleUploadError(fil_copiaDniTitular, 'fil_copiaDniTitular', data);
        }, 'pdf');
    
    
 	// subir archivo -> fil_copiaCertificado
    var fil_documentoDesignacion = $('input[name="fil_documentoDesignacion"]');
    eventSubirArchivoAsincrono(fil_documentoDesignacion, 'fil_documentoDesignacion',
        'login.htm?action=subirArchivoAsincrono',
        function(data) {
 
            if (handleErrorJson(data)) {
                handleUploadErrorJson(fil_documentoDesignacion, 'fil_documentoDesignacion', data);
                return;
            }

            handleUploadSuccess(fil_documentoDesignacion, 'fil_documentoDesignacion', data);

            console.log('data: ' + JSON.stringify(data));

        },
        function(data, textStatus, errorThrown) {
            handleUploadError(fil_documentoDesignacion, 'fil_documentoDesignacion', data);
        }, 'pdf');
    
 	// subir archivo -> fil_copiaCertificado
    var fil_copiaDniTitularEsp = $('input[name="fil_copiaDniTitularEsp"]');
    eventSubirArchivoAsincrono(fil_copiaDniTitularEsp, 'fil_copiaDniTitularEsp',
        'login.htm?action=subirArchivoAsincrono',
        function(data) {
 
            if (handleErrorJson(data)) {
                handleUploadErrorJson(fil_copiaDniTitularEsp, 'fil_copiaDniTitularEsp', data);
                return;
            }

            handleUploadSuccess(fil_copiaDniTitularEsp, 'fil_copiaDniTitularEsp', data);

            console.log('data: ' + JSON.stringify(data));

        },
        function(data, textStatus, errorThrown) {
            handleUploadError(fil_copiaDniTitularEsp, 'fil_copiaDniTitularEsp', data);
        }, 'pdf');
    
    
    var fil_copiaCertificado = $('input[name="fil_copiaCertificado"]');
    eventSubirArchivoAsincrono(fil_copiaCertificado, 'fil_copiaCertificado',
        'login.htm?action=subirArchivoAsincrono',
        function(data) {
 
            if (handleErrorJson(data)) {
                handleUploadErrorJson(fil_copiaCertificado, 'fil_copiaCertificado', data);
                return;
            }

            handleUploadSuccess(fil_copiaCertificado, 'fil_copiaCertificado', data);

            console.log('data: ' + JSON.stringify(data));

        },
        function(data, textStatus, errorThrown) {
            handleUploadError(fil_copiaCertificado, 'fil_copiaCertificado', data);
        }, 'pdf');
    
    var fil_resDesign = $('input[name="fil_resDesign"]');
    eventSubirArchivoAsincrono(fil_resDesign, 'fil_resDesign',
        'login.htm?action=subirArchivoAsincrono',
        function(data) {
 
            if (handleErrorJson(data)) {
                handleUploadErrorJson(fil_resDesign, 'fil_resDesign', data);
                return;
            }

            handleUploadSuccess(fil_resDesign, 'fil_resDesign', data);

            console.log('data: ' + JSON.stringify(data));

        },
        function(data, textStatus, errorThrown) {
            handleUploadError(fil_resDesign, 'fil_resDesign', data);
        }, 'pdf');
    
}

function submitForm() {						
	$( '#frmSolU' ).submit();		
}





function ConfigControles() {
	$.get("http://ipinfo.io", function(response) {
		$('#txt_ipLocal').val(response.ip);
	}, "jsonp");
}

function actInput(sw){
	$("select[name='cmb_tipoDocumentoIdentidad']").prop('disabled', sw);
	$("select[name='cmb_paisProcedencia']").prop('disabled', sw);
	$("input[name='txt_apellidoPaterno']").prop('disabled', sw);
	$("input[name='txt_apellidoMaterno']").prop('disabled', sw);
	$("input[name='txt_apellidoCasada']").prop('disabled', sw);
	$("input[name='txt_nombres']").prop('disabled', sw);
}

function valFormSolicitud(){    	    	
	return new validateForm(FormVal.frmSolU).validate();    	
}

function valFormCE(){    	
	return new validateForm(FormVal.formCE).validate();    	
}

function valFormAR(){    	
	return new validateForm(FormVal.formAR).validate();    	
}
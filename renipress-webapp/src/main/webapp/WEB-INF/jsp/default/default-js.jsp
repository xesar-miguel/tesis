<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!-- custom html -->
<script type="text/javascript">

    //****Limpiar formularios****
    function fkey(e)
    {
        e = e || window.event; 
        if (e.keyCode == 116) 
        {
        	
           var numForm=$("form").length;
           $.each(new Array(numForm),
              function(n){document.forms[n].reset();});
           e.preventDefault(); 
        }
     }
    
    //****Desabilitar f5*****
//     function disableF5(e) 
//     { 
//     	if ((e.which || e.keyCode) == 116) 
//     		var numForm=$("form").length;
//         $.each(new Array(numForm),
//         function(n){document.forms[n].reset();});
//     		e.preventDefault(); 
    	    
//     };

	function controles(type){
		$('input[type="file"]').prop('accept', (type == null ? '.pdf' : type));		
	}

	function cargar(htmlFileName) {
		var url = htmlFileName + '?r=' + Math.random();
		$("#page-wrapper").load(url);
	}

	function cargarDiv(htmlFileName, divID) {
		var url = htmlFileName + '?r=' + Math.random();
		$(divID).load(url);
	} 
	
	function cargarDivDetalle(htmlFileName, divID) {
		var url = htmlFileName;
		$(divID).load(url);
	}
	
	function cargarDivDetalle(htmlFileName, divID, params) {
		var url = htmlFileName;
		$(divID).load(url, params, function( responseText, textStatus, jqXHR ){
			
		});
	}
	
	function cargarDivDetalle(htmlFileName, divID, params, ajax) {
		var url = htmlFileName;
		if (ajax){
			$.post(url, params, function(result){				
		        $(divID).html(result);
		    });
		}else{			
			$(divID).load(url, params, function( responseText, textStatus, jqXHR ){
				
			});	
		}		
	}
	
	function beginCargandoDiv(div , messsage){		
		div.block({
        	message: '<h1><img src="image/load.gif" />  ' + (messsage == null ? 'Cargando' : messsage) + '...</h1>',
			timeout: 1000,			
            css: { 
                border: 'none',
                padding: '15px',
                backgroundColor: '#000',                
                'font-size': '0.95em',
                opacity: .5,
                color: '#fff'              
            }
        });		  
	}
	
	function endCargandoDiv(div){
		div.unblock();
	}
	
	function beginCargando(messsage){
		$.blockUI({
        	message: '<h1><img src="image/load.gif" />  ' + (messsage == null ? 'Cargando' : messsage) + '...</h1>',
            css: { 
                border: 'none',
                padding: '15px',
                backgroundColor: '#000',                
                'font-size': '0.95em',
                opacity: .5,
                color: '#fff'              
            }
        });    	
	}
	
	function endCargando(){
		$.unblockUI();   	
	}
	
	function handleError( data ) {		
		var msg = data;				
		msg = 'No se obtuvo respuesta del servidor.';				
		showMensaje("Error de Conexión", msg, null, null );			
	}
	
	function locationUrl(url){
		$(location).prop( 'href', url ) ;
	}
	
    function showMensaje( titulo, mensaje, functionOK, tipo ) {
    	if ( $( '#msgPopupDiv' ).length ) {
    		
        	$( '#msgPopupTitulo' ).html( titulo );
        	$( '#msgPopupMensaje' ).html( mensaje );
        	        	        	
        	// setear acciones 
    		$( '#btnPopupConfirmOK' ).unbind('click');
    		if ( functionOK != null ) {
    			$('#btnPopupConfirmOK').on('click', functionOK);
    		}
    		
    		if ( functionOK != null ) {
    			$( '#btnPopupConfirmCerrar' ).unbind('click');
    			$( '#btnPopupConfirmCerrar' ).on('click', functionOK);
    		}
    		
    		$( '#msgPopupDiv' ).modal({ keyboard: false })
    		
    		$( '#btnPopupConfirmOK' ).focus(150);
    		    		    		
    	} else {
    		alert( mensaje );
    	}
    }
    
    function showGrafico(functionOK) {
    	
    	if ( $( '#graficoDiv' ).length ) {
        	        	        	
        	// setear acciones
        	if ( functionOK != null ) {
     			$( '#btnPopupConfirmCerrar' ).unbind('click');
     			$( '#btnPopupConfirmCerrar' ).on('click', functionOK);
     		}
        	
     		$( '#btnPopupConfirmOK' ).unbind('click');
     		if ( functionOK != null ) {
     			$('#btnPopupConfirmOK').on('click', functionOK);
     		}
    		
    		$( '#graficoDiv' ).modal({ keyboard: false})
    		$('.modal-content').attr('style','height:560px; width:630px; overflow:auto')
			
    	} else {
    		alert( "Sin gráfico para mostrar" );
    	}
    }
    
   
    function showConfirmation( titulo, mensaje, functionSI, funcionNO, functionCerrar ) {
    	
    	if ( $( '#msgPopupConfirmDiv' ).length ) {

    		// setear contenidos
        	$( '#msgPopupConfirmTitulo' ).html( titulo ? titulo : 'Confirmaci&oacute;n'  );
        	$( '#msgPopupConfirmMensaje' ).html( mensaje ? mensaje : '&#191;Est&aacute; seguro que desea guardar la informaci&oacute;n ingresada?');
        	
    		// setear acciones
    		$( '#btnPopupConfirmSI' ).unbind('click');
    		if ( functionSI != null ) {
    			$('#btnPopupConfirmSI').on('click', functionSI); // funcionSIIIII xD
    		}
    		
    		$( '#btnPopupConfirmNO' ).unbind('click');
    		if ( funcionNO != null ) {
    			$('#btnPopupConfirmNO').on('click', funcionNO);
    		}    
    		/*    		
    		if ( functionCerrar != null ) {
    			$( '#btnPopupConfirmCerrar' ).unbind('click');
    			$('#btnPopupConfirmCerrar').on('click', funcionNO);
    		}  
    		*/
    		// muestra el popup
    		$( '#msgPopupConfirmDiv' ).modal({ keyboard: false });	
    		
    	} else {
    		alert( 'Popup Confirm no esta importando' );
    	}
    	
    }

    function showConfirmationEmail( titulo, mensaje, functionSI, funcionNO, functionCerrar ) {
    	if ( $( '#msgPopupConfirmEmailDiv' ).length ) {

    		// setear contenidos
        	$( '#msgPopupConfirmEmailTitulo' ).html( titulo ? titulo : 'Confirmaci&oacute;n'  );
        	$( '#msgPopupConfirmEmailMensaje' ).html( mensaje ? mensaje : '&#191;Est&aacute; seguro que desea guardar la informaci&oacute;n ingresada?');
        	
    		// setear acciones
    		$( '#btnPopupConfirmEmailSI' ).unbind('click');
    		if ( functionSI != null ) {
    			$('#btnPopupConfirmEmailSI').on('click', functionSI); // funcionSIIIII xD
    		}
    		
    		$( '#btnPopupConfirmEmailNO' ).unbind('click');
    		if ( funcionNO != null ) {
    			$('#btnPopupConfirmEmailNO').on('click', funcionNO);
    		}    
    		/*    		
    		if ( functionCerrar != null ) {
    			$( '#btnPopupConfirmCerrar' ).unbind('click');
    			$('#btnPopupConfirmCerrar').on('click', funcionNO);
    		}  
    		*/
    		// muestra el popup
    		$( '#msgPopupConfirmEmailDiv' ).modal({ keyboard: false })	
    		
    	} else {
    		alert( 'Popup Confirm no esta importando' );
    	}
    }    
	
	function huboErrorJson( data ) {
		
		// si no viene data
		if ( data == null ) {
			showMensaje( 'Mensaje', 'Respuesta JSON no seteada');
			return true;
		}
		
		// si no viene estado
		if ( data.estado == null ) {
			showMensaje( 'Mensaje', 'Atributo estado de respuesta JSON no seteado');
			return true;
		}
		
		// si viene error de aplicacion
	    if ( data.estado != 'ok' ) {
	        return true;
	    }

		return false;
	}

	
	function estadoInputInicial( divID ) {
		
		ocultarMsgGeneralError();
		
		if ( $( divID + ' :input' ).hasClass('date-picker') || $( divID + ' :input' ).hasClass('clas_email') || $( divID + ' :input' ).hasClass('input_radio') ){
			$( divID + ' :input' ).parent().parent().find('span:last').html('');
			$( divID + ' :input' ).parent().parent().find('p:last').html('');
		} else {
			//$( divID + ' :input' ).find('span:last').html('');
			$( divID + ' :input' ).next().html('');
		}
		
		$( divID + ' :input' ).closest('.form-group').removeClass('has-error');
		$( divID + ' select' ).closest('.form-group').removeClass('has-error');
		$( divID + ' textarea' ).closest('.form-group').removeClass('has-error');

		return null;
    }
	
	function estadoInputInicialBuscarReqDoc( divID ) 
	{
		ocultarMsgGeneralError();
		
		if ( $( divID + ' :input' ).hasClass('date-picker') || $( divID + ' :input' ).hasClass('clas_email') ){
			$( divID + ' :input' ).parent().parent().find('span:last').html('');
			$( divID + ' :input' ).parent().parent().find('p:last').html('');
		} else {
			//$( divID + ' :input' ).find('span:last').html('');
			//$( divID + ' :input' ).next().html('');
		}
		
		$( divID + ' :input' ).closest('.form-group').removeClass('has-error');
		$( divID + ' select' ).closest('.form-group').removeClass('has-error');
		$( divID + ' textarea' ).closest('.form-group').removeClass('has-error');

		return null;
    }

    
	function mostrarMsgGeneralError( msgError ) {
		
		// copiar la plantilla a la instancia
		$( '#divMsgGeneralErrorInstance' ).html( $( '#divMsgGeneralError' ).html() );		
		
		// setear el mensaje en la plantilla
		$( '#spanMsgGeneralError' ).html( msgError == null? '' : msgError );
		
		// mostrar
		$( '#divMsgGeneralErrorInstance' ).show();
	}
	
	function mostrarMsgGeneralError3( msgError ) {
		console.log("llego error : " + msgError);
		// copiar la plantilla a la instancia
		$('#divMsgGeneralErrorInstance3').html( $( '#divMsgGeneralError' ).html() );		
		
		// setear el mensaje en la plantilla
		$( '#spanMsgGeneralError' ).html( msgError == null? '' : msgError );
		
		// mostrar
		$('#divMsgGeneralErrorInstance3').show();
	}


	function mostrarMsgGeneralError2( msgError) {
		console.log("llego error : " + msgError);

		// copiar la plantilla a la instancia
		$('#divMsgGeneralErrorInstance2').html( $( '#divMsgGeneralError' ).html() );		

		
		// setear el mensaje en la plantilla
		$( '#spanMsgGeneralError' ).html( msgError == null? '' : msgError );

		
		
		// mostrar
		$('#divMsgGeneralErrorInstance2').show();
	}

	
	function ocultarMsgGeneralError() {

		// copiar la plantilla a la instancia
		$( '#divMsgGeneralErrorInstance' ).html( $( '#divMsgGeneralError' ).html() );		
		
		// limpiar el mensaje en la plantilla
		$( '#spanMsgGeneralError' ).html( '' );
		
		// ocultar
		$( '#divMsgGeneralErrorInstance' ).hide();
	}
	
	function estadoInputError( divID, data, estadoRestore ) {		
		estadoInputErrorDiv( divID, data, estadoRestore );
	}
	
	
	function estadoInputErrorDiv( divID, data, estadoRestore ) {
		
		var msgError     = data.msg;
		var campoError   = data.dataJson.campoError;		
		
		// [CMIC] 19/03/2015
		var titulo = data.dataJson.titulo;
		var tipo = data.dataJson.tipo;
		
		// sino viene con campo poco se puede hacer
		if ( campoError == null ) return;
				
		// si el campo es un error general, mostrarlo como popup
		if ( campoError == 'general' ) {
			var titulo = titulo == null ? 'Mensaje' : titulo;
			showMensaje( titulo , msgError );
			return;
		}			
		
		var selInput = $( divID + ' input[name=' + campoError + ']' );
		var selSelec = $( divID + ' select[name=' + campoError + ']' );
		var selTextA = $( divID + ' textarea[name=' + campoError + ']' );
		
		if ( selInput.length ) {			
			if ( !$( divID + ' input[name=' + campoError + ']' ).hasClass('date-picker') ){
				selInput.focus();	
			}			
			
			if ( $( divID + ' input[name=' + campoError + ']' ).hasClass('date-picker') || $( divID + ' input[name=' + campoError + ']' ).hasClass('clas_email') ){
				selInput.parent().parent().find('span:last').html(msgError);
				selInput.parent().parent().find('p:last').html(msgError);
			}else if ( $( divID + ' input[name=' + campoError + ']' )[0].type  == 'file' ){
				selInput.parent().parent().find('span:last').html(msgError);
				selInput.parent().parent().find('p:last').html(msgError);
			}else{
				selInput.parent().find('span:last').html(msgError);				
			}
																						
			selInput.closest('.form-group').addClass('has-error');

			if ( !$( divID + ' input[name=' + campoError + ']' ).hasClass('date-picker') ){
				selInput.select();
				selInput.focus();			
			}			
		}
		
		if ( selSelec.length ) {
			
			selSelec.focus();
			selSelec.next().html( msgError );
			selSelec.closest('.form-group').addClass('has-error');
			selSelec.focus();
		}
		
		if ( selTextA.length ) {
			
			selTextA.focus();
			selTextA.next().html( msgError );
			selTextA.closest('.form-group').addClass('has-error');
			selTextA.focus();
		}

		// FIXME: con el estadoRestore reestablecer la estructura de datos
    }	
	
	function huboErrorValidacionJson( data ) {
		return data != null && data.estado == 'errorValidacion';
	} 	
    
	function handleErrorJson( data  ) {
		
		// si no viene data
		if ( data == null ) {
			showMensaje( 'Mensaje', 'Respuesta JSON no seteada');
			return true;
		}
		
		// si no viene estado
		if ( data.estado == null ) {
			showMensaje( 'Mensaje', 'Atributo estado de respuesta JSON no seteado');
			return true;
		}
		
		// si viene error de aplicacion
	    if ( data.estado != 'ok' ) {
	    	
	    	showMensaje( 'Mensaje', ( ' ' + data.msg  ) );
	    	
	        return true;
	    }

		return false;
	}
	
	function handleErrorJsonAjax( data  ) {
		
		// si no viene data
		if ( data == null ) {
			showMensaje( 'Mensaje', 'Respuesta JSON no seteada');
			return true;
		}
		
		// si no viene estado
		if ( data.estado == null ) {
			showMensaje( 'Mensaje', 'Atributo estado de respuesta JSON no seteado');
			return true;
		}
		
		// si viene error de aplicacion
	    if ( data.estado == 'error' ) {
	    	
	    	showMensaje( 'Mensaje', ( ' ' + data.msg  ) );
	    	
	    }else if ( data.estado == 'ok' ) {
	    	
	    	showMensaje( 'Mensaje', ( ' ' + data.msg  ) );
	    	
	    }

		return false;
	}
	
	function armarFormDataSinFiles( formID ) {
		
		// recorre todo el formulario y arma el FormData, pero sin considerar los bytes de los files.
		// para files, solo envia el nombre del fichero que se adjunto para que el validador lado servidor se mantenga
		
		if ( formID == null || formID == '' ) return;
		
		var formData = new FormData();
		var elem = document.getElementById( formID ).elements;
		
        for ( var i = 0; i < elem.length; i++ ) {
        	
        	// console.log( elem[i].type + '->' + elem[i].name + '->' + elem[i].value );

        	// si es checkbox, incluye el value solo si esta chequeado
        	// si es file, se adjunta solo el filename (no se envian los bytes del fichero)
        	if ( elem[i].type == 'checkbox' ) {
				formData.append( elem[i].name, elem[i].checked ? elem[i].value : '' );	
        	} else {
        		formData.append( elem[i].name, elem[i].value );	
        	}
        	
        } 
        
        return formData;
	}
	
	function appendGrid( gridID , gridName, formData ) {		
		// recorre todo el formulario y arma el FormData, pero sin considerar los bytes de los files.
		// para files, solo envia el nombre del fichero que se adjunto para que el validador lado servidor se mantenga		
		if ( gridID == null || gridID == '' ) return;		
		
		var JSONData = $(gridID).DataTable().rows().data();		
		var arrData = typeof JSONData !== 'object' ? JSON.parse(JSONData) : JSONData;
		
		var arrData1 = {};
		var listArrData = [];	
		
		for (var i = 0; i < arrData.length; i++) {	
			arrData1 = new Object();
			for (var index in arrData[i]) {
				arrData1[index] = arrData[i][index]; 	
	        }
			listArrData.push(arrData1);
		}
		
		var json = JSON.stringify(listArrData);
		        
		formData.append(gridName, json);     	
                 
        return formData;
   }
   
   function eventSubirArchivoAsincronoValidacion( inputControl, nameControl, urlUpload, successFunction, errorFunction, extensionValida ) {
	   eventSubirArchivoAsincronoValidacion( inputControl, nameControl, urlUpload, successFunction, errorFunction, extensionValida, null);
   }
   
	//****************VALIDACION DE VARIOS FORMATOS: JSQP******************************************************
	function eventSubirArchivoAsincronoValidacion( inputControl, nameControl, urlUpload, successFunction, errorFunction, extensionValida, idProceso ) {

		// NOTA: inputControl es obtenido de algun $( '' )
		inputControl.change(function(e) {
			
			if ( inputControl == null ) return;
			
			// limpiando el estilo
			cleanControlError( inputControl );

			// limpiando la barra de abajo
			$( '#' + nameControl + '-barra' ).html( '' );			
			
			var fileName = $( this ).val();
			
			if ( fileName == null || fileName == '' ) 
			{
				console.log( 'fileName es cadena vacia' );
			 	return;
			}
			
			// validaciones adicionales de extension
			if ( extensionValida != null ) {
				if ( fileName.indexOf( '.' ) < 0 ) 
				{
					handleUploadErrorJson(inputControl, nameControl, null );
					showMensaje( 'Mensaje', 'Archivo debe tener extensi\u00F3n');
				    return;
				}

				var ext = fileName.substr( (fileName.lastIndexOf('.') + 1 ) );
				var sw = true;
				//$.each(extensionValida, function(indice, valor){
					
				var j=0;	
				var mensaje='';
				
				for(var i=0; i<extensionValida.length; i++)
				{
					mensaje=mensaje.concat(extensionValida[i],'/');
					if(ext.toUpperCase()==extensionValida[i].toUpperCase())
					{
						j=j+1;
					}
				}
					
				if(j==0)
				{
					mensaje=mensaje.substring(0,mensaje.length-1);
					handleUploadErrorJson(inputControl, nameControl, null );
				    showMensaje( 'Mensaje', 'Archivo debe tener extensi\u00F3n ' + mensaje);
				    sw = false;
				    return;
				}
				
// 				if ( (ext.toUpperCase() != extensionValida[0].toUpperCase()) && (ext.toUpperCase() != extensionValida[1].toUpperCase())  ) {
// 					handleUploadErrorJson(inputControl, nameControl, null );
// 				    showMensaje( 'Mensaje', 'Archivo debe tener extensi\u00F3n ' + extensionValida[0] + ' \u00F3 ' + extensionValida[1]);
// 				    sw = false;
// 				    return;
// 				}
				
				
				//});
				if (!sw){
					return;
				}
			}
			 
		    var formData = new FormData();
		    formData.append( nameControl , this.files[0]);
			
			if (idProceso != null){
				formData.append( 'txt_hi_proceso' , idProceso);
			}
		    
		    $.ajax({
		    	url: urlUpload,
		    	cache: false,
		    	async: true,
		    	type: 'POST',
		        data: formData,
		        dataType : 'json',
		        mimeType: "multipart/form-data",		        
		        contentType: false,		        
		        processData: false,	
		        xhr: function() {
		        	
		            var xhr = $.ajaxSettings.xhr();
		            if (xhr.upload) {
		                xhr.upload.addEventListener('progress', function(evt) {
		                	
		                	if ( evt.lengthComputable ) {
			                    var percent = (evt.loaded / evt.total) * 100;
			                    
			                    var divBarra = $( '#' + nameControl + '-barra' );
			                    
			                    divBarra.html( $( '#divBarraUpload' ).html() );
			                    divBarra.find(".progress-bar").width(percent + "%");
		                	} 
		                	
		                }, false);
		            }
		            return xhr;
		        },
		        success: successFunction,
		        error: errorFunction
		    });
		    
		    e.preventDefault(); //Prevent Default action. 
// 		    e.unbind();
		});			
		
	}
	//******************************
	function eventSubirArchivoAsincrono( inputControl, nameControl, urlUpload, successFunction, errorFunction, extensionValida ) {
		eventSubirArchivoAsincrono( inputControl, nameControl, urlUpload, successFunction, errorFunction, extensionValida , null );	
	}
	
	function eventSubirArchivoAsincrono( inputControl, nameControl, urlUpload, successFunction, errorFunction, extensionValida , idProceso ) {

		// NOTA: inputControl es obtenido de algun $( '' )
		inputControl.change(function(e) {
			
			if ( inputControl == null ) return;
			
			// limpiando el estilo
			cleanControlError( inputControl );

			// limpiando la barra de abajo
			$( '#' + nameControl + '-barra' ).html( '' );			
			
			var fileName = $( this ).val();
			
			if ( fileName == null || fileName == '' ) {
				console.log( 'fileName es cadena vacia' );
			 	return;
			}
			
			// validaciones adicionales de extension
			if ( extensionValida != null ) {
			
				if ( fileName.indexOf( '.' ) < 0 ) {
					handleUploadErrorJson(inputControl, nameControl, null );
					showMensaje( 'Mensaje', 'Archivo debe tener extensi\u00F3n ' + extensionValida );
				    return;
				}

				var ext = fileName.substr( (fileName.lastIndexOf('.') + 1 ) );
				if ( ext.toUpperCase() != extensionValida.toUpperCase() ) {
					handleUploadErrorJson(inputControl, nameControl, null );
				    showMensaje( 'Mensaje', 'Archivo debe tener extensi\u00F3n ' + extensionValida );
				    return;
				}				
				
			}
			 
		    var formData = new FormData();
		    formData.append( nameControl , this.files[0]);
			
			if (idProceso != null){
				formData.append( 'txt_hi_proceso' , idProceso);
			}
								  
		    $.ajax({
		    	url: urlUpload,
		    	cache: false,
		    	async: true,
		    	type: 'POST',
		        data: formData,
		        dataType : 'json',
		        encoding:"UTF-8",
		        mimeType: "multipart/form-data",		        
		        contentType: false,		        
		        processData: false,	
		        xhr: function() {
		        	
		            var xhr = $.ajaxSettings.xhr();
		            if (xhr.upload) {
		                xhr.upload.addEventListener('progress', function(evt) {
		                	
		                	if ( evt.lengthComputable ) {
			                    var percent = (evt.loaded / evt.total) * 100;
			                    
			                    var divBarra = $( '#' + nameControl + '-barra' );
			                    
			                    divBarra.html( $( '#divBarraUpload' ).html() );
			                    divBarra.find(".progress-bar").width(percent + "%");
		                	} 
		                	
		                }, false);
		            }
		            return xhr;
		        },
		        success: successFunction,
		        error: errorFunction
		    });
		    
		    e.preventDefault(); //Prevent Default action. 
// 		    e.unbind();
		});			
		
	}
	
	function handleUploadErrorJson( inputControl, nameControl, data ) {
		if ( inputControl != null ) {
			cleanControlError( inputControl );
			uploadResetInputFile( inputControl );
		}
		$( '#' + nameControl + '-barra' ).html( $( '#divErrorUpload' ).html() );
	}

	function handleUploadError( inputControl, nameControl, data ) {
		if ( inputControl != null ) {
			cleanControlError( inputControl );
			uploadResetInputFile( inputControl );
		}
    	$( '#' + nameControl + '-barra' ).html( $( '#divErrorUpload' ).html() );
    	handleError( data ); 
	}
	
	function handleUploadSuccess( inputControl, nameControl, data ) {
		// NOTA: inputControl, data no se usan (por ahora)
		$( '#' + nameControl + '-barra' ).html( $( '#divExitoUpload' ).html() );
	}	
	
	function handleUploadSuccessExt( inputControl, nameControl, data ) {
		$( '#' + nameControl + '-barra' ).html( $( '#divExitoUploadExt' ).html() );
	}

	function uploadResetInputFile( inputControl ) {
		if ( inputControl != null ){
			inputControl.wrap('<form>').parent('form').trigger('reset');
			inputControl.unwrap();	
		}		
	}		
	
	function cleanControlError( inputControl ) {
		// limpiar estilo de error
		if ( inputControl != null ) {
			inputControl.next().html( '' );
			inputControl.closest('.form-group').removeClass('has-error');			
		}
	}
	function eventSelectOnTD( tableID, tipo ) {
		
		// seleccionar un input ( 'radio' | 'checkbox' segun tipo ) clickeando en todo el td
		$( tableID + ' tbody' ).on('click', 'td', function(e) {
			var input = $( this ).find( 'input:' + tipo );
			input.prop( 'checked', !input.prop( 'checked' ) );
        });

		$( tableID + ' input:radio' ).on('click', function(e) {
			e.stopPropagation();
        }); 
	 	
	}
	
	function eventSelectOnTR( tableID ) {
		
		// seleccionar un input clickeando en todo el tr
        $( tableID + ' tbody').on('click', 'tr', function() {
            var inputArray = $(this).find('td input');
            if (inputArray.length && inputArray[0] != null) {
				var checked =  $(inputArray[0]).prop('checked');
                $(inputArray[0]).prop('checked', !checked);
            }
        });		
	 	
	}	
	
	
	
	
	// inicializar una tabla pasandole su ID, el ID del boton exportar a XML.
	// parametros obligatorio: tableID, buttonID, showPagin, showSearch
	
	function initDGAjax( tableID, buttonID, showXLS, configColumnDefs, columns,  urlAjax)
	{
		initDGAjax( tableID, buttonID, showXLS, configColumnDefs, columns,  urlAjax , true , false)
	}
	
	function initDGAjax( tableID, buttonID, showXLS, configColumnDefs, columns,  urlAjax, swPaging, wsSearching) {

		var grillaObject = $( tableID ).DataTable({
			lengthMenu: [[5, 15, 25, 50, -1], [5, 15, 25, 50, "Todos"]],										
			processing: false,
	        serverSide: true,	        
	        ordering: true, 
			paging: swPaging == null ? true : swPaging,
			searching: false,
			info: true,			
			ajax: urlAjax,
			dom: 'Rlfrtip',
			language: {
				info:  "Registros: _START_ - _END_ de _TOTAL_ registros",
				infoEmpty: "Mostrando 0-0 de 0 entradas",
				emptyTable: 'No hay registros disponibles',
				lengthMenu: "_MENU_  registros por p&aacute;gina",
				paginate: {
					first:      "Primero",
					last:       "&Uacute;ltimo",
					next:       "Siguiente",
					previous:   "Anterior"
				},	
				search: "Buscar "
			},
			columnDefs: configColumnDefs,
			aoColumns: columns
		});
		
		if ( showXLS ) {		
			$( tableID + "_length").append('<div style="display:inline; float:right; text-align: right;"><a id="' + buttonID + '" href="#" title="Exportar a EXCEL" style="font-size: 24px;"><i style="color:#0B6138;" class="fa fa-file-excel-o"></i></a></div>');			
		}
		
		return grillaObject;
	}
	
	function initGrillaScrollExp( tableID, buttonID, showXLS, configColumnDefs, columns,  urlAjax, swPaging, wsSearching) {

		var grillaObject = $( tableID ).DataTable({
			lengthMenu: [[5, 15, 25, 50, -1], [5, 15, 25, 50, "Todos"]],										
			processing: false,
	        serverSide: true,	        
	        ordering: false,
	        "scrollY": 200,
	        "scrollCollapse": true,
	        paging: swPaging == null ? true : swPaging,
			searching: false,
			info: true,
			ajax: urlAjax,
			dom: 'Rlfrtip',
			language: {
				info:  "Registros: _START_ - _END_ de _TOTAL_ registros",
				infoEmpty: "Mostrando 0-0 de 0 entradas",
				emptyTable: 'No hay registros disponibles',
				lengthMenu: "_MENU_  registros por p&aacute;gina",
				paginate: {
					first:      "Primero",
					last:       "&Uacute;ltimo",
					next:       "Siguiente",
					previous:   "Anterior"
				},	
				search: "Buscar "
			},
			columnDefs: configColumnDefs,
			aoColumns: columns
		});
		
		if ( true ) {		
			$( tableID + "_length").append('<div style="display:inline; float:right; text-align: right;"><a id="' + 11 + '" href="#" title="Exportar a EXCEL" style="font-size: 24px;"><i style="color:#0B6138;" class="fa fa-file-excel-o"></i></a></div>');			
		}
		
		return grillaObject;
	}
	
	function initGrillaHistorial( tableID, buttonID, showXLS, configColumnDefs, columns,  urlAjax, swPaging, wsSearching) {

		var grillaObject = $( tableID ).DataTable({
			lengthMenu: [[5, 15, 25, 50, -1], [5, 15, 25, 50, "Todos"]],										
			processing: false,
	        serverSide: true,	        
	        ordering: true, 
			paging: swPaging == null ? true : swPaging,
			searching: false,
			info: true,			
			ajax: urlAjax,
			dom: 'Rlfrtip',
			language: {
				info:  "Registros: _START_ - _END_ de _TOTAL_ registros",
				infoEmpty: "Mostrando 0-0 de 0 entradas",
				emptyTable: 'No hay registros disponibles',
				lengthMenu: "_MENU_  registros por p&aacute;gina",
				paginate: {
					first:      "Primero",
					last:       "&Uacute;ltimo",
					next:       "Siguiente",
					previous:   "Anterior"
				},	
				search: "Buscar "
			},
			columnDefs: configColumnDefs,
			aoColumns: columns
		});
		
		if ( showXLS ) {		
			$( tableID + "_length").append('<div style="display:inline; float:right; text-align: right;"><a id="' + buttonID + '" href="#" title="Exportar a EXCEL" style="font-size: 24px;"><i style="color:#0B6138;" class="fa fa-file-excel-o"></i></a></div>');			
		}
		
		return grillaObject;
	}
	
	function initDGAjaxConScroll( tableID, buttonID, showXLS, configColumnDefs, columns,  urlAjax, swPaging, wsSearching) {

		var grillaObject = $( tableID ).DataTable({
			lengthMenu: [[5, 15, 25, 50, -1], [5, 15, 25, 50, "Todos"]],										
			processing: false,
	        serverSide: true,	        
	        ordering: false,     			
			paging: swPaging == null ? true : swPaging,
			searching: false,
			"scrollY": 200,
			"scrollCollapse": true,
			info: true,			
			ajax: urlAjax,
			dom: 'Rlfrtip',
			language: {
				info:  "Registros: _START_ - _END_ de _TOTAL_ registros",
				infoEmpty: "Mostrando 0-0 de 0 entradas",
				emptyTable: 'No hay registros disponibles',
				lengthMenu: "_MENU_  registros por p&aacute;gina",
				paginate: {
					first:      "Primero",
					last:       "&Uacute;ltimo",
					next:       "Siguiente",
					previous:   "Anterior"
				},	
				search: "Buscar "
			},
			columnDefs: configColumnDefs,
			aoColumns: columns
		});
		
		if ( showXLS ) {		
			$( tableID + "_length").append('<div style="display:inline; float:right; text-align: right;"><a id="' + buttonID + '" href="#" title="Exportar a EXCEL" style="font-size: 24px;"><i style="color:#0B6138;" class="fa fa-file-excel-o"></i></a></div>');			
		}
		
		return grillaObject;
	}
	
	function initGrillaScroll( tableID, configColumnDefs, columns, urlAjax) {

		var grillaObject = $( tableID ).dataTable({
			lengthMenu: [[5, 15, 25, 50, -1], [5, 15, 25, 50, "Todos"]],										
			processing: false,
	        serverSide: true,	        
	        ordering: false,  
			"scrollY": 200,
			"scrollCollapse": true,   			
			paging: false,
			searching: false,
			info: false,			
			ajax: urlAjax,
			dom: 'Rlfrtip',
			language: {
				info:  "Registros: _START_ - _END_ de _TOTAL_ registros",
				infoEmpty: "Mostrando 0-0 de 0 entradas",
				emptyTable: 'No hay registros disponibles',
				lengthMenu: "_MENU_  registros por p&aacute;gina",
				paginate: {
					first:      "Primero",
					last:       "&Uacute;ltimo",
					next:       "Siguiente",
					previous:   "Anterior"
				},	
				search: "Buscar "
			},
			columnDefs: configColumnDefs,
			aoColumns: columns
		});
		

				
		return grillaObject;
	}
	
	function initGrillaScrollFiltro( tableID, configColumnDefs, columns, urlAjax) {

		var grillaObject = $( tableID ).DataTable({
			lengthMenu: [[5, 15, 25, 50, -1], [5, 15, 25, 50, "Todos"]],										
			processing: true,
	        serverSide: false,	        
	        ordering: false,  
			"scrollY": 200,
			"scrollCollapse": true,   			
			paging: false,
			searching: true,
			info: false,		
			ajax: urlAjax,
			language: {
				info:  "Registros: _START_ - _END_ de _TOTAL_ registros",
				infoEmpty: "Mostrando 0-0 de 0 entradas",
				emptyTable: 'No hay registros disponibles',
				lengthMenu: "_MENU_  registros por p&aacute;gina",
				paginate: {
					first:      "Primero",
					last:       "&Uacute;ltimo",
					next:       "Siguiente",
					previous:   "Anterior"
				},	
				search: "Buscar "
			},
			columnDefs: configColumnDefs,
			aoColumns: columns
		});
		

				
		return grillaObject;
	}
	
	function initGrillaScrollExp( tableID, configColumnDefs, columns, urlAjax, showXLS, buttonID) {

		var grillaObject = $( tableID ).dataTable({
			lengthMenu: [[5, 15, 25, 50, -1], [5, 15, 25, 50, "Todos"]],										
			processing: false,
	        serverSide: true,	        
	        ordering: false,  
			"scrollY": 200,
			"scrollCollapse": true,   			
			paging: true,
			searching: false,
			info: false,			
			ajax: urlAjax,
			dom: 'Rlfrtip',
			language: {
				info:  "Registros: _START_ - _END_ de _TOTAL_ registros",
				infoEmpty: "Mostrando 0-0 de 0 entradas",
				emptyTable: 'No hay registros disponibles',
				lengthMenu: "_MENU_  registros por p&aacute;gina",
				paginate: {
					first:      "Primero",
					last:       "&Uacute;ltimo",
					next:       "Siguiente",
					previous:   "Anterior"
				},	
				search: "Buscar "
			},
			columnDefs: configColumnDefs,
			aoColumns: columns
		});
		
		if( showXLS ) {		
			$( tableID + "_length").append('<div style="display:inline; float:right; text-align: right;"><a id="' + buttonID + '" href="#" title="Exportar a EXCEL" style="font-size: 24px;"><i style="color:#0B6138;" class="fa fa-file-excel-o"></i></a></div>');			
		}
				
		return grillaObject;
	}

	function initDGSimpleAjaxSinScroll( tableID, configColumnDefs, columns, urlAjax) {

		var grillaObject = $( tableID ).dataTable({
			lengthMenu: [[5, 15, 25, 50, -1], [5, 15, 25, 50, "Todos"]],										
			processing: false,
	        serverSide: true,
	        "bDestroy": true,
	        ordering: false,     			
			paging: false,
			searching: false,
			info: false,			
			ajax: urlAjax,
			dom: 'Rlfrtip',
			language: {
				info:  "Registros: _START_ - _END_ de _TOTAL_ registros",
				infoEmpty: "Mostrando 0-0 de 0 entradas",
				emptyTable: 'No hay registros disponibles',
				lengthMenu: "_MENU_  registros por p&aacute;gina",
				paginate: {
					first:      "Primero",
					last:       "&Uacute;ltimo",
					next:       "Siguiente",
					previous:   "Anterior"
				},	
				search: "Buscar "
			},
			columnDefs: configColumnDefs,
			aoColumns: columns
		});
				
		return grillaObject;
	}
	
	function initDGSimpleSinScroll( tableID ) {

		var grillaObject = $( tableID ).dataTable({
			lengthMenu: [[5, 15, 25, 50, -1], [5, 15, 25, 50, "Todos"]],										
			processing: false,
	        serverSide: true,	        
	        ordering: false,     			
			paging: false,
			searching: false,
			info: false,			
			dom: 'Rlfrtip',
			language: {
				info:  "Registros: _START_ - _END_ de _TOTAL_ registros",
				infoEmpty: "Mostrando 0-0 de 0 entradas",
				emptyTable: 'No hay registros disponibles',
				lengthMenu: "_MENU_  registros por p&aacute;gina",
				paginate: {
					first:      "Primero",
					last:       "&Uacute;ltimo",
					next:       "Siguiente",
					previous:   "Anterior"
				},	
				search: "Buscar "
			}
		});
				
		return grillaObject;
	}
	
	function initDGSimpleAjax( tableID, configColumnDefs, columns, urlAjax) {

		var grillaObject = $( tableID ).dataTable({
			lengthMenu: [[5, 15, 25, 50, -1], [5, 15, 25, 50, "Todos"]],										
			processing: false,
	        serverSide: true,	        
	        ordering: false,     			
			paging: false,
			searching: false,
			"scrollY": 150,
			"scrollCollapse": true,
			info: false,			
			ajax: urlAjax,
			dom: 'Rlfrtip',
			language: {
				info:  "Registros: _START_ - _END_ de _TOTAL_ registros",
				infoEmpty: "Mostrando 0-0 de 0 entradas",
				emptyTable: 'No hay registros disponibles',
				lengthMenu: "_MENU_  registros por p&aacute;gina",
				paginate: {
					first:      "Primero",
					last:       "&Uacute;ltimo",
					next:       "Siguiente",
					previous:   "Anterior"
				},	
				search: "Buscar "
			},
			columnDefs: configColumnDefs,
			aoColumns: columns
		});
				
		return grillaObject;
	}
	
	function initDGSimpleAjaxForm( tableID ) {

		var grillaObject = $( tableID ).dataTable({										
// 			processing: false,
// 	        serverSide: true,
	        ordering: true,     			
			paging: false,
			searching: false,
			"scrollY": 200,
			"scrollCollapse": true,
			info: false,			
			dom: 'Rlfrtip',
			language: {
				info:  "Registros: _START_ - _END_ de _TOTAL_ registros",
				infoEmpty: "Mostrando 0-0 de 0 entradas",
				emptyTable: 'No hay registros disponibles',
				lengthMenu: "_MENU_  registros por p&aacute;gina",
				paginate: {
					first:      "Primero",
					last:       "&Uacute;ltimo",
					next:       "Siguiente",
					previous:   "Anterior"
				},	
				search: "Buscar "
			}
		});
		
		return grillaObject;
	}
	
	function initDG( tableID, buttonID, showPaginar, showSearch, showXLS, configColumnDefs, columns ) {

		var grillaObject = $( tableID ).DataTable({
			lengthMenu: [[5, 15, 25, 50, -1], [5, 15, 25, 50, "Todos"]],
			paging: showPaginar ? true : false,
			searching: showSearch ? true : false,
			dom: 'Rlfrtip', 
			language: {
				info:  "Registros: _START_ - _END_ de _TOTAL_ registros",
				infoEmpty: "Mostrando 0-0 de 0 entradas",
				emptyTable: 'No hay registros disponibles',
				lengthMenu: "_MENU_  registros por p&aacute;gina",
				paginate: {
					first:      "Primero",
					last:       "&Uacute;ltimo",
					next:       "Siguiente",
					previous:   "Anterior"
				},	
				search: "Buscar "
			},
			columnDefs: configColumnDefs,
			aoColumns: columns
		});
		
		if ( showXLS ) {		
			$( tableID + "_length").append('<div style="display:inline; float:right; text-align: right;"><a id="' + buttonID + '" href="#" title="Exportar a EXCEL" style="font-size: 24px;"><i style="color:#0B6138;" class="fa fa-file-excel-o"></i></a></div>');			
		}
		
		return grillaObject;
	}
	
	function isEnter(e){		
		return $.inArray(e.which, [13]) !== -1;		
	}
	
	function isDNI(e){		
		if (	$.inArray(e.which, [8, 9, 27, 138, 9, 13, 27, 32, 33, 34, 35, 36, 37, 38, 39, 40, 46,96, 97, 98, 99, 100, 101, 102, 103, 104, 105]) !== -1 
				 || (e.which == 65 && e.ctrlKey === true)				 			                 	    	
		){			
			return;
		}
		
		var vsExprReg = /^\d$/;				
		var text = String.fromCharCode(e.which);		
        if (!vsExprReg.test(text)){
        	e.preventDefault();		        	
    	}        
	}
	
	function isNotDNI(e){				
		if (	$.inArray(e.which, [8, 9, 27, 13, 110, 190, 241, 209, 8, 9, 13, 27, 32, 33, 34, 35, 36, 37, 38, 39, 40, 46,96, 97, 98, 99, 100, 101, 102, 103, 104, 105]) !== -1 
				 || (e.which == 65 && e.ctrlKey === true)				 			                 	    	
			){				
				return;
			}
								
		var vsExprReg = /[A-Za-z0-9]/;		
		var text =  String.fromCharCode(e.which);			
       if (!vsExprReg.test(text)){
       	e.preventDefault();		        	
       } 	
	}
	
	/*
	// [BIT] CMIC 09/11/2015
	function disabledDNI(){
		$(document).ready(function(){			
			$(".disabledDNI").attr('disabled',true);
			$(".disabledDNI").val(1);
		}
	}
	
	$(document).on('ready',function(){
		disabledDNI();
	});	
	*/
	
	function teclas(){
		$(document).ready(function(){
			
			$(".isDNI").on('keypress, keydown', function (e) {
							
				if (	$.inArray(e.which, [8, 9, 13, 27, 32, 33, 34, 35, 36, 37, 38, 39, 40, 46,96, 97, 98, 99, 100, 101, 102, 103, 104, 105]) !== -1 
						 || (e.which == 65 && e.ctrlKey === true)						 			                 	    	
				){
					return;
				}
				
				var vsExprReg = /^\d$/;	
				var text = String.fromCharCode(e.which);
		        if (!vsExprReg.test(text)){
		        	e.preventDefault();		        	
		    	}
		    });
			
			$(".isNotDNI").on('keypress, keydown', function (e) {
							
				if (	$.inArray(e.which, [8, 9, 27, 13, 110, 190, 241, 209, 8, 9, 13, 27, 32, 33, 34, 35, 36, 37, 38, 39, 40, 46, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105]) !== -1 
						 || (e.which == 65 && e.ctrlKey === true)						 			                 	    	
				){
					return;
				}
				
				var vsExprReg = /[A-Za-z0-9]/;					
				var text = String.fromCharCode(e.which);
		        if (!vsExprReg.test(text)){
		        	e.preventDefault();		        	
		    	}
		    });
			
			$(".isNumber").on('keypress, keydown', function (e) {
							
				if (	$.inArray(e.which, [8, 9, 13, 27, 32, 33, 34, 35, 36, 37, 38, 39, 40, 46, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105]) !== -1 
						 || (e.which == 65 && e.ctrlKey === true)						 			                 	    	
				){
					return;
				}
				
				var vsExprReg = /^\d$/;				
				var text = String.fromCharCode(e.which);
		        if (!vsExprReg.test(text)){
		        	e.preventDefault();		        	
		    	}
		    });
			
			$(".isNumberFloat").on('keypress, keydown', function (e) {
				if (	$.inArray(e.which, [8, 9, 13, 27, 32, 33, 34, 35, 36, 37, 38, 39, 40, 46, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105]) !== -1 
					 || (e.which == 65 && e.ctrlKey === true)					 			                 	    	
				){
					return;
				}

				var vsExprReg = /^\d$/;					
				var text = String.fromCharCode(e.which);
		        if (!vsExprReg.test(text)){
		        	e.preventDefault();		        	
		        }  
		    });
			
			$(".isAlfaNum").on('keypress, keydown', function (e) {							
				if (	$.inArray(e.which, [8, 9, 13, 27, 32, 33, 34, 35, 36, 37, 38, 39, 40, 44, 45, 46, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 110, 190, 192, 241, 209, 192]) !== -1 
						 || (e.which == 65 && e.ctrlKey === true)						 			                 	    	
					){
						return;
					}
										
				var vsExprReg = /[A-Za-z0-9]/;				
				var text = String.fromCharCode(e.which);
		        if (!vsExprReg.test(text)){
		        	e.preventDefault();		        	
		        } 		            		           
		        	
			});
			
			$(".isAlfaNumSpace").on('keypress, keydown', function (e) {
				
				if (	$.inArray(e.which, [8, 9, 13, 27, 32, 33, 34, 35, 36, 37, 38, 39, 40, 44, 45, 46, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 110, 190, 241, 209, 192]) !== -1 
						 || (e.which == 65 && e.ctrlKey === true)						 			                 	    	
					){
						return;
					}
										
				var vsExprReg = /[A-Za-z0-9]/;				
				var text = String.fromCharCode(e.which);
		        if (!vsExprReg.test(text)){
		        	e.preventDefault();		        	
		        } 		            		           
		        	
			});
			
			$(".isAlfa").on('keypress, keydown', function (e) {
				 
				if (	$.inArray(e.which, [8, 9, 13, 27, 32, 33, 34, 35, 36, 37, 38, 39, 40, 46, 241, 209, 192]) !== -1 
						 || (e.which == 65 && e.ctrlKey == true)
						 || (e.which >= 35 && e.which <= 39)	
						 || (e.which >= 96 && e.which <= 111) // Bloq numerico
				){
					return;
				}
				
				var vsExprReg = /[A-Za-z]/;	
				
				var text = String.fromCharCode(e.which);
		        if (!vsExprReg.test(text)){
		        	e.preventDefault();		        	
		        }
					
			});
			
			$(".isFono").on('keypress, keydown', function (e) {
				
				if (	$.inArray(e.which, [32, 33, 34, 35, 36, 37, 38, 39, 40, 46, 42, 35, 47, 45, 44, 46, 8, 9, 27, 13, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 110, 190]) !== -1 
						 || (e.which == 65 && e.ctrlKey === true)
						 || (e.which >= 35 && e.which <= 39)			                 	    		
					){
						return;
					}
										
				var vsExprReg = /[A-Za-z0-9_]/;				
				var text = String.fromCharCode(e.which);
		        if (!vsExprReg.test(text)){
		        	e.preventDefault();		        	
		        } 		            		           
		        	
			});
			
			$(".noInject").on('blur', function () {
				var objecto = $(this);
				var cadenaAnalizar = $(this).val();																		
				var vsExprReg = /^['<>@%]+$/;									
				
				for (var i = 0; i< cadenaAnalizar.length; i++) {
					var caracter = cadenaAnalizar.charAt(i);
					if (vsExprReg.test(caracter)){
						showMensaje( 'Mensaje', 'El texto contiene caracteres no permitidos', function(){
							objecto.val('');
						});
					}
				}            		           		        	
			});
			
			$(".isFonoExt").on('keypress', function (e) {
				
				if ( $.inArray(e.which, [8, 9, 13, 27, 32, 40, 41, 45, 189]) !== -1 
						 || (e.which == 65 && e.ctrlKey === true))
				{
					return;
				}
										
				var vsExprReg = /^(?=.*[0-9])[- +()0-9]+$/;
				var text = String.fromCharCode(e.which);				
		        if (!vsExprReg.test(text)){
		        	e.preventDefault();		        	
		        } 		            		           
		        	
			});
			
			$(".isPhoneNumber").on('keypress, keydown', function (e) {
				// Allow: backspace, delete, tab, escape, and enter
		        if (e.keyCode == 46 || e.keyCode == 8 || e.keyCode == 9 || e.keyCode == 27 || e.keyCode == 13 ||
		        // Allow: Ctrl+A
		        (e.keyCode == 65 && e.ctrlKey === true) ||
		        // Allow: home, end, left, right
		        (e.keyCode >= 35 && e.keyCode <= 39) ||
		        // Minus
		        e.keyCode == 189) {
		            // let it happen, don't do anything
		            return;
		        }
// 		        else {
//                     // If it's not a number stop the keypress
//                     if (e.shiftKey || 
//                     		(e.keyCode < 48 || e.keyCode > 57) && 
//                     		(e.keyCode < 96 || e.keyCode > 105 )) {
//                         e.preventDefault(); 
//                     }   
//                 }
				
//  				var vsExprReg = /[0-9 -]/;
 				var vsExprReg = /^(?=.*[0-9])[- +()0-9]+$/;
				var text = String.fromCharCode(e.which);
		        if (!vsExprReg.test(text)){
		        	e.preventDefault();		        	
		        } 		            		           
		        	
			});
			
			
		});		
	}
	
	function JSONToCSVConvertor(JSONData, nombreArchivo) {
        var arrData = typeof JSONData !== 'object' ? JSON.parse(JSONData) : JSONData;
        var CSV = '';
        
        var row = "<table border='1'><tr>";
        for (var index in arrData[0]) {
            row += '<td>' + index + '</td>';
        }
        row += '</tr>';
        CSV += row + '\r\n';
        for (var i = 0; i < arrData.length; i++) {
            var row = "<tr>";
            for (var index in arrData[i]) {
                row += '<td>' + arrData[i][index] + '</td>';
            }
            row += '</tr>';

            CSV += row + '\r\n';
        }
        row += '</table>';        
        CSV += row + '\r\n'
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.indexOf('firefox') !== -1) {
            ua = 'firefox';
        } else {
            if (ua.indexOf('chrome') !== -1) {
                ua = 'chrome';
            } else {//ie
                ua = 'ie';
            }
        }

        if (ua !== 'ie') {
            if (CSV === '') {
                console.debug("datos invalidos");
                return;
            }
            var uri = 'data:application/vnd.ms-excel,' + escape(CSV);
            var link = document.createElement("a");
            link.href = uri;
            link.style = "visibility:hidden";
            link.download = nombreArchivo + ".XLS";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            var blobObject = new Blob([CSV]);
            window.navigator.msSaveBlob(blobObject, 'msSaveBlob_testFile.xls'); // The user only has the option of clicking the Save button.
        }
    }
		
	function initFecha() {
		// CONFIGURAMOS EL JQUERY UI DATAPICKER ESPAÑOL																						
		$(".div-date-picker").each( function( key, value ) {
											
			var elements = $(value).children();
								
			var label = elements[0]; // LABEL
			var input = elements[1]; // INPUT
			var span  = elements[2]; // SPAN
			
			
			
			var div = $('<div/>', {
			    'class' : 'input-group',
			});
						
			$(input).toggleClass('date-picker');
			$(input).attr('id', input.name);
			
			var labelDate = $("<label/>", {
				'for': input.id,
			    'class' : 'input-group-addon btn',
			}).append( $('<span/>' , {
				'class' : 'glyphicon glyphicon-calendar'
			}));
			
			div.append( input );
			div.append( labelDate );
			
			var textLabel = $(label).html();
									
			$(value).html('');
			$(value).append('<label class="control-label">' + textLabel + '</label>');
			$(value).append(div)
			$(value).append(span)
			
		});
		
		$(".date-picker").attr('placeholder', 'dd/mm/aaaa');
		$(".date-picker").mask("99/99/9999",{placeholder:'dd/mm/aaaa'});
		$(".date-picker").datepicker();			
	}	
	
	function initHora() {
		// CONFIGURAMOS EL JQUERY UI DATAPICKER ESPAÑOL																										
		$(".time-picker").attr('placeholder', 'hh:mm');
		$(".time-picker").mask("99:99",{placeholder:'hh:mm'});		
	}
	
	function extraerDataGrillaAjax( url, tablaId, params ){

		var paramsBuscar = params;
		var dataJsonP = null;

		var oTable = $( tablaId ).dataTable();						
		var p_nColum = $( tablaId ).DataTable().order()[0][0] == 0 ? 1 : $( tablaId ).DataTable().order()[0][0];
		var draw = 1;
		var p_vDir = $( tablaId ).DataTable().order()[0][1];			
		var length = -1;
		var start = 0;
					
		paramsBuscar += '&length='+length+'&p_vDir='+p_vDir+'&p_nColum='+p_nColum+'&draw='+draw+'&start='+start;
		var vurl = url+'&'+paramsBuscar;
		
		$.ajax({
            async:false, 
            cache:false,
            dataType:"JSON", 
            type: 'GET',   
            url: vurl,  
            success:  function(respuesta){
            	dataJsonP = respuesta.data;
            },
            beforeSend:function(){},
            error:function(objXMLHttpRequest){}
        });
		
		return dataJsonP;
	}
	
	function extraerDataGrillas( dataJsonP, arrayColumnsIgnorar, sw ) { 
    	
    	var dataJson = dataJsonP;
    	
    	// validar que haya data para exportar
        if (dataJson == null || dataJson == '' || dataJson.length == 0) {
            return null;
        }
        // Modificado por BIT - Miguel Illesca    	       
		var data = [];		 					
		var dataFila = new Object(); 
// 		var col = 0;
		var ignorarCol = false;
		
        for (var i = 0; i < dataJson.length; i++) {
            
        	dataFila = new Object();
        	col = 0;
        	
            for (var j in dataJson[i]) {
            	
            	// bloque para ignorar columnas (como links, radio buttons, etc)
            	ignorarCol = false;
            	if ( arrayColumnsIgnorar != null && arrayColumnsIgnorar.length > 0 ) {

            		for (var indexIgnorar in arrayColumnsIgnorar) {

                    	if ( j == arrayColumnsIgnorar[indexIgnorar]) {
                    		ignorarCol = true;
                    		break;
                    	}           
                    	
            		}
            		
            	}
            	
            	// si bandera ignorar es true continuar con la siguiente columna j
            	if ( ignorarCol ) continue;
            	
//             	dataFila[ 'col' + col ] =  dataJson[i][j];
				dataFila[ 'col' + j ] =  dataJson[i][j];
            	
            	col++;
            	
            }
            
            data[i] = dataFila;

        }
        
        var result = {
        	filas: (dataJson == null || dataJson.length == null? 0 : dataJson.length),
        	columnas: ( col == null? 0 : col ),
        	data: data,        	
        };
        
        return result;
    }
	
	/*******JSQP : Metodo que recupera la data despues de que se filtro la grilla**************************/
	function extraerDataGrillaBusqueda(tableID,arrayColumnsIgnorar)
	{
	  var dataJson = $(tableID).DataTable().rows({ search:'applied'}).data();	
	// validar que haya data para exportar
      if (dataJson == null || dataJson == '' || dataJson.length == 0) {
          return null;
      }
      // Modificado por BIT - Miguel Illesca
  	var info = $( tableID ).DataTable().page.info();        
		var data = [];
		var pagina = (info.page+1) + '/' + info.pages; 						
		var dataFila = new Object();
//		var col = 0;
		var ignorarCol = false;
		
      for (var i = 0; i < dataJson.length; i++) {
          
      	dataFila = new Object();
      	col = 0;
      	
          for (var j in dataJson[i]) {
          	
          	// bloque para ignorar columnas (como links, radio buttons, etc)
          	ignorarCol = false;
          	if ( arrayColumnsIgnorar != null && arrayColumnsIgnorar.length > 0 ) {

          		for (var indexIgnorar in arrayColumnsIgnorar) {

                  	if ( j == arrayColumnsIgnorar[indexIgnorar]) {
                  		ignorarCol = true;
                  		break;
                  	}           
                  	
          		}
          		
          	}
          	
          	// si bandera ignorar es true continuar con la siguiente columna j
          	if ( ignorarCol ) continue;
          	
//           	dataFila[ 'col' + col ] =  dataJson[i][j];
				dataFila[ 'col' + j ] =  dataJson[i][j];
          	
          	col++;
          	
          }
          
          data[i] = dataFila;

      }

      var cabecerasArray = new Array(); 

      $.each($(tableID + ' thead tr th'), function(e, i) { 
      	cabecerasArray[e] = $(i).text();
      });
      
      var result = {
      	filas: (dataJson == null || dataJson.length == null? 0 : dataJson.length),
      	columnas: ( col == null? 0 : col ),
      	data: data,
      	pagina: pagina,
      	cabeceras: cabecerasArray
      };
      
      return result;
	}
	/****************/
	
	function extraerDataGrilla( tableID, arrayColumnsIgnorar ) {
    	
    	var dataJson = $( tableID ).DataTable().rows().data();
    	
    	// validar que haya data para exportar
        if (dataJson == null || dataJson == '' || dataJson.length == 0) {
            return null;
        }
        // Modificado por BIT - Miguel Illesca
    	var info = $( tableID ).DataTable().page.info();        
		var data = [];
		var pagina = (info.page+1) + '/' + info.pages; 						
		var dataFila = new Object();
// 		var col = 0;
		var ignorarCol = false;
		
        for (var i = 0; i < dataJson.length; i++) {
            
        	dataFila = new Object();
        	col = 0;
        	
            for (var j in dataJson[i]) {
            	
            	// bloque para ignorar columnas (como links, radio buttons, etc)
            	ignorarCol = false;
            	if ( arrayColumnsIgnorar != null && arrayColumnsIgnorar.length > 0 ) {

            		for (var indexIgnorar in arrayColumnsIgnorar) {

                    	if ( j == arrayColumnsIgnorar[indexIgnorar]) {
                    		ignorarCol = true;
                    		break;
                    	}           
                    	
            		}
            		
            	}
            	
            	// si bandera ignorar es true continuar con la siguiente columna j
            	if ( ignorarCol ) continue;
            	
//             	dataFila[ 'col' + col ] =  dataJson[i][j];
				dataFila[ 'col' + j ] =  dataJson[i][j];
            	
            	col++;
            	
            }
            
            data[i] = dataFila;

        }
        
        var result = {
        	filas: (dataJson == null || dataJson.length == null? 0 : dataJson.length),
        	columnas: ( col == null? 0 : col ),
        	data: data,
        	pagina: pagina
        };
        
        return result;
    }	
	
	function extraerDataGrillaAjax( url, tablaId, params ){

		var paramsBuscar = params;
		var dataJsonP = null;

		var oTable = $( tablaId ).dataTable();						
		var p_nColum = $( tablaId ).DataTable().order()[0][0] == 0 ? 1 : $( tablaId ).DataTable().order()[0][0];
		var draw = 1;
		var p_vDir = $( tablaId ).DataTable().order()[0][1];			
		var length = -1;
		var start = 0;
					
		paramsBuscar += '&length='+length+'&p_vDir='+p_vDir+'&p_nColum='+p_nColum+'&draw='+draw+'&start='+start;
		var vurl = url+'&'+paramsBuscar;
		
		$.ajax({
            async:false, 
            cache:false,
            dataType:"JSON", 
            type: 'GET',   
            url: vurl,  
            success:  function(respuesta){
            	dataJsonP = respuesta.data;
            },
            beforeSend:function(){},
            error:function(objXMLHttpRequest){}
        });
		return dataJsonP;
	}	
	
	var validateForm = function validateForm(form){
		this._form = form;
    	this.swValidar = true;
    	this.data = {
    		estado:'errorValidacion',
    		msg:'',
    		dataJson: {
    			msgError:'',
    			campoError:''
    		}
    	};        	    	
    	this._getInput = function(name){        						        
			return $("input[name='" + name +"']");
		};
    	this._getObject = function(input){        		
			var valor = '';
			if (input.type == FORM_TYPE.select ) {
				valor = $("select[name='"+ input.name +"']");
			} else if (input.type == FORM_TYPE.grid ){
				var name = input.name.replace( /_/g , '-');				
				valor = $('#' + name);					
			} else if ( input.type == FORM_TYPE.input ) {
				valor = $("input[name='" + input.name +"']");					
			}  else if ( input.type == FORM_TYPE.textarea){
				valor = $("textarea[name='" + input.name +"']");
			}        		
			return valor;
		};
		this._getValue = function(input){        		
			var valor = '';
			if (input.type == FORM_TYPE.select ) {
				valor = $("select[name='"+ input.name +"']").val();  			
			} else if ( input.type == FORM_TYPE.input ) {
				valor = $("input[name='" + input.name +"']").val();					
			} else if ( input.type == FORM_TYPE.textarea){
				valor = $("textarea[name='" + input.name +"']").val();
			}        		
			return valor;
		};
		this._rangeDate = function(fdIni, fdFin){
			
			var fechaInicio = $.trim(fdIni.val());
			var fechaFin = $.trim(fdFin.val());
			
			if ( fechaInicio.length == 0 || fechaFin.length == 0) return true;
			                    
			fechaInicio = fechaInicio.split('/');
			
			var ini_dia  = parseInt( fechaInicio[0] );
			var ini_mes  = parseInt( fechaInicio[1] ) - 1;
			var ini_anio = parseInt( fechaInicio[2] );
			
			fechaInicio = new Date();
			fechaInicio.setFullYear(ini_anio, ini_mes, ini_dia);
			
			fechaFin = fechaFin.split('/');
			
			var fin_dia  = parseInt( fechaFin[0] );
			var fin_mes  = parseInt( fechaFin[1] ) - 1;
			var fin_anio = parseInt( fechaFin[2] );

			fechaFin = new Date();
			fechaFin.setFullYear(fin_anio, fin_mes, fin_dia);
			
			return this.swValidar = !(fechaInicio > fechaFin);
		};
		this._valueDiferent = function(pais, peru, dni, documento){
			
			var input_valor = $.trim(pais.val());		
			var input_documento = $.trim(documento.val());
			
			return !(input_valor == peru && dni != input_documento );			 			
		};
		this._rangeDateMax = function(fdIni, fdFin){
			
			var fechaInicio = $.trim(fdIni.val());
			var fechaFin = $.trim(fdFin.val());
			
			if ( fechaInicio.length == 0 || fechaFin.length == 0) return true;
			                    
			fechaInicio = fechaInicio.split('/');
			
			var ini_dia  = parseInt( fechaInicio[0] );
			var ini_mes  = parseInt( fechaInicio[1] ) - 1;
			var ini_anio = parseInt( fechaInicio[2] );
			
			fechaInicio = new Date();
			fechaInicio.setFullYear(ini_anio, ini_mes, ini_dia);
			
			fechaFin = fechaFin.split('/');
			
			var fin_dia  = parseInt( fechaFin[0] );
			var fin_mes  = parseInt( fechaFin[1] ) - 1;
			var fin_anio = parseInt( fechaFin[2] );

			fechaFin = new Date();
			fechaFin.setFullYear(fin_anio, fin_mes, fin_dia);
			
			return this.swValidar = (fechaInicio < fechaFin);
		};
		this._rangeNow = function(fdFecha){
			
			var fechaInicio = $.trim(fdFecha.val());
			var fechaFin = new Date();
			
			if ( fechaInicio.length == 0 ) return true;
			                    
			fechaInicio = fechaInicio.split('/');
			
			var dia  = parseInt( fechaInicio[0] );
			var mes  = parseInt( fechaInicio[1] ) - 1;
			var anio = parseInt( fechaInicio[2] );
						                    
			fechaInicio = new Date();
			fechaInicio.setFullYear(anio, mes, dia);
									 
			return this.swValidar = !(fechaInicio > fechaFin);
		};
		this._minNow = function(fdFecha){
			
			var fechaInicio = $.trim(fdFecha.val());
			var fechaFin = new Date();
			
			if ( fechaInicio.length == 0 ) return true;
			                    
			fechaInicio = fechaInicio.split('/');	 
			
			var dia  = parseInt( fechaInicio[0] );
			var mes  = parseInt( fechaInicio[1] ) - 1;
			var anio = parseInt( fechaInicio[2] );
														
			fechaInicio = new Date();
			fechaInicio.setFullYear(anio, mes, dia);					 						
			
			return this.swValidar = !(fechaInicio < fechaFin);
		};
		
		this._maxNow = function(fdFecha){
			
			var fechaInicio = $.trim(fdFecha.val());
			var fechaFin = new Date();
			
			if ( fechaInicio.length == 0 ) return true;
			                    
			fechaInicio = fechaInicio.split('/');	 
			
			var dia  = parseInt( fechaInicio[0] );
			var mes  = parseInt( fechaInicio[1] ) - 1;
			var anio = parseInt( fechaInicio[2] );
														
			fechaInicio = new Date();
			fechaInicio.setFullYear(anio, mes, dia);					 						
			
			return this.swValidar = (fechaInicio <= fechaFin);
		};
		
		this._isDniLength = function(input){
			
			var valor = $.trim(input.val());			
						 
			return this.swValidar = !(valor.length < 8);
		};
		this._min = function(input, min){
			
			var valor = $.trim(input.val());			
						 
			return this.swValidar = !(valor.length <= min);
		};
		this._max = function(input, max){
			
			var valor = $.trim(input.val());			

			return this.swValidar = !(valor.length > max);
		};
		this._unchecked = function( element ) {
			var sw = !value.prop( "checked" );
    		return this.swValidar = !element.prop( "checked" );
    	},
    	this._checked = function( element ) {
			var sw = value.prop( "checked" );
    		return this.swValidar = element.prop( "checked" );
    	},
    	this._isRequired = function( element ){         		    		
    		return this.swValidar = !(element.val() == '-1' || $.trim( element.val() ).length == 0 || element.val() == 'hh:mm' || element.val() == 'dd/mm/aaaa' );;
    	};
    	// http://jqueryvalidation.org/email-method/
		this._isEmail = function( element ) {
			// From http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#e-mail-state-%28type=email%29
			// Retrieved 2014-01-14
			// If you have a problem with this implementation, report a bug against the above spec
			// Or use custom methods to implement your own email validation
			return this.swValidar = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test( element.val() );
		},
		// http://jqueryvalidation.org/url-method/
		this._isUrl = function( element ) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
			return this.swValidar = /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test( element.val() );
		},		
		// http://jqueryvalidation.org/dateISO-method/
		this._isDateISO = function( element ) {
			return this.swValidar = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( element.val() );
		},
		this._isRowGrid = function ( grid ){
			if  ( grid.hasClass('dataTable-grid') ){					
				var table = grid.DataTable();				 
				var data  = table.rows().data();											
				return this.swValidar = data.length > 0;				
			} else {				 
				return this.swValidar = true;			
			}
		},
		this._isCheckGrid = function ( grid ){
			if  ( grid.hasClass('dataTable-check') ){				
				var countCheck = grid.find('input:checkbox:checked').length;				
				return this.swValidar = countCheck > 0;
			} else {				 
				return this.swValidar = true;			
			}
		},
		this._isContentGrid = function ( grid, content ){
			if  ( grid.hasClass('datatable-validate') ){
				var cantCont = 0;
				$('.campoValid').each(
					function(index) {
						if($(this).text() ==content){
							cantCont++;
						}
				});	
				return cantCont>0;			
			} else {				 
				return this.swValidar = true;			
			}
		},
		this._isCheckGridSelect = function ( grid ){

			var sw = true;

			if  ( grid.hasClass('dataTable-select') ){				
				var countCheck = grid.find('input:checkbox:checked').length;				
				sw = this.swValidar = countCheck > 0;
			} else {				 
				sw = this.swValidar = true;			
			}

			if (sw)
			{
				var select = $('.cmbSelectGrid');
				if (select == null || select.length == 0) {
					sw = true;
				} else {
					var combo = new Object();
					for (var i = 0; i < select.length ; i++){
						combo = $(select[i])[0];				
						if (combo.value == '-1'){
							sw = false;
							break;						
						}
					}					
				}
			}

			return sw;

		},
		this._isCheckGridInput = function ( grid ){

			var sw = true;

			if  ( grid.hasClass('dataTable-select') ){				
				var countCheck = grid.find('input:checkbox:checked').length;				
				sw = this.swValidar = countCheck > 0;
			} else {				 
				sw = this.swValidar = true;			
			}

			if (sw)
			{
				var select = $('.txtInputGrid');
				if (select == null || select.length == 0) {
					sw = true;
				} else {
					var combo = new Object();
					for (var i = 0; i < select.length ; i++){
						combo = $(select[i])[0];				
						if (combo.value == ''){
							sw = false;
							break;						
						}
					}					
				}
			}

			return sw;

		},
		this._isCheckGridTextMax = function ( grid, max){

			var sw = true;

			if  ( grid.hasClass('dataTable-select') ){
				var countCheck = grid.find('input:checkbox:checked').length;
				sw = this.swValidar = countCheck > 0;
			} else {				 
				sw = this.swValidar = true;
			}

			if (sw)
			{
				var select = $('.txtInputGrid');
				if (select == null || select.length == 0) {
					sw = true;
				} else {
					var valor = new Object();
					for (var i = 0; i < select.length ; i++){
						var valor = $(select[i])[0];
						valor = $.trim(valor.value);
						return this.swValidar = !(valor.length > max);
					}					
				}
			}

			return sw;

		},
		this._isTime = function ( input ){
			var valor = $.trim(input.val());			
			var time = valor.split(":");
			
			var hours = parseInt( time[0] );
			var minute = parseInt( time[1] );
			
			if (hours > 23 || minute > 59){
				return this.swValidar = false;
			}else{
				return this.swValidar = true;
			}
			
		}
		// http://jqueryvalidation.org/number-method/
		this._isNumber = function( element ) {
			return this.swValidar = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( element.val() );
		},
		// http://jqueryvalidation.org/digits-method/
		this._isDigits = function( element ) {
			return this.swValidar = /^\d+$/.test( element.val() );
		},
    	this._isDate = function( value ) {    		
    		if ( $.trim( value.val() ).length == 0 ){
    			return true;
    		}
    		
    		var dtCh= "/";
    		var minYear=1900;
    		var maxYear=2100;
    		var sw = true;
    		
    		function isInteger(s){
    			var i;
    			for (i = 0; i < s.length; i++){
    				var c = s.charAt(i);
    				if (((c < "0") || (c > "9"))) return false;
    			}
    			return true;
    		}
    		function stripCharsInBag(s, bag){
    			var i;
    			var returnString = "";
    			for (i = 0; i < s.length; i++){
    				var c = s.charAt(i);
    				if (bag.indexOf(c) == -1) returnString += c;
    			}
    			return returnString;
    		}
    		function daysInFebruary (year){
    			return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
    		}
    		function DaysArray(n) {
    			for (var i = 1; i <= n; i++) {
    				this[i] = 31
    				if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
    				if (i==2) {this[i] = 29}
    			}
    			return this
    		}
    		function isDate(dtStr){
    			var daysInMonth = DaysArray(12)
    			var pos1=dtStr.indexOf(dtCh)
    			var pos2=dtStr.indexOf(dtCh,pos1+1)
    			var strDay=dtStr.substring(0,pos1)
    			var strMonth=dtStr.substring(pos1+1,pos2)
    			var strYear=dtStr.substring(pos2+1)
    			strYr=strYear
    			if (strDay.charAt(0)=="0" && strDay.length>1) strDay=strDay.substring(1)
    			if (strMonth.charAt(0)=="0" && strMonth.length>1) strMonth=strMonth.substring(1)
    			for (var i = 1; i <= 3; i++) {
    				if (strYr.charAt(0)=="0" && strYr.length>1) strYr=strYr.substring(1)
    			}
    			month=parseInt(strMonth)
    			day=parseInt(strDay)
    			year=parseInt(strYr)
    			if (pos1==-1 || pos2==-1){
    				return false
    			}
    			if (strMonth.length<1 || month<1 || month>12){
    				return false
    			}
    			if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
    				return false
    			}
    			if (strYear.length != 4 || year==0 || year<minYear || year>maxYear){
    				return false
    			}
    			if (dtStr.indexOf(dtCh,pos2+1)!=-1 || isInteger(stripCharsInBag(dtStr, dtCh))==false){
    				return false
    			}
    			return true
    		}
    		
    		if(isDate(value.val())){
    			sw = true;
    		}else{
    			sw = false;
    		}
    		
			return this.swValidar = sw;
		};
    	this._isConfigError = function(id, value){
			this.data.msg = value.message;
			this.data.dataJson.campoError = id;
			this.data.dataJson.msgError = value.message;    			
		};
		this._isRequiredWith = function(input, inputReq){
			if ( $.trim( input.val() ).length > 0 ){
				if ( $.trim( inputReq.val() ).length == 0 ){ 
					return this.swValidar = false;
				}
			}			   		
			return this.swValidar = true;
		};
		this._isCheckGridDataInput = function(input, grid) {
			var sw = true;

			if (sw) {
				var select = $('.cmbValidateField');
				if (select == null || select.length == 0) {
					sw = true;
				} else {
					$.each(select, function() {
						var valor = this.innerHTML.trim();
						if (input.val() === valor) {
							sw = false;
						}
					});
				}
			}
			return sw;
		};
		this._isEqual = function(input, inputEqual){
			if ( $.trim( input.val() ) != $.trim( inputEqual.val() ) ){
				return this.swValidar = false;
			}
			return this.swValidar = true;
		};
		this._isValidateClassInput = function(classInput, textarea, file, hidden){
			var sw = true;
			var sw_int = true;
			
			$("."+classInput).each(function(){
				
				sw_int = true;
				
				var idadjunto = $(this).attr('data-adjunto');
				var id = $(this).attr('data');
				
				var conforme 	= $(this).val();
				var vtextarea 	= $('#'+textarea+id).val();
				var inputfile 	= $('#'+file+idadjunto).val();
				var vhidden		= $('#'+hidden+idadjunto).val();
				
				if ( vtextarea != null && vtextarea != '' && conforme == '-1' ){
					sw = false;
					sw_int = false;
					$(this).addClass('input_error_resultado');
				}
				
				if ( inputfile != null && inputfile != '' && (vhidden == undefined || vhidden == null) && conforme == '-1' ){
					sw = false;
					sw_int = false;
					$(this).addClass('input_error_resultado');
				}
				
				if (vhidden != null && vhidden != undefined && conforme == '-1'){
					sw = false;
					sw_int = false;
					$(this).addClass('input_error_resultado');
				}
				
				
				
				if (sw_int){
					$(this).removeClass('input_error_resultado');
				}
				
			});
			
			return sw;
		};
		
		this._isValidateClass = function(classInput, input, val){
			var sw = true;
			$("."+classInput).each(function(){
				var id = $(this).attr('data');
				
				if ($(this).val() != val && $(this).val() != '-1'){					
					if ($('#'+input+id).val() == ''){
						sw = false;
						$('#'+input+id).addClass('input_error_resultado');
					}else{
						$('#'+input+id).removeClass('input_error_resultado');
					}
				}else{
					$('#'+input+id).removeClass('input_error_resultado');
				}			
			});	
			return sw;
		};						
    	this._isMethod = {    			
			required: this._isRequired,
			date: this._isDate,
			unchecked: this._unchecked,
			checked: this._checked,
			rangeDate: this._rangeDate,
			requiredWith: this._isRequiredWith,
			email: this._isEmail,
			url: this._isUrl,
			dateISO: this._isDateISO,
			number: this._isNumber,
			digits: this._isDigits,
			rowGrid: this._isRowGrid,
			rangeNow:this._rangeNow,
			max: this._max,
			minNow:this._minNow,
			min:this._min,
			dniLength:this._isDniLength,
			checkGrid:this._isCheckGrid,
			contentGrid:this._isContentGrid,
			equal:this._isEqual,
			time: this._isTime,
			maxNow: this._maxNow,
			rangeDateMax: this._rangeDateMax,
			valueDiferent: this._valueDiferent,
			checkGridSelect: this._isCheckGridSelect,
			checkGridInput: this._isCheckGridInput,
			checkGridTextMax: this._isCheckGridTextMax,
			checkGridDataInput: this._isCheckGridDataInput,
			validateClass: this._isValidateClass,
			validateClassInput: this._isValidateClassInput,
    	};    	
		this._isSwowError = function(id, value, $this){											
			$this._isConfigError(id, value);																				
			var estadoInicial = null;//estadoInputInicial('#div-cabecera-buscar');
				
			if ( huboErrorJson( $this.data ) ) {			        		
	       		if ( huboErrorValidacionJson( $this.data ) ) {	      	       			
	       			estadoInputErrorDiv( '#div-cabecera-buscar', $this.data, estadoInicial , false);
	       			return;
	      		}  			        		
	       		handleErrorJson( $this.data );
	       		return;
	       	}		
		};		
    	this.validate = function(){
    		
    		estadoInputInicial('#div-cabecera-buscar');
    		
			var data = this.data;	
			var metodos = this._isMethod;
			var get = this._getObject;
			var show = this._isSwowError;
			var form = this._form;
			var validate = true;
			var $this = this;
			
			var countError = 0;
			
			$.each(form, function(input, validators){					
				$.each(validators, function(ind,validator){  
					if (validator != null){
						validator.name = input; // INJECTAMOS EL NAME AL VALIDATOR																
						$.each(metodos, function(ind, fn){		
							
							if ( validator.role == 'rangeDate' && ind == validator.role ){
								if ((validate = fn(get(validator.inputMin), get(validator))) == false){
									show(input,validator, $this);
									return false;
								};			
							}else if ( validator.role == 'rangeDateMax' && ind == validator.role ){
									if ((validate = fn(get(validator.inputMin), get(validator))) == false){
										show(input,validator, $this);
										return false;
									};												
							}else if ( validator.role == 'requiredWith' && ind == validator.role ){
								if ((validate = fn(get(validator), get(validator.inputWith))) == false){								
									show(validator.inputWith.name,validator, $this);
									return false;
								};	
							}else if ( validator.role == 'min' && ind == validator.role ){
								if ((validate = fn(get(validator), validator.min)) == false){								
									show(input, validator, $this);
									return false;
								};
							}else if ( validator.role == 'max' && ind == validator.role ){
								if ((validate = fn(get(validator), validator.max)) == false){								
									show(input, validator, $this);
									return false;
								};
							}else if ( validator.role == 'checkGridTextMax' && ind == validator.role ){
								if ((validate = fn(get(validator), validator.max)) == false){								
									show(input, validator, $this);
									return false;
								};
							}else if ( validator.role == 'contentGrid' && ind == validator.role ){
								if ((validate = fn(get(validator), validator.content)) == false){								
									show(input, validator, $this);
									return false;
								};
							}else if ( validator.role == 'equal' && ind == validator.role ){
								if ((validate = fn(get(validator), get(validator.inputEqual))) == false){								
									show(input, validator, $this);
									return false;
								};	
							}else if ( validator.role == 'valueDiferent' && ind == validator.role ){								
								if ((validate = fn(get(validator), validator.peru, validator.dni, get(validator.documento))) == false){								
									show(input,validator, $this); 
									return false;
								};
							}else if ( validator.role == 'validateClass' && ind == validator.role ){
								if ( (validate = fn(validator.class, validator.input, validator.val)) == false ){									
									return false;
								};
							}else if ( validator.role == 'validateClassInput' && ind == validator.role ){
								if ( (validate = fn(validator.class, validator.textarea, validator.file, validator.hidden)) == false ){									
									return false;
								};									
							}else if ( ind == validator.role ){
								if ((validate = fn(get(validator))) == false){
									show(input,validator, $this);
									return false;
								};								
							}																			
						});	
						if (validate == false){
							countError++;
							return false;	
						}	
					}										
				});				
			});
			
			if (countError == 0){				
				estadoInputInicial('#div-cabecera-buscar');
			}else{				
				if ( form.general !== undefined){
					mostrarMsgGeneralError( form.general.error.message );	
				}				
			}
			
			return countError == 0;
		}
	}
	
	var FORM_TYPE = {
		input:'input',
		select:'select',
		grid: 'grid',
		textarea: 'textarea'
	}
	
	
    //***************************MENSAJE ERROR ADVERTENCIA REGLAS : JSQP************************************//
	function estadoInputErrorAdvertencia( divID, data, estadoRestore,esUpss) {
		
		var msgError = data.msg;
		//var msgError = data.dataJson.msgError;
		console.log("Data de error de json :" + msgError);
		var campoError = data.dataJson.campoError;
		
		// [CMIC] 19/03/2015
		var titulo = data.dataJson.titulo;
		var tipo = data.dataJson.tipo;
		
		// sino viene con campo poco se puede hacer
		if ( campoError == null ) return;
				
		// si el campo es un error general, mostrarlo como popup
		if ( campoError == 'general' ) {
			var titulo = titulo == null ? 'Mensaje' : titulo;
			showMensaje( titulo , msgError );
			return;
		}
		
		if(esUpss=='1')
		{
		   mostrarMsgGeneralError2( msgError );
		}
		else
		{
			mostrarMsgGeneralError3( msgError );	
		}
		
		
		
		var selInput = $( divID + ' input[name=' + campoError + ']' );
		var selSelec = $( divID + ' select[name=' + campoError + ']' );
		var selTextA = $( divID + ' textarea[name=' + campoError + ']' );
		
		if ( selInput.length ) {			
			selInput.focus();	
			
			if ( selInput.hasClass('date-picker') ){
				selInput.parent().parent().find('span:last').html(msgError);	
			}else{
				selInput.next().html(msgError);
			}
																						
			selInput.closest('.form-group').addClass('has-error');
			selInput.select();
			selInput.focus();			
		}
		
		if ( selSelec.length ) {
			
			selSelec.focus();
			selSelec.next().html( msgError );
			selSelec.closest('.form-group').addClass('has-error');
			selSelec.focus();
		}
		
		if ( selTextA.length ) {
			
			selTextA.focus();
			selTextA.next().html( msgError );
			selTextA.closest('.form-group').addClass('has-error');
			selTextA.focus();
		}

		// FIXME: con el estadoRestore reestablecer la estructura de datos
    }
    //*********************************

	//***************************MENSAJE ERROR BUSQUEDA VACIA : JSQP************************************//
	function estadoInputErrorBusqueda( divID, data, estadoRestore, divErrorMsg ) {
		
		//var msgError = data.msg;
		var msgError = data.dataJson.msgError;
		console.log("Data de error de json :" + msgError);
		var campoError = data.dataJson.campoError;
		
		// [CMIC] 19/03/2015
		var titulo = data.dataJson.titulo;
		var tipo = data.dataJson.tipo;
		
		// sino viene con campo poco se puede hacer
		if ( campoError == null ) return;
				
		// si el campo es un error general, mostrarlo como popup
		if ( campoError == 'general' ) {
			var titulo = titulo == null ? 'Mensaje' : titulo;
			showMensaje( titulo , msgError );
			return;
		}
		
		if (divErrorMsg == null) {
			mostrarMsgGeneralError( msgError );
		} else {
			mostrarMsgGeneralError2( msgError, divErrorMsg );
		}
		
		var selInput = $( divID + ' input[name=' + campoError + ']' );
		var selSelec = $( divID + ' select[name=' + campoError + ']' );
		var selTextA = $( divID + ' textarea[name=' + campoError + ']' );
		
		if ( selInput.length ) {			
			selInput.focus();	
			
			if ( selInput.hasClass('date-picker') ){
				selInput.parent().parent().find('span:last').html(msgError);	
			}else{
				selInput.next().html(msgError);
			}
																						
			selInput.closest('.form-group').addClass('has-error');
			selInput.select();
			selInput.focus();			
		}
		
		if ( selSelec.length ) {
			
			selSelec.focus();
			selSelec.next().html( msgError );
			selSelec.closest('.form-group').addClass('has-error');
			selSelec.focus();
		}
		
		if ( selTextA.length ) {
			
			selTextA.focus();
			selTextA.next().html( msgError );
			selTextA.closest('.form-group').addClass('has-error');
			selTextA.focus();
		}

		// FIXME: con el estadoRestore reestablecer la estructura de datos
    }
    //*********************************
	
    function eventSubirArchivoAsincronoValidacionParamsExt( inputControl, nameControl, urlUpload, successFunction, errorFunction, extensionValida, params ) {
			
			if ( inputControl == null ) return;
			
			// limpiando el estilo
			cleanControlError( inputControl );

			// limpiando la barra de abajo
			$( '#' + nameControl + '-barra' ).html( '' );			
			
			var fileName = $( inputControl ).val();
			
			if ( fileName == null || fileName == '' ) {
				console.log( 'fileName es cadena vacia' );
			 	return;
			}
			
			// validaciones adicionales de extension
			if ( extensionValida != null ) {
			
				if ( fileName.indexOf( '.' ) < 0 ) {
					handleUploadErrorJson(inputControl, nameControl, null );
					showMensaje( 'Mensaje', 'Archivo debe tener extensi\u00F3n');
				    return;
				}

				var ext = fileName.substr( (fileName.lastIndexOf('.') + 1 ) );
				var sw = true;
				//$.each(extensionValida, function(indice, valor){
				if ( (ext.toUpperCase() != extensionValida[0].toUpperCase()) && (ext.toUpperCase() != extensionValida[1].toUpperCase())  ) {
					inputControl(inputControl, nameControl, null );
				    showMensaje( 'Mensaje', 'Archivo debe tener extensi\u00F3n ' + extensionValida[0] + ' \u00F3 ' + extensionValida[1]);
				    sw = false;
				    return;
				}
				//});
				if (!sw){
					return;
				}
			}
			 
		    var formData = new FormData();
		    formData.append( nameControl , inputControl[0].files[0]);
		    
		    var param = new Object();
		    for(var i = 0; i < params.length; i++){
		    	param = params[i];
		    	formData.append( param.name , param.value);	
		    }
		    
		    $.ajax({
		    	url: urlUpload,
		    	cache: false,
		    	async: true,
		    	type: 'POST',
		        data: formData,
		        dataType : 'json',
		        mimeType: "multipart/form-data",		        
		        contentType: false,		        
		        processData: false,	
		        xhr: function() {
		        	
		            var xhr = $.ajaxSettings.xhr();
		            if (xhr.upload) {
		                xhr.upload.addEventListener('progress', function(evt) {
		                	
		                	if ( evt.lengthComputable ) {
			                    var percent = (evt.loaded / evt.total) * 100;
			                    
			                    var divBarra = $( '#' + nameControl + '-barra' );
			                    
			                    divBarra.html( $( '#divBarraUpload' ).html() );
			                    divBarra.find(".progress-bar").width(percent + "%");
		                	} 
		                	
		                }, false);
		            }
		            return xhr;
		        },
		        success: successFunction,
		        error: errorFunction
		    });
		    	
	}
    
    function eventSubirArchivoAsincronoValidacionParams( inputControl, nameControl, urlUpload, successFunction, errorFunction, extensionValida, params ) {

		// NOTA: inputControl es obtenido de algun $( '' )
		inputControl.change(function(e) {
			
			if ( inputControl == null ) return;
			
			// limpiando el estilo
			cleanControlError( inputControl );

			// limpiando la barra de abajo
			$( '#' + nameControl + '-barra' ).html( '' );			
			
			var fileName = $( this ).val();
			
			if ( fileName == null || fileName == '' ) {
				console.log( 'fileName es cadena vacia' );
			 	return;
			}
			
			// validaciones adicionales de extension
			if ( extensionValida != null ) {
			
				if ( fileName.indexOf( '.' ) < 0 ) {
					handleUploadErrorJson(inputControl, nameControl, null );
					showMensaje( 'Mensaje', 'Archivo debe tener extensi\u00F3n');
				    return;
				}

				var ext = fileName.substr( (fileName.lastIndexOf('.') + 1 ) );
				var sw = true;
				//$.each(extensionValida, function(indice, valor){
				if ( (ext.toUpperCase() != extensionValida[0].toUpperCase()) && (ext.toUpperCase() != extensionValida[1].toUpperCase())  ) {
					handleUploadErrorJson(inputControl, nameControl, null );
				    showMensaje( 'Mensaje', 'Archivo debe tener extensi\u00F3n ' + extensionValida[0] + ' \u00F3 ' + extensionValida[1]);
				    sw = false;
				    return;
				}
				//});
				if (!sw){
					return;
				}
			}
			 
		    var formData = new FormData();
		    formData.append( nameControl , this.files[0]);
		    
		    var param = new Object();
		    for(var i = 0; i < params.length; i++){
		    	param = params[i];
		    	formData.append( param.name , param.value);	
		    }
		    
		    $.ajax({
		    	url: urlUpload,
		    	cache: false,
		    	async: true,
		    	type: 'POST',
		        data: formData,
		        dataType : 'json',
		        mimeType: "multipart/form-data",		        
		        contentType: false,		        
		        processData: false,	
		        xhr: function() {
		        	
		            var xhr = $.ajaxSettings.xhr();
		            if (xhr.upload) {
		                xhr.upload.addEventListener('progress', function(evt) {
		                	
		                	if ( evt.lengthComputable ) {
			                    var percent = (evt.loaded / evt.total) * 100;
			                    
			                    var divBarra = $( '#' + nameControl + '-barra' );
			                    
			                    divBarra.html( $( '#divBarraUpload' ).html() );
			                    divBarra.find(".progress-bar").width(percent + "%");
		                	} 
		                	
		                }, false);
		            }
		            return xhr;
		        },
		        success: successFunction,
		        error: errorFunction
		    });
		    
		    e.preventDefault(); //Prevent Default action. 
// 		    e.unbind();
		});			
	}
    
    function obtenerBloqueados(form) {
    	var array = new Array();
		$.each($('#' + form + ' select'), function() {
			if (this.disabled) {
				array.push(this.id);
			}
		});

		$.each($('#' + form + ' input'), function() {
			if (this.disabled) {
				array.push(this.id);
			}
		});

		$.each($('#' + form + ' textarea'), function() {
			if (this.disabled) {
				array.push(this.id);
			}
		});
		return array;
	}

	function inhabilitar(arreglo) {
		$.each(arreglo, function() {
			$('#' + this).prop('disabled', $('#' + this).attr('disabled') ? false : true);
		});
	}

	function logout() {
		$.ajax({
            url : 'login.htm?action=cerrarLogin',
            type: 'POST',
            dataType : 'json',
            error: function(data, textStatus, errorThrown) {
                locationUrl('login.htm');
            }
        });
	}

	function generarArreglo(div) {
		var arreglo = new Object(); 

		$.each($(div + ' input'), function() {
			if (this.title !== '') {
				if (this.type === 'checkbox') {
					arreglo[this.title] = $(this).prop('checked') ? this.value : '';
				} else {
					arreglo[this.title] = this.value;
				}
			}
		});

		$.each($(div + ' select'), function() {
			if (this.title !== '') {
				arreglo[this.title] = $(this).find('option:selected').text();
			}
		});

		$.each($(div + ' textarea'), function() {
			if (this.title !== '') {
				arreglo[this.title] = this.value;
			}
		});

		return arreglo;
	}
	
	//--------------------------- Pasa dataJason a session JVERA-HOTANI ----------------------------
	function setDataSession(dataJson, controller){
		beginCargando();
		i=0;
		j=0;
		do{
			j += 1000000;
			if(j < dataJson.length)
				var params = "&dataJson=" + dataJson.substring(i, j);
			else
				var params = "&dataJson=" + dataJson.substring(i);
			$.ajax({
				url: controller + '?action=importarDatos',
				cache: false,
				data: params,
				async: false,
				type: 'POST',
				dataType: 'json',
				success: function(data) {
					endCargando();
				},
				error: function(data, textStatus, errorThrown) {     
					handleError(data);
					evaluaHabilitacionBotonRegistro();
				}
			});
			i += 1000000;
		}while(j < dataJson.length);
	}
	
	function NoBack(){		
		
		window.location.hash="no-back-button";
		window.location.hash="Again-No-back-button"; //chrome	
		window.onhashchange=function(){			
			window.location.hash="no-back-button";
		}
		
	}	
	
	$(document).ready(function(){	
		NoBack();		
		
	});
	
    //Agregado por dlarico caso cambiar perfil
	function logoutPerfil() {
		$.ajax({
			url : 'login.htm?action=cerrarPerfil',
			type: 'POST',
			dataType : 'json',
			error: function(data, textStatus, errorThrown) {
				locationUrl('login.htm');
			}
		});
	}
    //----------------------------------------------------
	function fn_validarSession(){	
		fn_validarAcceso();
		
		setInterval(function(){  
			fn_validarAcceso();
		}, 180000);	
	}
    
    function fn_validarAcceso(asyc){
    	$.ajax({
			url: "login.htm?action=validarSession",
			dataType: "json",		
			async: (asyc == null ? true : asyc ),
			success: function (result) {
				if (result.estado == 'error'){
					showMensaje("Error de Conexión", "La sessión a terminado, ingrese al sistema", function(){
						locationUrl('login.htm');
					}, null );
					
				}
			},
			error: function (result) {
			}
		});
    }
	
</script>

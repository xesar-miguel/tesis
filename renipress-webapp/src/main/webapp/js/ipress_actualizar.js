/* global idSolConsultar, idOpcion, attr, upssActivo, objetoReq, idUPPSIcon, moduloActivo, dsGdClasificaEstab, dsGdColegioProfesional, dsGdEspecialidad, dsGdCapacitacion, dsGdEntrenamiento, dsGdUPSS, kendo, dsGdRRHH, dsGdRRHHNoValido, dsGdActividadesDA */

//variables globales
//variables globales
var arratTempActividad = [];
var arratTempEspecialidad = [];
var UPSSTemp = [];
var UPSTemp = [];
var ClassTemo = [];
var dep;
var flagDebug = true;
var flagPNPJ = false;
var etiquetasControles = {
    sexo: "(Seleccione Sexo)",
    pais: "(Seleccione País)",
    departamento: "(Seleccione Departamento)",
    provincia: "(Seleccione Provincia)",
    distrito: "(Seleccione Distrito)",
    via: "(Seleccione Vía)"

};
var listaModulos;

var idopcionValidar = 0;

$.fn.resetForm = function () {
    return this.each(function () {
        this.reset();
    });
};

var proxy = $.fn.serializeArray;
$.fn.serializeArray = function () {
    var inputs = this.find(':disabled');
    inputs.prop('disabled', false);
    var serialized = proxy.apply(this, arguments);
    inputs.prop('disabled', true);
    return serialized;
};
/*
 * function InicializaCalendar(){ $( "#cboFecNac" ).datepicker(); }
 */
function LimpiarFiltrosDA(){
	$('#txtBuscarUPSDA').val('');
	$('#txtBuscarUPSSDA').val('');
	$('#txtBuscarActDA').val('');
	console.log('limpiando filtros');
}

$(function () {
    beginCargando();
    CargarParametros();
    LimpiarFiltrosDA();
    // InicializaCalendar();
    // INSCRIPCION IPRESS
    CargaControles();
    ConfigControles();
    CargarSexo($('#cboSexo'));
    CargarSexo($('#CboSexoExcel'));
    CargarSexo($('#cboSexoRA'));
    CargarSexo($('#cboSexoRRLL'));
    CargarSexo($('#cboSexoRAS'));
    CargarVia($('#cboVia'));
    CargarVia($('#cboViaRA'));
    CargarVia($('#cboViaDE'));

    $('#li-section-lista-recursos-humano').click(function(){
        $('#li-section-registro-individual').addClass('disabled').addClass('disabledTab');
        personaRRHHxls = [];
    });

    $('#filAdjuntarRRHH').change(function(){
        var ext = this.value.match(/\.(.+)$/)[1];
        switch (ext) {
            case 'xls':
                break;
            default:
                this.value = '';
        }
    });

    $.ajax({
        url: "solicitud.htm?action=selectPais",
        dataType: "json",
		async:false,
        success: function (result) {
            CargarPaises(result, $('#cboPais'), etiquetasControles.pais);
            CargarPaises(result, $('#cboPaisRA'), etiquetasControles.pais);
            CargarPaises(result, $('#cboPaisRRLL'), etiquetasControles.pais);
            CargarPaises(result, $('#cboPaisRAS'), etiquetasControles.pais);
            CargarPaises(result, $('#cboPaisExcel'), etiquetasControles.pais);
			
			// [BIT] CMIC 03/11/2015
			if (idOpcion === 1){
				$('#cboPais').attr('disabled', true);
				$('#cboPaisRA').attr('disabled', true);
				$('#cboPaisRRLL').attr('disabled', true);
				$('#cboPaisRAS').attr('disabled', true);
				$('#cboPaisExcel').attr('disabled', true);
			}
			
        },
        error: function (result) {
        }
    });
    // PARA CARGAR LOS MODULOS AUTOMATICAMENTE
    $.ajax({
        url: "solicitud.htm?action=selectModulo",
        dataType: "json",
		async:false,
        success: function (result) {
            listaModulos = result;
            // options.success(result);
        },
        error: function (result) {

        }
    });

    CargarValidadoresIPRESS();
    //CargarDepartamentos('solicitud.htm?action=selectUbigeo&tipo=DE', $('#cboDepartamento'), etiquetasControles.departamento); //comentado por dlarico
    CargarDepartamentos('solicitud.htm?action=selectUbigeo&tipo=DE', $('#cboDepRA'), etiquetasControles.departamento);
    CargarDepartamentos('solicitud.htm?action=selectUbigeo&tipo=DE', $('#cboDepDE'), etiquetasControles.departamento);
    CargarDepartamentos('solicitud.htm?action=selectUbigeo&tipo=DE', $('#cboDepartamentoDA'), etiquetasControles.departamento);

    // CargarVia();

    // INSCRIPCION IPRESS
    // DATOS GENERALES

    ValidadoresDatosGenerales();
    ValidadoresRRLL();
    ValidadoresEstablecimiento();
    ValidadoresRAS();
    ValidadoresDAdicionales();
    ValidadoresRHHIndividual();
    MostrarTipDoc();
    // MostrarAutoridadSanit();
    MostrarProfesion();
    MostrarTipoEstablecimiento();
    MostrarTipoContrato();
    // DATOS GENERALES

    // MANEJO DE OPCIONES PARA PPJJ PPNN - actulizado por dlarico
    $('#datos-generales-radio-persona-juridica-publica').click(function(){
        $('#txtRucRA,#cbdoTipoDocRA,#txtNroDocRA,#cboPaisRA,#txtFecNacRA,#cboSexoRA,#txtAPaternoRA,#txtAMaternoRA,#txtACasadaRA,#txtNombresRA').val('');
        flagPNPJ = true;
    });
    //Agregado por dlarico 
    $('#datos-generales-radio-persona-juridica-privada').click(function(){
        $('#txtRucRA,#cbdoTipoDocRA,#txtNroDocRA,#cboPaisRA,#txtFecNacRA,#cboSexoRA,#txtAPaternoRA,#txtAMaternoRA,#txtACasadaRA,#txtNombresRA').val('');
        flagPNPJ = true;
    });

    $('#datos-generales-radio-persona-natural').click(function(){
        $('#txtRucPJRA,#txtRSocialPJRA,#txtNComercialPJRA').val('');
        flagPNPJ = false;
    });

    $('#btnEnviaReporte').click(function(){
        imprimirPDF();
    });
		
	
	MostrarGrupoEtareo();
	MostrarTipoAtencion();			
    
    setTimeout(function(){
        if (typeof idSolConsultar === 'undefined'
            || idSolConsultar === 0 || idSolConsultar === ''){
            endCargando();									
			
			//MostrarInstitucion();

			MostrarDatosSolicitud();
        } else {
            ActualizarSolicitud(idSolConsultar, idOpcion);
        }
		/*
		setTimeout(function(){
			$('#datos-generales-radio-persona-natural').attr('disabled', true);
			$('#datos-generales-radio-persona-juridica-publica').attr('disabled', true);
			$('#datos-generales-radio-persona-juridica-privada').attr('disabled', true);
			$('#txtRucRA').attr('disabled', true);
			$('#txtNComercialDE').attr('disabled', true);
			$('#txtRucPJRA').attr('disabled', true);
			
			$('#txtRucPJRA').attr('disabled', true);
			$('#txtRSocialPJRA').attr('disabled', true);			
		}, 500);
		*/
    }, 1500); 
    
});
///

function activarBotones() {
    $(document).find('input').attr('disabled', true);
    $(document).find('select').attr('disabled', true);
    $(document).find('button').attr('disabled', true);
    $(document).find('radio').attr('disabled', true);
    $(document).find('checkbox').attr('disabled', true);
    $('input[type="text"], textarea').attr('readonly', 'readonly');
    $('#btnCancelarSol').attr('disabled', false); 
    $('#btnCancelarSol1').attr('disabled', false);
    $('#btnCancelarSol2').attr('disabled', false);
    $('#btnCancelarSol3').attr('disabled', false);
}

/***-------------------------------------------------------------------------------------------------------------------------------***/
//VARIABLES DE ACTUALIZACION 
/***-------------------------------------------------------------------------------------------------------------------------------***/
var idASActualizacion=0;
function ActualizarSolicitud(idSolConsultar, idOpcion) {
    beginCargando(); 
    $.getJSON("solicitudActualizar.htm?action=cargarConsultaSolicitudJSON&idSol=" + idSolConsultar,function(data){
        idopcionValidar = idOpcion;
        console.log("idopcionValidar " +idopcionValidar);
        objSolicitud = data;
        //-----INICIO DATOS PRIMERA PESTAÑA
		
		if (objSolicitud['P_CURSORSOLICITUD'] === undefined){
			showConfirmation( "Error" , "ERR-005 CARGAR CONSULTA SOLICITUD" , function(){
				$(location).prop( 'href', 'bienvenidos.htm?action=mostrar' ) ;
			} , null, null );
		}
		
        objSolicitudDG = objSolicitud['P_CURSORSOLICITUD'][0];
        objSolicitudDA = objSolicitud['P_CURSORSOLADJUNT'][0]; // documentos adjunto
        objSolicitudDS = objSolicitud['P_CURSOR'][0];
        objSolicitudRH = objSolicitud['P_CURSORSOLRRHH']; //realacion de RRHH 

        
        $('#idSolicitud').val(objSolicitudDG.SOL_IDSOLICITUD);
        
        //---------------------------------------------------------------------
        $('#txtDocumento').val(objSolicitudDG.SOLPER_NUMDOC);
        $('#cboFecNac').val(objSolicitudDG.SOLPER_FECHNACI);
        $('#txtAPaterno').val(objSolicitudDG.SOLPER_APPATERNO);
        $('#txtAMaterno').val(objSolicitudDG.SOLPER_APMATERNO);
        $('#txtACasada').val(objSolicitudDG.SOLPER_APCASADA);
        $('#txtNombres').val(objSolicitudDG.SOLPER_DENOMBRE);

        $('#txtDetVia').val(objSolicitudDG.SOLNOTIF_VIA);
        $('#txtNroSOL').val(objSolicitudDG.SOLNOTIF_NUMERO);
        $('#txtNroPiso').val(objSolicitudDG.SOLNOTIF_PISO);
        $('#txtNroDpto').val(objSolicitudDG.SOLNOTIF_DEPARTA);
        $('#txtNroInt').val(objSolicitudDG.SOLNOTIF_INTERIOR);
        $('#txtMzSOL').val(objSolicitudDG.SOLNOTIF_MANZANA);
        $('#txtLtSOL').val(objSolicitudDG.SOLNOTIF_LOTE);
        $('#txtKlSOL').val(objSolicitudDG.SOLNOTIF_KILOMETRO);
        $('#txtUrSOL').val(objSolicitudDG.SOLNOTIF_URBANIZACION);
        $('#txtRefSOL').val(objSolicitudDG.SOLNOTIF_REFERENCIA);
            $('#txtTlf1').val(objSolicitudDG.SOLNOTIF_TELEFONO1);
            $('#txtTlf2').val(objSolicitudDG.SOLNOTIF_TELEFONO2);
            $('#txtCorreo1').val(objSolicitudDG.SOLNOTIF_CORREO1);
            $('#txtCorreo2').val(objSolicitudDG.SOLNOTIF_CORREO2);

            //---Carga Select combos (cboDocumento,cboPais,cboSexo)------------------ 
            //var cargarSelect = function () {
                $('#cboDocumento').val(objSolicitudDG.SOLPER_TIPODOC);
                $('#cboPais').val(objSolicitudDG.SOLPER_CODPAIS);
                $('#cboSexo').val(objSolicitudDG.SOLPER_SEXO);
                if(objSolicitudDG.SOLPER_TIPODOC===1){
                    $('#cboPais').val('174');
                    $('#cboPais').attr('disabled', true);
                    $('#txtDocumento').attr('maxlength', BuscaP('LONG_DNI'));
                    $('#txtAPaterno').attr('disabled',true);
                    $('#txtNombres').attr('disabled',true);
                    $('#txtAMaterno').attr('disabled',true);
                    if(objSolicitudDG.SOLPER_SEXO===1){
                        $('#txtACasada').attr('disabled',true);	
                    }
                } else {
                    $('#cboPais').attr('disabled', false);
                }
                
                switch ($('#cboDocumento').val()) {
                    case '2':
                        $('#txtDocumento').attr('maxlength', BuscaP('LONG_CEX'));
                        break;
                    case '3':
                        $('#txtDocumento').attr('maxlength', 15);
                        break;
                    case '4':
                        $('#txtDocumento').attr('maxlength', BuscaP('LONG_PAS'));
                        break;
                }
            //};setTimeout(cargarSelect, 1000);
			
            //---Carga Select combos (cboDepartamentoDA, cboProvinciaDA, cboDistritoDA) ----
            //if(objSolicitudDG.SOLPER_UBIGEOESTABLESI!==undefined){
			if(objSolicitudDG.SOLNOTIF_CODUBIGEO!==undefined){
                ubigeoNotificacion = objSolicitudDG.SOLNOTIF_CODUBIGEO.split(',');
                //setTimeout(function () {
                    $('#cboDepartamentoDA').val(ubigeoNotificacion[1].substr(0, 2));
                    $('#cboDepartamentoDA').trigger('change');
                    //setTimeout(function () {
                        $('#cboProvinciaDA').val(ubigeoNotificacion[1].substr(0, 4));
                        $('#cboProvinciaDA').trigger('change');
                        //setTimeout(function () {
                            $('#cboDistritoDA').val(ubigeoNotificacion[0]);
                            $('#cboDistritoDA').trigger('change');
                        //}, 3000);
                    //}, 2000);
                //}, 1000);
            }
            /*
		if(objSolicitudDG.SOLPER_UBIGEOESTABLESI!==undefined){
	        ubigeoDocAdjuntos = objSolicitudDG.SOLPER_UBIGEOESTABLESI.split(',');
			cambiarUbigeo(	$('#cboDepartamentoDA'), 
							$('#cboProvinciaDA'), 
							$('#cboDistritoDA'),
							$('#cboIPAutoridadSanit'),
							ubigeoDocAdjuntos[1].substr(0, 2),
							ubigeoDocAdjuntos[1].substr(2, 2),
							ubigeoDocAdjuntos[1].substr(4, 2),
							objSolicitudDS.CO_IDAUTSANITARIAESTABL_SI							
						);
		}
		*/
		/*
		if(objSolicitudDG.SOLNOTIF_CODUBIGEO!==undefined){
			ubigeoNotificacion = objSolicitudDG.SOLNOTIF_CODUBIGEO.split(',');
			//setTimeout(function () {
				$('#cboDepartamento').val(ubigeoNotificacion[1].substr(0, 2));
				$('#cboDepartamento').trigger('change');
				//setTimeout(function () {
					$('#cboProvincia').val(ubigeoNotificacion[1].substr(0, 4));
					$('#cboProvincia').trigger('change');
					//setTimeout(function () {
						$('#cboDistrito').val(ubigeoNotificacion[0]);
						$('#cboDistrito').trigger('change');
					//}, 3000);
				//}, 2000);
			//}, 1000);
		}
        */
		
		/*
		if(objSolicitudDG.SOLNOTIF_CODUBIGEO!==undefined){
			ubigeoNotificacion = objSolicitudDG.SOLNOTIF_CODUBIGEO.split(',');
			cambiarUbigeo(	$('#cboDepartamento'), 
							$('#cboProvincia'), 
							$('#cboDistrito'),
							ubigeoNotificacion[1].substr(0, 2),
							ubigeoNotificacion[1].substr(2, 2),
							ubigeoNotificacion[1].substr(4, 2)
						);
		}
        */
		
        //var cargarSelect = function () {
            //---------------------------------------------------------------------
            $('#cboDocumento').val(objSolicitudDG.SOLPER_TIPODOC);
            $('#cboPais').val(objSolicitudDG.SOLPER_CODPAIS);
            $('#cboSexo').val(objSolicitudDG.SOLPER_SEXO);
            
            if(objSolicitudDG.SOLPER_TIPODOC===1){
            	$('#txtAPaterno').attr('disabled',true);
            	$('#txtNombres').attr('disabled',true);
            	$('#txtAMaterno').attr('disabled',true);            	
				$('#txtACasada').attr('disabled',true);
            }else{
				// [BIT] CMIC 03/11/2015
				if(objSolicitudDG.SOLPER_SEXO===1){										
					$('#txtACasada').attr('disabled',true);						
            	}else if(objSolicitudDG.SOLPER_SEXO===2){		
					$('#txtACasada').attr('disabled',false);	
				}
			}
			
            
            //---------------------------------------------------------------------
        //};
        //setTimeout(cargarSelect, 1000);
        
        if(objSolicitudDS===null){
        	endCargando();
        	return false;
        }
        
        $('#idSolicitudIPRESS').val(objSolicitudDS.CO_IDSOLICIPRESS_SI);
        //var cargarSelectVia = function () {
            //---------------------------------------------------------------------
            $('#cboVia').val(objSolicitudDG.SOLNOTIF_IDVIA);
            //---------------------------------------------------------------------
        //};
        //setTimeout(cargarSelectVia, 2000);

        //-----FIN DATOS PRIMERA PESTAÑA

        //-----------SEGUNDA PESTAÑA
        if (objSolicitudDS.TI_PERSONAPROP_SI === 1) {
            $("#datos-generales-radio-persona-natural").click();
            $("#divPersonaNatural").show();
            $("#divPersonaJuridica").hide();
        }
        if (objSolicitudDS.TI_PERSONAPROP_SI === 2) {
            $("#datos-generales-radio-persona-juridica").click();
            $("#divPersonaJuridica").show();
            $("#divPersonaNatural").hide();
        }

		//DATOS DE PERSONA NATURAL
        $('#txtRucRA').val(objSolicitudDS.NU_RUCPROP_SI);
        $('#txtNroDocRA').val(objSolicitudDS.NU_DOC_PP);
        $('#txtFecNacRA').val(objSolicitudDS.FE_FECHANAC_PP);
        $('#txtAPaternoRA').val(objSolicitudDS.AP_PATERNO_PP);
        $('#txtAMaternoRA').val(objSolicitudDS.AP_MATERNO_PP);
        $('#txtACasadaRA').val(objSolicitudDS.AP_CASADA_PP);
        $('#txtNombresRA').val(objSolicitudDS.DE_NOMBRE_PP);

        //DATOS DE PERSAONA JURIDICA
                
                //var cargarSelectPropietario = function () {
                    $('#cbdoTipoDocRA').val(objSolicitudDS.TI_TIPODOC_PP);
                    $('#cboPaisRA').val(objSolicitudDS.CO_IDPAIS_PP);
                    $('#cboSexoRA').val(objSolicitudDS.TI_IDSEXO_PP);
                    if (objSolicitudDS.TI_TIPODOC_PP === 1) {
                        $('#cboPaisRA').val('174');
                        $('#cboPaisRA').attr('disabled', true);
                        $('#txtNroDocRA').attr('maxlength', BuscaP('LONG_DNI'));
                        $('#txtAPaternoRA').attr('disabled', true);
                        $('#txtNombresRA').attr('disabled', true);
                        $('#txtAMaternoRA').attr('disabled', true);
                        if (objSolicitudDS.TI_IDSEXO_PP === 1) {
                            $('#txtACasadaRA').attr('disabled', true);
                        }
                    }else{
                        $('#cboPaisRA').attr('disabled', false);
                    }                    
                    switch ($('#cbdoTipoDocRA').val()) {
                        case '2':
                            $('#txtNroDocRA').attr('maxlength', BuscaP('LONG_CEX'));
                            break;
                        case '3':
                            $('#txtNroDocRA').attr('maxlength', 15);
                            break;
                        case '4':
                            $('#txtNroDocRA').attr('maxlength', BuscaP('LONG_PAS'));
                            break;
                    }
                //};setTimeout(cargarSelectPropietario, 500);
            //}
            
            if (objSolicitudDS.TI_PERSONAPROP_SI == 2 || objSolicitudDS.TI_PERSONAPROP_SI == 3) {
                //DATOS DE PERSAONA JURIDICA
                if (objSolicitudDS.TI_PERSONAPROP_SI == 2) {
                    $("#datos-generales-radio-persona-juridica-publica").click();
                } else {
                    $("#datos-generales-radio-persona-juridica-privada").click();
                }
                $("#divPersonaJuridica").show();
                $("#divPersonaNatural").hide();
                $('#txtRucPJRA').val(objSolicitudDS.NU_RUCPROP_SI);
                $('#txtRSocialPJRA').val($.trim(objSolicitudDS.DE_RAZONSOCIALPROP_SI));
                $('#txtNComercialPJRA').val($.trim(objSolicitudDS.NO_COMERCIALPROP_SI));
            }
            $('#mostarPN_PJ').click();
            //--DATOS COMPLEMENTARIOS
            $('#txtTelRA').val(objSolicitudDS.NU_TELEFONOPROP_SI);
            $('#txtFaxRA').val(objSolicitudDS.NU_FAXPROP_SI);
            $('#txtEmailRA').val(objSolicitudDS.DE_CORREOELECTRPROP_SI);
            $('#txtReEmailRA').val(objSolicitudDS.DE_CORREOELECTRPROP_SI);
            $('#txtWebRA').val(objSolicitudDS.DE_PAGINAWEBPROP_SI);
            //--DIRECCIÓN
            $('#cboViaNombreRA').val(objSolicitudDS.DE_VIA_DP);
            $('#txtNroRA').val(objSolicitudDS.NU_NUMERO_DP);
            $('#txtNroPisoRA').val(objSolicitudDS.NU_PISO_DP);
            $('#txtNroDptoRA').val(objSolicitudDS.NU_DEPARTAMENTO_DP);
            $('#txtInteriorRA').val(objSolicitudDS.NU_INTERIOR_DP);
            $('#txtManzanaRA').val(objSolicitudDS.DE_MANZANA_DP);
            $('#txtLoteRA').val(objSolicitudDS.DE_LOTE_DP);
            $('#txtKmRA').val(objSolicitudDS.DE_KILOMETRO_DP);
            $('#txtUrRA').val(objSolicitudDS.DE_URBANIZ_DP);
            $('#txtRefRA').val(objSolicitudDS.DE_REFERENCIA_DP);
        
            //--seleccionar combos (,cboProRA,cboDisRA) 
            if (objSolicitudDS.DP_CODUcboDepRABIGEO !== undefined){
                ubigeoDatosPropietario = objSolicitudDS.DP_CODUBIGEO.split(',');
                //setTimeout(function () {
                        $('#cboDepRA').val(ubigeoDatosPropietario[1].substr(0, 2));
                        $('#cboDepRA').trigger('change');
                        //setTimeout(function () {
                                $('#cboProRA').val(ubigeoDatosPropietario[1].substr(0, 4));
                                $('#cboProRA').trigger('change');
                                //setTimeout(function () {
                                        $('#cboDisRA').val(ubigeoDatosPropietario[0]);
                                        $('#cboDisRA').trigger('change');
                                //}, 3000);
                        //}, 2000);
                //}, 1000);
            }
            //---Carga combo (cboViaRA) ---
            $('#cboViaRA').val(objSolicitudDS.CO_IDTIPOVIA_DP);
            
            //--Datos del Representante Legal---------------
            console.log("Datos del Representante Legal:");    
            $('#txtNroDocRRLL').val(objSolicitudDS.NU_DOC_PRL);
            $('#txtFecNacRRLL').val(objSolicitudDS.FE_FECHANAC_PRL);
            $('#txtAPaternoRRLL').val(objSolicitudDS.AP_PATERNO_PRL);
            $('#txtAMaternoRRLL').val(objSolicitudDS.AP_MATERNO_PRL);
            $('#txtACasadaRRLL').val(objSolicitudDS.AP_CASADA_PRL);
            $('#txtNombresRRLL').val(objSolicitudDS.DE_NOMBRE_PRL);
            $('#txtTelRRLL').val(objSolicitudDS.NU_TELEFONOREPLEGAL_SI);
            $('#txtEmailRRLL').val(objSolicitudDS.DE_CORREOELECTRREPLEGAL_SI);
            $('#txtReEmailRRLL').val(objSolicitudDS.DE_CORREOELECTRREPLEGAL_SI);
            
            //var cargarSelectRepLegal = function () {
                $('#cboTipoDocRRLL').val(objSolicitudDS.TI_TIPODOC_PRL);
                $('#cboPaisRRLL').val(objSolicitudDS.CO_IDPAIS_PRL);
                $('#cboSexoRRLL').val(objSolicitudDS.TI_IDSEXO_PRL);
                $('#cboProfesionRRLL').val(objSolicitudDS.CO_IDPROFREPLEGAL_SI);
                if (objSolicitudDS.TI_TIPODOC_PRL === 1) {
                    $('#cboPaisRRLL').val('174');
                    $('#cboPaisRRLL').attr('disabled', true);
                    $('#cboPaisRRLL').attr('maxlength', BuscaP('LONG_DNI'));
                    $('#txtAPaternoRRLL').attr('disabled', true);
                    $('#txtAMaternoRRLL').attr('disabled', true);
                    $('#txtNombresRRLL').attr('disabled', true);
                    $('#cboPaisRRLL').attr('disabled', true);
                    if (objSolicitudDS.TI_IDSEXO_PRL === 1) {
                        $('#txtACasadaRRLL').attr('disabled', true);
                    }
                }else{
                    $('#cboPaisRRLL').attr('disabled', false);
                }                    
                switch ($('#cboTipoDocRRLL').val()) {
                    case '2':
                        $('#cboTipoDocRRLL').attr('maxlength', BuscaP('LONG_CEX'));
                        break;
                    case '3':
                        $('#cboTipoDocRRLL').attr('maxlength', 15);
                        break;
                    case '4':
                        $('#cboTipoDocRRLL').attr('maxlength', BuscaP('LONG_PAS'));
                        break;
                }
            //};setTimeout(cargarSelectRepLegal, 500);
            
            //---Datos del Establecimiento ----------------------------------
            /*
			console.log("Datos del Establecimiento:");
            var cargarSelectEstableTipo = function () {
                idASActualizacion=objSolicitudDS.TI_TIPOESTABL_SI;
                $('#cboTipoEstablecimiento').val(objSolicitudDS.TI_TIPOESTABL_SI);
                $('#cboTipoEstablecimiento').trigger('change');
            };setTimeout(cargarSelectEstableTipo, 500);
			*/
            //--ADICONADO POR DLARIDO
            $('#txtNuSerieDE').val(objSolicitudDS.NU_SERIEESTABL_SI);
            if (objSolicitudDS.TI_PERSONAPROP_SI === 3) {
                $('#lblNumeroSerie').html("N&Uacute;MERO DE SERIE DEL RUC "+ (objSolicitudDS.NU_RUCPROP_SI == undefined ? '' : objSolicitudDS.NU_RUCPROP_SI ) +" (*)");
            }else{
                $('#lblNumeroSerie').html("N&Uacute;MERO DE SERIE DEL RUC "+ (objSolicitudDS.NU_RUCPROP_SI == undefined ? '' : objSolicitudDS.NU_RUCPROP_SI ) );
            }
            $('#txtRazonSocialDE').val(objSolicitudDS.NO_RAZONSOCIALESTABL_SI);
            $('#txtNComercialDE').val(objSolicitudDS.NO_COMERCIALESTABL_SI);
            //---DIRECCIÓN----------------------------------------------------
            $('#txtViaDetDE').val(objSolicitudDS.DE_VIA_DE);
            $('#txtNroDE').val(objSolicitudDS.NU_NUMERO_DE);
            $('#txtNroPisoDE').val(objSolicitudDS.NU_PISO_DE);
            $('#txtNroDepDE').val(objSolicitudDS.NU_DEPARTAMENTO_DE);
            $('#txtNroIntDE').val(objSolicitudDS.NU_INTERIOR_DE);
            $('#txtMzDE').val(objSolicitudDS.DE_MANZANA_DE);
            $('#txtLtDE').val(objSolicitudDS.DE_LOTE_DE);
            $('#txtKlDE').val(objSolicitudDS.DE_KILOMETRO_DE);
            $('#txtUrDE').val(objSolicitudDS.DE_URBANIZ_DE);
            $('#txtRefDE').val(objSolicitudDS.DE_REFERENCIA_DE);
            //var cargarSelectEstableVia = function () {
                $('#cboViaDE').val(objSolicitudDS.CO_IDTIPOVIA_DE);
            //};setTimeout(cargarSelectEstableVia, 500);
            
            //--Datos DISA/DIRESA/GERESA, INSTITUCIÓN A LA QUE PERTENECE (*), REDES y MICROREDES
            //var cargarSelectAutSanitaria = function () {
                $('#cboAutSanitaria').val(objSolicitudDS.CO_IDAUTSANITARIAESTABL_SI);
            //};setTimeout(cargarSelectAutSanitaria, 500);
            if(objSolicitudDS.CO_IDINSTITUCIONESTABL_SI === "10" || objSolicitudDS.CO_IDINSTITUCIONESTABL_SI === "3" || objSolicitudDS.CO_IDINSTITUCIONESTABL_SI === "4" ||
                objSolicitudDS.CO_IDINSTITUCIONESTABL_SI === "5" || objSolicitudDS.CO_IDINSTITUCIONESTABL_SI === "6" || objSolicitudDS.CO_IDINSTITUCIONESTABL_SI === "12" ||
                objSolicitudDS.CO_IDINSTITUCIONESTABL_SI === "13"){//caso SANIDAD EJERCITO, FUERZA AEREA, PNP, MARINA, APP, INPE y PRIVADO 
                 $('#cboRedEst, #cboMicroRedEst, #cboUniEjeEst, #cboEstClasEst').empty();
                 $('#divRed, #divMicroRed, #divUE, #divEstClasEst').css('display', 'none');
            }else{
                if (objSolicitudDS.CO_IDINSTITUCIONESTABL_SI === "2") {//caso ESSALUD
                    $('#divRed').css('display', 'block');
                    $('#divMicroRed, #divUE, #divEstClasEst').css('display', 'none');
                } else if (objSolicitudDS.CO_IDINSTITUCIONESTABL_SI === "1" || objSolicitudDS.CO_IDINSTITUCIONESTABL_SI === "7") {//caso IGSS (MINSA) ó caso GOBIERNO REGIONAL                    
                    $('#divRed, #divMicroRed, #divUE, #divEstClasEst').css('display', 'block');
                } else if (objSolicitudDS.CO_IDINSTITUCIONESTABL_SI === "8" || objSolicitudDS.CO_IDINSTITUCIONESTABL_SI === "9") {//caso MUNICIPALIDAD PROVINCIAL ó MUNICIPALIDAD DISTRITAL
                    $('#divUE, #divEstClasEst').css('display', 'block');
                    $('#divRed, #divMicroRed').css('display', 'none');
                }
            }
            
            
            if(objSolicitudDS.CO_IDINSTITUCIONESTABL_SI !== undefined ){
                cargar = false;
                try {
                    //var timeAutInstitucion = setInterval(function () {
                        if (flagAutSanit === true) {
                            $('#cboInstitucionEst').val(objSolicitudDS.CO_IDINSTITUCIONESTABL_SI);
                            $('#cboInstitucionEst').trigger('change');
                            cargar = true;
                            //clearInterval(timeAutInstitucion);
                        }
                    //}, 1000);
                } catch (err) {
                    console.log('ERROR EN SETEAR INSTITUCION ActualizarSolicitud');
                }
            }
            
            //if(objSolicitudDS.CO_IDRED_SI !== undefined ){
                console.log("cboRedEst :"+objSolicitudDS.CO_IDRED_SI);
                try {
                    //var timeAut = setInterval(function () {
                        if (flagAutSanit === true) {                            
							$('#cboRedEst').val(objSolicitudDS.CO_IDRED_SI);
							$('#cboRedEst').trigger('change');                            
                            //clearInterval(timeAut);
                        }
                    //}, 1200);
                } catch (err) {
                    console.log('ERROR AL SETEAR AUTORIDAD SANITARIA ActualizarSolicitud');
                }
            //}
            
            //if(objSolicitudDS.CO_IDMICRORED_SI !== undefined ){
                console.log("cboMicroRedEst :"+objSolicitudDS.CO_IDMICRORED_SI);
                try {
                    //var timeMicroRed = setInterval(function () {
                        $('#cboRedEst').val(objSolicitudDS.CO_IDRED_SI);
                        //if ((flagRed === true && flagAutSanit === true) && $('#cboRedEst').val() !== null && $('#cboRedEst').val() !== '' && $('#cboRedEst').val() !== undefined) {

                            //var EstClasEst = function () {
                                console.log('es cboMicroRedEst :' + objSolicitudDS.CO_IDMICRORED_SI);
                                $('#cboMicroRedEst').val(objSolicitudDS.CO_IDMICRORED_SI);
                                $('#cboMicroRedEst').trigger('change');
                                //clearInterval(timeMicroRed);
                                //endCargando();
                            //};
                            //setTimeout(EstClasEst, 1500);
                            //clearInterval(timeMicroRed);

                        //}
                    //}, 1300);
                } catch (err) {
                    console.log('ERROR AL SETEAR MICRO RED ActualizarSolicitud');
                }
            //}
            
            if(objSolicitudDS.CO_IDUNIDADEJE_SI !== undefined ){
                console.log("cboUniEjeEst :"+objSolicitudDS.CO_IDUNIDADEJE_SI);
                try {
                    //var timeAUniEje = setInterval(function () {
                        if (flagUniEje === true) {
                            console.log(flagUniEje);
                            $('#cboUniEjeEst').val(objSolicitudDS.CO_IDUNIDADEJE_SI);
                            $('#cboUniEjeEst').trigger('change');
                            //clearInterval(timeAUniEje);
                        }
                    //}, 1700);
                } catch (err) {
                    console.log('ERROR AL SETEAR AUTORIDAD EJECUTORA ActualizarSolicitud');
                }
            }
        
            //if(objSolicitudDS.CO_IDCLAS_SI !== undefined ){
                console.log("cboEstClasEst :"+objSolicitudDS.CO_IDCLAS_SI);
                try {
                    //var timeAutEstClas = setInterval(function () {
                        if (flagAutSanit === true) {
                            //var Estclas = function () {
								$('#cboEstClasEst').val(objSolicitudDS.CO_IDCLAS_SI);
                                $('#cboEstClasEst').trigger('change');                                
                            //};
                            //setTimeout(Estclas, 2300);
                            //clearInterval(timeAutEstClas);
                        }
                    //}, 2000);
                } catch (err) {
                    console.log('ERROR AL SETEAR AUTORIDAD ESTCLAS ActualizarSolicitud');
                }
            //}
            //--DATOS COMPLEMENTARIOS---------------------------
            $('#txtTelDatosDE').val(objSolicitudDS.NU_TELEFONOESTABL_SI);
            $('#txtTelEmerDatosDE').val(objSolicitudDS.NU_TELEFONOEMERGESTABL_SI);
            $('#txtRadioDatosDE').val(objSolicitudDS.DE_RADIOESTABL_SI);
            $('#txtFaxDatosDE').val(objSolicitudDS.NU_FAXESTABL_SI);
            $('#txtEmailDatosDE').val(objSolicitudDS.DE_CORREOELECTRESTABL_SI);
            $('#txtReEmailDatosDE').val(objSolicitudDS.DE_CORREOELECTRESTABL_SI);
            $('#txtWebDatosDE').val(objSolicitudDS.DE_PAGINAWEBESTABL_SI);
            $('#txtFecIniDatosDE').val(objSolicitudDS.FE_FECHAINICACTESTABL_SI);
            $('#txtFecCreacionDatosDE').val(objSolicitudDS.FE_FECHACREACIONESTABL_SI);
            $('#txtNroResolDatosDE').val(objSolicitudDS.NU_RESOLUCIONESTABL_SI);
            
            //---Datos del Director Médico o Representante de la Atención de Salud------------------------
            console.log("Datos del Director Médico o Representante de la Atención de Salud:");
            $('#txtNroDocRAS').val(objSolicitudDS.NU_DOC_PDM);
            $('#txtFecNacRAS').val(objSolicitudDS.FE_FECHANAC_PDM);
            $('#txtAPaternoRAS').val(objSolicitudDS.AP_PATERNO_PDM);
            $('#txtAMaternoRAS').val(objSolicitudDS.AP_MATERNO_PDM);
            $('#txtACasadaRAS').val(objSolicitudDS.AP_CASADA_PDM);
            $('#txtNombresRAS').val(objSolicitudDS.DE_NOMBRE_PDM);
            $('#txtNroColegiaturaRAS').val(objSolicitudDS.NU_COLEGIATURA_SI);
            $('#txtRegNacioRNERAS').val(objSolicitudDS.NU_RNEDIRMED_SI);
            $('#txtTelRAS').val(objSolicitudDS.NU_TELEFONODIRMED_SI);
            $('#txtEmailRAS').val(objSolicitudDS.DE_CORREOELECTRDIRMED_SI);
            $('#txtReEmailRAS').val(objSolicitudDS.DE_CORREOELECTRDIRMED_SI);
            
            //var cargarSelectDirMedico = function () {
                $('#cboDocIdenRAS').val(objSolicitudDS.TI_TIPODOC_PDM);
                $('#cboPaisRAS').val(objSolicitudDS.CO_IDPAIS_PDM);
                $('#cboSexoRAS').val(objSolicitudDS.TI_IDSEXO_PDM);
                $('#cboColeProfRAS').val(objSolicitudDS.CO_IDCOLEGPROFDIRMED_SI);
                if (objSolicitudDS.TI_TIPODOC_PDM === 1) {
                    $('#cboPaisRAS').val('174');
                    $('#cboPaisRAS').attr('disabled', true);
                    $('#txtNroDocRAS').attr('maxlength', BuscaP('LONG_DNI'));
                    $('#txtAPaternoRAS').attr('disabled', true);
                    $('#txtAMaternoRAS').attr('disabled', true);
                    $('#txtNombresRAS').attr('disabled', true);
                    $('#cboPaisRAS').attr('disabled', true);
                    if (objSolicitudDS.TI_IDSEXO_PDM === 1) {
                        $('#txtACasadaRAS').attr('disabled', true);
                    }
                }else{
                    $('#cboPaisRAS').attr('disabled', false);
                }
                
                switch ($('#cboDocIdenRAS').val()) {
                    case '2':
                        $('#txtNroDocRAS').attr('maxlength', BuscaP('LONG_CEX'));
                        break;
                    case '3':
                        $('#txtNroDocRAS').attr('maxlength', 15);
                        break;
                    case '4':
                        $('#txtNroDocRAS').attr('maxlength', BuscaP('LONG_PAS'));
                        break;
                }
            //};setTimeout(cargarSelectDirMedico, 500);
            
            //---Recursos Humanos----carga grilla RRHH agregado por dlarico
            if (objSolicitudRH.length > 0) {
                fu_cargaGrillaRRHH(objSolicitudRH);
            }
            
            //----Datos Adicionales-------------------------
            console.log("Datos Adicionales:");
            $('#txtNroEstDA').val(objSolicitudDS.NU_AMBIENTESTABL_SI);
            $('#txtHorarioAtenDA').val(objSolicitudDS.DE_HORARIOATENCION_SI);
            $('#txtCampoClinicoDA').val(objSolicitudDS.DE_CAMPOCLINICO_SI);
            $('#txtEspecificarDA').val(objSolicitudDS.DE_POBLASIGNADA_SI);
            //var cargarSelectDatoAdicional = function () {
                $('#cboCuentaPoblacionDA').val(objSolicitudDS.IN_FLAGPOBLASIG_SI);
                if(objSolicitudDS.IN_FLAGPOBLASIG_SI !== "1"){
                    $('#cboCuentaPoblacionDA').change();
                }
                $('#cboTipoAtencionDA').val(objSolicitudDS.TI_TIPOATENCION_SI);
                $('#cboGrupoEtarioDA').val(objSolicitudDS.TI_GRUPOETARIO_SI);
            //};setTimeout(cargarSelectDatoAdicional, 1000);
            

        /*CARGA SECCION DE ADOLECENTES*/
        try{
            setTimeout(function () {
                if( objSolicitudDS.ADOLECENTES !== undefined && objSolicitudDS.ADOLECENTES != '0'){
                    $('#divHoraAdo').show();
                    var arreglo = objSolicitudDS.ADOLECENTES.split(",");
                    arrDiasSelec=objSolicitudDS.ADOLECENTES.split(',');
                    for(var i = 0; i < arreglo.length; i++){
                          var dia = arreglo[i];
                          switch(dia){
                                case '1':
                                  $('#chkL').prop( "checked", true);
                                  break;
                                case '2':
                                  $('#chkM').prop( "checked", true);
                                  break;
                                case '3':
                                  $('#chkMi').prop( "checked", true);
                                  break;
                                case '4':
                                  $('#chkJ').prop( "checked", true);
                                  break;
                                case '5':
                                  $('#chkV').prop( "checked", true);
                                  break;
                                case '6':
                                  $('#chkS').prop( "checked", true);
                                  break;
                                case '7':
                                  $('#chkD').prop( "checked", true);
                                  break;
                          }
                    }
                    $('#txtHorarioAtenADODA').val(objSolicitudDS.HORARIOADOLECENTE);
                }else{
                    $('#divHoraAdo').hide();
                    $('#chkL').prop( "checked", true);
                    $('#chkM').prop( "checked", true);
                    $('#chkMi').prop( "checked", true);
                    $('#chkJ').prop( "checked", true);
                    $('#chkV').prop( "checked", true);
                    $('#chkS').prop( "checked", true);
                    $('#chkD').prop( "checked", true);
                }

            }, 3000);
        }catch(e){
            console.log('no tiene adolecentes');
        }
        /*****************************/
		
		//DATOS DE PERSAONA JURIDICA
        $('#txtRucPJRA').val(objSolicitudDS.NU_RUCPROP_SI);
        $('#txtRSocialPJRA').val(objSolicitudDS.DE_RAZONSOCIALPROP_SI);
        $('#txtNComercialPJRA').val(objSolicitudDS.NO_COMERCIALPROP_SI);
		
		if (objSolicitudDS.DP_CODUBIGEO !== undefined){
			ubigeoDatosPropietario = objSolicitudDS.DP_CODUBIGEO.split(',');
			//setTimeout(function () {
				$('#cboDepRA').val(ubigeoDatosPropietario[1].substr(0, 2));
				$('#cboDepRA').trigger('change');
				//setTimeout(function () {
					$('#cboProRA').val(ubigeoDatosPropietario[1].substr(0, 4));
					$('#cboProRA').trigger('change');
					//setTimeout(function () {
						$('#cboDisRA').val(ubigeoDatosPropietario[0]);
						$('#cboDisRA').trigger('change');
					//}, 3000);
				//}, 2000);
			//}, 1000);
		}
        
		
		/*
		if (objSolicitudDS.DP_CODUBIGEO!==undefined){
			ubigeoDatosPropietario = objSolicitudDS.DP_CODUBIGEO.split(',');
			cambiarUbigeo(	$('#cboDepRA'), 
							$('#cboProRA'), 
							$('#cboDisRA'),
							ubigeoDatosPropietario[1].substr(0, 2),
							ubigeoDatosPropietario[1].substr(2, 2),
							ubigeoDatosPropietario[1].substr(4, 2)
						);
		}
		*/
        $('#cboViaNombreRA').val(objSolicitudDS.DE_VIA_DP);
        $('#txtNroRA').val(objSolicitudDS.NU_NUMERO_DP);
        $('#txtNroPisoRA').val(objSolicitudDS.NU_PISO_DP);
        $('#txtNroDptoRA').val(objSolicitudDS.NU_DEPARTAMENTO_DP);
        $('#txtInteriorRA').val(objSolicitudDS.NU_INTERIOR_DP);
        $('#txtManzanaRA').val(objSolicitudDS.DE_MANZANA_DP);
        $('#txtLoteRA').val(objSolicitudDS.DE_LOTE_DP);
        $('#txtKmRA').val(objSolicitudDS.DE_KILOMETRO_DP);
        $('#txtUrRA').val(objSolicitudDS.DE_URBANIZ_DP);
        $('#txtRefRA').val(objSolicitudDS.DE_REFERENCIA_DP);

        $('#txtTelRA').val(objSolicitudDS.NU_TELEFONOPROP_SI);
        $('#txtFaxRA').val(objSolicitudDS.NU_FAXPROP_SI);
        $('#txtEmailRA').val(objSolicitudDS.DE_CORREOELECTRPROP_SI);
        $('#txtReEmailRA').val(objSolicitudDS.DE_CORREOELECTRPROP_SI);
        $('#txtWebRA').val(objSolicitudDS.DE_PAGINAWEBPROP_SI);

        $('#txtNroDocRRLL').val(objSolicitudDS.NU_DOC_PRL);
        $('#txtFecNacRRLL').val(objSolicitudDS.FE_FECHANAC_PRL);
        $('#txtAPaternoRRLL').val(objSolicitudDS.AP_PATERNO_PRL);
        $('#txtAMaternoRRLL').val(objSolicitudDS.AP_MATERNO_PRL);
        $('#txtACasadaRRLL').val(objSolicitudDS.AP_CASADA_PRL);
        $('#txtNombresRRLL').val(objSolicitudDS.DE_NOMBRE_PRL);
        $('#txtTelRRLL').val(objSolicitudDS.NU_TELEFONOREPLEGAL_SI);
        $('#txtEmailRRLL').val(objSolicitudDS.DE_CORREOELECTRREPLEGAL_SI);
        $('#txtReEmailRRLL').val(objSolicitudDS.DE_CORREOELECTRREPLEGAL_SI);
        $('#txtRazonSocialDE').val(objSolicitudDS.NO_RAZONSOCIALESTABL_SI);
        $('#txtNComercialDE').val(objSolicitudDS.NO_COMERCIALESTABL_SI);
        //------------------------------------------------------------------------
        $('#txtViaDetDE').val(objSolicitudDS.DE_VIA_DE);
        $('#txtNroDE').val(objSolicitudDS.NU_NUMERO_DE);
        $('#txtNroPisoDE').val(objSolicitudDS.NU_PISO_DE);
        $('#txtNroDepDE').val(objSolicitudDS.NU_DEPARTAMENTO_DE);
        $('#txtNroIntDE').val(objSolicitudDS.NU_INTERIOR_DE);
        $('#txtMzDE').val(objSolicitudDS.DE_MANZANA_DE);
        $('#txtLtDE').val(objSolicitudDS.DE_LOTE_DE);
        $('#txtKlDE').val(objSolicitudDS.DE_KILOMETRO_DE);
        $('#txtUrDE').val(objSolicitudDS.DE_URBANIZ_DE);
        $('#txtRefDE').val(objSolicitudDS.DE_REFERENCIA_DE);
		
		var cargarSelectPestania = function () {
            //---------------------------------------------------------------------
            $('#cbdoTipoDocRA').val(objSolicitudDS.TI_TIPODOC_PP);
            $('#cboPaisRA').val(objSolicitudDS.CO_IDPAIS_PP);
            $('#cboSexoRA').val(objSolicitudDS.TI_IDSEXO_PP);
            $('#cboViaRA').val(objSolicitudDS.CO_IDTIPOVIA_DP);
            
            if ((document.getElementById('cbdoTipoDocRA').options[document.getElementById('cbdoTipoDocRA').selectedIndex].text).toUpperCase() === "DNI") { // PERU
                $('#cboPaisRA').val('174');
                $('#cboPaisRA').attr('disabled', true);
                $('#txtNroDocRA').attr('maxlength', BuscaP('LONG_DNI'));
				
				$('#txtACasadaRA').attr('disabled', true);
				
            } else {
				// [BIT] CMIC 03/11/2015
				if (idOpcion == 1){
					$('#cboPaisRA').attr('disabled', true);
				}else{
					$('#cboPaisRA').attr('disabled', false);
				}     

				if ($('#cboSexoRA').val() == '1'){
					$('#txtACasadaRA').attr('disabled', true);
				}else if ($('#cboSexoRA').val() == '2'){
					$('#txtACasadaRA').attr('disabled', false);
				}
            }

            switch ($('#cbdoTipoDocRA').val()) {
                case '2':
                    $('#txtNroDocRA').attr('maxlength', BuscaP('LONG_CEX'));
                    break;
                case '3':
                    $('#txtNroDocRA').attr('maxlength', 15);
                    break;
                case '4':
                    $('#txtNroDocRA').attr('maxlength', BuscaP('LONG_PAS'));
                    break;
            }
            
			//console.log('*/*/*/* '+ objSolicitudDS.TI_TIPODOC_PP);
            if(objSolicitudDS.TI_TIPODOC_PP===1){
            	$('#txtAPaternoRA').attr('disabled',true);
            	$('#txtAMaternoRA').attr('disabled',true);
            	$('#txtNombresRA').attr('disabled',true);
            	if(objSolicitudDS.TI_IDSEXO_PP===1){
            		$('#txtACasadaRA').attr('disabled',true);	
            	}
            }
            //setTimeout(ValidarPais(), 3000);
            if ((document.getElementById('cboDocumento').options[document.getElementById('cboDocumento').selectedIndex].text).toUpperCase() === "DNI") { // PERU
                $('#cboPais').val('174');
                $('#cboPais').attr('disabled', true);
                $('#txtDocumento').attr('maxlength', BuscaP('LONG_DNI'));
            } else {
				// [BIT] CMIC 03/11/2015
				if (idOpcion == 1){
					$('#cboPais').attr('disabled', true);
				}else{
					$('#cboPais').attr('disabled', false);
				}                
            }

            switch ($('#cboDocumento').val()) {
                case '2':
                    $('#txtDocumento').attr('maxlength', BuscaP('LONG_CEX'));
                    break;
                case '3':
                    $('#txtDocumento').attr('maxlength', 15);
                    break;
                case '4':
                    $('#txtDocumento').attr('maxlength', BuscaP('LONG_PAS'));
                    break;
            }
            
            //---------------------------------------------------------------------
            $('#cboTipoDocRRLL').val(objSolicitudDS.TI_TIPODOC_PRL);
            $('#cboPaisRRLL').val(objSolicitudDS.CO_IDPAIS_PRL);
            $('#cboSexoRRLL').val(objSolicitudDS.TI_IDSEXO_PRL);
            if(objSolicitudDS.TI_TIPODOC_PRL===1){
            	$('#txtAPaternoRRLL').attr('disabled',true);
            	$('#txtAMaternoRRLL').attr('disabled',true);
            	$('#txtNombresRRLL').attr('disabled',true);
            	$('#cboPaisRRLL').attr('disabled',true);      
				// [BIT] CMIC 03/11/2015
				$('#txtACasadaRRLL').attr('disabled',true);	
            }else{
				if(objSolicitudDS.TI_IDSEXO_PRL===1){
            		$('#txtACasadaRRLL').attr('disabled',true);	
            	}else if(objSolicitudDS.TI_IDSEXO_PRL===2){
					$('#txtACasadaRRLL').attr('disabled',false);	
				}
			}
			// [BIT] CMIC 03/11/2015
			if (idOpcion == 1){
				$('#cboPaisRRLL').attr('disabled',true);
			}else{
				$('#cboPaisRRLL').attr('disabled',false);
			}
            
            $('#cboProfesionRRLL').val(objSolicitudDS.CO_IDPROFREPLEGAL_SI);
            //---------------------------------------------------------------------
            $('#cboViaDE').val(objSolicitudDS.CO_IDTIPOVIA_DE);
            //---------------------------------------------------------------------
            //$('#cboDocIdenRAS').val(objSolicitudDS.CO_IDTIPOVIA_DE);
            $('#cboColeProfRAS').val(objSolicitudDS.CO_IDCOLEGPROFDIRMED_SI);
            //---------------------------------------------------------------------
            $('#cboDocIdenRAS').val(objSolicitudDS.TI_TIPODOC_PDM);
            $('#cboPaisRAS').val(objSolicitudDS.CO_IDPAIS_PDM);
            $('#cboSexoRAS').val(objSolicitudDS.TI_IDSEXO_PDM);
            
            if(objSolicitudDS.TI_TIPODOC_PDM===1){
            	$('#txtAPaternoRAS').attr('disabled',true);
            	$('#txtAMaternoRAS').attr('disabled',true);
            	$('#txtNombresRAS').attr('disabled',true);
            	$('#cboPaisRAS').attr('disabled',true);
            	$('#txtACasadaRAS').attr('disabled',true);	
            }else{
				// [BIT] CMIC 03/11/2015
				if(objSolicitudDS.TI_IDSEXO_PDM===1){
            		$('#txtACasadaRAS').attr('disabled',true);	
            	}else if(objSolicitudDS.TI_IDSEXO_PDM===2){
					$('#txtACasadaRAS').attr('disabled',false);	
				}
			}
			// [BIT] CMIC 03/11/2015
			if (idOpcion == 1){
				$('#cboPaisRAS').attr('disabled',true);
			}else{
				$('#cboPaisRAS').attr('disabled',false);
			}
            
            if ((document.getElementById('cboDocIdenRAS').options[document.getElementById('cboDocIdenRAS').selectedIndex].text).toUpperCase() === "DNI") { // PERU
                $('#cboPaisRAS').val('174');
                $('#cboPaisRAS').attr('disabled', true);
                $('#txtNroDocRAS').attr('maxlength', BuscaP('LONG_DNI'));
            } else {
				// [BIT] CMIC 03/11/2015
				if (idOpcion == 1){
					$('#cboPaisRAS').attr('disabled', true);	
				}else{
					$('#cboPaisRAS').attr('disabled', false);
				}                
            }

            switch ($('#cboDocIdenRAS').val()) {
                case '2':
                    $('#txtNroDocRAS').attr('maxlength', BuscaP('LONG_CEX'));
                    break;
                case '3':
                    $('#txtNroDocRAS').attr('maxlength', 15);
                    break;
                case '4':
                    $('#txtNroDocRAS').attr('maxlength', BuscaP('LONG_PAS'));
                    break;
            }
            
            //---------------------------------------------------------------------
			/**
			[BIT] CMIC 21/10/2015
			**/
			
			//---------------------------------------------------------------------
            $('#cboCuentaPoblacionDA').val(objSolicitudDS.IN_FLAGPOBLASIG_SI);
			$('#cboCuentaPoblacionDA').change();
			
			$('#txtEspecificarDA').val(objSolicitudDS.DE_POBLASIGNADA_SI);
									
            $('#cboTipoAtencionDA').val(objSolicitudDS.TI_TIPOATENCION_SI);
            $('#cboGrupoEtarioDA').val(objSolicitudDS.TI_GRUPOETARIO_SI);
            
            $('#cboTipoEstablecimiento').val(objSolicitudDS.TI_TIPOESTABL_SI);
            $('#cboTipoEstablecimiento').trigger('change');
            idASActualizacion=objSolicitudDS.TI_TIPOESTABL_SI;
        };

        setTimeout(cargarSelectPestania, 1000);
		/*
		cargar = false;
        try {
            var timeAutInstitucion = setTimeout(function () {
                if (flagAutSanit === true) {
                    $('#cboInstitucionEst').val(objSolicitudDS.CO_IDINSTITUCIONESTABL_SI);
                    $('#cboInstitucionEst').trigger('change');
                    cargar = true;
                    clearInterval(timeAutInstitucion);
                }
            }, 1000);
        } catch (err) {
            console.log('ERROR EN SETEAR INSTITUCION ActualizarSolicitud');
        }
		/*
		try {
            var timeAut = setTimeout(function () {
                if (flagAutSanit === true) {
                    $('#cboRedEst').val(objSolicitudDS.CO_IDRED_SI);
                    $('#cboRedEst').trigger('change');
                    MostrarMicroRed(objSolicitudDS.CO_IDRED_SI);
                    clearInterval(timeAut);
                }
            }, 1000);
        } catch (err) {
            console.log('ERROR AL SETEAR AUTORIDAD SANITARIA ActualizarSolicitud');
        }
		
		try {
            var timeMicroRed = setTimeout(function () {
                $('#cboRedEst').val(objSolicitudDS.CO_IDRED_SI);
                if ((flagRed === true && flagAutSanit === true) && $('#cboRedEst').val() !== null && $('#cboRedEst').val() !== '' && $('#cboRedEst').val() !== undefined) {

                    var EstClasEst = function () {
                        console.log('es verdadero ' + objSolicitudDS.CO_IDMICRORED_SI);
                        $('#cboMicroRedEst').val(objSolicitudDS.CO_IDMICRORED_SI);
                        $('#cboMicroRedEst').trigger('change');
                        clearInterval(timeMicroRed);
                        //endCargando();
                    };
                    setTimeout(EstClasEst, 11000);
                    clearInterval(timeMicroRed);

                }
            }, 1000);
        } catch (err) {
            console.log('ERROR AL SETEAR MICRO RED ActualizarSolicitud');
        }
		*/
		// [BIT] CMIC 16/11/2015
		/*
		try {
            var timeAUniEje = setTimeout(function () {
                if (flagUniEje === true) {
                    console.log(flagUniEje);
                    $('#cboUniEjeEst').val(objSolicitudDS.CO_IDUNIDADEJE_SI);
                    $('#cboUniEjeEst').trigger('change');
                    clearInterval(timeAUniEje);
                }
            }, 1000);
        } catch (err) {
            console.log('ERROR AL SETEAR AUTORIDAD EJECUTORA ActualizarSolicitud');
        }
		
		try {
            var timeAutEstClas = setTimeout(function () {
                if (flagAutSanit === true) {
                    var Estclas = function () {
                        $('#cboEstClasEst').val(objSolicitudDS.CO_IDCLAS_SI);
                        $('#cboEstClasEst').trigger('change');
                    };
                    setTimeout(Estclas, 11000);
                    clearInterval(timeAutEstClas);
                }
            }, 1000);
        } catch (err) {
            console.log('ERROR AL SETEAR AUTORIDAD ESTCLAS ActualizarSolicitud');
        }
		*/
		// FIN ----------------------------------
            
        $('#txtTelDatosDE').val(objSolicitudDS.NU_TELEFONOESTABL_SI);
        $('#txtTelEmerDatosDE').val(objSolicitudDS.NU_TELEFONOEMERGESTABL_SI);
        $('#txtRadioDatosDE').val(objSolicitudDS.DE_RADIOESTABL_SI);
        $('#txtFaxDatosDE').val(objSolicitudDS.NU_FAXESTABL_SI);
        $('#txtEmailDatosDE').val(objSolicitudDS.DE_CORREOELECTRESTABL_SI);
        $('#txtReEmailDatosDE').val(objSolicitudDS.DE_CORREOELECTRESTABL_SI);
        $('#txtWebDatosDE').val(objSolicitudDS.DE_PAGINAWEBESTABL_SI);
        $('#txtFecIniDatosDE').val(objSolicitudDS.FE_FECHAINICACTESTABL_SI);
        $('#txtFecCreacionDatosDE').val(objSolicitudDS.FE_FECHACREACIONESTABL_SI);
        $('#txtNroResolDatosDE').val(objSolicitudDS.NU_RESOLUCIONESTABL_SI);
        $('#txtNroDocRAS').val(objSolicitudDS.NU_DOC_PDM);
        $('#txtFecNacRAS').val(objSolicitudDS.FE_FECHANAC_PDM);
        $('#txtAPaternoRAS').val(objSolicitudDS.AP_PATERNO_PDM);
        $('#txtAMaternoRAS').val(objSolicitudDS.AP_MATERNO_PDM);
        $('#txtACasadaRAS').val(objSolicitudDS.AP_CASADA_PDM);
        $('#txtNombresRAS').val(objSolicitudDS.DE_NOMBRE_PDM);
        $('#txtNroColegiaturaRAS').val(objSolicitudDS.NU_COLEGIATURA_SI);
        $('#txtRegNacioRNERAS').val(objSolicitudDS.NU_RNEDIRMED_SI);
        $('#txtRegNacioRNERAS').val(objSolicitudDS.NU_RNEDIRMED_SI);
        $('#txtTelRAS').val(objSolicitudDS.NU_TELEFONODIRMED_SI);
        $('#txtEmailRAS').val(objSolicitudDS.DE_CORREOELECTRDIRMED_SI);
        $('#txtReEmailRAS').val(objSolicitudDS.DE_CORREOELECTRDIRMED_SI);
        //------------------------------------------------
        //carga grilla RRHH agregado por dlarico
        if (objSolicitudRH.length > 0) {
            fu_cargaGrillaRRHH(objSolicitudRH);
        }
        //-------------------------------------------------	
        $('#txtNroEstDA').val(objSolicitudDS.NU_AMBIENTESTABL_SI);
        $('#txtNroEstDA').val(objSolicitudDS.NU_AMBIENTESTABL_SI);
        $('#txtHorarioAtenDA').val(objSolicitudDS.DE_HORARIOATENCION_SI);
        $('#txtCampoClinicoDA').val(objSolicitudDS.DE_CAMPOCLINICO_SI);
        $('#txtEspecificarDA').val(objSolicitudDS.DE_COMENTARIO_PRL);

        if (idOpcion === 1) {
            //setTimeout(function () {
                activarBotones();
            //}, 10000);
        }

        setTimeout(function () {
            arrActividadDAdicional  = arratTempActividad;
			arrEspecialidadDAdicional	= arratTempEspecialidad
            arrUPPSSDASeleccion     = UPSSTemp;
            arrUPSDAdicional        = UPSTemp;
            arrClasEst              = ClassTemo;
            arratTempActividad      = [];
			arratTempEspecialidad	= [];
            UPSSTemp                = [];
            UPSTemp                 = [];
            ClassTemo               = [];
            //endCargando();
            dsGdActividadesDA.read();
            dsGdUPSDA.read();
            dsGdUPSSDA.read();
			dsGdEspecialidadSolicitudDA.read(); // agregado por cmic
            $('#txtNroDocRRLL').valid();
            $('#txtNroDocRRLL').val(objSolicitudDS.NU_DOC_PRL);
        }, 10000);

        if (idOpcion === 3) {
            $('#li-section-datos-generales').find('a').trigger('click');
            $('#btnEnviarSolicitud,#btnCargarXlsRRHH,#btnNuevoRRHH,#filAdjuntarRRHH,#txtRucRA,#cbdoTipoDocRA,#txtNroDocRA,#cboPaisRA').attr('disabled', true);
            $('#txtFecNacRA,#cboSexoRA,#txtAPaternoRA,#txtAMaternoRA,#txtACasadaRA,#txtNombresRA,#cboDepRA,#cboProRA,#cboDisRA,#cboViaRA').attr('disabled', true);
            $('#cboViaNombreRA,#txtNroRA,#txtNroPisoRA,#txtNroDptoRA,#txtInteriorRA,#txtManzanaRA,#txtKmRA,#txtUrRA,#txtRefRA').attr('disabled', true);
			
			$('#btnEnviarSolicitud').attr('disabled', true);
            $('#btnCargarXlsRRHH').attr('disabled', true);
            $('#btnNuevoRRHH').attr('disabled', true);
            $('#filAdjuntarRRHH').attr('disabled', true);
            $('#txtRucRA').attr('disabled', true);
            $('#cbdoTipoDocRA').attr('disabled', true);
            $('#txtNroDocRA').attr('disabled', true);
            $('#cboPaisRA').attr('disabled', true);
            $('#txtFecNacRA').attr('disabled', true);
            $('#cboSexoRA').attr('disabled', true);
            $('#txtAPaternoRA').attr('disabled', true);
            $('#txtAMaternoRA').attr('disabled', true);
            $('#txtACasadaRA').attr('disabled', true);
            $('#txtNombresRA').attr('disabled', true);
            $('#cboDepRA').attr('disabled', true);
            $('#cboProRA').attr('disabled', true);
            $('#cboDisRA').attr('disabled', true);
            $('#cboViaRA').attr('disabled', true);
            $('#cboViaNombreRA').attr('disabled', true);
            $('#txtNroRA').attr('disabled', true);
            $('#txtNroPisoRA').attr('disabled', true);
            $('#txtNroDptoRA').attr('disabled', true);
            $('#txtInteriorRA').attr('disabled', true);
            $('#txtManzanaRA').attr('disabled', true);
            $('#txtLoteRA').attr('disabled', true);
            $('#txtKmRA').attr('disabled', true);
            $('#txtUrRA').attr('disabled', true);
            $('#txtRefRA').attr('disabled', true);
        }

        if(idOpcion === 4){
            $('#datos-generales-radio-persona-natural,#datos-generales-radio-persona-juridica-publica,#datos-generales-radio-persona-juridica-privada').attr('disabled', true);
            $('#txtRucRA,#cbdoTipoDocRA,#txtNroDocRA,#cboPaisRA,#cboPaisRA,#txtFecNacRA,#cboSexoRA,#txtAPaternoRA,#txtAMaternoRA,#txtACasadaRA,#txtNombresRA').attr('disabled', true);
            $('#cboDepRA,#cboProRA,#cboDisRA,#cboViaRA,#cboViaNombreRA,#txtNroRA,#txtNroPisoRA,#txtNroDptoRA,#txtInteriorRA,#txtManzanaRA,#txtLoteRA').attr('disabled', true);
            $('#txtKmRA,#txtUrRA,#txtRefRA,#txtTelRA,#txtFaxRA,#txtEmailRA,#txtReEmailRA,#txtWebRA,#cboTipoEstablecimiento,#txtNuSerieDE').attr('disabled', true);
            $('#txtBuscarClasificacionEstablecimiento,#txtNComercialDE,#txtViaDetDE,#txtNroDE,#txtNroPisoDE,#txtNroDepDE,#txtNroIntDE,#txtMzDE').attr('disabled', true);
            $('#txtLtDE,#txtKlDE,#txtUrDE,#txtRefDE,#cboAutSanitaria,#cboInstitucionEst,#cboRedEst,#cboMicroRedEst,#cboUniEjeEst,#cboPaisRA').attr('disabled', true);

			// [BIT] CMIC 16/11/2015
			$('#datos-generales-radio-persona-natural').attr('disabled', true);
            $('#datos-generales-radio-persona-juridica').attr('disabled', true);
            $('#txtRucRA').attr('disabled', true);
            $('#cbdoTipoDocRA').attr('disabled', true);
            $('#txtNroDocRA').attr('disabled', true);
            $('#cboPaisRA').attr('disabled', true);
            $('#cboPaisRA').attr('disabled', true);
            $('#txtFecNacRA').attr('disabled', true);
            $('#cboSexoRA').attr('disabled', true);
            $('#txtAPaternoRA').attr('disabled', true);
            $('#txtAMaternoRA').attr('disabled', true);
            $('#txtACasadaRA').attr('disabled', true);
            $('#txtNombresRA').attr('disabled', true);
            $('#cboDepRA').attr('disabled', true);
            $('#cboProRA').attr('disabled', true);
            $('#cboDisRA').attr('disabled', true);
            $('#cboViaRA').attr('disabled', true);
            $('#cboViaNombreRA').attr('disabled', true);
            $('#txtNroRA').attr('disabled', true);
            $('#txtNroPisoRA').attr('disabled', true);
            $('#txtNroDptoRA').attr('disabled', true);
            $('#txtInteriorRA').attr('disabled', true);
            $('#txtManzanaRA').attr('disabled', true);
            $('#txtLoteRA').attr('disabled', true);
            $('#txtKmRA').attr('disabled', true);
            $('#txtUrRA').attr('disabled', true);
            $('#txtRefRA').attr('disabled', true);
            $('#txtTelRA').attr('disabled', true);
            $('#txtFaxRA').attr('disabled', true);
            $('#txtEmailRA').attr('disabled', true);
            $('#txtReEmailRA').attr('disabled', true);
            $('#txtWebRA').attr('disabled', true);
            $('#cboTipoEstablecimiento').attr('disabled', true);
            $('#txtBuscarClasificacionEstablecimiento').attr('disabled', true);
            $('#txtRazonSocialDE').attr('disabled', true);
            $('#txtNComercialDE').attr('disabled', true);
            $('#cboViaDE').attr('disabled', true);
            $('#txtViaDetDE').attr('disabled', true);
            $('#txtNroDE').attr('disabled', true);
            $('#txtNroPisoDE').attr('disabled', true);
            $('#txtNroDepDE').attr('disabled', true);
            $('#txtNroIntDE').attr('disabled', true);
            $('#txtMzDE').attr('disabled', true);
            $('#txtLtDE').attr('disabled', true);
            $('#txtKlDE').attr('disabled', true);
            $('#txtUrDE').attr('disabled', true);
            $('#txtRefDE').attr('disabled', true);
            $('#cboAutSanitaria').attr('disabled', true);
            $('#cboInstitucionEst').attr('disabled', true);
            $('#cboRedEst').attr('disabled', true);
            $('#cboMicroRedEst').attr('disabled', true);
            $('#cboUniEjeEst').attr('disabled', true);
            $('#cboEstClasEst').attr('disabled', true);
			$('#btnCargarXlsRRHH').attr('disabled', true);
            $('#btnNuevoRRHH').attr('disabled', true);
			$('#filAdjuntarRRHH').attr('disabled', true);
			
			
			$(document).find('form[name="frmDatosRRHHIndividual"] input').attr('disabled', true);
			$(document).find('form[name="frmDatosRRHHIndividual"] select').attr('disabled', true);			
			
			$('#btnRegresarRRHH').attr('disabled', false);
			
            //setTimeout(function () {
                $('#cboPaisRA').attr('disabled', true);
            //}, 10000);

        }

        if(idOpcion === 6){
        	$('input').attr('disabled',true);
        	$('select').attr('disabled',true);
        	$('textarea').attr('disabled',true);
        	 
        	$('#btnGuardarSol').attr('disabled',true);
        	$('#btnGuardarSol1').attr('disabled',true);
			
			$(document).find('form[name="frmDatosRRHHIndividual"] input').attr('disabled', true);
			$(document).find('form[name="frmDatosRRHHIndividual"] select').attr('disabled', true);
			
			$('#btnRegresarRRHH').attr('disabled', false);
        }
		
		$('#cboInstitucionEst').attr('disabled',true);
		$('#txtFecIniDatosDE').attr('disabled',true);
		
		if ($('#txtFecCreacionDatosDE').val() == ''){
			if ($('#txtNroResolDatosDE').val() != '' ){
				$('#txtNroResolDatosDE').attr('disabled',true);
			}
		}else{
			if ($('#txtNroResolDatosDE').val() != '' ){
				$('#txtNroResolDatosDE').attr('disabled',true);
			}
		}
		
		// cargamos los documentos adjuntos
		
		dsGdSolicitudesActualizar.read();
		
		// bloquiando los campos 
		
		$('#datos-generales-radio-persona-natural').attr('disabled', true);
		$('#datos-generales-radio-persona-juridica-publica').attr('disabled', true);
		$('#datos-generales-radio-persona-juridica-privada').attr('disabled', true);
		$('#cboViaDE').attr('disabled', true);
		$('#txtViaDetDE').attr('disabled', true);
		$('#txtNroDE').attr('disabled', true);
		$('#txtNroPisoDE').attr('disabled', true);
		$('#txtNroDepDE').attr('disabled', true);
		$('#txtNroIntDE').attr('disabled', true);
		$('#txtMzDE').attr('disabled', true);
		$('#txtLtDE').attr('disabled', true);
		$('#txtKlDE').attr('disabled', true);
		$('#txtUrDE').attr('disabled', true);
		$('#txtRefDE').attr('disabled', true);
		
        $('#txtRucRA').attr('disabled', true);
		$('#txtNComercialDE').attr('disabled', true);
		$('#txtRucPJRA').attr('disabled', true);
			
		$('#txtRucPJRA').attr('disabled', true);
		$('#txtRSocialPJRA').attr('disabled', true);
			
        endCargando();
    });
}

// ------------------------------------------------------INSCRIPCION IPRESS

function CrearDatePicker() {
    var tabla = RetornaObjTabla('gdDocAdjuntos');
    tabla.forEach(function (item, num) {
        if (num > 0) {
            if (($(item[5]).find('input')).length > 0) {
                $(item[5]).find('input').datepicker({
                    format: 'dd/mm/yyyy'
                });
            }
        }
    });
}

function CrearDatePickerActualizar() {
    var tabla = RetornaObjTabla('gdDocAdjuntosActualizar');
    tabla.forEach(function (item, num) {
        if (num > 0) {
            if (($(item[5]).find('input')).length > 0) {
                $(item[5]).find('input').datepicker({
                    format: 'dd/mm/yyyy'
                });
            }
        }
    });
}	

var sexoCache = [];
function CargarSexo(select) {
    try {   
    	
    	if(sexoCache.length==0){ //JCBT - agregado para que no consulte al servidor varias veces.
		$.ajax({
			dataType: "json",
			async:false,
			url: 'solicitud.htm?action=selectSexo',			
			success:  function (json) {
				sexoCache = json;
				sexoCache.forEach(function (item, num) {
					select.append($('<option/>', {
						value: item.CO_CODVALOR,
						text: item.DE_VALOR
					}));
				});
			}
        });
    	}else{
    		sexoCache.forEach(function (item, num) {
				select.append($('<option/>', {
					value: item.CO_CODVALOR,
					text: item.DE_VALOR
				}));
			});
    	}
    } catch (e) {
        console.log('ERROR CargarSexo');
    }
}
var tipoViaCache = [];
function CargarVia(select) {
    try {
		if(tipoViaCache.length==0){ //JCBT - evita postback
		$.ajax({
			dataType: "json",
			async:false,
			url: 'categorizacionIpress.htm?action=selectTipoVia',			
			success:  function (json) {
				tipoViaCache = json;
				tipoViaCache.forEach(function (item, num) {
					select.append($('<option/>', {
						value: item.CO_CODVALOR,
						text: item.DE_VALOR
					}));
				});
			}
        });
		}else{
			tipoViaCache.forEach(function (item, num) {
				select.append($('<option/>', {
					value: item.CO_CODVALOR,
					text: item.DE_VALOR
				}));
			});
		}
    } catch (e) {
        console.log('ERROR CargarVia');
    }
}
/*
 * function CargarVia() { try { CargarComboArrayJSON($('#cboVia'), [ { id : 1,
 * nombre : 'AVENIDA' }, { id : 2, nombre : 'CALLE' }, { id : 3, nombre :
 * 'JIRON' }, { id : 4, nombre : 'OTROS' } ]); } catch (e) { } }
 */
function CargaControles() {
    try {
        $('.dpGeneral').datepicker();
        // CargarComboDefecto($('#cboSexo'), etiquetasControles.sexo);
        //CargarComboDefecto($('#cboProvincia'), etiquetasControles.provincia);//comentado por dlarico
        //CargarComboDefecto($('#cboDistrito'), etiquetasControles.distrito);//comentado por dlarico
        CargarComboDefecto($('#cboProvinciaDA'), etiquetasControles.provincia);
        CargarComboDefecto($('#cboDistritoDA'), etiquetasControles.distrito);
        CargarComboDefecto($('#cboVia'), etiquetasControles.via);
    } catch (e) {
        if (flagDebug) {
            console.debug("ipress/CargaControles " + e);
        }
        console.log('ERROR CargaControles');
    }
}

function MensajeValidacionDNI() {
    $('#lblTituloPopGenerico').text('Error');
    $('#lblConenidoPopGenerico').text('Los datos no están registrados en la RENIEC.');
    $('#popGenericoRegistro').modal("show");
}

var dniValido=false;
function ValidarDNI() {
    dniValido=false;
    $('#txtAPaterno,#txtAMaterno,#txtACasada,#txtNombres').val('');
    try {
        if ($('#txtDocumento').val() !== '' && $('#cboSexo').val() !== '' && $('#cboFecNac').val() !== '') {
            $.ajax({
                url: "solicitud.htm?action=selectDNI&dni=" + $('#txtDocumento').val() + "&sexo=" + $('#cboSexo').val() + "&fecNac=" + $('#cboFecNac').val() + "&cboDocumento=" + $('#cboDocumento').val(),
                dataType: "json",
                success: function (result) {
                    if (result.preNombres === undefined) {
                        if ($('#cboDocumento').val() === '1' && JSON.parse(result).coError === 1040 && JSON.parse(result).coError !== undefined) {
                            this.value = '';
                            //$('#txtDocumento').val('');
                            //$('#cboFecNac').val('');
                            //$('#cboSexo').val('');
                            MensajeValidacionDNI();
                            dniValido=false;
							
							$('#txtAPaterno').val('');
							$('#txtAMaterno').val('');
							$('#txtNombres').val('');							
							$('#txtACasada').val('');
							
                        }
                    } else {
                        $('#cboFecNac').val(result.feNac.substr(0, 10));
                        $('#txtAPaterno').val(result.apPaterno);
                        $('#txtAMaterno').val(result.apMaterno);
                        $('#txtNombres').val(result.preNombres);
                        $('#cboSexo').val(result.coGenero === 'M' ? '1' : '2'); // F M
                        $('#txtACasada').val(result.coGenero === 'M' ? '' : result.apCasado);		
                        if($('#cboSexo').val() === '1'){
                            $('#txtACasada').attr('disabled', true);
                        }						
                        dniValido=true;
                    }                    
                    $('#txtAPaterno,#txtNombres').valid();
                },
                error: function (result) {
                    // options.error(result);
                }
            });
        }
    } catch (e) {
        console.log('ERROR ValidarDNI');
    }
}

var dniValido1=false;
function ValidarDNI1() {
    dniValido1=false;
    $('#txtAPaternoRA,#txtAMaternoRA,#txtACasadaRA,#txtNombresRA').val('');
    try {
        if ($('#txtNroDocRA').val() !== '' && $('#cboSexoRA').val() !== '' && $('#txtFecNacRA').val() !== '') {
            $.ajax({
                url: "solicitud.htm?action=selectDNI&dni=" + $('#txtNroDocRA').val() + "&sexo=" + $('#cboSexoRA').val() + "&fecNac=" + $('#txtFecNacRA').val() + "&cboDocumento=" + $('#cbdoTipoDocRA').val(),
                dataType: "json",
                success: function (result) {
                    if (result.preNombres === undefined) {
                        if ($('#cbdoTipoDocRA').val() === '1' && JSON.parse(result).coError === 1040 && JSON.parse(result).coError !== undefined) {
                            this.value = '';
                            //$('#txtNroDocRA').val('');
                            //$('#txtFecNacRA').val('');
                            //$('#cboSexoRA').val('');
                            MensajeValidacionDNI();
                            dniValido1=false;
														
							$('#txtAPaternoRA').val('');
							$('#txtAMaternoRA').val('');
							$('#txtNombresRA').val('');							
							$('#txtACasadaRA').val('');
							
                        }
                    } else {
                        $('#txtFecNacRA').val(result.feNac.substr(0, 10));
                        $('#txtAPaternoRA').val(result.apPaterno);
                        $('#txtAMaternoRA').val(result.apMaterno);
                        $('#txtNombresRA').val(result.preNombres);
                        $('#cboSexoRA').val(result.coGenero === 'M' ? '1' : '2'); // F M
                        $('#txtACasadaRA').val(result.coGenero === 'M' ? '' : result.apCasado);
                        dniValido1=true;
                    }
                    $('#txtNombresRA,#txtAPaternoRA').valid();
                },
                error: function (result) {
                    // options.error(result);
                }
            });
        }

    } catch (e) {
        console.log('ERROR ValidarDNI1');
    }

}
var dniValido2=false;
function ValidarDNI2() {
    dniValido2=false;
    $('#txtAPaternoRRLL,#txtAMaternoRRLL,#txtACasadaRRLL,#txtNombresRRLL').val('');
    try {
        if ($('#txtNroDocRRLL').val() !== '' && $('#cboSexoRRLL').val() !== '' && $('#txtFecNacRRLL').val() !== '') {
            $.ajax({
                url: "solicitud.htm?action=selectDNI&dni=" + $('#txtNroDocRRLL').val() + "&sexo=" + $('#cboSexoRRLL').val() + "&fecNac=" + $('#txtFecNacRRLL').val() + "&cboDocumento=" + $('#cboTipoDocRRLL').val(),
                dataType: "json",
                success: function (result) {
                    if (result.preNombres === undefined) {
                        if ($('#cboTipoDocRRLL').val() === '1' && JSON.parse(result).coError === 1040 && JSON.parse(result).coError !== undefined) {
                            this.value = '';
                            //$('#txtNroDocRRLL').val('');
                            //$('#txtFecNacRRLL').val('');
                            //$('#cboSexoRRLL').val('');
                            MensajeValidacionDNI();
                            dniValido2=false;
							
							
							$('#txtAPaternoRRLL').val('');
							$('#txtAMaternoRRLL').val('');
							$('#txtNombresRRLL').val('');							
							$('#txtACasadaRRLL').val('');
                        }
                    } else {
                        $('#txtFecNacRRLL').val(result.feNac.substr(0, 10));
                        $('#txtAPaternoRRLL').val(result.apPaterno);
                        $('#txtAMaternoRRLL').val(result.apMaterno);
                        $('#txtNombresRRLL').val(result.preNombres);
                        $('#cboSexoRRLL').val(result.coGenero === 'M' ? '1' : '2'); // F M
                        $('#txtACasadaRRLL').val(result.coGenero === 'M' ? '' : result.apCasado);
                        dniValido2=true;
                    }
                    $('#txtNombresRRLL,#txtAPaternoRRLL').valid();
                },
                error: function (result) {
                    // options.error(result);
                }
            });
        }
    } catch (e) {
        console.log('ERROR ValidarDNI2');
    }
}

var dniValido3=false;
function ValidarDNI3() {
    dniValido3=false;
    //$('#txtAPaternoRAS,#txtAMaternoRAS,#txtACasadaRAS,#txtNombresRAS').val('');
    try {
        if ($('#txtNroDocRAS').val() !== '' && $('#cboSexoRAS').val() !== '' && $('#txtFecNacRAS').val() !== '') {
            $.ajax({
                url: "solicitud.htm?action=selectDNI&dni=" + $('#txtNroDocRAS').val() + "&sexo=" + $('#cboSexoRAS').val() + "&fecNac=" + $('#txtFecNacRAS').val() + "&cboDocumento=" + $('#cboDocIdenRAS').val(),
                dataType: "json",
                success: function (result) {
                    if (result.preNombres === undefined) {
                        if ($('#cboDocIdenRAS').val() === '1' && JSON.parse(result).coError === 1040 && JSON.parse(result).coError !== undefined) {
                            this.value = '';
                            //$('#txtNroDocRAS').val('');
                            //$('#txtFecNacRAS').val('');
                            //$('#cboSexoRAS').val('');
                            MensajeValidacionDNI();
                            dniValido3=false;
							
							$('#txtAPaternoRAS').val('');
							$('#txtAMaternoRAS').val('');
							$('#txtNombresRAS').val('');							
							$('#txtACasadaRAS').val('');
                        }
                    } else {
                        $('#txtFecNacRAS').val(result.feNac.substr(0, 10));
                        $('#txtAPaternoRAS').val(result.apPaterno);
                        $('#txtAMaternoRAS').val(result.apMaterno);
                        $('#txtNombresRAS').val(result.preNombres);
                        $('#cboSexoRAS').val(result.coGenero === 'M' ? '1' : '2'); // F M
                        $('#txtACasadaRAS').val(result.coGenero === 'M' ? '' : result.apCasado);
                        dniValido3=true;
                    }
                    $('#txtNombresRAS,#txtAPaternoRAS').valid();
                },
                error: function (result) {
                    // options.error(result);
                }
            });
        }
    } catch (e) {
        console.log('ERROR ValidarDNI3');
    }
}

var dniValido4=false;
function ValidarDNI4() {
    $('#txtAPaternoExcel,#txtAMaternoExcel,#txtACasadaExcel,#txtNombresExcel').val('');
    dniValido4=false;
    try {
        if ($('#txtNroDocExcel').val() !== '' && $('#CboSexoExcel').val() !== '' /*&& $('#txtFecNacExcel').val() !== ''*/) {
            $.ajax({
                url: "solicitudActualizar.htm?action=selectDNI&dni=" + $('#txtNroDocExcel').val() + "&sexo=" + $('#CboSexoExcel').val() + "&fecNac=" + $('#txtFecNacExcel').val() + "&cboDocumento=" + $('#cboTipoDocExcel').val(),
                dataType: "json",
                success: function (result) {
                    if (result.preNombres === undefined) {
                        if ($('#cboTipoDocExcel').val() === '1' && JSON.parse(result).coError === 1040 && JSON.parse(result).coError !== undefined) {
                            this.value = '';
                            //$('#txtNroDocExcel').val('');
                            //$('#txtFecNacExcel').val('');
                            //$('#CboSexoExcel').val('');

                            MensajeValidacionDNI();
                            dniValido4=false;
														
							$('#txtAPaternoExcel').val('');
							$('#txtAMaternoExcel').val('');
							$('#txtNombresExcel').val('');							
							$('#txtACasadaExcel').val('');
                        }
                    } else {
                        $('#txtFecNacExcel').val(result.feNac.substr(0, 10));
                        $('#txtAPaternoExcel').val(result.apPaterno);
                        $('#txtAMaternoExcel').val(result.apMaterno);
                        $('#txtNombresExcel').val(result.preNombres);
                        $('#CboSexoExcel').val(result.coGenero === 'M' ? '1' : '2'); // F M
                        $('#txtACasadaExcel').val(result.coGenero === 'M' ? '' : result.apCasado);
                        dniValido4=true;
                    }
                    $('#txtAPaternoExcel,#txtNombresExcel').valid();
                },
                error: function (result) {
                    // options.error(result);
                }
            });
        }
    } catch (e) {
        console.log('ERROR ValidarDNI4');
    }
}

function ConfigControles() {
    try {
        $('#txtDocumento').blur(function () {
            ValidarDNI();
        });
        $('#txtNroDocRA').blur(function () {
            ValidarDNI1();
        });
        $('#cboFecNac').blur(function () {
            ValidarDNI();
        });
        $('#txtFecNacRA').blur(function () {
            ValidarDNI1();
        });
        $('#txtFecNacRRLL').blur(function () {
            ValidarDNI2();
        });
        $('#txtNroDocRRLL').blur(function () {
            ValidarDNI2();
        });
        $('#txtNroDocRAS').blur(function () {
            ValidarDNI3();
        });
        $('#txtFecNacRAS').blur(function () {
            ValidarDNI3();
        });
        $('#txtNroDocExcel').blur(function () {
            ValidarDNI4();
        });
		/*
        $('#txtFecNacExcel').blur(function () {
            ValidarDNI4();
        });
		*/
        $('#cboDocumento').change(function () {
            var txtD = "txtDocumento";
            if (this.value === "1") {
                $("#" + txtD).rules("add", {
                    number: true
                });
                $('#txtAPaterno,#txtAMaterno,#txtACasada,#txtNombres').attr('disabled', true);
            } else {
                $("#" + txtD).rules("remove", "number");
                $('#txtAPaterno,#txtAMaterno,#txtACasada,#txtNombres').attr('disabled', false);
            }
        });

        $('#cboTipoDocExcel').change(function () {
            var txtD = "txtNroDocExcel";
            if (this.value === "1") {
                $("#" + txtD).rules("add", {
                    number: true
                });
                $('#txtAPaternoExcel,#txtAMaternoExcel,#txtACasadaExcel,#txtNombresExcel').attr('disabled', true);
            } else {
                $("#" + txtD).rules("remove", "number");
                $('#txtAPaternoExcel,#txtAMaternoExcel,#txtACasadaExcel,#txtNombresExcel').attr('disabled', false);
            }
            $('#' + txtD).blur();
        });

        $('#cbdoTipoDocRA').change(function () {
            var txtD = "txtNroDocRA";
            if (this.value === "1") {
                $("#" + txtD).rules("add", {
                    number: true
                });
                $('#txtAPaternoRA,#txtAMaternoRA,#txtACasadaRA,#txtNombresRA').attr('disabled', true);
            } else {
                $("#" + txtD).rules("remove", "number");
                $('#txtAPaternoRA,#txtAMaternoRA,#txtACasadaRA,#txtNombresRA').attr('disabled', false);
            }
            $('#' + txtD).blur();
        });

        $('#cboTipoDocRRLL').change(function () {
            var txtD = "txtNroDocRRLL";
            if (this.value === "1") {
                $("#" + txtD).rules("add", {
                    number: true
                });
                $('#txtAPaternoRRLL,#txtAMaternoRRLL,#txtACasadaRRLL,#txtNombresRRLL').attr('disabled', true);
            } else {
                $("#" + txtD).rules("remove", "number");
                $('#txtAPaternoRRLL,#txtAMaternoRRLL,#txtACasadaRRLL,#txtNombresRRLL,#txtFecNacRRLL,#cboSexoRRLL').attr('disabled', false);
            }
            $('#' + txtD).blur();
        });

        $('#cboDocIdenRAS').change(function () {
            var txtD = "txtNroDocRAS";
            if (this.value === "1") {
                $("#" + txtD).rules("add", {
                    number: true
                });
                $('#txtAPaternoRAS,#txtAMaternoRAS,#txtACasadaRAS,#txtNombresRAS').attr('disabled', true);
            } else {
                $("#" + txtD).rules("remove", "number");
                $('#txtAPaternoRAS,#txtAMaternoRAS,#txtACasadaRAS,#txtNombresRAS').attr('disabled', false);
            }
            $('#' + txtD).blur();
        });

	/* comentado por dlarico	
        $('#cboDepartamento').change(function () {
            CargarComboDefecto($('#cboProvincia'), etiquetasControles.provincia);
            CargarComboDefecto($('#cboDistrito'), etiquetasControles.distrito);
            CargarProvinciasEstablecimiento(this.value, $('#cboProvincia'), etiquetasControles.provincia);
        });
        */
        $('#cboDepartamentoDA').change(function () {
            CargarComboDefecto($('#cboProvinciaDA'), etiquetasControles.provincia);
            CargarComboDefecto($('#cboDistritoDA'), etiquetasControles.distrito);
            CargarProvinciasEstablecimiento(this.value, $('#cboProvinciaDA'), etiquetasControles.provincia);
            $('#cboDepDE').val(this.value);
            $('#cboIPAutoridadSanit').empty();
        });

        $('#cboDepRA').change(function () {
            CargarComboDefecto($('#cboProRA'), etiquetasControles.provincia);
            CargarComboDefecto($('#cboDisRA'), etiquetasControles.distrito);
            CargarProvincias(this.value, $('#cboProRA'), etiquetasControles.provincia);
        });
        /* comentado por dlarico
        $('#cboProvincia').change(function () {
            CargarComboDefecto($('#cboDistrito'), etiquetasControles.distrito);
            CargarDistrito(this.value, $('#cboDistrito'), etiquetasControles.distrito);
        });
        */
        $('#cboProvinciaDA').change(function () {
            CargarComboDefecto($('#cboDistritoDA'), etiquetasControles.distrito);
            CargarDistritoEstablecimiento(this.value, $('#cboDistritoDA'), etiquetasControles.distrito);
        });

        $('#cboDistritoDA').change(function () {
            $('#cboIPAutoridadSanit').empty();
            $('#cboDistDE').val($('#cboDistritoDA').val());
            CargarAutoridadSanitaria(this.value, $('#cboIPAutoridadSanit'), 'Seleccione Autoridad Sanitaria');
            setTimeout(function () {
                RecuperarAdjuntos();
            }, 2000);
        });

        $('#cboProRA').change(function () {
            CargarComboDefecto($('#cboDisRA'), etiquetasControles.distrito);
            CargarDistrito(this.value, $('#cboDisRA'), etiquetasControles.distrito);
        });

    } catch (e) {
        if (flagDebug) {
            console.debug("ipress/ConfigControles " + e);
        }
        console.log('ERROR ConfigControles');
    }
}

function CargarComboDefecto(objLista, rowDefault) {
    try {
        objLista.empty();
        if (rowDefault !== '' || rowDefault === undefined) {
            objLista.append($('<option/>', {
                value: "",
                text: rowDefault
            }));
        }
    } catch (e) {
        if (flagDebug) {
            console.debug("ipress/CargarComboDefecto " + e);
        }
        console.log('ERROR CargarComboDefecto');
    }
}
function CargarComboArrayJSON(objLista, json) {
    try {
        var simpleObj = {
            id: '',
            valor: ''
        };
        var arrProp = [];
        $.each(json, function (index, itemData) {
            if (arrProp.length === 0) {
                for (attr in itemData) {
                    arrProp.push(attr);
                }
            }
            simpleObj.id = arrProp[0];
            simpleObj.valor = arrProp[1];
            objLista.append($('<option/>', {
                value: itemData[simpleObj.id],
                text: itemData[simpleObj.valor]
            }));
        });
    } catch (e) {
        if (flagDebug) {
            console.debug("ipress/CargarComboArrayJSON " + e);
        }
        console.log('ERROR CargarComboArrayJSON');
    }
}
function CargarComboObjJSON(objLista, json) {
    try {
        $.each(json, function (index, itemData) {
            objLista.append($('<option/>', {
                value: itemData.CO_IDPAIS, // itemData
                text: itemData.DE_DESCRIPCION
            }));
        });
    } catch (e) {
        if (flagDebug) {
            console.debug("ipress/CargarComboJSON " + e);
        }
        console.log('ERROR CargarComboObjJSON');
    }
}
function CargarPaises(json, obj, rowDefault) {
    try {

        CargarComboDefecto(obj, rowDefault);
        CargarComboObjJSON(obj, json);

    } catch (e) {
        if (flagDebug) {
            console.debug("ipress/CargarPaises " + e);
        }
        console.log('ERROR CargarPaises');
    }
}

var departamentoCache = [];
function CargarDepartamentos(url, obj, rowDefault) {
    var select = obj;
    CargarComboDefecto(select, rowDefault);
    try {
        if (departamentoCache.length === 0) {
            $.ajax({
                dataType: "json",
                async:false,
                'url': url,				
                success:  function (json) {
                    departamentoCache = json;
                    departamentoCache.forEach(function (item, num) {
                        select.append($('<option/>', {
                            value: item.ID,
                            text: item.UBIGEO
                        }));
                    });
                }
            });            
        } else {
            departamentoCache.forEach(function (item, num) {
                select.append($('<option/>', {
                    value: item.ID,
                    text: item.UBIGEO
                }));
            });
        }
    } catch (e) {
        if (flagDebug) {
            console.debug("ipress/CargarDepartamentos " + e);
        }
        console.log('ERROR CargarDepartamentos');
    }
}
function CargarProvincias(depa, obj, rowDefault) {
    try {
        var select = obj;
        CargarComboDefecto(select, rowDefault);
        $.ajax({
            dataType: "json",
            async:false,
            url: 'solicitud.htm?action=selectUbigeo&tipo=PR&codigoUbigeo='+ depa,		
            success:  function (json) {
                var select = obj;
                json.forEach(function (item, num) {
                    select.append($('<option/>', {
                        value: item.ID,
                        text: item.UBIGEO
                    }));
                });
            }
        });
    } catch (e) {
        if (flagDebug) {
            console.debug("ipress/CargarProvincias " + e);
        }
        console.log('ERROR CargarProvincias');
    }
}

function CargarProvinciasEstablecimiento(depa, obj, rowDefault) {
    try {
        var select = obj;
        CargarComboDefecto(select, rowDefault);
        $.ajax({
            dataType: "json",
            async:false,
            url: 'solicitud.htm?action=selectUbigeo&tipo=PR&codigoUbigeo=' + depa,			
            success: function (json) {
                var select = obj;
                json.forEach(function (item, num) {
                    select.append($('<option/>', {
                        value: item.ID,
                        text: item.UBIGEO
                    }));
                });
                // SE CARGA AUTOMATICAMENTE SEGUN REGLA DE NEGOCIO
                var select = $('#cboProvDE');
                json.forEach(function (item, num) {
                    select.append($('<option/>', {
                        value: item.ID,
                        text: item.UBIGEO
                    }));
                });				
            }
        });
		        
    } catch (e) {
        if (flagDebug) {
            console.debug("ipress/CargarProvincias " + e);
        }
        console.log('ERROR CargarProvinciasEstablecimiento');
    }
}

function CargarDistrito(prov, obj, rowDefault) {
    try {	
        $.ajax({
            dataType: "json",
            async:false,
            'url': 'solicitud.htm?action=selectUbigeo&tipo=DI&codigoUbigeo='+ prov,			
            success:  function (json) {
                var select = obj;
                json.forEach(function (item, num) {
                    select.append($('<option/>', {
                            value: item.ID,
                            text: item.UBIGEO
                    }));
                });
            }
        });
    } catch (e) {
        if (flagDebug) {
            console.debug("ipress/CargarDistrito " + e);
        }
        console.log('ERROR CargarDistrito');
    }
}

function CargarDistritoEstablecimiento(prov, obj, rowDefault) {
    $('#cboProvDE').val(prov);
    try {
        $.ajax({
            dataType: "json",
            async:false,
            'url': 'solicitud.htm?action=selectUbigeo&tipo=DI&codigoUbigeo='+ prov,			
            success:  function (json) {
                var select = obj;
                json.forEach(function (item, num) {
                        select.append($('<option/>', {
                                value: item.ID,
                                text: item.UBIGEO
                        }));
                });
                var select = $('#cboDistDE');
                json.forEach(function (item, num) {
                        select.append($('<option/>', {
                                value: item.ID,
                                text: item.UBIGEO
                        }));
                });
            }
        });        
    } catch (e) {
        if (flagDebug) {
            console.debug("ipress/CargarDistrito " + e);
        }
        console.log('ERROR CargarDistritoEstablecimiento');
    }
}

var flagAutSanit = false;
function CargarAutoridadSanitaria(ubigeo, obj, rowDefault, functionEval) {
    try {
        $.ajax({
            dataType: "json",
            async:false,
            'url': 'solicitud.htm?action=selectAutSanUbi&ubigeo=' + ubigeo,			
            success:  function (json) {
                flagAutSanit = true;
                var select = obj;
                json.forEach(function (item, num) {
                        select.append($('<option/>', {
                                value: item.CO_IDAUTORIDADSANIT,
                                text: item.DE_NOMBRE
                        }));
                });
                // SE RECARGA EL COMBO DE AUTORIDAD SANITARIA DEL
                // ESTABLECIMIENTO
                var select = $('#cboAutSanitaria');
                select.empty();
                json.forEach(function (item, num) {
                        select.append($('<option/>', {
                                value: item.CO_IDAUTORIDADSANIT,
                                text: item.DE_NOMBRE
                        }));
                });
                $('#cboIPAutoridadSanit').valid();
                //MostrarRed(); //comentado por dlarico
                //MostrarEstabClas();//comentado por dlarico
            }
        });
    } catch (e) {
        if (flagDebug) {
            console.debug("ipress/CargarAutoridadSanitaria " + e);
        }
        console.log('ERROR CargarAutoridadSanitaria');
    }
}

function RetornaDataForm(form) {
    return $('#' + form).serialize();
}

function CargarValidadoresIPRESS() {
    // generico para controles con campos vacios
    $.validator.addMethod("ValidaVacios", function (value, element) {
        if (value === '') {
            return false;
        } else {
            return true;
        }
    }, '');

    $.validator.addMethod("ValidaSoloLetras", function (value, element) {
        var objRegExp = /^[a-z\u00C0-\u00ff]+$/;
        if (!objRegExp.test(value)) {
            return false;
        } else {
            return true;
        }
    }, '');

    $.validator.addMethod("ValidaVia", function (value, element) {
        if ($('#txtDetVia').val() !== '' && $('#cboVia').val() === '') {
            return false;
        } else {
            return true;
        }
    }, '');

    $.validator.addMethod("ValidaViaDet", function (value, element) {
        if ($('#txtDetVia').val() === '' && $('#cboVia').val() !== '') {
            return false;
        } else {
            return true;
        }
    }, '');

    $.validator.addMethod("ValidarMzS", function (value, element) {
        if (($('#txtMzSOL').val() !== '' && $('#txtLtSOL').val() === '') || ($('#txtMzSOL').val() === '' && $('#txtLtSOL').val() !== '')) {
            return false;
        } else {
            return true;
        }
    }, '');

    $.validator.addMethod("ValidarLtS", function (value, element) {
        if (($('#txtMzSOL').val() !== '' && $('#txtLtSOL').val() === '') || ($('#txtMzSOL').val() === '' && $('#txtLtSOL').val() !== '')) {
            return false;
        } else {
            return true;
        }
    }, '');

    $.validator.addMethod("ValidaVia1", function (value, element) {
        if (value !== '') {
            if ($('#cboViaNombreRA').val() === '') {
                return false;
            } else {
                return true;
            }
        } else {
            if ($('#cboViaNombreRA').val() === '') {
                return true;
            } else {
                return false;
            }
        }
    }, '');

    $.validator.addMethod("ValidaVia2", function (value, element) {
        if (value !== '') {
            if ($('#txtViaDetDE').val() === '') {
                return false;
            } else {
                return true;
            }
        } else {
            if ($('#txtViaDetDE').val() === '') {
                return true;
            } else {
                return false;
            }
        }
    }, '');

    $.validator.addMethod("ValidarMzLtNro", function (value, element) {
        if ($('#txtDetVia').val() !== '') {
            if ($('#txtNroSOL').val() !== '' || $('#txtMzSOL') !== ''
                    || $('#txtLtSOL') !== '') {
                return true;
            } else {
                return false;
            }
        }
    }, '');

    $.validator.addMethod("ValidarNroPiso", function (value, element) {
        if ($('#txtDetVia').val() !== '') {
            //CASO Q LOS 3 ESTAN INGRESADOS
            if ($('#txtDetVia').val() !== '' || $('#txtUrSOL').val() !== '') {
                if (($('#txtMzSOL').val() === '' && $('#txtLtSOL').val() !== '') || ($('#txtMzSOL').val() !== '' && $('#txtLtSOL').val() === '')) {
                    return false;
                } else {
                    if ($('#txtMzSOL').val() !== '' && $('#txtLtSOL').val() !== '' && $('#txtNroSOL').val() !== '') {
                        return true;
                    } else {
                        if ($('#txtMzSOL').val() === '' && $('#txtLtSOL').val() === '' && $('#txtNroSOL').val() === '') {
                            return false;
                        } else {
                            return true;
                        }

                    }
                }
            }
        } else {
            if ($('#cboVia').val() === '' && $('#txtDetVia').val() === '') {
                return true;
            } else {
                return false;
            }

        }
    }, '');

    $.validator.addMethod("ValidarKm", function (value, element) {
        if (($('#txtKlSOL').val() !== '' && $('#txtRefSOL').val() === '')) {
            $('#txtRefSOL').valid();
            return false;
        } else {
            return true;
        }
    }, '');

    $.validator.addMethod("ValidarRef", function (value, element) {
        if (($('#txtKlSOL').val() !== '' && $('#txtRefSOL').val() === '')) {
            //$('#txtKlSOL').valid();
            return false;
        } else {
            return true;
        }
    }, '');

    $.validator.addMethod("ValidaPaisS", function (value, element) {
        if ($('#cboDocumento').val() !== '1' && document.getElementById('cboPais').options[document.getElementById('cboPais').selectedIndex].value === "174") {
            return false;
        } else {
            return true;
        }
    }, '');

    // validacion de formulario inscripcion IPRESS
    $('#frmInscripcionIPRESS').validate({
        submitHandler: function (form) {
            var arreglo = [];
            var listaObj = $('#gdDocAdjuntos tr');
            var listaSubObj;
            
            /**if(!dniValido){
            	return false;
            }*/

            for (var i = 1; i < listaObj.length; i++) {
                var objeto = {
                    id: '',
                    nroDoc: 'false',
                    fecEmi: 'false',
                    archivo: '',
                    archivoD: false,
                    archivoH: '',
                    archivogenerado: '',
                    obligatoriedad: '',
                    docReq: ''
                };
                listaSubObj = $(listaObj[i]).find('input');
                for (var j = 0; j < listaSubObj.length; j++) {
                    objeto.id = listaSubObj[j].id.split('-')[1];
                    switch (listaSubObj[j].id.split('-')[0]) {
                        case 'filAd':
                            objeto.archivo = listaSubObj[j].value.replace(/C:\\fakepath\\/i, '');
                            break;
                        case 'filAdj':
                       		objeto.archivoD = true;
                            break;
                        case 'filAdH':
                       		objeto.archivoH = listaSubObj[j].value;
                            break;
                        case 'txtDoc':
                            objeto.nroDoc = listaSubObj[j].value;
                            break;
                        case 'txtFecEmi':
                            objeto.fecEmi = listaSubObj[j].value.trim();
                            break;
                        case 'hdnObli':
                            objeto.obligatoriedad = listaSubObj[j].value;
                            break;
                        case 'hdnReq':
                            objeto.docReq = listaSubObj[j].id.split('-')[1];//listaSubObj[j].value;
                            break;
                        case 'gen':
                            objeto.archivogenerado = listaSubObj[j].value === undefined ? '' : listaSubObj[j].value;
                            break;
                        case 'ori':
                            objeto.archivo = listaSubObj[j].value === undefined ? '' : listaSubObj[j].value;
                            break;
                    }
                }
                arreglo.push(objeto);
            }
            var arrAdjTemp = [];
            var sumObligatoriedad = 0;
            var sumRequerido = 0;
            arreglo.forEach(function (element, index, array) {
            	if(element.archivo === '' && element.archivoH !== ''){
            		//element.archivo =element.archivoH;
            		element.archivo ='update';
            	}
                if (element.obligatoriedad === '1' && element.archivo === '' && !element.archivoD) {
                    sumRequerido++;
                } else {
                    if (element.obligatoriedad === '1' && element.docReq === '1' && element.nroDoc !== 'false' && element.nroDoc === '') {
                        sumRequerido++;
                    } else {
                        if (element.obligatoriedad === '1' && element.docReq === '1' && element.fecEmi !== 'false' && element.fecEmi === '') {
                            sumRequerido++;
                        }
                    }
                }
				
				if (sumRequerido > 0){
					
				}else{
					if (element.obligatoriedad === '1'){
						if (element.fecEmi === '' || element.nroDoc === ''){
							sumRequerido++;
						}
					}
				}
                arrAdjTemp.push(element);
            });

            listaObj = {
                'arreglo': JSON.stringify(arrAdjTemp)
            };
            if (sumRequerido > 0) {
                LanzarPopGenerico('Informativo', '(Documentos adjuntos) Ingrese Informacion de Documentos obligatorios.');
                return;
            }
			
			if ($('#txtAPaterno').val() == '' && $('#txtNombres').val() == '') {
                LanzarPopGenerico('Informativo', '(Datos de la persona que coordinará la inscripción de IPRESS) Revise las validaciones resaltadas en rojo.');
                return;
            }
			
	
            // PARA LA INSERCION Y ACTUALIZACION SE VALIDA QUE
            // EXISTA EL NUMERO DE SOLICITUD
            $('#popConfirmaSolicitud').modal({
                backdrop: 'static',
                keyboard: false
            }).one('click', '[data-value]', function (e) {
                if ($(this).data('value') === 1) {
                    beginCargando();
                    $.ajax({
                        url: "solicitudActualizar.htm?"
                                + RetornaDataForm('frmInscripcionIPRESS')
                                + '&cboPais='
                                + $('#cboPais').val()
                                + "&idSolicitud="
                                + $('#idSolicitud').val()
								+ "&idSolicitudIPRESS="
                                + $('#idSolicitudIPRESS').val()
								+ "&idIpress="
                                + $('#idIpress').val()
								+ "&idProceso="
                                + $('#idProceso').val(),
                        dataType: "json",
                        type: 'POST',
                        success: function (
                                result) {
                            $('#li-section-datos-generales').removeClass('disabled');
                            $('#li-section-datos-generales').removeClass('disabledTab');
                            $('#lblTituloPopGenerico').text('Registro de Solicitud');
                            

							var idSolicitudGenerada = result.P_IDSOLICITUD;
							$('#idSolicitud').val(result.P_IDSOLICITUD);
							$('#idSolicitudIPRESS').val(result.P_IDSOLICITUDIPRESS);

                            $.ajax({
                                url: "solicitud.htm?action=actualizarAdjuntosSolicitud&idSolicitud=" + result.P_IDSOLICITUD,
                                dataType: "json",
								async:false,
                                data: listaObj,
                                success: function (result) {
									
                                },
                                error: function (result) {
                                }
                            });
							
							$.ajax({
                                url: "solicitudActualizar.htm?action=valUserIpress&idIpress=" + $('#txtCodigoUnico').val(),
                                dataType: "json",
								async:false,
                                success: function (result) {
																	
									if (result.P_VAL == 0){
										$('#lblConenidoPopGenerico').text('Su usuario, no está autorizado a realizar modificaciones a la IPRESS seleccionada, se enviará una solicitud de acceso a la autoridad sanitaria, verifique la información y haga clic en Aceptar para finalizar.');
									}else{
										$('#lblConenidoPopGenerico').text('Se ha registrado la información de solicitud. Continue registrado su información');
									}
									
									if ($('#idProceso').val() == 3){
										//locationUrl('bienvenidos.htm?action=mostrar');
										$.ajax({
											url: "solicitud.htm?action=enviarSolicitud&idSolicitud=" + $('#idSolicitud').val() + "&idProceso=" + $('#idProceso').val(),
											dataType: "json",
											async:false,
											data: listaObj,
											success: function (result) {
												
											},
											error: function (result) {
											}
										});
										
										$.ajax({
											url: "solicitudActualizar.htm?action=actualizarTarea&idSolicitud=" + $('#idSolicitud').val(),
											dataType: "json",
											async : false,
											success: function (result) {
												
											},
											error: function (result) {
											}
										});
										
										imprimirPDF();
									}else{
										$('#popGenericoRegistro').modal({
											backdrop: 'static',
											keyboard: false
										}).one('click', '[data-value]', function (e) {
											if ($(this).data('value') === 1) {
												
												
												if (result.P_VAL == 0){
													$.ajax({
														url: "solicitud.htm?action=enviarSolicitud&idSolicitud=" + $('#idSolicitud').val() + "&idProceso=" + $('#idProceso').val(),
														dataType: "json",
														async:false,
														data: listaObj,
														success: function (result) {
															
														},
														error: function (result) {
														}
													});
												
													locationUrl('bienvenidos.htm?action=mostrar');
												}else{
													ActualizarSolicitud(idSolicitudGenerada, 2);
													$('#li-section-datos-generales a[href="#section-datos-generales"]').tab('show');
												}
																																				
											} else {
												return;
											}
										});
									}
									
									endCargando();
                                },
                                error: function (result) {
                                }
                            });
							
                        },
                        error: function (result) {

                        }
                    });

                    

                } else {
                    return;
                }
            });

        },
        rules: {
            cboDocumento: {
                required: true
            },
            txtDocumento: {
                ValidaDocumento: true
                //number : true
            },
            cboPais: {
                required: true,
                ValidaPaisS: true
            },
            cboFecNac: {
                ValidaVacios: true
            },
            cboSexo: {
                ValidaVacios: true
            },
            txtAPaterno: {
                ValidaVacios: true,
                alphanumeric: true,
				required: true
            },
            txtAMaterno: {
                alphanumeric: true
            },
            txtACasada: {
                alphanumeric: true
            },
            txtNombres: {
                ValidaVacios: true,
                alphanumeric: true,
				required: true
            },
            txtTlf1: {
                ValidaVacios: true
            },
            txtCorreo1: {
                required: true,
                email: true
            },
            txtCorreo2: {
                email: true
            },/* comentado por dlarico
            cboDepartamento: {
                required: true
            },
            cboProvincia: {
                required: true
            },
            cboDistrito: {
                required: true
            },*/
            cboDepartamentoDA: {
                required: true
            },
            cboProvinciaDA: {
                required: true
            },
            cboDistritoDA: {
                required: true
            },
            txtNroSOL: {
                ValidarNroPiso: true,
                //number: true
				ValidarNumeroLote: true
            },
            txtNroPiso: {
                number: true
            },
            txtNroDpto: {
                number: true
            },
            txtMzSOL: {
                ValidarNroPiso: true
            },
            txtLtSOL: {
                ValidarNroPiso: true
            },
            txtNroInt: {
                number: true
            },
            cboIPAutoridadSanit: {
                required: true
            },
            cboVia: {
                ValidaVia: true
            },
            txtDetVia: {
                ValidaViaDet: true
                //,alphanumeric: true
            },
            txtKlSOL: {
                ValidarKm: true
            },
            txtRefSOL: {
                ValidarRef: true
                //,alphanumeric: true
            },
            txtUrSOL: {
                alphanumericpunto: true
            }
        },
        highlight: function (element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function (element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function (error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });
}

//*****VALIDADOR DE FORMULARIOS
function ValidarFormularios() {
    var resp = true;
    if ($('#frmDatosPropietario').valid()  ) {
        $('#checkPropietarioOK').show();
        $('#checkPropietarioNoOK').hide();
    } else {
        $('#checkPropietarioOK').hide();
        $('#checkPropietarioNoOK').show();
        resp = false;
    }

    if ($('#frmDatosRRLL').valid()) {
        $('#checkRRLLOK').show();
        $('#checkRRLLNoOK').hide();
    } else {
        $('#checkRRLLOK').hide();
        $('#checkRRLLNoOK').show();
        resp = false;
    }

    if ($('#frmDatosEstablecimiento').valid()) {
        $('#checkEstOK').show();
        $('#checkEstNoOK').hide();
    } else {
        $('#checkEstOK').hide();
        $('#checkEstNoOK').show();
        resp = false;
    }

    if ($('#frmDatosRAS').valid()) {
        $('#checkRASOK').show();
        $('#checkRASNoOK').hide();
    } else {
        $('#checkRASOK').hide();
        $('#checkRASNoOK').show();
        resp = false;
    }

    if (rrhhListaValidos.length !== 0) {
        $('#checkRRHHOK').show();
        $('#checkRRHHNoOK').hide();
        resp = true;
    } else {
        $('#checkRRHHOK').hide();
        $('#checkRRHHNoOK').show();
        resp = false;
    }

    $('#lblValidUPS').attr('style', 'color:black');
    $('#lblValidUPSS').attr('style', 'color:black');
    $('#lblValidAct').attr('style', 'color:black');
	
	$('#lblValidEsp').attr('style', 'color:black');
	

    var itemsSeleccionados = 0;
    arrUPPSSDASeleccion.forEach(function (item, num) {
        if (!item.select) {
            itemsSeleccionados++;
        }
    });

    if (!$('#frmDatosGrlAdicional').valid() || (arrUPSDAdicional.length === 0 ||/*arrActividadDAdicional.length === 0 || */arrEspecialidadDAdicional.length === 0 || (typeof itemsSeleccionados !== 'undefined' && itemsSeleccionados !== 0))) {
        if (arrUPSDAdicional.length === 0) {
            $('#lblValidUPS').attr('style', 'color:red');
        }
		/*
        if (arrUPSSDAdicional.length === 0) {
            $('#lblValidUPSS').attr('style', 'color:red');
        }
		*/
		/*
        if (arrActividadDAdicional.length === 0) {
            $('#lblValidAct').attr('style', 'color:red');
        }
		*/
		if (arrEspecialidadDAdicional.length === 0) {
            $('#lblValidEsp').attr('style', 'color:red');
        }

        $('#checkDAOK').hide();
        $('#checkDANoOK').show();
        resp = false;
    } else {
        $('#checkDAOK').show();
        $('#checkDANoOK').hide();
    }
    return resp;
}

// ------------------------------------------------------INSCRIPCION IPRESS
//FILTROS
function FiltroGrilla(filterField, filterValue, grilla) {
    var gridData = $("#" + grilla).data("kendoGrid");
    var currFilterObj = gridData.dataSource.filter();
    var currentFilters = currFilterObj ? currFilterObj.filters : [];
    if (currentFilters && currentFilters.length > 0) {
        for (var i = 0; i < currentFilters.length; i++) {
            if (currentFilters[i].field === filterField) {
                currentFilters.splice(i, 1);
                break;
            }
        }
    }
    if (filterValue !== "0") {
        currentFilters.push({
            field: filterField,
            operator: "contains",
            value: filterValue
        });
    }
    gridData.dataSource.filter({
        logic: "or",
        filters: currentFilters
    });
}

function LimpiarFiltros(grilla) {
    var gridData = $("#" + grilla).data("kendoGrid");
    gridData.dataSource.filter({});
}
// ------------------------------------------------------DATOS GENERALES

function ValidadoresDatosGenerales() {
    jQuery.validator.addMethod("alphanumeric", function (value, element) {
        return this.optional(element) || /^[.°ÂA-Za-z\ñ\Ñ\á\Á\é\É\í\Í\ó\Ó\ú\Ú\d\s]+$/.test(value);
    }, "Letters, numbers, and underscores only please");

	jQuery.validator.addMethod("alphanumericpunto", function (value, element) {
        return this.optional(element) || /^[A-Za-z\ñ\Ñ\á\Á\é\É\í\Í\ó\Ó\ú\Ú\d\s.]+$/.test(value);
    }, "Letters, numbers, and underscores only please");
	
    $.validator.addMethod("ValidaVacios", function (value, element) {
        if (value === '') {
            return false;
        } else {
            return true;
        }
    }, '');

    $.validator.addMethod("ValidaSoloLetras", function (value, element) {
        var objRegExp = /^[a-z\u00C0-\u00ff]+$/;
        if (!objRegExp.test(value)) {
            return false;
        } else {
            return true;
        }
    }, '');
		 
	$.validator.addMethod("ValidarNumeroLote", function (value, element) {
        if (value !== ''  && (value.toUpperCase() == 'S/N' || esEntero(value) == true )){
            return true;
        } else {
            return false;
        }
    }, '');

    $.validator.addMethod("ValidaDocumento", function (value, element) {
        if (value === '') {
            return false;
        }
        switch ($('#cboDocumento').val()) {
            case "1":
                if (value.length !== 8) {
                    return false;
                } else {
                    return true;
                }
                break;
            case "2":
                if (value.length !== 15) {
                    return false;
                } else {
                    return true;
                }
                break;
            case "3":
                if (value.length !== 15) {
                    return false;
                } else {
                    return true;
                }
                break;
            case "4":
                if (value.length !== 9) {
                    return false;
                } else {
                    return true;
                }
                break;
            case "0":
                return false;
                break;
            default:
                return true;
        }
    }, '');

    $.validator.addMethod("ValidaDocumentoProp", function (value, element) {
        if (value === '') {
            return false;
        }
        switch ($('#cbdoTipoDocRA').val()) {
            case "1":
                if (value.length !== 8) {
                    return false;
                } else {
                    return true;
                }
                break;
            case "0":
                return false;
                break;
            default:
                return true;
        }
    }, '');

    $.validator.addMethod("ValidaDocumentoRRLL", function (value, element) {
        if (value === '') {
            return false;
        }
        switch ($('#cboTipoDocRRLL').val()) {
            case "1":
                if (value.length !== 8) {
                    return false;
                } else {
                    return true;
                }
                break;
            case "0":
                return false;
                break;
            default:
                return true;
        }
    }, '');

    $.validator.addMethod("ValidaDocumentoRA", function (value, element) {
        if (value === '') {
            return false;
        }
        switch ($('#cboDocIdenRAS').val()) {
            case "1":
                if (value.length !== 8) {
                    return false;
                } else {
                    return true;
                }
                break;
            case "0":
                return false;
                break;
            default:
                return true;
        }
    }, '');

    $.validator.addMethod("ValidaRUCPJ", function (value, element) {
        if ($('#txtRucRA').val() === '' && $('#txtRucPJRA').val() === '') {
            return false;
        } else {
            if ($('#txtRucRA').val() === '' && $('#txtRucPJRA').val() !== '') {
                if ($('#txtRucPJRA').val().length === 11) {
                    return true;
                } else {
                    return false;
                }
            } else {
                if ($('#txtRucRA').val() !== ''
                        && $('#txtRucPJRA').val() === '') {
                    if ($('#txtRucRA').val().length === 11) {
                        return true;
                    } else {
                        return false;
                    }

                } else {
                    return false;
                }
            }
        }

    }, '');

    $.validator.addMethod("ValidaRUCPN", function (value, element) {
        if ($('#txtRucRA').val() === '' && $('#txtRucPJRA').val() === '') {
            return false;
        } else {
            if ($('#txtRucRA').val() === '' && $('#txtRucPJRA').val() !== '') {
                return true;
            } else {
                if ($('#txtRucRA').val() !== ''
                        && $('#txtRucPJRA').val() === '') {
                    if ($('#txtRucRA').val().length === 11) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            }
        }
    }, '');

    $.validator.addMethod("ValidaRZPJ", function (value, element) {
        if ($('#txtRucPJRA').val() !== '') {
            if ($('#txtRSocialPJRA').val() === '') {
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }, '');

    $.validator.addMethod("ValidaCorreosProp", function (value, element) {
        if ($('#txtEmailRA').val() === $('#txtReEmailRA').val()) {
            return true;
        } else {
            return false;
        }
    }, '');

    $.validator.addMethod("ValidarRUCPN", function (value, element) {
        if (flagPNPJ) {// VALIDACION DE JURIDICA
            return true;
        } else {// VALIDACION DE NATURAL
            if (value === '') {
                return false;
            } else {
                return true;
            }
        }
    }, '');

    $.validator.addMethod("ValidarRUCPJ", function (value, element) {
        if (!flagPNPJ) {// VALIDACION DE JURIDICA
            return true;
        } else {// VALIDACION DE NATURAL
            if (value === '') {
                return false;
            } else {
                return true;
            }
        }
    }, '');

    $.validator.addMethod("ValidaViaProp", function (value, element) {
        if ($('#cboViaNombreRA').val() !== '' && $('#cboViaRA').val() === '') {
            return false;
        } else {
            return true;
        }
    }, '');

    $.validator.addMethod("ValidarMzLtProp", function (value, element) {
        if (($('#txtManzanaRA').val() !== '' && $('#txtLoteRA').val() === '') || ($('#txtManzanaRA').val() === '' && $('#txtLoteRA').val() !== '')) {
            return false;
        } else {
            return true;
        }
    }, '');

    $.validator.addMethod("ValidarKmProp", function (value, element) {
        if (($('#txtKmRA').val() !== '' && $('#txtRefRA').val() === '')) {
            $('#txtRefRA').valid();
            return false;
        } else {
            return true;
        }
    }, '');

    $.validator.addMethod("ValidarRefProp", function (value, element) {
        if (($('#txtKmRA').val() !== '' && $('#txtRefRA').val() === '')) {
            return false;
        } else {
            return true;
        }
    }, '');
	
	

    $.validator.addMethod("ValidaViaDetProp", function (value, element) {
        if ($('#cboViaNombreRA').val() === '' && $('#cboViaRA').val() !== '') {
            return false;
        } else {
            return true;
        }
    }, '');

    $.validator.addMethod("ValidarNroPisoProp", function (value, element) {
        if ($('#cboViaNombreRA').val() !== '') {
            if ($('#cboViaNombreRA').val() !== '' || $('#txtUrRA').val() !== '') {
                if (($('#txtManzanaRA').val() === '' && $('#txtLoteRA').val() !== '') || ($('#txtManzanaRA').val() !== '' && $('#txtLoteRA').val() === '')) {
                    return false;
                } else {
                    if ($('#txtManzanaRA').val() !== '' && $('#txtLoteRA').val() !== '' && $('#txtNroRA').val() !== '') {
                        return true;
                    } else {
                        if ($('#txtManzanaRA').val() === '' && $('#txtLoteRA').val() === '' && $('#txtNroRA').val() === '') {
                            return false;
                        } else {
                            return true;
                        }

                    }
                }
            }
        } else {
            if ($('#cboViaRA').val() === '' && $('#cboViaNombreRA').val() === '') {
                return true;
            } else {
                return false;
            }
        }
    }, '');

    $.validator.addMethod("ValidaPaisPr", function (value, element) {
        if ($('#cbdoTipoDocRA').val() !== '1' && document.getElementById('cboPaisRA').options[document.getElementById('cboPaisRA').selectedIndex].value === "174") {
            return false;
        } else {
            return true;
        }
    }, '');

    // validacion de formulario inscripcion IPRESS
    $('#frmDatosPropietario').validate({
        ignore: [],
        rules: {
            // PN
            txtRucRA: {
                ValidarRUCPN: true,
                minlength: 11,
                number: true
            },
            cbdoTipoDocRA: {
                ValidarRUCPN: true
            },
            txtNroDocRA: {
                ValidarRUCPN: true
            },
            cboPaisRA: {
                ValidarRUCPN: true,
                ValidaPaisPr: true
            },
            txtFecNacRA: {
                ValidarRUCPN: true
            },
            cboSexoRA: {
                ValidarRUCPN: true
            },
            txtAPaternoRA: {
                ValidarRUCPN: true,
                alphanumeric: true
            },
            txtAMaternoRA: {
                alphanumeric: true
            },
            txtACasadaRA: {
                alphanumeric: true
            },
            txtNombresRA: {
                ValidarRUCPN: true,
                alphanumeric: true
            },
            txtRucPJRA: {
                minlength: 11,
                ValidarRUCPJ: true,
                number: true
            },
            txtRSocialPJRA: {
                ValidarRUCPJ: true
            },
            cboDepRA: {
                required: true
            },
            cboProRA: {
                required: true
            },
            cboDisRA: {
                required: true
            },
            txtTelRA: {
                required: true
            },
            txtEmailRA: {
                email: true,
                required: true,
                ValidaCorreosProp: true
            },
            txtReEmailRA: {
                email: true,
                required: true,
                ValidaCorreosProp: true
            },
            txtNroRA: {
                //number: true,
                ValidarNroPisoProp: true,
				ValidarNumeroLote: true
            },
            txtNroPisoRA: {
                number: true
            },
            txtNroDptoRA: {
                number: true
            },
            txtInteriorRA: {
                number: true
            },
            cboViaRA: {
                ValidaViaProp: true
            },
            cboViaNombreRA: {
                ValidaViaDetProp: true
            },
            txtManzanaRA: {
                ValidarNroPisoProp: true
            },
            txtLoteRA: {
                ValidarNroPisoProp: true
            },
            txtKmRA: {
                ValidarKmProp: true
            },
            txtRefRA: {
                ValidarRefProp: true
            }
        },
        highlight: function (element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function (element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function (error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });
}

function ValidadoresRRLL() {
    $.validator.addMethod("ValidaVacios", function (value, element) {
        if (value === '') {
            return false;
        } else {
            return true;
        }
    }, '');

    $.validator.addMethod("ValidaSoloLetras", function (value, element) {
        var objRegExp = /^[a-z\u00C0-\u00ff]+$/;
        if (!objRegExp.test(value)) {
            return false;
        } else {
            return true;
        }
    }, '');

    $.validator.addMethod("ValidaCorreosRRLL", function (value, element) {
        if ($('#txtEmailRRLL').val() === $('#txtReEmailRRLL').val()) {
            return true;
        } else {
            return false;
        }
    }, '');

    $.validator.addMethod("ValidaPaisRRLL", function (value, element) {
        if ($('#cboTipoDocRRLL').val() !== '1' && document.getElementById('cboPaisRRLL').options[document.getElementById('cboPaisRRLL').selectedIndex].value === "174") {
            return false;
        } else {
            return true;
        }
    }, '');

    // validacion de formulario inscripcion IPRESS
    $('#frmDatosRRLL').validate({
        ignore: [],
        rules: {
            cboTipoDocRRll: {
                required: true
            },
            txtNroDocRRLL: {
                required: true,
                ValidaDocumentoRRLL: true
            },
            cboPaisRRLL: {
                required: true,
                ValidaPaisRRLL: true
            },
            txtFecNacRRLL: {
                required: true
            },
            cboSexoRRLL: {
                required: true
            },
            txtAPaternoRRLL: {
                required: true,
                alphanumeric: true
            },
            txtNombresRRLL: {
                required: true,
                alphanumeric: true
            },
            txtAMaternoRRLL: {
                alphanumeric: true
            },
            txtACasadaRRLL: {
                alphanumeric: true
            },
            cboProfesionRRLL: {
                required: true
            },
            txtTelRRLL: {
                required: true
            },
            txtEmailRRLL: {
                email: true,
                required: true,
                ValidaCorreosRRLL: true
            },
            txtReEmailRRLL: {
                email: true,
                required: true,
                ValidaCorreosRRLL: true
            }
        },
        highlight: function (element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function (element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function (error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

}

function ValidadoresEstablecimiento() {
    $.validator.addMethod("ValidaVacios", function (value, element) {
        if (value === '') {
            return false;
        } else {
            return true;
        }
    }, '');

    $.validator.addMethod("ValidaSoloLetras", function (value, element) {
        var objRegExp = /^[a-z\u00C0-\u00ff]+$/;
        if (!objRegExp.test(value)) {
            return false;
        } else {
            return true;
        }
    }, '');
    /* comentado por dlarico
    $.validator.addMethod("ValidaRedVisible", function (value, element) {
        if (document.getElementById('clasificacionEntidad').style.display === 'none') {
            return true;
        } else {
            if (value === '') {
                return false;
            } else {
                return true;
            }
        }
    }, '');
    */
   ///--Agregado por dlarico
    $.validator.addMethod("ValidaDivRedVisible", function (value, element) {
        if (document.getElementById('divRed').style.display === 'none') {
            return true;
        } else {
            //if (value === '') {
                //return false;
            //} else {
                return true;
            //}
        }
    }, '');
    $.validator.addMethod("ValidaDivMicroRedVisible", function (value, element) {
        if (document.getElementById('divMicroRed').style.display === 'none') {
            return true;
        } else {
            //if (value === '') {
                //return false;
            //} else {
                return true;
            //}
        }
    }, '');
    $.validator.addMethod("ValidaDivUEVisible", function (value, element) {
        if (document.getElementById('divUE').style.display === 'none') {
            return true;
        } else {
            if (value === '') {
                return false;
            } else {
                return true;
            }
        }
    }, '');
    $.validator.addMethod("ValidaDivEstClasEstVisible", function (value, element) {
        if (document.getElementById('divEstClasEst').style.display === 'none') {
            return true;
        } else {
            //if (value === '') {
                //return false;
            //} else {
                return true;
            //}
        }
    }, '');
    ///--- FIN
    $.validator.addMethod("ValidaEst1", function (value, element) {
        if (($('#cboViaDE').val() === '' && $('#txtViaDetDE').val() !== '') || ($('#cboViaDE').val() !== '' && $('#txtViaDetDE').val() === '')) {
            console.log('1');
            return false;
        } else {
            console.log('2');
            return true;
        }
        /*if ($('#cboViaDE').val() !== '') {
         if ($('#txtViaDetDE').val() !== '') {
         return true;
         } else {
         return false;
         }
         } else {
         if ($('#txtViaDetDE').val() !== '') {
         return false;
         } else {
         return true;
         }
         }*/
    }, '');

    $.validator.addMethod("ValidarMzLtEst", function (value, element) {
        if (($('#txtMzDE').val() !== '' && $('#txtLtDE').val() === '') || ($('#txtMzDE').val() === '' && $('#txtLtDE').val() !== '')) {
            return false;
        } else {
            return true;
        }
    }, '');

    $.validator.addMethod("ValidarNroPisoEst", function (value, element) {
        if ($('#txtNroPisoDE').val() !== '') {
            if ($('#txtNroDepDE').val() !== '' || $('#txtNroIntDE').val() !== '') {
                return true;
            } else {
                return false;
            }
        } else {
            if ($('#txtNroDepDE').val() !== '' || $('#txtNroIntDE').val() !== '') {
                return false;
            } else {
                return true;
            }
        }
    }, '');

    $.validator.addMethod("ValidarKmEst", function (value, element) {
        if (($('#txtKlDE').val() !== '' && $('#txtRefDE').val() === '') || ($('#txtKlDE').val() === '' && $('#txtRefDE').val() !== '')) {
            return false;
        } else {
            return true;
        }
    }, '');

    $.validator.addMethod("ValidaCorreosEst", function (value, element) {
        if ($('#txtEmailDatosDE').val() === $('#txtReEmailDatosDE').val()) {
            return true;
        } else {
            return false;
        }
    }, '');

    $.validator.addMethod("ValidarNroEst", function (value, element) {
        if ($('#cboViaDE').val() !== '') {
            if ($('#cboViaDE').val() !== '' || $('#txtUrDE').val() !== '') {
                if (($('#txtMzDE').val() === '' && $('#txtLtDE').val() !== '') || ($('#txtMzDE').val() !== '' && $('#txtLtDE').val() === '')) {
                    return false;
                } else {
                    if ($('#txtMzDE').val() !== '' && $('#txtLtDE').val() !== '' && $('#txtNroDE').val() !== '') {
                        return true;
                    } else {
                        if ($('#txtMzDE').val() === '' && $('#txtLtDE').val() === '' && $('#txtNroDE').val() === '') {
                            return false;
                        } else {
                            return true;
                        }

                    }
                }
            }
        } else {
            if ($('#cboViaDE').val() === '' && $('#txtViaDetDE').val() === '') {
                return true;
            } else {
                return false;
            }
        }
    }, '');
    //Agregado por dlarico
    $.validator.addMethod("ValidaSerie", function (value, element) {
        if($("#datos-generales-radio-persona-juridica-privada").is(':checked')){
            if ($('#txtNuSerieDE').val() !== '') {
                return true;
            } else {
                return false;
            }
        }else{
            return true;
        }
    }, '');

    // validacion de formulario inscripcion IPRESS
    $('#frmDatosEstablecimiento').validate({
        ignore: [],
        rules: {
            cboTipoEstablecimiento: {
                required: true
            },/*//comentado por dlarico
            txtRazonSocialDE: {
                required: true
            },*/
            txtNComercialDE: {
                required: true
            },
            cboDepDE: {
                required: true
            },
            cboProvDE: {
                required: true
            },
            cboDistDE: {
                required: true
            },
            cboCompatibilidadDE: {
                required: true
            },
            txtNroDocDE: {
                required: true
            },
            txtTelDatosDE: {
                required: true
            },
            txtEmailDatosDE: {
                required: true,
                email: true,
                ValidaCorreosEst: true
            },
            txtReEmailDatosDE: {
                required: true,
                email: true,
                ValidaCorreosEst: true
            },
            txtFecIniDatosDE: {
                required: true
            },
            txtNroDE: {
                //number: true,
                ValidarNroEst: true,
				ValidarNumeroLote: true
            },
            txtNroPisoDE: {
                number: true,
                ValidarNroPisoEst: true
            },
            txtNroDepDE: {
                number: true,
                ValidarNroPisoEst: true
            },
            txtNroIntDE: {
                number: true,
                ValidarNroPisoEst: true
            },
            cboAutSanitaria: {// RESTABLECER
                // required : true,
            },
            cboRedEst: {
                //ValidaRedVisible: true //comentado Por dlarico
                ValidaDivRedVisible: true   //Agregado por dlarico
            },
            cboMicroRedEst: {
                //ValidaRedVisible: true //comentado Por dlarico
                ValidaDivMicroRedVisible: true  //Agregado por dlarico
            },
            cboUniEjeEst: {
                //ValidaRedVisible: true  //comentado Por dlarico
                ValidaDivUEVisible: true  //Agregado por dlarico
            },
            cboEstClasEst: {
                //ValidaRedVisible: true  //comentado Por dlarico
                ValidaDivEstClasEstVisible: true  //Agregado por dlarico
            },
            cboInstitucionEst: {
                required: true
            },
            cboViaDE: {
                ValidaEst1: true
            },
            txtViaDetDE: {
                ValidaEst1: true
            },
            txtMzDE: {
                ValidarNroEst: true
            },
            txtLtDE: {
                ValidarNroEst: true
            },
            txtKlDE: {
                ValidarMzLtEst: true
            },
            txtRefDE: {
                ValidarMzLtEst: true
            },//Agregado por dlarico
            txtNuSerieDE:{
                ValidaSerie: true
            }
        },
        highlight: function (element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function (element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function (error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

}

function ValidadoresRAS() {
    $.validator.addMethod("ValidaVacios", function (value, element) {
        if (value === '') {
            return false;
        } else {
            return true;
        }
    }, '');

    $.validator.addMethod("ValidaSoloLetras", function (value, element) {
        var objRegExp = /^[a-z\u00C0-\u00ff]+$/;
        if (!objRegExp.test(value)) {
            return false;
        } else {
            return true;
        }
    }, '');

    $.validator.addMethod("ValidaEmailRAS", function (value, element) {
        if ($('#txtEmailRAS').val() !== $('#txtReEmailRAS').val()) {
            return false;
        } else {
            return true;
        }
    }, '');

    $.validator.addMethod("ValidaCorreosRAS", function (value, element) {
        if ($('#txtEmailRAS').val() !== $('#txtReEmailRAS').val()) {
            return false;
        } else {
            return true;
        }
    }, '');

    $.validator.addMethod("ValidaPaisDM", function (value, element) {
        if ($('#cboDocIdenRAS').val() !== '1' && document.getElementById('cboPaisRAS').options[document.getElementById('cboPaisRAS').selectedIndex].value === "174") {
            return false;
        } else {
            return true;
        }
    }, '');

    // validacion de formulario inscripcion IPRESS
    $('#frmDatosRAS').validate({
        ignore: [],
        rules: {
            cboDocIdenRAS: {
                required: true
            },
            txtNroDocRAS: {
                required: true,
                ValidaDocumentoRA: true
            },
            cboPaisRAS: {
                required: true,
                ValidaPaisDM: true
            },
            txtFecNacRAS: {
                required: true
            },
            cboFecNacRAS: {
                required: true
            },
            txtAPaternoRAS: {
                required: true,
                alphanumeric: true
            },
            txtAMaternoRAS: {
                alphanumeric: true
            },
            txtACasadaRAS: {
                alphanumeric: true
            },
            cboColeProfRAS: {
                required: true
            },
            txtNroColegiaturaRAS: {
                required: true
            },
            txtTelRAS: {
                required: true
            },
            txtEmailRAS: {
                ValidaCorreosRAS: true,
                required: true,
                email: true
            },
            txtReEmailRAS: {
                ValidaCorreosRAS: true,
                required: true,
                email: true
            },
            txtNombresRAS: {
                required: true,
                alphanumeric: true
            },
            cboSexoRAS: {
                required: true
            }
        },
        highlight: function (element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function (element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function (error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

}

var arrDiasSelec = [];
function SeleccionarDiaADO(objChk) {
    if (objChk.checked === true) {
        arrDiasSelec.push(objChk.value);
    } else {
        var index = arrDiasSelec.indexOf(objChk.value);
        arrDiasSelec.splice(index, 1);
    }
    $('#txtHorarioAtenADODA').valid();
}

function ValidadoresDAdicionales() {
    $.validator.addMethod("ValidaVacios", function (value, element) {
        if (value === '') {
            return false;
        } else {
            return true;
        }
    }, '');

    $.validator.addMethod("ValidaSoloLetras", function (value, element) {
        var objRegExp = /^[a-z\u00C0-\u00ff]+$/;
        if (!objRegExp.test(value)) {
            return false;
        } else {
            return true;
        }
    }, '');

    $.validator.addMethod("ValidarDias", function (value, element) {
        if ($('#divHoraAdo').is(":visible")) {
            if (arrDiasSelec.length === 0 && value === '') {
                return false;
            } else {
                if (arrDiasSelec.length !== 0 && value === '' || arrDiasSelec.length === 0 && value !== '') {
                    return false;
                } else {
                    return true;
                }
            }
        } else {
            return true;
        }

    }, '');

    // validacion de formulario inscripcion IPRESS
    $('#frmDatosGrlAdicional').validate({
        ignore: [],
        rules: {
            txtNroEstDA: {
                required: true
            },
            cboCuentaPoblacionDA: {
                required: true
            },
            cboTipoAtencionDA: {
                required: true
            },
            cboGrupoEtarioDA: {
                required: true
            },
            txtHorarioAtenDA: {
                required: true
            },
            txtHorarioAtenADODA: {
                //required : true,
                ValidarDias: true
            }
        },
        highlight: function (element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function (element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function (error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

    $('#frmPopTerciarizacion').validate({
        rules: {
            txtRUCTerciarizacion: {
                required: true,
                minlength: 11
            },
            txtRZTerciarizacion: {
                required: true
            },
            txtNCTerciarizacion: {
                //required : true
            },
            txtTCTerciarizacion: {
                required: true
            }
        },
        highlight: function (element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function (element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function (error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

}

function ValidadoresRHHIndividual() {
    $.validator.addMethod("ValidaACasadaExcel", function (value, element) {
        if ($('#CboSexoExcel').val() === '1') {
            $('#txtACasadaExcel').val('');
            return true;
        } else {
            if ($('#CboSexoExcel').val() === '2') {
                return true;
            } else {
                return false;
            }
        }
    }, '');

    $.validator.addMethod("ValidaDocumentoExcel", function (value, element) {
        if (value === '') {
            return false;
        }
        switch ($('#cboTipoDocExcel').val()) {
            case "1":
                if (value.length !== 8) {
                    return false;
                } else {
                    return true;
                }
                break;
            case "0":
                return false;
                break;
            default:
                return true;
        }
    }, '');

    $.validator.addMethod("ValidaPaisRRHH", function (value, element) {
        if ($('#cboTipoDocExcel').val() !== '1' && document.getElementById('cboPaisExcel').options[document.getElementById('cboPaisExcel').selectedIndex].value === "174") {
            return false;
        } else {
            return true;
        }
    }, '');

    $('#frmDatosRRHHIndividual').validate({
        ignore: [],
        rules: {
            cboTipoDocExcel: {
                required: true
            },
            txtNroDocExcel: {
                required: true,
                ValidaDocumentoExcel: true
            },
            cboPaisExcel: {
                ValidaPaisRRHH: true
            },
            txtFecNacExcel: {
                required: true
            },
            CboSexoExcel: {
                required: true
            },
            txtAPaternoExcel: {
                required: true
            },
            txtACasadaExcel: {
                alphanumeric: true
            },
            txtNombresExcel: {
                required: true
            },
            txtRecEspExcel: {
            }
        },
        highlight: function (element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function (element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function (error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });
}

function RespuestaRegistroSol() {
    $('#popRespuestaSolicitud').modal({
        backdrop: 'static',
        keyboard: false
    }).one('click', '[data-value]', function (e) {
        if ($(this).data('value') === '1') {

        } else {
            return;
        }
    });
}
var objX;
var sumador = 0;
var sumadorCantidad = 0;
var listaReqs = [];
var reqCompleto = false;
function GuardarIpress() {
    var flagValid = ValidarFormularios();
    if (!$('#frmDatosPropietario').valid()) {		
    	LanzarPopGenerico('Informativo', '(Datos de Propietario) Revise las validaciones resaltadas en rojo');
        return false;
    }else{
		if ( $('#txtAPaternoRA').val() == '' && $('#txtNombresRA').val() == '' && $('#datos-generales-radio-persona-natural').prop('checked') ){
			LanzarPopGenerico('Informativo', '(Datos de Propietario) Revise las validaciones resaltadas en rojo');
			return false;
		}
	}

    if ($('#txtNroDocRRLL').val() !== '') {
        if (!$('#frmDatosRRLL').valid() || ( $('#txtAPaternoRRLL').val() == '' && $('#txtNombresRRLL').val() == '' )) {
        	LanzarPopGenerico('Informativo', '(Datos de Representante Legal) Revise las validaciones resaltadas en rojo');
            return false;
        }
    }
	
	if ($('#cboTipoEstablecimiento').val() === '' || $('#cboTipoEstablecimiento').val() == null) {        
        LanzarPopGenerico('Informativo', '(Datos de Establecimiento) Seleccione un tipo de establecimiento clasificación');
        return false;        
	}

    if ($('#cboTipoEstablecimiento').val() !== '') {
        if (arrClasEst.length === 0) {
            LanzarPopGenerico('Informativo', '(Datos de Establecimiento) Seleccione por lo menos alguna clasificación');
            return false;
        }
        if (!$('#frmDatosEstablecimiento').valid()) {
        	LanzarPopGenerico('Informativo', '(Datos de Establecimiento) Revise las validaciones resaltadas en rojo');
            return false;
        }
    }

    if ($('#txtNroDocRAS').val() !== '' ) {
        if (!$('#frmDatosRAS').valid() || ( $('#txtAPaternoRAS').val() == '' && $('#txtNombresRAS').val() == '' ) ){
        	LanzarPopGenerico('Informativo', '(Datos de Director Médico) Revise las validaciones resaltadas en rojo');
            return false;
        }
    }

    if(idOpcion === 4){
        if (!$('#frmDatosGrlAdicional').valid() && (arrUPSDAdicional.length !== 0 || arrUPPSSDASeleccion.length !== 0 )) {
            console.log('formulario no valido');
            LanzarPopGenerico('Informativo', '(Datos Adicionales) Revise las validaciones resaltadas en rojo');
            return false;

        } else {
            if ($('#frmDatosGrlAdicional').valid() && (arrUPSDAdicional.length === 0 || arrUPPSSDASeleccion.length === 0 )) {
                LanzarPopGenerico('Informativo', '(Datos Adicionales) Revise las validaciones resaltadas en rojo');
                return false;
            }
        }
    }else{
        if (!$('#frmDatosGrlAdicional').valid() && (arrUPSDAdicional.length !== 0 || arrUPPSSDASeleccion.length !== 0 || /*arrActividadDAdicional.length !== 0 || */arrEspecialidadDAdicional.length !== 0 )) {
            console.log('formulario no valido');
            LanzarPopGenerico('Informativo', '(Datos Adicionales) Revise las validaciones resaltadas en rojo');
            return false;

        } else {
            if ($('#frmDatosGrlAdicional').valid() && (arrUPSDAdicional.length === 0 || arrUPPSSDASeleccion.length === 0 || /*arrActividadDAdicional.length === 0 || */arrEspecialidadDAdicional.length === 0 )) {
                LanzarPopGenerico('Informativo', '(Datos Adicionales) Revise las validaciones resaltadas en rojo');
                return false;
            }
        }
    }

    if (arrUPPSSDASeleccion.length !== 0) {
        var flagTerce = false;
        arrUPPSSDASeleccion.forEach(function (item, num) {
            if (!item.select) {
                flagTerce = true;
                LanzarPopGenerico('Informativo', '(Datos Adicionales) Debe indicar si la UPSS es terciarizada');
                return false;
            }
        });

        if (flagTerce) {
            return false;
        }
    }

  //VALIDACION DE CANTIDAD DE REQUISITOS
    objX = RetornaObjTabla('datable-grilla40');
    listaReqs = [];
    reqCompleto = false;
    objX.forEach(function (i, n) {
        console.debug(n);
        if (i.length > 0) {
            var objetoReq = {};
            objetoReq.upss = upssActivo;
            i.forEach(function (j, nu) {
                if ($(j).find('input').length > 0) {
                    switch (nu) {
                        case 2:
                            objetoReq.si = $(j).find('input')[0].checked;
                            break;
                        case 3:
                            objetoReq.no = $(j).find('input')[0].checked;
                            break;
                        case 4:
                            var celda = $(j).find('input[type=number]');
                            //objetoReq.cantidad = ($(j).find('input[type=number]').length > 0 ? $(j).find('input[type=number]').val(): '');
                            if(celda.length!==0 && $(j).find('input[type=number]').attr('disabled')===undefined){
                            	objetoReq.cantidad = ($(celda).val().length > 0 && $(celda).val()!=='0' ? $(celda).val() : '0');
                            	//objetoReq.cantidad = $(celda).val();
                            }else{
                            	objetoReq.cantidad = '';
                            }
                            

                            if ($(j).find('input[type=hidden]').length > 0) {
                                objetoReq.idReq = $(j).find('input[type=hidden]').val();
                            }
                            break;
                    }
                }
            });
            listaReqs.push(objetoReq);
        }
        if (n > 0) {
            // listaReqs.push(objetoReq);
        }
    });

     sumador = 0;
     sumadorCantidad = 0;
    listaReqs.forEach(function (item, n) {
        if (item.si || item.no) {
            sumador++;
        }
		if(item.cantidad==='0'){
			sumadorCantidad++;
		}
    });

    if(sumadorCantidad>0){
    	LanzarPopGenerico("Informativo", "Es necesario ingresar cantidad en los requisitos seleccionados.");
    	return false;
    }
    //VALIDACION DE CANTIDAD DE REQUISITOS
      
    $('#popConfirmaGuardarSolicitud').modal({
        backdrop: 'static',
        keyboard: false
    }).one('click', '[data-value]', function (e) {
        if ($(this).data('value') === 1) {
            if (flagValid) {
                // SE VALIDA QUE SE INGRESE INFORMACION EN TODO EL FORMULARIO
                var tabDesh = $('li.disabled.disabledTab');
                $(tabDesh).each(function (index, value) {
                    $(value).removeClass('disabled').removeClass('disabledTab');
                });
            }
			// [BIT] CMIC 26/10/2015
			//if (valDireccionEst() == 1){
				ConfirmaGuardarIpress();
			//}else{
			//	LanzarPopGenerico('Informativo', 'La dirección del establecimiento ya se encuentra registrado');
			//	return false;
			//}
        } else {
            return;
        }
    });
}

function ConfirmaGuardarIpress() {
    // PARA REGISTRO DE UPSS
    arrUPSSSTemp = [];
    UPSSDatosAdicionales.forEach(function (item, num) {
        if (item.FLAG === '1' && item.terciarizada !== '') {
            arrUPSSSTemp.push(item);
        }
    });
/*
    var objX = RetornaObjTabla('datable-grilla40');
    var listaReqs = [];
    var reqCompleto = false;
    objX.forEach(function (i, n) {
        console.debug(n);
        if (i.length > 0) {
            var objetoReq = {};
            objetoReq.upss = upssActivo;
            i.forEach(function (j, nu) {
                if ($(j).find('input').length > 0) {
                    switch (nu) {
                        case 2:
                            objetoReq.si = $(j).find('input')[0].checked;
                            break;
                        case 3:
                            objetoReq.no = $(j).find('input')[0].checked;
                            break;
                        case 4:
                            var celda = $(j).find('input[type=number]');
                            //objetoReq.cantidad = ($(j).find('input[type=number]').length > 0 ? $(j).find('input[type=number]').val(): '');
                            if(celda.length!==0 && $(j).find('input[type=number]').attr('disabled')===undefined){
                            	objetoReq.cantidad = ($(celda).val().length > 0 && $(celda).val()!=='0' ? $(celda).val() : '0');
                            	//objetoReq.cantidad = $(celda).val();
                            }else{
                            	objetoReq.cantidad = '';
                            }
                            

                            if ($(j).find('input[type=hidden]').length > 0) {
                                objetoReq.idReq = $(j).find('input[type=hidden]').val();
                            }
                            break;
                    }
                }
            });
            listaReqs.push(objetoReq);
        }
        if (n > 0) {
            // listaReqs.push(objetoReq);
        }
    });

    var sumador = 0;
    var sumadorCantidad = 0;
    listaReqs.forEach(function (item, n) {
        if (item.si || item.no) {
            sumador++;
        }
		if(item.cantidad==='0'){
			sumadorCantidad++;
		}
    });

    if(sumadorCantidad>0){
    	LanzarPopGenerico("Informativo", "Es necesario ingresar cantidad en los requisitos seleccionados.");
    	return false;
    }*/
    
    if (objX.length - 1 === sumador) {
        reqCompleto = true;
        console.debug('requisitos completos');
        $('#' + idUPPSIcon).removeClass("btn-gris").removeClass("btn-warning").addClass("btn-success");
    } else {
        reqCompleto = false;
        if (objX.length - 1 !== sumador && sumador > 0) {
            $('#' + idUPPSIcon).removeClass("btn-gris").removeClass("btn-success").addClass("btn-warning");
        } else {
            $('#' + idUPPSIcon).removeClass("btn-warning").removeClass("btn-success").addClass("btn-gris");
        }
    }

    var newReqs = [];
    listaReqs.forEach(function (item, n) {
        item.idmodulo = moduloActivo;
        if (reqCompleto) {
            item.flagCompleto = '1';
        } else {
            item.flagCompleto = '0';
        }
        newReqs.push(item);
    });
    listaReqs = newReqs;
    //Tipo persona agregado por dlarico
    //alert("llego asta aqui");
    var tipoPersona = 0;
    if ($("#datos-generales-radio-persona-natural").is(':checked')) {
        tipoPersona = 1;
    }
    if ($("#datos-generales-radio-persona-juridica-publica").is(':checked')) {
        tipoPersona = 2;
    }
    if ($("#datos-generales-radio-persona-juridica-privada").is(':checked')) {
        tipoPersona = 3;
    }
    //-----------------------------------    
    beginCargando();
	// CMIC 
			
	var arreglo = [];
	var listaObj = $('#gdDocAdjuntosActualizar tr');
	var listaSubObj;
			
	for (var i = 1; i < listaObj.length; i++) {
		var objeto = {
			id: '',
			nroDoc: 'false',
			fecEmi: 'false',
			archivo: '',
			archivoD: false,
			archivoH: '',
			archivogenerado: '',
			obligatoriedad: '',
			docReq: ''
		};
		listaSubObj = $(listaObj[i]).find('input');
		for (var j = 0; j < listaSubObj.length; j++) {
			objeto.id = listaSubObj[j].id.split('-')[1];
			switch (listaSubObj[j].id.split('-')[0]) {
				case 'filAd':
					objeto.archivo = listaSubObj[j].value.replace(/C:\\fakepath\\/i, '');
					break;
				case 'filAdj':
					objeto.archivoD = true;
					break;
				case 'filAdH':
					objeto.archivoH = listaSubObj[j].value;
					break;
				case 'txtDoc':
					objeto.nroDoc = listaSubObj[j].value;
					break;
				case 'txtFecEmi':
					objeto.fecEmi = listaSubObj[j].value.trim();
					break;
				case 'hdnObli':
					objeto.obligatoriedad = listaSubObj[j].value;
					break;
				case 'hdnReq':
					objeto.docReq = listaSubObj[j].id.split('-')[1];//listaSubObj[j].value;
					break;
				case 'gen':
					objeto.archivogenerado = listaSubObj[j].value === undefined ? '' : listaSubObj[j].value;
					break;
				case 'ori':
					objeto.archivo = listaSubObj[j].value === undefined ? '' : listaSubObj[j].value;
					break;
			}
		}
		arreglo.push(objeto);
	}
	var arrAdjTemp = [];
	var sumObligatoriedad = 0;
	var sumRequerido = 0;
	arreglo.forEach(function (element, index, array) {
		if(element.archivo === '' && element.archivoH !== ''){
			//element.archivo =element.archivoH;
			element.archivo ='update';
		}
		if (element.obligatoriedad === '1' && element.archivo === '' && !element.archivoD) {
			sumRequerido++;
		} else {
			if (element.obligatoriedad === '1' && element.docReq === '1' && element.nroDoc !== 'false' && element.nroDoc === '') {
				sumRequerido++;
			} else {
				if (element.obligatoriedad === '1' && element.docReq === '1' && element.fecEmi !== 'false' && element.fecEmi === '') {
					sumRequerido++;
				}
			}
		}
		arrAdjTemp.push(element);
	});

	listaObj = {
		'arreglo': JSON.stringify(arrAdjTemp)
	};
	if (sumRequerido > 0) {
		LanzarPopGenerico('Informativo', '(Documentos adjuntos) Ingrese Informacion de Documentos obligatorios.');
		endCargando();
		return;
	}
    $.ajax({
        url: "solicitudActualizar.htm?action=insertDatosGeneralesSol",
        dataType: "json",
        type: "POST",
        data: $('#frmDatosPropietario').serialize() + '&'
                + $('#frmDatosRRLL').serialize() + '&'
                + $('#frmDatosEstablecimiento').serialize() + '&'
                + $('#frmDatosGrlAdicional').serialize() + '&'
                + $('#frmDatosRAS').serialize() + '&idSolicitud='
                + $('#idSolicitud').val() + '&idSolicitudIPRESS='
                + $('#idSolicitudIPRESS').val() + '&arregloEst='
                + JSON.stringify(arrClasEst) + '&arregloUPSS='
                + JSON.stringify(arrUPPSSDASeleccion) + '&arregloUPS='
                + arrUPSDAdicional.toString()
                + '&arregloAct=' + arrActividadDAdicional.toString()
                + '&arregloReq=' + JSON.stringify(listaReqs)
                + '&arregloRRHH=' + JSON.stringify(rrhhListaValidos)
                + '&arrDocReqs=' + JSON.stringify(listaDocsAutSanit)
                + '&diasHorarioAtAdo=' + arrDiasSelec.toString()
				+ '&arregloEsp=' + arrEspecialidadDAdicional.toString() // agregado por cmic
                + '&tiPersonaProp=' + tipoPersona
        ,
        success: function (result) {
			$.ajax({
				url: "solicitudActualizar.htm?action=actualizarAdjuntosSolicitud&idSolicitud=" + $('#idSolicitud').val(),
				dataType: "json",
				data: listaObj,
				success: function (result) {
					console.log(result);
				},
				error: function (result) {
				}
			});
        	$('#datable-grilla40').remove();
            
            $('#lblTituloPopGenerico').text('Registro de Solicitud IPRESS');
            if(ValidarFormularios()){
            	$('#lblConenidoPopGenerico').text('Se ha registrado la información de Datos Generales de la IPRESS. Puede continuar con el Registro de información de los Módulos.');
            }else{
            	$('#lblConenidoPopGenerico').text('Se ha registrado la información de Datos Generales de la IPRESS.');
            }
            /*$('#popGenericoRegistro').modal({
                backdrop: 'static',
                keyboard: false
            }).one('click', '[data-value]', function (e) {
                if ($(this).data('value') === '1') {

                } else {
                    return;
                }
            });*/
            $('#idSolicitudIPRESS').val(result);
            console.debug(result);
			
			$('#li-section-registro-individual').addClass('disabled').addClass('disabledTab');
            
            $.ajax({
                url: "solicitud.htm?action=selectUPDCalculoRRHH&idSolicitud="+$('#idSolicitud').val(),
                dataType: "json",
                success: function (result) {
                    console.log(result);
                    endCargando();
                    $('#popGenericoRegistro').modal({
                        backdrop: 'static',
                        keyboard: false
                    }).one('click', '[data-value]', function (e) {
                        if ($(this).data('value') === '1') {

                        } else {
                            return;
                        }
                    });
                },
                error: function (result) {
                }
            });            
        },
        error: function (result) {

        }
    });
}

// agregado por cmic

function GuardarIpressRequisito() {
   
  //VALIDACION DE CANTIDAD DE REQUISITOS
    objX = RetornaObjTabla('datable-grilla40');
    listaReqs = [];
    reqCompleto = false;
    objX.forEach(function (i, n) {
        console.debug(n);
        if (i.length > 0) {
            var objetoReq = {};
            objetoReq.upss = upssActivo;
            i.forEach(function (j, nu) {
                if ($(j).find('input').length > 0) {
                    switch (nu) {
                        case 2:
                            objetoReq.si = $(j).find('input')[0].checked;
                            break;
                        case 3:
                            objetoReq.no = $(j).find('input')[0].checked;
                            break;
                        case 4:
                            var celda = $(j).find('input[type=number]');
                            //objetoReq.cantidad = ($(j).find('input[type=number]').length > 0 ? $(j).find('input[type=number]').val(): '');
                            if(celda.length!==0 && $(j).find('input[type=number]').attr('disabled')===undefined){
                            	objetoReq.cantidad = ($(celda).val().length > 0 && $(celda).val()!=='0' ? $(celda).val() : '0');
                            	//objetoReq.cantidad = $(celda).val();
                            }else{
                            	objetoReq.cantidad = '';
                            }
                            

                            if ($(j).find('input[type=hidden]').length > 0) {
                                objetoReq.idReq = $(j).find('input[type=hidden]').val();
                            }
                            break;
                    }
                }
            });
            listaReqs.push(objetoReq);
        }
        if (n > 0) {
            // listaReqs.push(objetoReq);
        }
    });

     sumador = 0;
     sumadorCantidad = 0;
    listaReqs.forEach(function (item, n) {
        if (item.si || item.no) {
            sumador++;
        }
		if(item.cantidad==='0'){
			sumadorCantidad++;
		}
    });

    if(sumadorCantidad>0){
    	LanzarPopGenerico("Informativo", "Es necesario ingresar cantidad en los requisitos seleccionados.");
    	return false;
    }
    //VALIDACION DE CANTIDAD DE REQUISITOS
      
    $('#popConfirmaGuardarSolicitud').modal({
        backdrop: 'static',
        keyboard: false
    }).one('click', '[data-value]', function (e) {
        if ($(this).data('value') === 1) {
            
			ConfirmaGuardarIpressRequisito();
			
        } else {
            return;
        }
    });
}

function ConfirmaGuardarIpressRequisito() {
	if (objX.length - 1 === sumador) {
        reqCompleto = true;
        console.debug('requisitos completos');
        $('#' + idUPPSIcon).removeClass("btn-gris").removeClass("btn-warning").addClass("btn-success");
    } else {
        reqCompleto = false;
        if (objX.length - 1 !== sumador && sumador > 0) {
            $('#' + idUPPSIcon).removeClass("btn-gris").removeClass("btn-success").addClass("btn-warning");
        } else {
            $('#' + idUPPSIcon).removeClass("btn-warning").removeClass("btn-success").addClass("btn-gris");
        }
    }

    var newReqs = [];
    listaReqs.forEach(function (item, n) {
        item.idmodulo = moduloActivo;
        if (reqCompleto) {
            item.flagCompleto = '1';
        } else {
            item.flagCompleto = '0';
        }
        newReqs.push(item);
    });
    listaReqs = newReqs;
    
    //-----------------------------------    
    beginCargando();
    $.ajax({
        url: "solicitud.htm?action=insertDatosGeneralesSolRequisito",
        dataType: "json",
        type: "POST",
        data:     'idSolicitud=' + $('#idSolicitud').val() + 
				  '&idSolicitudIPRESS=' + $('#idSolicitudIPRESS').val() +
                  '&arregloReq=' + JSON.stringify(listaReqs)
        ,
        success: function (result) {
			
			endCargando();
			
			$('#datable-grilla40').remove();
            
            $('#lblTituloPopGenerico').text('Registro de Requisito');
            
            $('#lblConenidoPopGenerico').text('Se ha registrado la información de los Requisitos. Puede continuar con el Registro de información de los Módulos.');
            
        },
        error: function (result) {

        }
    });
}

// fin agregado por cmic

function RetornaObjTabla(idTabla) {
    var listaFilas = $('#' + idTabla + ' tr');
    var listaColumnas;
    var celda;
    var objlistaFilas = [];
    var objlistaColumnas = [];
    for (var i = 0; i < listaFilas.length; i++) {
        listaColumnas = $(listaFilas[i]).find('td');
        objlistaColumnas = [];
        for (var j = 0; j < listaColumnas.length; j++) {
            celda = $(listaColumnas[j]);
            objlistaColumnas.push(celda);
        }
        objlistaFilas.push(objlistaColumnas);
    }
    return objlistaFilas;
}

function MostrarTipDoc() {
    $.ajax({
        url: "solicitud.htm?action=selectTipDoc",
        dataType: "json",
        data: $('#frmDatosPropietario').serialize(),
        success: function (result) {
            var cboDoc = $('#cboDocumento');
            var cboDocDP = $('#cbdoTipoDocRA');
            var cboDocRRLL = $('#cboTipoDocRRLL');
            var cboDocRAS = $('#cboDocIdenRAS');
            var cboDocExcel = $('#cboTipoDocExcel');
            jQuery.each(result, function (a, b) {
                cboDoc.append($('<option ></option>').val(b.CO_CODVALOR).html(b.DE_VALOR));
                cboDocDP.append($('<option ></option>').val(b.CO_CODVALOR).html(b.DE_VALOR));
                cboDocRRLL.append($('<option ></option>').val(b.CO_CODVALOR).html(b.DE_VALOR));
                cboDocRAS.append($('<option ></option>').val(b.CO_CODVALOR).html(b.DE_VALOR));
                cboDocExcel.append($('<option ></option>').val(b.CO_CODVALOR).html(b.DE_VALOR));
            });
        },
        error: function (result) {

        }
    });

}

function ValidaCasada() {
    $('#txtACasada').val('');       
    if ($('#cboSexo').val() === '1') {        
		$('#txtACasada').attr('disabled', true);
    } else {
		if ( $('#cboDocumento').val() === '1' ){
			$('#txtACasada').attr('disabled', true);
		}else if ($('#cboSexo').val() === '2') { 
			$('#txtACasada').attr('disabled', false);
		}        
    }    
    ValidarDNI();
}

function ValidaCasada1() {
    $('#txtACasadaRA').val('');    
    if ($('#cboSexoRA').val() === "1") {
        $('#txtACasadaRA').attr('disabled', true);
    } else {
		if ($('#cbdoTipoDocRA').val() === '1'){
			$('#txtACasadaRA').attr('disabled', true);
		}else if ($('#cboSexoRA').val() === "2") {
			$('#txtACasadaRA').attr('disabled', false);
		}        
    }
    ValidarDNI1();
}

function ValidaCasadaRRLL() {
	$('#txtACasadaRRLL').val('');
    if ($('#cboSexoRRLL').val() === "1") {
        $('#txtACasadaRRLL').attr('disabled', true);        
    } else {
		if ($('#cboTipoDocRRLL').val() === '1'){
			$('#txtACasadaRRLL').attr('disabled', true);
		}else if ($('#cboSexoRRLL').val() === "2") {
			$('#txtACasadaRRLL').attr('disabled', false);
		}        
    }
    ValidarDNI2();
}

function ValidaCasadaRRHH() { 
	$('#txtACasadaExcel').val('');   
    if ($('#CboSexoExcel').val() === "1") {
        $('#txtACasadaExcel').attr('disabled', true);       
    } else {
		if ($('#cboTipoDocExcel').val() === '1'){
			$('#txtACasadaExcel').attr('disabled', true);
		}else if ($('#CboSexoExcel').val() === "2") {
			$('#txtACasadaExcel').attr('disabled', false);
		}        
    }
    ValidarDNI4();
}

function ValidaCasadaRA() {
	$('#txtACasadaRAS').val('');	
	if ($('#cboSexoRAS').val() === '1') {
		$('#txtACasadaRAS').attr('disabled', true);		
	} else {
		if ($('#cboDocIdenRAS').val() === '1'){
			$('#txtACasadaRAS').attr('disabled', true);
		}else if ($('#cboSexoRAS').val() === '2') {
			$('#txtACasadaRAS').attr('disabled', false);
		}
	}
    ValidarDNI3();
}

function MostrarAutoridadSanit() {
    $.ajax({
        url: "solicitud.htm?action=selectAutSan",
        dataType: "json",
        success: function (result) {
            var cboDoc = $('#cboIPAutoridadSanit');
            jQuery.each(result, function (a, b) {
                cboDoc.append($('<option ></option>').val(b.CO_IDAUTORIDADSANIT).html(b.DE_NOMBRE));
            });
        },
        error: function (result) {
        }
    });
}

function MostrarProfesion() {
    $.ajax({
        url: "solicitud.htm?action=selectProfesion",
        dataType: "json",
        success: function (result) {
            var cboDoc = $('#cboProfesionRRLL');
            jQuery.each(result, function (a, b) {
                cboDoc.append($('<option ></option>').val(b.CO_IDPROFESION).html(b.DE_DESCRIPCION));
            });
        },
        error: function (result) {
        }
    });
}

function MostrarTipoEstablecimiento() {
    $.ajax({
        url: "solicitud.htm?action=selectTipoClas",
        dataType: "json",
        success: function (result) {
            var cboDoc = $('#cboTipoEstablecimiento');
            jQuery.each(result, function (a, b) {
                cboDoc.append($('<option ></option>').val(b.CO_CODVALOR).html(b.DE_VALOR));
            });
        },
        error: function (result) {
        }
    });
}

function MostrarTipoContrato() {
    $.ajax({
        url: "solicitud.htm?action=selectTipoContrato",
        dataType: "json",
        success: function (result) {
            var cboDoc = $('#txtTCTerciarizacion');
            jQuery.each(result, function (a, b) {
                cboDoc.append($('<option ></option>').val(b.CO_CODVALOR).html(b.DE_VALOR));

            });
        },
        error: function (result) {
        }
    });
}
//antonio
var objListaEstablecimientos = [];
function MostrarEstablecimiento(tipo, idSolicitud) {
    arrClasEst = [];
    if (tipo !== '') {
		
		var vurl = '';
		
		if ($('#estadoActualizar').val() == 1 ){
			vurl = "ipress.htm?action=selectClasEst&tipoEst=" + tipo + "&idSolici=" + co_idipress;
		}else{
			vurl = "solicitud.htm?action=selectClasEst&tipoEst=" + tipo + "&idSolici=" + idSolicitud;
		}
		
        $.ajax({
            url: vurl,
            dataType: "json",
            success: function (result) {
                objListaEstablecimientos = result;
                dsGdClasificaEstab.read();
                console.log('ClassTemo '+ClassTemo);
                ClassTemo = [];
                result.forEach(function(item, numero) {
                    item.FLAG          =item.FLAG.toString();
                    if(item.FLAG === '1'){
                        console.log('ClassTemo x '+ClassTemo);
                        ClassTemo.push(item.CO_IDCLASIF);
			// [BIT] CMIC 06102015
						arrClasEst.push(item.CO_IDCLASIF);
                    }
                });
            },
            error: function (result) {
            }
        });
    }
}

function ObtenerClasificaEstab() {
    return objListaEstablecimientos;
}

function ValidarPais() {
    $('#cboPais').val('');
    $('#txtDocumento').val('');

    setTimeout(function () {
        $('#cboPais').valid();
        $('#txtAPaterno').valid();
        $('#txtNombres').valid();
    }, 2000);

    if ((document.getElementById('cboDocumento').options[document.getElementById('cboDocumento').selectedIndex].text).toUpperCase() === "DNI") { // PERU
        $('#cboPais').val('174');
        $('#cboPais').attr('disabled', true);
        $('#txtDocumento').attr('maxlength', BuscaP('LONG_DNI'));
    } else {
        $('#cboPais').attr('disabled', false);
    }

    switch ($('#cboDocumento').val()) {
        case '2':
            $('#txtDocumento').attr('maxlength', BuscaP('LONG_CEX'));
            break;
        case '3':
            $('#txtDocumento').attr('maxlength', 15);
            break;
        case '4':
            $('#txtDocumento').attr('maxlength', BuscaP('LONG_PAS'));
            break;
    }
    ValidarDNI();
}

function ValidarPais1() {
    $('#cboPaisRRLL').val('');
    $('#txtNroDocRRLL').val('');

    setTimeout(function () {
        $('#cboPaisRRLL').valid();
    }, 2000);

    if ((document.getElementById('cboTipoDocRRLL').options[document.getElementById('cboTipoDocRRLL').selectedIndex].text).toUpperCase() === "DNI") { // PERU
        $('#cboPaisRRLL').val('174');
        $('#cboPaisRRLL').attr('disabled', true);
        $('#txtNroDocRRLL').attr('maxlength', BuscaP('LONG_DNI'));
    } else {
        $('#cboPaisRRLL').attr('disabled', false);
    }

    switch ($('#cboTipoDocRRLL').val()) {
        case '2':
            $('#txtNroDocRRLL').attr('maxlength', BuscaP('LONG_CEX'));
            break;
        case '3':
            $('#txtNroDocRRLL').attr('maxlength', 15);
            break;
        case '4':
            $('#txtNroDocRRLL').attr('maxlength', BuscaP('LONG_PAS'));
            break;
    }
    ValidarDNI2();
}

function ValidarPais2() {
    $('#cboPaisRA').val('');
    $('#txtNroDocRA').val('');

    setTimeout(function () {
        $('#cboPaisRA').valid();
    }, 2000);

    if ((document.getElementById('cbdoTipoDocRA').options[document.getElementById('cbdoTipoDocRA').selectedIndex].text).toUpperCase() === "DNI") { // PERU
        $('#cboPaisRA').val('174');
        $('#cboPaisRA').attr('disabled', true);
        $('#txtNroDocRA').attr('maxlength', BuscaP('LONG_DNI'));
    } else {
        $('#cboPaisRA').attr('disabled', false);
    }

    switch ($('#cbdoTipoDocRA').val()) {
        case '2':
            $('#txtNroDocRA').attr('maxlength', BuscaP('LONG_CEX'));
            break;
        case '3':
            $('#txtNroDocRA').attr('maxlength', 15);
            break;
        case '4':
            $('#txtNroDocRA').attr('maxlength', BuscaP('LONG_PAS'));
            break;
    }
    ValidarDNI1();
}

function ValidarPais3() {
    $('#cboPaisRAS').val('');
    $('#txtNroDocRAS').val('');

    setTimeout(function () {
        $('#cboPaisRAS').valid();
    }, 2000);

    if ((document.getElementById('cboDocIdenRAS').options[document.getElementById('cboDocIdenRAS').selectedIndex].text).toUpperCase() === "DNI") { // PERU
        $('#cboPaisRAS').val('174');
        $('#cboPaisRAS').attr('disabled', true);
        $('#txtNroDocRAS').attr('maxlength', BuscaP('LONG_DNI'));
    } else {
        $('#cboPaisRAS').attr('disabled', false);
    }

    switch ($('#cboDocIdenRAS').val()) {
        case '2':
            $('#txtNroDocRAS').attr('maxlength', BuscaP('LONG_CEX'));
            break;
        case '3':
            $('#txtNroDocRAS').attr('maxlength', 15);
            break;
        case '4':
            $('#txtNroDocRAS').attr('maxlength', BuscaP('LONG_PAS'));
            break;
    }
    ValidarDNI3();
}

function ValidarPais4() {
    $('#cboPaisExcel').val('');
    $('#txtNroDocExcel').val('');

    setTimeout(function () {
        $('#cboPaisExcel').valid();
    }, 2000);

    if ((document.getElementById('cboTipoDocExcel').options[document.getElementById('cboTipoDocExcel').selectedIndex].text).toUpperCase() === "DNI") { // PERU
        $('#cboPaisExcel').val('174');
        $('#cboPaisExcel').attr('disabled', true);
        $('#txtNroDocExcel').attr('maxlength', BuscaP('LONG_DNI'));
    } else {
        $('#cboPaisExcel').attr('disabled', false);
    }

    switch ($('#cboTipoDocExcel').val()) {
        case '2':
            $('#txtNroDocExcel').attr('maxlength', BuscaP('LONG_CEX'));
            break;
        case '3':
            $('#txtNroDocExcel').attr('maxlength', 15);
            break;
        case '4':
            $('#txtNroDocExcel').attr('maxlength', BuscaP('LONG_PAS'));
            break;
    }
    ValidarDNI4();
}

function MostrarAutUbiego(ubigeo) {
    $('#cboAutSanitaria').empty();
    $.ajax({
        url: "solicitud.htm?action=selectAutSanUbigeo&ubigeo=" + ubigeo,
        dataType: "json",
        success: function (result) {
            var cboDoc = $('#cboAutSanitaria');
            jQuery.each(result, function (a, b) {
                cboDoc.append($('<option selected></option>').val(b.CO_IDAUTORIDADSANIT).html(b.DE_NOMBRE));
            });
        },
        error: function (result) {
        }
    });
}

function MostrarInstitucion() {
    // $('#cboAutSanitaria').empty();
    //Agregado por dlarico
    var codInst2 = 0;
    $('#cboInstitucionEst').empty();
    var tipoPersona = 0;
    if ($("#datos-generales-radio-persona-natural").is(':checked')) {
        tipoPersona = 1;
    }
    if ($("#datos-generales-radio-persona-juridica-publica").is(':checked')) {
        tipoPersona = 2;
    }
    if ($("#datos-generales-radio-persona-juridica-privada").is(':checked')) {
        tipoPersona = 3;
    }
    if (tipoPersona !== 0) {
        $.ajax({
            //url: "solicitud.htm?action=selectIntitucion",
            url: "solicitud.htm?action=selectIntitucionPorPorsona&tipoPersona=" + tipoPersona, //Agregado por dlarico
            dataType: "json",
			async : false,
            success: function (result) {
                var cboDoc = $('#cboInstitucionEst');
                //----dlarico
                if (tipoPersona === 2) { cboDoc.append($('<option ></option>').val('').html('Seleccione')); }
                //----
                jQuery.each(result, function (a, b) {
                    cboDoc.append($('<option ></option>').val(b.CO_IDINSTITUCION).html(b.DE_DESCRIPCION));
                });
            },
            error: function (result) {
            }
        });
        //Adicionado por dlarico
        if (tipoPersona !== 2) {
            MostrarUniEjecutora(codInst2);
        }
        //--------------------
    }
}

var flagRed = false;
function MostrarRed(idInstitucion) {
    //Cambios Agregado por dlarico
    var idAutoridad = $('#cboAutSanitaria').val();
    console.log('Inicio MostrarRed, cboAutSanitaria ='+idAutoridad+", idInstitucion ="+idInstitucion);
    //limpiar Combos
    $('#cboRedEst, #cboMicroRedEst, #cboUniEjeEst, #cboEstClasEst').empty();
	$('#cboRedEst').append($('<option ></option>').val('').html('NO PERTENECE A NINGUNA RED'));//Agregado por cmic
    if(idInstitucion === "10" || idInstitucion === "3" || idInstitucion === "4" ||
       idInstitucion === "5" || idInstitucion === "6" || idInstitucion === "12" ||
       idInstitucion === "13"){//caso SANIDAD EJERCITO, FUERZA AEREA, PNP, MARINA, APP, INPE y PRIVADO     
        $('#divRed, #divMicroRed, #divUE, #divEstClasEst').css('display', 'none');
    }else{
       if (idInstitucion === "2") {//caso ESSALUD
            $('#divRed').css('display', 'block');
            $('#divMicroRed, #divUE, #divEstClasEst').css('display', 'none');
        } else if (idInstitucion === "1" || idInstitucion === "7") {//caso IGSS (MINSA) ó caso GOBIERNO REGIONAL
            $('#divRed, #divMicroRed, #divUE, #divEstClasEst').css('display', 'block');
        } else if (idInstitucion === "8" || idInstitucion === "9") {//caso MUNICIPALIDAD PROVINCIAL ó MUNICIPALIDAD DISTRITAL
            $('#divUE, #divEstClasEst').css('display', 'block');
            $('#divRed, #divMicroRed').css('display', 'none');
            MostrarUniEjecutora();
        }
        //Cargar Combo mostrar Red 
        //--------------		
        $.ajax({
            url: "solicitud.htm?action=selectRed" + "&as=" +idAutoridad,
            dataType: "json",
			async : false,
            success: function (result) {
                var cboDoc = $('#cboRedEst');                
                jQuery.each(result, function (a, b) {
                    cboDoc.append($('<option ></option>').val(b.CO_IDRED).html(b.DE_NOMBRE));
                });
                flagRed = true;
            },
            error: function (result) {
            }
        });
        //--------------
    }
    console.log('Fin MostrarRed');
}

function MostrarMicroRed(red) {
    //Modificacion esrealizadas por dlarico
    var idAutoridad = $('#cboAutSanitaria').val();
    console.log('Inicio MostrarMicroRed, cboAutSanitaria ='+idAutoridad);
    //$.when({flagRed:true}).done(function(){
	$('#cboMicroRedEst').empty();
	$('#cboMicroRedEst').append($('<option ></option>').val('').html('NO PERTENECE A NINGUNA MICRORED'));//Agregado por cmic
    if ($.trim(red) !== null && $.trim(red) !== "" && red !== undefined) {
        $.ajax({
            url: "solicitud.htm?action=selectMicroRed&cboRedEst=" + red + "&as=" + idAutoridad,
            dataType: "json",
			async : false,
            success: function (result) {                
				var cboDoc = $('#cboMicroRedEst');				                
                jQuery.each(result, function (a, b) {
                    cboDoc.append($('<option ></option>').val(b.CO_IDMICRORED).html(b.DE_DESCRIPCION));
                });				
				//$('#cboRedEst').val(cboRedEst);				
            },
            error: function (result) {
            }
        });
    }
    //});
}

function LimpiarCombosAutoridadSanitaria() {
    // modificado por dlarico
    $('#cboRedEst,#cboMicroRedEst,#cboUniEjeEst,#cboEstClasEst').val('');
}

var flagUniEje = false;
function MostrarUniEjecutora() {
    // modificado por dlarico
    var idInstitucion = $('#cboInstitucionEst').val();
    console.log('Inicio MostrarUniEjecutora, idInstitucion ='+idInstitucion);    
    /*
    if (document.getElementById('cboInstitucionEst').options[document.getElementById('cboInstitucionEst').selectedIndex].text !== 'MINSA'
            && document.getElementById('cboInstitucionEst').options[document.getElementById('cboInstitucionEst').selectedIndex].text !== 'ESSALUD'
            && document.getElementById('cboInstitucionEst').options[document.getElementById('cboInstitucionEst').selectedIndex].text !== 'GOBIERNO REGIONAL'
            ) {
        LimpiarCombosAutoridadSanitaria();
        document.getElementById('clasificacionEntidad').style.display = 'none';
        return;
    } else {
        document.getElementById('clasificacionEntidad').style.display = 'block';
    }*/

    $('#cboUniEjeEst').empty();
    $.ajax({
        url: "solicitud.htm?action=selectUnEjecutora&cboInstitucionEst="+idInstitucion+"&as="+$('#cboAutSanitaria').val(),
        dataType: "json",
		async : false,
        success: function (result) {
            var cboDoc = $('#cboUniEjeEst');
            cboDoc.append($('<option ></option>').val('').html('Seleccione'));//Agregado por dlarico
            jQuery.each(result, function (a, b) {
                cboDoc.append($('<option ></option>').val(b.CO_IDUNIDADEJE).html(b.DE_DESCRIPCION));
            });
            flagUniEje = true;
            console.log('idInstitucion exito');
        },
        error: function (result) {
            console.log('eror al MostrarUniEjecutora');
        }
    });
    console.log('Fin MostrarUniEjecutora');
}

function MostrarEstabClas() {
    var idAutoridad = $('#cboAutSanitaria').val();
    console.log('Inicio MostrarEstabClas');
	$('#cboEstClasEst').append($('<option ></option>').val('').html('ESTABLECIMIENTO NO CLASS'));//Agregado por dlarico
    $.ajax({
        url: "solicitud.htm?action=selectEstClas&as="+idAutoridad,
        dataType: "json",
		async : false,
        success: function (result) {
            var cboDoc = $('#cboEstClasEst');            
            jQuery.each(result, function (a, b) {
                cboDoc.append($('<option ></option>').val(b.CO_IDCLAS).html(b.DE_DESCRIPCION));
            });
            console.log('idEstablecimientoClaseEst exito');
        },
        error: function (result) {
            console.log('eror al MostrarEstabClas');
        }
    });
    console.log('Fin MostrarEstabClas');
}

function MostrarGrupoEtareo(ubigeo) {
    $.ajax({
        url: "solicitud.htm?action=selectGrupoEtareo",
        dataType: "json",
        success: function (result) {
            var cboDoc = $('#cboGrupoEtarioDA');
            jQuery.each(result, function (a, b) {
                cboDoc.append($('<option ></option>').val(b.CO_CODVALOR).html(b.DE_VALOR));
            });
        },
        error: function (result) {
            console.log('eror al MostrarGrupoEtareo');
        }
    });
}

function MostrarTipoAtencion(ubigeo) {
    $.ajax({
        url: "solicitud.htm?action=selectTipoAtencion",
        dataType: "json",
        success: function (result) {
            var cboDoc = $('#cboTipoAtencionDA');
            jQuery.each(result, function (a, b) {
                cboDoc.append($('<option ></option>').val(b.CO_CODVALOR).html(b.DE_VALOR));
            });
        },
        error: function (result) {
            console.log('eror al MostrarTipoAtencion');
        }
    });
}



var arrClasEst = [];
function SelClasificacion(item, valor) {
    var valTipoEst = $('#cboTipoEstablecimiento').val();
    if (valTipoEst === "1" || valTipoEst === "2") {
        arrClasEst = [];
        if (arrClasEst.length === 0) {
            if ($(item).is(":checked")) {
                arrClasEst.push(valor);
            } else {
                arrClasEst = EliminarASimple(arrClasEst, valor);
				arrClasEst.push(valor);
            }
            $('#gdClasificacion').find("tr").find("td:first input").each(function (num, item1) {
                item1.checked = false;
            });
            item.checked = true;
			
            console.log('solo se puede seleccionar una opcion');
        }
    } else {
        if ($(item).is(":checked")) {
            arrClasEst.push(valor);
        } else {
            arrClasEst = EliminarASimple(arrClasEst, valor);
        }
    }
}

var arrUPSDAdicional = [];
function SelUPSDAdicional(item, valor, cod) {
    if ($(item).is(":checked")) {
        if (cod === 224601) {
        	//arrDiasSelec=[];
            $('#chkL').attr('checked', false);
            $('#chkM').attr('checked', false);
            $('#chkMi').attr('checked', false);
            $('#chkJ').attr('checked', false);
            $('#chkV').attr('checked', false);
            $('#chkS').attr('checked', false);
            $('#chkD').attr('checked', false);
            $('#txtHorarioAtenADODA').val('');
            $('#divHoraAdo').show();
        }
        arrUPSDAdicional.push(valor);
		
		// CMIC 11/12/2015
		var sw = false;
		var codigo = "" + cod;
		var upss = codigo.substr(0,2) + "0000";
		
		var upssItem = (SeleccionLike(UPSSDatosAdicionales, 'CO_CODUPSS', upss))[0];
		
		if (upssItem != null && upssItem != undefined){
			
			var idUPSS = upssItem.CO_IDUPSS;
			
			var itemUPSS = SeleccionLike(arrUPPSSDASeleccion, 'idUPSS', idUPSS)[0];
			
			if (itemUPSS == null || itemUPSS == undefined ){
				upssItem.TERCIARIZADA = '0';
				upssItem.RUC = '';
				upssItem.RAZONSOCIAL = '';
				upssItem.numeroContrato = '';
				upssItem.tipoContrato = '';
				upssItem.FLAG = '1';
				Eliminacion(UPSSDatosAdicionales, 'CO_CODUPSS', upss);
				UPSSDatosAdicionales.push(upssItem);
				
				var objUPSSDA={};
				objUPSSDA={
						idUPSS:idUPSS,
						check:true,
						select:false,
						TERCIARIZADA : '',
						RUC : '',
						RAZONSOCIAL : '',
						numeroContrato : '',
						tipoContrato : '',
						FLAG : '1'
				};
				arrUPPSSDASeleccion.push(objUPSSDA);
				
				dsGdUPSSDA.read(); 
			}
		}
		
		
		
		
    } else {
        if (cod === 224601) {
        	arrDiasSelec=[];
            $('#chkL').attr('checked', false);
            $('#chkM').attr('checked', false);
            $('#chkMi').attr('checked', false);
            $('#chkJ').attr('checked', false);
            $('#chkV').attr('checked', false);
            $('#chkS').attr('checked', false);
            $('#chkD').attr('checked', false);
            $('#txtHorarioAtenADODA').val('');        	
            $('#divHoraAdo').hide();
        }
        console.log('calor '+valor);
        //arrUPSDAdicional = Eliminacion(arrUPSDAdicional,'CO_IDUPS', valor);
        arrUPSDAdicional = EliminarASimple(arrUPSDAdicional, valor);		
    }
}

var arrUPSSDAdicional = [];
var arrUPPSSDASeleccion = [];
function SelUPSSDAdicional(item, valor) {
    if ($(item).is(":checked")) {
            $('#cboUPSSD' + valor).attr('disabled', false);
            arrUPSSDAdicional.push(valor);
            var objUPSSDA={};
            objUPSSDA={
                    idUPSS:valor,
                    check:true,
                    select:false,
                    TERCIARIZADA : '',
                    RUC : '',
                    RAZONSOCIAL : '',
                    numeroContrato : '',
                    tipoContrato : '',
                    FLAG : '1'
            };
            arrUPPSSDASeleccion.push(objUPSSDA);
    } else {		
            if($(item.parentElement.parentElement.parentElement).find('select').val()!==''){
                    $('#popConfirmaUPSS').modal({
                            backdrop : 'static',
                            keyboard : false
                    }).one('click', '[data-value]', function(e) {
                            if ($(this).data('value') === 1) {
                                    console.log('ups adicional');
                                    $('#cboUPSSD' + valor).attr('disabled', true);
                                    document.getElementById('cboUPSSD' + valor).selectedIndex = 0;
//					arrUPSSDAdicional = EliminarASimple(arrUPSSDAdicional, valor);
                                    console.log('aliminacion');
                                    Eliminacion(arrUPPSSDASeleccion, 'idUPSS', valor);
                                    //Eliminacion(arrUPPSSDASeleccion, 'ruc', valor);
                                    //Eliminacion(arrUPPSSDASeleccion, 'razonSocial', valor);
                                    //Eliminacion(arrUPPSSDASeleccion, 'tipoContrato', valor);
                                    var grid = $("#gdUPSSDA").data("kendoGrid");
                                    var fila=item.parentElement.parentElement.parentElement;
                                    var data = grid.dataItem(fila);
                                    data.set("RUC", '');
                                    data.set("RAZONSOCIAL", '');
                data.set("FLAG",'0');
                data.set("TERCIARIZADA",'0');
                                    // [BIT] CMIC 06102015
                                    deleteUpss(valor);

                            } else {
                                    item.checked=true;
                                    return;
                            }
                    });	
            }else{
                    arrUPSSDAdicional = EliminarASimple(arrUPSSDAdicional, valor);
                    Eliminacion(arrUPPSSDASeleccion, 'idUPSS', valor);
            }
    }
}

var arrActividadDAdicional = [];
function SelActividadDG(item, valor) {
    if ($(item).is(":checked")) {
        arrActividadDAdicional.push(valor);
    } else {
        arrActividadDAdicional = EliminarASimple(arrActividadDAdicional, valor);
    }
}

// agregado por cmic
var arrEspecialidadDAdicional = [];
function SelEspecialidadDG(item, valor) {
    if ($(item).is(":checked")) {
        arrEspecialidadDAdicional.push(valor);
    } else {
        arrEspecialidadDAdicional = EliminarASimple(arrEspecialidadDAdicional, valor);
    }
}

var arrUPPSSCompuesto = [];
var indicarUPSSTemp = 0;

var dataGrillaDAUPSS;
function SeleccionaTerciarizada(me, item) {
    var grid = $("#gdUPSSDA").data("kendoGrid");
    dataGrillaDAUPSS = grid.dataItem(me.parentElement.parentElement.parentElement);
    $('.close').hide();
    var upssItem = {};
    if (me.value === '1') {
        indicarUPSSTemp = item;
        if ($('#chkUPSS' + item).is(':checked')) {
            // ABRIR POPUB
            $('#txtRUCTerciarizacion').val('');
            $('#txtRZTerciarizacion').val('');
            $('#txtNCTerciarizacion').val('');
            $('#txtFecFinPopUPSS').val('');
            $("#txtTCTerciarizacion option[value='']").attr("selected", true);
            $("#txtTCTerciarizacion option[value='1']").attr("selected", false);
            $("#txtTCTerciarizacion option[value='2']").attr("selected", false);
            $("#txtTCTerciarizacion option[value='3']").attr("selected", false);
            $('#popUPSSTerciarizada').show();
            $('#popUPSSTerciarizada').modal({
                backdrop: 'static',
                keyboard: false
            }).one('click', '[data-value]', function (e) {
                if ($(this).data('value') === 2) {
                    //console.debug('opcion cancelar');
                    //document.getElementById('cboUPSSD' + item).value = '0';
                    /*setTimeout(function(){ 
                    	document.getElementById('cboUPSSD' + item).value = '0';
                    }, 1000);*/
                    dataGrillaDAUPSS.set("TERCIARIZADA", '1');
                }
            });

        } else {
            console.debug('seleccione la casilla');
        }
    } else {
    	
        if (me.value === '2') {
            var itemUPSS = SeleccionLike(arrUPPSSDASeleccion, 'idUPSS', item)[0];
            //itemUPSS.check=true;
            itemUPSS.select = true;
            itemUPSS.TERCIARIZADA = '2';
            itemUPSS.RUC = '';
            itemUPSS.RAZONSOCIAL = '';
            itemUPSS.numeroContrato = '';
            itemUPSS.tipoContrato = '';
            itemUPSS.FLAG = '1';
            Eliminacion(arrUPPSSDASeleccion, 'idUPSS', item);
            arrUPPSSDASeleccion.push(itemUPSS);

            var upssItem = (SeleccionLike(UPSSDatosAdicionales, 'CO_IDUPSS', item))[0];
            upssItem.TERCIARIZADA = '2';
            upssItem.RUC = '';
            upssItem.RAZONSOCIAL = '';
            upssItem.numeroContrato = '';
            upssItem.tipoContrato = '';
            upssItem.FLAG = '1';
            Eliminacion(UPSSDatosAdicionales, 'CO_IDUPSS', item);
            indicarUPSSTemp = 0;
            UPSSDatosAdicionales.push(upssItem);
            
            dataGrillaDAUPSS.set("RUC", '');
            dataGrillaDAUPSS.set("RAZONSOCIAL", '');
            dataGrillaDAUPSS.set("TERCIARIZADA", '2');
            //document.getElementById('cboUPSSD' + item).value = '2';
        } else {
            var itemUPSS = SeleccionLike(arrUPPSSDASeleccion, 'idUPSS', item)[0];
            itemUPSS.select = false;
            itemUPSS.TERCIARIZADA = '0';
            itemUPSS.RUC = '';
            itemUPSS.RAZONSOCIAL = '';
            itemUPSS.numeroContrato = '';
            itemUPSS.tipoContrato = '';
            itemUPSS.FLAG = '1';
            Eliminacion(arrUPPSSDASeleccion, 'idUPSS', item);
            arrUPPSSDASeleccion.push(itemUPSS);

            var upssItem = (SeleccionLike(UPSSDatosAdicionales, 'CO_IDUPSS', item))[0];
            upssItem.TERCIARIZADA = '0';
            upssItem.RUC = '';
            upssItem.RAZONSOCIAL = '';
            upssItem.numeroContrato = '';
            upssItem.tipoContrato = '';
            upssItem.FLAG = '1';
            Eliminacion(UPSSDatosAdicionales, 'CO_IDUPSS', item);
            indicarUPSSTemp = 0;
            UPSSDatosAdicionales.push(upssItem);
            
            dataGrillaDAUPSS.set("RUC", '');
            dataGrillaDAUPSS.set("RAZONSOCIAL", '');
            dataGrillaDAUPSS.set("TERCIARIZADA", '0');
            //document.getElementById('cboUPSSD' + item).value = '0';
        }
    }

}
// TODO RESTAURAR PARA EL REGISTRO DE LA IPRESS

$('#btnGuardarUPSSTempGrilla').click(function() {
    if ($('#frmPopTerciarizacion').valid()) {
        // AGREGANDO ITEM UPSS SIMPLE
        var upssItem = (SeleccionLike(arrUPPSSDASeleccion,'idUPSS', indicarUPSSTemp))[0];
        //upssItem.check=true;
        upssItem.select 		=	true;
        upssItem.TERCIARIZADA 	= 	'1';
        upssItem.RUC 			= 	$('#txtRUCTerciarizacion').val();
        upssItem.RAZONSOCIAL 	= 	$('#txtRZTerciarizacion').val();
        upssItem.numeroContrato = 	$('#txtNCTerciarizacion').val();
        upssItem.tipoContrato 	= 	$('#txtTCTerciarizacion').val();
        upssItem.FLAG 			= 	'1';
        upssItem.FE_FECHAREG	=	$('#txtFecFinPopUPSS').val();
        Eliminacion(arrUPPSSDASeleccion, 'idUPSS', upssItem.idUPSS);
        arrUPPSSDASeleccion.push(upssItem);
        //NUEVO BLOQUE
        var upssItem 			= 	(SeleccionLike(UPSSDatosAdicionales,'CO_IDUPSS', indicarUPSSTemp))[0];
        upssItem.TERCIARIZADA 	= 	'1';
        upssItem.RUC 			= 	$('#txtRUCTerciarizacion').val();
        upssItem.RAZONSOCIAL 	= 	$('#txtRZTerciarizacion').val();
        upssItem.numeroContrato = 	$('#txtNCTerciarizacion').val();
        upssItem.tipoContrato 	= 	$('#txtTCTerciarizacion').val();
        upssItem.FLAG 			= 	'1';
        upssItem.FE_FECHAREG	=	$('#txtFecFinPopUPSS').val();

        dataGrillaDAUPSS.set("RUC", $('#txtRUCTerciarizacion').val());
        dataGrillaDAUPSS.set("RAZONSOCIAL", $('#txtRZTerciarizacion').val());
        dataGrillaDAUPSS.set("TERCIARIZADA",'1');
        //Eliminacion(UPSSDatosAdicionales, 'CO_IDUPSS', indicarUPSSTemp)
        indicarUPSSTemp = 0;
        UPSSDatosAdicionales.push(upssItem);
        //dsGdUPSSDA.read();
        $('#popUPSSTerciarizada').modal('hide');
        document.getElementById('frmPopTerciarizacion').reset();
    }
});

// ------------------------------------------------------DATOS GENERALES
var lP;
function CargarParametros() {
    try {
        $.getJSON('solicitud.htm?action=selectListaParametros', function (json) {
            lP = json;
        });
    } catch (e) {
        console.log(e);
    }
}

function BuscaP(clave) {
    var flag = false;
    var valor = "";
    lP.forEach(function (item, num) {
        if (item.CO_CODIGO === clave && flag === false) {
            console.log(item.DE_VALOR);
            flag = true;
            valor = item.DE_VALOR;
        }
    });
    return valor;
}


function Eliminacion(arr, campo, valor) {
    arr.forEach(function (element, index, array) {
        if (element[campo] === valor) {
            arr.splice(index, 1);
        }
    });
    return arr;
}

function Ordenamiento(arr, campo, orden) {
    switch (orden) {
        case "ASC":
            arr = arr.sort(function (a, b) {
                if (typeof (a[campo]) === 'number' || typeof (b[campo]) === 'number') {
                    return a[campo] > b[campo];
                } else {
                    return a[campo].localeCompare(b[campo]);
                }
            });
            break;
        case "DSC":
            if (typeof (a[campo]) === 'number' || typeof (b[campo]) === 'number') {
                return a[campo] < b[campo];
            } else {
                return b[campo].localeCompare(a[campo]);
            }
            break;
        default:
            if (typeof (a[campo]) === 'number' && typeof (b[campo]) === 'number') {
                return a[campo] > b[campo];
            } else {
                return a[campo].localeCompare(b[campo]);
            }
    }
    return arr;
}

function NuevoRRHH() {
    flagBotonRegistro=true;
    $('#txtBuscarColProfRRHHH').val('');
    $('#txtBuscarEspRRHH').val('');
    $('#txtBuscarCompRRHH').val('');
    $('#txtBuscarCapRRHH').val('');
    $('#txtBuscarEntRRHH').val('');
    $('#txtBuscarUPSSRRHH').val('');

    FiltroGrilla('DE_DESCRIPCION', '', 'gdColegioProfesional');
    FiltroGrilla('DE_DESCRIPCION', '', 'gdCompetencia');
    FiltroGrilla('DE_DESCRIPCION', '', 'gdCompetenciaCapacitacion');
    FiltroGrilla('DE_DESCRIPCION', '', 'gdCompetenciaEntrenamiento');

    arrUPSS = [];
    arrUPSSDet = [];
    objUps;
    arrColegio = [];
    arrColegioDet = [];
    objColegio;
    arrEspecialidad = [];
    arrEspecialidadDet = [];
    arrCompetencia = [];

    //GUARDAR COL PROF
    arrColegio = [];
    objtColProf.forEach(function (item, num) {
        item.FLAG = 0;
    });
    //objtColProf=[];
    dsGdColegioProfesional.read();
    //ESPECIALIDAD
    arrEspecialidad = [];
    if (objtEspec !== undefined && objtEspec.length !== 0) {
        objtEspec = [];
        dsGdEspecialidad.read();
    }
	CargarEspecialidadColegio([]);
	
    //COMPETENCIA
    arrCompetencia = [];
    objtCompetencia.forEach(function (item, num) {
        item.FLAG = 0;
    });
    dsGdCompetencia.read();

    //CAPACITACION
    objtCapacitacion.forEach(function (item, num) {
        item.FLAG = 0;
    });
    dsGdCapacitacion.read();

    //ENTRENAMIENTO 
    objtEntrenamiento.forEach(function (item, num) {
        item.FLAG = 0;
    });
    dsGdEntrenamiento.read();

    //UPSS 
    if (objtUPSS !== undefined) {
        objtUPSS.forEach(function (item, num) {
            item.FLAG = 0;
        });
        dsGdUPSS.read();
    }
    CargaObjUPSS();

    setTimeout(function () {
        FiltroGrilla('CO_CODUPSS', '', 'gdUPSS');
        FiltroGrilla('DE_NOMBRE', '', 'gdUPSS');
    }, 2000);
    $('#frmDatosRRHHIndividual').resetForm();
    //$('#li-section-registro-individual').removeClass('disabled').removeClass('disabledTab');
    $('#btnModificarRRHH').val('REGISTRAR');
	$('#li-section-registro-individual').addClass('disabled').addClass('disabledTab');
    $('#li-section-registro-individual a[href="#section-registro-individual"]').tab('show');	
    //RESETEANDO DETALLES DE GRILLAS
    arrColegioDet = [];
    arrEspecialidadDet = [];
    arrUPSSDet = [];
    arrDetCompetencia = [];
    arrDetCapacitacion = [];
    arrDetEntrenamiento = [];

}

function CancelarRRHH() {
    $('#frmDatosRRHHIndividual').resetForm();
    $('#li-section-registro-individual').addClass('disabled').addClass('disabledTab');
    $('#li-section-lista-recursos-humano a[href="#section-lista-recursos-humano"]').tab('show');
	$('#li-section-registro-individual').addClass('disabled').addClass('disabledTab');
}

function RecuperarAdjuntos() {
    dsGdSolicitudes.read();
}

function CargarArchivo(nameFile, link) {
    var data = new FormData();
    var files = $("#" + nameFile).get(0).files;
    if (files.length > 0) {
        if (files[0].size > 10000000) {
            LanzarPopGenerico("Mensaje", "El archivo supera los 10MB,y no puede ser adjuntado");
            console.log('tamanio exede el permitido!!');
            $('#' + nameFile).val('');
        } else {
            $.each(files, function (key, value) {
                data.append("fil_adjunto_solicitud", files[key]);
            });
			
			data.append("txt_hi_proceso", ((idProceso == null || idProceso == '0') ? 1 : idProceso));
			
            var ajaxRequest = $.ajax({
                type: "POST",
                url: "solicitud.htm?action=adjuntar",
                contentType: false,
                processData: false,
                data: data
            });
            ajaxRequest.done(function (xhr, textStatus) {
                var obj = JSON.parse(xhr);
                
                $('#' + link).html('<div class="text-center"><input id="gen-' + obj.dataJson.fil_adjunto_solicitud_fileNameGEN + '" type="hidden" value="' + obj.dataJson.fil_adjunto_solicitud_fileNameGEN + '" ><input type="hidden" id="ori-' + obj.dataJson.fil_adjunto_solicitud_fileNameGEN + '" value="' + obj.dataJson.fil_adjunto_solicitud_fileNameGEN + '" >' + obj.dataJson.fil_adjunto_solicitud_fileNameGEN + '</div>');
                $('#' + link).attr('onclick', 'Descargar("' + obj.dataJson.fil_adjunto_solicitud_fileNameGEN + '","' + obj.dataJson.fil_adjunto_solicitud_fileNameGEN + '")');
            });
        }

    }
}

function CargarArchivoActualizar(nameFile, link) {
    var data = new FormData();
    var files = $("#" + nameFile).get(0).files;
    if (files.length > 0) {
        if (files[0].size > 10000000) {
            LanzarPopGenerico("Mensaje", "El archivo supera los 10MB,y no puede ser adjuntado");
            console.log('tamanio exede el permitido!!');
            $('#' + nameFile).val('');
        } else {
            $.each(files, function (key, value) {
                data.append("fil_adjunto_solicitud", files[key]);
            });
			
			data.append("txt_hi_proceso", 1);
			
            var ajaxRequest = $.ajax({
                type: "POST",
                url: "solicitud.htm?action=adjuntar",
                contentType: false,
                processData: false,
                data: data
            });
            ajaxRequest.done(function (xhr, textStatus) {
                var obj = JSON.parse(xhr);
                
                $('#' + link).html('<div class="text-center"><input id="gen-' + obj.dataJson.fil_adjunto_solicitud_fileNameGEN + '" type="hidden" value="' + obj.dataJson.fil_adjunto_solicitud_fileNameGEN + '" ><input type="hidden" id="ori-' + obj.dataJson.fil_adjunto_solicitud_fileNameGEN + '" value="' + obj.dataJson.fil_adjunto_solicitud_fileNameGEN + '" >' + obj.dataJson.fil_adjunto_solicitud_fileNameGEN + '</div>');
                $('#' + link).attr('onclick', 'Descargar("' + obj.dataJson.fil_adjunto_solicitud_fileNameGEN + '","' + obj.dataJson.fil_adjunto_solicitud_fileNameGEN + '")');
            });
        }

    }
}

//INTEGRACION JSP

//VARIABLES GLOBALES
var dsGdSolicitudes;
var dsGdUPSDA;
var dsGdUPSSDA;
var dsGdCompetencia;


function RetornaDataForm(form) {
    return $('#' + form).serialize();
}

var rrhhLista;
var rrhhListaValidos;
var rrhhListaNoValidos;

var listaDocsAutSanit;
$(function () {
    dsGdSolicitudes = new kendo.data.DataSource({
        transport: {
            read: function (options) {
                var idSolicEditar = $("#idSolicitud").val();
                var ruta = "";
                if (idSolicEditar === "" || idSolicEditar === undefined) {
                    ruta = "solicitudActualizar.htm?action=cargarAdjuntosSolicitud&idAS=" + $('#cboIPAutoridadSanit').val() + "&idProceso=" + $('#idProceso').val();
                } else {
                    ruta = "solicitudActualizar.htm?action=cargarAdjuntosSolicitud&idSol=" + idSolicEditar+"&idAS=" + $('#cboIPAutoridadSanit').val() + "&idProceso=" + $('#idProceso').val()
                }
                $.ajax({
                    url: ruta,
                    dataType: "json",
                    success: function (result) {
                        listaDocsAutSanit = result;
                        options.success(result);
                        CrearDatePicker();
                    },
                    error: function (result) {
                        options.error(result);
                    }
                });
            }
        },
        pageSize: 10,
        schema: {
            model: {
                fields: {
                    CO_IDDOCUMENTREQ: {
                        type: "string"
                    },
                    ROWNUM: {
                        type: "number"
                    },
                    DE_NOMBREREQ: {
                        type: "string"
                    },
                    DE_NOMBREORIGINAL: {
                        type: "string"
                    },
                    IN_FLAGOBLIG: {
                        type: "string"
                    },
                    IN_REQDOCFECH: {
                        type: "string"
                    },
                    NU_ORDEN: {
                        type: "string"
                    },
                    FE_FECHAEMISION: {
                        type: "string"
                    },
                    DE_NOMBREINTERNO: {
                        type: "string"
                    },
                    DE_NOMBREINTERNOSOL: {
                        type: "string"
                    },
                    DE_NOMBREINTERNOSOLADJ: {
                        type: "string"
                    },
                    NU_NUMERO: {
                        type: "string"
                    },
                    CO_CODDADJ: {
                        type: "string"
                    }
                }
            }
        }
    });
	
	// CMIC 14/02/2016
	
	dsGdSolicitudesActualizar = new kendo.data.DataSource({
        transport: {
            read: function (options) {
                var idSolicEditar = $("#idSolicitud").val();
                var ruta = "";
                if (idSolicEditar === "" || idSolicEditar === undefined) {
                    ruta = "solicitudActualizar.htm?action=cargarAdjuntosSolicitudActualizar&idIpress='"+idIpress+"'&idAS=" + $('#cboIPAutoridadSanit').val() + "&idProceso=" + '1';
                } else {
                    ruta = "solicitudActualizar.htm?action=cargarAdjuntosSolicitudActualizar&idIpress='"+idIpress+"'&idSol=" + idSolicEditar+"&idAS=" + $('#cboIPAutoridadSanit').val() + "&idProceso=" + '1';
                }
                $.ajax({
                    url: ruta,
                    dataType: "json",
                    success: function (result) {
                        //listaDocsAutSanit = result;
                        options.success(result);
                        CrearDatePickerActualizar();
                    },
                    error: function (result) {
                        options.error(result);
                    }
                });
            }
        },
        pageSize: 10,
        schema: {
            model: {
                fields: {
                    CO_IDDOCUMENTREQ: {
                        type: "string"
                    },
                    ROWNUM: {
                        type: "number"
                    },
                    DE_NOMBREREQ: {
                        type: "string"
                    },
                    DE_NOMBREORIGINAL: {
                        type: "string"
                    },
                    IN_FLAGOBLIG: {
                        type: "string"
                    },
                    IN_REQDOCFECH: {
                        type: "string"
                    },
                    NU_ORDEN: {
                        type: "string"
                    },
                    FE_FECHAEMISION: {
                        type: "string"
                    },
                    DE_NOMBREINTERNO: {
                        type: "string"
                    },
                    DE_NOMBREINTERNOSOL: {
                        type: "string"
                    },
                    DE_NOMBREINTERNOSOLADJ: {
                        type: "string"
                    },
                    NU_NUMERO: {
                        type: "string"
                    },
                    CO_CODDADJ: {
                        type: "string"
                    }
                }
            }
        }
    });
	
	// CMIC 14/02/2016

    $("#gdDocAdjuntos").kendoGrid({
        dataSource: dsGdSolicitudes,
        autoBind: false,
        resizable: true,
        rowTemplate: kendo.template($("#template").html()),
        pageable: {
            pageSizes: [10, 20, 30],
            messages: {
                display: "Registros {0} - {1} de {2} registros",
                empty: "No hay datos que mostrar",
                page: "P&aacute;gina",
                of: "of {0}",
                itemsPerPage: "registros por p&aacute;gina",
                first: "Go to the first page",
                previous: "Go to the previous page",
                next: "Go to the next page",
                last: "Go to the last page",
                refresh: "Refresh"
            }
        },
        dataBound: function () {
            CrearDatePicker();
        },
        sortable: true,
        columns: [{
                field: "ROWNUM",
                width: "60px",
                title: "Número",
                filterable: false
            }, {
                field: "DE_NOMBREREQ",
                width: "150px",
                title: "Requisito",
                filterable: true
            }, {
                field: "DE_NOMBREORIGINAL",
                width: "60px",
                title: "Plantilla",
                filterable: false,
                sortable: false
            }, {
                field: "IN_FLAGOBLIG",
                width: "80px",
                title: "Obligatoriedad",
                filterable: false,
                sortable: false
            }, {
                field: "NU_ORDEN",
                title: "Numero Documento",
                width: "100px",
                filterable: false,
                sortable: false
            }, {
                field: "FE_FECHAEMISION",
                width: "100px",
                title: "Fecha de Emision",
                filterable: false,
                sortable: false
            }, {
                title: "Accion",
                width: "100px",
                filterable: false,
                sortable: false
            }, {
                title: "Archivo Cargado",
                width: "100px",
                filterable: false,
                sortable: false
            }, {
                field: "CO_IDDOCUMENTREQSOL",
                title: "Archivo Cargado",
                width: "100px",
                filterable: false,
                sortable: false,
                hidden: true
            }, {
                field: "DE_NOMBREINTERNOSOLADJ",
                hidden: true
            }, {
                field: "NU_NUMERO",
                hidden: true
            }, {
                field: "CO_CODDADJ",
                hidden: true
            }
            
        ]
    });
	
	// inicio CMIC 14/02/2015
	
	$("#gdDocAdjuntosActualizar").kendoGrid({
        dataSource: dsGdSolicitudesActualizar,
        autoBind: false,
        resizable: true,
        rowTemplate: kendo.template($("#templateActualizar").html()),
        pageable: {
            pageSizes: [10, 20, 30],
            messages: {
                display: "Registros {0} - {1} de {2} registros",
                empty: "No hay datos que mostrar",
                page: "P&aacute;gina",
                of: "of {0}",
                itemsPerPage: "registros por p&aacute;gina",
                first: "Go to the first page",
                previous: "Go to the previous page",
                next: "Go to the next page",
                last: "Go to the last page",
                refresh: "Refresh"
            }
        },
        dataBound: function () {
            CrearDatePickerActualizar();
        },
        sortable: true,
        columns: [{
                field: "ROWNUM",
                width: "60px",
                title: "Número",
                filterable: false
            }, {
                field: "DE_NOMBREREQ",
                width: "150px",
                title: "Requisito",
                filterable: true
            }, {
                field: "DE_NOMBREORIGINAL",
                width: "60px",
                title: "Plantilla",
                filterable: false,
                sortable: false
            }, {
                field: "IN_FLAGOBLIG",
                width: "80px",
                title: "Obligatoriedad",
                filterable: false,
                sortable: false
            }, {
                field: "NU_ORDEN",
                title: "Numero Documento",
                width: "100px",
                filterable: false,
                sortable: false
            }, {
                field: "FE_FECHAEMISION",
                width: "100px",
                title: "Fecha de Emision",
                filterable: false,
                sortable: false
            }, {
                title: "Accion",
                width: "100px",
                filterable: false,
                sortable: false
            }, {
                title: "Archivo Cargado",
                width: "100px",
                filterable: false,
                sortable: false
            }, {
                field: "CO_IDDOCUMENTREQSOL",
                title: "Archivo Cargado",
                width: "100px",
                filterable: false,
                sortable: false,
                hidden: true
            }, {
                field: "DE_NOMBREINTERNOSOLADJ",
                hidden: true
            }, {
                field: "NU_NUMERO",
                hidden: true
            }, {
                field: "CO_CODDADJ",
                hidden: true
            }
            
        ]
    });
	
	// fin    CMIC 14/02/2015

    //INICIALIZADO POR DEFECTO
    //dsGdSolicitudes.read();

    $("#gdDocAdjuntos").find("input[name='txtNroDoc']").each(
        function (index, value) {
    });

    $('#btnCargarXlsRRHH').click(function () {
        if ($('#filAdjuntarRRHH').val() === '') {
            LanzarPopGenerico('Informativo', 'Es necesario Seleccionar Un archivo Excel.');
            return;
        }
        var data = new FormData();
        var files = $("#filAdjuntarRRHH").get(0).files;
        if (files.length > 0) {
            $.each(files, function (key, value) {
                data.append("fil_adjunto_solicitud", files[key]);
            });
        }
        beginCargando();
        $.ajax({
            url: "solicitud.htm?action=evaluarExcel",
            type: "POST",
            contentType: false,
            processData: false,
            data: data,
            success: function (result) {
            	endCargando();
                rrhhLista = result;
                rrhhListaValidos = result.personasValidas;
                /*VALIDACION PARA ALGUNOS ITEMS*/
                objListTemp = [];
                rrhhListaValidos.forEach(function (item, num) {
                    if (item.NUM_DOCU === undefined
                            || item.NUM_DOCU === '') {
                        //console.debug(item);
                    } else {
                        objListTemp.push(item);
                    }
                }); 
                rrhhListaValidos = objListTemp;
                //SE GENERA OBJETO PARA CUANDO NO SE EDITEN
                var arrTemp = [];
				
                rrhhListaValidos.forEach(function(item1, num1) {
                    var arrObjEspRRHH = [];
                    if (item1.ESPECIALIDAD !== undefined){
                        item1.ESPECIALIDAD.split(',').forEach(function(item, num){
                            var objEspRRHH = {};
                            objEspRRHH.IDCOLEGPROF = item;
                            if (item1.RNE !== undefined){
                                objEspRRHH.RNE = item1.RNE.split(',')[num];
                            }							
                            arrObjEspRRHH.push(objEspRRHH);
                            //console.log(item);
                        });
                        item1.ObjEspSel = arrObjEspRRHH;
                        arrTemp.push(item1);
                    }else{
                        arrTemp.push(item1);
                    }                    
                });
                rrhhListaValidos = arrTemp;
				
                rrhhListaValidos = Ordenamiento(rrhhListaValidos, 'NRO', 'ASC');
                rrhhListaNoValidos = result.personasNoValidas;
                if (result.personasNoValidas.length > 0) {
                    MostrarPopRRHHNoValidos();
                    //rrhhListaValidos = [];
                    dsGdRRHH.read();
                    MostrarPopRRHHValidos();
                } else {
                    MostrarPopRRHHValidos();
                }
            },
            error: function (result) {
                //options.error(result.personasNoValidas);
            }
        });
    });

    dsGdRRHH = new kendo.data.DataSource({
        transport: {
            read: function (options) {
                options.success(RetornaDS());
            }
        },
        pageSize: 10,
        schema: {
            model: {
                fields: {
                    NRO: {
                        type: "string"
                    },
                    TIPO_DOC: {
                        type: "number"
                    },
                    NUM_DOCU: {
                        type: "string"
                    },
                    PAIS_PROC: {
                        type: "string"
                    },
                    DIA_NAC: {
                        type: "string"
                    },
                    MES_NAC: {
                        type: "string"
                    },
                    ANIO_NAC: {
                        type: "string"
                    },
                    APELLIDO_PAT: {
                        type: "string"
                    },
                    APELLIDO_MAT: {
                        type: "string"
                    },
                    APELLIDO_CAS: {
                        type: "string"
                    },
                    NOMBRES: {
                        type: "string"
                    },
                    RNE: {
                        type: "string"
                    },
                    COLEGIO: {
                        type: "string"
                    },
                    ESPECIALIDAD: {
                        type: "string"
                    },
                    COMPETENCIA: {
                        type: "string"
                    },
                    CAPACITACION: {
                        type: "string"
                    },
                    ENTRENAMIENTO: {
                        type: "string"
                    },
                    UPSS: {
                        type: "string"
                    },
                    UPSSDETALLE: {
                        type: "string"
                    },
                    COLEGIODETALLE: {
                        type: "string"
                    },
                    ESPECIALIDADDETALLE: {
                        type: "string"
                    },
                    //AGREGADO POR DLARICO
                    SEXO: {
                        type: "string"
                    }
                    ,
                    MENSAJE: {
                        type: "string"
                    },
					PAISDETALLE: {
                        type: "string"
                    },
					DOCUMENTO: {
                        type: "string"
                    },
					SEXODETALLE: {
                        type: "string"
                    }                    
                }
            }
        }
    });

    dsGdRRHHNoValido = new kendo.data.DataSource({
        transport: {
            read: function (options) {
                options.success(RetornaDSNoValido());
            }
        },
        pageSize: 10,
        schema: {
            model: {
                fields: 
                	{
                    NRO: {
                        type: "string"
                    },
                    MENSAJE: {
                        type: "string"
                    },                    
                    TIPO_DOC: {
                        type: "number"
                    },
                    NUM_DOCU: {
                        type: "string"
                    },
                    PAIS_PROC: {
                        type: "string"
                    },
                    DIA_NAC: {
                        type: "string"
                    },
                    MES_NAC: {
                        type: "string"
                    },
                    ANIO_NAC: {
                        type: "string"
                    },
                    APELLIDO_PAT: {
                        type: "string"
                    },
                    APELLIDO_MAT: {
                        type: "string"
                    },
                    APELLIDO_CAS: {
                        type: "string"
                    },
                    NOMBRES: {
                        type: "string"
                    },
                    RNE: {
                        type: "string"
                    },
                    COLEGIO: {
                        type: "string"
                    },
                    ESPECIALIDAD: {
                        type: "string"
                    },
                    COMPETENCIA: {
                        type: "string"
                    },
                    CAPACITACION: {
                        type: "string"
                    },
                    ENTRENAMIENTO: {
                        type: "string"
                    },
                    UPSS: {
                        type: "string"
                    },
                    UPSSDETALLE: {
                        type: "string"
                    },
                    COLEGIODETALLE: {
                        type: "string"
                    },
                    ESPECIALIDADDETALLE: {
                        type: "string"
                    },
                    //AGREGADO POR DLARICO
                    SEXO: {
                        type: "string"
                    },
                    MENSAJE: {
                        type: "string"
                    }
                }
            }
        }
    });

    dsGdColegioProfesional = new kendo.data.DataSource({
        transport: {
            read: function (options) {
                options.success(ObtenerColProf());
            }
        },
        pageSize: 10,
        schema: {
            model: {
                fields: {
                    CO_IDCOLEGPROF: {
                        type: "numeric"
                    },
                    US_USUAREG: {
                        type: "number"
                    },
                    FE_FECHAREG: {
                        type: "string"
                    },
                    DE_DESCRIPCION: {
                        type: "string"
                    },
                    FLAG: {
                        type: "string"
                    }
                }
            }
        }
    });

    dsGdEspecialidad = new kendo.data.DataSource({
        transport: {
            read: function (options) {
                options.success(ObtenerEspecialidad());
            }
        },
        pageSize: 10,
        schema: {
            model: {
                fields: {
                    CO_IDESPECIALIDAD: {
                        type: "numeric"
                    },
                    ES_ESTADO: {
                        type: "number"
                    },
                    FE_FECHAMOD: {
                        type: "string"
                    },
                    CO_IDCOLEGPROF: {
                        type: "number"
                    },
                    FE_FECHAREG: {
                        type: "string"
                    },
                    DE_DESCRIPCION: {
                        type: "string"
                    },
                    US_USUAMOD: {
                        type: "string"
                    },
                    COLEGIO: {
                        type: "string"
                    },
                    FLAG: {
                        type: "string"
                    },
                    RNE: {
                        type: "string"
                    }
                }
            }
        }
    });

    dsGdCompetencia = new kendo.data.DataSource(
            {
                transport: {
                    read: function (options) {
                        options.success(ObtenerCompetencia());
                    }
                },
                pageSize: 10,
                schema: {
                    model: {
                        fields: {
                            CO_IDCOMPETENCIAS: {
                                type: "numeric"
                            },
                            TI_TIPO: {
                                type: "number"
                            },
                            US_USUAREG: {
                                type: "string"
                            },
                            FE_FECHAREG: {
                                type: "number"
                            },
                            DE_DESCRIPCION: {
                                type: "string"
                            },
                            FLAG: {
                                type: "string"
                            }
                        }
                    }
                }
            });

    dsGdCapacitacion = new kendo.data.DataSource(
            {
                transport: {
                    read: function (options) {
                        options.success(ObtenerCapacitacion());
                    }
                },
                pageSize: 10,
                schema: {
                    model: {
                        fields: {
                            CO_IDCOMPETENCIAS: {
                                type: "numeric"
                            },
                            TI_TIPO: {
                                type: "number"
                            },
                            US_USUAREG: {
                                type: "string"
                            },
                            FE_FECHAREG: {
                                type: "number"
                            },
                            DE_DESCRIPCION: {
                                type: "string"
                            },
                            FLAG: {
                                type: "string"
                            }
                        }
                    }
                }
            });

    dsGdEntrenamiento = new kendo.data.DataSource({
        transport: {
            read: function (options) {
                options.success(ObtenerEntrenamiento());
            }
        },
        pageSize: 10,
        schema: {
            model: {
                fields: {
                    CO_IDCOMPETENCIAS: {
                        type: "numeric"
                    },
                    TI_TIPO: {
                        type: "number"
                    },
                    US_USUAREG: {
                        type: "string"
                    },
                    FE_FECHAREG: {
                        type: "number"
                    },
                    DE_DESCRIPCION: {
                        type: "string"
                    },
                    FLAG: {
                        type: "string"
                    }
                }
            }
        }
    });

    dsGdUPSS = new kendo.data.DataSource({
        transport: {
            read: function (options) {
                options.success(ObtenerUPSSS());
            }
        },
        pageSize: 10,
        schema: {
            model: {
                fields: {
                    CO_IDUPSS: {type: "numeric"},
                    ES_ESTADO: {type: "number"},
                    TI_TIPOACTIVIDAD: {type: "number"},
                    FE_FECHAMOD: {type: "string"},
                    US_USUAREG: {type: "string"},
                    FE_FECHAREG: {type: "string"},
                    DE_NOMBRE: {type: "string"},
                    US_USUAMOD: {type: "string"},
                    DE_DEFINICION: {type: "string"},
                    FLAG: {type: "string"},
                    CO_CODUPSS: {type: "string"}
                }
            }
        }
    });

    dsGdClasificaEstab = new kendo.data.DataSource({
        transport: {
            read: function (options) {
                options.success(ObtenerClasificaEstab());
            }
        },
        pageSize: 10,
        schema: {
            model: {
                fields: {
                    CO_IDCLASIF: {
                        type: "number"
                    },
                    TI_ESTABLEC: {
                        type: "number"
                    },
                    ES_ESTADO: {
                        type: "number"
                    },
                    FE_FECHAMOD: {
                        type: "string"
                    },
                    FE_FECHAREG: {
                        type: "string"
                    },
                    US_USUAREG: {
                        type: "string"
                    },
                    DE_DESCRIPCION: {
                        type: "string"
                    },
                    FLAG: {
                        type: "string"
                    }
                }
            }
        }
    });

    dsGdUPSDA = new kendo.data.DataSource({
        transport: {
            read: function (options) {
                options.success(retornaUPSDAdicional());
            }
        },
        pageSize: 10,
        schema: {
            model: {
                fields: {
                    CO_IDUPS: {
                        type: "number"
                    },
                    ES_ESTADO: {
                        type: "number"
                    },
                    DE_NOMBRE: {
                        type: "string"
                    },
                    US_USUAREG: {
                        type: "string"
                    },
                    FE_FECHAREG: {
                        type: "string"
                    },
                    CO_CODUPS: {
                        type: "string"
                    }
                }
            }
        }
    });

    //dsGdUPSDA.read()

    dsGdUPSSDA = new kendo.data.DataSource({
        transport: {
            read: function (options) {
                options.success(retornaUPSSDAdicional());
            }
        },
        pageSize: 10,
        schema: {
            model: {
                fields: {
                    CO_IDUPSS: {
                        type: "number"
                    },
                    TI_TIPOACTIVIDAD: {
                        type: "number"
                    },
                    ES_ESTADO: {
                        type: "number"
                    },
                    DE_NOMBRE: {
                        type: "string"
                    },
                    FE_FECHAREG: {
                        type: "string"
                    },
                    RUC: {
                        type: "string"
                    },
                    RAZONSOCIAL: {
                        type: "string"
                    },
                    TERCIARIZADA: {
                        type: "string"
                    },
                    CO_CODUPSS: {
                        type: "string"
                    },
                    NU_ORDEN: {
                        type: "string"
                    }
                }
            }
        }
    });
    //dsGdUPSSDA.read()
    
    dsGdActividadesDA = new kendo.data.DataSource({
        transport: {
            read: function (options) {
				
				var vurl = '';
		
				if ($('#estadoActualizar').val() == 1 ){
					vurl = "ipress.htm?action=selectACTDA&idSol=" + co_idipress;
				}else{
					vurl = "solicitud.htm?action=selectACTDA&idSol=" + $('#idSolicitud').val();
				}
				
                $.ajax({
                    url: vurl,
                    dataType: "json",
                    success: function (result) {
                        console.log('arratTempActividad '+arratTempActividad);
                        arratTempActividad = [];
                        result.forEach(function(item, numero) {
                            item.FLAG = item.FLAG.toString();
                            if(item.FLAG === '1'){
                                arratTempActividad.push(item.CO_IDACTIVIDAD);
                            }
                        });
                        options.success(result);
                        arrActividadDAdicional  = arratTempActividad;
                    },
                    error: function (result) {

                    }
                });

            }
        },
        pageSize: 10,
        schema: {
            model: {
                id: 'CO_IDACTIVIDAD',
                fields: {
                    CO_IDACTIVIDAD: {
                        type: "number"
                    },
                    ES_ESTADO: {
                        type: "number"
                    },
                    DE_NOMBRE: {
                        type: "string"
                    },
                    FE_FECHAREG: {
                        type: "string"
                    },
                    FLAG: {
                        type: "string"
                    }
                }
            }
        }
    });
	
	// ESPECIALIDADES - agregado por cmic
	
	dsGdEspecialidadSolicitudDA = new kendo.data.DataSource({
        transport: {
            read: function (options) {
				
				var vurl = '';
		
				if ($('#estadoActualizar').val() == 1 ){
					vurl = "ipress.htm?action=selectEspecialidadSolicitud&idSol=" + co_idipress;
				}else{
					vurl = "solicitud.htm?action=selectEspecialidadSolicitud&idSol=" + $('#idSolicitud').val();
				}
				
                $.ajax({
                    url: vurl,
                    dataType: "json",
                    success: function (result) {
                        console.log('arratTempEspecialidad '+arratTempEspecialidad);
                        arratTempEspecialidad = [];
                        result.forEach(function(item, numero) {
                            item.FLAG = item.FLAG.toString();
                            if(item.FLAG === '1'){
                                arratTempEspecialidad.push(item.COD_ESPECIALIDAD);
                            }
                        });
                        options.success(result);
                        arrEspecialidadDAdicional  = arratTempEspecialidad;
                    },
                    error: function (result) {

                    }
                });

            }
        },
        pageSize: 10,
        schema: {
            model: {
                id: 'COD_ESPECIALIDAD',
                fields: {
                    COD_ESPECIALIDAD: {
                        type: "string"
                    },
                    ESPECIALIDAD: {
                        type: "string"
                    },
                    COD_COLEGIO: {
                        type: "string"
                    },
                    COLEGIO: {
                        type: "string"
                    },
                    FLAG: {
                        type: "string"
                    }
                }
            }
        }
    });

    dsGdConsultaExt = new kendo.data.DataSource({
        transport: {
            read: function (options) {
                $.ajax({
                    url: "solicitud.htm?action=selectACTDA",
                    dataType: "json",
                    success: function (result) {
                        options.success(result);
                    },
                    error: function (result) {

                    }
                });

            }
        },
        pageSize: 10,
        schema: {
            model: {
                fields: {
                    CO_IDACTIVIDAD: {
                        type: "number"
                    },
                    ES_ESTADO: {
                        type: "number"
                    },
                    DE_NOMBRE: {
                        type: "string"
                    },
                    FE_FECHAREG: {
                        type: "string"
                    }
                }
            }
        }
    });

    $("#gdRRHHAdjuntos").kendoGrid({
        dataSource: dsGdRRHHNoValido,
        //height : 350,
        autoBind: false,
        filterable: true,
        sortable: true,
        selectable: true,
        resizable: true,
        rowTemplate: kendo.template($("#templateExcelNoValido").html()),
        pageable: {
            pageSizes: [10, 20, 30],
            messages: {
                display: "Registros {0} - {1} de {2} registros",
                empty: "No hay datos que mostrar",
                page: "P&aacute;gina",
                of: "of {0}",
                itemsPerPage: "registros por p&aacute;gina",
                first: "Go to the first page",
                previous: "Go to the previous page",
                next: "Go to the next page",
                last: "Go to the last page",
                refresh: "Refresh"
            }
        },
        dataBound: function () {
            $('td').each(function () {
                if ($(this).text().indexOf('ERROR') !== (-1)) {
                    $(this).attr('style', 'color:red');
                    $(this).text($(this).text().substr(6));
                } else {
                    $(this).removeAttr('style');
                }
            });
        },
        columns: [
			{
			    field: "Nro.",
			    width: "40px",
			    title: "NRO.",
			    filterable: false
			},
            {
                field: "APELLIDO_PAT",
                width: "60px",
                title: "Apellido Paterno",
                filterable: false
            }, {
                field: "APELLIDO_MAT",
                width: "150px",
                title: "Apellido Materno",
                filterable: false
            }, {
				field: "APELLIDO_CAS",
                width: "150px",
                title: "Apellido Casada",
                filterable: false
            }, {
                field: "NOMBRES",
                width: "60px",
                title: "Nombres",
                filterable: false
            }, {
                field: "DOCUMENTO",
                width: "80px",
                title: "Tipo Doc. Identidad",
                filterable: false
            }, {
                field: "NUM_DOCU",
                title: "Nro. Doc. Identidad",
                width: "100px",
                filterable: false
            }, {//AGREGADO POR DLARICO
                field: "SEXODETALLE",
				title: "Sexo",
                width: "80px",                
				filterable: false
            }, {//AGREGADO POR DLARICO
                field: "PAISDETALLE",
				title: "Pais",
                width: "100px",
                filterable: false
            }, {//AGREGADO POR DLARICO
                field: "DIA_NAC",
				title: "Dia",
                width: "100px",
                filterable: false
            }, {//AGREGADO POR DLARICO
                field: "MES_NAC",
				title: "Mes",
                width: "100px",
                filterable: false
            }, {//AGREGADO POR DLARICO
                field: "ANIO_NAC",
				title: "Año",
                width: "100px",
                filterable: false
            }, {//AGREGADO POR DLARICO
                field: "RNE",
				title: "RNE",
                width: "100px",
                filterable: false
            }, {
                field: "COLEGIODETALLE",
                width: "300px",
                title: "Colegio Profesional",
                filterable: false
            }, {
                field: "ESPECIALIDADDETALLE",
                width: "300px",
                title: "Especialidades",
                filterable: false
            }, {
                field: "COMPETENCIADETALLE",
                width: "300px",
                title: "Competencia",
                filterable: false
            }, {
                field: "CAPACITACIONDETALLE",
                width: "300px",
                title: "Capacitación",
                filterable: false
            }, {
                field: "ENTRENAMIENTODETALLE",
                width: "300px",
                title: "Entrenamiento",
                filterable: false
            }, {
                field: "UPSSDETALLE",
                width: "300px",
                title: "UPSS",
                filterable: false
            // ---- FLAG DE VALIDACIONES
			
			}, {
                field: "FLAG_UPSSDETALLE",
				hidden: true
            }, {
                field: "FLAG_COLEGIODETALLE",
				hidden: true
			}, {
                field: "FLAG_ESPECIALIDADDETALLE",
				hidden: true
			}, {
                field: "FLAG_COMPETENCIADETALLE",
				hidden: true
			}, {
                field: "FLAG_CAPACITACIONDETALLE",
				hidden: true
			}, {
                field: "FLAG_ENTRENAMIENTODETALLE",
				hidden: true
			}, {
                field: "FLAG_DOCUMENTO",
				hidden: true
			}, {
                field: "FLAG_SEXODETALLE",
				hidden: true
			}, {
                field: "FLAG_PAISDETALLE",
				hidden: true
			}, {
                field: "FLAG_NUM_DOCU",
				hidden: true
			}, {
                field: "FLAG_APELLIDO_PAT",
				hidden: true
			}, {
                field: "FLAG_APELLIDO_MAT",
				hidden: true
			}, {
                field: "FLAG_NOMBRES",
				hidden: true
			}, {
                field: "FLAG_DIA_NAC",
				hidden: true
			}, {
                field: "FLAG_MES_NAC",
				hidden: true
			}, {
                field: "FLAG_ANIO_NAC",
				hidden: true
			}, {
                field: "FLAG_APELLIDO_CAS",
				hidden: true
			}, {
                field: "FLAG_RNE",
				hidden: true
			}			
			]
    });

    $("#gdRRHHAdjuntosValidos").kendoGrid({
        dataSource: dsGdRRHH,
        autoBind: false,
        filterable: false,
        sortable: true,
        selectable: true,
        resizable: true,
        rowTemplate: kendo.template($("#templateExcel").html()),
        pageable: {
            pageSizes: [10, 20, 30],
            messages: {
                display: "Registros {0} - {1} de {2} registros",
                empty: "No hay datos que mostrar",
                page: "P&aacute;gina",
                of: "of {0}",
                itemsPerPage: "registros por p&aacute;gina",
                first: "Go to the first page",
                previous: "Go to the previous page",
                next: "Go to the next page",
                last: "Go to the last page",
                refresh: "Refresh"
            }
        },
        columns: [
            {
                field: "APELLIDO_PAT",
                width: "60px",
                title: "Apellido Paterno",
                filterable: true
            }, {
                field: "APELLIDO_MAT",
                width: "150px",
                title: "Apellido Materno",
                filterable: true
            }, {
                field: "NOMBRES",
                width: "60px",
                title: "Nombres",
                filterable: true
            }, {
                field: "DOCUMENTO",
                width: "80px",
                title: "Tipo Doc. Identidad",
                filterable: false
            }, {
                field: "NUM_DOCU",
                title: "Nro. Doc. Identidad",
                width: "100px",
                filterable: false
            }, {//AGREGADO POR DLARICO
                field: "SEXO",
                hidden: true
            }, {
                field: "COLEGIODETALLE",
                width: "100px",
                title: "Colegio Profesional",
                filterable: true
            }, {
                field: "ESPECIALIDADDETALLE",
                width: "100px",
                title: "Especialidades",
                filterable: true
            }, {
                field: "UPSSDETALLE",
                width: "100px",
                title: "UPSS",
                filterable: true
            }, {
                field: "UPSS",
                hidden: true
            }, {
                field: "COLEGIO",
                hidden: true
            }, {
                title: "Acciones",
                width: "100px",
                filterable: false
            			
			// ---- FLAG DE VALIDACIONES
			
			}, {
                field: "FLAG_UPSSDETALLE",
				hidden: true
            }, {
                field: "FLAG_COLEGIODETALLE",
				hidden: true
			}, {
                field: "FLAG_ESPECIALIDADDETALLE",
				hidden: true
			}, {
                field: "FLAG_COMPETENCIADETALLE",
				hidden: true
			}, {
                field: "FLAG_CAPACITACIONDETALLE",
				hidden: true
			}, {
                field: "FLAG_ENTRENAMIENTODETALLE",
				hidden: true
			}, {
                field: "FLAG_DOCUMENTO",
				hidden: true
			}, {
                field: "FLAG_SEXODETALLE",
				hidden: true
			}, {
                field: "FLAG_PAISDETALLE",
				hidden: true
			}, {
                field: "FLAG_NUM_DOCU",
				hidden: true
			}, {
                field: "FLAG_APELLIDO_PAT",
				hidden: true
			}, {
                field: "FLAG_APELLIDO_MAT",
				hidden: true
			}, {
                field: "FLAG_NOMBRES",
				hidden: true
			}, {
                field: "FLAG_DIA_NAC",
				hidden: true
			}, {
                field: "FLAG_MES_NAC",
				hidden: true
			}, {
                field: "FLAG_ANIO_NAC",
				hidden: true
			}, {
                field: "FLAG_APELLIDO_CAS",
				hidden: true
			}, {
                field: "FLAG_RNE",
				hidden: true
			}
        ]
    });

    $("#gdColegioProfesional").kendoGrid({
        dataSource: dsGdColegioProfesional,
        //height : 350,
        autoBind: false,
        filterable: true,
        sortable: true,
        selectable: true,
        resizable: true,
        rowTemplate: kendo.template($("#templateColeProf").html()),
        pageable: {
            pageSizes: [10, 20, 30],
            messages: {
                display: "Registros {0} - {1} de {2} registros",
                empty: "No hay datos que mostrar",
                page: "P&aacute;gina",
                of: "of {0}",
                itemsPerPage: "registros por p&aacute;gina",
                first: "Go to the first page",
                previous: "Go to the previous page",
                next: "Go to the next page",
                last: "Go to the last page",
                refresh: "Refresh"
            }
        },
        columns: [{
                width: "10px",
                title: "Sel.",
                filterable: false
            }, {
                field: "CO_IDCOLEGPROF",
                width: "10px",
                title: "C&oacute;digo",
                filterable: false
            }, {
                field: "DE_DESCRIPCION",
                width: "150px",
                title: "Nombre Colegio Profesional",
                filterable: false
            }, {
                field: "FLAG",
                hidden: true,
                filterable: false
            }
        ],
        dataBound: function () {
            $('#gdColegioProfesional').find("tr").find("td:first input").each(function (num, item) {
                $(arrColegio).each(function (num1, item1) {
                    if ($(item).attr('data-idcolprof') === item1.toString()) {
                        $(item).attr('checked', true);
                    }
                });
            });
			if(idOpcion===6 ){
				$('select').attr('disabled', true);
				$('input').attr('disabled', true);
				$('#btnCancelarRRHH').attr('disabled', false);
				$('#btnRegresarRRHH').attr('disabled', false);
			}
        }
    });

    $("#gdEspecialidad").kendoGrid({
        dataSource: dsGdEspecialidad,
        autoBind: false,
        filterable: true,
        sortable: true,
        selectable: true,
        resizable: true,
        rowTemplate: kendo.template($("#templateEspecialidad").html()),
        pageable: {
            pageSizes: [10, 20, 30],
            messages: {
                display: "Registros {0} - {1} de {2} registros",
                empty: "No hay datos que mostrar",
                page: "P&aacute;gina",
                of: "of {0}",
                itemsPerPage: "registros por p&aacute;gina",
                first: "Go to the first page",
                previous: "Go to the previous page",
                next: "Go to the next page",
                last: "Go to the last page",
                refresh: "Refresh"
            }
        },
        columns: [{
                width: "30px",
                title: "Sel.",
                filterable: false
            }, {
                field: "CO_IDESPECIALIDAD",
                width: "50px",
                title: "C&oacute;digo",
                filterable: false,
                hidden: true //Agregado por dlarico caso ocultar columna
            }, {
                field: "COLEGIO",
                width: "150px",
                title: "Colegio Profesional",
                filterable: false
            }, {
                field: "DE_DESCRIPCION",
                width: "150px",
                title: "Nombre Especialidad",
                filterable: false
            }, {
                field: "FLAG",
                hidden: true,
                filterable: false
            },
            {
                width: "50px",
                title: "RNE",
                filterable: false
            }
        ],
        dataBound: function () {
            $('#gdEspecialidad').find("tr").find("td:first input").each(function (num, item) {
                $(arrEspecialidad).each(function (num1, item1) {
                    if ($(item).attr('data-idesp') === item1.toString()) {
                        $(item).attr('checked', true);
                        $($(item.parentNode.parentNode.parentNode).find('input')[1]).attr('disabled', false);
                        //console.log(item1.toString());
                        objtEspec.forEach(
                            function(item2,num2){
                                if(item2.CO_IDESPECIALIDAD.toString()===item1){
                                    $($(item.parentNode.parentNode.parentNode).find('input')[1]).attr('value', item2.RNE);
                                  console.log(item.RNE);
                                }
                            }
                        );

                    }
                });
            });
			if(idOpcion===6 ){
				$('select').attr('disabled', true);
				$('input').attr('disabled', true);
				$('#btnCancelarRRHH').attr('disabled', false);
				$('#btnRegresarRRHH').attr('disabled', false);
			}
        }
    });

    $("#gdCompetencia").kendoGrid({
        dataSource: dsGdCompetencia,
        //height : 350,
        autoBind: true,
        filterable: true,
        sortable: true,
        selectable: true,
        resizable: true,
        rowTemplate: kendo.template($("#templateCompetencia").html()),
        pageable: {
            pageSizes: [10, 20, 30],
            messages: {
                display: "Registros {0} - {1} de {2} registros",
                empty: "No hay datos que mostrar",
                page: "P&aacute;gina",
                of: "of {0}",
                itemsPerPage: "registros por p&aacute;gina",
                first: "Go to the first page",
                previous: "Go to the previous page",
                next: "Go to the next page",
                last: "Go to the last page",
                refresh: "Refresh"
            }
        },
        columns: [{
                width: "60px",
                title: "Sel.",
                filterable: false
            }, {
                field: "CO_IDCOMPETENCIAS",
                width: "60px",
                title: "C&oacute;digo",
                filterable: false
            }, {
                field: "DE_DESCRIPCION",
                width: "150px",
                title: "Nombre Competencia",
                filterable: false
            }, {
                field: "FLAG",
                hidden: true,
                filterable: false
            }
        ],
        dataBound: function () {
            $('#gdCompetencia').find("tr").find("td:first input").each(function (num, item) {
                $(arrCompetencia).each(function (num1, item1) {
                    if ($(item).attr('data-idcomp') === item1.toString()) {
                        $(item).attr('checked', true);
                    }
                });
            });
            if(idOpcion===6 ){
            	$('select').attr('disabled', true);
            	$('input').attr('disabled', true);
            	$('#btnCancelarRRHH').attr('disabled', false);
				$('#btnRegresarRRHH').attr('disabled', false);
            }  
              
        }
    });

    $("#gdCompetenciaCapacitacion").kendoGrid({
        dataSource: dsGdCapacitacion,
        //height : 350,
        autoBind: true,
        filterable: true,
        sortable: true,
        selectable: true,
        resizable: true,
        rowTemplate: kendo.template($("#templateCompetenciaCapacitacion").html()),
        pageable: {
            pageSizes: [10, 20, 30],
            messages: {
                display: "Registros {0} - {1} de {2} registros",
                empty: "No hay datos que mostrar",
                page: "P&aacute;gina",
                of: "of {0}",
                itemsPerPage: "registros por p&aacute;gina",
                first: "Go to the first page",
                previous: "Go to the previous page",
                next: "Go to the next page",
                last: "Go to the last page",
                refresh: "Refresh"
            }
        },
        columns: [{
                width: "60px",
                title: "Sel.",
                filterable: false
            }, {
                field: "CO_IDCOMPETENCIAS",
                width: "60px",
                title: "C&oacute;digo",
                filterable: false
            }, {
                field: "DE_DESCRIPCION",
                width: "150px",
                title: "Nombre Competencia",
                filterable: false
            }
        ],
        dataBound: function () {
            $('#gdCompetenciaCapacitacion').find("tr").find("td:first input").each(function (num, item) {
                $(arrCompetencia).each(function (num1, item1) {
                    if ($(item).attr('data-idcompcap') === item1.toString()) {
                        $(item).attr('checked', true);
                    }
                });
            });
            if(idOpcion===6 ){
            	$('select').attr('disabled', true);
            	$('input').attr('disabled', true);
            	$('#btnCancelarRRHH').attr('disabled', false);
				$('#btnRegresarRRHH').attr('disabled', false);
            }  
              
        }
    });

    $("#gdCompetenciaEntrenamiento").kendoGrid({
        dataSource: dsGdEntrenamiento,
        autoBind: true,
        filterable: true,
        sortable: true,
        selectable: true,
        resizable: true,
        rowTemplate: kendo.template($("#templateCompetenciaEntrenamiento").html()),
        pageable: {
            pageSizes: [10, 20, 30],
            messages: {
                display: "Registros {0} - {1} de {2} registros",
                empty: "No hay datos que mostrar",
                page: "P&aacute;gina",
                of: "of {0}",
                itemsPerPage: "registros por p&aacute;gina",
                first: "Go to the first page",
                previous: "Go to the previous page",
                next: "Go to the next page",
                last: "Go to the last page",
                refresh: "Refresh"
            }
        },
        columns: [{
                width: "60px",
                title: "Sel.",
                filterable: false
            }, {
                field: "CO_IDCOMPETENCIAS",
                width: "60px",
                title: "C&oacute;digo",
                filterable: false
            }, {
                field: "DE_DESCRIPCION",
                width: "150px",
                title: "Nombre Competencia",
                filterable: false
            }
        ],
        dataBound: function () {
            $('#gdCompetenciaEntrenamiento').find("tr").find("td:first input").each(function (num, item) {
                $(arrCompetencia).each(function (num1, item1) {
                    if ($(item).attr('data-idcompent') === item1.toString()) {
                        $(item).attr('checked', true);
                    }
                });
            });
            if(idOpcion===6 ){
            	$('select').attr('disabled', true);
            	$('input').attr('disabled', true);
            	$('#btnCancelarRRHH').attr('disabled', false);
				$('#btnRegresarRRHH').attr('disabled', false);
            }  
              
        }
    });

    $("#gdUPSS").kendoGrid({
        dataSource: dsGdUPSS,
        //height : 350,
        autoBind: false,
        filterable: true,
        sortable: true,
        selectable: true,
        resizable: true,
        rowTemplate: kendo.template($("#templateUPSS").html()),
        pageable: {
            pageSizes: [10, 20, 30],
            messages: {
                display: "Registros {0} - {1} de {2} registros",
                empty: "No hay datos que mostrar",
                page: "P&aacute;gina",
                of: "of {0}",
                itemsPerPage: "registros por p&aacute;gina",
                first: "Go to the first page",
                previous: "Go to the previous page",
                next: "Go to the next page",
                last: "Go to the last page",
                refresh: "Refresh"
            }
        },
        columns: [{
                width: "60px",
                title: "Sel.",
                filterable: false
            }, {
                field: "CO_IDUPSS",
                width: "60px",
                title: "Num",
                filterable: false,
                hidden: true
            }, {
                field: "CO_CODUPSS",
                width: "60px",
                title: "C&oacute;digo UPSS",
                filterable: false
            }, {
                field: "DE_DEFINICION",
                width: "150px",
                title: "Nombre de UPSS",
                filterable: false
            }, {
                field: "FLAG",
                hidden: true,
                filterable: false
            }
        ],
        dataBound: function () {
            $('#gdUPSS').find("tr").find("td:first input").each(function (num, item) {
                $(arrUPSS).each(function (num1, item1) {
                    if ($(item).attr('data-idupssda') === item1.toString()) {
                        $(item).attr('checked', true);
                    }
                });
            });
            if(idOpcion===6 ){
            	$('select').attr('disabled', true);
            	$('input').attr('disabled', true);
            	$('#btnCancelarRRHH').attr('disabled', false);
				$('#btnRegresarRRHH').attr('disabled', false);
            }
        }
    });

    $("#gdClasificacion").kendoGrid({
        dataSource: dsGdClasificaEstab,
        autoBind: false,
        filterable: false,
        sortable: true,
        selectable: true,
        resizable: true,
        rowTemplate: kendo.template($("#templateClasificacion").html()),
        pageable: {
            pageSizes: [10, 20, 30],
            messages: {
                display: "Registros {0} - {1} de {2} registros",
                empty: "No hay datos que mostrar",
                page: "P&aacute;gina",
                of: "of {0}",
                itemsPerPage: "registros por p&aacute;gina",
                first: "Go to the first page",
                previous: "Go to the previous page",
                next: "Go to the next page",
                last: "Go to the last page",
                refresh: "Refresh"
            }
        },
        columns: [{
                width: "10px",
                title: "Sel.",
                filterable: false
            }, {
                field: "CO_IDCLASIF",
                width: "10px",
                title: "C&oacute;digo",
                filterable: false
            }, {
                field: "DE_DESCRIPCION",
                width: "150px",
                title: "Descripcion",
                filterable: true
            }, {
                field: "FLAG",
                hidden: true,
                filterable: false
            }
        ],
        dataBound: function () {
            $('#gdClasificacion').find("tr").find("td:first input").each(function (num, item) {
                $(arrClasEst).each(function (num1, item1) {
                    if ($(item).attr('data-idclasest') === item1.toString()) {
                    	console.log(item1);
                        $(item).attr('checked', true);
                    }
                });
            });
            if(idOpcion===6 ){
            	$('select').attr('disabled', true);
            	$('input').attr('disabled', true);
            } 
        }

    });

    $("#gdUPSDA").kendoGrid({
        dataSource: dsGdUPSDA,
        autoBind: false,
        filterable: false,
        sortable: true,
        selectable: true,
        resizable: true,
        rowTemplate: kendo.template($("#templateUPSDA").html()),
        pageable: {
            pageSizes: [10, 20, 30],
            messages: {
                
                display: "Registros {0} - {1} de {2} registros",
                empty: "No hay datos que mostrar",
                page: "P&aacute;gina",
                of: "of {0}",
                itemsPerPage: "registros por p&aacute;gina",
                first: "Go to the first page",
                previous: "Go to the previous page",
                next: "Go to the next page",
                last: "Go to the last page",
                refresh: "Refresh"
            }
        },
        columns: [{
                width: "10px",
                title: "Sel.",
                filterable: false
            }, {
                field: "CO_CODUPS",
                title: "C&oacute;digo",
                width: "40px"
            }, {
                field: "DE_NOMBRE",
                width: "150px",
                title: "Servicio"
                //filterable : true
            }, {
                field: "FLAG",
                hidden: true,
                filterable: false
            },
            {
                field: "CO_IDUPS",
                hidden: true,
                filterable: false
            }
        ],
        dataBound: function () {
        	$('#gdUPSDA').find("tr").find("td:first input").each(function (num, item) {
        		  if(arrUPSDAdicional.length>0){
        		                  $(arrUPSDAdicional).each(function (num1, item1) {
        		                      if ($(item).attr('data-idups') === item1.toString()) {
        		                          $(item).attr('checked', true);
        		                      }
        		                  });  
        		  }else{
        		                          $(item).attr('checked', false);
        		                          $(item).attr('data-idups','');
        		  }
        		});  
        	if(idOpcion===6 ){
        		$('select').attr('disabled', true);
        		$('input').attr('disabled', true);
        	}  
        	  
        }
    });

	$("#gdUPSSDA").kendoGrid({
		dataSource 	: dsGdUPSSDA,
		autoBind 	: false,
                filterable	: false,
		sortable 	: true,
		resizable 	: true,
		selectable: true,
		rowTemplate : kendo.template($("#templateUPSSDA").html()),
		pageable : {
			pageSizes : [ 10, 20, 30 ],
			messages : {
				display : "Registros {0} - {1} de {2} registros",
				empty : "No hay datos que mostrar",
				page : "P&aacute;gina",
				of : "of {0}",
				itemsPerPage : "registros por p&aacute;gina",
				first : "Go to the first page",
				previous : "Go to the previous page",
				next : "Go to the next page",
				last : "Go to the last page",
				refresh : "Refresh"
			}
		},
		columns : [ {
			width : "40px",
			title : "Sel.",
			filterable : false
		}, {
			field : "CO_CODUPSS",
			width : "40px",
			title : "C&oacute;digo UPSS",
			filterable : false
		}, {
			field : "DE_NOMBRE",
			width : "150px",
			title : "Nombre de UPSS",
			filterable : true
		}, {
			field : "FLAG",
			hidden : true,
			filterable : false
		}, {
			field : "terciarizada",
			width : "150px",
			title : "UPSS Terciarizada",
			filterable : true
		}, {
			field : "RUC",
			width : "150px",
			title : "RUC",
			filterable : true
		}, {
			field : "RAZONSOCIAL",
			width : "150px",
			title : "Razon Social",
			filterable : true
		}, {
			field : "TERCIARIZADA",
			hidden : true
		}, {
			field : "CO_IDUPSS",
			hidden : true
		}, {
			field : "NU_ORDEN",
			hidden : true
		}
		
		],
		dataBound: function(e) {
			$('#gdUPSSDA').find("tr").find("td:first input").each(function (num, item) {
				  if(arrUPPSSDASeleccion.length>0){
					  $(arrUPPSSDASeleccion).each(function(num1,item1){
		                	if($(item).attr('data-idupss')===item1.idUPSS.toString()){
		                		$(item).attr('checked',true);
		                		var select=$(item.parentNode.parentNode.parentNode).find('select');
		                		select.val(item1.TERCIARIZADA===''?'0':item1.TERCIARIZADA);
		                		select.attr('disabled',false);
		                	} 
					  });
				  }else{
					  					  $(item).attr('data-idupss','');
				                          $(item).attr('checked', false);
				                          var select=$(item.parentNode.parentNode.parentNode).find('select');
					                		select.val('0');
					                		select.attr('disabled',true);
				  }
				});
			if(idOpcion===6 ){
				$('select').attr('disabled', true);
				$('input').attr('disabled', true);
			}
        }
    });

    $("#gdActividadesDA").kendoGrid({
        dataSource: dsGdActividadesDA,
        autoBind: false,
        filterable: false,
        sortable: true,
        selectable: true,
        resizable: true,
        rowTemplate: kendo.template($("#templateActividadDA").html()),
        pageable: {
            pageSizes: [10, 20, 30],
            messages: {
                display: "Registros {0} - {1} de {2} registros",
                empty: "No hay datos que mostrar",
                page: "P&aacute;gina",
                of: "of {0}",
                itemsPerPage: "registros por p&aacute;gina",
                first: "Go to the first page",
                previous: "Go to the previous page",
                next: "Go to the next page",
                last: "Go to the last page",
                refresh: "Refresh"
            }
        },
        columns: [{
                width: "10px",
                title: "Sel.",
                filterable: false
            }, {
                field: "CO_IDACTIVIDAD",
                width: "10px",
                title: "C&oacute;digo",
                filterable: false
            }, {
                field: "DE_NOMBRE",
                width: "150px",
                title: "Nombre de Actividad",
                filterable: true
            }, {
                field: "FLAG",
                hidden: true,
                filterable: false
            }
        ],
        dataBound: function () {
            $('#gdActividadesDA').find("tr").find("td:first input").each(function (num, item) {
                $(arrActividadDAdicional).each(function (num1, item1) {
                    if ($(item).attr('data-idact') === item1.toString()) {
                        $(item).attr('checked', true);
                    }
                });
            });

        }
    });
	
	$("#gdEspecialidadDA").kendoGrid({
        dataSource: dsGdEspecialidadSolicitudDA,
        autoBind: false,
        filterable: false,
        sortable: true,
        selectable: true,
        resizable: true,
        rowTemplate: kendo.template($("#templateEspecialidadDA").html()),
        pageable: {
            pageSizes: [10, 20, 30],
            messages: {
                display: "Registros {0} - {1} de {2} registros",
                empty: "No hay datos que mostrar",
                page: "P&aacute;gina",
                of: "of {0}",
                itemsPerPage: "registros por p&aacute;gina",
                first: "Go to the first page",
                previous: "Go to the previous page",
                next: "Go to the next page",
                last: "Go to the last page",
                refresh: "Refresh"
            }
        },
        columns: [{
                width: "15px",
                title: "Sel.",
                filterable: false
            }, {
                field: "COD_ESPECIALIDAD",
                width: "25px",
                title: "C&oacute;digo",
                filterable: false
            }, {
                field: "ESPECIALIDAD",
                width: "150px",
                title: "Nombre de Especialidad",
                filterable: true
            }, {
                field: "COD_COLEGIO",
                width: "70px",
                title: "C&oacute;digo Colegio",
                filterable: true
            }, {
                field: "COLEGIO",  
				width: "100px",				
                title: "Nombre de Colegio",
                filterable: true
            }, {
                field: "FLAG",
                hidden: true,
                filterable: false
            }
        ],
        dataBound: function () {
            $('#gdEspecialidadDA').find("tr").find("td:first input").each(function (num, item) {
                $(arrEspecialidadDAdicional).each(function (num1, item1) {
                    if ($(item).attr('data-idact') === item1.toString()) {
                        $(item).attr('checked', true);
                    }
                });
            });
        }
    });

    setTimeout(function () {
        dsGdCompetencia.read();
        dsGdEntrenamiento.read();
        dsGdCapacitacion.read();
        dsGdActividadesDA.read();
		dsGdEspecialidadSolicitudDA.read(); // agregado por cmic
    }, 1000);

});
/////////////////////-------------------------------------------------

var UPSDatosAdicionales = [];
function CargarUPSDAdicional() {
    UPSDatosAdicionales = [];
	
	var vurl = '';
		
	if ($('#estadoActualizar').val() == 1 ){
		vurl = "ipress.htm?action=selectUPSDA"+"&P_TIPOESTABLE="+$('#cboTipoEstablecimiento').val() + "&idSolici=" + co_idipress;
	}else{
		vurl = "solicitud.htm?action=selectUPSDA"+"&P_TIPOESTABLE="+$('#cboTipoEstablecimiento').val()+"&idSolici="+$('#idSolicitud').val();
	}
	
    $.ajax({
            url : vurl,
            dataType : "json",
            success : function(result) {
                var newArregloUPSS = [];
                UPSTemp = [];
                result.forEach(function(item, numero) {
                    item.FLAG = item.FLAG.toString();
                    UPSDatosAdicionales.push(item);
                    if(item.FLAG === '1' && item.DE_NOMBRE !== undefined){
                        UPSTemp.push(item.CO_IDUPS);
                    }
                });
                arrUPSDAdicional=UPSTemp;
                dsGdUPSDA.read();
            },
            error : function(result) {
            }
    });
}

var UPSSDatosAdicionales = [];
function CargarUPSSDAdicional() {
    UPSSDatosAdicionales=[];
	
	var vurl = '';
		
	if ($('#estadoActualizar').val() == 1 ){
		vurl = "ipress.htm?action=selectUPSSDA"+"&P_TIPOESTABLE="+$('#cboTipoEstablecimiento').val()+"&idSolici=" + co_idipress;
	}else{
		vurl = "solicitud.htm?action=selectUPSSDA"+"&P_TIPOESTABLE="+$('#cboTipoEstablecimiento').val()+"&idSolici="+$('#idSolicitud').val();
	}
	
    $.ajax({
        url : vurl,
        dataType : "json",
        success : function(result) {
            var newArregloUPSS = [];
            UPSSTemp = [];
            result.forEach(function(item, numero) {
                item.RUC            = item.RUC         === undefined ? '' : item.RUC;
                item.RAZONSOCIAL    = item.RAZONSOCIAL === undefined ? '' : item.RAZONSOCIAL;
                item.TERCIARIZADA   = item.TERCIARIZADA.toString();
                item.FLAG           = item.FLAG.toString();
                console.log('item.TERCIARIZADA  '+item.TERCIARIZADA);
                UPSSDatosAdicionales.push(item);
                if(item.FLAG === '1'){
                    item.select = true;
                    item.idUPSS = item.CO_IDUPSS;
                    item.check  = true;
                    UPSSTemp.push(item);
                }else{
                    item.check  = false;
                }
            });
            arrUPPSSDASeleccion=UPSSTemp;
            dsGdUPSSDA.read();
        },
        error : function(result) {
        }
    });
}

function retornaUPSDAdicional() {
    return UPSDatosAdicionales;
}

function retornaUPSSDAdicional() {
    return UPSSDatosAdicionales;
}

function ExportarRRHH(valido) {
    //if(rrhhListaValidos.length!==0){
        rrhhListaValidos.forEach(function (item,num){
                  item.TODO={};
                });
        var jsonString;
        if(valido){
            jsonString=JSON.stringify(rrhhListaValidos);
            if(rrhhListaValidos.length===0){
                LanzarPopGenerico('Informativo', 'No existen datos que exportar.');
            }else{
                setDataSession(jsonString, 'solicitud.htm');//default-js.jsp 
                //location.href='solicitud.htm?action=GeneraExcel&arregloRRHH='+jsonString;
                $('#hdnarregloRRHH').val(JSON.stringify(rrhhListaValidos));
                $('#frmDescargaExcel').submit();
            }
        }else{
                jsonString=JSON.stringify(rrhhListaNoValidos);
                if(rrhhListaNoValidos.length===0){
                LanzarPopGenerico('Informativo', 'No existen datos que exportar.');
            }else{
                setDataSession(jsonString, 'solicitud.htm');//default-js.jsp 
		location.href='solicitud.htm?action=GeneraExcel&arregloRRHH='+jsonString;
                $('#hdnarregloRRHH').val(JSON.stringify(rrhhListaNoValidos));
                $('#frmDescargaExcel').submit();				 
            }
        }
    /*}else{
            LanzarPopGenerico('Informativo', 'No existen datos que exportar.');
    }*/
}

function RetornaValorObj(obj, campo) {
    var valorDevuelto = '';
    for (var prop in obj) {
        if (campo === prop) {
            valorDevuelto = eval("valorDevuelto=obj." + prop);
            return valorDevuelto;
            ;
        }
    }
}

var idExcelRRHH;

function EliminarRRHHConfirm(){
    rrhhListaValidos = Eliminacion(rrhhListaValidos, 'NRO', idExcelRRHH);
    dsGdRRHH.read();
}

function EliminarRRHH(val) {
    idExcelRRHH=val;
    MostrarPopGenerico('<label>¿Está seguro que desea eliminar el personal seleccionado?<label>',EliminarRRHHConfirm,null);
}



var personaRRHHxls;
var rrhhListaValidos = [];
function verRRHH(val){
	ActualizarRRHH(val);
			
	$('#txtBuscarColProfRRHHH').attr('disabled', false);
    $('#txtBuscarEspRRHH').attr('disabled', false);
    $('#txtBuscarCompRRHH').attr('disabled', false);
    $('#txtBuscarCapRRHH').attr('disabled', false);
    $('#txtBuscarEntRRHH').attr('disabled', false);
    $('#txtBuscarColProfRRHHH').attr('disabled', false);
    $('#txtBuscarUPSSRRHH').attr('disabled', false);
	
	$('#btnRegresarRRHH').attr('disabled', false);
	
	if ( $('#btnRegresarRRHH').attr('disabled') == 'disabled' ){
		$('#btnRegresarRRHH').attr('disabled', false);
	}
	
	$('#txtACasadaExcel').attr('disabled', true);
		
}
function ActualizarRRHH(val) {
	flagBotonRegistro=false;
try {
    arrCompetencia = [];
    CargaObjUPSS();
	
    $('#li-section-registro-individual').addClass('disabled').addClass('disabledTab');
	if ($('#btnModificarRRHH')[0] != undefined){
		$('#btnModificarRRHH').val('MODIFICAR');
	}
    	
    personaRRHHxls.push({});
    personaRRHHxls = SeleccionLike(rrhhListaValidos, 'NRO', val);
    $('#cboTipoDocExcel').val(personaRRHHxls[0].TIPO_DOC);
    ValidarPais4();
    $('#txtNroDocExcel').val(personaRRHHxls[0].NUM_DOCU);
    docConsultado=personaRRHHxls[0].NUM_DOCU;//SETEAR DOC PARA VERIFICAR SI ES EL MISMO QUE SE EVALUA
    $('#cboPaisExcel').val(personaRRHHxls[0].PAIS_PROC);
//    $('#txtFecNacExcel').val(personaRRHHxls[0].DIA_NAC + "/" + personaRRHHxls[0].MES_NAC + "/" + personaRRHHxls[0].ANIO_NAC);
    $('#txtFecNacExcel').val(personaRRHHxls[0].DIA_NAC);
    $('#CboSexoExcel').val(personaRRHHxls[0].SEXO);
    $('#txtAPaternoExcel').val(personaRRHHxls[0].APELLIDO_PAT);
    $('#txtAMaternoExcel').val(personaRRHHxls[0].APELLIDO_MAT);
    $('#txtACasadaExcel').val(personaRRHHxls[0].APELLIDO_CAS);
    $('#txtNombresExcel').val(personaRRHHxls[0].NOMBRES);
    
    if(personaRRHHxls[0].TIPO_DOC===1){
    	$('#txtAPaternoExcel').attr('disabled',true);
    	$('#txtNombresExcel').attr('disabled',true);
    	$('#txtAMaternoExcel').attr('disabled',true);    	
    	$('#txtACasadaExcel').attr('disabled',true)   
		// [BIT] CMIC 03/11/2015
    }else{
    	$('#txtAPaternoExcel').attr('disabled',false);
    	$('#txtNombresExcel').attr('disabled',false);
    	$('#txtAMaternoExcel').attr('disabled',false);
    	if(personaRRHHxls[0].SEXO==='1'){
    		$('#txtACasadaExcel').attr('disabled',true);
    	}else if(personaRRHHxls[0].SEXO==='2'){
    		$('#txtACasadaExcel').attr('disabled',false);
    	}
    }

        ResetearGrillas();
        if (personaRRHHxls[0].COLEGIO !== undefined) {
            try{
                SeleccionarItemsColProf((personaRRHHxls[0].COLEGIO).split(','));
            }catch(e){
                console.log('error en personaRRHHxls COLEGIO '+e);    
            }		
        }

        if (personaRRHHxls[0].COLEGIODETALLE !== undefined){
            try{
                SeleccionarDetColegio((personaRRHHxls[0].COLEGIODETALLE).split(','));
            }catch(e){
                console.log('error en personaRRHHxls COLEGIODETALLE '+e);    
            }
        }

        if (personaRRHHxls[0].ESPECIALIDAD !== undefined){
            try{
                SeleccionarItemsEspecialidad((personaRRHHxls[0].COLEGIO).split(','), (personaRRHHxls[0].ESPECIALIDAD).split(','), personaRRHHxls[0]);
            }catch(e){
                console.log('error en personaRRHHxls ESPECIALIDAD '+e);    
            }		
        }else{		
            SeleccionarItemsEspecialidad((personaRRHHxls[0].COLEGIO).split(','), [] , personaRRHHxls[0]);
        }

        if(personaRRHHxls[0].ESPECIALIDADDETALLE !== undefined){
            try{
                SeleccionarDetEspec((personaRRHHxls[0].ESPECIALIDADDETALLE).split(','));
            }catch(e){
                console.log('error en personaRRHHxls ESPECIALIDADDETALLE '+e);
            } 
        }else{
            SeleccionarDetEspec([]);
        }

        if(personaRRHHxls[0].COMPETENCIA !== undefined){
            try{
                SeleccionarItemsCompetencia(personaRRHHxls[0].COMPETENCIA === '' ? [] : (personaRRHHxls[0].COMPETENCIA).split(','));
            }catch(e){
                console.log('error en personaRRHHxls COMPETENCIA '+e);
            }
        }

        if(personaRRHHxls[0].CAPACITACION !== undefined){
            try{
                SeleccionarItemsCapacitacion(personaRRHHxls[0].CAPACITACION === '' ? [] : (personaRRHHxls[0].CAPACITACION).split(','));
            }catch(e){
                console.log('error en personaRRHHxls CAPACITACION '+e);
            }    	
        }

        if(personaRRHHxls[0].ENTRENAMIENTO !== undefined){
            try{
                SeleccionarItemsEntrenamiento(personaRRHHxls[0].ENTRENAMIENTO === '' ? [] : (personaRRHHxls[0].ENTRENAMIENTO).split(','));	
            }catch(e){
                console.log('error en personaRRHHxls ENTRENAMIENTO '+e);
            }    	
        }

        if(personaRRHHxls[0].UPSS !== undefined){
            try{
                SeleccionarItemsUPSS((personaRRHHxls[0].UPSS).split(','));
            }catch(e){
                console.log('error en personaRRHHxls UPSS '+e);
            }
        }

        if(personaRRHHxls[0].UPSSDETALLE){
            try{
                SeleccionarDetUPSS((personaRRHHxls[0].UPSSDETALLE).split(','));
            }catch(e){
                console.log('error en personaRRHHxls UPSSDETALLE '+e);
            }
        }    

        //TEMPORAL
        setTimeout(function(){ $('#txtBuscarColProfRRHHH').val('').trigger('keyup');}, 1000);
        setTimeout(function(){ $('#txtBuscarEspRRHH').val('').trigger('keyup');}, 1000);
        setTimeout(function(){ $('#txtBuscarCompRRHH').val('').trigger('keyup');}, 1000);
        setTimeout(function(){ $('#txtBuscarCapRRHH').val('').trigger('keyup');}, 1000);
        setTimeout(function(){ $('#txtBuscarEntRRHH').val('').trigger('keyup');}, 1000);
        setTimeout(function(){ $('#txtBuscarColProfRRHHH').val('').trigger('keyup');}, 1000);
        setTimeout(function(){ $('#txtBuscarUPSSRRHH').val('').trigger('keyup');}, 1000);

        $('#li-section-registro-individual a[href="#section-registro-individual"]').tab('show');
    } catch (e) {
            console.log('ActualizarRRHH '+e);
    }
}

function ResetearGrillas() {

    if (objtColProf !== undefined) {
        objtColProf.forEach(function (item, num) {
            item.FLAG = '0';
        });
    }

    if (objtEspec !== undefined) {
        objtEspec.forEach(function (item, num) {
            item.FLAG = '0';
        });
    }

    if (objtCompetencia !== undefined) {
        objtCompetencia.forEach(function (item, num) {
            item.FLAG = '0';
        });
    }

    if (objtCapacitacion !== undefined) {
        objtCapacitacion.forEach(function (item, num) {
            item.FLAG = '0';
        });
    }

    if (objtEntrenamiento !== undefined) {
        objtEntrenamiento.forEach(function (item, num) {
            item.FLAG = '0';
        });
    }

    if (objtUPSS !== undefined) {
        objtUPSS.forEach(function (item, num) {
            item.FLAG = '0';
        });
    }

    dsGdColegioProfesional.read();
    if (objtEspec !== undefined) {
        dsGdEspecialidad.read();
    }
    dsGdCompetencia.read();
    dsGdCapacitacion.read();
    dsGdEntrenamiento.read();
    if (objtUPSS !== undefined) {
        dsGdUPSS.read();
    }
}

function SeleccionarItemsUPSS(arr) {
    var arrTemp = [];
    arr.forEach(function (element2, index2, array2) {
        arrTemp.push(parseInt(element2));
    });
    arr = arrTemp;
    arrUPSS = arr;
    var arrTemp = [];

    if (objtUPSS !== undefined) {
        objtUPSS.forEach(function (element, index, array) {
            arr.forEach(function (element1, index1, array1) {
                if (element.CO_IDUPSS === parseInt(element1)) {
                    element.FLAG = '1';
                }
            });
            arrTemp.push(element);
        });
        objtUPSS = arrTemp;
        dsGdUPSS.read();
    }
}

function SeleccionarItemsColProf(arr) {
    var arrTemp = [];
    arr.forEach(function (element2, index2, array2) {
        arrTemp.push(parseInt(element2));
    });
    arr = arrTemp;
    arrColegio = arr;
    var arrTemp = [];
    objtColProf.forEach(function (element, index, array) {
        arr.forEach(function (element1, index1, array1) {
            if (element.CO_IDCOLEGPROF === parseInt(element1)) {
                element.FLAG = '1';
            }
        });
        arrTemp.push(element);
    });
    objtColProf = arrTemp;
    dsGdColegioProfesional.read();
}

function SeleccionarItemsCompetencia(arr) {
    if (arr.length > 0) {
        var arrTemp = [];
        arr.forEach(function (element2, index2, array2) {
            arrTemp.push(parseInt(element2));
            if (arrCompetencia.indexOf(parseInt(element2)) === (-1)) {
                arrCompetencia.push(parseInt(element2));
            }
        });
        arr = arrTemp;
        arrTemp = [];
        //COMPETENCIA
        objtCompetencia.forEach(function (element, index, array) {
            arr.forEach(function (element1, index1, array1) {
                if (element.CO_IDCOMPETENCIAS === parseInt(element1)) {
                    element.FLAG = '1';
                }
            });
            arrTemp.push(element);
        });
        objtCompetencia = arrTemp;
        dsGdCompetencia.read();
    } else {
        dsGdCompetencia.read();
    }
}


function SeleccionarItemsCapacitacion(arr) {
    if (arr.length > 0) {
        var arrTemp = [];
        arr.forEach(function (element2, index2, array2) {
            arrTemp.push(parseInt(element2));
            if (arrCompetencia.indexOf(parseInt(element2)) === (-1)) {
                arrCompetencia.push(parseInt(element2));
            }

        });
        arr = arrTemp;
        arrTemp = [];
        objtCapacitacion.forEach(function (element, index, array) {
            arr.forEach(function (element1, index1, array1) {
                if (element.CO_IDCOMPETENCIAS === parseInt(element1)) {
                    element.FLAG = '1';
                }
            });
            arrTemp.push(element);
        });
        objtCapacitacion = arrTemp;
        dsGdCapacitacion.read();
    } else {
        dsGdCapacitacion.read();
    }
}

function SeleccionarItemsEntrenamiento(arr) {
    if (arr.length > 0) {
        var arrTemp = [];
        arr.forEach(function (element2, index2, array2) {
            arrTemp.push(parseInt(element2));
            if (arrCompetencia.indexOf(parseInt(element2)) === (-1)) {
                arrCompetencia.push(parseInt(element2));
            }
        });
        arr = arrTemp;
        //CAPACITACION
        arrTemp = [];
        objtEntrenamiento.forEach(function (element, index, array) {
            arr.forEach(function (element1, index1, array1) {
                if (element.CO_IDCOMPETENCIAS === parseInt(element1)) {
                    element.FLAG = '1';
                }
            });
            arrTemp.push(element);
        });
        objtEntrenamiento = arrTemp;
        dsGdEntrenamiento.read();
    } else {
        dsGdEntrenamiento.read();
    }
}

function SeleccionarItemsEspecialidad(arr, arrE, arrRNE) {
    
	if (arr.length === 0 || arr[0] === "") {
        return;
    }
	
    var arrTemp = [];
    arr.forEach(function (element2, index2, array2) {
        arrTemp.push(parseInt(element2));
    });
    arr = arrTemp;
    arrEspecialidad = arrE;
    var arrTemp = [];
    var contRNE = 0;
    if (arr.length > 0) {
        $.ajax({
            url: "solicitud.htm?action=selectEspecialidadColegio&colegios=" + ( arr.length > 0 ? arr.toString() : '' ),
            dataType: "json",
            success: function (result) {
                objtEspec = result;
                objtEspec.forEach(function (element, index, array) {
                    arrE.forEach(function (element1, index1, array1) {
                        var ide = 0;
                        var ide1 = 0;
                        ide = element.CO_IDESPECIALIDAD;
                        ide1 = parseInt(element1);
                        element.RNU = '';
                        if (ide === ide1) {
                            element.FLAG = '1';
                            if(typeof arrRNE.ObjEspSel[contRNE] === 'undefined'){
                            	element.RNE = '';
                            }else{
                            	element.RNE = arrRNE.ObjEspSel[contRNE].RNE.split(',')[0];//arrRNE.RNE.split(',')[contRNE];
                            }
                            contRNE++;
                        }
                    });
                    arrTemp.push(element);
                });
                objtEspec = arrTemp;
                dsGdEspecialidad.read();
            },
            error: function (result) {
            }
        });
    }
}

function SeleccionarItemsEspec(arr) {
    var arrTemp = [];
    arr.forEach(function (element2, index2, array2) {
        arrTemp.push(parseInt(element2));
    });
    arr = arrTemp;
    arrEspecialidad = arr;
    var arrTemp = [];
    objtEspec.forEach(function (element, index, array) {
        arr.forEach(function (element1, index1, array1) {
            if (element.CO_IDESPECIALIDAD === parseInt(element1)) {
                element.FLAG = '1';
            }
        });
        arrTemp.push(element);
    });
    objtEspec = arrTemp;
    dsGdEspecialidad.read();
}
function SeleccionarDetUPSS(arr) {
    var arrTemp = [];
    arr.forEach(function (element2, index2, array2) {
        arrTemp.push(element2);
    });
    arr = arrTemp;
    arrUPSSDet = arr;
}

function SeleccionarDetColegio(arr) {
    var arrTemp = [];
    arr.forEach(function (element2, index2, array2) {
        arrTemp.push(element2);
    });
    arr = arrTemp;
    arrColegioDet = arr;
}

function SeleccionarDetEspec(arr) {
    var arrTemp = [];
    arr.forEach(function (element2, index2, array2) {
        arrTemp.push(element2);
    });
    arr = arrTemp;
    arrEspecialidadDet = arr;
}

function RetornaDS() {
    return rrhhListaValidos;
}

function RetornaDSNoValido() {
    return rrhhListaNoValidos;
}

function Eliminacion(arr, campo, valor) {
    arr.forEach(function (element, index, array) {
        if (element[campo] === valor) {
            arr.splice(index, 1);
        }
    });
    return arr;
}
function SeleccionLike(arr, campo, valor) {
    var newArr = [];
    arr.forEach(function (element, index, array) {
        if (element[campo] === valor) {
            newArr.push(element);
        }
    });
    return newArr;
}

//GRILLA DE RRHH
function MostrarPopRRHHNoValidos() {
    dsGdRRHHNoValido.read();
    $('#confirmCambioClave').modal({
        backdrop: 'static',
        keyboard: false
    }).one('click', '[data-value]', function (e) {
        if ($(this).data('value')) {

        }
    });
}

function LanzarPopGenerico(titulo, mensaje) {
    $('#lblTituloGenerico').text(titulo);
    $('#lblMensajeGenerico').text(mensaje);

    $('#popGenerico').modal({
        backdrop: 'static',
        keyboard: false
    }).one('click', '[data-value]', function (e) {
        if ($(this).data('value')) {

        }
    });
}
function ValidaImprimirPDF() {

    var flagValid = ValidarFormularios();
    var resultado = true;
    if (!$('#frmDatosPropietario').valid()) {
        resultado = false;
    }

    if ($('#txtNroDocRRLL').val() !== '') {
        if (!$('#frmDatosRRLL').valid()) {
            resultado = false;
        }
    }

    if ($('#cboTipoEstablecimiento').val() !== '') {
        if (arrClasEst.length === 0) {
            LanzarPopGenerico('Informativo', '(Datos de establecimiento) Seleccione por lo menos alguna clasificación');
            resultado = false;
        }
        if (!$('#frmDatosEstablecimiento').valid()) {
            resultado = false;
        }
    }

    if ($('#txtNroDocRAS').val() !== '') {
        if (!$('#frmDatosRAS').valid()) {
            resultado = false;
        }
    }

    if (!$('#frmDatosGrlAdicional').valid() && (arrUPSDAdicional.length !== 0 || /*arrActividadDAdicional.length !== 0 || */arrEspecialidadDAdicional.length !== 0 )) {
        console.log('formulario no valido');
        resultado = false;

    } else {
        if ($('#frmDatosGrlAdicional').valid() && (arrUPSDAdicional.length === 0 || arrUPPSSDASeleccion.length === 0 || /*arrActividadDAdicional.length === 0 || */arrEspecialidadDAdicional.length === 0 )) {
            resultado = false;
        }
    }

    if (arrUPPSSDASeleccion.length !== 0) {
        var flagTerce = false;
        arrUPPSSDASeleccion.forEach(function (item, num) {
            if (!item.select) {
                flagTerce = true;
                LanzarPopGenerico('Informativo', '(Datos Adicionales) Debe indicar si la UPSS es terciarizada');
                resultado = false;
            }
        });

        if (flagTerce) {
            resultado = false;
        }
    }

    if (flagValid) {
        var contadorCompleto = 0;
        var arrModulosValidos = [];
		beginCargando();
        $.getJSON('solicitud.htm?action=selectUPSSEstado&solIPRESS=' + $('#idSolicitudIPRESS').val(), function (json) {
			endCargando();
            arrModulosValidos = json;
            console.log(json);
            var tablaReqVal = "<label style=" + '"color:red"' + ">Todos los modulos deben estar en estado completo</label><br><br>";
            tablaReqVal += '<ul>';
            arrModulosValidos.forEach(function (item, num) {
                console.log(item);
                console.log(item.IN_FLAGCOMPLETO1);
                tablaReqVal += '<li><div class="col-md-12">  <span href="#" class="btn btn-xs ' + (item.CO_CODMODULO === 'RR' ? ' btn-success ' : (item.IN_FLAGCOMPLETO1 === '0' ? ' btn-default ' : (item.IN_FLAGCOMPLETO1 === '1' ? ' btn-success ' : ' btn-warning '))) + ' btn-circle" ><i class="glyphicon glyphicon-pencil"></i></span> ' + item.DE_NOMBRE + '-' + item.UPSS + (item.CO_CODMODULO === 'RR' ? '(Completo )' : (item.IN_FLAGCOMPLETO1 === '0' ? '(Sin información )' : (item.IN_FLAGCOMPLETO1 === '1' ? '(Completo )' : '(Falta Completar )'))) + ' </div></li>';
                if (item.CO_CODMODULO !== 'RR' && (item.IN_FLAGCOMPLETO1 === '0' || item.IN_FLAGCOMPLETO1 === '2')) {
                    contadorCompleto++;
                }

            });
            tablaReqVal += '</ul>';
            tablaReqVal += '<br/><br/><br/><br/><br/><br/>';
            tablaReqVal += '<div class="row"><div class="col-md-4"><a href="#" class="btn btn-xs btn-success btn-circle"><i class="glyphicon glyphicon-ok"></i></a><br>Completo</div><div class="col-md-4"><a href="#" class="btn btn-xs btn-warning btn-circle"><i class="glyphicon glyphicon-pencil"></i></a><br>Falta Completar</div><div class="col-md-4"><a href="#" class="btn btn-xs btn-default btn-circle"><i class="glyphicon glyphicon-pencil"></i></a><br>Sin	información	</div></div>';
            if (contadorCompleto > 0) {
                LanzarPopGenerico('Informativo', '');
                $('#lblMensajeGenerico').append(tablaReqVal);
                return;
            }
            if (ValidarFormularios()) {

                $('#confirmEnviarSolicitud').modal({
                    backdrop: 'static',
                    keyboard: false
                }).one('click', '[data-value]',
                        function (e) {
                    if ($(this).data('value') === 1) {
                        beginCargando();
			
                        $.ajax({
                            url: "solicitudActualizar.htm?action=actualizarTarea&idSolicitud=" + $('#idSolicitud').val(),
                            dataType: "json",
							async : false,
                            success: function (result) {
                                endCargando();                                
                            },
                            error: function (result) {
                            }
                        });
						
						imprimirPDF();
			
                    } else {
                        return;
                    }
                });
            } else {
                LanzarPopGenerico('Informativo', 'Por favor verifique las secciones erróneas');
            }
        });
    } else {
        LanzarPopGenerico('Informativo', 'Por favor verifique las secciones erróneas');
    }
}

function imprimirPDF() {
    /*
    var nameCbo = 'cboIPAutoridadSanit';
    var direccionEst = $('#txtUrSOL').val() + " " + 
            document.getElementById('cboVia').options[document.getElementById('cboVia').selectedIndex].text + " " +
            $('#txtNroSOL').val() + " " +
            $('#txtNroPiso').val() + " " +
            $('#txtNroDpto').val() + " " +
            $('#txtNroInt').val() + " " +
            $('#txtMzSOL').val() + " " +
            $('#txtLtSOL').val() + " " +
            $('#txtKlSOL').val() + " " +
            $('#txtUrSOL').val() + " " +
	
	    document.getElementById('cboDepartamento').options[document.getElementById('cboDepartamento').selectedIndex].text + " " +
            document.getElementById('cboProvincia').options[document.getElementById('cboProvincia').selectedIndex].text + " " +
            document.getElementById('cboDistrito').options[document.getElementById('cboDistrito').selectedIndex].text + " "; console.log(direccionEst);
	
            document.getElementById('cboDepartamentoDA').options[document.getElementById('cboDepartamentoDA').selectedIndex].text + " " +
            document.getElementById('cboProvinciaDA').options[document.getElementById('cboProvinciaDA').selectedIndex].text + " " +
            document.getElementById('cboDistritoDA').options[document.getElementById('cboDistritoDA').selectedIndex].text + " "; console.log(direccionEst);

            document.getElementById('cboDepartamento').options[document.getElementById('cboDepartamento').selectedIndex].text + " " +
            document.getElementById('cboProvincia').options[document.getElementById('cboProvincia').selectedIndex].text + " " +
            document.getElementById('cboDistrito').options[document.getElementById('cboDistrito').selectedIndex].text + " "; console.log(direccionEst);
    */
	
	
			
	$('#ifrReporte').attr('src','solicitudActualizar.htm?action=imprimirPDF&idSolicitud=' + $('#idSolicitud').val() + '&idproceso=' + $('#idProceso').val() );
                
    $('#popReporte').modal({
        backdrop: 'static', keyboard: false
    }).one('click', '[data-value]', function (e) {
        if ($(this).data('value')) {
            
        }
    });

}


function regresarRRHH(){
	$('#li-section-lista-recursos-humano a').click();
}

function MostrarPopRRHHValidos() {
    dsGdRRHH.read();
}

function CargarArchivoExcel(nameFile) {
    var data = new FormData();
    var files = $("#" + nameFile).get(0).files;
    if (files.length > 0) {
        $.each(files, function (key, value) {
            data.append("UploadedImage", files[key]);
        });
    }

    $.ajax({
        url: "solicitud.htm?action=evaluarExcel",
        type: "POST",
        contentType: false,
        processData: false,
        data: data,
        success: function (result) {

        },
        error: function (result) {

        }
    });
}

function Descargar(f, fo) {
    try {
        if (f === 'undefined') {
            return false;
        }

        if (f !== '') {
            f = f.replace(/C:\\fakepath\\/i, '');

            $('#fileName').val(f);
            $('#fileNameOriginal').val(fo);
			
			$('#frmDescargarArchivo input[name="action"]').attr('disabled',false);
			$('#frmDescargarArchivo input[name="fileName"]').attr('disabled',false);
			$('#frmDescargarArchivo input[name="fileNameOriginal"]').attr('disabled',false);
			
            $('#frmDescargarArchivo').submit();
        }
    } catch (e) {
        console.log('archivo no fue encontrado en el servidor' + e);
    }

}
//ARREGLOS TEMPORALES PARA GUARDAR DETALLE E ITEMS DE UPPSS
var arrUPSS = [];
var arrUPSSDet = [];
var objUps;
var arrColegio = [];
var arrColegioDet = [];
var objColegio;
var arrEspecialidad = [];
var arrEspecialidadDet = [];
var arrCompetencia = [];
var objtEspecialidad;
var objtCompetencia;


var objtClasEst;
function SeleccionaUPSS(chk, val) {
    objUps = SeleccionLike(objtUPSS, 'CO_IDUPSS', val);
    if ($(chk).is(":checked")) {
        arrUPSS.push(val);
        arrUPSSDet.push(objUps[0].DE_NOMBRE);
    } else {
        arrUPSS = EliminarASimple(arrUPSS, val);
        arrUPSSDet = EliminarASimple(arrUPSSDet, objUps[0].DE_NOMBRE);
    }
}

function SeleccionaColProf(chk, val) {
    objColegio = SeleccionLike(objtColProf, 'CO_IDCOLEGPROF', val);
    if ($(chk).is(":checked")) {
        arrColegio.push(val);
        arrColegioDet.push(objColegio[0].DE_DESCRIPCION);
    } else {
        arrColegio = EliminarASimple(arrColegio, val);
        arrColegioDet = EliminarASimple(arrColegioDet, objColegio[0].DE_DESCRIPCION);
    }
    CargarEspecialidadColegio(arrColegio);
}

function CargarEspecialidadColegio(arr) {
    if (arrColegio.length >= 0) {
		
        $.ajax({
            url: "solicitud.htm?action=selectEspecialidadColegio&colegios=" + ( arrColegio.length >= 0 ? arr.toString() : '' ),
            dataType: "json",
			async : false,
            success: function (result) {
				
				
				
                arrEspecialidad = [];
                arrEspecialidadDet = [];
				// [BIT] CMIC 21/10/2015				
				var objtEspecAux = objtEspec;    
				objtEspec = result;

				$(objtEspecAux).each(function(index, object){ 
					if(object.FLAG === '1'){ 
						$(objtEspec).each(function(index1, object1){
							if (object.CO_IDESPECIALIDAD == object1.CO_IDESPECIALIDAD){
								object1.FLAG = object.FLAG;
								object1.RNE  = object.RNE;
								
								arrEspecialidad.push(object.CO_IDESPECIALIDAD);
								arrEspecialidadDet.push(object.DE_DESCRIPCION);
							}
						});
					}
				});
								
                dsGdEspecialidad.page(1);
                dsGdEspecialidad.read();
            },
            error: function (result) {
				
            }
        });
    }
}

function SeleccionaEspecialidad(chk, val) {
    objtEspecialidad = SeleccionLike(objtEspec, 'CO_IDESPECIALIDAD', val);
    var objtEspecialidad1 = SeleccionLike(objtEspec, 'CO_IDESPECIALIDAD', val);
    if ($(chk).is(":checked")) {
        objtEspecialidad = SeleccionLike(objtEspec, 'CO_IDESPECIALIDAD', val);
        objtEspecialidad[0].RNE = '';
        objtEspecialidad[0].FLAG = '1';
        objtEspec = Eliminacion(objtEspec, 'CO_IDESPECIALIDAD', val);
        objtEspec.push(objtEspecialidad[0]);
        
        $(chk.parentNode.parentNode.parentNode).find('input')[1].disabled = false;
        if (arrEspecialidad.indexOf(val) === (-1)) {
            arrEspecialidad.push(val.toString());
            arrEspecialidadDet.push(objtEspecialidad[0].DE_DESCRIPCION);
        }
    } else {		
    	objtEspecialidad = Eliminacion(objtEspecialidad, 'CO_IDESPECIALIDAD', val);
        $(chk.parentNode.parentNode.parentNode).find('input')[1].disabled = true;
        $(chk.parentNode.parentNode.parentNode).find('input')[1].value = '';
        arrEspecialidad = EliminarASimple(arrEspecialidad, val.toString());
        if(objtEspecialidad.length!==0){
            arrEspecialidadDet = EliminarASimple(arrEspecialidadDet, objtEspecialidad[0].DE_DESCRIPCION);
        }

        arrObjEsp = Eliminacion(arrObjEsp, 'CO_IDESPECIALIDAD', val);
		
	objtEspecialidad1[0].RNE = '';
        objtEspecialidad1[0].FLAG = '';
        objtEspec = Eliminacion(objtEspec, 'CO_IDESPECIALIDAD', val);
        objtEspec.push(objtEspecialidad1[0]);
    }
}

var arrObjEsp=[];
function IngresaRNEEspecialidad(inp, val) {
    console.log(inp);
    objtEspecialidad = SeleccionLike(objtEspec, 'CO_IDESPECIALIDAD', val);
    objtEspecialidad[0].RNE = inp.value;
    objtEspecialidad[0].FLAG = '1';
    objtEspec = Eliminacion(objtEspec, 'CO_IDESPECIALIDAD', val);
    objtEspec.push(objtEspecialidad[0]);
    arrObjEsp.push(objtEspecialidad[0]);
}

var arrDetCompetencia = [];
var arrDetCapacitacion = [];
var arrDetEntrenamiento = [];
function SeleccionaCompetencia(chk, val) {

    if ($(chk).is(":checked")) {
        if (arrCompetencia.indexOf(val) === (-1)) {
            objtCompTemp = SeleccionLike(objtCompetencia, 'CO_IDCOMPETENCIAS', val);
            if (objtCompTemp.length !== 0) {
                arrDetCompetencia.push(objtCompTemp[0].DE_DESCRIPCION);
            } else {
                objtCompTemp = SeleccionLike(objtCapacitacion, 'CO_IDCOMPETENCIAS', val);
                if (objtCompTemp.length !== 0) {
                    arrDetCapacitacion.push(objtCompTemp[0].DE_DESCRIPCION);
                } else {
                    objtCompTemp = SeleccionLike(objtEntrenamiento, 'CO_IDCOMPETENCIAS', val);
                    if (objtCompTemp.length !== 0) {
                        arrDetEntrenamiento.push(objtCompTemp[0].DE_DESCRIPCION);
                    }
                }
            }
            arrCompetencia.push(val);
            //arrDetCompetencia.push(objtCompTemp[0].DE_DESCRIPCION);
        }
    } else {
        objtCompTemp = SeleccionLike(objtCompetencia, 'CO_IDCOMPETENCIAS', val);
        if (objtCompTemp.length !== 0) {
            arrDetCompetencia = EliminarASimple(arrDetCompetencia, objtCompTemp[0].DE_DESCRIPCION);
        } else {
            objtCompTemp = SeleccionLike(objtCapacitacion, 'CO_IDCOMPETENCIAS', val);
            if (objtCompTemp.length !== 0) {
                arrDetCapacitacion = EliminarASimple(arrDetCapacitacion, objtCompTemp[0].DE_DESCRIPCION);
            } else {
                objtCompTemp = SeleccionLike(objtEntrenamiento, 'CO_IDCOMPETENCIAS', val);
                if (objtCompTemp.length !== 0) {
                    arrDetEntrenamiento = EliminarASimple(arrDetEntrenamiento, objtCompTemp[0].DE_DESCRIPCION);
                }
            }
        }
        arrCompetencia = EliminarASimple(arrCompetencia, val);
        //arrDetCompetencia = EliminarASimple(arrDetCompetencia, objtCompTemp[0].DE_DESCRIPCION);
    }
}

function SeleccionaCompetenciaCapacitacion(chk, val) {
    objtCompTemp = SeleccionLike(objtCompetencia, 'CO_IDCOMPETENCIAS', val);
    if ($(chk).is(":checked")) {
        if (arrCompetencia.indexOf(val) === (-1)) {
            arrCompetencia.push(val);
        }
    } else {
        arrCompetencia = EliminarASimple(arrCompetencia, val);
    }
}

function SeleccionaCompetenciaEntrenamiento(chk, val) {
    objtCompTemp = SeleccionLike(objtCompetencia, 'CO_IDCOMPETENCIAS', val);
    if ($(chk).is(":checked")) {
        if (arrCompetencia.indexOf(val) === (-1)) {
            arrCompetencia.push(val);
        }
    } else {
        arrCompetencia = EliminarASimple(arrCompetencia, val);
    }
}

var ingresoEditar = 0;
var seleccionEstablecimiento=0;
function cargarSegunTipoEstablecimiento(tipo){
    if(tipo===0){
        console.log('item aut sanit no valido');
        return false;
    }
    if (tipo === "") return false;
    seleccionEstablecimiento++;
    if(seleccionEstablecimiento>1){

        if (tipo !== null && tipo === 3){
            $('#popConfirmaAS_msg').html('Si modifica el tipo establecimiento de la lista,se perdera la informaci&oacute;n de clasificaci&oacute;n, las UPS , UPSS y sus requisitos relacionados.');
        }else{
            $('#popConfirmaAS_msg').html('Si modifica el tipo establecimiento de la lista,se perdera la informaci&oacute;n de la clasificaci&oacute;n');						
        }

        $('#popConfirmaAS').modal({
            backdrop : 'static',
            keyboard : false
        }).one('click', '[data-value]', function(e) {
            if ($(this).data('value') === 1) {

                // [BIT] CMIC 06102015
                deleteEstablecimiento(tipo);
                MostrarEstablecimiento(tipo,$('#idSolicitud').val());
                if (tipo === 3){
                    arrUPPSSDASeleccion=[];
                    arrUPSDAdicional=[];

                    UPSSDatosAdicionales=[];
                    UPSDatosAdicionales=[];

                    $('#txtBuscarClasificacionEstablecimiento').val('');
                    $('#txtBuscarUPSDA').val('');
                    $('#txtBuscarUPSSDA').val('');
                    $('#txtBuscarActDA').val('');

                    $('#txtHorarioAtenADODA').val('');
                    $('#chkL').prop(  "checked", false);
                    $('#chkM').prop(  "checked", false);
                    $('#chkMi').prop( "checked", false);
                    $('#chkJ').prop(  "checked", false);
                    $('#chkV').prop(  "checked", false);
                    $('#chkS').prop(  "checked", false);
                    $('#chkD').prop(  "checked", false);

                    $('#divHoraAdo').hide();

                    $('#gdClasificacion').find("tr").find("td:first input").attr('data-idclasest','2');
                    $('#gdClasificacion').find("tr").find("td:first input").attr('checked',false);

                    $('#gdUPSDA').find("tr").find("td:first input").attr('data-idups','2');
                    $('#gdUPSDA').find("tr").find("td:first input").attr('checked',false);
                    $('#gdUPSSDA').find("tr").find("td:first input").attr('data-idupss','2');
                    $('#gdUPSSDA').find("tr").find("td:first input").attr('checked',false);
                    $('#gdUPSSDA').find("tr").find("select").val('0');
                }

                CargarUPSSDAdicional();
                CargarUPSDAdicional();

                $('#gdUPSDA').find("tr").find("td:first input").attr('data-idups','2');
                $('#gdUPSSDA').find("tr").find("td:first input").attr('data-idupss','2');
                $('#gdUPSSDA').find("tr").find("select").val('0');
                $('#gdUPSDA').find("tr").find("select").val('0');
            } else {
                if (idASActualizacion !== null || idASActualizacion !== ''){
                    $('#cboTipoEstablecimiento').val(idASActualizacion);
                }				
                return;
            }
        });
    }else{
        arrUPPSSDASeleccion=[];
        arrUPSDAdicional=[];
        $('#txtBuscarClasificacionEstablecimiento').val();
        $('#txtBuscarUPSDA').val();
        $('#txtBuscarUPSSDA').val();
        $('#txtBuscarActDA').val();

        if($('#cboTipoEstablecimiento').val()===''){
            dsGdUPSDA.read();
            dsGdUPSSDA.read();			
        }else{
            MostrarEstablecimiento(tipo,$('#idSolicitud').val());
            CargarUPSSDAdicional();
            CargarUPSDAdicional();
            $('#divHoraAdo').hide();
        }

        $('#gdClasificacion').find("tr").find("td:first input").attr('data-idclasest','2');
        $('#gdClasificacion').find("tr").find("td:first input").attr('checked',false);
        $('#gdUPSDA').find("tr").find("td:first input").attr('data-idups','2');
        $('#gdUPSDA').find("tr").find("td:first input").attr('checked',false);
        $('#gdUPSSDA').find("tr").find("td:first input").attr('data-idupss','2');
        $('#gdUPSSDA').find("tr").find("td:first input").attr('checked',false);
        $('#gdUPSSDA').find("tr").find("select").val('0');
    }
	
}

var objtUPSS;
function CargaObjUPSS() {
    $.ajax({
        url: "solicitud.htm?action=selectUPSSEsta" + "&P_SOL=" + $('#idSolicitud').val(),
        dataType: "json",
        success: function (result) {
            objtUPSS = result;
            setTimeout(function () {
                dsGdUPSS.read();
            }, 1000);
        },
        error: function (result) {

        }
    });
}

// [BIT] CMIC 06102015
function deleteEstablecimiento(tipo) {
    beginCargando();
    $.ajax({
        url: "solicitud.htm?action=deleteEstablecimiento" + "&idsolicitud=" + $('#idSolicitud').val() + "&idtipo=" + tipo,
        dataType: "json",
		async : false,
        success: function (result) {
            endCargando();
        },
        error: function (result) {
            endCargando();
        }
    });
}

function deleteUpss(idupss) {
    beginCargando();
    $.ajax({
        url: "solicitud.htm?action=deleteUpss" + "&idsolicitud=" + $('#idSolicitud').val() + "&idupss=" + idupss,
        dataType: "json",
		async : false,
        success: function (result) {
            endCargando();
        },
        error: function (result) {
            endCargando();
        }
    });
}

var objtColProf;
CargaObjColProf();
function CargaObjColProf() {
    $.ajax({
        url: "solicitud.htm?action=selectColegioProf",
        dataType: "json",
        success: function (result) {
            objtColProf = result;
            var cboDoc = $('#cboColeProfRAS');
            jQuery.each(result, function (a, b) {
                cboDoc.append($('<option ></option>').val(b.CO_IDCOLEGPROF).html(b.DE_DESCRIPCION));
            });
        },
        error: function (result) {

        }
    });
}

var objtEspec;
function CargaClasifEstab() {
    $.ajax({
        url: "solicitud.htm?action=selectClasEst&tipo=1",
        dataType: "json",
        success: function (result) {
            objtClasEst = result;
        },
        error: function (result) {

        }
    });
}

function ObtenerUPSSS() {
    return objtUPSS;
}

function ObtenerColProf() {
    return objtColProf;
}

function ObtenerEspecialidad() {
    return objtEspec;
}

var objtCompetencia = [];
var objtCapacitacion = [];
var objtEntrenamiento = [];
function CargaCompetencia() {
    $.ajax({
        url: "solicitud.htm?action=selectCompetencias&tipo=CO",
        dataType: "json",
        success: function (result) {
            objtCompetencia = result;
        },
        error: function (result) {
        }
    });
}

function CargaCapacitacion() {
    $.ajax({
        url: "solicitud.htm?action=selectCompetencias&tipo=CA",
        dataType: "json",
        success: function (result) {
            objtCapacitacion = result;
        },
        error: function (result) {

        }
    });
}

function CargaEntrenamiento() {
    $.ajax({
        url: "solicitud.htm?action=selectCompetencias&tipo=EN",
        dataType: "json",
        success: function (result) {
            objtEntrenamiento = result;
        },
        error: function (result) {

        }
    });
}

CargaCompetencia();
CargaCapacitacion();
CargaEntrenamiento();

function ObtenerCompetencia() {
    return objtCompetencia;
}
function ObtenerCapacitacion() {
    return objtCapacitacion;
}
function ObtenerEntrenamiento() {
    return objtEntrenamiento;
}

function ObtenerClasificaEstab() {
    return objListaEstablecimientos;
}

function EliminarASimple(arr, val) {
    arr.forEach(function (element, index, array) {
        if (element === val) {
            arr.splice(index, 1);
        }
    });
    return arr;
}


function ModificarDatosRRHH(){
	MostrarPopGenerico('<label>¿Está seguro que desea guardar los cambios?<label>',ModificarDatosRRHHConfirm);
}

var personaRRHHxls = [];
var flagBotonRegistro=false;
var docConsultado='';
function ModificarDatosRRHHConfirm() {
	
	if ( $('#txtAPaternoExcel').val() == '' && $('#txtNombresExcel').val() == '' ){
		LanzarPopGenerico('Informativo', '(Registro Individual RRHH) Ingrese el apellido parterno y nombres de la persona');
        return;
	}
	
	//Adicionado para realizar el split Fecha agregado por dlarico
    var fechaNac;
    var arrFechaNac = [];
    //------------------------------------------------------------
	
    if ($('#frmDatosRRHHIndividual').valid()) {
        if (arrColegio.length === 0 || arrUPSS.length === 0) {
            //alert('Colegio Profesional y UPSS es obligatorio');
            LanzarPopGenerico('Informativo', 'Es necesario Seleccionar Colegio Profesional y UPSS');
            return;
        }
    } else {
        return;
    }

    //MODIFICACION UPSS
    var arrTempEsp = [];
    objtEspec.forEach(function (item, num) {
        if (item.FLAG === '1') {
            console.log(item);
            arrTempEsp.push(item.RNE);
        }
    });

    if (!flagBotonRegistro) {
    	var dniAnterior=personaRRHHxls[0].NUM_DOCU;
    	var dniNuevo=$('#txtNroDocExcel').val();
    	var sumaRRHHValidos=0;
    	if(dniAnterior!==dniNuevo){
    		//evaluar el arreglo de objetos
    	        rrhhListaValidos.forEach(function (item, num) {
    	            if (item.NUM_DOCU === $('#txtNroDocExcel').val()) {
    	                //console.log('persona ya existe y no puede ser agregada');
    	            	sumaRRHHValidos++;
    	            	LanzarPopGenerico('Informativo', 'Persona ya se encuentra agregada el lista.');
    	                return false;
    	            }
    	        });
    	        
    	}
    	if(sumaRRHHValidos>0){
    		return false;
    	}
        
        fechaNac = $('#txtFecNacExcel').val();
        arrFechaNac = fechaNac.split('/');
        
        personaRRHHxls[0].UPSS = arrUPSS.toString();
        personaRRHHxls[0].UPSSDETALLE = arrUPSSDet.toString();
        personaRRHHxls[0].COLEGIO = arrColegio.toString();
        personaRRHHxls[0].COLEGIODETALLE = arrColegioDet.toString();
        personaRRHHxls[0].COMPETENCIA = arrCompetencia.toString();
		personaRRHHxls[0].COMPETENCIADETALLE = arrDetCompetencia.toString(); // [BIT] CMIC 09/11/2015
		personaRRHHxls[0].CAPACITACION = arrCompetencia.toString(); // [BIT] CMIC 09/11/2015
		personaRRHHxls[0].CAPACITACIONDETALLE = arrDetCapacitacion.toString(); // [BIT] CMIC 09/11/2015
        personaRRHHxls[0].ESPECIALIDAD = arrEspecialidad.toString();		
		personaRRHHxls[0].ESPECIALIDADDETALLE = arrEspecialidadDet.toString();
        personaRRHHxls[0].ENTRENAMIENTO = arrCompetencia.toString();
		personaRRHHxls[0].ENTRENAMIENTODETALLE = arrDetEntrenamiento.toString(); // [BIT] CMIC 09/11/2015        
        personaRRHHxls[0].NOMBRES = $('#txtNombresExcel').val();
        personaRRHHxls[0].APELLIDO_PAT = $('#txtAPaternoExcel').val();
        personaRRHHxls[0].APELLIDO_MAT = $('#txtAMaternoExcel').val();
        personaRRHHxls[0].APELLIDO_CAS = $('#txtACasadaExcel').val();
        personaRRHHxls[0].RNE = arrTempEsp.toString();//$('#txtRecEspExcel').val();                    
        personaRRHHxls[0].PAIS_PROC = $('#cboPaisExcel').val();
        personaRRHHxls[0].DIA_NAC = $('#txtFecNacExcel').val();//arrFechaNac[0];
        personaRRHHxls[0].MES_NAC = arrFechaNac[1];
        personaRRHHxls[0].ANIO_NAC = arrFechaNac[2];
        personaRRHHxls[0].TIPO_DOC = $('#cboTipoDocExcel').val();
        personaRRHHxls[0].NUM_DOCU = $('#txtNroDocExcel').val();
        personaRRHHxls[0].SEXO = $('#CboSexoExcel').val();
        personaRRHHxls[0].TODO = objtEspec;
        //GENERANDO OBJETO PARA INSERCION DE RNE ESPECIALIDAD
        var arrObjEspRRHH = [];
        var ExisteRNECero=false;
        objtEspec.forEach(function (item, num) {
            var objEspRRHH = {};
            if (item.FLAG === '1') {
                console.log(item.RNE);
                objEspRRHH.RNE = item.RNE;
                objEspRRHH.IDCOLEGPROF = item.CO_IDESPECIALIDAD;
				objEspRRHH.DE_DESCRIPCION = item.DE_DESCRIPCION;
                arrObjEspRRHH.push(objEspRRHH);
            }
        });
        
        var ExisteRNECero=false;
		var EspecialidadesErrores = '';
        arrObjEspRRHH.forEach(function(item,num){
        	  if(item.RNE==='0'|| item.RNE==='' )
        	  {
        		  ExisteRNECero=true;
				  if (EspecialidadesErrores != ''){
					  EspecialidadesErrores += ', ';
				  }
				  EspecialidadesErrores += item.DE_DESCRIPCION;
        	  }
        	});
        if(ExisteRNECero){
        	LanzarPopGenerico('Informativo', 'La celda RNE no puede ser cero (0) o vacio, para las siguientes especialidades: ' + EspecialidadesErrores);
        	return false;
        }
        personaRRHHxls[0].ObjEspSel = arrObjEspRRHH;
		
		if (arrObjEspRRHH.length == 0){
			personaRRHHxls[0].ESPECIALIDADDETALLE = '';
		}
		
        rrhhListaValidos = Eliminacion(rrhhListaValidos, 'NRO', personaRRHHxls[0].NRO);
        rrhhListaValidos.push(personaRRHHxls[0]);
        rrhhListaValidos = Ordenamiento(rrhhListaValidos, 'NRO', 'ASC');
    	dsGdRRHH.read();
        $('#li-section-lista-recursos-humano a[href="#section-lista-recursos-humano"]').tab('show');

    } else {//INSERCION
        var flag = false;
        rrhhListaValidos.forEach(function (item, num) {
            if (item.NUM_DOCU === $('#txtNroDocExcel').val() && item.TIPO_DOC.toString() === $('#cboTipoDocExcel').val()) {
                //console.log('persona ya existe y no puede ser agregada');
                flag = true;
                return false;
            }
        });
        if (flag) {
        	LanzarPopGenerico('Informativo', 'Persona ya se encuentra agregada el lista.');
            return false;
        }
        //--Agregado por dlarico split fecha de nacimiento
        //fechaNac = $('#txtFecNacExcel').val();
        //arrFechaNac = fechaNac.split('/');
        //--------------------------------------------------
        personaRRHHxls=[];
        personaRRHHxls.push({});
		
        var maximo = 0;
        var numeronuevo = 0;
        $(rrhhListaValidos).each(function(index, object){ 
                numeronuevo = parseInt(object.NRO);
                if (numeronuevo > maximo){
                        maximo = numeronuevo;
                }			
        });
		
        personaRRHHxls[0].NRO = maximo + 1;
        personaRRHHxls[0].UPSS = arrUPSS.toString();
        personaRRHHxls[0].UPSSDETALLE = arrUPSSDet.toString();
        personaRRHHxls[0].TIPO_DOC = $('#cboTipoDocExcel').val();
        personaRRHHxls[0].COLEGIO = arrColegio.toString();
        personaRRHHxls[0].COLEGIODETALLE = arrColegioDet.toString();
        personaRRHHxls[0].COMPETENCIA = arrCompetencia.toString();
        personaRRHHxls[0].COMPETENCIADETALLE = arrDetCompetencia.toString();
        personaRRHHxls[0].CAPACITACION = arrCompetencia.toString();
        personaRRHHxls[0].CAPACITACIONDETALLE = arrDetCapacitacion.toString();
        personaRRHHxls[0].ENTRENAMIENTO = arrCompetencia.toString();
        personaRRHHxls[0].ENTRENAMIENTODETALLE = arrDetEntrenamiento.toString();
        personaRRHHxls[0].ESPECIALIDAD = arrEspecialidad.toString();
        personaRRHHxls[0].ESPECIALIDADDETALLE = arrEspecialidadDet.toString();
        personaRRHHxls[0].NOMBRES = $('#txtNombresExcel').val();
        personaRRHHxls[0].APELLIDO_PAT = $('#txtAPaternoExcel').val();
        personaRRHHxls[0].APELLIDO_MAT = $('#txtAMaternoExcel').val();
        personaRRHHxls[0].APELLIDO_CAS = $('#txtACasadaExcel').val();
        personaRRHHxls[0].RNE = $('#txtRecEspExcel').val();
        personaRRHHxls[0].PAIS_PROC = $('#cboPaisExcel').val();
        personaRRHHxls[0].DIA_NAC = $('#txtFecNacExcel').val();
        personaRRHHxls[0].NUM_DOCU = $('#txtNroDocExcel').val();
        personaRRHHxls[0].SEXO = $('#CboSexoExcel').val();
        personaRRHHxls[0].DOCUMENTO = document.getElementById('cboTipoDocExcel').options[document.getElementById('cboTipoDocExcel').selectedIndex].text;
        personaRRHHxls[0].PAISDETALLE = document.getElementById('cboPaisExcel').options[document.getElementById('cboPaisExcel').selectedIndex].text;
        personaRRHHxls[0].SEXODETALLE = document.getElementById('CboSexoExcel').options[document.getElementById('CboSexoExcel').selectedIndex].text;

        var arrObjEspRRHH = [];
        objtEspec.forEach(function (item, num) {
            var objEspRRHH = {};
            if (item.FLAG === '1') {
                console.log(item.RNE);
                objEspRRHH.RNE = item.RNE;
                objEspRRHH.IDCOLEGPROF = item.CO_IDESPECIALIDAD;
                arrObjEspRRHH.push(objEspRRHH);
            }
        });
        var ExisteRNECero=false;
        arrObjEspRRHH.forEach(function(item,num){
        	  if(item.RNE==='0'|| item.RNE==='' )
        	  {
        		  ExisteRNECero=true;
        	  }
        	})

        if(ExisteRNECero){
        	LanzarPopGenerico('Informativo', '(ESPECIALIDAD)La celda RNE no puede ser cero (0) o vacio.');
        	return false;
        }
        	
        
        personaRRHHxls[0].ObjEspSel = arrObjEsp;
        
        rrhhListaValidos.push(personaRRHHxls[0]);
        rrhhListaValidos = Ordenamiento(rrhhListaValidos, 'NRO', 'ASC');
        dsGdRRHH.read();
        personaRRHHxls = [];
        $('#li-section-lista-recursos-humano a[href="#section-lista-recursos-humano"]').tab('show');
        arrColegio = [];
        arrUPSS = [];

    }
    arrColegio = [];
    arrEspecialidad = [];
    arrCompetencia = [];
    arrUPSS = [];
    arrObjEsp=[];
    flagBotonRegistro=false;
}


function Seleccion(elem) {
    var tabla = 'datable-grilla40';
    var opcion = $(elem).attr('data-opcion');
    var padre = $(elem.parentElement.parentElement.parentElement).attr('data-padre');
    var itemSeleccionado = $(elem.parentElement.parentElement.parentElement).attr('data-req');
    //SI ES PADRE
    if (padre === '') {
        //BUSCAMOS A LOS HIJOS Y SETEAMOS
        $('#' + tabla).find('tr').each(function (num, item) {
            //EVALUAMOS A TODOS LOS ITEMS
            if (itemSeleccionado === $(item).attr('data-padre')) {
                //RECORRER LAS CELDAS Y SELECCIONAR SEGUN EL PADRE
                if (opcion === '1') {//SI
                    $(item).find('input').each(function (num1, item1) {
                        if (num1 === 0) {//SI
                            item1.checked = true;
                        }
                    });
                } else {//NO
                    $(item).find('input').each(function (num1, item1) {
                        if (num1 === 1) {//SI
                            item1.checked = true;
                        }
                    });
                }
            }
        });
    } else {//EN LOS CASOS EN QUE EVALUAMOS A LOS HIJOS
        //BUSCAMOS A LOS HIJOS Y SETEAMOS
        var numHijos = 0;
        var numHijosSi = 0;
        var numHijosNo = 0;
        $('#' + tabla).find('tr').each(function (num, item) {
            //EVALUAMOS A TODOS LOS ITEMS
            if (padre === $(item).attr('data-padre')) {
                numHijos++;
                $(item).find('input').each(function (num1, item1) {
                    if (num1 === 0 && item1.checked) {//SI
                        numHijosSi++;
                    } else {
                        if (num1 === 1 && item1.checked) {//SI
                            numHijosNo++;
                        }
                    }
                });
            }
        });
        if (numHijos === numHijosSi) {
            $('#' + tabla).find('tr').each(function (num, item) {
                if (padre === $(item).attr('data-req')) {
                    $(item).find('input').each(function (num1, item1) {
                        if (num1 === 0) {//SI
                            item1.checked = true;
                        }
                    });
                }
            });
        } else {
            $('#' + tabla).find('tr').each(function (num, item) {
                if (padre === $(item).attr('data-req')) {
                    $(item).find('input').each(function (num1, item1) {
                        if (num1 === 1) {//SI
                            item1.checked = true;
                        }
                    });
                }
            });
        }
    }
}

//-------------------------------------------------- 
//Carga de grilla RRHH editar solicitud, poe dlarico
function fu_cargaGrillaRRHH(cursorRRHH) {
    rrhhListaValidos = cursorRRHH;
    objListTemp = [];
    rrhhListaValidos.forEach(function (item, num) {
        if (item.NUM_DOCU === undefined || item.NUM_DOCU === '') {
            //console.debug(item);
        } else {
            objListTemp.push(item);
        }
        arrEspecialidadDet=item.ESPECIALIDADDETALLE.split(',');
    });
    rrhhListaValidos = objListTemp;
    //SE GENERA OBJETO PARA CUANDO NO SE EDITEN
    var arrTemp = [];
    rrhhListaValidos.forEach(function (item1, num1) {
        var arrObjEspRRHH = [];
        item1.ESPECIALIDAD.split(',').forEach(function (item, num) {
            var objEspRRHH = {};
            objEspRRHH.IDCOLEGPROF = item;
            objEspRRHH.RNE = item1.RNE.split(',')[num];
            arrObjEspRRHH.push(objEspRRHH);
            //console.log(item);
        });
        item1.ObjEspSel = arrObjEspRRHH;
        arrTemp.push(item1);
    });

    rrhhListaValidos = arrTemp;
    rrhhListaValidos = Ordenamiento(rrhhListaValidos, 'NRO', 'ASC');
    MostrarPopRRHHValidos();
}
//-------------------------------------------------- 

function ocultaFechaInicio() {
    var tipoContrato = $('#txtTCTerciarizacion').val();
    if (tipoContrato === '1') {
        $("#divFechaFin").css("display", "block");
        $('#txtFecFinPopUPSS').attr('required', true);
    } else {
        $("#divFechaFin").css("display", "none");
        $('#txtFecFinPopUPSS').attr('required', false);
    }
}

function LimitarLongitud(event, obj, len) {

    if (event.which === 64) {
        return false;
    }
    else if (event.which === 35) {
        return false;
    }
    else if (event.which === 36) {
        return false;
    }
    else if (event.which === 42) {
        return false;
    }
    else if (event.which >= 65 && event.which <= 90) {
        return false;
    }
    else if (event.which >= 97 && event.which <= 122) {
        return false;
    }
    if (obj.value.length === len && event.which !== 8 && event.which !== 0) {
        return false;
    }
}


function MostrarPopGenerico(mensaje,funcSi,funcNo){
    try{
        $('#popConfirmaGenericoContenido').html(mensaje);  
        $('#popConfirmaGenerico').modal({
            backdrop : 'static',
            keyboard : false
        }).one('click', '[data-value]', function(e) {
            if ($(this).data('value') === 1) {
                funcSi();
            } else {
                funcNo();
            }
        });	
    }catch(e){
        console.log('MostrarPopGenerico ' + e);
    }
}

function mostrarSubsanar(){
	var form = $('#form_solicitud');		
	form.attr('action', 'evaluacion-categorizacion-subsanar.htm?action=mostrarSubsanar'+'&idEntidad='+idSolConsultar +'&idSol='+idSolConsultar +'&idOpcion=4'  );
	form.attr('method', 'post');	        	
	form.submit();
} 

function mostrarSubsanarSolicitud(){
	var form = $('#form_solicitud');		
	form.attr('action', 'solicitud.htm?action=cargarSolicitud'+'&idEntidad='+idSolConsultar +'&idSol='+idSolConsultar );
	form.attr('method', 'post');	        	
	form.submit();
} 

function RedireccionarPagAnterior(){
	$('#popConfirmaSolicitud').attr('style','display:none');$('#frmRedirect').find('input').attr('disabled',false);setTimeout(function(){ $('#frmRedirect').submit(); }, 1000);	
}

function valDireccionEst() {
	var sw = 0;
    $.ajax({
        url : "solicitud.htm?action=valDireccionEst&"+$('#frmDatosEstablecimiento').serialize(),
        dataType : "json",		
        type: 'POST',
		async : false,
        success : function(result) {
            if (result == 'ok'){
				sw = 1;
			}
        },
        error : function(result) {
        }
    });
	return sw;
}

$(document).on('ready',function(){
	$('#txtDocumento').on('change',function(){		
		$('#txtAPaterno').val('');		
		$('#txtAMaterno').val('');
		$('#txtACasada').val('');
		$('#txtNombres').val('');
	});
	
	$('#txtNroDocRA').on('change',function(){		
		$('#txtAPaternoRA').val('');
		$('#txtAMaternoRA').val('');
		$('#txtACasadaRA').val('');
		$('#txtNombresRA').val('');		
	});
	
	$('#txtNroDocRRLL').on('change',function(){		
		$('#txtAPaternoRRLL').val('');
		$('#txtAMaternoRRLL').val('');
		$('#txtACasadaRRLL').val('');
		$('#txtNombresRRLL').val('');		
	});
	
	$('#txtNroDocRAS').on('change',function(){		
		$('#txtAPaternoRAS').val('');
		$('#txtAMaternoRAS').val('');
		$('#txtACasadaRAS').val('');
		$('#txtNombresRAS').val('');		
	});
	
	$('#txtNroDocExcel').on('change',function(){		
		$('#txtAPaternoExcel').val('');
		$('#txtAMaternoExcel').val('');
		$('#txtACasadaExcel').val('');
		$('#txtNombresExcel').val('');		
	});
	
});


//-------------------------------------------------- 
//Carga de grilla RRHH editar solicitud, poe dlarico
function fu_getRuc(tipo) {
    var ruc;
    var mostrar = false;
    if (tipo === "PN") {
        ruc = $('#txtRucRA').val();
    } else { // "PJ"
        ruc = $('#txtRucPJRA').val();
    }
    if (ruc !== "") {
        var cantidadCaracteres = ruc.length;
        if (cantidadCaracteres === 11) {
            beginCargando();
            $.ajax({
                url: 'solicitud.htm?action=buscarRuc',
                cache: false,
                async: true,
                type: 'POST',
                data: {'ruc': ruc},
                dataType: 'json',
                mimeType: "multipart/form-data",
                success: function (data) {
                    endCargando();
                    fu_limprarCampoTiPersona(tipo);
                    if (huboErrorJson(data)) {
                        if (huboErrorValidacionJson(data)) {
                            //estadoInputError( '#div-cabecera-buscar', data, estadoInicial );
                            return;
                        }
                        handleErrorJson(data);
                        return;
                    }
                    //mostrar log
                    console.log('data:' + JSON.stringify(data));
                    var ruc = data.dataJson.ruc;
                    var estadoRuc = ruc.desc_estado;
                    if ($.trim(estadoRuc) === "ACTIVO") {
                        var nuruc = $.trim(ruc.ruc);
                        var tipoDoc = $.trim(ruc.codPer);
                        var tiDoc = tipoDoc.substr(1, 1);
                        var nudni = nuruc.substr(2, 8);
                        var ubigeo = $.trim(ruc.ubigeo);

                        //console.log('Sustraccion ruc:'+nudni+"Sustraccion tipo doc ="+tiDoc);
                        if (tiDoc === "1" && tipo === "PN") {
                            $('#cbdoTipoDocRA').val(tiDoc);
                            $('#cbdoTipoDocRA').change();
                            $('#txtNroDocRA').val(nudni);
                            $('#lblNumeroSerie').html("N&Uacute;MERO DE SERIE DEL RUC: "+nuruc);
                            fu_getDatosDniPN();
                            mostrar = true;
                        } else if ((tiDoc !== "1" && tipo === "PJPU") || (tiDoc !== "1" && tipo === "PJPR")) {
                            $('#txtRSocialPJRA').val($.trim(ruc.nombre));
                            $('#txtRazonSocialDE').val($.trim(ruc.nombre));
							
							// CMIC 11/12/2015
							$('#txtRSocialPJRA').attr('disabled', true);
							
                            if(tipo === "PJPR"){
                                $('#lblNumeroSerie').html("N&Uacute;MERO DE SERIE DEL RUC: "+nuruc+" (*)");
                            }else{
                                $('#lblNumeroSerie').html("N&Uacute;MERO DE SERIE DEL RUC: "+nuruc);
                            }
                            mostrar = true;
                        } else {
                            if (tipo === "PN") {
                                $('#txtRucRA').val('');
                                bootbox.alert("<p align='center'>" + IPRESS + "</p>" +
                                        "El numero ingresado no pertenece a Persona Natural.");//bootbox.
                            } else {
                                $('#txtRucPJRA').val('');
                                bootbox.alert("<p align='center'>" + IPRESS + "</p>" +
                                        "El numero ingresado no pertenece a Persona Juridica.");//bootbox.
                            }
                        }
                        if (mostrar === true) {
                            setTimeout(function () {
                                $('#cboDepRA').val(ubigeo.substr(0, 2));
                                $('#cboDepRA').trigger('change');
                                setTimeout(function () {
                                    $('#cboProRA').val(ubigeo.substr(0, 4));
                                    $('#cboProRA').trigger('change');
                                    fu_getIdUbigeo(ubigeo);
                                    setTimeout(function () {
                                        //$('#cboDisRA').val(idUbigeo);
                                        $('#cboDisRA').trigger('change');
                                    }, 1500);//3000
                                }, 1000);//2000
                            }, 500);//1000                        
                            $('#cboViaNombreRA').val($.trim(ruc.direccionCompleta));
                        }
                    } else {
                        bootbox.alert("<p align='center'>" + IPRESS + "</p>" +
                                "El numero ingresado no se encuentra registrado.");//bootbox.
                    }
                },
                error: function (data, textStatus, errorThrown) {
                    endCargando();
                    handleError(data);
                }
            });
        } else {
            if (cantidadCaracteres > 11) {
                bootbox.alert("<p align='center'>" + IPRESS + "</p>" +
                        "El numero ingresado es mayor de los 11 caracteres permitidos....");//bootbox.
            }
            if (cantidadCaracteres < 11) {
                bootbox.alert("<p align='center'>" + IPRESS + "</p>" +
                        "El numero ingresado es menor de los 11 caracteres permitidos....");//bootbox.
            }
        }
    }
}

function fu_getDatosDniPN() {
    $('#cbdoTipoDocRA').prop('disabled', false);
    var tipoDoc = $('#cbdoTipoDocRA').val();
    $('#cbdoTipoDocRA').prop('disabled', true);
    var dni = $('#txtNroDocRA').val();
    var fechaNac = "";
    var sexo = "";
    if (tipoDoc === "1") {
        if (dni !== '') {
            //beginCargando();
            $.ajax({
                url: 'categorizacion.htm?action=buscarPersona',
                cache: false,
                async: true,
                type: 'POST',
                data: {
                    'txt_numeroDocumentoIdentidad': dni,
                    'dat_fechaNacimiento': fechaNac,
                    'cmb_sexo': sexo,
                    'cmb_tipoDocumentoIdentidad': tipoDoc
                },
                dataType: 'json',
                mimeType: "multipart/form-data",
                success: function (data) {
                    //endCargando();
                    if (huboErrorJson(data)) {
                        if (huboErrorValidacionJson(data)) {
                            //estadoInputError( '#div-cabecera-buscar', data, estadoInicial );
                            return;
                        }
                        handleErrorJson(data);
                        return;
                    }
                    console.log('data:' + JSON.stringify(data));
                    var persona = data.dataJson.persona;
                    $('#txtAPaternoRA').val(persona.apPaterno);
                    $('#txtAMaternoRA').val(persona.apMaterno);
                    $('#txtACasadaRA').val(persona.apCasada);
                    $('#txtNombresRA').val(persona.preNombres);
                    $('#txtFecNacRA').val(persona.feNac);
                    $('#cboSexoRA').val(persona.coGenero);
                },
                error: function (data, textStatus, errorThrown) {
                    endCargando();
                    handleError(data);
                }
            });
        }
    }
}

function fu_getIdUbigeo(ubigeo) {
    var id;
    $.getJSON('solicitud.htm?action=selectUbigeo&tipo=ID&codigoUbigeo=' + ubigeo, function (json) {
        json.forEach(function (item, num) {
            id = item.ID;
            if (id !== undefined) {
                $('#cboDisRA').val(id);
            }
        });
    });
}

function fu_limprarCampoTiPersona(tipo) {
    if (tipo === "PN") {
        $('#cbdoTipoDocRA, #txtNroDocRA, #cboPaisRA, #txtFecNacRA, #cboSexoRA').val('');
        $('#txtAPaternoRA, #txtAMaternoRA, #txtACasadaRA, #txtNombresRA').val('');
    }
    if (tipo === "PJ") {
        $('#txtRSocialPJRA, #txtNComercialPJRA').val('');
    }
    $('#cboDepRA, #cboProRA, #cboDisRA, #cboViaRA, #cboViaNombreRA, #txtNroRA, #txtNroPisoRA').val('');
    $('#txtNroDptoRA, #txtInteriorRA, #txtManzanaRA, #txtLoteRA, #txtKmRA, #txtUrRA, #txtRefRA').val('');
}

function fu_getDNI(derivado, dniDeriv) {
    var dniCoordiando = $('#txtDocumento').val();
    if (dniCoordiando === dniDeriv) {
        $('#cboFecNac,#txtAPaterno,#txtAMaterno,#txtACasada,#txtNombres').attr('disabled', false);
        limpiarDerivado(derivado);
        if (derivado === "RRLL") {
            $('#txtFecNacRRLL').val($.trim($('#cboFecNac').val()));
            $('#txtAPaternoRRLL').val($.trim($('#txtAPaterno').val()));
            $('#txtAMaternoRRLL').val($.trim($('#txtAMaterno').val()));
            $('#txtACasadaRRLL').val($.trim($('#txtACasada').val()));
            $('#txtNombresRRLL').val($.trim($('#txtNombres').val()));
            $('#cboSexoRRLL').val($.trim($('#cboSexo').val()));
            if ($('#cboSexo').val() === "1") {
                $('#txtACasadaRRLL').attr('disabled', true);
                $('#txtACasadaRRLL').val('');
            } else {
                $('#txtACasadaRRLL').attr('disabled', true);
            }
        }
        if (derivado === "RAS") {
            $('#txtFecNacRAS').val($.trim($('#cboFecNac').val()));
            $('#txtAPaternoRAS').val($.trim($('#txtAPaterno').val()));
            $('#txtAMaternoRAS').val($.trim($('#txtAMaterno').val()));
            $('#txtACasadaRAS').val($.trim($('#txtACasada').val()));
            $('#txtNombresRAS').val($.trim($('#txtNombres').val()));
            $('#cboSexoRAS').val($.trim($('#cboSexo').val()));
            if ($('#cboSexo').val() === "1") {
                $('#txtACasadaRAS').attr('disabled', true);
                $('#txtACasadaRAS').val('');
            } else {
                $('#txtACasadaRAS').attr('disabled', true);
            }
        }
        $('#cboFecNac,#txtAPaterno,#txtAMaterno,#txtACasada,#txtNombres').attr('disabled', true);
    }
}

function limpiarDerivado(derivado) {
    if (derivado === "RRLL") {
        $('#txtFecNacRRLL,#txtAPaternoRRLL,#txtAMaternoRRLL,#txtACasadaRRLL,#txtNombresRRLL').val('');
    }
    if (derivado === "RAS") {
        $('#txtFecNacRAS,#txtAPaternoRAS,#txtAMaternoRAS,#txtNombresRAS,#txtACasadaRAS').val('');
    }
}

function fu_goValidadRucSerieDE(){
    var ruc = $('#txtRucPJRA').val();
    var serie = $('#txtNuSerieDE').val();
    if(ruc !== ''){
        beginCargando();
        $.ajax({
                url: 'solicitud.htm?action=buscarRucSerie',
                cache: false,
                async: true,
                type: 'POST',
                data: {'ruc': ruc, 'serie': serie},
                dataType: 'json',
                mimeType: "multipart/form-data",
                success: function (data) {
                    endCargando();
                    if (huboErrorJson(data)) {
                        if (huboErrorValidacionJson(data)) {
                            //estadoInputError( '#div-cabecera-buscar', data, estadoInicial );
                            return;
                        }
                        handleErrorJson(data);
                        return;
                    }
                    //mostrar log
                    console.log('data:' + JSON.stringify(data));
                    var contador = data.dataJson.contador;
                    var cantidad = contador.P_CANTIDAD;                    
                    var mensaje = contador.P_RESULTADO;                    
                    if(cantidad>0){
                       $('#txtNuSerieDE').focus();
                    }
                },
                error: function (data, textStatus, errorThrown) {
                    endCargando();
                    handleError(data);
                }
            });
    }else{
        alert('Debe estar registrado el numero de RUC.');
    }
}

function esEntero(numero){
    if (isNaN(numero)){
        return false;
    }
    else{
        if (numero % 1 == 0) {
            return true;
        }
        else{
            return false;
        }
    }
}
//------------------------------------------------------------
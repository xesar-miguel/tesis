/* 
 * Autor: dlarico
 * Fecha: 13/01/2016
 * Referencia:***
 */

/* global idOpcion, idSolConsultar, kendo, codProceso, attr, bootbox, Renipress, IPRESS */

//--- variables Globales Inicio
var dsGdSolicitudes;
var flagDebug = true;
var etiquetasControles = {
    sexo: "(Seleccione Sexo)",
    pais: "(Seleccione País)",
    departamento: "(Seleccione Departamento)",
    provincia: "(Seleccione Provincia)",
    distrito: "(Seleccione Distrito)",
    via: "(Seleccione Vía)"
};

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

$(function(){
    console.log('Iniciar Carga evaluacionSolicitudAcceso');
    beginCargando();
    //CargarParametrosEvaSolAcc();
    CargaControles();
    ConfigControles();
    MostrarAutoridadSanit();
    CargarSexo($('#cboSexo'));
    CargarVia($('#cboVia'));
       
    $.ajax({
        url: "solicitud.htm?action=selectPais",
        dataType: "json",
        success: function (result) {
            CargarPaises(result, $('#cboPais'), etiquetasControles.pais);
        },
        error: function (result) {
        }
    });
        
    CargarDepartamentos('solicitud.htm?action=selectUbigeo&tipo=DE', $('#cboDepartamentoDA'), etiquetasControles.departamento);
    MostrarTipDoc();
        
    setTimeout(function(){        
        CargarSolicitudAcceso(idSolConsultar, codProceso);
    }, 800);
    
});

var idASActualizacion=0;
function CargarSolicitudAcceso(idSolConsultar, idProceso) {
    beginCargando(); 
    $.getJSON("evaluacion-solicitud.htm?action=cargarSolcitudAccesoJSON&idSolicitud="+idSolConsultar+"&codProceso="+idProceso,function(data){
        console.log("Codigo proceso ="+idProceso+" - Actualizacion de Datos");
        objSolicitud = data;
        //-----INICIO DATOS PRIMERA PESTAÑA
        objSolicitudDG = objSolicitud['P_CURSORSOLICITUD'][0];
        objSolicitudDA = objSolicitud['P_CURSORSOLADJUNT'][0];
        objSolicitudDS = objSolicitud['P_CURSOR'][0]; // documentos adjunto
                                
        $('#idSolicitud').val(objSolicitudDG.SOL_IDSOLICITUD);
        $('#idSolicitudIPRESS').val(objSolicitudDS.CO_IDSOLICIPRESS_SI);
        $('#idProceso').val(idProceso);
        $('#idCoUniIpress').val(objSolicitudDS.CO_UNICOIPRESS_SI);
        $('#idLoginUsuIpress').val(objSolicitudDG.SOLNOTIF_COUSUIPRESS);
        $('#emailUsuIpress').val(objSolicitudDG.SOLNOTIF_CORREO1);
        //-----INICIO DATOS PRIMERA PESTAÑA
        console.log("INICIO DATOS PRIMERA PESTAÑA");
        $('#txtUniCoIpress').val(objSolicitudDS.CO_UNICOIPRESS_SI);
        $('#txtRucProp').val(objSolicitudDS.NU_RUCPROP_SI);
        $('#txtRazonSocialProp').val(objSolicitudDS.DE_RAZONSOCIALPROP_SI);
        $('#txtComercialProp').val(objSolicitudDS.NO_COMERCIALPROP_SI);
        $('#txtDireccionProp').val(objSolicitudDS.DE_DIRECCIONPROP_SI);
        $('#txtNomAutoridadSanitaria').val(objSolicitudDS.TIPO_AUS);
        $('#txtCodAutoridadSanitaria').val(objSolicitudDS.CO_IDAUTSANITARIAESTABL_SI);
                
            //---DATOS DE LA PERSONA QUE COORDINARÁ LA INSCRIPCIÓN DE IPRESS-------
            $('#txtDocumento').val(objSolicitudDG.SOLPER_NUMDOC);
            $('#cboFecNac').val(objSolicitudDG.SOLPER_FECHNACI);
            $('#txtAPaterno').val(objSolicitudDG.SOLPER_APPATERNO);
            $('#txtAMaterno').val(objSolicitudDG.SOLPER_APMATERNO);
            $('#txtACasada').val(objSolicitudDG.SOLPER_APCASADA);
            $('#txtNombres').val(objSolicitudDG.SOLPER_DENOMBRE);
            //--------DIRECCIÓN PARA LAS NOTIFICACIONES----------------------------
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
            var cargarSelect = function () {
                $('#cboDocumento').val(objSolicitudDG.SOLPER_TIPODOC);
                $('#cboPais').val(objSolicitudDG.SOLPER_CODPAIS);
                $('#cboSexo').val(objSolicitudDG.SOLPER_SEXO);
                if(objSolicitudDG.SOLPER_TIPODOC===1){
                    $('#txtAPaterno').attr('disabled',true);
                    $('#txtNombres').attr('disabled',true);
                    $('#txtAMaterno').attr('disabled',true);
                    $('#txtACasada').attr('disabled',true);
                } else {
                    if(objSolicitudDG.SOLPER_SEXO===1){										
			$('#txtACasada').attr('disabled',true);						
                    }else if(objSolicitudDG.SOLPER_SEXO===2){		
                        $('#txtACasada').attr('disabled',false);	
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
            };setTimeout(cargarSelect, 600);
        
            //---Carga Select combos (cboDepartamentoDA, cboProvinciaDA, cboDistritoDA) ----
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
            	
            $('#idSolicitudIPRESS').val(objSolicitudDS.CO_IDSOLICIPRESS_SI);
            //---Carga combo (cboVia) ---
            $('#cboVia').val(objSolicitudDG.SOLNOTIF_IDVIA);            
            //---Carga documento adjuntos ---
            if(objSolicitudDS===null){
        	endCargando();
        	return false;
            }	
            
        $('input').attr('disabled',true);
        $('select').attr('disabled',true);
        $('textarea').attr('disabled',true);
        endCargando();
    });
}

// ---DATOS ADICONALES

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

var sexoCache = [];
function CargarSexo(select) {
    try {        
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
    } catch (e) {
        console.log('ERROR CargarSexo');
    }
}

function CargarVia(select) {
    try {
        $.ajax({
            dataType: "json",
            async:false,
            url: 'categorizacionIpress.htm?action=selectTipoVia',			
            success:  function (json) {
                json.forEach(function (item, num) {
                    select.append($('<option/>', {
                            value: item.CO_CODVALOR,
                            text: item.DE_VALOR
                    }));
                });
            }
        });	
    } catch (e) {
        console.log('ERROR CargarVia');
    }
}

function CargaControles(){
    try {
        $('.dpGeneral').datepicker();
        CargarComboDefecto($('#cboProvinciaDA'), etiquetasControles.provincia);
        CargarComboDefecto($('#cboDistritoDA'), etiquetasControles.distrito);
        CargarComboDefecto($('#cboVia'), etiquetasControles.via);
    } catch (e) {
        if (flagDebug) {
            console.debug("evaluacionSolicitud/CargaControlesCombo " + e);
        }
        console.log('ERROR CargaControlesCombo');
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

function ConfigControles() {
    try {
        $('#txtDocumento').blur(function () {
            ValidarDNI();
        });
        $('#cboFecNac').blur(function () {
            ValidarDNI();
        });
        
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
        
        $('#cboDepartamentoDA').change(function () {
            CargarComboDefecto($('#cboProvinciaDA'), etiquetasControles.provincia);
            CargarComboDefecto($('#cboDistritoDA'), etiquetasControles.distrito);
            CargarProvinciasEstablecimiento(this.value, $('#cboProvinciaDA'), etiquetasControles.provincia);
            $('#cboDepDE').val(this.value);
            $('#cboIPAutoridadSanit').empty();
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
            }, 700);
        });

    } catch (e) {
        if (flagDebug) {
            console.debug("evaluacionSolicitud/ConfigControles " + e);
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
            console.debug("evaluacionSolicitu/CargarComboDefecto " + e);
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
            console.debug("evaluacionSolicitud/CargarComboJSON " + e);
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
            console.debug("evaluacionSolicitud/CargarPaises " + e);
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
            console.debug("evaluacionSolicitud/CargarDepartamentos " + e);
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
            console.debug("evaluacionSolicitud/CargarProvincias " + e);
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
            console.debug("evaluacionSolicitud/CargarProvincias " + e);
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
            console.debug("evaluacionSolicitud/CargarDistrito " + e);
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
            console.debug("evaluacionSolicitud/CargarDistrito " + e);
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
                $('#cboIPAutoridadSanit').valid();
            }
        });
    } catch (e) {
        if (flagDebug) {
            console.debug("evaluacionSoicitud/CargarAutoridadSanitaria " + e);
        }
        console.log('ERROR CargarAutoridadSanitaria');
    }
}

function RetornaDataForm(form) {
    return $('#' + form).serialize();
}

function MostrarTipDoc() {
    $.ajax({
        url: "solicitud.htm?action=selectTipDoc",
        dataType: "json",
        data: $('#frmDatosPropietario').serialize(),
        success: function (result) {
            var cboDoc = $('#cboDocumento');
            jQuery.each(result, function (a, b) {
                cboDoc.append($('<option ></option>').val(b.CO_CODVALOR).html(b.DE_VALOR));
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
        $('#txtACasada').attr('disabled', false);
    }    
    ValidarDNI();
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

function RecuperarAdjuntos() {
    dsGdSolicitudes.read();
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

            $('#frmDescargarArchivo').submit();
        }
    } catch (e) {
        console('archivo no fue encontrado en el servidor');
    }

}

function activarBotonesEvaSolAcc() {
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

var listaDocsAutSanit;
$(function () {
    dsGdSolicitudes = new kendo.data.DataSource({
        transport: {
            read: function (options) {
                var idSolicEditar = $("#idSolicitud").val();
                var idAutoSanitaria = $('#cboIPAutoridadSanit').val();
                var idProceso = $('#idProceso').val();
                var url = "solicitud.htm?action=cargarAdjSolPorProceso&idSol="+idSolicEditar+"&idAS="+idAutoSanitaria+"&idPro="+idProceso; 
                $.ajax({
                    url: url,
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

    //INICIALIZADO POR DEFECTO
    //dsGdSolicitudes.read();

    $("#gdDocAdjuntos").find("input[name='txtNroDoc']").each(
        function (index, value) {
    });
});

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

function RedireccionarPagAnterior(){
    $('#frmRedirect').find('input').attr('disabled',false);
    $('#idProceso').find('input').attr('disabled',false);
    $('#tipo_solicitud').find('input').attr('disabled',false);
    var  tipoSolicitud = $('#idProceso').val();
    $('#tipo_solicitud').val(tipoSolicitud);
    var form = $('#frmRedirect');
    form.attr('action','evaluacion-solicitud.htm?action=mostrarBuscar');
    form.submit();
}

function autorizar(tipoAcceso){
    var texto = 'autorizar';
    $('#texto1').html('Se procederá a '+texto+' de acceso, al usuario IPRESS.');
    $('#texto2').html('¿Está seguro de continuar...?');
    
    $('#popConfirmaSolicitud').modal({
        backdrop: 'static',
        keyboard: false
    }).one('click', '[data-value]', function (e) {
        if ($(this).data('value') === 1) {
            disabledform();
            grabarAutorizacionRechazo(tipoAcceso);
        } else {
            return;
        }
    });
}

function rechazar(){
    disabledform();
    $('#divhtml-contenido-bandeja-evaluacion-observacion').html('');
    cargarDivDetalle( 'evaluacion-solicitud.htm?action=motivoRechazo','#divhtml-contenido-bandeja-evaluacion-observacion', null);
}

function fu_obtenerObservacion(observacion){
    $('#motivoRechazo').val(observacion);
    var tipoAcceso = "0";
    grabarAutorizacionRechazo(tipoAcceso);
}

function grabarAutorizacionRechazo(tipoAcceso){
    var texto = '';
    $('#tipoAcceso').val(tipoAcceso);
    $('#frmAutorizarCancelraSol').find('input').attr('disabled',false);
    $('#popGenericoRegistro').attr('style','display:none');   
    if(tipoAcceso === '1'){//Caso que sea Autorizar
       texto = 'la autorización';
    }else{//Caso que sea Rechazar
       texto = ' el rechazo'; 
    }
    beginCargando(); 
    $.ajax({
        url: "evaluacion-solicitud.htm?action=autorizarRechazarAcceso",
        dataType: "json",
        type: "POST",
        data: $('#frmAutorizarCancelraSol').serialize(),
        success: function (result) {
            //alert("valor result ="+result);
            $('#lblTituloPopGenerico').text('Evaluación de Solicitud de Acceso IPRESS');
            if(result === '000'){
                $('#lblConenidoPopGenerico').text('Se registro satisfactoriamente '+texto+', de solicitud de acceso.');
            }else{
                $('#lblConenidoPopGenerico').text('No se llegó a registrar '+texto+'. Por favor intentar nuevamente...');
            }
            $('#popGenericoRegistro').modal("show");
            console.debug('valor de resultado ='+result);          
            if(result==='001'){
                console.debug('Problemas al momento de relizar el insert de usuario');   
            }else if(result==='002'){
                console.debug('Problemas al momento de relizar el update soliciud');   
            } if(result==='000'){
                console.debug('grabación OK');   
            }else{
                console.debug('OTRO ERROR DE ORACLE');   
            }
            endCargando();
        },
        error: function (result) {
            console.debug("error ="+result);
            endCargando();
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

function disabledform(){
    $('#idSolicitud').find('input').attr('disabled',false);
    $('#idSolicitudIPRESS').find('input').attr('disabled',false);
    $('#idProceso').find('input').attr('disabled',false);
    $('#idCoUniIpress').find('input').attr('disabled',false);
    $('#idLoginUsuIpress').find('input').attr('disabled',false);
    $('#emailUsuIpress').find('input').attr('disabled',false);
    $('#tipoAcceso').find('input').attr('disabled',false);
    $('#motivoRechazo').find('input').attr('disabled',false);
}
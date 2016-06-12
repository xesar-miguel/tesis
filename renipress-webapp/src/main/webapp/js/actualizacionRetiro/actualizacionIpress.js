/* 
 * Autor: dlarico
 * Version 1.0.0
 * Modulo Actuliacion de IPRESS
 */
    
/*
 * Varialbles
 * @autor dlarico
 */
var objIpress;
var objIpresResul; 
var objResul;
var resp;    

//-----------------------------------------------------------------------------
$( document ).ready(function() {
    $("#formBuscarIpress").submit(function(){
       //var $data = $(this).serialize();
        var tipo = $.trim($("#tipoSolicitud").val());
        var codigo = $.trim($("#coIpress").val());
        if(tipo==="-1"){
            bootbox.alert("<p align='center'>"+IPRESS+"</p> <p align='center'>Para consultar debere selecionar el campo Tipo Solicitud</p>", function() {
                //Renipress.show("Selecionar el tipo de solicitud");
                //$("#tipoSolicitud").focus();
            });
        }else{
            if(codigo === ""){
                bootbox.alert("<p align='center'>"+IPRESS+"</p> <p align='center'>Para consultar debe ingresar el Código Unico de IPRESS</p>", function() {
                    //Renipress.show("Digite el Codigo Unico de Ipress");
                });
            }else{
                fu_buscarIpressTv(tipo,codigo);
            }
        }    
        return(false);
    });
});

function fu_buscarIpressTv(tipo,codigo){
    var tiBusqueda = 1;
    var parametro = "&tipoSolicitud="+tipo+"&coIpress="+codigo+"&tiBusqueda="+tiBusqueda;
    beginCargando();
    $.getJSON('actualizacionRetiro.htm?action=buscarIpressJSON'+parametro, function(data) {
        endCargando();
        var proceso; 
        var estado;
        objIpress = data;
        objIpresResul = objIpress['P_CURSOR'];
        resp = objIpress['P_COD_ERROR'];
        //console.log('objIpresResul:'+objIpresResul);
        //console.log('resp :'+resp);
        
        if(objIpresResul.length>0 && resp==='000'){
            objResul = objIpresResul[0];
            proceso = objResul.DE_PROCESO;
            estado = objResul.DE_ESTADO;
            bootbox.alert("<p align='center'>"+IPRESS+"</p><p align='center'>"+
                          "El Código Unico de IPRESS N°:"+codigo+" cuenta con solicitud de :</p>"+
                          "<p align='center'>"+proceso+", y cuyo estado se encuentra: "+estado+"</p>", function() { 
            });
        }
        if(resp==='001' || objIpresResul=== undefined && resp===undefined){
            handleError(data);
        }
        if(objIpresResul.length===0 && resp==='000'){
            $('#txt_codIpress').val(codigo);
            $('#txt_tipoSolicitud').val(tipo);
            var form = $('#frmSolcitud');				
            form.submit();
        }
    });
}

function fu_buscarIpressTm(tipo,codigo){
    var tiBusqueda = 2;
    var parametro = "&tipoSolicitud="+tipo+"&coIpress="+codigo+"&tiBusqueda="+tiBusqueda;
    beginCargando();
    $.getJSON('actualizacionRetiro.htm?action=buscarIpressTmJSON'+parametro, function(data) {
        endCargando();
        objIpress = data;
        objIpresResul = objIpress['P_CURSOR'];
        resp = objIpress['P_COD_ERROR'];
        if(resp==='001' || objIpresResul=== undefined && resp===undefined){
            //console.log("error de base de datos");
            //console.log("Problema de comunicación en el servicio");
            handleError(data);
        }
        if(objIpresResul.length===0 && resp==='000'){
            bootbox.alert("<p align='center'>"+IPRESS+"</p>"+
                          "<p align='center'>El Código Unico de IPRESS, no se encutra registrado.</p>"+
                          "<p align='center'>Por favor verificar....</p>");
        }
        if(objIpresResul.length>0 && resp==='000'){
            $('#txt_codIpress').val(codigo);
            $('#txt_tipoSolicitud').val(tipo);
            var form = $('#frmSolcitud');				
            form.submit();
        }                                                       
    });  
}

//jsp ActualizacionDatos
function fu_cargaActualizacionDatos(){
    var idAuSaUbigeo = $.trim($("#txtIdautorsanitariaDeAuSaUbigeo").val());
    var idAuSa = $.trim($("#txtCodAutoridadSanitaria").val());
    var codUbigeo = $.trim($("#txtUbigeoDeAuSaUbigeo").val());
    var codDep = "", codProv = "", codDis = "";
    
    if(idAuSaUbigeo===idAuSa){
        $("#lbMensajeAutoridadSanitaria").css("display", "none");
    }else{
        $("#cmbAutoridadSanitaria").val(idAuSaUbigeo);
        $("#lbMensajeAutoridadSanitaria").css("display", "block");
    }
    
    codDep = codUbigeo.substring(0,2);
    codProv = codUbigeo.substring(2,4);
    codDis = codUbigeo.substring(4,6);
    $("#cboDepartamentoAS").val(codDep);
    $("#cboProvinciaAS").val(codProv);
    $("#cboDistritoAS").val(codDis);
    
    $("#cboDepartamentoAS, #cboProvinciaAS, #cboDistritoAS, #cmbAutoridadSanitaria").prop("disabled", true);
    
    CargarComboDefectoUtil($('#cboProvincia'), etiquetasControles.provincia);
    CargarComboDefectoUtil($('#cboDistrito'), etiquetasControles.distrito);
    
}

function fu_validarPais() {
    if ((document.getElementById('cboDocumento').options[document.getElementById('cboDocumento').selectedIndex].text).toUpperCase() === "DNI") {
        // PERU
        $('#cboPais').val('174');
        $('#btoBuscarDNI').css('display', 'block');
        $('#cboPais').prop('disabled', true );
        $('#cboPais').prop('disabled', true );
        $('#txtDocumento').prop('onkeypress','if(checkEnter(event)) fu_BuscarDNI(this.value)');
    }else{
        $('#cboPais').val('-1');
        $('#btoBuscarDNI').css('display', 'none');
        $('#txtDocumento').prop('onkeypress','');
        fu_limpiarDatoDNI();
    }
}

function fu_BuscarDNI(){
    var tiDoc = $.trim($("#cboDocumento").val());
    var nuDni = $.trim($("#txtDocumento").val()); 
    var cantCaracteres = nuDni.length;
    if(tiDoc === "1"){
        if(cantCaracteres === 8){
            $('#btoBuscarDNI').attr('disabled',true);
            fu_validarDNI(nuDni);
            $('#btoBuscarDNI').attr('disabled',false);
        }else{
            $("#txtDocumento").focus();
            if(cantCaracteres>8){
                bootbox.alert("<p align='center'>"+IPRESS+"</p>"+
                              "El numero ingresado es mayor de los 8 caracteres permitidos....");
            }
            if(cantCaracteres<8){
                bootbox.alert("<p align='center'>"+IPRESS+"</p>"+
                              "El numero ingresado es menor de los 8 caracteres permitidos....");
            }
        }
    }else if(tiDoc === "-1"){
        bootbox.alert("<p align='center'>"+IPRESS+"</p>"+
                      " Deve de selecionar el tipo documento DNI.");
        $("#cboDocumento").focus();
    }
}

function fu_validarDNI(nuDni){
    fu_limpiarDatoDNI();
    console.log( 'valor dni :'+nuDni);
    //blockUI();
    var dni = {nuDni:nuDni};
    $.ajax({
        url: 'solActualizacionRetiro.htm?action=validarDNI',
        cache:false,
        async:true,
        type:'POST',
        data: dni,
        dataType : 'json',
        success: function(data){
                //endCargando();
                if (huboErrorJson(data)){			        		
                    if (huboErrorValidacionJson(data)){
                        //estadoInputError( '#divCabeceraInsertarUsuario', data, estadoInicial );
                        console.log( 'INGRESO huboErrorValidacionJson:'+JSON.stringify(data));
                        return;
                    }  			        		
                    handleErrorJson(data);
                    return;
                }
                console.log('data: '+JSON.stringify(data));
                var persona = data.dataJson.persona; 
                $("#txtDocumento").val(persona.nuDni);
                $("#txtAPaterno").val(persona.apPaterno);
                $("#txtAMaterno").val(persona.apMaterno);
                $("#txtACasada").val(persona.apCasada);
                $("#txtNombres").val(persona.preNombres);
                $("#txtFecNac").val(persona.feNac);
                $("#cboSexo").val(persona.coGenero);
                //desabilitar
                $('#txtFecNac, #txtAPaterno, #txtAMaterno, #txtACasada, #txtNombres, #cboSexo, #cboPais').attr('disabled',true);
                $('#txtTlf1').focus();
                //fu_validaCasadaUtil('cboSexo','txtACasada');
                //endCargando();
        },
        error: function(data, textStatus, errorThrown) {	        	
            handleError(data); 
        }
    });
    //$.unblockUI();
}

function fu_limpiarDatoDNI(){
    $('#txtDocumento, #txtFecNac, #txtAPaterno, #txtAMaterno, #txtACasada, #txtNombres, #cboSexo, #cboPais').attr('disabled',false);
    $('#txtDocumento, #txtFecNac, #txtAPaterno, #txtAMaterno, #txtACasada, #txtNombres').val("");
    $('#cboSexo').val("-1");
    $('#txtDocumento').focus();
}

function fu_selectDepartamento(){
    var cboDepartamento = $.trim($("#cboDepartamento").val());
    var cboDepartamentoAux = $.trim($("#cboDepartamentoAux").val());
    if(cboDepartamento !== cboDepartamentoAux){
        $("#cboProvincia").val("-1");
        $("#cboDistrito").val("-1");
        $("#cboDepartamentoAux").val(cboDepartamento);
        //carga de combo provincia
        var rowDefault = "";
        CargarProvinciasUtil(cboDepartamento,$("#cboProvincia"),rowDefault);
    }
}

function fu_selectProvincia(){
    var cboProvincia = $.trim($("#cboProvincia").val());
    var cboProvinciaAux = $.trim($("#cboProvinciaAux").val());
    if(cboProvincia !== cboProvinciaAux){
        $("#cboDistrito").val("-1");
        $("#cboProvinciaAux").val(cboProvincia);
        //carga de combo distrito
        CargarDistritoUtil(cboProvincia,$("#cboDistrito"));
    }
}

/* global bootbox, etiquetasControles, IPRESS, Renipress */
function fu_goTipoPersona(valor){
    //var tipoPersona =  $("#tipoPersona").val();
    var tipoPersona =  valor;
    //alert("tipo Persona ="+tipoPersona);
    if(tipoPersona==="01"){//PN
        $("#divPerNatural").css("display", "block");
        $("#divAcordionDatoGeneral").css("display", "block");
        $("#divPerJuridica").css("display", "none");
        $("#tipoPersonaPJ").prop("checked", false);
    }
    if(tipoPersona==="02"){//PJ
        $("#divPerJuridica").css("display", "block");
        $("#divAcordionDatoGeneral").css("display", "block");
        $("#divPerNatural").css("display", "none");
        $("#tipoPersonaPN").prop("checked", false);
    }
}

function loadAutorizarDatoGnereal(){
    /*$("#tipoPersonaPJ").prop("checked", true);
    fu_goTipoPersona('02');
    $( "#tipoPersonaPJ" ).prop( "disabled", true );
    $( "#tipoPersonaPN" ).prop( "disabled", true );*/
}

function loadEvaluarDatoGnereal(){
    $("#tipoPersonaPJ").prop("checked", true);
    fu_goTipoPersona('02');
    $( "#tipoPersonaPJ" ).prop( "disabled", true );
    $( "#tipoPersonaPN" ).prop( "disabled", true );
}


/*
function loadEdit1(){
    $("#tipoEstablecimiento2").prop("checked", true);
    $( "#x" ).prop( "disabled", true );
    $("#clasi2").prop("checked", true);
    $( "#x" ).prop( "disabled", true );
}*/

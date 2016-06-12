/* 
 * creado : dlarico
 * Fecha  : 30/03/2015
 * 
 */
//PopGenerico Util
function LanzarPopGenericoUtil(titulo, mensaje, sel) {
    $('#lblTituloGenericoUtil').text(titulo);
    $('#lblMensajeGenericoUtil').text(mensaje);

    $('#popGenericoUtil').modal({
        backdrop: 'static',
        keyboard: false
    }).one('click', '[data-value]', function (e) {
        if ($(this).data('value')) {
            //$('#'+sel).focus();
        }
    });
}
function LanzarPopGeneralUtil(titulo, mensaje) {
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

//variables globales
var IPRESS = "Registro Nacional de IPRESS - SUSALUD";
var dep;
var flagDebug = true;
var etiquetasControles = {
	sexo : "(Seleccione Sexo)",
	pais : "(Seleccione País)",
	departamento : "(Seleccione Departamento)",
	provincia : "(Seleccione Provincia)",
	distrito : "(Seleccione Distrito)",
	via : "(Seleccione Vía)"

};
// datapicker para los caso fecha
$(document).ready(function(){
    $('.datapicker').datepicker({language: 'es'});
});
// Obtener la ruta absoluta
function getAbsolutePath() {
    var loc = window.location;
    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') - 1);
    return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
}
//Carga de Combo Provincia
function CargarProvinciasUtil(depa, obj, rowDefault) {
    var select = obj;
    CargarComboDefectoUtil(select, rowDefault);
    $.getJSON('solicitud.htm?action=selectUbigeo&tipo=PR&codigoUbigeo='+depa, function(json){
        var select = obj;
        json.forEach(function(item, num){
            select.append($('<option/>', {
                value : item.ID,
                text : item.UBIGEO
            }));
        });
    });
}
//Carga de combo Distrito
function CargarDistritoUtil(prov, obj) {	
    $.getJSON('solicitud.htm?action=selectUbigeo&tipo=DI&codigoUbigeo='+prov, function(json) {
        var select = obj;
        json.forEach(function(item, num){
            select.append($('<option/>', {
              value : item.ID,
              text : item.UBIGEO
            }));
        });
    });		
}

//Carga de combo por defecto
function CargarComboDefectoUtil(objLista, rowDefault) {
    objLista.empty();
    if (rowDefault !== '' || rowDefault === undefined) {
        objLista.append($('<option/>', {
                value : "",
                text : rowDefault
        }));
    }
}
//Validar apellido casado
function fu_validaCasadaUtil(noCboSexo, noCampoApCa){
    var valorCbo = $.trim($('#'+noCboSexo).val());
    var textoCbo = $("#"+noCboSexo+" option:selected").html();
    if (textoCbo === 'Masculino') {
            console.log('Valores valorCbo ='+valorCbo+", textoCbo ="+textoCbo+", noCampoApCa ="+noCampoApCa);
            $("#"+noCampoApCa).val("");
            $("#"+noCampoApCa).attr('disabled', true);
            
    } 
    if (textoCbo === 'Femenino') {
            console.log('Valores valorCbo ='+valorCbo+", textoCbo ="+textoCbo+", noCampoApCa ="+noCampoApCa);
            $("#"+noCampoApCa).attr('disabled', false);
    }
}

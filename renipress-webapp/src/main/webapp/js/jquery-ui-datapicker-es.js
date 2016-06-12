﻿$(function($){
    $.datepicker.regional['es'] = {
        closeText: 'Cerrar',
        prevText: '<Ant',
        nextText: 'Sig>', 
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Mi&eacute;rcoles', 'Jueves', 'Viernes', 'S&aacute;bado'],
        dayNamesShort: ['Dom','Lun','Mar','Mi&eacute;','Juv','Vie','S&aacute;b'],
        dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','S&aacute;'],
        weekHeader: 'Sm',  
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,		
        showMonthAfterYear: true,
        yearSuffix: '',	
		changeMonth: true,
		changeYear: true,
		showWeek: true,
		showButtonPanel: true,
		yearRange: "-70:+20",
    };
    $.datepicker.setDefaults($.datepicker.regional['es']);
});
//variables globales
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
var listaModulos;


$.fn.resetForm = function() {
    return this.each(function(){
        this.reset();
    });
}

var proxy = $.fn.serializeArray;
$.fn.serializeArray = function(){
    var inputs = this.find(':disabled');
    inputs.prop('disabled', false);
    var serialized = proxy.apply( this, arguments );
    inputs.prop('disabled', true);
    return serialized;
};

$(function() {
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
		personaRRHHxls=[];
	});
	
	$('#filAdjuntarRRHH').change(function(){
	    var ext = this.value.match(/\.(.+)$/)[1];
	    switch(ext)
	    {
	        case 'xls':
	        	break;
	        default:
	            this.value='';
	    }
	});
	
	$.ajax({
		url : "solicitud.htm?action=selectPais",
		dataType : "json",
		success : function(result) {
			CargarPaises(result, $('#cboPais'), etiquetasControles.pais);
			CargarPaises(result, $('#cboPaisRA'), etiquetasControles.pais);
			CargarPaises(result, $('#cboPaisRRLL'), etiquetasControles.pais);
			CargarPaises(result, $('#cboPaisRAS'), etiquetasControles.pais);
			CargarPaises(result, $('#cboPaisExcel'), etiquetasControles.pais);

		},
		error : function(result) {
		}
	});
	// PARA CARGAR LOS MODULOS AUTOMATICAMENTE
	$.ajax({
		url : "solicitud.htm?action=selectModulo",
		dataType : "json",
		success : function(result) {
			listaModulos = result;
			// options.success(result);
		},
		error : function(result) {

		}
	});

	CargarValidadoresIPRESS();
	// CargarDepartamentos('js/ubigeos.json',
	// $('#cboDepartamento'),etiquetasControles.departamento);
	CargarDepartamentos('solicitud.htm?action=selectUbigeo&tipo=DE', $('#cboDepartamento'),etiquetasControles.departamento);
	
	// CargarDepartamentos('js/ubigeos.json',
	// $('#cboDepRA'),etiquetasControles.departamento);
	CargarDepartamentos('solicitud.htm?action=selectUbigeo&tipo=DE', $('#cboDepRA'),etiquetasControles.departamento);
	
	 //CargarDepartamentos('js/ubigeos.json',$('#cboDepDE'),etiquetasControles.departamento);
	 CargarDepartamentos('solicitud.htm?action=selectUbigeo&tipo=DE', $('#cboDepDE'),etiquetasControles.departamento);
	//CargarDepartamentos('solicitud.htm?action=selectUbigeo&tipo=DE', $('#cboDepDE'),etiquetasControles.departamento);

	CargarDepartamentos('solicitud.htm?action=selectUbigeo&tipo=DE', $('#cboDepartamentoDA'),etiquetasControles.departamento);
	
	//CargarVia();

	// INSCRIPCION IPRESS
	// DATOS GENERALES

	ValidadoresDatosGenerales();
	ValidadoresRRLL();
	ValidadoresEstablecimiento();
	ValidadoresRAS();
	ValidadoresDAdicionales();
	ValidadoresRHHIndividual()
	MostrarTipDoc();
//	MostrarAutoridadSanit();
	MostrarProfesion();
	MostrarTipoEstablecimiento();
	// DATOS GENERALES

	// MANEJO DE OPCIONES PARA PPJJ PPNN
	$('#datos-generales-radio-persona-juridica').click(function() {
		$('#txtRucRA').val('');
		$('#cbdoTipoDocRA').val('');
		$('#txtNroDocRA').val('');
		$('#cboPaisRA').val('');
		$('#txtFecNacRA').val('');
		$('#cboSexoRA').val('');
		$('#txtAPaternoRA').val('');
		$('#txtAMaternoRA').val('');
		$('#txtACasadaRA').val('');
		$('#txtNombresRA').val('');
		
	});

	$('#datos-generales-radio-persona-natural').click(function() {
		$('#txtRucPJRA').val('');
		$('#txtRSocialPJRA').val('');
		$('#txtNComercialPJRA').val('');
		
	});

	$('#btnEnviaReporte').click(function() {
		imprimirPDF();
	});

});

// ------------------------------------------------------INSCRIPCION IPRESS

function CrearDatePicker() {
	var tabla = RetornaObjTabla('gdDocAdjuntos');
	tabla.forEach(function(item, num) {
		if (num > 0) {
			if (($(item[5]).find('input')).length > 0) {
				$(item[5]).find('input').datepicker({
					format : 'dd/mm/yyyy',
				});
			}
		}
	});
}

var sexoCache=[];
function CargarSexo(select) {
	try {
		  $.getJSON('solicitud.htm?action=selectSexo', function(json) {
			  sexoCache=json;
			  sexoCache.forEach(function(item, num){
					select.append($('<option/>', {
								value : item.CO_CODVALOR,
								text : item.DE_VALOR
							}));
			  });
		});
	} catch (e) {
	}	
}

function CargarVia(select) {
	try {
		  $.getJSON('categorizacionIpress.htm?action=selectTipoVia', function(json) {
			  
			  json.forEach(function(item, num){
					select.append($('<option/>', {
								value : item.CO_CODVALOR,
								text : item.DE_VALOR
							}));
			  });
		});
	} catch (e) {
	}
}
/*
function CargarVia() {
	try {
		CargarComboArrayJSON($('#cboVia'), [ {
			id : 1,
			nombre : 'AVENIDA'
		}, {
			id : 2,
			nombre : 'CALLE'
		}, {
			id : 3,
			nombre : 'JIRON'
		}, {
			id : 4,
			nombre : 'OTROS'
		} ]);
	} catch (e) {
	}
}*/
function CargaControles() {
	try {
		$('.datepicker').datepicker({
			autoclose : true
		});
		// CargarComboDefecto($('#cboSexo'), etiquetasControles.sexo);
		CargarComboDefecto($('#cboProvincia'), etiquetasControles.provincia);
		CargarComboDefecto($('#cboDistrito'), etiquetasControles.distrito);
		CargarComboDefecto($('#cboProvinciaDA'), etiquetasControles.provincia);
		CargarComboDefecto($('#cboDistritoDA'), etiquetasControles.distrito);
		CargarComboDefecto($('#cboVia'), etiquetasControles.via);
	} catch (e) {
		if (flagDebug)
			console.debug("ipress/CargaControles " + e);
	}
}
function ConfigControles() {
	try {
		$('#txtDocumento').blur(function(){
			$('#cboPais').val('');
			$('#cboFecNac').val('');
			$('#cboSexo').val('');
			$('#txtAPaterno').val('');
			$('#txtAMaterno').val('');
			$('#txtACasada').val('');
			$('#txtNombres').val('');
			
			if($('#cboDocumento').val()==='1' && $('#txtDocumento').val().length===8){
				$.ajax({
					url : "solicitud.htm?action=selectDNI&dni="+this.value,
					dataType : "json",
					success : function(result) {
						if(result.coError!=='0000'){
							this.value='';
							alert('dni no es valido');
						}else{
							$('#cboFecNac').val(result.feNac);
							$('#txtAPaterno').val(result.apPaterno);
							$('#txtAMaterno').val(result.apMaterno);
							$('#txtNombres').val(result.preNombres);
							$('#cboSexo').val(result.coGenero==='M'?'1':'2'); // F M
							$('#txtACasada').val(result.coGenero==='M'?'':result.apCasado);
						}
					},
					error : function(result) {
		//				options.error(result);
					}
				});
			}
		});

		$('#txtNroDocRA').blur(function(){
			if($('#cbdoTipoDocRA').val()==='1' && $('#txtNroDocRA').val().length===8){
				$.ajax({
					url : "solicitud.htm?action=selectDNI&dni="+this.value,
					dataType : "json",
					success : function(result) {
						if(result.coError!=='0000'){
							this.value='';
							alert('dni no es valido');
						}else{
							$('#txtFecNacRA').val(result.feNac);
							$('#txtAPaternoRA').val(result.apPaterno);
							$('#txtAMaternoRA').val(result.apMaterno);
							$('#txtNombresRA').val(result.preNombres);
							$('#cboSexoRA').val(result.coGenero==='M'?'1':'2'); // F M
							$('#txtACasadaRA').val(result.coGenero==='M'?'':result.apCasado);
						}
					},
					error : function(result) {
		//				options.error(result);
					}
				});
			}
		});
		
		$('#txtNroDocRRLL').blur(function(){
			if($('#cboTipoDocRRLL').val()==='1' && $('#txtNroDocRRLL').val().length===8){
				$.ajax({
					url : "solicitud.htm?action=selectDNI&dni="+this.value,
					dataType : "json",
					success : function(result) {
						if(result.coError!=='0000'){
							this.value='';
							alert('dni no es valido');
						}else{
							$('#txtFecNacRRLL').val(result.feNac);
							$('#txtAPaternoRRLL').val(result.apPaterno);
							$('#txtAMaternoRRLL').val(result.apMaterno);
							$('#txtNombresRRLL').val(result.preNombres);
							$('#cboSexoRRLL').val(result.coGenero==='M'?'1':'2'); // F M
							$('#txtACasadaRRLL').val(result.coGenero==='M'?'':result.apCasado);
						}
					},
					error : function(result) {
		//				options.error(result);
					}
				});
			}
		});	
		
		$('#txtNroDocRAS').blur(function(){
			if($('#cboDocIdenRAS').val()==='1' && $('#txtNroDocRAS').val().length===8){
				$.ajax({
					url : "solicitud.htm?action=selectDNI&dni="+this.value,
					dataType : "json",
					success : function(result) {
						if(result.coError!=='0000'){
							this.value='';
							alert('dni no es valido');
						}else{
							$('#txtFecNacRAS').val(result.feNac);
							$('#txtAPaternoRAS').val(result.apPaterno);
							$('#txtAMaternoRAS').val(result.apMaterno);
							$('#txtNombresRAS').val(result.preNombres);
							$('#cboSexoRAS').val(result.coGenero==='M'?'1':'2'); // F M
							$('#txtACasadaRAS').val(result.coGenero==='M'?'':result.apCasado);
						}
					},
					error : function(result) {
		//				options.error(result);
					}
				});
			}
		});			
		
		$('#cboDocumento').change(function() {
			var txtD = "txtDocumento";
			if (this.value === "1") {
				$("#" + txtD).rules("add", {
					number : true
				});
				$('#txtAPaterno').attr('disabled',true);
				$('#txtAMaterno').attr('disabled',true);
				$('#txtACasada').attr('disabled',true);
				$('#txtNombres').attr('disabled',true);
				$('#cboFecNac').attr('disabled',true);
				$('#cboSexo').attr('disabled',true);
			} else {
				$("#" + txtD).rules("remove", "number");
				$('#txtAPaterno').attr('disabled',false);
				$('#txtAMaterno').attr('disabled',false);
				$('#txtACasada').attr('disabled',false);
				$('#txtNombres').attr('disabled',false);
				$('#cboFecNac').attr('disabled',false);
				$('#cboSexo').attr('disabled',false);
			}
			//$('#' + txtD).blur();
		});

		$('#cboTipoDocExcel').change(function() {
			var txtD = "txtNroDocExcel";
			if (this.value === "1") {
				$("#" + txtD).rules("add", {
					number : true
				});
			} else {
				$("#" + txtD).rules("remove", "number");
			}
			$('#' + txtD).blur();
		});

		$('#cbdoTipoDocRA').change(function() {
			var txtD = "txtNroDocRA";
			if (this.value === "1") {
				$("#" + txtD).rules("add", {
					number : true
				});
				$('#txtAPaternoRA').attr('disabled',true);
				$('#txtAMaternoRA').attr('disabled',true);
				$('#txtACasadaRA').attr('disabled',true);
				$('#txtNombresRA').attr('disabled',true);
				$('#txtFecNacRA').attr('disabled',true);
				$('#cboSexoRA').attr('disabled',true);
				
			} else {
				$("#" + txtD).rules("remove", "number");
				$('#txtAPaternoRA').attr('disabled',false);
				$('#txtAMaternoRA').attr('disabled',false);
				$('#txtACasadaRA').attr('disabled',false);
				$('#txtNombresRA').attr('disabled',false);
				$('#txtFecNacRA').attr('disabled',false);
				$('#cboSexoRA').attr('disabled',false);
			}
			$('#' + txtD).blur();
		});

		$('#cboTipoDocRRLL').change(function() {
			var txtD = "txtNroDocRRLL";
			if (this.value === "1") {
				$("#" + txtD).rules("add", {
					number : true
				});
				$('#txtAPaternoRRLL').attr('disabled',true);
				$('#txtAMaternoRRLL').attr('disabled',true);
				$('#txtACasadaRRLL').attr('disabled',true);
				$('#txtNombresRRLL').attr('disabled',true);
				$('#txtFecNacRRLL').attr('disabled',true);
				$('#cboSexoRRLL').attr('disabled',true);
				
			} else {
				$("#" + txtD).rules("remove", "number");
				$('#txtAPaternoRRLL').attr('disabled',false);
				$('#txtAMaternoRRLL').attr('disabled',false);
				$('#txtACasadaRRLL').attr('disabled',false);
				$('#txtNombresRRLL').attr('disabled',false);
				$('#txtFecNacRRLL').attr('disabled',false);
				$('#cboSexoRRLL').attr('disabled',false);
				
				
			}
			$('#' + txtD).blur();
		});

		$('#cboDocIdenRAS').change(function() {
			var txtD = "txtNroDocRAS";
			if (this.value === "1") {
				$("#" + txtD).rules("add", {
					number : true
				});
				$('#txtAPaternoRAS').attr('disabled',true);
				$('#txtAMaternoRAS').attr('disabled',true);
				$('#txtACasadaRAS').attr('disabled',true);
				$('#txtNombresRAS').attr('disabled',true);
				$('#txtFecNacRAS').attr('disabled',true);
				$('#cboSexoRAS').attr('disabled',true);
				
				
			} else {
				$("#" + txtD).rules("remove", "number");
				$('#txtAPaternoRAS').attr('disabled',false);
				$('#txtAMaternoRAS').attr('disabled',false);
				$('#txtACasadaRAS').attr('disabled',false);
				$('#txtNombresRAS').attr('disabled',false);
				$('#txtFecNacRAS').attr('disabled',false);
				$('#cboSexoRAS').attr('disabled',false);
			}
			$('#' + txtD).blur();
		});

		$('#cboDepartamento').change(
				function() {
					CargarComboDefecto($('#cboProvincia'),
							etiquetasControles.provincia);
					CargarComboDefecto($('#cboDistrito'),
							etiquetasControles.distrito);
					CargarProvinciasEstablecimiento(this.value, $('#cboProvincia'),
							etiquetasControles.provincia);
				});

		$('#cboDepartamentoDA').change(
				function() {
					CargarComboDefecto($('#cboProvinciaDA'),
							etiquetasControles.provincia);
					CargarComboDefecto($('#cboDistritoDA'),
							etiquetasControles.distrito);
					CargarProvinciasEstablecimiento(this.value, $('#cboProvinciaDA'),
							etiquetasControles.provincia);
					$('#cboDepDE').val(this.value);
					
					$('#cboIPAutoridadSanit').empty();
					$('#cboIPAutoridadSanit').append($('<option/>', {
						value : "",
						text : 'Seleccione'
					}));
				});
		
		$('#cboDepRA').change(
				function() {
					CargarComboDefecto($('#cboProRA'),
							etiquetasControles.provincia);
					CargarComboDefecto($('#cboDisRA'),
							etiquetasControles.distrito);
					CargarProvincias(this.value, $('#cboProRA'),
							etiquetasControles.provincia);
				});

		/*$('#cboDepDE').change(
				function() {
					CargarComboDefecto($('#cboProvDE'),
							etiquetasControles.provincia);
					CargarComboDefecto($('#cboDistDE'),
							etiquetasControles.distrito);
					CargarProvincias(this.value, $('#cboProvDE'),
							etiquetasControles.provincia);
				});*/

		$('#cboProvincia').change(
				function() {
					CargarComboDefecto($('#cboDistrito'),
							etiquetasControles.distrito);
					CargarDistrito(this.value, $('#cboDistrito'),
							etiquetasControles.distrito);
				});

		$('#cboProvinciaDA').change(
				function() {
					//$('#cboProvDE').val($('#cboProvinciaDA').val());
					CargarComboDefecto($('#cboDistritoDA'),
							etiquetasControles.distrito);
					CargarDistritoEstablecimiento(this.value, $('#cboDistritoDA'),
							etiquetasControles.distrito);
				});
		
		$('#cboDistritoDA').change(
				function() {
					$('#cboIPAutoridadSanit').empty();
					$('#cboIPAutoridadSanit').append($('<option/>', {
						value : "",
						text : 'Seleccione'
					}));
	
					$('#cboDistDE').val($('#cboDistritoDA').val());
					//CargarComboDefecto($('#cboDistritoDA'),etiquetasControles.distrito);
					//CargarDistrito(this.value, $('#cboDistritoDA'),etiquetasControles.distrito);
					CargarAutoridadSanitaria(this.value, $('#cboIPAutoridadSanit'),'Seleccione Autoridad Sanitaria');
				});
		
		$('#cboProRA').change(
				function() {
					CargarComboDefecto($('#cboDisRA'),
							etiquetasControles.distrito);
					CargarDistrito(this.value, $('#cboDisRA'),
							etiquetasControles.distrito);
				});
		/*$('#cboProvDE').change(
				function() {
					CargarComboDefecto($('#cboDistDE'),
							etiquetasControles.distrito);
					CargarDistrito(this.value, $('#cboDistDE'),
							etiquetasControles.distrito);
				});*/

	} catch (e) {
		if (flagDebug)
			console.debug("ipress/ConfigControles " + e);
	}
}
function CargarComboDefecto(objLista, rowDefault) {
	try {
		objLista.empty();
		if (rowDefault !== '' || rowDefault === undefined) {
			objLista.append($('<option/>', {
				value : "",
				text : rowDefault
			}));
		}
	} catch (e) {
		if (flagDebug)
			console.debug("ipress/CargarComboDefecto " + e);
	}
}
function CargarComboArrayJSON(objLista, json) {
	try {
		var simpleObj = {
			id : '',
			valor : ''
		};
		var arrProp = [];
		$.each(json, function(index, itemData) {
			if (arrProp.length === 0) {
				for (attr in itemData) {
					arrProp.push(attr);
				}
			}
			simpleObj.id = arrProp[0];
			simpleObj.valor = arrProp[1];
			objLista.append($('<option/>', {
				value : itemData[simpleObj.id],
				text : itemData[simpleObj.valor]
			}));
		});
	} catch (e) {
		if (flagDebug)
			console.debug("ipress/CargarComboArrayJSON " + e);
	}
}
function CargarComboObjJSON(objLista, json) {
	try {
		$.each(json, function(index, itemData) {
			objLista.append($('<option/>', {
				value : itemData.CO_IDPAIS, // itemData
				text : itemData.DE_DESCRIPCION
			}));
		});
	} catch (e) {
		if (flagDebug)
			console.debug("ipress/CargarComboJSON " + e);
	}
}
function CargarPaises(json, obj, rowDefault) {
	try {
		// var select = obj;
		CargarComboDefecto(obj, rowDefault);
		CargarComboObjJSON(obj, json);

		/*
		 * $.getJSON(url, function(json) { var select = obj;
		 * CargarComboDefecto(select, rowDefault); CargarComboObjJSON(obj,
		 * json); });
		 */
	} catch (e) {
		if (flagDebug)
			console.debug("ipress/CargarPaises " + e);
	}
}

var departamentoCache=[];
function CargarDepartamentos(url, obj, rowDefault) {
	var select = obj;
	CargarComboDefecto(select, rowDefault);
	try {
		if (departamentoCache.length===0){
			  $.getJSON(url, function(json) {
				  departamentoCache=json;
				
				departamentoCache.forEach(function(item, num){
			        	select.append($('<option/>', {
									value : item.ID,
									text : item.UBIGEO
								}));
			      });
			      
			      
					});
		}else{
			departamentoCache.forEach(function(item, num){
	        	select.append($('<option/>', {
							value : item.ID,
							text : item.UBIGEO
						}));
	      });
		}
	} catch (e) {
		if (flagDebug)
			console.debug("ipress/CargarDepartamentos " + e);
	}
}
function CargarProvincias(depa, obj, rowDefault) {
	try {
		var select = obj;
		CargarComboDefecto(select, rowDefault);
		  $.getJSON('solicitud.htm?action=selectUbigeo&tipo=PR&codigoUbigeo='+depa, function(json) {
		        var select = obj;
		        json.forEach(function(item, num){
		            select.append($('<option/>', {
		              value : item.ID,
		              text : item.UBIGEO
		            }));
		        });
			});
	} catch (e) {
		if (flagDebug)
			console.debug("ipress/CargarProvincias " + e);
	}
}

function CargarProvinciasEstablecimiento(depa, obj, rowDefault) {
	try {
		var select = obj;
		CargarComboDefecto(select, rowDefault);
		  $.getJSON('solicitud.htm?action=selectUbigeo&tipo=PR&codigoUbigeo='+depa, function(json) {
		        var select = obj;
		        json.forEach(function(item, num){
		            select.append($('<option/>', {
		              value : item.ID,
		              text : item.UBIGEO
		            }));
		        });
		        //SE CARGA AUTOMATICAMENTE SEGUN REGLA DE NEGOCIO
		        var select = $('#cboProvDE');
		        json.forEach(function(item, num){
		            select.append($('<option/>', {
		              value : item.ID,
		              text : item.UBIGEO
		            }));
		        });
			});
	} catch (e) {
		if (flagDebug)
			console.debug("ipress/CargarProvincias " + e);
	}
}

function CargarDistrito(prov, obj, rowDefault) {
	try {
		  $.getJSON('solicitud.htm?action=selectUbigeo&tipo=DI&codigoUbigeo='+prov, function(json) {
		        var select = obj;
		        json.forEach(function(item, num){
		            select.append($('<option/>', {
		              value : item.ID,
		              text : item.UBIGEO
		            }));
		        });
			});		
	} catch (e) {
		if (flagDebug)
			console.debug("ipress/CargarDistrito " + e);
	}
}

function CargarDistritoEstablecimiento(prov, obj, rowDefault) {
	$('#cboProvDE').val(prov);
	try {
		  $.getJSON('solicitud.htm?action=selectUbigeo&tipo=DI&codigoUbigeo='+prov, function(json) {
		        var select = obj;
		        json.forEach(function(item, num){
		            select.append($('<option/>', {
		              value : item.ID,
		              text : item.UBIGEO
		            }));
		        });
		        var select = $('#cboDistDE');
		        json.forEach(function(item, num){
		            select.append($('<option/>', {
		              value : item.ID,
		              text : item.UBIGEO
		            }));
		        });
		        
			});		
	} catch (e) {
		if (flagDebug)
			console.debug("ipress/CargarDistrito " + e);
	}
}


function CargarAutoridadSanitaria(ubigeo, obj, rowDefault) {
	try {
		  $.getJSON('solicitud.htm?action=selectAutSanUbi&ubigeo='+ubigeo, function(json) {
		        var select = obj;
		        json.forEach(function(item, num){
		            select.append($('<option/>', {
		              value : item.CO_IDAUTORIDADSANIT,
		              text : item.DE_NOMBRE
		            }));
		        });
		        //SE RECARGA EL COMBO DE AUTORIDAD SANITARIA DEL ESTABLECIMIENTO
		        var select = $('#cboAutSanitaria');
		        json.forEach(function(item, num){
		            select.append($('<option/>', {
		              value : item.CO_IDAUTORIDADSANIT,
		              text : item.DE_NOMBRE
		            }));
		        });
		        
			});		
	} catch (e) {
		if (flagDebug)
			console.debug("ipress/CargarAutoridadSanitaria " + e);
	}
}

function RetornaDataForm(form) {
	return $('#' + form).serialize();
}

function CargarValidadoresIPRESS() {
	// generico para controles con campos vacios
	$.validator.addMethod("ValidaVacios", function(value, element) {
		if (value === '') {
			return false;
		} else {
			return true;
		}
	}, '');

	$.validator.addMethod("ValidaSoloLetras", function(value, element) {
		var objRegExp = /^[a-z\u00C0-\u00ff]+$/;
		if (!objRegExp.test(value)) {
			return false;
		} else {
			return true;
		}
	}, '');

	$.validator.addMethod("ValidaDocumento", function(value, element) {
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
		case "0":
			return false;
			break;
		default:
			return true;
		}
	}, '');

	$.validator.addMethod("ValidaVia", function(value, element) {
		if (value != '') {
			if ($('#txtDetVia').val() == '') {
				return false;
			} else {
				return true;
			}
		} else {
			if ($('#txtDetVia').val() == '') {
				return true;
			} else {
				return false;
			}
		}
	}, '');

	$.validator.addMethod("ValidaVia1", function(value, element) {
		if (value != '') {
			if ($('#cboViaNombreRA').val() == '') {
				return false;
			} else {
				return true;
			}
		} else {
			if ($('#cboViaNombreRA').val() == '') {
				return true;
			} else {
				return false;
			}
		}
	}, '');

	$.validator.addMethod("ValidaVia2", function(value, element) {
		if (value != '') {
			if ($('#txtViaDetDE').val() == '') {
				return false;
			} else {
				return true;
			}
		} else {
			if ($('#txtViaDetDE').val() == '') {
				return true;
			} else {
				return false;
			}
		}
	}, '');
	
	$.validator.addMethod("ValidaMzLtNro", function(value, element) {
		if($('#txtDetVia').val()!==''){
			if($('#txtNroSOL').val()!=='' || $('#txtMzSOL')!==''  || $('#txtLtSOL')!==''){
				return true;
			}	else{
				return false;
			}
		}
		
	}, '');

	// validacion de formulario inscripcion IPRESS
	$('#frmInscripcionIPRESS')
			.validate(
					{
						submitHandler : function(form) {

							var arreglo = [];

							var listaObj = $('#gdDocAdjuntos tr');
							var listaSubObj;
							for (var i = 1; i < listaObj.length; i++) {
								var objeto = {
									id : '',
									nroDoc : '',
									fecEmi : '',
									archivo : '',
									obligatoriedad : '',
									docReq:''
								};
								listaSubObj = $(listaObj[i]).find('input');
								for (var j = 0; j < listaSubObj.length; j++) {
									objeto.id = listaSubObj[j].id.split('-')[1]
									switch (listaSubObj[j].id.split('-')[0]) {
									case 'filAd':
										objeto.archivo = listaSubObj[j].value;
										break;
									case 'txtDoc':
										objeto.nroDoc = listaSubObj[j].value;
										break;
									case 'txtFecEmi':
										objeto.fecEmi = listaSubObj[j].value;
										break;
									case 'hdnObli':
										objeto.obligatoriedad = listaSubObj[j].value;
										break;

									}
								}
								arreglo.push(objeto);
							}
							var arrAdjTemp = [];
							var sumObligatoriedad = 0;
							arreglo.forEach(function(element, index, array) {
								if (element.obligatoriedad === '1'
										&& element.archivo === '') {
									sumObligatoriedad++;
								}
								if (element.archivo !== '') {
									arrAdjTemp.push(element);
								}

							});

							listaObj = {
								'arreglo' : JSON.stringify(arrAdjTemp)
							}
							if (sumObligatoriedad > 0) {
								LanzarPopGenerico('Documentos Obligatorios',
										'Ingrese documentos obligatorios.')
								return;
							}

							// PARA LA INSERCION Y ACTUALIZACION SE VALIDA QUE
							// EXISTA EL NUMERO DE SOLICITUD
							$('#popConfirmaSolicitud')
									.modal({
										backdrop : 'static',
										keyboard : false
									})
									.one(
											'click',
											'[data-value]',
											function(e) {
												if ($(this).data('value') == '1') {
													$.ajax({
																url : "solicitud.htm?"+ RetornaDataForm('frmInscripcionIPRESS')	+ '&cboPais='+ $('#cboPais').val() + "&idSolicitud="+$('#idSolicitud').val(), 
																dataType : "json",
																type:'POST',
																success : function(
																		result) {
																	// NOTIFICACION
																	// DE
																	// REGISTRO
																	// DE
																	// SOLICITUD
																	
																	$('#li-section-datos-generales').removeClass('disabled');
																	$('#li-section-datos-generales').removeClass('disabledTab');
																	
																	$(
																			'#lblTituloPopGenerico')
																			.text(
																					'Registro de Solicitud');
																	$(
																			'#lblConenidoPopGenerico')
																			.text(
																					'Se ha registrado la solicitud '
																							+ result.P_IDSOLICITUD);

																	$(
																			'#popGenericoRegistro')
																			.modal(
																					{
																						backdrop : 'static',
																						keyboard : false
																					})
																			.one(
																					'click',
																					'[data-value]',
																					function(
																							e) {
																						if ($(
																								this)
																								.data(
																										'value') == '1') {

																						} else {
																							return;
																						}
																					});

																	$(
																			'#idSolicitud')
																			.val(
																					result.P_IDSOLICITUD);
																	// CARGA DE
																	// ARCHIVOS
																	// EN LA
																	// INTERFAZ
																	$
																			.ajax({
																				url : "solicitud.htm?action=actualizarAdjuntosSolicitud&idSolicitud="
																						+ result.P_IDSOLICITUD,
																				dataType : "json",
																				data : listaObj,
																				success : function(
																						result) {

																				},
																				error : function(
																						result) {
																				}
																			});
																	console
																			.debug(result);
																},
																error : function(
																		result) {

																}
															});

													$(
															'#li-section-datos-generales a[href="#section-datos-generales"]')
															.tab('show');

												} else {
													return;
												}
											});

						},
						rules : {
							cboDocumento : {
								required : true
							},
							txtDocumento : {
								ValidaDocumento : true,
								number : true
							},
							cboPais : {
								ValidaVacios : true
							},
							cboFecNac : {
								ValidaVacios : true
							},
							cboSexo : {
								ValidaVacios : true
							},
							txtAPaterno : {
								ValidaVacios : true,
							// alphanumeric : true
							},
							txtAMaterno : {
							// ValidaVacios : true,
							// alphanumeric : true
							},
							txtACasada : {
							// alphanumeric : true
							},
							txtNombres : {
								ValidaVacios : true,
							// alphanumeric : true
							// ValidaSoloLetras : true
							},
							txtTlf1 : {
								ValidaVacios : true,
							// ValidaSoloLetras : true
							},
							/*
							 * txtTlf1: { }, txtTlf2: { },
							 */
							txtCorreo1 : {
								required : true,
								email : true
							},
							txtCorreo2 : {
								// required : true,
								email : true
							},
							cboDepartamento : {
								ValidaVacios : true
							},
							cboProvincia : {
								ValidaVacios : true
							},
							cboDistrito : {
								ValidaVacios : true
							},
							txtNroSOL : {
								ValidaMzLtNro:true,
								number : true
							},
							txtNroPiso : {
								number : true
							},
							txtNroDpto : {
								number : true
							},
							txtMzSOL : {
								ValidaMzLtNro : true
							},
							txtLtSOL : {
								ValidaMzLtNro : true
							},
							txtNroInt : {
								number : true
							},
							cboIPAutoridadSanit : {
								required : true
							},
							cboVia : {
								ValidaVia : true
							},

						},
						highlight : function(element) {
							$(element).closest('.form-group').addClass(
									'has-error');
						},
						unhighlight : function(element) {
							$(element).closest('.form-group').removeClass(
									'has-error');
						},
						errorElement : 'span',
						errorClass : 'help-block',
						errorPlacement : function(error, element) {
							if (element.parent('.input-group').length) {
								error.insertAfter(element.parent());
							} else {
								error.insertAfter(element);
							}
						}
					});

}

// ------------------------------------------------------INSCRIPCION IPRESS

// ------------------------------------------------------DATOS GENERALES

function ValidadoresDatosGenerales() {
	jQuery.validator.addMethod("alphanumeric", function(value, element) {
		return this.optional(element) || /^\w+$/i.test(value);
	}, "Letters, numbers, and underscores only please");

	$.validator.addMethod("ValidaVacios", function(value, element) {
		if (value === '') {
			return false;
		} else {
			return true;
		}
	}, '');

	$.validator.addMethod("ValidaSoloLetras", function(value, element) {
		var objRegExp = /^[a-z\u00C0-\u00ff]+$/;
		if (!objRegExp.test(value)) {
			return false;
		} else {
			return true;
		}
	}, '');

	$.validator.addMethod("ValidaDocumento", function(value, element) {
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
		case "0":
			return false;
			break;
		default:
			return true;
		}
	}, '');

	$.validator.addMethod("ValidaDocumentoProp", function(value, element) {
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

	$.validator.addMethod("ValidaDocumentoRRLL", function(value, element) {
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

	$.validator.addMethod("ValidaDocumentoRA", function(value, element) {
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

	$.validator.addMethod("ValidaRUCPJ", function(value, element) {
		if($('#txtRucRA').val() === '' && $('#txtRucPJRA').val() === ''){
			return false;
		}
		if ($('#txtRucRA').val() === '' && $('#txtRucPJRA').val() !== '') {
			return true;
		} else {
			if ($('#txtRucRA').val() !== '' && $('#txtRucPJRA').val() === '') {
				return true;
			} else {
				return false;
			}
		}
	}, '');

	$.validator.addMethod("ValidaRUCPN", function(value, element) {
		if($('#txtRucRA').val() === '' && $('#txtRucPJRA').val() === ''){
			return false;
		}
		if ($('#txtRucRA').val() === '' && $('#txtRucPJRA').val() !== '') {
			return true;
		} else {
			if ($('#txtRucRA').val() !== '' && $('#txtRucPJRA').val() === '') {
				return true;
			} else {
				return false;
			}
		}
	}, '');

	$.validator.addMethod("ValidaRZPJ", function(value, element) {
		if ($('#txtRucPJRA').val() !== '') {
			if ($('#txtRSocialPJRA').val() === '') {
				return false;
			}else{
				return true;
			}
		}else{
			return true;
		} 
	}, '');

	// validacion de formulario inscripcion IPRESS
	$('#frmDatosPropietario').validate({
		ignore : [],
		rules : {
			// PN
			txtRucRA : {
				ValidaRUCPN : true,
				//minlength : 11,
				//number : true

			},
			cbdoTipoDocRA : {
				ValidaRUCPN : true
			},
			txtNroDocRA : {
				ValidaRUCPN : true,
				//ValidaDocumentoProp : true
			},
			cboPaisRA : {
				ValidaRUCPN : true
			},
			txtFecNacRA : {
				ValidaRUCPN : true
			},
			cboSexoRA : {
				ValidaRUCPN : true
			},
			txtAPaternoRA : {
				ValidaRUCPN : true,
			// alphanumeric : true
			},
			txtAMaternoRA : {
			// alphanumeric : true
			},
			txtACasadaRA : {
			// alphanumeric : true
			},
			txtNombresRA : {
				ValidaRUCPN : true,
			// alphanumeric : true
			},

			// PJ
			txtRucPJRA : {
				//minlength : 11,
				ValidaRUCPJ : true,
				//number : true
			},
			txtRSocialPJRA : {
				ValidaRZPJ : true
			// required : true
			},

			// DIRECCION
			cboDepRA : {
				required : true
			},
			cboProRA : {
				required : true
			},
			cboDisRA : {
				required : true
			},

			// DATOS COMPLEMENTARIOS
			txtTelRA : {
				required : true
			},
			txtEmailRA : {
				email : true,
				required : true
			},
			txtReEmailRA : {
				email : true,
				required : true
			},
			txtNroRA : {
				number : true
			},
			txtNroPisoRA : {
				number : true
			},
			txtNroDptoRA : {
				number : true
			},
			txtInteriorRA : {
				number : true
			},
			cboViaRA : {
				ValidaVia1 : true
			},
		},
		highlight : function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight : function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		},
		errorElement : 'span',
		errorClass : 'help-block',
		errorPlacement : function(error, element) {
			if (element.parent('.input-group').length) {
				error.insertAfter(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});

}

function ValidadoresRRLL() {
	$.validator.addMethod("ValidaVacios", function(value, element) {
		if (value === '') {
			return false;
		} else {
			return true;
		}
	}, '');

	$.validator.addMethod("ValidaSoloLetras", function(value, element) {
		var objRegExp = /^[a-z\u00C0-\u00ff]+$/;
		if (!objRegExp.test(value)) {
			return false;
		} else {
			return true;
		}
	}, '');

	$.validator.addMethod("ValidaDocumento", function(value, element) {
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
		case "0":
			return false;
			break;
		default:
			return true;
		}
	}, '');

	// validacion de formulario inscripcion IPRESS
	$('#frmDatosRRLL').validate({
		ignore : [],
		rules : {

			cboTipoDocRRll : {
				required : true
			},
			txtNroDocRRLL : {
				required : true,
				ValidaDocumentoRRLL : true,
			},

			cboPaisRRLL : {
				required : true
			},
			txtFecNacRRLL : {
				required : true
			},
			cboSexoRRLL : {
				required : true
			},
			txtAPaternoRRLL : {
				required : true,
			// alphanumeric : true
			},
			txtNombresRRLL : {
				required : true,
			// alphanumeric : true
			},
			txtAMaternoRRLL : {
			// alphanumeric : true
			},
			txtACasadaRRLL : {
			// alphanumeric : true
			},

			cboProfesionRRLL : {
				required : true
			},
			txtTelRRLL : {
				required : true
			},
			txtEmailRRLL : {
				email : true,
				required : true
			},
			txtReEmailRRLL : {
				email : true,
				required : true
			},
			txtNroRA : {
				number : true
			},
			txtNroPisoRA : {
				number : true
			},
			txtNroDptoRA : {
				number : true
			},
			txtInteriorRA : {
				number : true
			},

		},
		highlight : function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight : function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		},
		errorElement : 'span',
		errorClass : 'help-block',
		errorPlacement : function(error, element) {
			if (element.parent('.input-group').length) {
				error.insertAfter(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});

}

function ValidadoresEstablecimiento() {
	$.validator.addMethod("ValidaVacios", function(value, element) {
		if (value === '') {
			return false;
		} else {
			return true;
		}
	}, '');

	$.validator.addMethod("ValidaSoloLetras", function(value, element) {
		var objRegExp = /^[a-z\u00C0-\u00ff]+$/;
		if (!objRegExp.test(value)) {
			return false;
		} else {
			return true;
		}
	}, '');

	$.validator.addMethod("ValidaDocumento", function(value, element) {
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
		case "0":
			return false;
			break;
		default:
			return true;
		}
	}, '');

	$.validator.addMethod("ValidaRedVisible", function(value, element) {
		if(document.getElementById('clasificacionEntidad').style.display==='none'){
			return true;
		}else{
			return false;
		}

	}, '');

	
	// validacion de formulario inscripcion IPRESS
	$('#frmDatosEstablecimiento').validate({
		ignore : [],
		rules : {
			txtRazonSocialDE : {
				required : true
			},
			cboDepDE : {
				required : true
			},
			cboProvDE : {
				required : true
			},
			cboDistDE : {
				required : true
			},
			cboCompatibilidadDE : {
				required : true
			},
			/*
			 * txtNroDocDE : { required : true }, filCompatibilidadDE : {
			 * required : true },
			 */
			txtNroDocDE : {
				required : true
			},
			/*
			 * filLicMuniDE : { required : true },
			 */
			txtTelDatosDE : {
				required : true
			},
			txtEmailDatosDE : {
				required : true,
				email : true
			},
			txtReEmailDatosDE : {
				required : true,
				email : true
			},
			txtFecIniDatosDE : {
				required : true,
			},
			txtNroDE : {
				number : true,
			},
			txtNroPisoDE : {
				number : true,
			},
			txtNroDepDE : {
				number : true,
			},
			txtNroIntDE : {
				number : true,
			},
			cboAutSanitaria : {// RESTABLECER
			// required : true,
			},
			cboRedEst : {
				ValidaRedVisible : true,
			},
			cboMicroRedEst : {
				ValidaRedVisible : true,
			},
			cboUniEjeEst : {
				ValidaRedVisible : true,
			},
			cboEstClasEst : {
				ValidaRedVisible : true,
			},
			cboInstitucionEst : {
				required : true,
			},
			cboViaDE : {
				ValidaVia2 : true,
			},
		},
		highlight : function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight : function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		},
		errorElement : 'span',
		errorClass : 'help-block',
		errorPlacement : function(error, element) {
			if (element.parent('.input-group').length) {
				error.insertAfter(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});

}

function ValidadoresRAS() {
	$.validator.addMethod("ValidaVacios", function(value, element) {
		if (value === '') {
			return false;
		} else {
			return true;
		}
	}, '');

	$.validator.addMethod("ValidaSoloLetras", function(value, element) {
		var objRegExp = /^[a-z\u00C0-\u00ff]+$/;
		if (!objRegExp.test(value)) {
			return false;
		} else {
			return true;
		}
	}, '');

	$.validator.addMethod("ValidaDocumento", function(value, element) {
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
		case "0":
			return false;
			break;
		default:
			return true;
		}
	}, '');

	// validacion de formulario inscripcion IPRESS
	$('#frmDatosRAS').validate({
		ignore : [],
		rules : {
			cboDocIdenRAS : {
				required : true
			},
			txtNroDocRAS : {
				required : true,
				ValidaDocumentoRA : true
			},
			cboPaisRAS : {
				required : true
			},
			txtFecNacRAS : {
				required : true
			},
			cboFecNacRAS : {
				required : true
			},
			txtAPaternoRAS : {
				required : true,
			// alphanumeric : true
			},
			txtAMaternoRAS : {
			// alphanumeric : true
			},
			txtACasadaRAS : {
			// alphanumeric : true
			},

			cboColeProfRAS : {
				required : true
			},
			txtNroColegiaturaRAS : {
				required : true
			},
			txtTelRAS : {
				required : true
			},
			txtEmailRAS : {
				required : true,
				email : true
			},
			txtReEmailRAS : {
				required : true,
				email : true
			},
			txtNombresRAS : {
				required : true,
			// alphanumeric : true
			},

		},
		highlight : function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight : function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		},
		errorElement : 'span',
		errorClass : 'help-block',
		errorPlacement : function(error, element) {
			if (element.parent('.input-group').length) {
				error.insertAfter(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});

	/*$('#frmDatosRRHH').validate({

		rules : {
			cboTipoDocExcel : {
				required : true
			},
			txtNroDocExcel : {
				required : true
			},
			cboPaisExcel : {
				required : true
			},
			txtFecNacExcel : {
				required : true
			},
			CboSexoExcel : {
				required : true
			},
			txtAPaternoExcel : {
				required : true
			},
			txtNombresExcel : {
				required : true
			},
			txtRecEspExcel : {
				required : true
			},

		},
		highlight : function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight : function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		},
		errorElement : 'span',
		errorClass : 'help-block',
		errorPlacement : function(error, element) {
			if (element.parent('.input-group').length) {
				error.insertAfter(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});*/

}

function ValidadoresDAdicionales() {
	$.validator.addMethod("ValidaVacios", function(value, element) {
		if (value === '') {
			return false;
		} else {
			return true;
		}
	}, '');

	$.validator.addMethod("ValidaSoloLetras", function(value, element) {
		var objRegExp = /^[a-z\u00C0-\u00ff]+$/;
		if (!objRegExp.test(value)) {
			return false;
		} else {
			return true;
		}
	}, '');

	$.validator.addMethod("ValidaDocumento", function(value, element) {
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
		case "0":
			return false;
			break;
		default:
			return true;
		}
	}, '');

	// validacion de formulario inscripcion IPRESS
	$('#frmDatosGrlAdicional').validate({
		rules : {
			txtNroEstDA : {
				required : true
			},
			cboCuentaPoblacionDA : {
				required : true
			},
			cboTipoAtencionDA : {
				required : true
			},

		},
		highlight : function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight : function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		},
		errorElement : 'span',
		errorClass : 'help-block',
		errorPlacement : function(error, element) {
			if (element.parent('.input-group').length) {
				error.insertAfter(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});

	$('#frmPopTerciarizacion').validate({
		rules : {
			txtRUCTerciarizacion : {
				required : true,
				minlength : 11,
			},
			txtRZTerciarizacion : {
				required : true
			},
			txtNCTerciarizacion : {
				required : true
			},
			txtTCTerciarizacion : {
				required : true
			},
		},
		highlight : function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight : function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		},
		errorElement : 'span',
		errorClass : 'help-block',
		errorPlacement : function(error, element) {
			if (element.parent('.input-group').length) {
				error.insertAfter(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});

}

function ValidadoresRHHIndividual() {

	$.validator.addMethod("ValidaACasadaExcel", function(value, element) {
		if($('#CboSexoExcel').val()==='1' ){
			$('#txtACasadaExcel').val('');
			return true;
		}else{
			if($('#CboSexoExcel').val()==='2'  ){
				return true;
			}else{
				return false;
			}
		}
	}, '');
	
	$.validator.addMethod("ValidaDocumentoExcel", function(value, element) {
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
	
	$('#frmDatosRRHHIndividual').validate({
		ignore : [],
		rules : {
			cboTipoDocExcel : {
				required : true
			},
			txtNroDocExcel : {
				required : true,
				ValidaDocumentoExcel:true
			},
			cboPaisExcel : {
				//cboPaisExcel : true
			},
			txtFecNacExcel : {
				required : true
			},
			CboSexoExcel : {
				required : true
			},
			txtAPaternoExcel : {
				required : true
			},
			/*txtAMaternoExcel : {
				required : true
			},*/
			txtACasadaExcel : {
				ValidaACasadaExcel : true
			},
			txtNombresExcel : {
				required : true
			},
			txtRecEspExcel : {
				required : true
			},
		},
		highlight : function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight : function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		},
		errorElement : 'span',
		errorClass : 'help-block',
		errorPlacement : function(error, element) {
			if (element.parent('.input-group').length) {
				error.insertAfter(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});
}

function SeleccionaCompetencia(){
	//IMPLEMENTAR PARALA CARGA MANUAL DE UPSS
	
}

function CargarArchivo(nameFile) {
	var data = new FormData();
	var files = $("#" + nameFile).get(0).files;
	if (files.length > 0) {
		$.each(files, function(key, value) {
			// console.debug(key + ": " + value);
			data.append("UploadedImage", files[key]);
		});
	}
	var ajaxRequest = $.ajax({
		type : "POST",
		url : "solicitud.htm?action=adjuntar",
		contentType : false,
		processData : false,
		data : data
	});
	ajaxRequest.done(function(xhr, textStatus) {
		console.debug("estado->" + textStatus);
	});
}

function GuardarIpress() {
	/*
	 * if ($('#frmDatosPropietario').valid() && $('#frmDatosRRLL').valid() &&
	 * $('#frmDatosEstablecimiento').valid() && $('#frmDatosRAS').valid() ) {
	 */

	if (!$('#frmDatosPropietario').valid()) {
		return;
	}

	if ($('#txtNroDocRRLL').val() !== '') {
		if (!$('#frmDatosRRLL').valid()) {
			return;
		}
	}

	if ($('#cboTipoEstablecimiento').val() !== '') {
		if (!$('#frmDatosEstablecimiento').valid()) {
			return;
		}
	}

	/*
	 * //RESTABLECER PARA VALIDACION if ($('#cboTipoEstablecimiento').val() !==
	 * '') { if (!$('#frmDatosGrlAdicional').valid()) { return; } }
	 */

	/*
	 * var arrStringClasificacion=''; if(arrClasEst.length>0){
	 * arrStringClasificacion = { 'arreglo' : JSON.stringify(arrClasEst) } }
	 */
	// PARA REGISTRO DE UPSS
	arrUPSSSTemp = [];
	UPSSDatosAdicionales.forEach(function(item, num) {
		if (item.FLAG === '1' && item.terciarizada !== '') {
			arrUPSSSTemp.push(item);
		}
	});

	var objX = RetornaObjTabla('datable-grilla40');
	var listaReqs = [];
	
	objX.forEach(function(i, n) {
		console.debug(n);
		if(i.length>0){
			var objetoReq = {};
			objetoReq.upss=upssActivo;
			i.forEach(function(j, nu) {
				
					if ($(j).find('input').length > 0) {
						switch (nu) {
						case 2:
							objetoReq.si = $(j).find('input')[0].checked;
							break;
						case 3:
							objetoReq.no = $(j).find('input')[0].checked;
							break;
						case 4:
							//objetoReq.cantidad = $(j).find('input')[0].value;
							objetoReq.cantidad = ($(j).find('input[type=number]').length>0?$(j).find('input[type=number]').val():'') ;
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
	listaReqs.forEach(function(item, n) {
		if (item.si || item.no  ) {
			sumador++;
		}

	});
	
	var sumaOcultos=0;
	$('#datable-grilla40').find('tr').each(function(num,item){
	  if($(item).attr('style')!==undefined){
	    console.log($(item).attr('style'));
	    if(($(item).attr('style').split(':')[1])==='none'){
	      console.log('invisible');
	      sumaOcultos++;
	    }
	  }
	});
	sumador+=sumaOcultos;
	if (objX.length - 1 === sumador) {
		console.debug('requisitos completos');
		$('#' + idUPPSIcon).removeClass("btn-gris").removeClass("btn-warning").addClass("btn-success");
	} else {
		if( objX.length - 1 !== sumador && sumador>0){
			$('#' + idUPPSIcon).removeClass("btn-gris").removeClass("btn-success").addClass("btn-warning");
		}else{
			$('#' + idUPPSIcon).removeClass("btn-warning").removeClass("btn-success").addClass("btn-gris");
		}
	}

	
	//SE VALIDA QUE SE INGRESE INFORMACION EN TODO EL FORMULARIO
	var tabDesh=$('li.disabled.disabledTab');
	$(tabDesh).each(function (index,value){
	  $(value).removeClass('disabled').removeClass('disabledTab');    
	});
	
	$.ajax({
		url : "solicitud.htm?action=insertDatosGeneralesSol",
		dataType : "json",
		type : "POST",
		data : $('#frmDatosPropietario').serialize() + '&'
				+ $('#frmDatosRRLL').serialize() + '&'
				+ $('#frmDatosEstablecimiento').serialize() + '&'
				+ $('#frmDatosGrlAdicional').serialize() + '&'
				+ $('#frmDatosRAS').serialize() + '&idSolicitud='
				+ $('#idSolicitud').val() + '&idSolicitudIPRESS='
				+ $('#idSolicitudIPRESS').val() + '&arregloEst='
				+ JSON.stringify(arrClasEst) + '&arregloUPSS='
				+ JSON.stringify(arrUPSSSTemp) // JSON.stringify(arrUPSSDAdicional)
				+ '&arregloAct=' + arrActividadDAdicional.toString()
				+ '&arregloReq=' + JSON.stringify(listaReqs) 
				+ '&arregloRRHH='	+ JSON.stringify(rrhhListaValidos)
				+ '&arrDocReqs='	+ JSON.stringify(listaDocsAutSanit)
				,

		success : function(result) {
			$('#lblTituloPopGenerico').text('Registro de Solicitud IPRESS');
			$('#lblConenidoPopGenerico').text(
					'Se ha registrado la solicitud IPRESS ' + result);

			$('#popGenericoRegistro').modal({
				backdrop : 'static',
				keyboard : false
			}).one('click', '[data-value]', function(e) {
				if ($(this).data('value') == '1') {

				} else {
					return;
				}
			});

			$('#idSolicitudIPRESS').val(result);
			console.debug(result);
		},
		error : function(result) {

		}
	});

	// }

}

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
		url : "solicitud.htm?action=selectTipDoc",
		dataType : "json",
		data : $('#frmDatosPropietario').serialize(),
		success : function(result) {
			var cboDoc = $('#cboDocumento');
			var cboDocDP = $('#cbdoTipoDocRA');
			var cboDocRRLL = $('#cboTipoDocRRLL');

			jQuery.each(result, function(a, b) {
				cboDoc.append($('<option ></option>').val(b.CO_CODVALOR).html(
						b.DE_VALOR));
				cboDocDP.append($('<option ></option>').val(b.CO_CODVALOR)
						.html(b.DE_VALOR));
				cboDocRRLL.append($('<option ></option>').val(b.CO_CODVALOR)
						.html(b.DE_VALOR));
			});
		},
		error : function(result) {

		}
	});

}

// /FIX QA

function ValidaCasada() {
	$('#txtACasada').val('');
	var e = document.getElementById("cboSexo");
	var strUser = e.options[e.selectedIndex].text;
	if (e.options[e.selectedIndex].text === 'Masculino') {
		$('#txtACasada').attr('disabled', true)
	} else {
		$('#txtACasada').attr('disabled', false)
	}

}

function ValidaCasada1() {
	$('#txtACasadaRA').val('');
	var e = document.getElementById("cboSexoRA");
	var strUser = e.options[e.selectedIndex].text;
	if (e.options[e.selectedIndex].text === 'Masculino') {
		$('#txtACasadaRA').attr('disabled', true)
	} else {
		$('#txtACasadaRA').attr('disabled', false)
	}
}

function ValidaCasadaRRLL() {
	var e = document.getElementById("cboSexoRRLL");
	var strUser = e.options[e.selectedIndex].text;
	if (e.options[e.selectedIndex].text === 'Masculino') {
		$('#txtACasadaRRLL').attr('disabled', true)
	} else {
		$('#txtACasadaRRLL').attr('disabled', false)
	}
}

function ValidaCasadaRRHH() {
	var e = document.getElementById("CboSexoExcel");
	var strUser = e.options[e.selectedIndex].text;
	if (e.options[e.selectedIndex].text === 'Masculino') {
		$('#txtACasadaExcel').attr('disabled', true);
		$('#txtACasadaExcel').val('');
	} else {
		$('#txtACasadaExcel').attr('disabled', false)
	}
}

function ValidaCasadaRA() {
	var e = document.getElementById("cboSexoRAS");
	var strUser = e.options[e.selectedIndex].text;
	if (e.options[e.selectedIndex].text === 'Masculino') {
		$('#txtACasadaRAS').attr('disabled', true)
	} else {
		$('#txtACasadaRAS').attr('disabled', false)
	}
}

function MostrarAutoridadSanit() {
	$.ajax({
		url : "solicitud.htm?action=selectAutSan",
		dataType : "json",
		success : function(result) {
			var cboDoc = $('#cboIPAutoridadSanit');
			jQuery.each(result, function(a, b) {
				cboDoc.append($('<option ></option>')
						.val(b.CO_IDAUTORIDADSANIT).html(b.DE_NOMBRE));

			});
		},
		error : function(result) {
		}
	});
}

function MostrarProfesion() {

	$.ajax({
		url : "solicitud.htm?action=selectProfesion",
		dataType : "json",
		success : function(result) {
			var cboDoc = $('#cboProfesionRRLL');
			jQuery.each(result, function(a, b) {
				cboDoc.append($('<option ></option>').val(b.CO_IDPROFESION)
						.html(b.DE_DESCRIPCION));

			});
		},
		error : function(result) {
		}
	});
}

function MostrarTipoEstablecimiento() {

	$.ajax({
		url : "solicitud.htm?action=selectTipoClas",
		dataType : "json",
		success : function(result) {
			var cboDoc = $('#cboTipoEstablecimiento');
			jQuery.each(result, function(a, b) {
				cboDoc.append($('<option ></option>').val(b.CO_CODVALOR).html(
						b.DE_VALOR));

			});
		},
		error : function(result) {
		}
	});
}

var objListaEstablecimientos = [];
function MostrarEstablecimiento(tipo) {
	if (tipo !== '') {
		$.ajax({
			url : "solicitud.htm?action=selectClasEst&tipoEst=" + tipo,
			dataType : "json",
			success : function(result) {
				objListaEstablecimientos = result;
				dsGdClasificaEstab.read();
			},
			error : function(result) {
			}
		});
	}

}

function ObtenerClasificaEstab() {
	return objListaEstablecimientos;
}

function ValidarPais() {
	if ((document.getElementById('cboDocumento').options[document
			.getElementById('cboDocumento').selectedIndex].text).toUpperCase() === "DNI") { // PERU
		$('#cboPais').val('174');
		$('#cboPais').attr('disabled', true)
	} else {
		$('#cboPais').attr('disabled', false)
	}
}

function ValidarPais1() {
	if ((document.getElementById('cboTipoDocRRLL').options[document
			.getElementById('cboTipoDocRRLL').selectedIndex].text)
			.toUpperCase() === "DNI") { // PERU
		$('#cboPaisRRLL').val('174');
		$('#cboPaisRRLL').attr('disabled', true)
	} else {
		$('#cboPaisRRLL').attr('disabled', false)
	}
}

function ValidarPais2() {
	if ((document.getElementById('cbdoTipoDocRA').options[document
			.getElementById('cbdoTipoDocRA').selectedIndex].text).toUpperCase() === "DNI") { // PERU
		$('#cboPaisRA').val('174');
		$('#cboPaisRA').attr('disabled', true)
	} else {
		$('#cboPaisRA').attr('disabled', false)
	}
}

function ValidarPais3() {
	if ((document.getElementById('cboDocIdenRAS').options[document
			.getElementById('cboDocIdenRAS').selectedIndex].text).toUpperCase() === "DNI") { // PERU
		$('#cboPaisRAS').val('174');
		$('#cboPaisRAS').attr('disabled', true)
	} else {
		$('#cboPaisRAS').attr('disabled', false)
	}
}

function ValidarPais4() {
	if ((document.getElementById('cboTipoDocExcel').options[document
			.getElementById('cboTipoDocExcel').selectedIndex].text).toUpperCase() === "DNI") { // PERU
		$('#cboPaisExcel').val('174');
		$('#cboPaisExcel').attr('disabled', true)
	} else {
		$('#cboPaisExcel').attr('disabled', false)
	}
}

function MostrarAutUbiego(ubigeo) {
	$('#cboAutSanitaria').empty();
	$.ajax({
		url : "solicitud.htm?action=selectAutSanUbigeo&ubigeo=" + ubigeo,
		dataType : "json",
		success : function(result) {
			var cboDoc = $('#cboAutSanitaria');
			jQuery.each(result, function(a, b) {
				cboDoc.append($('<option selected></option>').val(
						b.CO_IDAUTORIDADSANIT).html(b.DE_NOMBRE));
			});
		},
		error : function(result) {
		}
	});
}

function MostrarInstitucion(ubigeo) {
	// $('#cboAutSanitaria').empty();
	$.ajax({
		url : "solicitud.htm?action=selectIntitucion",
		dataType : "json",
		success : function(result) {
			var cboDoc = $('#cboInstitucionEst');
			jQuery.each(result, function(a, b) {
				cboDoc.append($('<option ></option>').val(b.CO_IDINSTITUCION)
						.html(b.DE_DESCRIPCION));
			});
		},
		error : function(result) {
		}
	});
}

function MostrarRed(ubigeo) {
	$.ajax({
		url : "solicitud.htm?action=selectRed",
		dataType : "json",
		success : function(result) {
			var cboDoc = $('#cboRedEst');
			jQuery.each(result, function(a, b) {
				cboDoc.append($('<option ></option>').val(b.CO_IDRED).html(
						b.DE_NOMBRE));
			});
		},
		error : function(result) {
		}
	});
}

function MostrarMicroRed(red) {
	$.ajax({
		url : "solicitud.htm?action=selectMicroRed&cboRedEst=" + red,
		dataType : "json",
		success : function(result) {
			var cboDoc = $('#cboMicroRedEst');
			jQuery.each(result, function(a, b) {
				cboDoc.append($('<option ></option>').val(b.CO_IDMICRORED)
						.html(b.DE_DESCRIPCION));
			});
		},
		error : function(result) {
		}
	});
}

function MostrarUniEjecutora(idInstitucion) {
	if (document.getElementById('cboInstitucionEst').options[document
			.getElementById('cboInstitucionEst').selectedIndex].text == 'OTRO'
			|| document.getElementById('cboInstitucionEst').options[document
					.getElementById('cboInstitucionEst').selectedIndex].text === 'PRIVADO') {
		document.getElementById('clasificacionEntidad').style.display = 'none'
		return;
	} else {
		document.getElementById('clasificacionEntidad').style.display = 'block'
	}

	$('#cboUniEjeEst').empty();
	$.ajax({
		url : "solicitud.htm?action=selectUnEjecutora&cboInstitucionEst="
				+ idInstitucion,
		dataType : "json",
		success : function(result) {
			var cboDoc = $('#cboUniEjeEst');
			jQuery.each(result, function(a, b) {
				cboDoc.append($('<option ></option>').val(b.CO_IDUNIDADEJE)
						.html(b.DE_DESCRIPCION));
			});
		},
		error : function(result) {
		}
	});
}

function MostrarEstabClas(ubigeo) {
	// $('#cboAutSanitaria').empty();
	$.ajax({
		url : "solicitud.htm?action=selectEstClas",
		dataType : "json",
		success : function(result) {
			var cboDoc = $('#cboEstClasEst');
			jQuery.each(result, function(a, b) {
				cboDoc.append($('<option ></option>').val(b.CO_IDCLAS).html(
						b.DE_DESCRIPCION));
			});
		},
		error : function(result) {
		}
	});
}

function MostrarGrupoEtareo(ubigeo) {
	$.ajax({
		url : "solicitud.htm?action=selectGrupoEtareo",
		dataType : "json",
		success : function(result) {
			var cboDoc = $('#cboGrupoEtarioDA');
			jQuery.each(result, function(a, b) {
				cboDoc.append($('<option ></option>').val(b.CO_CODVALOR).html(
						b.DE_VALOR));
			});
		},
		error : function(result) {
		}
	});
}

function MostrarTipoAtencion(ubigeo) {
	$.ajax({
		url : "solicitud.htm?action=selectTipoAtencion",
		dataType : "json",
		success : function(result) {
			var cboDoc = $('#cboTipoAtencionDA');
			jQuery.each(result, function(a, b) {
				cboDoc.append($('<option ></option>').val(b.CO_CODVALOR).html(
						b.DE_VALOR));
			});
		},
		error : function(result) {
		}
	});
}

setTimeout(function() {
	MostrarInstitucion()
	MostrarRed()
	// MostrarMicroRed()
	// MostrarUniEjecutora()
	MostrarEstabClas()
	MostrarGrupoEtareo();
	MostrarTipoAtencion();
}, 3000);

var arrClasEst = [];
function SelClasificacion(item, valor) {
	if ($(item).is(":checked")) {
		arrClasEst.push(valor);
	} else {
		arrClasEst = EliminarASimple(arrClasEst, valor);
	}

}

var arrUPSSDAdicional = [];
function SelUPSSDAdicional(item, valor) {
	if ($(item).is(":checked")) {
		$('#cboUPSSD' + valor).attr('disabled', false);
		arrUPSSDAdicional.push(valor);
	} else {
		$('#cboUPSSD' + valor).attr('disabled', true);
		document.getElementById('cboUPSSD' + valor).selectedIndex = 0
		arrUPSSDAdicional = EliminarASimple(arrUPSSDAdicional, valor);
	}

}

var arrActividadDAdicional = [];
function SelActividadDG(item, valor) {
	if ($(item).is(":checked")) {
		// $('#cboUPSSD' + valor).attr('disabled', false);
		arrActividadDAdicional.push(valor);
	} else {
		// $('#cboUPSSD' + valor).attr('disabled', true);
		// document.getElementById('cboUPSSD' + valor).selectedIndex = 0
		arrActividadDAdicional = EliminarASimple(arrActividadDAdicional, valor);
	}

}

var arrUPPSSCompuesto = [];
var indicarUPSSTemp = 0;
function SeleccionaTerciarizada(me, item) {
	var upssItem = {};
	if (me.value === '1') {
		indicarUPSSTemp = item;
		if ($('#chkUPSS' + item).is(':checked')) {
			// ABRIR POPUB
			$('#popUPSSTerciarizada').show();
			$('#popUPSSTerciarizada')
					.modal({
						backdrop : 'static',
						keyboard : false,
					})
					.one(
							'click',
							'[data-value]',
							function(e) {
								if ($(this).data('value') == '2') {
									console.debug('opcion cancelar');
									document.getElementById('cboUPSSD' + item).selectedIndex = 0
									$('#cboUPSSD' + item)
											.attr('disabled', true);
									$('#chkUPSS' + item).attr('checked', false);
								}
							});

		} else {

			console.debug('seleccione la casilla');
		}
	} else {
		if (me.value === '2') { // RESPUESTA ES NO
			var upssItem = (SeleccionLike(UPSSDatosAdicionales, 'CO_IDUPSS',
					item))[0];
			upssItem.terciarizada = '2';
			upssItem.ruc = '';
			upssItem.razonSocial = '';
			upssItem.numeroContrato = '';
			upssItem.tipoContrato = '';
			upssItem.FLAG = '1';
			// document.getElementById('frmPopTerciarizacion').reset();
			Eliminacion(UPSSDatosAdicionales, 'CO_IDUPSS', item)
			indicarUPSSTemp = 0;
			UPSSDatosAdicionales.push(upssItem);
			Ordenamiento(UPSSDatosAdicionales, 'CO_IDUPSS', 'ASC')
			dsGdUPSSDA.read()
		}
	}

}

// TODO RESTAURAR PARA EL REGISTRO DE LA IPRESS

$('#btnGuardarUPSSTempGrilla').click(
		function() {

			if ($('#frmPopTerciarizacion').valid()) {
				// AGREGANDO ITEM UPSS SIMPLE
				var upssItem = (SeleccionLike(UPSSDatosAdicionales,
						'CO_IDUPSS', indicarUPSSTemp))[0];
				upssItem.terciarizada = '1';
				upssItem.ruc = $('#txtRUCTerciarizacion').val();
				upssItem.razonSocial = $('#txtRZTerciarizacion').val();
				upssItem.numeroContrato = $('#txtNCTerciarizacion').val();
				upssItem.tipoContrato = $('#txtTCTerciarizacion').val();
				upssItem.FLAG = '1';
				document.getElementById('frmPopTerciarizacion').reset();
				Eliminacion(UPSSDatosAdicionales, 'CO_IDUPSS', indicarUPSSTemp)
				indicarUPSSTemp = 0;
				UPSSDatosAdicionales.push(upssItem);
				Ordenamiento(UPSSDatosAdicionales, 'CO_IDUPSS', 'ASC')
				dsGdUPSSDA.read()
				// $('#popUPSSTerciarizada').hide();
				$('#popUPSSTerciarizada').modal('hide');
			}
		});

// ------------------------------------------------------DATOS GENERALES


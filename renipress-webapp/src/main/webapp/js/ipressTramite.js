$(function() {
	$('#cboFecNac').datepicker({
		format : 'dd/mm/yyyy',
	});
	CargarSolicIpress();
	//CrearDatePicker();
	$('.dpGeneral').datepicker();
});

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

// COMPONENTE PARA CARGA DE COMBOS
function CargarCombo(atrCombo) {
	try {
		var select = $('#' + atrCombo.nombreCombo);
		select.append($('<option/>', {
			value : '',
			text : atrCombo.mensaje
		}));
		$.getJSON(atrCombo.url, function(json) {
			json.forEach(function(item, num) {
				select.append($('<option/>', {
					value : eval('item.' + atrCombo.campo),
					text : eval('item.' + atrCombo.valor)
				}));
			});
		});
	} catch (e) {
		console.log('error-> ' + e);
	}
}

function CargarTipoVia() {
	var atrCombo = {
		nombreCombo : 'cboVia',
		url : 'categorizacionIpress.htm?action=selectTipoVia',
		mensaje : 'Seleccione Via',
		campo : 'CO_CODVALOR',
		valor : 'DE_VALOR'
	};
	try {
		var select = $('#' + atrCombo.nombreCombo);
		select.append($('<option/>', {
			value : '',
			text : atrCombo.mensaje
		}));
		$.getJSON(atrCombo.url, function(json) {
			json.forEach(function(item, num) {
				select.append($('<option/>', {
					value : eval('item.' + atrCombo.campo),
					text : eval('item.' + atrCombo.valor)
				}));
			});
			$('#cboVia').val(solicitudObj[0].CO_IDTIPOVIA);
		});
	} catch (e) {
		console.log('error-> ' + e);
	}
}

function CargarCategoria() {
	var atrCombo = {
		nombreCombo : 'cboCategoria',
		url : 'categorizacionIpress.htm?action=selectCategoria',
		mensaje : 'Seleccione Categoria',
		campo : 'CO_IDCATEGORIA',
		valor : 'DE_NOMBRE'
	};

	try {
		var select = $('#' + atrCombo.nombreCombo);
		select.append($('<option/>', {
			value : '',
			text : atrCombo.mensaje
		}));
		$.getJSON(atrCombo.url, function(json) {
			json.forEach(function(item, num) {
				select.append($('<option/>', {
					value : eval('item.' + atrCombo.campo),
					text : eval('item.' + atrCombo.valor)
				}));
			});

			if (solicitudObj[0].CO_IDCATEGASIGNADA !== undefined) {
				$('#cboCategoria').val(solicitudObj[0].CO_IDCATEGASIGNADA);
			}
		});
	} catch (e) {
		console.log('error-> ' + e);
	}

}

function CargarTipoDocumento() {
	var atrCombo = {
		nombreCombo : 'cboDocIdentidad',
		url : 'solicitud.htm?action=selectTipDoc',
		mensaje : 'Seleccione Tipo Documento',
		campo : 'CO_CODVALOR',
		valor : 'DE_VALOR'
	};
	try {
		var select = $('#' + atrCombo.nombreCombo);
		select.append($('<option/>', {
			value : '',
			text : atrCombo.mensaje
		}));
		$.getJSON(atrCombo.url, function(json) {
			json.forEach(function(item, num) {
				select.append($('<option/>', {
					value : eval('item.' + atrCombo.campo),
					text : eval('item.' + atrCombo.valor)
				}));
			});
			$('#cboDocIdentidad').val(solicitudObj[0].TI_TIPODOC);
		});
	} catch (e) {
		console.log('error-> ' + e);
	}
}

function CargarPais() {
	var atrCombo = {
		nombreCombo : 'cboPais',
		url : 'solicitud.htm?action=selectPais',
		mensaje : 'Seleccione Pais',
		campo : 'CO_IDPAIS',
		valor : 'DE_DESCRIPCION'
	};
	// CargarCombo(atrCombo);
	try {
		var select = $('#' + atrCombo.nombreCombo);
		select.append($('<option/>', {
			value : '',
			text : atrCombo.mensaje
		}));
		$.getJSON(atrCombo.url, function(json) {
			json.forEach(function(item, num) {
				select.append($('<option/>', {
					value : eval('item.' + atrCombo.campo),
					text : eval('item.' + atrCombo.valor)
				}));
			});
			$('#cboPais').val(solicitudObj[0].CO_IDPAIS);
		});
	} catch (e) {
		console.log('error-> ' + e);
	}
}

function CargarSexo() {
	// $('#cboSexo').empty();
	var atrCombo = {
		nombreCombo : 'cboSexo',
		url : 'solicitud.htm?action=selectSexo',
		mensaje : 'Seleccione Sexo',
		campo : 'CO_CODVALOR',
		valor : 'DE_VALOR'
	};
	try {
		var select = $('#' + atrCombo.nombreCombo);
		select.append($('<option/>', {
			value : '',
			text : atrCombo.mensaje
		}));
		$.getJSON(atrCombo.url, function(json) {
			json.forEach(function(item, num) {
				select.append($('<option/>', {
					value : eval('item.' + atrCombo.campo),
					text : eval('item.' + atrCombo.valor)
				}));
			});
			$('#cboSexo').val(solicitudObj[0].TI_IDSEXO);
		});
	} catch (e) {
		console.log('error-> ' + e);
	}
}

function CargarDpto() {
	var atrCombo = {
		nombreCombo : 'cboDpto',
		url : 'solicitud.htm?action=selectUbigeo&tipo=DE',
		mensaje : 'Seleccione Departamento',
		campo : 'ID',
		valor : 'UBIGEO'
	};
	try {
		var select = $('#' + atrCombo.nombreCombo);
		select.append($('<option/>', {
			value : '',
			text : atrCombo.mensaje
		}));
		$.getJSON(atrCombo.url, function(json) {
			json.forEach(function(item, num) {
				select.append($('<option/>', {
					value : eval('item.' + atrCombo.campo),
					text : eval('item.' + atrCombo.valor)
				}));
			});
			$('#cboDpto').val(
					(solicitudObj[0].CO_DEP).toString().substr(0, 2));
		});
	} catch (e) {
		console.log('error-> ' + e);
	}
}

function CargarProv(dep) {
	var atrCombo = {
		nombreCombo : 'cboProvincia',
		url : 'solicitud.htm?action=selectUbigeo&tipo=PR&codigoUbigeo=' + dep,
		mensaje : 'Seleccione Provincia',
		campo : 'ID',
		valor : 'UBIGEO'
	};
	try {
		var select = $('#' + atrCombo.nombreCombo);
		select.append($('<option/>', {
			value : '',
			text : atrCombo.mensaje
		}));
		$.getJSON(atrCombo.url, function(json) {
			json.forEach(function(item, num) {
				select.append($('<option/>', {
					value : eval('item.' + atrCombo.campo),
					text : eval('item.' + atrCombo.valor)
				}));
			});
			$('#cboProvincia').val(solicitudObj[0].CO_PRO);
		});
	} catch (e) {
		console.log('error-> ' + e);
	}
}

function CargarDist(prov) {
	var atrCombo = {
		nombreCombo : 'cboDistrito',
		url : 'solicitud.htm?action=selectUbigeo&tipo=DI&codigoUbigeo=' + prov,
		mensaje : 'Seleccione Distrito',
		campo : 'ID',
		valor : 'UBIGEO'
	};
	try {
		var select = $('#' + atrCombo.nombreCombo);
		select.append($('<option/>', {
			value : '',
			text : atrCombo.mensaje
		}));
		$.getJSON(atrCombo.url, function(json) {
			json.forEach(function(item, num) {
				select.append($('<option/>', {
					value : eval('item.' + atrCombo.campo),
					text : eval('item.' + atrCombo.valor)
				}));
			});
			$('#cboDistrito').val(solicitudObj[0].CO_DIS);
		});
	} catch (e) {
		console.log('error-> ' + e);
	}
}

function CargarAdjuntos() {
	dsGdSolicitudes = new kendo.data.DataSource(
			{
				transport : {
					read : function(options) {

						$
								.ajax({
									url : "solicitud.htm?action=cargarAdjuntosSolCategorizacion&idSolIPRESS="+$('#idSolicitud').val(),
									dataType : "json",
									success : function(result) {
										listaDocsAutSanit = result;
										options.success(result);
										CrearDatePicker();
									},
									error : function(result) {
										options.error(result);
									}
								});

					}
				},
				pageSize : 10,
				schema : {
					model : {
						fields : {
							CO_IDDOCUMENTREQ : {
								type : "string"
							},
							ROWNUM : {
								type : "number"
							},
							DE_NOMBREREQ : {
								type : "string"
							},
							DE_NOMBREORIGINAL : {
								type : "string"
							},
							IN_FLAGOBLIG : {
								type : "string"
							},
							IN_REQDOCFECH : {
								type : "string"
							},
							NU_ORDEN : {
								type : "string"
							},
							FE_FECHAEMISION : {
								type : "string"
							},
							DE_NOMBREINTERNO : {
								type : "string"
							},
							DE_NOMBREINTERNOSOL : {
								type : "string"
							},
							

						}
					},
				}
			});

	$("#gdDocAdjuntos").kendoGrid({
		dataSource : dsGdSolicitudes,
		resizable : true,
		rowTemplate : kendo.template($("#template").html()),
		pageable : {
			pageSizes : [ 10, 20, 30 ],
			messages : {
				display : "Registros {0} - {1} de {2} registros",
				empty : "No hay datos que mostrar",
				page : "P&aacute;gina",
				of : "of {0}",
				itemsPerPage0 : "registros por p&aacute;gina",
				first : "Go to the first page",
				previous : "Go to the previous page",
				next : "Go to the next page",
				last : "Go to the last page",
				refresh : "Refresh"
			}
		},
		sortable: true,
		columns : [ {
			field : "ROWNUM",
			width : "60px",
			title : "Numero",
			filterable : false
		}, {
			field : "DE_NOMBREREQ",
			width : "150px",
			title : "Requisito",
			filterable : true
		}, {
			field : "DE_NOMBREORIGINAL",
			width : "60px",
			title : "Plantilla",
			filterable : false,
			sortable: false,
		}, {
			field : "IN_FLAGOBLIG",
			width : "80px",
			title : "Obligatoriedad",
			filterable : false,
			sortable: false,
		}, {
			field : "NU_ORDEN",
			title : "Numero Documento",
			width : "100px",
			filterable : false,
			sortable: false,
		}, {
			field : "FE_FECHAEMISION",
			width : "100px",
			title : "Fecha de Emision",
			filterable : false,
			sortable: false,
		}, {

			title : "Accion",
			width : "100px",
			filterable : false,
			sortable: false,
		}, {
			title : "Archivo Cargado",
			width : "100px",
			filterable : false,
			sortable: false,
		}, {
			field : "CO_IDDOCUMENTREQSOL",
			title : "Archivo Cargado",
			width : "100px",
			filterable : false,
			sortable: false,
			hidden: true,
		}

		
		
		]
	});
}

var solicitudObj;
function CargarSolicIpress() {
	try {
		$.getJSON('categorizacionIpress.htm?action=selectSolicitudTramite',
				function(json) {
					solicitudObj = json;

					CargarCategoria();
					CargarTipoDocumento();
					CargarPais();
					CargarSexo();
					CargarDpto();
					CargarTipoVia()
					CargarAdjuntos();

					if (json.length > 0) {

						$('#cboFecNac').val(
								(json[0].FE_FECHANAC).substr(8, 2) + '/'
										+ (json[0].FE_FECHANAC).substr(5, 2)
										+ '/'
										+ (json[0].FE_FECHANAC).substr(0, 4));

						$('#txtNroDoc2').val(json[0].NU_DOC);
						$('#txtAPaterno').val(json[0].AP_PATERNO);
						$('#txtAMaterno').val(json[0].AP_MATERNO);
						$('#txtACasada').val(json[0].AP_CASADA);
						$('#txtNombres').val(json[0].DE_NOMBRE);
						$('#txtTelefono1').val(json[0].NU_TELEFONO1);
						$('#txtTelefono2').val(json[0].NU_TELEFONO2);
						$('#txtEmail1').val(json[0].DE_CORREOELECT1);
						$('#txtEmail2').val(json[0].DE_CORREOELECT2);
						// $('#cboDocIdentidad').val(json[0].TI_TIPODOC);
						// $('#cboPais').val(json[0].CO_IDPAIS);
						// $('#cboVia').val(json[0].CO_IDTIPOVIA);
						$('#txtVia').val(json[0].DE_VIA);
						$('#txtNro').val(json[0].NU_NUMERO);
						$('#txtNroPiso').val(json[0].NU_PISO);
						$('#txtNroDpto').val(json[0].NU_DEPARTAMENTO);
						$('#txtNroInt').val(json[0].NU_INTERIOR);
						$('#txtMz').val(json[0].DE_MANZANA);
						$('#txtLt').val(json[0].DE_LOTE);
						$('#txtKl').val(json[0].DE_KILOMETRO);
						$('#txtUrbanizacion').val(json[0].DE_URBANIZ);
						$('#txtRef').val(json[0].DE_REFERENCIA);
						CargarProv(json[0].CO_DEP);
						CargarDist(json[0].CO_PRO);

					}
				});
	} catch (e) {
		console.log('err CargarSolicIpress');
	}
}

InicializaPopRegistro();

function InicializaPopRegistro() {
	/*
	 $('#popGrabarCategorizacion').modal({
		backdrop : 'static',
		keyboard : false,
		show : false
	}).one('click', '[data-value]', function(e) {
		if ($(this).data('value') == '1') {
			ActualizarSolicitud();
		} else {
			alert('no se desea registrar');
		}

	});*/
}

function ActualizarSolicitud() {
	$.ajax({
		url : "categorizacionIpress.htm",
		dataType : "json",
		method : "POST",
		data : $('#frmSolTramite').serialize(),
		success : function(result) {
			$('#popGrabarCategorizacion').modal('show');
		},
		error : function(result) {
		}
	});
}


function CargarArchivo(nameFile, link) {
	var data = new FormData();
	var files = $("#" + nameFile).get(0).files;
	if (files.length > 0) {
		if (files[0].size > 10000000) {
			LanzarPopGenerico("Mensaje",
					"El archivo supera los 10MB,y no puede ser adjuntado")
			console.log('tamanio exede el permitido!!');
			$('#'+nameFile).val('');
			
		} else {
			/*$('#' + link).html(
					'<div class="text-center">' + $('#' + nameFile).val().replace(/C:\\fakepath\\/i, '')
							+ '</div>');*/
			$.each(files, function(key, value) {
				// console.debug(key + ": " + value);
				data.append("fil_adjunto_sol", files[key]);
			});
			var ajaxRequest = $.ajax({
				type : "POST",
				url : "solicitud.htm?action=adjuntar",
				contentType : false,
				processData : false,
				data : data
			});
			ajaxRequest.done(function(xhr, textStatus) {
				var obj=JSON.parse(xhr)
				//obj.dataJson.UploadedImage_fileNameORI;
				//obj.dataJson.UploadedImage_fileNameGEN;
				$('#' + link).html('<div class="text-center"><input id="gen-' + obj.dataJson.fil_adjunto_sol_fileNameGEN + '" type="hidden" value="' + obj.dataJson.fil_adjunto_sol_fileNameGEN + '" ><input type="hidden" id="ori-' + obj.dataJson.fil_adjunto_sol_fileNameORI + '" value="' + obj.dataJson.fil_adjunto_sol_fileNameORI + '" >' + obj.dataJson.fil_adjunto_sol_fileNameORI + '</div>');
				$('#' + link).attr('onclick','Descargar("'+obj.dataJson.fil_adjunto_sol_fileNameGEN+'","'+ obj.dataJson.fil_adjunto_sol_fileNameORI +'")');
				console.log(xhr);
				//console.debug("estado->" + textStatus);
				
			});
		}

	}

}



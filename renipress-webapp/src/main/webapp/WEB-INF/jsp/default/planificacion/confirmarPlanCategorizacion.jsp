<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<div class="row">
    <div class="col-md-12">
        <h4 class="page-header">
			<strong>BANDEJA DE CONFIRMAR PLAN CATEGORIZACI&Oacute;N</strong> <br/>
			<div class="css3gradient"></div>
		</h4>
    </div>
</div>

<div class="row">
    <div class="col-md-12">

        <div class="row">
            <div class="col-md-12">
				
				<form role="form" method="post" id="form-edit">
                	<input type="hidden" name="idPersona" id="idPersona" value="" />                	
                </form>
                
                <form role="form" method="post" id="form-buscar">
                
                	
                	<div id="div-cabecera-buscar">
                
                    <fieldset>

                        <div class="row">
                            <div class="col-md-8">
                                <div class="form-group">
									<label class="control-label">Denominaci&oacute;n / Raz&oacute;n Social / C&oacute;digo de Tramite / RUC</label>
									<input maxlength="50" class="form-control input-sm noInject" name="txt_filtrar" value="" placeholder="" title="N&deg; Certificado / N&deg; Doc. Identidad / Apellido Paterno / Apellido Materno / Nombres" type="text">
									<span class="help-block"></span>
								</div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
									<label class="control-label">Autoridad Sanitaria</label>
									<select name="cmb_autoridadSanitaria" class="form-control input-sm" title="Autoridad Sanitaria">
										<c:forEach items="${cmb_autoridadSanitaria.items}" var="item" varStatus="status">
											<option <c:if test="${cmb_autoridadSanitaria.seleccionado.id == item.id}"> selected </c:if>  value="${item.id}" > ${item.label} </option>																					
										</c:forEach>									
									</select>
									<span class="help-block"></span>
                                </div>
                            </div>
                        </div>

                        <div class="row">
								<div class="col-md-4">
									<div class="form-group">
										<label>DEPARTAMENTO</label> <select name="cmb_departamento"
											class="form-control input-sm" title="Departamento">
											<c:forEach items="${cmb_departamento.items}" var="item"
												varStatus="status">
												<option
													<c:if test="${cmb_departamento.seleccionado.id == item.id}"> selected </c:if>
													value="${item.id}">${item.label}</option>
											</c:forEach>
										</select> <span class="help-block"></span>
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<label>PROVINCIA</label> <select name="cmb_provincia"
											class="form-control input-sm" title="Provincia">

										</select> <span class="help-block"></span>
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<label>DISTRITO</label> <select name="cmb_distrito"
											class="form-control input-sm" title="Distrito">

										</select> <span class="help-block"></span>
									</div>
								</div>
							</div>

                        <div class="row">
                            
                            <div class="col-md-4">                            
                                <div class="form-group div-date-picker">                                	
	                            	<label class="control-label">Fecha Propuesta Desde</label>		                            	                                 
	                                <input class="form-control input-sm" name="dat_fd_caducidad" title="Fecha Caducidad Desde">	                                		                            	    									    							                             
                                    <span class="help-block"></span>
                                </div>                                
                            </div>
							<div class="col-md-4">
                                <div class="form-group div-date-picker">                                	
                                    <label class="control-label">Fecha Propuesta Hasta</label>                                      
                                    <input class="form-control input-sm" name="dat_fh_caducidad" title="Fecha caducidad Hasta">                                   	
                                    <span class="help-block"></span>                                                                        							
                                </div>
                            </div>
							<div class="col-md-4">
								<div class="form-group">
                                    <label>&nbsp;</label>
                                    <a href="javascript:;" id="btnBuscar" class="btn btn-sm btn-primary btn-block" title="Buscar"><i class="fa fa-search"></i>&nbsp; BUSCAR</a>
                                    <span class="help-block"></span>
                                </div>                                
                            </div>
                        </div> 

                    </fieldset>
                	
                	</div>
                </form>

            </div>
        </div>

        <div> &nbsp; </div>
		<div> &nbsp; </div>

        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-body">

                        <div class="table-responsive" id="div-tabla-buscar">
                           
                            <table class="table table-striped table-bordered table-hover" id="grilla-buscar">
                                <thead>
                                    <tr>
                                    	<th class="text-center-titulo">SEL</th>
                                    	<th class="text-center-titulo">N&deg;</th>
                                    	<th class="text-center-titulo">C&oacute;digo de Tramite</th>
                                        <th class="text-center-titulo">Denominaci&oacute;n</th>
                                        <th class="text-center-titulo">RUC</th>
                                        <th class="text-center-titulo">Autoridad Sanitaria</th>
                                        <th class="text-center-titulo">Departamento</th>
										<th class="text-center-titulo">Provincia</th>
                                        <th class="text-center-titulo">Distrito</th>
                                        <th class="text-center-titulo">Fecha Inicio Propuesta</th>
                                        <th class="text-center-titulo">Fecha Fin Propuesta</th>
                                        <th class="text-center-titulo">Categorizadores</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>                                
                           </table>                           
                        </div>

                    </div>
                </div>

                

            </div>
        </div>

        <div> &nbsp; </div>
        
        <div class="row">
        	<div class="col-md-12">
        		<div class="col-md-2 col-md-offset-6">
	                <a id="btnAprobar" class="btn btn-sm btn-primary btn-block" title="Nuevo">&nbsp; APROBAR</a>
	            </div>
	            <div class="col-md-2 ">
	                <a id="btnReservar" class="btn btn-sm btn-primary btn-block" title="Nuevo">&nbsp; RESERVAR</a>
	            </div>
	            <div class="col-md-2">
	                <a id="btnAprobar" class="btn btn-sm btn-primary btn-block" title="Nuevo">&nbsp; RECHAZAR</a>
	            </div>
            </div>
        </div>
        
        <div> &nbsp; </div>

    </div>
</div>

<!-- FORM DE DESCARGA -->
<form id="frmDescargarArchivo" name="frmDescargarArchivo">		
	<input type="hidden" value="" id="des_pagina" name="des_pagina">
	<input type="hidden" value="" id="des_data" name="des_data">
	<input type="hidden" value="" id="des_filas" name="des_filas">
	<input type="hidden" value="" id="des_columnas" name="des_columnas">
	<input type="hidden" value="" id="des_grilla" name="des_grilla">
	<input type="hidden" value="" id="des_paramsUltimaBusqueda" name="des_paramsUltimaBusqueda">			
</form>

<script>

	// VARIABLES DE PAGINA
	var ultimaBusqueda = null;
	
	$(document).ready(function() {
    	
    	initFecha();
    	initGrid();
		teclas();
    	
     	// eventos nuevo clic
        $('#btnNuevo').on('click', function(e) {
        	locationUrl('categorizacion.htm?action=mostrarNuevo');
        });
     		
		$("select[name='cmb_departamento']").on('change',function(){
			buscarProvincia($(this).val());
		}).change();
		
		$("select[name='cmb_provincia']").on('change',function(){
			buscarDistrito($(this).val());
		}).change();
     	
     	$("input[name='txt_filtrar'], select[name='cmb_tipoCertificacion'], input[name='dat_fd_caducidad']," +
     	  "input[name='dat_fh_caducidad'], select[name='cmb_autoridadSanitaria'], select[name='cmb_estado']"	 	
     	).on('keypress',function(e){
     		if (isEnter(e)){
     			$('#btnBuscar').click();		
     		}
     	});
     	
     	$("select[name='cmb_tipoCertificacion'], " +
    	  "select[name='cmb_autoridadSanitaria'], select[name='cmb_estado']"	 	
    	).on('change',function(e){
    		
    			$('#btnBuscar').click();		
    		
    	});
     	     	     	
     	// eventos buscar clic
        $('#btnBuscar').on('click', function(e) {
        	        	        	
            e.preventDefault();
            
            if (new validateForm(FormVal.formCategorizador).validate()==false)return;
            
            beginCargando();            
            // primero valida la consulta
            var estadoInicial = estadoInputInicial('#div-cabecera-buscar');
            var paramsBuscar = $('#form-buscar').serialize();            
            $.ajax({
                url: 'categorizacion.htm?action=buscarCategorizadores',
                cache: false,
                data: paramsBuscar,
                async: true,
                type: 'POST',
                dataType: 'json',
                success: function(data) {                	                	
                	endCargando();                	
                    if (huboErrorJson(data)) {                    	
                        if (huboErrorValidacionJson(data)) {                        	
                            estadoInputError('#div-cabecera-buscar', data, estadoInicial);
                            return;
                        }
                        handleErrorJson(data);
                        return;
                    }                    
                    console.log('data: ' + JSON.stringify(data));                    
					load();														
                },
                error: function(data, textStatus, errorThrown) {
                	endCargando();
                    handleError(data);
                }
            });			
        });
     	
		$('#grilla-categorizador-buscar_btnExp').on( 'click', function(e) {
			
			e.preventDefault();			
			
			var paramsBuscar = $('#form-buscar').serialize();
			var vurl = 'categorizacion.htm?action=cargarCategorizadores';
			
			var dataJsonP = extraerDataGrillaAjax(vurl, '#grilla-categorizador-buscar', paramsBuscar); 
			
			guardarUltimaBusqueda();
			
			var result = extraerDataGrillas( dataJsonP , [0, 10] , true );
			if ( result == null ) {
				showMensaje( 'Mensaje', 'No hay data para exportar' );
				return;
			}
			
			var pagina = result.pagina;
			var data =  JSON.stringify( result.data ) ;			
			var filas = result.filas;
			var columnas = result.columnas;
			var urlExport = 'categorizacion.htm?action=exportarCategorizador';
			var paramsUltimaBusqueda = getUltimaBusqueda( ultimaBusqueda );
			
			setDataSession(data, 'categorizacion.htm');//default-js.jsp
			
			$('#des_pagina').val(pagina);
			$('#des_data').val(data);
			$('#des_filas').val(filas);
			$('#des_columnas').val(columnas);			
			$('#des_grilla').val('grilla-categorizador-buscar');
			$('#des_paramsUltimaBusqueda').val(paramsUltimaBusqueda);
									
			var form = $('#frmDescargarArchivo');			
	    	form.attr('action', urlExport);
	    	form.attr('method', 'post');	    
	    	form.attr('target', '_blank');
	    	form.submit();	    	
		}); 
             	         
    }); // --- FIN DE DOCUMENT READY
    
    var MSG = {
    	general:{
    		date:'Fecha inválida'
    	},
    	formCategorizador:{
    		dat_fd_caducidad:{    			
    			requiredWith:'La fecha caducidad hasta debe tener un valor'
    		},
    		dat_fh_caducidad:{
    			requiredWith:'La fecha caducidad desde debe tener un valor',
    			rangeDate:'La fecha de caducidad hasta debe ser mayor que desde'
    		}
    	}
    }
                 
    /// --- ESTRUCTURA DE VALIDACION
    var FormVal = {
    	formCategorizador:{
    		dat_fd_caducidad:[
	    		{
	    			role:'date',
	    		    message: MSG.general.date,
	    		    type:FORM_TYPE.input	
				},
				{
	    			role:'requiredWith',
	    			inputWith:{
	    				name:'dat_fh_caducidad',
	    				type:FORM_TYPE.input
	    			},
	    		    message: MSG.formCategorizador.dat_fd_caducidad.requiredWith,
	    		    type:FORM_TYPE.input	
				},
			],
			dat_fh_caducidad:[
				{
    		    	role:'date',
					message: MSG.general.date,
					type:FORM_TYPE.input	
				},
				{
	    			role:'requiredWith',
	    			inputWith:{
	    				name:'dat_fd_caducidad',
	    				type:FORM_TYPE.input
	    			},
	    		    message:MSG.formCategorizador.dat_fh_caducidad.requiredWith,
	    		    type:FORM_TYPE.input	
				},				
				{
	    			role:'rangeDate',
	    			inputMin:{
	    				name:'dat_fd_caducidad',
	    				type:FORM_TYPE.input
	    			},
	    		    message:MSG.formCategorizador.dat_fh_caducidad.rangeDate,
	    		    type:FORM_TYPE.input	
				},
    		],    		
    	}
    }; 
    
    function guardarUltimaBusqueda() {  
    	    	
		var cmb_estado  			= $( "#div-cabecera-buscar select[name='cmb_estado']" ).val();
		var cmb_tipoCertificacion 	= $( "#div-cabecera-buscar select[name='cmb_tipoCertificacion']" ).val();
		var cmb_autoridadSanitaria  = $( "#div-cabecera-buscar select[name='cmb_autoridadSanitaria']" ).val();		
    	    	
    	ultimaBusqueda = {
    		txt_filtrar: 			$( "#div-cabecera-buscar input[name='txt_filtrar']" ).val(),
    		cmb_estado: 			cmb_estado == 0 ? '(Todos)' : $( "#div-cabecera-buscar select[name='cmb_estado'] option:selected" ).text(),
    		cmb_tipoCertificacion: 	cmb_tipoCertificacion == 0 ? '(Todos)' : $( "#div-cabecera-buscar select[name='cmb_tipoCertificacion'] option:selected" ).text(),
    		cmb_autoridadSanitaria: cmb_autoridadSanitaria == 0 ? '(Todos)' : $( "#div-cabecera-buscar select[name='cmb_autoridadSanitaria'] option:selected" ).text(),
    		dat_fh_caducidad: 		$( "#div-cabecera-buscar input[name='dat_fh_caducidad']" ).val(),
    		dat_fd_caducidad: 		$( "#div-cabecera-buscar input[name='dat_fd_caducidad']" ).val(),    		    					
    	};    	
    }
    
    function getUltimaBusqueda(v_ultimaBusqueda){
    	var filtros  = "txt_filtrar=" + v_ultimaBusqueda.txt_filtrar;
    		filtros += "&cmb_estado=" + v_ultimaBusqueda.cmb_estado;
    		filtros += "&cmb_tipoCertificacion=" + v_ultimaBusqueda.cmb_tipoCertificacion;
    		filtros += "&cmb_autoridadSanitaria=" + v_ultimaBusqueda.cmb_autoridadSanitaria;
    		filtros += "&dat_fh_caducidad=" + v_ultimaBusqueda.dat_fh_caducidad;
    		filtros += "&dat_fd_caducidad=" + v_ultimaBusqueda.dat_fd_caducidad;    		
    	
		return filtros; 
    }
    
    function ver(idPersona){
    	var form = $('#form-edit');
    	$('#idPersona').val(idPersona);
    	form.attr('action', 'categorizacion.htm?action=mostrarVer');    	
    	form.submit();
    }
    
    function editar(idPersona){
    	var form = $('#form-edit');
    	$('#idPersona').val(idPersona);
    	form.attr('action', 'categorizacion.htm?action=mostrarEditar');    	
    	form.submit();
    }
    
    function load(){
    	var paramsBuscar = $('#form-buscar').serialize();
    	var tabla = $('#grilla-categorizador-buscar').DataTable();
    	tabla.ajax.url( 'categorizacion.htm?action=cargarCategorizadores&'+paramsBuscar ).load();
    	
    	// guardar los ultimos parametros de busqueda
   	 	guardarUltimaBusqueda();

    }      
    
	function initGrid(){
		
		// DEFINICIÓN DE LAS COLUMNA DE LAS GRILLAS
		var aoColumnDefs = [				
	           			    {
	          			      "aTargets": [0],
	          			      "bSortable": false,		          			      
	          			      "sWidth": "20px",
	          			      "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
	          			    	  sData;		    	  
	          			      	}			      	
	          			    },
	          			  	{
	          			      "aTargets": [1],
	          			      "bSortable": false,		          			      
	          			      "sWidth": "20px",
	          			      "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
	          			    	  sData;		    	  
	          			      	}			      	
		          			},
	          			  	{
	          				  "aTargets": [2],
	          				  "sWidth": "10%",
	          				  "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
	          					  $(nTd).css('text-align','center');
	          					  if (sData ==  ''){	          						
	          					  	$(nTd).text("-");  
	          					  }					  		    	 
	          				    }
	          				},
	          			    {
	          				  "aTargets": [2],
	          				  "sWidth": "20%",
	          				  "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
	          					  $(nTd).css('text-align','center');
	          					  if (sData ==  ''){	          						
	          					  	$(nTd).text("-");  
	          					  }					  		    	 
	          				    }
	          				}
	          			];
	        
	        var aoColumns = [
							{ data: "plan" },
	         			    { data: "row"},	         			   
	         			    { data: "codigoTramite" },
	         			    { data: "denominacion" },
	         			    { data: "ruc" },
	         			    { data: "autoridadSanitaria" },
	         			    { data: "departamento" }, 
	         				{ data: "provincia" },				
	         				{ data: "distrito" },	
	         				{ data: "fechaini" },
	         				{ data: "fechafin" },
	         				{ data: "categorizadores" },	
	         			];
		
		var paramsBuscar = $('#form-buscar').serialize();
		var url = 'confirmarPlanCategorizacion.htm?action=cargarPlanCategorizacion&'+paramsBuscar+"&listar=off";
		initDGAjax( '#grilla-buscar', 'grilla-buscar_btnExp', true, aoColumnDefs, aoColumns, url);     
		
		guardarUltimaBusqueda();

	}
	
	//Metodos para los combos anidados Departamento, Provincia y Distrito
	function buscarProvincia(departamento){
		var params = "&idDepartamento="+departamento;    	
		$("select[name='cmb_provincia']").empty();
		$("select[name='cmb_distrito']").empty();
		
		if (departamento == 0){
			$("select[name='cmb_provincia']").append("<option value=\""+0+"\">"+"(Todos)"+"</option>");
			$("select[name='cmb_provincia']").trigger('change');
			return;
		}
		
	    $.getJSON('ubigeo.htm?action=buscarProvincia'+params,function(data){     
    		if (data.estado == "ok"){        		
	    		$("select[name='cmb_provincia']").empty();
	        	$("select[name='cmb_distrito']").empty();
	    		$.each(data.dataJson.items, function(id,item){
	            	$("select[name='cmb_provincia']").append("<option value=\""+item.id+"\">"+item.label+"</option>");
	            	$("select[name='cmb_provincia']").trigger('change');
	            });	
    		}            
    	});    
	}

	function buscarDistrito(provincia){
		var params  = "&idDepartamento="+$("select[name='cmb_departamento']").val();
			params += "&idProvincia="+provincia;      	
		
		$("select[name='cmb_distrito']").empty();
		
		if (provincia == 0){
			$("select[name='cmb_distrito']").append("<option value=\""+0+"\">"+"(Todos)"+"</option>");
			return;
		}
		    		   
	    $.getJSON('ubigeo.htm?action=buscarDistrito'+params,function(data){            
	    	if (data.estado == "ok"){        		        		
	    		$("select[name='cmb_distrito']").empty();
	    		$.each(data.dataJson.items, function(id,item){
	            	$("select[name='cmb_distrito']").append("<option value=\""+item.id+"\">"+item.label+"</option>");
	            });	
	    	}
	    });    
	}


</script>

<!-- divMsgGeneralError -->
<c:import url="/confirmarPlanCategorizacion.htm">
	<c:param name="action" value="cargarPage" />
	<c:param name="_page" value="error-barra" />
	<c:param name="_module" value="" />
	<c:param name="_template" value="default" />
</c:import>

<!-- popup Confirm-->
<c:import url="/confirmarPlanCategorizacion.htm">
	<c:param name="action" value="cargarPage" />
	<c:param name="_page" value="mensaje-popup" />
	<c:param name="_module" value="" />
	<c:param name="_template" value="default" />
</c:import>
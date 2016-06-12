<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
 
<div id="divBarraUpload">
	<div class="progress progress-striped active">
	    <div class="progress-bar progress-bar-info" style="width: 0%;"></div>
	</div>
</div>

<div id="divExitoUpload">
	<div class="alert alert-success alert-dismissible" role="alert">
		<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		Archivo subido con &eacute;xito.
	</div>
</div>

<div id="divExitoUploadExt">
	<div class="alert alert-success alert-dismissible" style="padding: 5px; padding-right: 35px;" role="alert">
		<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		&Eacute;xito
	</div>
</div>

<!-- <div class="alert alert-success" role="alert">Archivo subido con &eacute;xito.</div> -->

<div id="divErrorUpload">
	<div class="alert alert-danger alert-dismissible" role="alert">
		<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		Error al subir el archivo.
	</div>
</div>

<!-- 		<div class="alert alert-danger" role="alert">Error al subir archivo.</div> -->

<script>
    $(document).ready(function() {
    	 $( '#divBarraUpload' ).hide();
    	 $( '#divExitoUpload' ).hide();
    	 $( '#divErrorUpload' ).hide();
    	 $( '#divExitoUploadExt' ).hide();    	
    });
</script>
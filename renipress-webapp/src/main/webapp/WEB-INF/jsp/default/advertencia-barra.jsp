<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<div id="divMsgGeneralError" hidden="true">
	<div class="row">
	    <div class="col-md-12">
			<div class="alert alert-danger alert-dismissible" role="alert">
				<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<strong>advertencia: </strong> <span id="spanMsgGeneralError">Debe seleccionar un registro</span>
			</div>
	    </div>
	</div> 
</div> 

<script>
    $(document).ready(function() {
    	$( '#divMsgGeneralError' ).hide();
    });
</script>









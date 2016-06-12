<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<div class="modal fade" id="msgPopupDiv" data-backdrop="static" data-keyboard="false">
	<div class="modal-dialog">
		
		<div class="modal-content">
			
			<div class="modal-header">
			    <!-- MODIFICADO : JSQP - OCULTAR BOTON CLOSE (X)-->				
				<button hidden="true" id="btnPopupConfirmCerrar" type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<h4 class="modal-title">
					<span id="msgPopupTitulo">Mensaje </span>
				</h4>
			</div>
			<div class="modal-body">
				<p><span id="msgPopupMensaje">Contenido Mensaje</span></p>
			</div>
			<div class="modal-footer">									   
				<button id="btnPopupConfirmOK" title="Aceptar" type="button" class="btn btn-primary" data-dismiss="modal">Aceptar</button>
			</div>

		</div>
	</div>
</div>

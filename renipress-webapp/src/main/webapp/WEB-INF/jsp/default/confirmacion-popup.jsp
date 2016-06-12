<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<div class="modal fade" id="msgPopupConfirmDiv" data-backdrop="static" data-keyboard="false">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">				
				<h4 class="modal-title">
					<span id="msgPopupConfirmTitulo">Mensaje</span>
				</h4>
			</div>
			<div class="modal-body">
				<p><span id="msgPopupConfirmMensaje">Contenido Mensaje</span></p>
			</div>
			<div class="modal-footer">
				<button id="btnPopupConfirmSI" title="SI" type="button" class="btn btn-primary" data-dismiss="modal">SI</button>				
				<button id="btnPopupConfirmNO" title="NO" type="button" class="btn btn-primary" data-dismiss="modal">NO</button>
			</div>
		</div>
	</div>
</div>

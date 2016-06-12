/**
 * 
 */
package pe.gob.susalud.renipress.controlador.util;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
//import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.servlet.ModelAndView;

import com.jcfr.utiles.web.ComboWeb;

import pe.gob.susalud.renipress.comun.beans.DataJsonBean;
import pe.gob.susalud.renipress.comun.beans.ListaItem;
import pe.gob.susalud.renipress.comun.util.Constantes;
import pe.gob.susalud.renipress.controlador.base.BaseCategorizacionController;
import pe.gob.susalud.renipress.servicio.util.ListaItemService;


public class UbigeoController extends BaseCategorizacionController{
	
	// Objeto LOG4
	private static final Logger log = LogManager.getLogger(UbigeoController.class);
        //private static final Logger log = Logger.getLogger(UbigeoController.class);
	 
	@Autowired
	@Qualifier("listaItemService")
	private ListaItemService listaItemService;
	
	/* **************************************************************/
	/* ACCIONES 													*/
	/* **************************************************************/
		
	
	public ModelAndView buscarProvincia(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		DataJsonBean dataJSON = new DataJsonBean();

		try { 																		
			// OBTENEMOS LOS DATOS
			String idDepartamento = StringUtils.trimToNull( request.getParameter(  "idDepartamento" ));					
						
			ComboWeb cmb_ubigeo = new ComboWeb(ListaItem.getLista( 
				listaItemService.selectProvincia(new ListaItem(idDepartamento)) , Constantes.MOD_REG_CAT.COMBO_ALL )
			);	
												
			dataJSON.setRespuesta("ok", null, cmb_ubigeo);			
		} catch (Exception sos) {
			String msgError = handleJSONError(dataJSON, sos);
			log.error(msgError);
		}
		return handleJSONResponse(dataJSON, response);
			
	}
	
	
	public ModelAndView buscarDistrito(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		DataJsonBean dataJSON = new DataJsonBean();

		try { 																		
			// OBTENEMOS LOS DATOS
			String idDepartamento = StringUtils.trimToNull( request.getParameter(  "idDepartamento" ));
			String idProvincia    = StringUtils.trimToNull( request.getParameter(  "idProvincia" ));		
						
			ComboWeb cmb_ubigeo = new ComboWeb(ListaItem.getLista( 
				listaItemService.selectDistrito(new ListaItem(idDepartamento, idProvincia, true)) , Constantes.MOD_REG_CAT.COMBO_ALL )
			);	
												
			dataJSON.setRespuesta("ok", null, cmb_ubigeo);			
		} catch (Exception sos) {
			String msgError = handleJSONError(dataJSON, sos);
			log.error(msgError);
		}
		return handleJSONResponse(dataJSON, response);
			
	}
	
	

}

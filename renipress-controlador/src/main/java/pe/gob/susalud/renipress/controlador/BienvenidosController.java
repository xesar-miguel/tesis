/**
 * 
 */
package pe.gob.susalud.renipress.controlador;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.servlet.ModelAndView;

import pe.gob.susalud.renipress.controlador.base.BaseCategorizacionController;

public class BienvenidosController extends BaseCategorizacionController {
	
	private static final Logger log = LogManager.getLogger(BienvenidosController.class);
	
	/* **************************************************************/
	/* REEDIRRECIONAR PAGINAS										*/
	/* **************************************************************/
	
	public ModelAndView mostrar(HttpServletRequest request, HttpServletResponse response) throws Exception {

		Map<String, Object> model = new HashMap<String, Object>();
				
		try {
			// ESTABLECEMOS LA PANTALLA A ESTABLECER
			setNavigationParamsTemplate(model, "bienvenidos", "main", plantilla, request);
			return handleModelAndView(model, request);

		} catch (Exception sos) {
			String msgError = handleMsgError(sos);
			log.error(msgError);
			return handleErrorModelAndView(model, msgError,request);
		}
	}
}

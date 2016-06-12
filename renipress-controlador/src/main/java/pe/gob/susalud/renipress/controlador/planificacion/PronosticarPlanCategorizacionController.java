package pe.gob.susalud.renipress.controlador.planificacion;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.servlet.ModelAndView;

import pe.gob.susalud.renipress.controlador.base.BaseCategorizacionController;

public class PronosticarPlanCategorizacionController extends BaseCategorizacionController {
	
	private static final Logger log = LogManager.getLogger(PronosticarPlanCategorizacionController.class);
	private static final String modulo = "planificacion";
	
	/* **************************************************************/
	/* REEDIRRECIONAR PAGINAS										*/
	/* **************************************************************/
		
	public ModelAndView mostrarLista(HttpServletRequest request, HttpServletResponse response) throws Exception {

		Map<String, Object> model = new HashMap<String, Object>();
				
		try {
			// ESTABLECEMOS LA PANTALLA A ESTABLECER
			setNavigationParamsTemplate(model, "pronosticarPlanCategorizacion", modulo, plantilla, request);
			
			return handleModelAndView(model, request);

		} catch (Exception sos) {
			String msgError = handleMsgError(sos);
			log.error(msgError);
			return handleErrorModelAndView(model, msgError);
		}
	}

}

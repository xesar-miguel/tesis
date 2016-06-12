package pe.gob.susalud.renipress.controlador.planificacion;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.ObjectUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.servlet.ModelAndView;

import com.jcfr.utiles.DateTime;
import com.jcfr.utiles.web.ComboWeb;

import pe.gob.susalud.renipress.comun.beans.DataJsonBean;
import pe.gob.susalud.renipress.comun.beans.ListaItem;
import pe.gob.susalud.renipress.comun.util.Constantes;
import pe.gob.susalud.renipress.controlador.base.BaseCategorizacionController;
import pe.gob.susalud.renipress.dominio.bandeja.BandejaAprobarPlanCategorizadorBean;
import pe.gob.susalud.renipress.dominio.entidades.login.CredencialEntity;
import pe.gob.susalud.renipress.servicio.util.BandejaService;
import pe.gob.susalud.renipress.servicio.util.ListaItemService;

public class ConfirmarPlanCategorizacionController extends BaseCategorizacionController {
	
	private static final Logger log = LogManager.getLogger(ConfirmarPlanCategorizacionController.class);
	private static final String modulo = "planificacion"; 
	
	/* **************************************************************/
	/* INJECTION SERVICE											*/
	/* **************************************************************/
	
	@Autowired
	@Qualifier("listaItemService")
	private ListaItemService listaItemService;
	
	@Autowired
	@Qualifier("bandejaService")
	private BandejaService bandejaService;
	
	/* **************************************************************/
	/* REEDIRRECIONAR PAGINAS										*/
	/* **************************************************************/
		
	public ModelAndView mostrarLista(HttpServletRequest request, HttpServletResponse response) throws Exception {

		Map<String, Object> model = new HashMap<String, Object>();
				
		try {
			getSession(request);
			
			// ESTABLECEMOS LA PANTALLA A ESTABLECER
			setNavigationParamsTemplate(model, "confirmarPlanCategorizacion", modulo, plantilla, request);
			
			// PARAMETROS DE SESSION
			CredencialEntity session = (CredencialEntity)getCredencial(request, response);
			String idAutSan = session != null ? (session.getIdautorsanit() != null ? session.getIdautorsanit().toString() : null) : null;
			
			// ESTABLECEMOS LOS COMBOS
			ComboWeb cmb_autoridadSanitaria = new ComboWeb(ListaItem.getLista( 
					listaItemService.selectAutoridadSanitaria(new ListaItem( idAutSan, null , true )) , Constantes.MOD_REG_CAT.COMBO_ALL)
			);
			
			ComboWeb cmb_departamento = new ComboWeb(ListaItem.getLista( 
					listaItemService.selectDepartamento(new ListaItem( idAutSan, null , true )) , Constantes.MOD_REG_CAT.COMBO_ALL)
			);
			
			// RETORNANDO LOS VALORES A LA PANTALLA
			if (idAutSan != null){
				cmb_autoridadSanitaria.setIdSeleccionado(idAutSan);
			}
			
			model.put("cmb_autoridadSanitaria", cmb_autoridadSanitaria);
			model.put("cmb_departamento", cmb_departamento);	
			
			return handleModelAndView(model, request);

		} catch (Exception sos) {
			String msgError = handleMsgError(sos);
			return handleErrorModelAndView(model, msgError);
		}
	}
	
	/* **************************************************************/
	/* LISTAR GRILLAS												*/
	/* **************************************************************/
	
	public ModelAndView cargarPlanCategorizacion(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// CONFIGURACION BASICA DE UNA GRILLA
		DataJsonBean dataJSON = new DataJsonBean(); // OBJETO JSON		
		List<Map<String, Object>> listaResult = new ArrayList<Map<String, Object>>(); 
		Map<String, Object> params = new HashMap<String, Object>(); // MAPA DE PAREMTROS DE LA BUSQUEDA
		Long lTotal = new Long(0); // SABER LA CANTIDAD DE REGISTROS 		
	
		// CONFIGURACION BASICA DEL DATATABLE
		configurarDatatable(request, params);
						
		try { 						
			// SI NO HAY ERROR DE VALIDACION REALIZAMOS LA BUSQUEDA			
			Map<String, Object> result = null;
			
			// VALIDAMOS SI TIENE LISTADO AUTOMATICO
			String listar = StringUtils.trimToNull ( request.getParameter( "listar" ) ) ;
			
			if (Constantes.ON.equals(listar)){
				// Recuperar parametros del mapa para validarlos 
				String filtrar = StringUtils.trimToNull ( request.getParameter( "txt_filtrar" ) ) ;
				String autoridadSanitaria = StringUtils.trimToNull( request.getParameter( "cmb_autoridadSanitaria" ));
				String departamento = StringUtils.trimToNull( request.getParameter( "cmb_departamento" ));
				String provincia = StringUtils.trimToNull( request.getParameter( "cmb_provincia" ));
				String distrito = StringUtils.trimToNull( request.getParameter( "cmb_distrito" ) );
				String fd_propuesta = StringUtils.trimToNull( request.getParameter( "dat_fd_propuesta" ));			
				String fh_propuesta = StringUtils.trimToNull( request.getParameter(  "dat_fh_propuesta" ));												
				
				// Ingresamos los datos de busqueda
				params.put("filtrar", filtrar);
				params.put("autoridadSanitaria", JS.toLong( autoridadSanitaria ));
				params.put("departamento", departamento);
				params.put("provincia", provincia);
				params.put("distrito", distrito);
				
				if ( JS._fecha( fd_propuesta )) {
					params.put("fd_caducidad", DateTime.getInstancia( fd_propuesta ).toDate() );	
				}else{
					params.put("fd_caducidad", null);
				}
				
				if ( JS._fecha( fh_propuesta )) {
					params.put("fh_caducidad", DateTime.getInstancia( fh_propuesta ).toDate() );	
				}else{
					params.put("fh_caducidad", null);
				}
				
				// ENVIAMOS LA SOLICITUD			
				bandejaService.selectBandejaAprobarPlanCategorizador(params);	
				// OBTENEMOS LOS DATOS DESPUES DE EJECUTAR EL PROCEDURE
				@SuppressWarnings("unchecked")
				List<BandejaAprobarPlanCategorizadorBean> listaCategorizador = (List<BandejaAprobarPlanCategorizadorBean>)params.get(Constantes.GRILLA.CURSOR);			
				lTotal = Long.parseLong(params.get(Constantes.GRILLA.COUNT).toString());
				
				// ESTABLECEMOS LOS DATOS PARA LAS COLUMNAS DE LA GRILLA
				for (BandejaAprobarPlanCategorizadorBean categorizadorEntity : listaCategorizador) {
					result = new HashMap<String, Object>();
					result.put("plan", ObjectUtils.defaultIfNull( categorizadorEntity.getPlan() ,""));
					result.put("row", ObjectUtils.defaultIfNull( categorizadorEntity.getRow() , ""));
					result.put("codigoTramite", ObjectUtils.defaultIfNull( categorizadorEntity.getCodigoTramite() , ""));				
					result.put("denominacion", ObjectUtils.defaultIfNull(categorizadorEntity.getDenominacion() , "")); 
					result.put("ruc", ObjectUtils.defaultIfNull(categorizadorEntity.getRuc() , "")); 
					result.put("autoridadSanitaria", ObjectUtils.defaultIfNull( categorizadorEntity.getAutoridadSanitaria() ,"")); 
					result.put("departamento", ObjectUtils.defaultIfNull( categorizadorEntity.getDepartamento() ,""));
					result.put("provincia", ObjectUtils.defaultIfNull( categorizadorEntity.getProvincia() ,""));
					result.put("distrito", ObjectUtils.defaultIfNull( categorizadorEntity.getDistrito() ,""));
					result.put("fechaini", categorizadorEntity.getFechaini() == null ? "": DateTime.getInstancia(categorizadorEntity.getFechaini()).getFechaString());
					result.put("fechafin", categorizadorEntity.getFechafin() == null ? "": DateTime.getInstancia(categorizadorEntity.getFechafin()).getFechaString());
					result.put("categorizadores", ObjectUtils.defaultIfNull( categorizadorEntity.getCategorizadores() ,""));
					listaResult.add(result);
	            }					
			}							
		} catch (Exception sos) {
			String msgError = handleJSONError(dataJSON, sos);
			log.error(msgError);
		}
		// RESPONDEMOS POR AJAX
		return handleJSONResponse(listaResult, response, params.get(Constantes.GRILLA.DRAW) , lTotal);
	}
	
	/* **************************************************************/
	/* ACCIONES														*/
	/* **************************************************************/
	
	public ModelAndView aprobar(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return null;
	}
	
	public ModelAndView rechazar(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return null;
	}
	
	public ModelAndView reservar(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return null;
	}
}

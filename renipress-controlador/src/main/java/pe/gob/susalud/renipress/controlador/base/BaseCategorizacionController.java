package pe.gob.susalud.renipress.controlador.base;

import java.io.File;
import java.io.FileInputStream;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.collections.MapUtils;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
//import org.apache.log4j.Logger;
import org.codehaus.jackson.map.ObjectMapper;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jdbc.BadSqlGrammarException;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.multiaction.MultiActionController;
import org.springframework.web.util.WebUtils;

import com.jcfr.utiles.files.JFUtil;
import com.jcfr.utiles.listas.JLUtil;
import com.jcfr.utiles.math.Alea;
import com.jcfr.utiles.string.JSUtil;

import pe.gob.susalud.clientseguridadsunasa.WsLogin;
import pe.gob.susalud.model.OpcionesxPerfil;
import pe.gob.susalud.model.Usuario;
import pe.gob.susalud.renipress.comun.beans.DataJsonBean;
import pe.gob.susalud.renipress.comun.beans.ListaItem;
import pe.gob.susalud.renipress.comun.beans.UploadParams;
import pe.gob.susalud.renipress.comun.beans.UsuarioSessionImpl;
import pe.gob.susalud.renipress.comun.exceptions.CategorizacionException;
import pe.gob.susalud.renipress.comun.exceptions.LoginException;
import pe.gob.susalud.renipress.comun.exceptions.NavigationException;
import pe.gob.susalud.renipress.comun.exceptions.UrlException;
import pe.gob.susalud.renipress.comun.util.Aletorio;
import pe.gob.susalud.renipress.comun.util.Constantes;
import pe.gob.susalud.renipress.comun.util.Constantes.PROCESOS;
import pe.gob.susalud.renipress.comun.util.Constantes.TABLAS;
import pe.gob.susalud.renipress.controlador.util.Parametros;
import pe.gob.susalud.renipress.controlador.util.TablaTablas;
import pe.gob.susalud.renipress.dominio.entidades.login.CredencialEntity;
//**************JSQPM*****************************
//import pe.gob.susalud.renipress.dominio.wrapper.NotificacionWrapper;
import pe.gob.susalud.renipress.dominio.ws.PersonaWs;
import pe.gob.susalud.renipress.servicio.util.ListaItemService;

public class BaseCategorizacionController extends MultiActionController {

	private static final Logger log = LogManager.getLogger(BaseCategorizacionController.class);
        //private static final Logger log = Logger.getLogger(BaseCategorizacionController.class);

	protected static final String plantilla = "default";

	protected static final JSUtil JS = JSUtil.JSUtil;
	protected static final JFUtil JF = JFUtil.JFUtil;
	protected static final JLUtil JL = JLUtil.JLUtil;

	//protected static final String rutaUploadTemp = "/susalud/registro-renipress/tmp/registro-renipress/upload-temp/";

	@Value("${formato.ficha_verificacion.password}")
	protected String password;
	
	/// ---- OPCIONES DEL MENU
	@Value("${CONFIGURACIONES}")
	protected String CONFIGURACIONES;
	@Value("${CONFIGURACIONES.REGLA}")
	protected String CONFIGURACIONES_REGLA;	  
	@Value("${CONFIGURACIONES.TAREA}")
	protected String CONFIGURACIONES_TAREA;
	@Value("${USUARIOS}")
	protected String USUARIOS;	
	@Value("${USUARIOS.SOLICITUD}")
	protected String USUARIOS_SOLICITUD;
	@Value("${USUARIOS.REGISTRADORES}")
	protected String USUARIOS_REGISTRADORES;	
	@Value("${INSCRIPCION}")
	protected String INSCRIPCION;
	@Value("${INSCRIPCION.SOLICITUD}")
	protected String INSCRIPCION_SOLICITUD;
	@Value("${INSCRIPCION.ADMISIBILIDAD}")
	protected String INSCRIPCION_ADMISIBILIDAD;
	@Value("${INSCRIPCION.EVALUACION}")
	protected String INSCRIPCION_EVALUACION;
	@Value("${INSCRIPCION.ACTUALIZACION.RETIRO}")
	protected String INSCRIPCION_ACTUALIZACION_RETIRO;
	@Value("${INSCRIPCION.ACTUALIZACION.OFICIO}")
	protected String INSCRIPCION_ACTUALIZACION_OFICIO;
	@Value("${CATEGORIZACION}")
	protected String CATEGORIZACION;
	@Value("${CATEGORIZACION.SOLICITUD}")
	protected String CATEGORIZACION_SOLICITUD;
	@Value("${CATEGORIZACION.ADMITIR}")
	protected String CATEGORIZACION_ADMITIR;
	@Value("${CATEGORIZACION.COMITETECNICO}")
	protected String CATEGORIZACION_COMITETECNICO;
	@Value("${CATEGORIZACION.EVALUAR}")
	protected String CATEGORIZACION_EVALUAR;
	@Value("${CATEGORIZACION.EVALUAR.PROGRAMACION}")
	protected String CATEGORIZACION_EVALUAR_PROGRAMACION;
	@Value("${CATEGORIZACION.EVALUAR.RESULTADOS}")
	protected String CATEGORIZACION_EVALUAR_RESULTADOS;
	@Value("${CATEGORIZACION.EVALUAR.ACTAS}")
	protected String CATEGORIZACION_EVALUAR_ACTAS;
	@Value("${CATEGORIZACION.EVALUAR.EVALUACION}")
	protected String CATEGORIZACION_EVALUAR_EVALUACION;
	@Value("${CATEGORIZACION.EVALUAR.AMPLIACIONPLAZO}")
	protected String CATEGORIZACION_EVALUAR_AMPLIACIONPLAZO;
	@Value("${CATEGORIZACION.EVALUAR.OPINIONPREVIA}")
	protected String CATEGORIZACION_EVALUAR_OPINIONPREVIA;
	@Value("${CATEGORIZACION.EVALUAR.RESOLUCION}")
	protected String CATEGORIZACION_EVALUAR_RESOLUCION;
	@Value("${CATEGORIZACION.EVALUAR.CATEGORIZACION}")
	protected String CATEGORIZACION_EVALUAR_CATEGORIZACION;
	@Value("${CATEGORIZACION.EVALUAR.SEGUNDAINSTANCIA}")
	protected String CATEGORIZACION_EVALUAR_SEGUNDAINSTANCIA;
	@Value("${CATEGORIZACION.EVALUAR.CERTIFICADO_RENIPRESS}")
	protected String CATEGORIZACION_EVALUAR_CERTIFICADO_RENIPRESS;
	@Value("${CATEGORIZACION.CRONOGRAMA}")
	protected String CATEGORIZACION_CRONOGRAMA;
	@Value("${CONSULTA}")
	protected String CONSULTA;
	@Value("${CONSULTA.TRAMITE}")
	protected String CONSULTA_TRAMITE;
	@Value("${CONSULTA.REQUISITO}")
	protected String CONSULTA_REQUISITO;
	@Value("${REPORTES}")
	protected String REPORTES;
	@Value("${REPORTES.CONFORMACIONCT}")
	protected String REPORTES_CONFORMACIONCT;
	@Value("${REPORTES.TRAMITEXPROCESO}")
	protected String REPORTES_TRAMITEXPROCESO;
	@Value("${REPORTES.IPRESSREGISTRADAS}")
	protected String REPORTES_IPRESSREGISTRADAS;
	@Value("${REPORTES.REGCAT}")
	protected String REPORTES_REGCAT;
	@Value("${REPORTES.IPRESSXINSTITUCION}")
	protected String REPORTES_IPRESSXINSTITUCION;
	@Value("${REPORTES.IPRESSXUBIGEO}")
	protected String REPORTES_IPRESSXUBIGEO;
	@Value("${REPORTES.REQOBS}")
	protected String REPORTES_REQOBS;
	@Value("${REPORTES.CORREDORES}")
	protected String REPORTES_CORREDORES;
	@Value("${REPORTES.STAFF}")
	protected String REPORTES_STAFF;
	@Value("${REPORTESPERSONALIZADO}")
	protected String REPORTESPERSONALIZADO;
	@Value("${REPORTESPERSONALIZADO.GESTIONAR}")
	protected String REPORTESPERSONALIZADO_GESTIONAR;
	@Value("${REPORTESPERSONALIZADO.EJECUTAR}")
	protected String REPORTESPERSONALIZADO_EJECUTAR;
	@Value("${SOPORTE}")
	protected String SOPORTE;
	@Value("${SOPORTE.TICKET}")
	protected String SOPORTE_TICKET;
	@Value("${SOPORTE.CONSULTA}")
	protected String SOPORTE_CONSULTA;
	@Value("${SOPORTE.DETALLE}")
	protected String SOPORTE_DETALLE;	
	@Value("${SOPORTE.ATENDER}")
	protected String SOPORTE_ATENDER;
	
	@Value("${MODE.ADMINISTRADOR.INA}")
	protected String MODE_ADM_INA;
	@Value("${MODE.CATEGORIZADOR.ESP}")
	protected String MODE_CAT_ESP;
	@Value("${MODE.ADMINISTRADOR.REG}")
	protected String MODE_ADM_REG;
	@Value("${MODE.ADMINISTRADOR.GEN}")
	protected String MODE_ADM_GEN;
	
	@Value("${wsseguridad.wsUrl}")
	protected String wsUrl;
	
	@Value("${wsseguridad.wsUsuario}")
	protected String wsUsuario;
	
	@Value("${wsseguridad.wsPass}")
	protected String wsPass;
	
	@Value("${wsseguridad.coApl}")
	protected String coApl;
	
	@Value("${wsseguridad.coSis}")
	protected String coSis;
	
	
	@Value("${wsseguridad.fromCorreo}")
	protected String fromCorreo;
	
	
	@Value("${noLogin.usuario}")
	protected String usuarioNoLogin;
	
	@Value("${noLogin.usuarioSesion}")
	protected Long usuarioSesionNoLogin;
	
	// / ---- METODOS GENERAL FIXME:
	@Autowired
	protected TablaTablas tablaTablas;
	
	@Autowired
	@Qualifier("listaItemService")
	private ListaItemService listaItemService;
	
	@Value("${codUsuario.admRegional}")
	protected String admRegional;
	
	@Value("${codUsuario.usuIpress}")
	protected String usuIpress;
	
	@Value("${codUsuario.catEspecializado}")
	protected String catEspecializado;
		
	// PERFILES
	
	@Value("${MODE.WS_SIS_INT_SALUD}")
	protected Long WS_SIS_INT_SALUD;
	
	@Value("${MODE.ADMINISTRADOR.SIS}")
	protected Long ADMINISTRADOR_SISTEMA;
	
	@Value("${MODE.ESPECIALISTA.IID}")
	protected Long ESPECIALISTA_IID;
	
	@Value("${MODE.ADMINISTRADOR.INA}")
	protected Long ADMINISTRADOR_INA;
	
	@Value("${MODE.CATEGORIZADOR.ESP}")
	protected Long CATEGORIZADOR_ESPECIALIZADO;
	
	@Value("${MODE.ADMINISTRADOR.REG}")
	protected Long ADMINISTRADOR_REGIONAL;
	
	@Value("${MODE.TITULAR.AS}")
	protected Long TITULAR_AS;
	
	@Value("${MODE.ADMINISTRADOR.GEN}")
	protected Long CATEGORIZADOR_GENERAL;
	
	@Value("${MODE.REGISTRADOR}")
	protected Long REGISTRADOR;
	
	@Value("${MODE.MESA.PARTES}")
	protected Long MESA_DE_PARTES;
	
	@Value("${MODE.USUARIO.IPRESS}")
	protected Long USUARIO_IPRESS;
	
	@Value("${MODE.USUARIO.PUBLICO}")
	protected Long USUARIO_PUBLICO;
	
	// PARAMETROS DE LA TABLA PARAMETROS
	protected String rutaUploadFiles = null;
	protected String rutaFormatos = null; // rordonez 11/08/2015
	protected String longitudDNI = null;
	protected String longitudCarnetExtrangeria = null;
	protected String longitudPasaporte = null;
	protected String maxAlertaTarea = null;
	protected String fechaInicialPeriodo = null;
	protected String condicionesReportePersonalizado = null;
	protected String linkRenipress = null;

	protected String perfilRegistrador = null;
	protected String perfilCatGeneral = null;
	protected String perfilCatEspecializado = null;
	protected String sinProceso = null;
	
	protected String rutaUploadTemp = null;
	protected String correo_ws = null;
	
	@Autowired
	protected Parametros parametros;
	
	
	// PARAMETROS DE LA TABLA PARAMETROS
	protected String rutaUploadFilesCorredor = null;
	
	
	public CredencialEntity getUsuarioSession(HttpServletRequest request) throws LoginException {
		if (WebUtils.getSessionAttribute(request, Constantes.LOGIN.USER_SESSION) == null){
			return null;
		}else{
			return (CredencialEntity) WebUtils.getSessionAttribute(request, Constantes.LOGIN.USER_SESSION);
		}	
	}
	
	public void getSession(HttpServletRequest request){
		CredencialEntity credencialEntity = new CredencialEntity();
		credencialEntity.setUsuario("java02");
		credencialEntity.setPassword("java02"); 
		
		String j_ip = "192.168.1.1";
		
		credencialEntity.setIpLocal(j_ip);
		credencialEntity.setCodEncargatura("1");
		credencialEntity.setCodUsuario("9495");
		credencialEntity.setCodArea("1");
		credencialEntity.setIdautorsanit(23L);
		credencialEntity.setIdPerfil("259");
	
		PersonaWs personaWs = new PersonaWs();
		personaWs.setNumDoc("46229036");
		personaWs.setPaterno("illesca");
		personaWs.setMaterno("cangalaya");
		personaWs.setNombres("cesar");
		personaWs.setNombreLargo("cesar illesca");
		personaWs.setEmail("xesar.miguel@gmail.com");		
		personaWs.setTipoDoc("1"); 
		  
		credencialEntity.setPersonaWs(personaWs);
		obtenerAdicional(credencialEntity);
		setUsuarioSession(request, credencialEntity);
	}
	
	public void obtenerAdicional(CredencialEntity credencial)  {    	

    	try{
    		if (credencial.getIdautorsanit() != null && credencial.getDesautorsanit() == null) {
    			List<ListaItem> items = listaItemService.selectAutoridadSanitaria(new ListaItem(credencial.getIdautorsanit().toString()));
    			if (items != null && items.size() > 0) {
    				credencial.setDesautorsanit(items.get(0).getLabel());
    			}
    		}
    	}catch(Exception e){
    		log.info("Error al obtener la descricción de la autoridad sanitaria");
    	}
    	
    	credencial.setDesperfil("TITULAR AS");
		
		/*
		if (credencial.getDesperfil() == null) {			
			List<Perfiles> perfiles = (List<Perfiles>) credencial.getListaPerfiles();
			if (credencial.getIdPerfil() != null && JS._numero(credencial.getIdPerfil())
					&& perfiles != null && !perfiles.isEmpty()) {
				Iterator<Perfiles> iter = perfiles.iterator();
				while (iter.hasNext()) {
					Perfiles perfil = iter.next();
					if (perfil.getCoPerfil().equals(credencial.getIdPerfil())) {
						credencial.setDesperfil(perfil.getNoPerfil());
						break;
					}
				}
				if (credencial.getDesperfil() == null) {
					try{
						perfiles = this.listarPerfiles(credencial);	
					}catch(Exception e){
						
					}
					
					if (perfiles != null && perfiles.size() == 1){
						credencial.setDesperfil(perfiles.get(0).getNoPerfil());
					}					
				}
			}
		}
		*/
    }

	private String getParametro(String codigo) {
		return parametros.getParametro(codigo);
	}

	public Map<String, Object> getListaMensajeError() throws Exception{
		Map<String, Object> mapa=new HashMap<String, Object>();
		List<Map<String, Object>> list= new ArrayList<Map<String, Object>>(); //mensajeError.getMensajeError();
		for ( Map<String, Object> map : list ) {
			mapa.put(map.get("CO_CODCATERR").toString(), map.get("DE_MENSAJEUSU").toString());
		}
		return mapa;
	}
	
	protected String getAbreviaturaProceso(Constantes.PROCESOS proc) throws Exception{
		// OBTENER EL NOMBRE PARA EL ARCHIVO						
		return getParametro(proc.getCodValor());
	}

	/**
	 * @name validarErrores - Inserta el manejo de errores Generico
	 * @param result
	 * @param errorCodigo
	 * @throws CategorizacionException
	 * @author [BIT] - millesca
	 * @fecha 7/4/2015
	 */
	protected void validarErrores(Map<String, Object> result, String errorCodigo)
			throws CategorizacionException {
		String msgError = MapUtils.getString(result, "msgError");
		if (StringUtils.isNotBlank(msgError)) {
			throw new CategorizacionException("errorValidacion", msgError, errorCodigo, result);
		}
	}

	public ModelAndView cargarTemplate(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		return handleCargar(request, true);
	}

	public ModelAndView cargarPage(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		return handleCargar(request, false);
	}

	// revisar
	protected String handleMsgError(Exception sos) {

		// FIXME: aqui agregar incluir manejo de la exception personalizada
		// CategorizacionException
		
		// seteando el mensaje de error
		String msgError = ""
				+ ((sos == null || sos instanceof NullPointerException) ? "Null Pointer Exception"
						: sos.getMessage());
		
		log.error(sos.getMessage());
		
		if (sos != null && sos.getCause() != null) {
			msgError = msgError + ", CAUSA: " + sos.getCause().getMessage();
			log.error("CAUSA: " + sos.getCause().getMessage());
		}

		msgError = "Se encontro un error al acceder al formulario, se reportará" ;
		return msgError;
	}

	protected String handleMsgError(String codigoError, Exception sos) {

		// FIXME: aqui agregar incluir manejo de la exception personalizada
		// CorredoresException

		// seteando el mensaje de error
		String msgError = ""
				+ ((sos == null || sos instanceof NullPointerException) ? "Null Pointer Exception"
						: sos.getMessage());
		if (sos != null && sos.getCause() != null) {
			msgError = msgError + ", CAUSA: " + sos.getCause().getMessage();
		}

		return msgError;
	}

	protected String handleJSONError(DataJsonBean dataJsonBean, Exception sos) {

		String msgError = handleMsgError(sos);

		// caso de error normal
		dataJsonBean.setRespuesta("error", msgError, null);

		if (sos instanceof CategorizacionException) {
			CategorizacionException cast = (CategorizacionException) sos;

			// ver si es error por validacion
			if (JS._equiv(cast.getTipo(), "errorValidacion")) {
				dataJsonBean.setRespuesta("errorValidacion", msgError,
						cast.getExtra());
			}
		}

		return msgError;
	}

	// revisar
	protected ModelAndView handleJSONResponse(DataJsonBean dataJsonBean,
			HttpServletResponse response) throws Exception {

		response.setContentType("text/plain;charset=utf-8");
		response.setHeader("Cache-Control", "no-cache");

		// String dataJsonString = new Gson().toJson(dataJsonBean);
		String dataJsonString = new ObjectMapper()
				.writeValueAsString(dataJsonBean);

		PrintWriter writer = response.getWriter();

		if (writer != null) {
			writer.write(dataJsonString);
			// writer.close();
		}

		return null;
	}

	protected void configurarDatatable(HttpServletRequest request,
			Map<String, Object> params) {

		// DATOS DEL DATATABLES
		String start = StringUtils.trimToNull(request
				.getParameter(Constantes.GRILLA.START));
		String length = StringUtils.trimToNull(request
				.getParameter(Constantes.GRILLA.LENGTH));

		String column = StringUtils.trimToNull(request
				.getParameter(Constantes.GRILLA.COLUMN_P));
		String dir = StringUtils.trimToNull(request
				.getParameter(Constantes.GRILLA.DIR_P));

		Long lColumn = (null == column || "0".equals(column)) ? 1L : JS
				.toLong(column);

		Long lStart = null == start ? 0L : JS.toLong(start);
		Long lLength = null == length ? 0L : JS.toLong(length);

		String draw = StringUtils.trimToEmpty(request
				.getParameter(Constantes.GRILLA.DRAW));

		Long lFirst = lStart + 1;
		Long lLast = lStart + lLength;

		params.put(Constantes.GRILLA.FIRST, lFirst);
		params.put(Constantes.GRILLA.LAST, lLast);
		params.put(Constantes.GRILLA.COUNT, null);
		params.put(Constantes.GRILLA.CURSOR, null);
		params.put(Constantes.GRILLA.DRAW, draw == null ? "" : draw);
		params.put(Constantes.GRILLA.COLUMN, lColumn);
		params.put(Constantes.GRILLA.DIR, dir);
	}

	protected void configurarBandeja(HttpServletRequest request,
			Map<String, Object> params) throws Exception {

		CredencialEntity usuario = getUsuarioSession(request);

		params.put(Constantes.BANDEJA.PERFIL, JS.toInt(usuario.getIdPerfil()));
		params.put(Constantes.BANDEJA.AUTORIDADSANITARIA,usuario.getIdautorsanit());
	}

	protected void handleDescargar(HttpServletResponse response, File fichero,
			String nombreAMostrar) throws Exception {

		try {

			if (fichero == null)
				throw new IllegalArgumentException(
						"argumento fichero no puede ser null");
			if (!fichero.isFile())
				throw new IllegalArgumentException(
						"argumento fichero debe ser archivo");

			// establecer cabecera response para descargar fichero
			response.setContentType("application/octet-stream");
			if (StringUtils.isNotBlank(nombreAMostrar)) {
				response.setHeader("Content-Disposition",
						"attachment; filename=\"" + nombreAMostrar + "\"");
			}

			byte[] bytesArchivo = IOUtils.toByteArray(new FileInputStream(
					fichero));

			IOUtils.write(bytesArchivo, response.getOutputStream());

		} catch (Exception sos) {

			String msgError = handleMsgError(sos);
			log.error(msgError);

			throw sos;

		}
	}

	protected void handleDescargar(HttpServletResponse response,
			FileInputStream fileInputStream, String nombreAMostrar)
			throws Exception {

		try {

			if (fileInputStream == null)
				throw new IllegalArgumentException(
						"argumento fileInputStream no puede ser null");

			// establecer cabecera response para descargar fichero
			response.setContentType("application/octet-stream");
			if (StringUtils.isNotBlank(nombreAMostrar)) {
				response.setHeader("Content-Disposition",
						"attachment; filename=\"" + nombreAMostrar + "\"");
			}

			byte[] bytesArchivo = IOUtils.toByteArray(fileInputStream);

			IOUtils.write(bytesArchivo, response.getOutputStream());

		} catch (Exception sos) {

			String msgError = handleMsgError(sos);
			log.error(msgError);

			throw sos;

		}
	}
	
	

	protected void setSessionAttribute(HttpServletRequest request, String name,
			Object value) {
		WebUtils.setSessionAttribute(request, name, value);
	}

	protected ModelAndView handleJSONResponse(List<?> dataJsonBean,
			HttpServletResponse response) throws Exception {

		response.setContentType("text/plain;charset=utf-8");
		response.setHeader("Cache-Control", "no-cache");

		// String dataJsonString = new Gson().toJson(dataJsonBean);

		PrintWriter writer = response.getWriter();
		if (writer != null) {
			writer.write("{" + JSONObject.toString("data", dataJsonBean) + "}");
			// writer.close();
		}
		return null;
	}

	// revisar
	protected ModelAndView handleJSONResponse(List<?> dataJsonBean,
			HttpServletResponse response, Object draw, Long total)
			throws Exception {

		response.setContentType("text/plain;charset=utf-8");
		response.setHeader("Cache-Control", "no-cache");

		// String dataJsonString = new Gson().toJson(dataJsonBean);		
		
		PrintWriter writer = response.getWriter();
		if (writer != null) {
			writer.write("{" + JSONObject.toString("data", dataJsonBean) + " , \"draw\":"+ draw.toString() +", \"recordsFiltered\":"+ total +", \"recordsTotal\":"+ total +" }");			
			writer.close();
		}
		return null;
	}
	
	// revisar
	protected ModelAndView handleJSONResponseAjax(List<?> dataJsonBean, HttpServletResponse response) throws Exception {

		response.setContentType("text/plain;charset=utf-8");
		response.setHeader("Cache-Control", "no-cache");

		PrintWriter writer = response.getWriter();
		if (writer != null) {
			writer.write("{" + JSONObject.toString("data", dataJsonBean) + "}");			
			writer.close();
		}
		
		return null;
	}
	
	protected ModelAndView handleJSONResponseAjaxData(List<?> dataJsonBean, String estado, String msg, List<?> errores, HttpServletResponse response) throws Exception {

		response.setContentType("text/plain;charset=utf-8");
		response.setHeader("Cache-Control", "no-cache");

		PrintWriter writer = response.getWriter();
		if (writer != null) {
			//writer.write("{" + JSONObject.toString("data", dataJsonBean) + ", " + JSONObject.toString("estado", estado)  + "estado:\"" + estado + "\" , msg:\"" + msg + "\" " + errores != null ? JSONObject.toString("data", dataJsonBean) : "[]"  + " }");
			writer.write("{" + JSONObject.toString("data", dataJsonBean) + ", " + JSONObject.toString("estado", estado) + ", " + JSONObject.toString("msg", msg) + ", " + JSONObject.toString("errores", ( errores != null ? errores : "[]")) + "}");
			writer.close();
		}
		return null;
	}

	// done
	protected Map<String, Object> handleMultipartForm(
			HttpServletRequest request, UploadParams params) throws Exception {
		return handleMultipartForm(request, params, true, false);
	}

	protected Map<String, Object> handleMultipartForm(HttpServletRequest request)
			throws Exception {

		boolean isMultipart = ServletFileUpload.isMultipartContent(request);

		if (!isMultipart)
			throw new CategorizacionException("Formulario no es multipart",
					"RCC-001");

		DiskFileItemFactory factory = new DiskFileItemFactory();

		// Create a new file upload handler
		ServletFileUpload upload = new ServletFileUpload(factory);

		// maximum file size to be uploaded.
		// upload.setSizeMax(params.getMaxFileSize());

		// Parse the request to get file items.
		List<FileItem> fileItems = upload.parseRequest(request);

		// Process the uploaded file items
		Iterator<FileItem> iterator = fileItems.iterator();

		// mapa resultado con los parametros del request
		Map<String, Object> result = new LinkedHashMap<String, Object>();

		while (iterator.hasNext()) {
			FileItem fi = (FileItem) iterator.next();

			if (fi.isFormField()) {
				result.put(fi.getFieldName(), fi.getString("UTF-8"));
			} else {
				result.put(fi.getFieldName(),
						result.get(fi.getFieldName() + "_pathFileGEN"));
			}
		}

		return result;
	}

	// done
	protected Map<String, Object> handleMultipartForm(
			HttpServletRequest request, UploadParams params,
			boolean escribirEnDisco, boolean incluirBytesEnResult)
			throws Exception {

		boolean isMultipart = ServletFileUpload.isMultipartContent(request);

		if (!isMultipart)
			throw new CategorizacionException("Formulario no es multipart","RCC-001");

		DiskFileItemFactory factory = new DiskFileItemFactory();

		// maximum size that will be stored in memory
		factory.setSizeThreshold(params.getMaxMemSize());

		// Location to save data that is larger than maxMemSize.
		factory.setRepository(new File(params.getRutaUploadTemp()));

		// Create a new file upload handler
		ServletFileUpload upload = new ServletFileUpload(factory);

		// maximum file size to be uploaded.
		upload.setSizeMax(params.getMaxFileSize());

		// Parse the request to get file items.
		List<FileItem> fileItems = upload.parseRequest(request);

		// Process the uploaded file items
		Iterator<FileItem> iterator = fileItems.iterator();
		
		Iterator<FileItem> iteratorAux = fileItems.iterator();
		

		// ruta donde se guardaran los ficheros adjuntos, debe terminar en /
		String filePath = params.getRutaUploadFiles();

		// mapa resultado con los parametros del request
		Map<String, Object> result = new LinkedHashMap<String, Object>();

		// ID DE PROCESO

		while (iterator.hasNext()) {

			FileItem fi = (FileItem) iterator.next();

			if (fi.isFormField()) {

				// en campo normal de formulario
				result.put(fi.getFieldName(), fi.getString("UTF-8"));

			} else {

				// atributo name del control
				String fieldName = fi.getFieldName();

				// nombre del archivo, puede ser vacio si no subio nada
				String fileNameOriginal = new String(fi.getName().getBytes(),
						"UTF-8");

				if (fileNameOriginal.indexOf(File.separator) > -1) {
					String[] vAux = null;
					try {
						vAux = fileNameOriginal.split(File.separator);
					} catch (Exception e) {
						vAux = fileNameOriginal.split(File.separator
								+ File.separator);
					}

					fileNameOriginal = vAux[vAux.length - 1];
				}

				// String contentType = fi.getContentType(); //
				// application/octet-stream
				// boolean isInMemory = fi.isInMemory(); // siempre es true
				// long sizeInBytes = fi.getSize();

				// si no hay nombre de archivo es que no adjunto nada en el
				// <input type="file"
				if (StringUtils.isNotBlank(fileNameOriginal)) {

					if (escribirEnDisco) {

						String ext = FilenameUtils.getExtension(fileNameOriginal);

						// crea un nombre de archivo unico: nombre campo para
						// tipar archivo + NRO_UNICO_TIEMPO_Y_RANDOM

						String fileNameGenerado = Aletorio.newNumerosID(obtenerAbreviaturaFile(fieldName, iteratorAux));

						if (StringUtils.isNotBlank(ext)) {
							fileNameGenerado = fileNameGenerado + "." + ext;
						}

						fi.write(new File(filePath + fileNameGenerado));

						// incluir en el result el filename original
						result.put(fieldName + "_fileNameORI", fileNameOriginal);

						// incluir en el result el filename generado
						result.put(fieldName + "_fileNameGEN", fileNameGenerado);

						// incluir en el result la ruta donde se guardo el
						// archivo
						result.put(fieldName + "_pathFileGEN", filePath
								+ fileNameGenerado);

						// incluir en el result como nombre de campo la ruta del
						// archivo generado
						result.put(fieldName,
								result.get(fieldName + "_pathFileGEN"));
					}

					if (incluirBytesEnResult) {
						// incluir en el result el inputstream
						result.put(fieldName + "_inputStream",
								IOUtils.toByteArray(fi.getInputStream()));
					}

				}

			}
		}

		return result;

	}
	
	protected String obtenerAbreviaturaFile(String campo, Iterator<FileItem> iterator){
		String abreviatura = "";
		try{
			while (iterator.hasNext()) {
				FileItem fi = (FileItem) iterator.next();
				if (fi.isFormField()) {
					String fieldName = fi.getFieldName();
					if (Constantes.TABLA_TABLAS.TXT_PROCESO.equals(fieldName)){
						String valorProceso = fi.getString();
						if (valorProceso != null && !"".equals(valorProceso)){						
							abreviatura = listaItemService.selectProcesoAbreviatura(new ListaItem(valorProceso)).get(0).getLabel();
						}
						break;
					}
				}
			}
			if ("".equals(abreviatura)){
				abreviatura = sinProceso;
			}
			abreviatura += getAbreviatura(JS.toLong( listaItemService.selectTablaID(new ListaItem( Constantes.TABLAS.TRNIT_TIPO_ADJUNTO)).get(0).getId()), campo ); 
		}catch(Exception e){
			abreviatura = campo;			
		}
		return abreviatura;
	}

	protected String obtenerAbreviaturaFile(String campo, String valorProceso){
		return obtenerAbreviaturaFile( campo,  valorProceso, Constantes.TABLAS.TRNIT_TIPO_GRILLA);
	}
	
	protected String obtenerAbreviaturaFile(String campo, String valorProceso, String tipoAdjunto){
		String abreviatura = "";
		try{			
			if (valorProceso != null && !"".equals(valorProceso)){		
				try{
					abreviatura = listaItemService.selectProcesoAbreviatura(new ListaItem(valorProceso)).get(0).getLabel();	
				}catch(Exception e){
					abreviatura = "";
				}			
			}
			if ("".equals(abreviatura)){
				if (sinProceso == null){
					sinProceso = getParametro(Constantes.PARAMETROS.SIN_PROC.getParametro());
				}
				abreviatura = sinProceso;
			}
			abreviatura += getAbreviatura(JS.toLong( listaItemService.selectTablaID(new ListaItem( tipoAdjunto )).get(0).getId()), campo ); 
		}catch(Exception e){
			abreviatura = campo;			
		}
		return abreviatura;
	}
	
	

//	protected ModelAndView handleModelAndView(Map<String, Object> model) {
//		// PRE: model cannot be null and must contain _next attribute
//		String _nextView = MapUtils.getString(model, "_view");
//
//		return new ModelAndView(_nextView, model);
//	}
	protected ModelAndView handleModelAndView(Map<String, Object> model, HttpServletRequest request,
			boolean... usePestanias) throws Exception {
		if (this.getUsuarioSession(request) == null) {
			return navegar("login.htm");
		}
		return handleModelAndView(model);
	}
	//suejo
	protected ModelAndView handleModelAndView(Map<String, Object> model, 
			boolean... usePestanias) {
		// PRE: model cannot be null and must contain _next attribute
		String _nextView = MapUtils.getString(model, "_view");
		String _page = MapUtils.getString(model, "_page");
		String _module= MapUtils.getString(model, "_module");
		String _template= MapUtils.getString(model, "_template");
		
		ModelAndView salida= new ModelAndView();
		ModelAndView salida2= new ModelAndView();
		ModelAndView salida3= new ModelAndView();
		//salida=new ModelAndView(_nextView, model);
		
		try{
			//String demo= usePestanias.getClass().getName();	
		
			
		if(usePestanias.length>0){
			
			salida= new ModelAndView(_template+"/"+_module+"/"+_page);
			//salida.addAllObjects(model);
			salida3=salida;
			
		}else
		{
			salida2=new ModelAndView(_nextView, model);
			salida3=salida2;
		}
		}catch(Exception e){
		e.getStackTrace();
		}
		return salida3;
	}
	
	protected ModelAndView handleErrorModelAndView(Map<String, Object> model,
			String msgError) {
		Map<String, Object> result = model;

		if (result == null) {
			result = new HashMap<String, Object>();
			// model.put("_view", plantilla);
		}

		// revisar
		// if ( StringUtils.isEmpty( MapUtils.getString(result, "_nextView") ) )
		// {
		// model.put("_nextView", "default");
		// }

		// model.put("_page", "error");

		model.put("_module", null);
		model.put("_msgError", msgError);

		setNavigationParamsTemplate(model, "error", null, plantilla);

		return handleModelAndView(model);
	}

	protected ModelAndView handleErrorModelAndView(Map<String, Object> model,
			String msgError, HttpServletRequest request)  throws Exception{

		Map<String, Object> result = model;

		if (result == null) {
			result = new HashMap<String, Object>();
			// model.put("_view", plantilla);
		}

		// revisar
		// if ( StringUtils.isEmpty( MapUtils.getString(result, "_nextView") ) )
		// {
		// model.put("_nextView", "default");
		// }

		// model.put("_page", "error");

		model.put("_module", null);
		model.put("_msgError", msgError);

		setNavigationParamsTemplate(model, "error", null, plantilla);

		return handleModelAndView(model, request);
	}
	
	protected ModelAndView handleErrorModelAndView(Map<String, Object> model,
			String msgError, HttpServletRequest request, Exception ex)  throws Exception{

		Map<String, Object> result = model;

		if (result == null) {
			result = new HashMap<String, Object>();
			// model.put("_view", plantilla);
		}

		// revisar
		// if ( StringUtils.isEmpty( MapUtils.getString(result, "_nextView") ) )
		// {
		// model.put("_nextView", "default");
		// }

		// model.put("_page", "error");

		model.put("_module", null);
		model.put("_msgError", msgError);

		setNavigationParamsTemplate(model, "error", null, plantilla);

		return handleModelAndView(model, request);
	}
	
	protected ModelAndView handleErrorModelAndViewTemplate(Map<String, Object> model, String msgError) {
		model.put("_msgError", msgError);
		setNavigationParams(model, "error", "", plantilla, false);
		
		return handleModelAndView(model);
	}

	protected ModelAndView handleErrorModelAndView(Map<String, Object> model,
			String msgError, boolean useTemplateAsView) {

		Map<String, Object> result = model;

		if (result == null) {
			result = new HashMap<String, Object>();
		}

		model.put("_module", null);
		model.put("_msgError", msgError);

		setNavigationParams(model, "error", null, plantilla, useTemplateAsView);

		return handleModelAndView(model);
	}

	protected Map<String, Object> newModelAndNavigationParams(String pagina,
			String modulo, String plantilla) {

		HashMap<String, Object> model = new HashMap<String, Object>();

		setNavigationParams(model, pagina, modulo, plantilla);

		return model;
	}

	protected void setNavigationParamsTemplate(Map<String, Object> model,
			String pagina, String modulo, String plantilla) {
		setNavigationParams(model, pagina, modulo, plantilla, true);
	}

	protected void setNavigationParamsTemplate(Map<String, Object> model,
			String pagina, String modulo, String plantilla,
			HttpServletRequest request) {				
		this.getMenuOpciones(request, model);
		setNavigationParams(model, pagina, modulo, plantilla, true);
	}

	// DONE
	protected void setNavigationParams(Map<String, Object> model,
			String pagina, String modulo, String plantilla) {
		// useTemplateAsView = false, indica que se va usar _template como vista
		// useTemplateAsView = true, indica que se va usar
		// _template/[_module]/_page como vista
		setNavigationParams(model, pagina, modulo, plantilla, true);
	}
	
	//suejo
	protected void setNavigationParams(Map<String, Object> model,
			String pagina, String modulo, String plantilla,
			boolean useTemplateAsView, boolean usePestanias) {
		
		String _view = null;
		String _page = StringUtils.trimToEmpty(pagina);
		String _module = StringUtils.trimToEmpty(modulo);
		String _template = StringUtils.trimToEmpty(plantilla);
		
		if(usePestanias){
		_view = _template + "/" + _module + "/" + _page;
		}
		
	}
	
	protected void setNavigationParams(Map<String, Object> model,
			String pagina, String modulo, String plantilla,
			boolean useTemplateAsView) {

		// PRE: pagina no puede ser null, plantilla puede ser null pero solo si
		// useTemplateAsView es false
		if (StringUtils.isBlank(pagina))
			throw new IllegalArgumentException("pagina no puede ser null");
		if (useTemplateAsView &&  StringUtils.isBlank(plantilla))
			throw new IllegalArgumentException("plantilla no puede ser null");

		String _view = null;
		String _page = StringUtils.trimToEmpty(pagina);
		String _module = StringUtils.trimToEmpty(modulo);
		String _template = StringUtils.trimToEmpty(plantilla);

		if (useTemplateAsView) {
			_view = _template;
		} else {
			if (StringUtils.isNotBlank(_template)) {
				if (StringUtils.isNotBlank(_module)) {
					_view = _template + "/" + _module + "/" + _page;
				} else {
					_view = _template + "/" + _page;
				}
			} else {
				// template puede ser vacio
				if (StringUtils.isNotBlank(_module)) {
					_view = _module + "/" + _page;
				} else {
					_view = _page;
				}
			}
		}

		// setear atributos de navegacion, vista es la siguiente vista
		if (StringUtils.isNotBlank(_page))
			model.put("_page", _page);
		if (StringUtils.isNotBlank(_module))
			model.put("_module", _module);
		if (StringUtils.isNotBlank(_template))
			model.put("_template", _template);
		if (StringUtils.isNotBlank(_view))
			model.put("_view", _view);

	}

	private ModelAndView handleCargar(HttpServletRequest request, boolean useTemplateAsView) throws Exception {

		// INFO: solo busca los atributos en el request y armar el _nextView
		String _page = StringUtils.trimToEmpty(request.getParameter("_page"));
		String _module = StringUtils.trimToEmpty(request.getParameter("_module"));
		String _template = StringUtils.trimToEmpty(request.getParameter("_template"));

		HashMap<String, Object> model = new HashMap<String, Object>();

		// usar page
		setNavigationParams(model, _page, _module, _template, useTemplateAsView);

		return handleModelAndView(model);
	}
	
	protected String getNameDescargaArchivo(PROCESOS proc, String grilla) throws Exception{					
		
		return Aletorio.newNumerosID( obtenerAbreviaturaFile( grilla, proc.getProceso().toString() ) ) + "_xp.xls";		
		//return Alea.newNumerosID( getAbreviaturaProceso(proc) + getAbreviaturaGrilla(grilla) ) + "_xp.xls";		
	}
	
	protected String getAbreviatura(Long tabla, String nombrecampo) throws Exception{
		return tablaTablas.getAbreviatura(tabla, nombrecampo);
	}

	protected String getAbreviaturaGrilla(String grilla) throws Exception {
		return getAbreviatura(TABLAS.RNIT_TIPO_GRILLA, grilla);
	}

	protected String getAbreviaturaAdjunto(String adjunto) throws Exception {
		return getAbreviatura(TABLAS.RNIT_TIPO_ADJUNTO, adjunto);
	}

	protected CredencialEntity getCredencial(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		return this.getUsuarioSession(request);
	}
	
	protected CredencialEntity getUsuarioNoLogin(HttpServletRequest request, Map<String, Object> params) throws Exception {
		CredencialEntity credencialNoLogin = new CredencialEntity();
		credencialNoLogin.setUsuario(usuarioNoLogin);
		credencialNoLogin.setIdusuasesion(usuarioSesionNoLogin);
		if (params == null){
			credencialNoLogin.setIpLocal(StringUtils.trimToEmpty(request.getParameter("txt_ipLocal")));
		}else{
			credencialNoLogin.setIpLocal(StringUtils.trimToEmpty(MapUtils.getString(params, "txt_ipLocal")));
		}	
		return credencialNoLogin;
	}
	/*
	protected void setMenuOpciones(HttpServletRequest request, Map<String, PermisoAcceso> opciones){
		WebUtils.setSessionAttribute(request, Constantes.MOD_REG_LOGIN.OPCIONES, opciones);	
	}
	*/
	@SuppressWarnings("unchecked")
	protected void getMenuOpciones(HttpServletRequest request, Map<String, Object> model){		
		/*		
		Map<String, PermisoAcceso> opciones = (Map<String, PermisoAcceso>) WebUtils.getSessionAttribute(request, Constantes.MOD_REG_LOGIN.OPCIONES);		
		model.put("arreglo", opciones);
				
		model.put("CONFIGURACIONES",CONFIGURACIONES);
		model.put("CONFIGURACIONES_REGLA",CONFIGURACIONES_REGLA);	
		model.put("CONFIGURACIONES_TAREA",CONFIGURACIONES_TAREA);
		model.put("USUARIOS",USUARIOS);	
		model.put("USUARIOS_SOLICITUD",USUARIOS_SOLICITUD);
		model.put("USUARIOS_REGISTRADORES",USUARIOS_REGISTRADORES);	
		model.put("INSCRIPCION",INSCRIPCION);
		model.put("INSCRIPCION_SOLICITUD",INSCRIPCION_SOLICITUD);
		model.put("INSCRIPCION_ADMISIBILIDAD",INSCRIPCION_ADMISIBILIDAD);
		model.put("INSCRIPCION_EVALUACION",INSCRIPCION_EVALUACION);
		model.put("INSCRIPCION_ACTUALIZACION_RETIRO",INSCRIPCION_ACTUALIZACION_RETIRO);
		model.put("INSCRIPCION_ACTUALIZACION_OFICIO",INSCRIPCION_ACTUALIZACION_OFICIO);		
		model.put("CATEGORIZACION",CATEGORIZACION);
		model.put("CATEGORIZACION_SOLICITUD",CATEGORIZACION_SOLICITUD);
		model.put("CATEGORIZACION_ADMITIR",CATEGORIZACION_ADMITIR);
		model.put("CATEGORIZACION_COMITETECNICO",CATEGORIZACION_COMITETECNICO);
		model.put("CATEGORIZACION_EVALUAR",CATEGORIZACION_EVALUAR);
		model.put("CATEGORIZACION_EVALUAR_PROGRAMACION",CATEGORIZACION_EVALUAR_PROGRAMACION);
		model.put("CATEGORIZACION_EVALUAR_RESULTADOS",CATEGORIZACION_EVALUAR_RESULTADOS);
		model.put("CATEGORIZACION_EVALUAR_ACTAS",CATEGORIZACION_EVALUAR_ACTAS);
		model.put("CATEGORIZACION_EVALUAR_EVALUACION",CATEGORIZACION_EVALUAR_EVALUACION);
		model.put("CATEGORIZACION_EVALUAR_AMPLIACIONPLAZO",CATEGORIZACION_EVALUAR_AMPLIACIONPLAZO);
		model.put("CATEGORIZACION_EVALUAR_OPINIONPREVIA",CATEGORIZACION_EVALUAR_OPINIONPREVIA);
		model.put("CATEGORIZACION_EVALUAR_RESOLUCION",CATEGORIZACION_EVALUAR_RESOLUCION);
		model.put("CATEGORIZACION_EVALUAR_CATEGORIZACION",CATEGORIZACION_EVALUAR_CATEGORIZACION);
		model.put("CATEGORIZACION_EVALUAR_SEGUNDAINSTANCIA",CATEGORIZACION_EVALUAR_SEGUNDAINSTANCIA);
		model.put("CATEGORIZACION_EVALUAR_CERTIFICADO_RENIPRESS", CATEGORIZACION_EVALUAR_CERTIFICADO_RENIPRESS);
		model.put("CATEGORIZACION_CRONOGRAMA",CATEGORIZACION_CRONOGRAMA);
		model.put("CONSULTA",CONSULTA);
		model.put("CONSULTA_TRAMITE",CONSULTA_TRAMITE);
		model.put("CONSULTA_REQUISITO",CONSULTA_REQUISITO);
		model.put("REPORTES",REPORTES);
		model.put("REPORTES_CONFORMACIONCT",REPORTES_CONFORMACIONCT);
		model.put("REPORTES_TRAMITEXPROCESO",REPORTES_TRAMITEXPROCESO);
		model.put("REPORTES_IPRESSREGISTRADAS",REPORTES_IPRESSREGISTRADAS);
		model.put("REPORTES_REGCAT",REPORTES_REGCAT);
		model.put("REPORTES_IPRESSXINSTITUCION",REPORTES_IPRESSXINSTITUCION);
		model.put("REPORTES_IPRESSXUBIGEO",REPORTES_IPRESSXUBIGEO);
		model.put("REPORTES_REQOBS",REPORTES_REQOBS);
		model.put("REPORTES_CORREDORES",REPORTES_CORREDORES);
		model.put("REPORTES_STAFF",REPORTES_STAFF);
		model.put("REPORTESPERSONALIZADO",REPORTESPERSONALIZADO);
		model.put("REPORTESPERSONALIZADO_GESTIONAR",REPORTESPERSONALIZADO_GESTIONAR);
		model.put("REPORTESPERSONALIZADO_EJECUTAR",REPORTESPERSONALIZADO_EJECUTAR);
		model.put("SOPORTE",SOPORTE);
		model.put("SOPORTE_TICKET",SOPORTE_TICKET);
		model.put("SOPORTE_CONSULTA",SOPORTE_CONSULTA);
		model.put("SOPORTE_DETALLE",SOPORTE_DETALLE);		
		model.put("SOPORTE_ATENDER",SOPORTE_ATENDER);
		
		model.put("MODE_ADMINISTRADOR_INA", MODE_ADM_INA);
		model.put("MODE_CATEGORIZADOR_ESP", MODE_CAT_ESP);
		model.put("MODE_ADM_REG", MODE_ADM_REG);
		
		try {
			model.put("USER_LOGIN", getUsuarioSession(request));
		} catch (Exception sos) {
			model.put("USER_LOGIN", null);
		}
		*/
	}

	protected String getString(Map<String, Object> mapa, String campo) {
		return MapUtils.getString(mapa, campo, StringUtils.EMPTY);
	}
	
	protected Long getLong(Map<String, Object> mapa, String campo) {
		return MapUtils.getLong(mapa, campo, new Long(0));
	}	
	
	protected Boolean getBoolean(Map<String, Object> mapa, String campo) {
		return MapUtils.getBoolean(mapa, campo, false);
	}
	
	protected ModelAndView reiniciar(){
		return reiniciar("El tiempo de la sessiÃ³n a terminado");
	}
	
	protected ModelAndView reiniciar(String mensaje){		
		Map<String, Object> model = new HashMap<String, Object>();
		model.put("error", mensaje);
		setNavigationParams(model, "login", "login", null, false);
		
		return handleModelAndView(model);		
	}
	
	protected ModelAndView reiniciar(String mensaje, int intentos){		
		Map<String, Object> model = new HashMap<String, Object>();
		model.put("error", mensaje);
		model.put("intentos", intentos);
		setNavigationParams(model, "login", "login", null, false);
		
		return handleModelAndView(model);		
	}
	
	protected void setUsuarioSession(HttpServletRequest request, CredencialEntity credencialEntity){
		WebUtils.setSessionAttribute(request, Constantes.LOGIN.USER_SESSION , credencialEntity);	
	}
	
	protected void removerUsuarioSession(HttpServletRequest request) throws Exception {
		if (WebUtils.getSessionAttribute(request, Constantes.LOGIN.USER_SESSION) != null) {
			WebUtils.setSessionAttribute(request, Constantes.LOGIN.USER_SESSION, null);			
			WebUtils.setSessionAttribute(request, Constantes.MOD_REG_LOGIN.OPCIONES, null);
		}
	}
	
	protected UsuarioSessionImpl getUsuarioSession2(HttpServletRequest request){
		return null;
	}
	
	protected ModelAndView navegar() throws Exception {
		ModelAndView model = new ModelAndView();
		Map<String, Object> map = new HashMap<String, Object>();		
		return new ModelAndView("redirect:login.htm");
	}
	
	protected ModelAndView navegar(String action) throws Exception {
		return new ModelAndView("redirect:" + action);
	}
	
	/**
	 * Arroja una excepcion en caso que un parametro sea igual a vacio.
	 * 
	 * @param param array.
	 * @throws NavigationException
	 */
	protected void validateParameter(String... param) throws NavigationException {
		if (param.length > 0){
			for(int i = 0; i < param.length; i++){
				if (param[i] != null && param[i].isEmpty()) {
					throw new NavigationException("parametro no enviado");
				}
			}
		}
	}
	
	protected PersonaWs obtenerPersonaWs(String codUsuario) throws Exception {
		WsLogin wsLogin = new WsLogin();
		Usuario persona = wsLogin.DatosUsuarioEntByLogin(wsUsuario, wsPass, codUsuario, wsUrl);
		
		PersonaWs personaWs = null;
		if (persona != null) {
			personaWs = new PersonaWs();
			personaWs.setTipoDoc(persona.getPers_tido());
			personaWs.setNumDoc(persona.getPers_dnix());
			personaWs.setPaterno(persona.getPers_appa());
			personaWs.setMaterno(persona.getPers_apma());
			personaWs.setNombres(persona.getPers_nomb());
			personaWs.setNombreLargo(persona.getPers_nomb_largo());
			personaWs.setEmail(persona.getPers_emai());
		}

		return personaWs;
	}

	/*
	protected void enviarNotificacion(String idSolicitud, Constantes.TI_NOTIFICACION tipo) throws Exception {
		NotificacionWrapper wrapper = new NotificacionWrapper(wsUrl, wsUsuario, wsPass, correo_ws);

		NotificacionEntity notificacion = new NotificacionEntity();
		notificacion.setNotificacion(tipo.getCodvalor());
		wrapper.setNotificacion(notificacion);
		wrapper.setLink(linkRenipress);

		if (Constantes.TI_NOTIFICACION.SOLICITUD_CUENTA_PENDIENTE.getCodvalor().equals(tipo.getCodvalor())
				|| Constantes.TI_NOTIFICACION.SOLICITUD_CUENTA_APROBADA.getCodvalor().equals(tipo.getCodvalor())
				|| Constantes.TI_NOTIFICACION.SOLICITUD_CUENTA_RECHAZADA.getCodvalor().equals(tipo.getCodvalor())) {
			PersonaEntity personaEntity = new PersonaEntity();
			personaEntity.setIdpersona(JS.toLong(idSolicitud));

			wrapper.setPersona(personaEntity);
		} else if (Constantes.TI_NOTIFICACION.TICKET_REGISTRADO_USUARIO.getCodvalor().equals(tipo.getCodvalor())
				|| Constantes.TI_NOTIFICACION.TICKET_REGISTRADO_ADMIN.getCodvalor().equals(tipo.getCodvalor())
				|| Constantes.TI_NOTIFICACION.TICKET_ATENDIDO.getCodvalor().equals(tipo.getCodvalor())) {
			TicketEntity ticketEntity = new TicketEntity();
			ticketEntity.setIdticket(JS.toLong(idSolicitud));

			wrapper.setTicket(ticketEntity);
		} else {
			SolicitudEntity solicitudEntity = new SolicitudEntity();
			solicitudEntity.setIdsolicitud(JS.toLong(idSolicitud));

			wrapper.setSolicitud(solicitudEntity);
		}

		notificacionService.enviarCorreo(wrapper);
	}
	*/
	/*
	protected void enviarNotificacion(String idSolicitud, String estado) throws Exception {
		TI_NOTIFICACION tipo = null;
		if (estado == null || "-1".equalsIgnoreCase(estado)) {
			log.error("No se enviara el correo automatico.");
		} else {
			if (JS._numero(estado) && JS.toLong(estado) > 0) {
				if (Constantes.ESTADOS.SOLICITUD_INCRIPCION_ADMITIDA.getEstado().equals(JS.toLong(estado))) {
					tipo = TI_NOTIFICACION.SOLICITUD_ADMITIDA;
				} else if (Constantes.ESTADOS.SOLICITUD_INCRIPCION_OBSERVADA_INADMISIBILIDAD.getEstado().equals(JS.toLong(estado))) {
					tipo = TI_NOTIFICACION.SOLICITUD_OBSERVADA;
				} else if (Constantes.ESTADOS.SOLICITUD_INCRIPCION_NO_ADMITIDAD.getEstado().equals(JS.toLong(estado))) {
					tipo = TI_NOTIFICACION.SOLICITUD_NO_ADMITIDA;
				} else if (Constantes.ESTADOS.SOLICITUD_INSCRIPCION_OBSERVADA.getEstado().equals(JS.toLong(estado))) {
					tipo = TI_NOTIFICACION.SOLICITUD_OBSERVADA_PROCEDENCIA;
				} else if (Constantes.ESTADOS.SOLICITUD_INSCRIPCION_RECHAZA.getEstado().equals(JS.toLong(estado))) {
					tipo = TI_NOTIFICACION.SOLICITUD_RECHAZADA;
				} else if (Constantes.ESTADOS.PENDIENTE_PRESENTACION_SOLICITUD_CATEGORIZACION.getEstado().equals(JS.toLong(estado))) {
					tipo = TI_NOTIFICACION.SOLICITUD_CATEG_APROBADA;
				} else if (Constantes.ESTADOS.CATEGORIZACION_OBSERVADA.getEstado().equals(JS.toLong(estado))) {
					tipo = TI_NOTIFICACION.SOLICITUD_CATEG_OBSERVADA;
				} else if (Constantes.ESTADOS.CATEGORIZACION_ADMITIDA.getEstado().equals(JS.toLong(estado))) {
					tipo = TI_NOTIFICACION.SOLICITUD_CATEG_ADMITIDA;
				} else if (Constantes.ESTADOS.SOLICITUD_CAT_RECHAZADA.getEstado().equals(JS.toLong(estado))) {
					tipo = TI_NOTIFICACION.SOLICITUD_CATEG_RECHAZADA;
				} else if (Constantes.ESTADOS.USUARIO_AUTORIZADO.getEstado().equals(JS.toLong(estado))) {
					tipo = TI_NOTIFICACION.SOLICITUD_ACTUALIZACION_DATOS_AUTORIZAR_ACCESO;
				} else if (Constantes.ESTADOS.USUARIO_RECHAZADO_SOLICITUD_RECHAZADA.getEstado().equals(JS.toLong(estado))) {
					tipo = TI_NOTIFICACION.SOLICITUD_ACTUALIZACION_DATOS_RECHAZAR_ACCESO;
				} else if (Constantes.ESTADOS.SOLICITUD_DE_RETIRO_OBSERVADA.getEstado().equals(JS.toLong(estado))) {
					tipo = TI_NOTIFICACION.SOLICITUD_RETIRO_OBSERVADA;
				} else if (Constantes.ESTADOS.ATENDIDO_IMPROCEDENTE.getEstado().equals(JS.toLong(estado))) {
					tipo = TI_NOTIFICACION.SOLICITUD_RETIRO_ATENDIDO_IMPROCEDENTE;
				} else if (Constantes.ESTADOS.ATENDIDO_PROCEDENTE.getEstado().equals(JS.toLong(estado))) {
					tipo = TI_NOTIFICACION.SOLICITUD_RETIRO_ATENDIDO_PROCEDENTE;
				} else if (Constantes.ESTADOS.SOLICITUD_RECHAZADA.getEstado().equals(JS.toLong(estado))) {
					tipo = TI_NOTIFICACION.SOLICITUD_RETIRO_RECHAZADA;
				}
                                				
				if (tipo != null) {
					enviarNotificacion(idSolicitud, tipo);
				}
			}
		}
	}
	/*
	protected void enviarMensaje(HttpServletRequest request, TicketEntity ticket) throws Exception {
		CredencialEntity usuarioSession = getUsuarioSession(request);

		if (ADMINISTRADOR_REGIONAL.equals(JS.toLong(usuarioSession.getIdPerfil()))) {
			enviarNotificacion(ticket.getIdticket().toString(), Constantes.TI_NOTIFICACION.TICKET_REGISTRADO_ADMIN);
		} else if (USUARIO_IPRESS.equals(JS.toLong(usuarioSession.getIdPerfil()))
				|| USUARIO_PUBLICO.equals(JS.toLong(usuarioSession.getIdPerfil()))) {
			enviarNotificacion(ticket.getIdticket().toString(), Constantes.TI_NOTIFICACION.TICKET_REGISTRADO_USUARIO);
		}
	}
	*/
	
	protected void generarNombreFile(Map<String, Object> result, String fieldName, String fileName) throws Exception {

		// nombre del archivo, puede ser vacio si no subio nada
		String fileNameOriginal = new String(fileName.getBytes(),"UTF-8");

		if (fileNameOriginal.indexOf(File.separator) > -1) {
			String[] vAux = null;
			try {
				vAux = fileNameOriginal.split(File.separator);
			} catch (Exception e) {
				vAux = fileNameOriginal.split(File.separator
						+ File.separator);
			}

			fileNameOriginal = vAux[vAux.length - 1];
		}

		if (StringUtils.isNotBlank(fileNameOriginal)) {
			String ext = FilenameUtils.getExtension(fileNameOriginal);
			String fileNameGenerado = Alea.newNumerosID(fieldName + "-");

			if (StringUtils.isNotBlank(ext)) {
				fileNameGenerado = fileNameGenerado + "." + ext;
			}

			result.put(fieldName + "_fileNameORI", fileNameOriginal);
			result.put(fieldName + "_fileNameGEN", fileNameGenerado);				
			result.put(fieldName, result.get(fieldName + "_pathFileGEN"));			
		}
	}
	
	public ModelAndView importarDatos(HttpServletRequest request, HttpServletResponse response) throws Exception {

		DataJsonBean dataJSON = new DataJsonBean();
		HashMap<String, Object> model = new HashMap<String, Object>();

		String data = StringUtils.trimToEmpty(request.getParameter("dataJson"));
		
		try 
		{
			if(WebUtils.getSessionAttribute(request, Constantes.SESSION_DATA_JSON) != null){
            	data = WebUtils.getSessionAttribute(request, Constantes.SESSION_DATA_JSON) + data;
            }
            
			WebUtils.setSessionAttribute(request, Constantes.SESSION_DATA_JSON, data);

			dataJSON.setRespuesta("ok", null, model);

		} catch (Exception sos) {
			String msgError = handleMsgError(sos);
			log.error(msgError);
			return handleErrorModelAndView(model, msgError);
		}

		return handleJSONResponse(dataJSON, response);
	}
	
	@SuppressWarnings("unchecked")
	protected void validarUrl(HttpServletRequest request) throws UrlException {
		boolean sw = false;
		String vurl = request.getRequestURI();
		
		if (vurl != null){
			vurl = vurl.substring(1, vurl.length() );
		}
		
		vurl = (vurl.split("/").length == 2 ? vurl.split("/")[1] : vurl);
		
		if (request.getQueryString() != null){
			vurl += "?" + request.getQueryString();
		}
		
		List<OpcionesxPerfil> listaPerfiles = new ArrayList<OpcionesxPerfil>();
				
		try{
			CredencialEntity credencialEntity = this.getUsuarioSession(request);
			listaPerfiles = (List<OpcionesxPerfil>)credencialEntity.getListaOpciones();
			
			for(OpcionesxPerfil opcionesPorPerfil : listaPerfiles){
				if (opcionesPorPerfil.getUrl() == null) continue;
				for(String url : opcionesPorPerfil.getUrl()){
					if (url.trim().toLowerCase().equalsIgnoreCase(vurl)){
						sw = true;
						break;
					}
				}
				if (sw) break;
			}
			
			if (!sw){
				throw new UrlException("Error: No tiene acceso a la url ingresada");
			}
			
		}catch(Exception e){
			throw new UrlException("Error: No tiene acceso a la url ingresada");
		}
		
	}	
}

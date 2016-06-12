package pe.gob.susalud.renipress.comun.util;

public class Constantes {

	public static final String CATEGORIZADOR_FORMCERTIFICACION_REGLA_CERTIFICADO_VIGENTE = "No puedes agregar un certificado no vigente";
	
	public static final String COMBO_VACIO = "-1";
	public static final String COMBO_VACIO_CATEGORIA = "(Seleccione)";
	
	public static final String FIELD_NOEMPTY = "Campo obligatorio";
	public static final String NOT_FORMAT_DATE = "Formato incorrecto de Fecha";
	public static final String NOT_FORMAT_EMAIL = "Formato incorrecto de Correo Electronico";
	public static final String NOT_FORMAT_NUMBER = "Formato incorrecto";
	
	public static final String REGISTRO_DESACTIVO = "2";	
	public static final String REGISTRO_ACTIVO = "1";
	public static final String USUARIO_SESSION_NAME = "usuarioSesion";
	
	public static final String INFORMACION_NULA = "[No hay información]"; // rordonez 11/08/2015
	
	public static final Long ESTADO_DESACTIVO = 2L;
	public static final Long ESTADO_ACTIVO = 1L;
	
	public static final String SI_VALOR = "1";
	public static final String NO_VALOR = "0";	
	public static final String SI = "Si";
	public static final String NO = "No";
	public static final Integer PROCESO_CATEGORIZACION = 2;
	public static final Integer PROCESO_INSCRIPCION = 1;
	
	public static final String DOCUMENTO_ACTA = "A";
	public static final String DOCUMENTO_INFORME = "I";
	
	public static final String DESCRIPCION_CARGO_USUARIO = "DESCRIPCION_CARGO_USUARIO";
	public static final String TIPO_USUARIO_1 = "1";
	public static final String TIPO_USUARIO_2 = "2";
	
	public static final String SESSION_DATA_JSON ="session-data-json";

	public static final String OFF = "off";
	public static final String ON = "on";
	
	public static enum FICHA_REQUISITO{
		UPSS_ACTIVO(new Long(1),"INCLUIR"),
		UPSS_INACTIVO(new Long(0),"NO INCLUIR"),
		UPSS_CONF_CONFORME(new Long(1),"CONFORME"),
		UPSS_CONF_NO_CONFORME(new Long(2),"NO CONFORME"),
		UPSS_CONF_NO_APLICABLE(new Long(3),"NO APLICABLE"),
		UPSS_CONF_NO_DECLARADO(new Long(4),"NO DECLARADO");
		
		private Long id;
		private String valor;
		
		private FICHA_REQUISITO(Long id, String valor){
			this.id = id;
			this.valor = valor;
		}
		
		public void setId(Long id){
			this.id = id;
		}
		public Long getId(){
			return this.id;
		}
		
		public void setValor(String valor){
			this.valor = valor;
		}
		public String getValor(){
			return this.valor;
		}
	}
	
	public static class ES_TICKET{
		public static final String PENDIENTE = "PENDIENTE";
		public static final String ATENDIDO = "ATENDIDO";
	}
	
	public static class TIPO_CONSULTA_TICKET{
		public static final String ANULADO = "ANULADO";
		public static final String CONSULTA_DE_FORMATO = "CONSULTA DE FORMATO";
		public static final String ERROR_EN_EL_SISTEMA = "ERROR EN EL SISTEMA";
		public static final String CONSULTA_DE_INSCRIPCION = "CONSULTA DE INSCRIPCIÓN";
	}
	
	public static class COMBO{
		public static final String COMBO_ALL = "ALL";
		public static final String COMBO_SEL = "SEL";
	}

	public static enum TI_CARGO{
		COORDINADOR(new Long(1)),
		ESPECIALISTA(new Long(2));
				
		public Long id;
		
		TI_CARGO(Long id){
			this.id = id;
		}
		
		public Long getId(){
			return this.id;
		}
	}
	
	public static enum ESTABLECIMIENTOS{
		SMA(new Long(3));
		
		public Long tipo;
		
		ESTABLECIMIENTOS(Long tipo){
			this.tipo = tipo;
		}
		
		public Long getTipo(){
			return this.tipo;
		}
	}
	
	public static enum NOTIFICACION{
		PRESENTADA(new Long(1), "Solicitud presentada", ""),
		ADMITIDA(new Long(2), "Solicitud admitida", ""),
		OBSERVADA(new Long(3), "Solicitud observada", "");
		
		public Long tipo_notificacion;
		public String notificacion;
		public String ti_notificacion;
		
		NOTIFICACION(Long tipo_notificacion, String notificacion, String ti_notificacion){
			this.tipo_notificacion = tipo_notificacion;
			this.notificacion = notificacion;		
			this.ti_notificacion = ti_notificacion;
		}
		
		public Long getTipoNotificacion(){
			return this.tipo_notificacion;
		}
		
		public String getNotificacion(){
			return this.notificacion;
		}
	}
	
	public static enum CATEGORIAS{
		
		SIN_CATEGORIA(new Long(1));
		
		private final Long categoria;
		
		CATEGORIAS(Long categoria){
			this.categoria = categoria;
		}
		
		public Long getCategoria(){ return categoria; }
		
	}
	
	public static enum TIPO_CERTIFICACION{
		REGISTRADOR(new Long(1)),
		CATEGORIZADOR_GENERAL(new Long(2)),
		CATEGORIZADOR_ESPECIALIZADO(new Long(3));
		
		private final Long tipo_certificacion;
		
		TIPO_CERTIFICACION(Long tipo_certificacion){
			this.tipo_certificacion = tipo_certificacion;
		}
		
		public Long getEstado(){ return tipo_certificacion; }
	}
	
	public static enum ESTADOS{
		ACTIVO(new Long(1)),
		DESACTIVO(new Long(2)),
		PENDIENTE_REGISTRO(new Long(3)),
		SOLICITUD_INCRIPCION_PRESENTADA(new Long(4)),
		SOLICITUD_INCRIPCION_ADMITIDA(new Long(5)),		
		SOLICITUD_INCRIPCION_OBSERVADA_INADMISIBILIDAD(new Long(6)),
		SOLICITUD_INCRIPCION_NO_ADMITIDAD(new Long(7)),
		SOLICITUD_INSCRIPCION_OBSERVADA(new Long(8)),
		SOLICITUD_INSCRIPCION_RECHAZA(new Long(9)),
		PENDIENTE_PRESENTACION_SOLICITUD_CATEGORIZACION(new Long(10)),
		CATEGORIZACION_OBSERVADA(new Long(13)),
		CATEGORIZACION_ADMITIDA(new Long(14)),
		SOLICITUD_CAT_RECHAZADA(15L),
		VISITA_PROGRAMADA(new Long(16)),
		VISITA_REALIZADA_OBS(new Long(17)),
		VISITA_REALIZADA_CONFORME(new Long(18)),
		VISITA_OBS_AMPLIACION_PLAZO(new Long(19)),
		VISITA_OBS_AMPLIACION_PLAZO_APROBADA(new Long(20)), 
		VISITA_OBS_AMPLIACION_PLAZO_RECHAZADA(new Long(21)),
		SEGUNDA_VISITA_PROGRAMADA(new Long(22)),
		CATEGORIA_PROPUESTA(new Long(23)),
		OPINION_PREV_SOLICITADA(new Long(25)),
		CATEGORIA_ASIGNADA(new Long(30)),
		CATEGORIA_RECHAZADA(new Long(32)),
		CERTIFICADO_EMITIDO(new Long(37)),
		SOLICITUD_USUARIO_APROBADA(new Long(38)),
		SOLICITUD_USUARIO_PENDIENTE(new Long(39)),
		SOLICITUD_USUARIO_RECHAZADA(new Long(40)),
		SOL_REPORTE_REGISTRADA(new Long(43)),
		SOL_REPORTE_SOLICITADA(new Long(44)),
		SOL_REPORTE_ATENDIDA(new Long(45)),
		PENDIENTE_SUBSANAR_OBSERVACION(new Long(46)),
		OBSERVACION_ANULADA(new Long(48)),
		PENDIENTE_VISITA(new Long(49)),
		OBSERVADO_VISITA(new Long(50)),
		CONFORME_VISITA(new Long(51)),		
		VISITA_ANULADA(new Long(52)),
		CADUCO_INACCION(new Long(53)),
		CADUCO_X_ABANDONO(new Long(54)),
		RECHAZADO_x_ABANDONO(new Long(55)),
		SOLICITUD_ACEPTADA_SMA(new Long(56)),
		RESOLUCION_REGISTRADA_SMA(new Long(57)),
		CARGO_CATEGORIA_RECHAZADA_REGISTRADA(new Long(58)),
                //Agregado por dlarico 18/01/2016 "Para los proceos de Actualizacion de datos y Retiro de Ipress"
                PENDIENTE_DE_AUTORIZACION(new Long(59)),
                PENDIENTE_DE_ENVIO_DE_SOLICITUD(new Long(60)),
                SOLICITUD_DE_ACTUALIZACION_DE_DATOS_PRESENTADA(new Long(61)),
                USUARIO_AUTORIZADO(new Long(62)),
                USUARIO_RECHAZADO_SOLICITUD_RECHAZADA(new Long(63)),
                SOLICITUD_DE_ACTUALIZACION_DE_DATOS_OBSERVADA(new Long(64)),
                PENDIENTE_DE_SOLICITUD_DE_CATEGORIZACION(new Long(65)),
                ACTUALIZAR_RESOLUCION_DE_CATEGORIZACION(new Long(66)),
                SOLICITUD_DE_ACTUALIZACION_DE_DATOS_APROBADA(new Long(67)),
                SOLICITUD_DE_ACTUALIZACION_DE_DATOS_RECHAZADA(new Long(68)),
                                
                PENDIENTE_ENVIO_DE_SOLICITUD(new Long(69)),
                SOLICITUD_DE_RETIRO_PRESENTADA(new Long(70)),
                SOLICITUD_DE_RETIRO_OBSERVADA(new Long(71)),
                ATENDIDO_IMPROCEDENTE(new Long(72)),
                ATENDIDO_PROCEDENTE(new Long(73)),
                SOLICITUD_RECHAZADA(new Long(74))
		;
		
		private final Long estado;
		
		ESTADOS(Long estado){
			this.estado = estado;
		}
		
		public Long getEstado(){ return estado; }		
	}
	
	public static enum TAREA
	{
		REVISAR_DOCUMENTACION(new Long(3)),
		SUBSA_EVAL_DOCUM(new Long(6)), 
		LEVANTAR_OBS(new Long(9)),
		EVALUAR_OBS_LEVANTA(new Long(10)),
		ASIGNAR_EQUIPO_OPERATIVO(new Long(11)),
		REALIZAR_VISITA(new Long(12)),		
		REVISAR_SOLICITUD_AMPLIACION(new Long(14)),
		SUBSANAR_OBSERVACIONES(new Long(13)),
		EVALUAR_RESULTADO_VISITA(new Long(15)),
		VISITA_SUBSANACION(new Long(16)),
		EVALUAR_CATEGORIZACION(new Long(17)),
		SOLICITAR_OPINION_PREVIA(new Long(18)),
		SELEC_CAT_ESP(new Long(19)),
		EMITIR_INFORME_SUSTENTATORIO(new Long(21)),
		EMITIR_OPINION_PREVIA(new Long(22)),
		EMITIR_RESOLUCION(new Long(23)),
		REG_RESOLUCION_CAT(new Long(24)),
		REG_FECHA_RECEPCION(new Long(26)),
		RECHAZAR_CATEGORIZACION(new Long(25)),
		SOLICITAR_SEGUNDA_INSTANCIA(new Long(27)),
		REGISTRAR_ACTO_RESOLUTIVO(new Long(28)),
		SOLICITAR_CERTIFICADO(new Long(29)),
		EMITIR_CERTIFICADO(new Long(30)),
		REG_RESOLUCION_SMA(new Long(34)),
                //Agregado por dlarico 18/01/2016 "Para los proceos de Actualizacion de datos y Retiro de Ipress"
                REGISTRAR_SOLICITUD_WEB_DE_ACTUALIZACION(new Long(35)),
                EENVIAR_SOLICITUD_WEB_DE_ACTUALIZACION(new Long(36)),
                EVALUAR_AUTORIZACION_DE_ACCESO_PARA_ACTUALIZAR_DATOS(new Long(37)),
                EVALUAR_SOLICITUDES_DE_ACTUALIZACION(new Long(38)),
                LEVANTAR_OBSERVACIONES(new Long(39)),
                EVALUAR_OBSERBACIONES_LEVANTADAS(new Long(40)),
                REGISTRAR_SOLICITUD_WEB_DE_RETIRO(new Long(41)),
                ENVIAR_SOLICITUD_WEB_DE_RETIRO(new Long(42)),
                EVALUAR_SOLICITUD_DE_RETIRO(new Long(43)),
                SUBSANAR_OBSERVACIONES_DE_RETIRO(new Long(44)),
                EVALUAR_OBSERVACIONES_DE_RETIRO_LEVANTADAS(new Long(45))
                ;
		
		private final Long tarea;
		
		TAREA(Long tarea)
		{
			this.tarea = tarea;
		}
		
		public Long getTarea(){ return tarea; }		
	}

	public static enum VISITA {
		PRIMERA_VISITA(new Long(1), "Primera Visita"),
		SEGUNDA_VISITA(new Long(2), "Segunda Visita");		
		
	    private final Long id; //Codigo del proceso
	    private final String descripcion; // Codigo de la tabla de tablas
	    
	    VISITA (Long id, String descripcion) { 
	        this.id = id;
	        this.descripcion = descripcion;
	    } 		    
	    public Long getId() { return id; }
	    public String getDescripcion() { return descripcion; }
	}
	
	public static enum PROCESOS {
		INSCRIPCION(new Long(1), "ABRE-INS", "INSCRIPCIÓN"),
		CATEGORIZACION(new Long(2), "ABRE-CAT", "CATEGORIZACIÓN"),
		RETIRO(new Long(3), "ABRE-RET", "RETIRO"),
		ACTUALIZACION(new Long(4), "ABRE-ACT", "ACTUALIZACIÓN"),
		SIN_PROCESO(new Long(0), "ABRE-SPR", "SIN PROCESO");
		
	    private final Long proceso; //Codigo del proceso
	    private final String codValor; // Codigo de la tabla de tablas
	    private final String descripcion;
	    
	    PROCESOS (Long proceso, String codValor, String descripcion) { 
	        this.proceso = proceso;
	        this.codValor = codValor;
	        this.descripcion = descripcion;
	    } 		    
	    public Long getProceso() { return proceso; }
	    public String getCodValor() { return codValor; }
	    public String getDescripcion() { return descripcion; }
	}
	
	public static enum TI_VISITA{
		TI_VISITA_PRIMER( "ti_evaluacion_sol_visita" , "Primera Visita de Inscripción" ),
		TI_OBSERVACION_PRIMER( "ti_evaluacion_sol_observacion" , "Observación de Visita de Inscripción" ),
		TI_RECHAZO_INSCRIPCION("ti_rechazo_inscripcion","Motivo de Rechazo de Inscripción"),
		TI_OBSERVACION_CATEGORIZACION( "ti_admitir_cat_sol_obs", "Observación de Admisibilidad de Categorización" ),
		TI_RECHAZO_APLIPLAZO( "ti_rechazo_ampliplazo", "Rechazo de Ampliazion de Plazo" ),		
		TI_VISITA_CAT_PRIMER( "ti_evaluacion_sol_cat_primer" , "Primera Visita de Categorización" ),
		TI_VISITA_CAT_SEGUNDA( "ti_evaluacion_sol_cat_segunda" , "Segunda Visita de Categorización" ),
		TI_OBSERVACION_VISITA_CATEGORIZACION( "ti_visita_categorizacion", "Observación de Visita de Categorización" ),	
		TI_EQUIPO_PRIMERA_VISITA( "ti_equipo_visita_primera", "EQUIPO OPERATIVO -  PRIMERA VISITA DE CATEGORIZACIÓN" ),
		TI_EQUIPO_SEGUNDA_VISITA( "ti_equipo_visita_segunda", "EQUIPO OPERATIVO -  SEGUNDA VISITA DE CATEGORIZACIÓN" ),
		TI_EQUIPO_PRIMERA_VISITA_RESULTADO( "ti_equipo_visita_primera_resultado", "EQUIPO OPERATIVO -  PRIMERA VISITA DE CATEGORIZACIÓN RESULTADO" ),
		TI_EQUIPO_SEGUNDA_VISITA_RESULTADO( "ti_equipo_visita_segunda_resultado", "EQUIPO OPERATIVO -  SEGUNDA VISITA DE CATEGORIZACIÓN RESULTADO" ),
		TI_VISITA_CAT_ESPECIALIZADO( "ti_visita_categorizador_esp", "VISITA DEL CATEGORIZADOR ESPECIALIZADO" ),
		TI_ALERTA("ti_alerta", "ALERTA"),
		TI_TICKET("ti_ticket", "TICKET"),
		TI_DATO_BOOLEAN("ti_dato_boolean", "BOOLEAN"),
		TI_DATO_CHAR("ti_dato_char", "CHAR"),
		TI_DATO_DATE("ti_dato_date", "DATE"),
		TI_DATO_INTEGER("ti_dato_integer", "INTEGER"),
		TI_DATO_DATETIME("ti_dato_datime", "DATETIME"),
		TI_DATO_DOUBLE("ti_dato_double", "DOUBLE"),
		TI_DATO_NUMERIC("ti_dato_numeric", "NUMERIC"),
		TI_ADMISIBILIDAD_INSCRIPCION("ti_admisibilidad_inscripcion", "OBSERVACIÓN DE ADMISIBILIDAD DE INSCRIPCIÓN"),
		TI_NO_ADMITIDO("ti_no_admitido", "RAZÓN DE NO ADMITIDO - INSCRIPCIÓN"),
		TI_DATO_VARCHAR("ti_dato_varchar", "VARCHAR"),
		TI_OBSERVACION_RETIRO("ti_evaluacion_sol_observacion_retiro","Observación de Procedencia de Retiro" ),
                TI_RECHAZO_RETIRO("ti_rechazo_retiro","Motivo de Rechazo de solicitud de retito de IPRESS"),
                TI_RECHAZO_ACCESO_USUARIO("ti_rechazo_acceso_usuario","Motivo de Rechazo de solicitud de Actualizacion de Datos de la IPRESS"),
                TI_OBSERVACION_ACTUALIZACION("ti_evaluacion_sol_actualizacion_datos","Observación de Visita de Actualizacion de datos de la IPRESS" ),
                TI_VISITA_ACTUALIZACION("ti_evaluacion_sol_visita_actualizacion" , "Primera Visita de Actualización de Datos" ),
                TI_RECHAZO_ACTUALIZACION("ti_rechazo_actualizacion","Motivo de Rechazo de Actualización de Datos");
		
		private final String ti_visita;
		private final String descripcion;
		
		TI_VISITA(String ti_visita, String descripcion){
			this.ti_visita = ti_visita;
			this.descripcion = descripcion;
		}
		
		public String getTiVisita(){ return this.ti_visita; }
		public String getDescripcion(){ return this.descripcion; }				
	}
	
	public static enum PARAMETROS {
		RUT_ADJUNT("RUT_ADJUNT"), //Separamos con comas
		RUT_FORMATOS("RUT_FORMATOS"), // rordonez 11/08/2015
		LONG_DNI("LONG_DNI"),
		LONG_CEX("LONG_CEX"),
		LONG_PAS("LONG_PAS"),
	    MAX_ALERT("MAX_ALERT"),
	    FEC_DATE("FEC_DATE"),
	    REPORTE_COND("TEXT_CONDICIONES_REP"),
	    EQUI_REG("EQUI_REG"),
	    EQUI_CG1("EQUI_CG1"),
	    EQUI_CE("EQUI_CE"),
	    SIN_PROC("SIN_PROC"),
	    LINK_RENIPRESS("LINK_RENIPRESS"),
	    RUT_ADJUNT_TEMP("RUT_ADJUNT_TEMP"),	    
	    SMTPUSUARIO("SMTPUSUARIO"),
	    ;  //Cuando terminamos cerramos con ;
	 	      
	    private final String parametro; //Color de la madera
	     
	    PARAMETROS (String parametro) { 
	        this.parametro = parametro;
	    } 
		    
	    public String getParametro() { return parametro; }
	} 
	
	public static class GRILLA{		
		public static final String CURSOR = "p_crCURSOR";
		public static final String COUNT = "p_nCount";
		public static final String DRAW = "draw";			
		public static final String START = "start";			
		public static final String LENGTH = "length";			
		public static final String FIRST = "first";	
		public static final String LAST = "last";		
		public static final String COLUMN_P = "order[0][column]";
		public static final String DIR_P = "order[0][dir]";	
		public static final String COLUMN = "p_nColum";
		public static final String DIR = "p_vDir";
	}
	
	public static class BANDEJA{
		public static final String PERFIL = "p_nPERFIL";
		public static final String AUTORIDADSANITARIA = "p_nAUTORIDADSANI";
	}
	
	public static class MENSAJE {		
		
		public static final String GENERAL_CONFIRM = "Confirmaci&oacute;n";
		public static final String GENERAL_OK = "&#191;Est&aacute; seguro que desea guardar la informaci&oacute;n ingresada?";
		public static final String GENERAL_CANCEL = "&#191;Est&aacute; seguro que desea cancelar la informaci&oacute;n ingresada?";
		public static final String GENERAL_ADD = "&#191;Est&aacute; seguro que desea agregar la informaci&oacute;n ingresada?";		
		
		// MENSAJES GENERAL
		public static final String GENERAL_TIME = "Ingrese una hora v&aacute;lida";
		public static final String GENERAL_FECHA = "Ingrese una fecha v&aacute;lida";
		public static final String GENERAL_ALFA = "El campo s&oacute;lo permite valores alfanum&eacute;ricos";
		public static final String GENERAL_EMAIL = "Ingrese un correo electr&oacute;nico v&aacute;lido";
		public static final String GENERAL_TIPO_DOCUMENTO_ADJUNTO = "ERROR: Al encontrar el tipo de documento adjunto";
		public static final String GENERAL_TIPO_OBSERVACION = "ERROR: Al encontrar el tipo de observacion";
		public static final String GENERAL_ERROR = "Verifique los siguientes errores";
		public static final String GENERAL_DNI_LENGTH = "El n&uacute;mero de DNI debe tener 8 digitos";
		public static final String GENERAL_DNI = "El n&uacute;mero de DNI es invalido";
		/**
		 * MÓDULO DE CATEGORIZADOR / REGISTRADOR
		 */
		// CATEGORIZADOR - CONFIRMACIÓN
		public static final String CATEGORIZADOR_FORMCATEGORIZADOR_GUARDAR_OK = "Se ha registrado la información ingresada";
		public static final String CATEGORIZADOR_FORMCATEGORIZADOR_GUARDAR_OK_EDITAR = "Se ha actualizado la información ingresada";
		// CATEGORIZADOR - DATOS DE LA PERSONA
		public static final String CATEGORIZADOR_FORMCATEGORIZADOR_GUARDAR_ERROR = "ERROR: Al momento de guardar el registro";
		public static final String CATEGORIZADOR_FORMCATEGORIZADOR_CMB_TIPODOCUMENTOIDENTIDAD = "Seleccione un tipo de documento";
		public static final String CATEGORIZADOR_FORMCATEGORIZADOR_TXT_NUMERODOCUMENTOIDENTIDAD = "Ingrese el n&uacute;mero de documento";
		public static final String CATEGORIZADOR_FORMCATEGORIZADOR_CMB_PAISPROCEDENCIA = "Seleccione el pa&iacute;s de procedencia";
		public static final String CATEGORIZADOR_FORMCATEGORIZADOR_DAT_FECHANACIMIENTO = "Seleccione la fecha de nacimiento";
		public static final String CATEGORIZADOR_FORMCATEGORIZADOR_DAT_FECHANACIMIENTO_NOW = "La fecha de nacimiento no debe ser mayor a la fecha de hoy";
		public static final String CATEGORIZADOR_FORMCATEGORIZADOR_CMB_SEXO = "Seleccione el sexo";
		public static final String CATEGORIZADOR_FORMCATEGORIZADOR_TXT_APELLIDOPATERNO = "Ingrese el apellido paterno";
		public static final String CATEGORIZADOR_FORMCATEGORIZADOR_TXT_APELLIDOMATERNO = "Ingrese el apellido materno";
		public static final String CATEGORIZADOR_FORMCATEGORIZADOR_TXT_APELLIDOCASADA = "Ingrese el apellido casada";
		public static final String CATEGORIZADOR_FORMCATEGORIZADOR_TXT_NOMBRES = "Ingrese el/los nombres";
		public static final String CATEGORIZADOR_FORMCATEGORIZADOR_TXT_TELEFONO = "Ingrese el tel&eacute;fono";
		public static final String CATEGORIZADOR_FORMCATEGORIZADOR_EMA_CORREOELECTRONICOPERSONA = "Ingrese el correo electr&oacute;nico";
		public static final String CATEGORIZADOR_FORMCATEGORIZADOR_DATABLE_GRILLA_EDITAR_GRILLA = "No se ha ingresado informaci&oacute;n para alg&uacute;n certificado";		
		// REGLAS POR CADA PROCESO . CATEGORIZADOR		
		public static final String CATEGORIZADOR_FORMCERTIFICACION_REGLA_CERTIFICADO_VIGENTE = "No puede agregar un certificado no vigente";	
		public static final String CATEGORIZADOR_FORMCERTIFICACION_DAT_FECHAEMISIONCERTIFICADOESP_RANGE = "Campo fin de vigencia debe ser posterior o igual al de emisi&oacute;n";
		public static final String CATEGORIZADOR_FORMCERTIFICACION_DAT_FINVIGENCIA_RANGE = "Campo fin de vigencia debe ser posterior o igual al de emisi&oacute;n";		
		// REGLAS POR CADA PROCESO . RENIEC
		public static final String CATEGORIZADOR_FORMCERTIFICACION_REGLA_FECHA_NACIMIENTO = "La fecha de nacimiento no coincide con RENIEC";
		public static final String CATEGORIZADOR_FORMCERTIFICACION_REGLA_SEXO = "El Sexo no coincide con RENIEC";
		public static final String CATEGORIZADOR_FORMCERTIFICACION_REGLA_PERSONA_REGISTRADA = "ME001: La persona ya ha sido registrada";
		public static final String CATEGORIZADOR_FORMCERTIFICACION_REGLA_PERSONA_NO_RENIEC = "Los datos de la persona no est&aacute;n registrados en la RENIEC";
		public static final String CATEGORIZADOR_FORMCERTIFICACION_REGLA_PERSONA_NO_RENIEC_WS = "ERROR: Conexi&oacute;n a la WEB Services de RENIEC";
		public static final String CATEGORIZADOR_FORMCERTIFICACION_REGLA_NO_AGREGAR_CERTIFICADO = "No puede agregar m&aacute;s de un mismo tipo de certificaci&oacute;n";		
		// CATEGORIZADOR - CERTIFICADO - CATEGORIZADOR ESPECIALIZADO
		public static final String CATEGORIZADOR_FORMCERTIFICACION_FIL_COPIADOCUMENTOIDENTIDADESP = "Seleccione la copia del DNI";
		public static final String CATEGORIZADOR_FORMCERTIFICACION_TXT_NUMEROCERTIFICADOEMITIDOSUSALUDESP = "Ingrese el n&uacute;mero del certificado";
		public static final String CATEGORIZADOR_FORMCERTIFICACION_DAT_FECHAEMISIONCERTIFICADOESP = "Seleccione la fecha de emisi&oacute;n del certificado";
		public static final String CATEGORIZADOR_FORMCERTIFICACION_DAT_FECHAVIGENCIAESP = "Seleccione la fecha de fin de vigencia";
		public static final String CATEGORIZADOR_FORMCERTIFICACION_DAT_FECHAVIGENCIAESP_MAY = "La fecha de fin de vigencia debe ser mayor a la de emisi&oacute;n";
		public static final String CATEGORIZADOR_FORMCERTIFICACION_FIL_COPIACERTIFICADOESP = "Seleccione la copia del certificado";
		public static final String CATEGORIZADOR_FORMCERTIFICACION_DAT_FINVIGENCIA_RESOLUCION = "Ingrese una fecha superior a la fecha de resolución";
		
		
		
		// CATEGORIZADOR - CERTIFICADO - REGISTRADOR y CATEGORIZADOR		
		public static final String CATEGORIZADOR_FORMCERTIFICACION_CMB_AUTORIDADSANITARIA = "Seleccione una autoridad sanitaria";
		public static final String CATEGORIZADOR_FORMCERTIFICACION_FIL_COPIARESOLUCIONDESIGNACIONTITULAR = "Seleccione la copia de la resoluci&oacute;n de designaci&oacute;n";
		
		public static final String CATEGORIZADOR_FORMCERTIFICACION_TXT_NUMERORESOLUCION = "Ingrese el n&uacute;mero de resoluci&oacute;n";
		public static final String CATEGORIZADOR_FORMCERTIFICACION_DAT_FECHAEMISIONRESOLUCION = "Ingrese la fecha de resoluci&oacute;n";
		public static final String CATEGORIZADOR_FORMCERTIFICACION_TXT_NUMERODNITITULAR = "Ingrese el n&uacute;mero de DNI del titular";	
		public static final String CATEGORIZADOR_FORMCERTIFICACION_TXT_EMISORRESOLUCION = "Ingrese el nombre del Emisor de la Resoluci&oacute;n";
		public static final String CATEGORIZADOR_FORMCERTIFICACION_FIL_COPIADNITITULAR = "Ingrese el n&uacute;mero del certificado";
		public static final String CATEGORIZADOR_FORMCERTIFICACION_TXT_NUMEROCERTIFICADOEMITITOSUSALUD = "Ingrese el n&uacute;mero del certificado";
		public static final String CATEGORIZADOR_FORMCERTIFICACION_DAT_FECHAEMISIONCERTIFICADO = "Seleccione la fecha de emisi&oacute;n del certificado";
		public static final String CATEGORIZADOR_FORMCERTIFICACION_DAT_FINVIGENCIA = "Seleccione la fecha de fin de vigencia";
		public static final String CATEGORIZADOR_FORMCERTIFICACION_DAT_FINVIGENCIA_MAY = "La fecha de fin de vigencia debe ser mayor a la de emisi&oacute;n";
		public static final String CATEGORIZADOR_FORMCERTIFICACION_FIL_COPIACERTIFICADO = "Seleccione la copia del certificado";
		public static final String CATEGORIZADOR_FORMCERTIFICACION_FIL_COPIACERTIFICADO_EXITS = "N&uacute;mero de certificado emitido por SUSALUD ya existe";
		
		
		/**
		 * MÓDULO CONFIGURACIÓN DE TAREA
		 */
		public static final String TAREA_FORMMENSAJE_EMA_CORREOELECTRONICO = "Ingrese un correo electr&oacute;nico";
		
		public static final String TAREA_FORMMENSAJE_REGLA_CANT_CORREO_ELECTRONICO = "&#191;Est&aacute; seguro que desea cambiar la cantidad de alertas? Se borrar&aacute; toda la informaci&oacute;n antes ingresada";
		
		public static final String TAREA_FORMMENSAJE_CMB_PROCESO = "Seleccione un proceso";
		public static final String TAREA_FORMMENSAJE_CMB_TIPOTAREA = "Seleccione un tipo de tarea";
		public static final String TAREA_FORMMENSAJE_CMB_TAREATUPA = "Seleccione si la tarea es TUPA";
		public static final String TAREA_FORMMENSAJE_CMB_TIPODIAS = "Seleccione el tipo de d&iacute;as";
		public static final String TAREA_FORMMENSAJE_TXT_CANTIDADDIAS = "Ingrese la cantidad de días";
		public static final String TAREA_FORMMENSAJE_TXT_DESCRIPCION = "Ingrese la descripción de la tarea";
		public static final String TAREA_FORMMENSAJE_CMB_AUTORIDADSANITARIA = "Seleccione la Autoridad Sanitaria";
		public static final String TAREA_FORMMENSAJE_CMB_ROLRESPONSABLE= "Seleccione el rol responsable";
		public static final String TAREA_FORMMENSAJE_GRILLA_TAREA_PRECEDENTE= "Seleccione la(s) tarea(s) precedente(s)";
		public static final String TAREA_FORMMENSAJE_GRILLA_ESTADO= "Seleccione el/los estado(s) de la tarea";
		public static final String TAREA_FORMMENSAJE_TXT_MENSAJE = "Ingrese el mensaje a mostrar";
		public static final String TAREA_FORMMENSAJE_TXT_NUMERODIASPREVIOSALERTA = "Ingrese el número de días previos para la alerta";
		public static final String TAREA_FORMMENSAJE_GRILLA_CORREOELECTRONICO = "Ingrese un correo electrónico para agregar a la lista de distribución";
		public static final String TAREA_FORMMENSAJE_TXT_ASUNTO = "Ingrese el asunto del correo electrónico";
		public static final String TAREA_FORMMENSAJE_TXT_MENSAJECORREO = "Ingrese el mensaje del correo electrónico";
		public static final String TAREA_FORMMENSAJE_OK = "Se ha registrado la información ingresada";
		
		public static final String TAREA_FORMMENSAJE_DIAS = "Los d&iacute;s previos para la alerta no debe ser mayor a la cantidad de d&iacute;s";
		
		/**
		 * MÓDULO EVALUACION DE SOLICITUD
		 */
		public static final String SOLICITUD_FORMMENSAJE_OK = "Se ha registrado la información ingresada";
		
		/* VISITA */
		public static final String VISITA_FORM_GUARDAR_ERROR = "ERROR: Al momento de guardar el registro";
		public static final String VISITA_FORM_FECHA_PROGRAMADA = "Ingrese La fecha programada";
		
		public static final String VISITA_FORM_FECHA_INI_WITH = "Ingrese la fecha de inicio de visita";
		public static final String VISITA_FORM_FECHA_FIN_WITH = "Ingrese la fecha de fin de visita";
		public static final String VISITA_FORM_FECHA_RANGE	  = "La fecha de fin de visita debe ser superior o igual a fecha de inicio de visita";
		public static final String OBSERVACION_TXT_OBSERVACION = "Ingrese la observación";
		public static final String OBSERVACION_SEL_ESTADO = "Ingrese el estado observación";
		
		/**
		 * LOGIN
		 */
		public static final String CATEGORIZADOR_FORMCATEGORIZADOR_EMA_RE_CORREOELECTRONICOPERSONA = "Los correos ingresados no coinciden";
		public static final String CATEGORIZADOR_FORMCATEGORIZADOR_TIPO_PERFIL = "Seleccione el tipo de perfil";
		public static final String CATEGORIZADOR_FORMCATEGORIZADOR_CMB_PAISPROCEDENCIA_PERU = "Seleccione otro país distinto a Perú";
		
	}
	
	public static class DEFAULT {
		public static final String SEXO_MASCULINO = "1";
		public static final String SEXO_FEMENINO = "2";
				
		public static final Long ESTADO_ACTIVO = 1L;
		public static final Long ESTADO_DESACTIVO = 2L;
		
		public static final String FLAG_RECHAZADO  = "1";
		
		public static final String FLAGEJE_NUEVO  = "0";
	}
	
	public static class MOD_ADM_ADMIS
	{
		public static final String LISTA_BANDEJA_ADMISIBILIDAD="Lista-Admisibilidad";
		public static final String LISTA_BANDEJA_ADMISIBILIDAD_EDIT="Lista-Admisibilidad-Edit";	
		public static final Long ADMISIBILIDAD = 1L;
	}
	
	public static class TABLA_TABLAS{
		public static final String TXT_PROCESO = "txt_hi_proceso";
	}
	
	public static class TABLAS {
		public static final String TRNITV_CERTIFICACION = "RNITV_CERTIFICACION";
		
		public static final String TRNIT_TIPO_DOCUMENTO = "RNIT_TIPO_DOCUMENTO";                       
		public static final String TRNIT_GENERO = "RNIT_SEXO";                                       
		public static final String TRNIT_TIPO_AUTOR_SANITARIA = "RNIT_TIPO_AUTOR_SANITARIA";           
		public static final String TRNIT_TIPO_DISTRI_CORREO = "RNIT_TIPO_DISTRI_CORREO";               
		public static final String TRNIT_TIPO_TAREA = "RNIT_TIPO_TAREA";                               
		public static final String TRNIT_TIPO_AMBITO = "RNIT_TIPO_AMBITO";                             
		public static final String TRNIT_TIPO_DIAS = "RNIT_TIPO_DIAS";                                 
		public static final String TRNIT_TIPO_COMPETENCIAS = "RNIT_TIPO_COMPETENCIAS";                 
		public static final String TRNIT_TIPO_CONSULTA_TICKET = "RNIT_TIPO_CONSULTA_TICKET";           
		public static final String TRNIT_FORMA_RESPUESTA = "RNIT_FORMA_RESPUESTA";                     
		public static final String TRNIT_TIPO_USUARIO_TICKET = "RNIT_TIPO_USUARIO_TICKET";             
		public static final String TRNIT_TIPO_PERSONA = "RNIT_TIPO_PERSONA";                           
		public static final String TRNIT_TIPO_ESTABLECIMIENTO = "RNIT_TIPO_ESTABLECIMIENTO";           
		public static final String TRNIT_TIPO_CONTRATO   = "RNIT_TIPO_CONTRATO  ";                     
		public static final String TRNIT_TIPO_CERTIFICADO = "RNIT_TIPO_CERTIFICADO";                   
		public static final String TRNIT_EJECUCION_REPORTE = "RNIT_EJECUCION_REPORTE";                 
		public static final String TRNIT_FRECUENCIA_REPORTE = "RNIT_FRECUENCIA_REPORTE";               
		public static final String TRNIT_TIPO_ACTIVIDAD = "RNIT_TIPO_ACTIVIDAD";                       
		public static final String TRNIT_TIPO_RESULTADO_VISITA = "RNIT_TIPO_RESULTADO_VISITA";         
		public static final String TRNIT_TIPO_DATO_REPORTE = "RNIT_TIPO_DATO_REPORTE";                 
		public static final String TRNIT_TIPO_OBSERVACION = "RNIT_TIPO_OBSERVACION";                   
		public static final String TRNIT_CARGO_EQUIPO_OPER = "RNIT_CARGO_EQUIPO_OPER";                 
		public static final String TRNIT_TIPO_VISITA = "RNIT_TIPO_VISITA";                             
		public static final String TRNIT_CONCLUSION_OPINION_PREVIA = "RNIT_CONCLUSION_OPINION_PREVIA"; 
		public static final String TRNIT_NIVEL_COMPLEJIDAD = "RNIT_NIVEL_COMPLEJIDAD";                 
		public static final String TRNIT_NIVEL_ATENCION = "RNIT_NIVEL_ATENCION";                       
		public static final String TRNIT_USUARIO_SOLIC = "RNIT_USUARIO_SOLIC";                         
		public static final String TRNIT_EVALUA_SOLIC_USUARIO = "RNIT_EVALUA_SOLIC_USUARIO";           
		public static final String TRNIT_TIPO_ATENCION = "RNIT_TIPO_ATENCION";                         
		public static final String TRNIT_TIPO_GRUPO_ETARIO  = "RNIT_TIPO_GRUPO_ETARIO ";               
		public static final String TRNIT_RESUL_SOLIC_AMPLIACION = "RNIT_RESUL_SOLIC_AMPLIACION";       
		public static final String TRNIT_SEGUNDA_INSTANCIA = "RNIT_SEGUNDA_INSTANCIA";                 
		public static final String TRNIT_TIPO_ADJUNTO = "RNIT_TIPO_ADJUNTO";                           
		public static final String TRNIT_TIPO_ESTADO = "RNIT_TIPO_ESTADO"; 
		public static final String TRNIT_TIPO_ALERTA = "RNIT_TIPO_ALERTA";
		public static final String TRNIT_TIPO_EQUIPO_OPER = "RNIT_TIPO_EQUIPO_OPER";
		public static final String TRNIT_CARGO_EQUIPO_ESP = "RNIT_CARGO_EQUIPO_ESP";

		public static final String TRNIT_TIPO_GRILLA = "RNIT_TIPO_GRILLA";
		
		public static final String RNITM_NOTIFICACION = "RNITM_NOTIFICACION";
		
		public static final String TRNIT_TIPO_CONDICION = "RNIT_TIPO_CONDICION";
		
		public static final Long RNIT_TIPO_ADJUNTO = 32L;
		public static final Long RNIT_TIPO_GRILLA = 38L;
		public static final Long RNIT_TIPO_OBSERVACION = 20L;
		
		//public static final String RNITV_CERTIFICACION = "RNITM_NOTIFICACION";
		public static final String RNITV_CERTIFICACION = "RNITV_CERTIFICACION";
		public static final Long RNITV_CERTIF_REG_CG = 92L;		
		
		
		public static final String RNITV_SOLICITUD = "RNITV_SOLICITUD";
		//public static final Long RNITV_SOLICITUD_AR = 98L;
		//public static final Long RNITV_SOLICITUD_CAT_ESP = 99L;
		
		public static final String RNITM_DOCUMENTOREQ = "RNITM_DOCUMENTOREQ";
		
		public static final String RNITM_REQUISITO = "RNITM_REQUISITO";
		
		public static final Long RNITV_COMITE_TECNICO = 106L;
		public static final String RNITV_COMITE_TECNICO_S = "RNITV_COMITE_TECNICO";
		
		public static final String RNITV_VISITA_SOLIPRESS = "RNITV_VISITA_SOLIPRESS";
		
		// Consultas en linea
		public static final String TRNITV_TICKET = "RNITV_TICKET";
		
		/*
		public static final String RNITM_UBIGEO = "RNITM_UBIGEO";
		public static final String RNITM_TABLA = "RNITM_TABLA";
		public static final String RNITM_TABLA_TABLAS = "RNITM_TABLA_TABLAS";
		public static final String RNITP_PARAMETRO
		public static final String RNITM_CATALOGO_ERROR
		public static final String RNITL_USUARIO_SESION
		*/
		public static final String RNITV_DOCUMENTO_ADJUNTO = "RNITV_DOCUMENTO_ADJUNTO";
		/*
		public static final String RNITM_PROCESO
		public static final String RNITM_ESTADO
		public static final String RNITM_AMBITO_ESTADO
		public static final String RNITM_PERFIL_ESTADO
		public static final String RNITM_PERFIL_AMBITO
		public static final String RNITM_TAREA
		public static final String RNITV_TAREA_ESTADO
		public static final String RNITM_TAREAS_PRECEDENTES
		public static final String RNITM_ALERTA_MENSAJE
		public static final String RNITM_ALERTA_CORREO
		public static final String RNITM_ALERTA_CORREO_ROL
		public static final String RNITM_DET_DISTR_CORREO
		public static final String RNITM_ODSIS
		public static final String RNITM_CLAS
		public static final String RNITM_RED
		public static final String RNITM_MICRORED
		public static final String RNITM_UNIDAD_EJECUTORA
		public static final String RNITM_INSTITUCION
		public static final String RNITM_AUTOR_SANITARIA
		public static final String RNITM_AUTOR_SANITARIA_UBIGEO
		public static final String RNITM_DOCUMENTOREQ
		public static final String RNITM_UPS
		public static final String RNITM_PROFESION
		public static final String RNITM_COLEGIO_PROF
		public static final String RNITM_ESPECIALIDAD
		public static final String RNITM_COMPETENCIAS
		public static final String RNITM_CLASIF_ESTABL
		public static final String RNITM_NORMA
		public static final String RNITM_CATEGORIA
		public static final String RNITV_REGLA
		public static final String RNITM_MODULO
		public static final String RNITM_UPSS
		public static final String RNITM_UPS_CATEGORIA
		public static final String RNITM_ACTIVIDAD
		public static final String RNITM_REQUISITO
		public static final String RNITV_REQ_COLEGIOPROF
		public static final String RNITV_REQ_ESPECIALIDAD
		public static final String RNITV_REQ_COMPETENCIAS
		public static final String RNITV_RGLACTIVIDAD
		public static final String RNITV_REGLA_MODULO_UPSS
		public static final String RNITV_RGLMODUPSS_REQ
		public static final String RNITM_CLASIF_CATEGORIA
		public static final String RNITV_CATEGORIA_CALCULADA
		public static final String RNITT_RGLACTIVIDAD_OBLIG
		public static final String RNITT_RGLACTIVIDAD_CUMPLE
		public static final String RNITT_RGLMODUPSSREQ
		public static final String RNITT_RGLMODUPSSREQ_CUMPLE
		public static final String RNITM_PAIS
		public static final String RNITM_PERSONA
		public static final String RNITV_CERTIFICACION
		public static final String RNITV_CERTIF_REG_CG
		public static final String RNITV_SOLICITUD_USUARIO
		*/
		public static final String RNITV_SOLICITUD_AR = "RNITV_SOLICITUD_AR";
		public static final String RNITV_SOLICITUD_CAT_ESP = "RNITV_SOLICITUD_CAT_ESP";
		/*
		public static final String RNITV_DIRECCION
		public static final String RNITV_SOLICITUD
		public static final String RNITV_NOTIF_SOLICITUD
		public static final String RNITV_OBSERVACION
		public static final String RNITV_COMITE_TECNICO
		public static final String RNITV_COMITE_TECN_INTEG
		public static final String RNITV_EQUIPO_OPERATIVO
		public static final String RNITV_EQUIPO_OPER_INTEG
		public static final String RNITV_OPINIONPREVIA
		public static final String RNITV_EQUIPO_CATEGESP
		public static final String RNITV_SOLIC_IPRESS
		public static final String RNITV_CLASIF_SOLIC_IPRESS
		public static final String RNITV_UPS_SOLICIPRESS
		public static final String RNITV_UPSS_SOLICIPRESS		
		public static final String RNITV_VISITA_SOLIPRESS = "RNITV_VISITA_SOLIPRESS";	
		*/	
		public static final String RNITV_RESULACT_SOLIPRESS = "RNITV_RESULACT_SOLIPRESS";
		public static final String RNITV_RESULTADO_SOLIPRESS = "RNITV_RESULTADO_SOLIPRESS";
		/*
		public static final String RNITV_PERSONAL_SOLIC_IPRESS
		public static final String RNITV_PERS_SOLIPRESS_UPSS
		public static final String RNITV_PERS_SOLIPRESS_CP
		public static final String RNITV_PERS_SOLIPRESS_ESP
		public static final String RNITV_PERS_SOLIPRESS_COMP
		public static final String RNITM_IPRESS
		public static final String RNITM_CLASIF_IPRESS
		public static final String RNITM_IPRESS_ESPECIALIDAD
		public static final String RNITM_IPRESS_COORD
		public static final String RNITM_UPS_IPRESS
		public static final String RNITM_UPSS_IPRESS
		public static final String RNITM_ACTIVIDAD_IPRESS
		public static final String RNITM_REQUISITO_IPRESS
		public static final String RNITM_PERSONAL_IPRESS
		public static final String RNITM_PERS_IPRESS_UPSS
		public static final String RNITM_PERS_IPRESS_CP
		public static final String RNITM_PERS_IPRESS_ESP
		public static final String RNITM_PERS_IPRESS_COMP
		public static final String RNITL_ERROR
		*/
	}
	
	public static class TABLA_ESTADO{
		public static final String ES_ACCESO = "ES_ACCESO";
		public static final String ES_SOLREPORTE = "ES_SOLREPORTE";
		public static final String ES_OBSERVACION = "ES_OBSERVACION";
		public static final String ES_VISITA = "ES_VISITA";
		public static final String ES_TICKET = "ES_TICKET";	
	}
	
	public static class WS_DAT{
		public static final String WS_RENIEC_URL = "http://192.168.10.237:8080/wb-dni-afiliados/server/consulta/getDatos";
		public static final String WS_RENIEC_IP = "111.111.111.111";
		public static final String WS_RENIEC_MAC = "ac:ac:ac:ac:ac";
		
		public static final String WS_RENIEC_SEXO_M = "M";
		public static final String WS_RENIEC_SEXO_F = "F";
                //Agregado por dlarico, para consulta ws consulta ruc
                public static final String WS_SUNAT_URL = "http://192.168.10.237:8080/wsConsultaRuc/consultaRuc/datosPrincipales/";
	}
	
	public static class MOD_REG_TAREA{
		public static final String LISTA_TAREA_CORREO = "datable-grilla-correoElectronico-";
		public static final String LISTA_TAREA_ROLES = "datable-grilla-roles-";		
		public static final String LISTA_TAREA_ESTADO = "datable-grilla-estado";
		public static final String LISTA_TAREA_PRECEDENTE = "datable-grilla-tarea-precedente";
		public static final String YES_LIST = "yes_list";
	}
	
	public static class MOD_REG_CAT_CATEGORIA
	{
		public static final String BUSCAR_TABLA_FILTRO_TIPO_NIVEL_COMPLEJIDAD = "RNIT_NIVEL_COMPLEJIDAD";
		public static final String BUSCAR_CAMPO_FILTRO_TIPO_NIVEL_COMPLEJIDAD = "TI_NIVELCOMPLEJIDAD";
		public static final String BUSCAR_TABLA_FILTRO_TIPO_NIVEL_ATENCION = "RNIT_NIVEL_ATENCION";
		public static final String BUSCAR_CAMPO_FILTRO_TIPO_NIVEL_ATENCION = "TI_NIVELATENCION";
	}
	
	public static class MOD_REG_CAT_UPSS
	{
		public static final String BUSCAR_TABLA_FILTRO_TIPO_ACTIVIDAD = "RNIT_TIPO_ACTIVIDAD";
		public static final String BUSCAR_CAMPO_FILTRO_TIPO_ACTIVIDAD = "TI_TIPOACTIVIDAD";
		public static final String FLAG_SMA="0";
	}
	
	public static class MOD_REG_CAT_DOCREQ
	{
		public static final String ESTADO_LABEL_ACTIVADO = "ACTIVADO";
		public static final String ESTADO_LABEL_DESACTIVADO = "DESACTIVADO";
	}
	
	public static class MOD_REG_CAT_REGLAS
	{
		public static final String SESION_LISTA_UPSS_ACTIVADOS = "mod-reg-cat-reglas-upss-activados";
		public static final String SESION_LISTA_UPSS_SELECCIONADOS = "mod-reg-cat-reglas-upss-seleccionados";
		public static final String SESION_LISTA_VARIABLES_MODULO = "mod-reg-cat-reglas-variables-modulo";
		public static final String SESION_LISTA_UPSS_CHECKEADOS = "mod-reg-cat-reglas-upss-checkeados";
		
		public static final String SESION_LISTA_MODULO_TEMPLATE = "mod-reg-cat-reglas-variables-template";
		public static final String REGISTRO_UPSS_OBLIGATORIO = "Debe escoger un Upss como Minimo en el modulo";
		
		public static final String SESION_PARAMETROS_BUSQUEDA_CATEGORIA="mod-reg-cat-busq-categoria";
		public static final String SESION_PARAMETROS_BUSQUEDA_UPSS="mod-reg-cat-busq-upss";
		public static final String SESION_PARAMETROS_BUSQUEDA_REQUISITO="mod-reg-cat-busq-requisito";
		public static final String SESION_PARAMETROS_BUSQUEDA_DOC_REQ_AS="mod-reg-cat-busq-auto-sanit";
		public static final String SESION_PARAMETROS_BUSQUEDA_DOC_OPI_PREV="mod-reg-cat-busq-opinion-prev";
	}
	
	public static class MOD_REG_CAT_REQ
	{		
		public static final String COD_SIN_MODULO = "SR";
		public static final String COD_MODULO = "RR";
		public static final String SESSION_LISTA_ESPECIALIDADES ="modregcatreq-lista-especialidades";
		public static final String SESSION_LISTA_MARCADOS_COLE_PROF ="modregcatreq-lista-colegios-marcados";
		public static final String SESSION_LISTA_MARCADOS_ESPECIALIDAD ="modregcatreq-lista-especialidades-marcados";
		public static final String SESSION_LISTA_MARCADOS_COMPETENCIA ="modregcatreq-lista-competencias-marcados";
		public static final String SESSION_LISTA_MARCADOS_CAPACITACIONES ="modregcatreq-lista-capacitaciones-marcados";
		public static final String SESSION_LISTA_MARCADOS_ENTRENAMIENTO ="modregcatreq-lista-entrenamiento-marcados";
	}
	
	public static class MOD_REG_SOL_USU
	{
		public static final String ENTIDAD_SOLICITUD_USUARIO = "modregsolusu-entidad-solicitud-usuario";
		public static final String SESION_PARAMETROS_BUSQUEDA_SOLICITUD_USUARIO="mod-reg-sol-usuario-busqueda";
	}
	
	public static class MOD_CONSULTA_TRAMITE{
		public static final String LISTA_TAREA_CORREO = "datable-grilla-correoElectronico-";
		public static final String LISTA_TAREA_ROLES = "datable-grilla-roles-";		
		public static final String LISTA_TAREA_ESTADO = "datable-grilla-estado";
		public static final String LISTA_TAREA_PRECEDENTE = "datable-grilla-tarea-precedente";
		public static final String ID_AUT_SANITARIA = "ID_AUT_SANITARIA";
	}
	
	public static class MOD_REG_SOL_EVAL_VISITA{
		public static final String ARCHIVOS_ADJUNTOS = "registro-evaluacion-visita";
	}
	
	public static class MOD_REG_LOGIN{
		public static final String ARCHIVOS_ADJUNTOS = "registro-solicitud-usuario";		
		public static final String ID_USUARIO_IPRESS = "259";
		public static final String ID_ADMINISTRADOR_REGIONAL = "252";
		public static final String ID_CATEGORIZADOR_ESPECIALIZADO = "251";
		public static final String OPCIONES = "opciones_menu";
	}
	
	public static class MOD_REG_EVALUACION_SOLICITUD {
		public static final String ARCHIVOS_ADJUNTOS_COMITE = "adjuntos-comite";
		public static final String LISTA_COMITES = "lista-comites";
		public static final String ARCHIVOS_ADJUNTOS_INFORMES_ANEXOS = "adjuntos-informes-anexos";
		public static final String LISTA_INFORMES_ANEXOS = "lista-informes-anexos";
		public static final String ARCHIVOS_ADJUNTOS_INFORMES = "adjuntos-informes";
		public static final String ARCHIVOS_ADJUNTOS_PROYECTO_RESOLUCION = "adjuntos-proyecto-resolucion";
		public static final String DOCUMENTO_INFORME = "documento-informe";
		public static final String DOCUMENTO_PROYECTO = "documento-proyecto";
                public static final String ARCHIVOS_ADJUNTOS_RESOLUCION_RETIRO= "fil_adjunto_resolucion_retiro";
	}
	
	public static class MOD_REG_COMITE_TECNICO {
		public static final String LISTA_PERSONA_COMITES = "lista-persona-comites";
		public static final String LISTA_COMITES_TECN_INTE = "lista-comites-tecnicos-integ";
		public static final String ARCHIVOS_ADJUNTOS_RESOLUCION = "adjuntos-resolucion";
	}
	
	public static class MOD_AMPLIACION_PLAZO_SUBSANACION {
		public static final String ARCHIVOS_ADJUNTOS = "registro-ampliacion-plazo-subsanacion";
		public static final String ARCHIVOS_ADJUNTOS_EVALUACION = "evaluacion-ampliacion-plazo-subsanacion";
		public static final String ARCHIVOS_ADJUNTOS_SOLICITUD_AMPLIACION_PLAZO = "solicitud-ampliacion-plazo";
		public static final String ARCHIVOS_ADJUNTOS_SEGUNDA_INSTANCIA = "evaluacion-solicitud-segunda-instancia";
		public static final String ARCHIVOS_ADJUNTOS_SEGUNDA_INSTANCIA_RESULTADO = "evaluacion-solicitud-segunda-instancia-resultado";
		public static final String ARCHIVOS_ADJUNTOS_CATEGORIZACION = "bandeja-solicitudes-categorizacion";
	}
	
	public static class MOD_EVALUACION_RESOLUCION{
		public static final String ARCHIVOS_ADJUNTOS = "evaluacion-solicitud-resolucion";
	}

	
	public static class MOD_ADM_CAT{
		public static final String LISTA_ADJUNTOS = "lista-adjuntos";
	}
	
	public static class MOD_REG_SUBSANACION{
		public static final String LISTA_REQUISITO_ADJ = "lista-requisito-adjuntos";
		public static final String LISTA_ACTIVIDAD_ADJ = "lista-actividad-adjuntos";
		public static final String URL = "url-backup";
	}
	
	public static class MOD_REG_CAT {

		public static final String NRO_CORREDOR_GENERADO = "registro-corredores-nro-corredor-generado";
		

		public static final String ARCHIVOS_ADJUNTOS_CATEGORIZADOR = "registro-categorizador-adjuntos";
		public static final String ARCHIVOS_ADJUNTOS_CATEGORIZADOR_EDIT = "registro-categorizador-adjuntos-edit";
		
		// SESSION
		public static final String LISTA_CATEGORIZADOR = "Lista-Categorizador";
		public static final String LISTA_CATEGORIZADOR_EDIT = "Lista-Categorizador-Edit";
		
		public static final String BUSCAR_FILTRO_TIPO_PERSONA_ALL = "ALL";
		public static final String BUSCAR_FILTRO_TIPO_PERSONA_NAT = "NAT";
		public static final String BUSCAR_FILTRO_TIPO_PERSONA_JUR = "JUR";
		
		public static final String BUSCAR_FILTRO_USUREG_ALL = "ALL";
		
		/*TABLAS*/
		public static final String BUSCAR_TABLA_FILTRO_PERSONA = "RNITV_PERSONA";
		public static final String BUSCAR_TABLA_FILTRO_CERTIFICACION = "RNITV_CERTIFICACION";
		public static final String BUSCAR_TABLA_FILTRO_DOCUMENTO_ADJUNTO = "RNITV_DOCUMENTO_ADJUNTO";		
		public static final String BUSCAR_TABLA_FILTRO_TIPO_ACTIVIDAD = "TI_TIPOACTIVIDAD";
		
		/*CAMPOS*/
		public static final String BUSCAR_CAMPO_FILTRO_TIPO_DOC = "TI_TIPODOC";
		public static final String BUSCAR_CAMPO_FILTRO_ESTADO = "ES_ESTADO";
		public static final String BUSCAR_CAMPO_FILTRO_IDSEXO= "TI_IDSEXO";
		public static final String BUSCAR_CAMPO_FILTRO_IDTIPOCERTIFICADO = "CO_IDTIPOCERTIFICADO";
		public static final String BUSCAR_CAMPO_FILTRO_TIPO_ACTIVIDAD = "TI_TIPOACTIVIDAD";
		public static final String BUSCAR_CAMPO_FILTRO_TI_EJECUCION = "TI_EJECUCION";
		public static final String BUSCAR_CAMPO_FILTRO_TI_FRECUENCIA = "TI_FRECUENCIA";
		
		public static final String COMBO_ALL = "ALL";
		public static final String COMBO_SEL = "SEL";
		public static final String COMBO_SEL_TODOS = "SEL_ALL";
		public static final String COMBO_TODOS_NEW = "ALL_NEW";
										
		public static final Long TIPO_CATEGORIZADOR_REGISTRADOR = 1L;
		public static final Long TIPO_CATEGORIZADOR_GENERAL = 2L;
		public static final Long TIPO_CATEGORIZADOR_ESPECIALIZADO = 3L;		
		
		/*ARCHIVOS ADJUNTOS*/
		public static final String ARCHIVOS_ADJUNTOS = "registro-corredores-adjuntos";
	
		
		public static final Long TIPO_DOCUMENTO_RENIEC = 1L;
		
		public static final Long ESTADO_CATEGORIAZADOR_ACTIVO = 1L;
		public static final Long ESTADO_CATEGORIAZADOR_DESACTIVO = 2L;
		
		
		// FIXME: para esta entrega tipo de documento esta en duracell, 
		// por ahi se hablo se crear una nueva tabla catalogo solo para corredores (sin confirmar)
		public static final Long ID_CAT_DET_DNI = 1L;
		public static final Long ID_CAT_DET_CARNET_EXTRANJERIA = 2L;
		public static final Long ID_CAT_DET_RUC = 3L;
		public static final Long ID_CAT_DET_PASAPORTE = 4L;
		
		public static final Long ID_PAIS_PERU = 174L;
		
		public static final Long ESTADO_TRAMITE = 5L;
		public static final Long ESTADO_RECHAZADO = 8L;
		public static final Long ESTADO_DENEGADO = 10L;
		public static final Long ESTADO_VIGENTE = 6L;
		public static final Long ESTADO_CADUCO = 9L;
		public static final Long ESTADO_BAJA = 7L;
		//-----MODIFICADO : jsqp
		public static final String COMBO_VACIO = "";
		
	}
	
	public static class MOD_PROGRAMACION_DE_VISITAS {
		
		// Session
		public static final String LISTA_ACTAS = "usuario-sesion-lista-actas";
		
		public static final String LISTA_ACTAS_DOS = "usuario-sesion-lista-actas-dos";
		
		public static final String ARCHIVOS_ADJUNTOS_PROGRAMACION = "registro-programacion-visita-adjuntos";
		
		public static final String ARCHIVOS_ADJUNTOS_PLAN_TRABAJO = "registro-programacion-plan-trabajo";
		
		public static final String ARCHIVOS_ADJUNTOS_NOTIFICACION = "registro-programacion-notificacion";

		public static final String LISTA_REPRESENTANTES = "registro-programacion-representante-operativo";
		
		public static final String LISTA_REPRESENTANTES_DOS = "registro-programacion-representante-operativo-dos";
	}
	
	public static class MOD_REP_PERSONALIZADOS {
		public static final String LISTA_NOTIFICACION = "reportes-personalizados-notificacion";
		public static final String LISTA_PARAMETROS = "reportes-personalizados-parametros";
		
		public static final String MANUAL = "1";
		public static final String AUTOMATICA = "2";
	}
	
	// Módulo de Bandeja de Verificación Técnicas
	public static class MOD_BAND_VERIF_TECNICA_ACTASINFORMES
	{
		public static final String LISTA_DOCUMENTOS_ACTAS = "LISTA_DOCUMENTOS_ACTAS";
		public static final String LISTA_DOCUMENTOS_INFORMES = "LISTA_DOCUMENTOS_INFORMES";
		public static final String LISTA_DOCUMENTOS_ACTAS_SEGUNDA = "LISTA_DOCUMENTOS_ACTAS_SEGUNDA";
		public static final String LISTA_DOCUMENTOS_INFORMES_SEGUNDA = "LISTA_DOCUMENTOS_INFORMES_SEGUNDA";
		public static final String ARCHIVO_ADJUNTO_ACTA = "ARCHIVO_ADJUNTO_ACTA";
		public static final String ARCHIVO_ADJUNTO_ACTA_SEGUNDA = "ARCHIVO_ADJUNTO_ACTA_SEGUNDA";
		public static final String ARCHIVO_ADJUNTO_INFORME = "ARCHIVO_ADJUNTO_INFORME";
		public static final String ARCHIVO_ADJUNTO_INFORME_SEGUNDA = "ARCHIVO_ADJUNTO_INFORME_SEGUNDA";
	}
	
	// Módulo de Bandeja de Verificación Técnica
	public static class MOD_BAND_VERIF_TECNICA_OPINIONPREVIA
	{
		public static final String PROYECTO_RESOLUCION = "PR";
		public static final String INFORME_COMITE_TECNICO = "ICT";
		public static final String INFORME_EQUIPO_OPERATIVO = "IEO";
		public static final String DETALLE_SOLICITUD_CATEGORIZACION = "DSC";
		
		public static final String LISTA_CATEGORIZADORES_ESPECIALIZADOS = "registro-opinion-previa-categorizador-esp";
		public static final String LISTA_ANEXOS = "registro-opinion-previa-anexo";
		public static final String ARCHIVOS_ADJUNTOS_OPINIONPREVIA_ANEXOS = "registro-opinion-previa-anexo-adjuntos";
		public static final String ARCHIVOS_ADJUNTOS_OPINIONPREVIA_COPIAINFORME = "registro-opinion-previa-informe-adjuntos";
		public static final String ARCHIVOS_ADJUNTOS_OPINIONPREVIA_COPIAINFORME_INA = "registro-opinion-previa-informe-ina-adjuntos";
		public static final String ARCHIVOS_ADJUNTOS_OPINIONPREVIA_CARTANOTIFICACION_INA = "registro-opinion-previa-carta-notificacion-ina-adjuntos";
		public static final String ARCHIVOS_ADJUNTOS_OPINIONPREVIA = "registro-opinion-previa-adjuntos";
	}
	
	// Módulo de Consulta en Línea
	public static class MOD_CONSULTA_EN_LINEA
	{
		public static final String LISTA_ARCHIVOS_ADJUNTOS_CONSULTA_DET = "registro-consulta-en-linea-archivos-consulta-det";
		public static final String LISTA_ARCHIVOS_ADJUNTOS_RESPUESTA_DET = "registro-consulta-en-linea-archivos-rpta-det";
		public static final String LISTA_ARCHIVOS_ADJUNTOS_CONSULTA = "registro-consulta-en-linea-archivos-consulta";
		public static final String LISTA_ARCHIVOS_ADJUNTOS_RESPUESTA = "registro-consulta-en-linea-archivos-rpta";
		public static final String ARCHIVOS_ADJUNTOS_CONULTAS_EN_LINEA = "registro-consultas-en-linea-archivos-adjuntos";
		public static final String LISTA_FORMA_RESPUESTA = "registro-consultas-en-linea-forma-rpta";
		public static final String LISTA_TIPO_CONSULTA = "registro-consultas-en-linea-tipo-consulta";
		public static final String LISTA_TICKETS_RELACIONADOS = "registro-consultas-en-linea-tickets-rel";
	}
	
	public static class MOD_CAT_CERT
	{
		public static final String ARCHIVOS_ADJUNTOS_CERTIFICADO = "categorizacion-certificado-certificado-adjuntos";
	}
	
	public static class LOGIN
	{
		public static final String USER_SESSION = "SESSION_RENIPRESS";
	}
	/*
	public static enum PERFILES
	{
		WS_SIS_INT_SALUD(new Long(228)),
		ADMINISTRADOR_SISTEMA(new Long(248)),
		ESPECIALISTA_IID(new Long(249)),
		ADMINISTRADOR_INA(new Long(250)),
		CATEGORIZADOR_ESPECIALIZADO(new Long(251)),
		ADMINISTRADOR_REGIONAL(new Long(252)),
		TITULAR_AS(new Long(253)),
		CATEGORIZADOR_GENERAL(new Long(254)),
		REGISTRADOR(new Long(257)),
		MESA_DE_PARTES(new Long(258)),
		USUARIO_IPRESS(new Long(259)),
		USUARIO_PUBLICO(new Long(260));
		
		private final Long perfil;
		
		PERFILES(Long perfil)
		{
			this.perfil = perfil;
		}
		
		public Long getPerfil(){ 
			return perfil; 
		}		
	}
	*/
	public static enum IDENTIFICADOR_FORMATO{
		PLAN_TRABAJO("PLTR","Formato de Plan de Trabajo", new Long(18)),
		CARTA_NOTIFICACION_VISITA("CNVI","Formato de Carta de Notificacion de Visita", new Long(10)),
		CARTA_NOTIFICACION_RESOLUCION("CNRE","Formato de Carta de Notificación de Resolución", new Long(9)),
		CARTA_NOTIFICACION_OPINION_PREVIA("CNOP","Formato de Carta de Notificación de Opinión Previa",new Long(10)),
		ACTA_VISITA("ACVI","Formato Acta de Visita",new Long(19)),
		INFORME_VISITA("INVI","Formato Informe de Visita",new Long(26)),
		INFORME_CATEGORIZADOR_ESP("INCE","Formato Informe del Categorizador Especializado",new Long(17)),
		ACTO_RESOL_CAT_ESTABLECIMIENTO_SUSALUD("ARCE","Formato de  Acto Resolutivo de Categoría de Establecimiento de Salud",new Long(17)),
		RESOLUCION_DIRECTORIAL_SMA("REDI","Formato de Resolucion Directorial - SMA",new Long(25));
		
		public String identificador;
		public String denominacion;
		public Long cantidad;
		
		IDENTIFICADOR_FORMATO(String identificador,String denominacion,Long cantidad){
			this.identificador = identificador;
			this.denominacion = denominacion;
			this.cantidad = cantidad;
		}
		
		public String getIdentificador(){
			return this.identificador;
		}
		
		public String getDenominacion()
		{
			return this.denominacion;
		}
		
		public Long getCantidad(){
			return this.cantidad;
		}
	}
	
	public static enum TI_TIPOACTIVIDAD{
		ACTV_ATENCION_DIRECTA(new Long(1)),
		ACTV_ATENCION_SOPORTE(new Long(2));
		
		public Long codvalor;
		
		TI_TIPOACTIVIDAD(Long codvalor){
			this.codvalor=codvalor;
		}
		
		public Long getCodvalor()
		{
			return this.codvalor;
		}
	}
	
	public static enum TABLA_PARAMETROS{
		US_INTENDENTE(new Long(25));
		
		public Long idparametro;
		
		TABLA_PARAMETROS(Long idparametro)
		{
			this.idparametro=idparametro;
		}
		
		public Long getIdParametro(){
			return this.idparametro;
		}
		
	}
	
	public static enum MODULO{
		RRHH(new Long(3), "RR");
		
		public Long id;
		public String descripcion;
		
		MODULO(Long id, String descripcion){
			this.id = id;
			this.descripcion = descripcion;
		}
		
		public Long getId(){
			return this.id;
		}
		
		public String getDescripcion(){
			return this.descripcion;
		}
	}
	
	public static enum TI_NOTIFICACION{
		SOLICITUD_PRESENTADA(new Long(1)),
		SOLICITUD_ADMITIDA(new Long(2)),
		SOLICITUD_OBSERVADA(new Long(3)),
		SOLICITUD_NO_ADMITIDA(new Long(4)),
		SOLICITUD_OBSERVADA_PROCEDENCIA(new Long(5)),
		SOLICITUD_RECHAZADA(new Long(6)),
		SOLICITUD_CATEG_APROBADA(new Long(7)),
		SOLICITUD_CATEG_PRESENTADA(new Long(8)),
		PRIMERA_VISITA(new Long(9)),
		SEGUNDA_VISITA(new Long(10)),
		VISITA_OBSERVACIONES(new Long(11)),
		OBSERVACIONES_SUBSANADAS(new Long(12)),
		CATEGORIA_REGISTRADA(new Long(13)),
		OPINION_PREVIA_SOLICITADA(new Long(14)),
		OPINION_PREVIA_EMITIDA(new Long(15)),
		CERTIFICADO_EMITIDO(new Long(16)),
		SOLICITUD_CUENTA_PENDIENTE(new Long(17)),
		SOLICITUD_CUENTA_APROBADA(new Long(18)),
		SOLICITUD_CUENTA_RECHAZADA(new Long(19)),
		TICKET_REGISTRADO_ADMIN(new Long(20)),
		TICKET_REGISTRADO_USUARIO(new Long(21)),
		TICKET_ATENDIDO(new Long(22)),
		SOLICITUD_CATEG_OBSERVADA(new Long(23)),
		SOLICITUD_CATEG_ADMITIDA(new Long(24)),
		SOLICITUD_CATEG_RECHAZADA(new Long(25)),
		
		SOLICITUD_ACESO(new Long(26)),
		SOLICITUD_RETIRO(new Long(27)),
                //Agregado por dlarico 16/02/2016
                SOLICITUD_ACTUALIZACION_DATOS_AUTORIZAR_ACCESO(new Long(28)),
                SOLICITUD_ACTUALIZACION_DATOS_RECHAZAR_ACCESO(new Long(29)),
                SOLICITUD_RETIRO_OBSERVADA(new Long(30)),
                SOLICITUD_RETIRO_ATENDIDO_IMPROCEDENTE(new Long(31)),
                SOLICITUD_RETIRO_ATENDIDO_PROCEDENTE(new Long(32)),
                SOLICITUD_RETIRO_RECHAZADA(new Long(33));

		public Long codvalor;
		
		TI_NOTIFICACION(Long codvalor){
			this.codvalor=codvalor;
		}
		
		public Long getCodvalor()
		{
			return this.codvalor;
		}
	}
	
	public static enum FORMATOS_SOLICITUD
	{
		SOLICITUD_AMPLIACION_PLAZO("FSAP","Formato de Solicitud Ampliacion Plazo"),
		SOLICITUD_SEGUNDA_INSTANCIA("FSSI","Formato de Solicitud Segunda Instancia"),
		SOLICITUD_OPINION_PREVIA("FSOP","Formato de Solicitud Opinion Previa"),
		CERTIFICADO_RENIPRESS("FCRE","Formato Certificado Renipress");
		
		public String nombreArchivoIn;
        public String nombreArchivoOut;
		
		FORMATOS_SOLICITUD(String nombreArchivoIn,String nombreArchivoOut)
		{
			this.nombreArchivoIn=nombreArchivoIn;
			this.nombreArchivoOut=nombreArchivoOut;
		}
		
		public String getNombreArchivoIn()
		{
			return this.nombreArchivoIn;
		}
		
		public String getNombreArchivoOut()
		{
			return this.nombreArchivoOut;
		}
	}
	
	public static enum INDICADOR_CALCULO{
		SIN_INDICADOR(null),
		EN_ESPERA(new Long(0)),
		GENERADO(new Long(1)),
		;
		
		private Long indicador;
		
		INDICADOR_CALCULO(Long indicador){
			this.indicador = indicador; 
		}
		
		public Long getIndicador(){
			return this.indicador;
		}
	}
	
	
	public static enum NIVEL_CAT_ERROR{
		INFORMATIVO(new String("0")),
		VALIDACION(new String("1")),
		ERROR(new String("2")),
		GRAVE(new String("3"))
		;
		
		String tipoError = null;
		
		private NIVEL_CAT_ERROR(String tipoError){
			this.tipoError = tipoError;
		}
		
		public String getTipoError(){
			return this.tipoError;
		}
	}
	
	public static enum TIPO_COMPETENCIAS{
		COMPETENCIA(new Long(2)),
		CAPACITACIONES(new Long(3)),
		ENTRENAMIENTO(new Long(1))
		;
		
		private Long tipo;
		
		private TIPO_COMPETENCIAS(Long tipo){
			this.tipo = tipo;
		}
		
		public Long getTipo(){
			return this.tipo;
		}
	}

	public static enum TIPO_CATALOGO{
		PERSONA_NATURAL(new Long(45)),
		PERSONA_JURIDICA(new Long(46)),
		;
		
		Long tipo;
		
		TIPO_CATALOGO(Long tipo){
			this.tipo = tipo;
		}
		
		public Long getTipo(){
			return this.tipo;
		}
	}
	
	public static enum TIPO_CONDICION{
		CIERRE_TEMPORAL(new Long(1)),
		CIERRE_DEFINITIVO(new Long(2)),
		FUNCIONAMIENTO(new Long(3)),
		RESTRICCION(new Long(4)),
		;
		
		Long tipo;
		
		TIPO_CONDICION(Long tipo){
			this.tipo = tipo;
		}
		
		public Long getTipo(){
			return this.tipo;
		}
	}
}

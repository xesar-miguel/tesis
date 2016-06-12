package pe.gob.susalud.renipress.comun.exceptions;

public class NavigationException extends Exception {

	private static final long serialVersionUID = -7797260854257574965L;

	// tipo de error para no llenarse de clases excepcion
	private String tipo;

	// cadena texto que describe la excepcion
	private String mensaje;

	// codigo unico mostrado al cliente para ubicar error en las fuentes
	private String codigo;
	// atributo extra para cualquier otro manejo
	private Object extra;

	// constructores
	public NavigationException(String mensaje) {
		this("default-type-error", mensaje, "default-error-code");
	}

	public NavigationException(String mensaje, String codigo) {
		this("default-type-error", mensaje, codigo);
	}

	public NavigationException(String tipo, String mensaje, String codigo) {
		this("default-type-error", mensaje, codigo, null);
	}
	public NavigationException(String tipo, String mensaje, String codigo, Object extra) {
		super(mensaje);
		this.tipo = tipo;
		this.mensaje = mensaje;
		this.codigo = codigo;
		this.extra = extra;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getMensaje() {
		return mensaje;
	}

	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public Object getExtra() {
		return extra;
	}

	public void setExtra(Object extra) {
		this.extra = extra;
	}
}

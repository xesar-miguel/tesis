package pe.gob.susalud.renipress.dominio.entidades;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class PlantillaCorreoEntity extends AuditoriaEntity implements
		java.io.Serializable {

	/**
	 * default serialUID.
	 */
	private static final long serialVersionUID = 1L;
	
	String emisor;
	String clave;
	String receptor;
	String asunto;
	String mensaje;
	String smtphost;
	String smtpport;
	String receptorCopia;
	List<File> archivo;
	boolean HTML;

	public String getClave() {
		return clave;
	}

	public void setClave(String clave) {
		this.clave = clave;
	}

	public String getSmtphost() {
		return smtphost;
	}

	public void setSmtphost(String smtphost) {
		this.smtphost = smtphost;
	}

	public String getSmtpport() {
		return smtpport;
	}

	public void setSmtpport(String smtpport) {
		this.smtpport = smtpport;
	}

	public boolean isHTML() {
		return HTML;
	}

	public void setHTML(boolean hTML) {
		HTML = hTML;
	}

	public String getEmisor() {
		return emisor;
	}

	public void setEmisor(String emisor) {
		this.emisor = emisor;
	}

	public String getReceptor() {
		return receptor;
	}

	public void setReceptor(String receptor) {
		this.receptor = receptor;
	}

	public String getAsunto() {
		return asunto;
	}

	public void setAsunto(String asunto) {
		this.asunto = asunto;
	}

	public String getMensaje() {
		return mensaje;
	}

	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}
	
	public void setArchivo(File archivo) {
		if (this.archivo == null) {
			this.archivo = new ArrayList<File>();
		}
		this.archivo.add(archivo);
	}

	public void setArchivos(List<File> archivos) {
		this.archivo = archivos;
	}

	public List<File> getArchivos() {
		return archivo;
	}

	public String getReceptorCopia() {
		return receptorCopia;
	}

	public void setReceptorCopia(String receptorCopia) {
		this.receptorCopia = receptorCopia;
	}
}

package pe.gob.susalud.renipress.dominio.ws;

import java.io.Serializable;

/***
 * @name      : PersonaWs - Entidad de la WebService Usuario.
 * @author    : [BIT] - maranya
 * @version   : 1.0
 * @date      : 10/08/2015
 * @copyrigth : SUSALUD
 */
/**
 * @author maranya
 *
 */
public class PersonaWs implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private String numDoc;
	private String email;
	private String paterno;
	private String materno;
	private String nombres;
	private String nombreLargo;
	private String tipoDoc;
	
	/**
	 * @return numDoc
	 */
	public String getNumDoc() {
		return numDoc;
	}
	/**
	 * @param dni
	 */
	public void setNumDoc(String numDoc) {
		this.numDoc = numDoc;
	}
	/**
	 * @return email
	 */
	public String getEmail() {
		return email;
	}
	/**
	 * @param email
	 */
	public void setEmail(String email) {
		this.email = email;
	}
	/**
	 * @return paterno
	 */
	public String getPaterno() {
		return paterno;
	}
	/**
	 * @param paterno
	 */
	public void setPaterno(String paterno) {
		this.paterno = paterno;
	}
	/**
	 * @return materno
	 */
	public String getMaterno() {
		return materno;
	}
	/**
	 * @param materno
	 */
	public void setMaterno(String materno) {
		this.materno = materno;
	}
	/**
	 * @return nombres
	 */
	public String getNombres() {
		return nombres;
	}
	/**
	 * @param nombres
	 */
	public void setNombres(String nombres) {
		this.nombres = nombres;
	}
	/**
	 * @return nombreLargo
	 */
	public String getNombreLargo() {
		return nombreLargo;
	}
	/**
	 * @param nombreLargo
	 */
	public void setNombreLargo(String nombreLargo) {
		this.nombreLargo = nombreLargo;
	}
	
	/**
	 * @return tipoDoc
	 */
	public String getTipoDoc() {
		return tipoDoc;
	}
	
	/**
	 * @param tipoDoc
	 */
	public void setTipoDoc(String tipoDoc) {
		this.tipoDoc = tipoDoc;
	}
	
}

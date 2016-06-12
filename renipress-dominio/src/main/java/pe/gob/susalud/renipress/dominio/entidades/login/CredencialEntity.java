package pe.gob.susalud.renipress.dominio.entidades.login;

import java.util.List;

import pe.gob.susalud.renipress.dominio.ws.PersonaWs;

public class CredencialEntity implements java.io.Serializable {
	private static final long serialVersionUID = 1L;
	
	private String correo;
	private Long contador;	
	private String idPerfil;
	private Long idautorsanit;
	private Long idusuasesion;
	private String usuario;
	private String ipLocal;
	private String password;
	private String passwordnuevo;
	private String passwordconfirmado;
	private String codEncargatura;
	private String codArea;
	private String codUsuario;
	private String desperfil;
	private String desautorsanit;
	private String descargo;
	private String desencargatura;
	
	private List<?> listaPerfiles;
	private List<?> listaAutoridadSanitaria;
	private List<?> listaOpciones;
	private PersonaWs personaWs;
	
	private List<?> listaErrores;
	private String error;
	
	/**
	 * @return the correo
	 */
	public String getCorreo() {
		return correo;
	}
	/**
	 * @param correo the correo to set
	 */
	public void setCorreo(String correo) {
		this.correo = correo;
	}
	/**
	 * @return the contador
	 */
	public Long getContador() {
		return contador;
	}
	/**
	 * @param contador the contador to set
	 */
	public void setContador(Long contador) {
		this.contador = contador;
	}
	/**
	 * @return the idperfil
	 */
	public String getIdPerfil() {
		return idPerfil;
	}
	/**
	 * @param idperfil the idperfil to set
	 */
	public void setIdPerfil(String idperfil) {
		this.idPerfil = idperfil;
	}
	/**
	 * @return the idautorsanit
	 */
	public Long getIdautorsanit() {
		return idautorsanit;
	}
	/**
	 * @param idautorsanit the idautorsanit to set
	 */
	public void setIdautorsanit(Long idautorsanit) {
		this.idautorsanit = idautorsanit;
	}
	/**
	 * @return the idusuasesion
	 */
	public Long getIdusuasesion() {
		return idusuasesion;
	}
	/**
	 * @param idusuasesion the idusuasesion to set
	 */
	public void setIdusuasesion(Long idusuasesion) {
		this.idusuasesion = idusuasesion;
	}
	/**
	 * @return the usuario
	 */
	public String getUsuario() {
		return usuario;
	}
	/**
	 * @param usuario the usuario to set
	 */
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	/**
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}
	/**
	 * @param password the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}
	/**
	 * @return the passwordnuevo
	 */
	public String getPasswordnuevo() {
		return passwordnuevo;
	}
	/**
	 * @param passwordnuevo the passwordnuevo to set
	 */
	public void setPasswordnuevo(String passwordnuevo) {
		this.passwordnuevo = passwordnuevo;
	}
	/**
	 * @return the passwordconfirmado
	 */
	public String getPasswordconfirmado() {
		return passwordconfirmado;
	}
	/**
	 * @param passwordconfirmado the passwordconfirmado to set
	 */
	public void setPasswordconfirmado(String passwordconfirmado) {
		this.passwordconfirmado = passwordconfirmado;
	}
	/**
	 * @return the ipLocal
	 */
	public String getIpLocal() {
		return ipLocal;
	}
	/**
	 * @param ipLocal the ipLocal to set
	 */
	public void setIpLocal(String ipLocal) {
		this.ipLocal = ipLocal;
	}
	/**
	 * @return the codEncargatura
	 */
	public String getCodEncargatura() {
		return codEncargatura;
	}
	/**
	 * @param codEncargatura the codEncargatura to set
	 */
	public void setCodEncargatura(String codEncargatura) {
		this.codEncargatura = codEncargatura;
	}
	/**
	 * @return codArea.
	 */
	public String getCodArea() {
		return this.codArea;
	}
	/**
	 * @param codArea the codArea to set.
	 */
	public void setCodArea(String codArea) {
		this.codArea = codArea;
	}
	/**
	 * @return the codUsuario
	 */
	public String getCodUsuario() {
		return codUsuario;
	}
	/**
	 * @param codUsuario the codUsuario to set
	 */
	public void setCodUsuario(String codUsuario) {
		this.codUsuario = codUsuario;
	}
	/**
	 * @return the listaPerfiles
	 */
	public List<?> getListaPerfiles() {
		return listaPerfiles;
	}
	/**
	 * @param listaPerfiles the listaPerfiles to set
	 */
	public void setListaPerfiles(List<?> listaPerfiles) {
		this.listaPerfiles = listaPerfiles;
	}
	/**
	 * @return the listaAutoridadSanitaria
	 */
	public List<?> getListaAutoridadSanitaria() {
		return listaAutoridadSanitaria;
	}
	/**
	 * @param listaAutoridadSanitaria the listaAutoridadSanitaria to set
	 */
	public void setListaAutoridadSanitaria(List<?> listaAutoridadSanitaria) {
		this.listaAutoridadSanitaria = listaAutoridadSanitaria;
	}
	/**
	 * @return the listaOpciones
	 */
	public List<?> getListaOpciones() {
		return listaOpciones;
	}
	/**
	 * @param listaOpciones the listaOpciones to set
	 */
	public void setListaOpciones(List<?> listaOpciones) {
		this.listaOpciones = listaOpciones;
	}
	/**
	 * @return the UsuarioWs.
	 */
	public PersonaWs getPersonaWs() {
		return personaWs;
	}
	/**
	 * @param usuarioWs.
	 */
	public void setPersonaWs(PersonaWs personaWs) {
		this.personaWs = personaWs;
	}
	
	/**
	 * @return desperfil
	 */
	public String getDesperfil() {
		return desperfil;
	}
	
	/**
	 * @param desperfil
	 */
	public void setDesperfil(String desperfil) {
		this.desperfil = desperfil;
	}
	
	/**
	 * @return desautorsanit
	 */
	public String getDesautorsanit() {
		return desautorsanit;
	}
	
	/**
	 * @param desautorsanit
	 */
	public void setDesautorsanit(String desautorsanit) {
		this.desautorsanit = desautorsanit;
	}
	/**
	 * @return the listaErrores
	 */
	public List<?> getListaErrores() {
		return listaErrores;
	}
	/**
	 * @param listaErrores the listaErrores to set
	 */
	public void setListaErrores(List<?> listaErrores) {
		this.listaErrores = listaErrores;
	}
	/**
	 * @return the error
	 */
	public String getError() {
		return error;
	}
	/**
	 * @param error the error to set
	 */
	public void setError(String error) {
		this.error = error;
	}
	/**
	 * @return descargo.
	 */
	public String getDescargo() {
		return this.descargo;
	}
	/**
	 * @param descargo to set Description to Cargo.
	 */
	public void setDescargo(String descargo) {
		this.descargo = descargo;
	}
	/**
	 * @return desencargatura.
	 */
	public String getDesencargatura() {
		return this.desencargatura;
	}
	/**
	 * @param desencargatura to set Description to encargatura.
	 */
	public void setDesencargatura(String desencargatura) {
		this.desencargatura = desencargatura;
	}
	
	
}

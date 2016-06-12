package pe.gob.susalud.renipress.comun.beans;

// FIXME: dummy de usuario de session. esperar a SUSALUD
public class UsuarioSessionImpl implements UsuarioSession {

	private Long idUsuario;
	private String loginUser;
	private String loginPassword;
	private String tipoEntidad;
	private String codEntidad;
	
	private String codEncargatura;
	private String codPerfil;

	public Long getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(Long idUsuario) {
		this.idUsuario = idUsuario;
	}

	@Override
    public Long getUsuarioSessionID() {
	    return idUsuario;
    }

	public String getTipoEntidad() {
		return tipoEntidad;
	}

	public void setTipoEntidad(String tipoEntidad) {
		this.tipoEntidad = tipoEntidad;
	}

	public String getCodEntidad() {
		return codEntidad;
	}

	public void setCodEntidad(String codEntidad) {
		this.codEntidad = codEntidad;
	}

	public String getCodEncargatura() {
		return codEncargatura;
	}

	public void setCodEncargatura(String codEncargatura) {
		this.codEncargatura = codEncargatura;
	}

	public String getCodPerfil() {
		return codPerfil;
	}

	public void setCodPerfil(String codPerfil) {
		this.codPerfil = codPerfil;
	}

	public String getLoginUser() {
		return loginUser;
	}

	public void setLoginUser(String loginUser) {
		this.loginUser = loginUser;
	}

	public String getLoginPassword() {
		return loginPassword;
	}

	public void setLoginPassword(String loginPassword) {
		this.loginPassword = loginPassword;
	}
	
	

}

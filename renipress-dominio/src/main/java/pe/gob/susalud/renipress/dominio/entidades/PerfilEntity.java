package pe.gob.susalud.renipress.dominio.entidades;

public class PerfilEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private String coSistema; 
    private String coPerfil;
    private String coIdentificador;
    private String coUsuario;
    private String deRazonSocial;
    private String deRuc;
    private String coEntidad;
    private String tipoEntidad;
    private String deUsuario;

    public String getDeUsuario() {
        return deUsuario;
    }

    public void setDeUsuario(String deUsuario) {
        this.deUsuario = deUsuario;
    }    

    public String getCoUsuario() {
        return coUsuario;
    }

    public void setCoUsuario(String coUsuario) {
        this.coUsuario = coUsuario;
    }

    public String getDeRazonSocial() {
        return deRazonSocial;
    }

    public void setDeRazonSocial(String deRazonSocial) {
        this.deRazonSocial = deRazonSocial;
    }

    public String getDeRuc() {
        return deRuc;
    }

    public void setDeRuc(String deRuc) {
        this.deRuc = deRuc;
    }

    
    public String getCoSistema() {
        return coSistema;
    }

    public void setCoSistema(String coSistema) {
        this.coSistema = coSistema;
    }

    public String getCoPerfil() {
        return coPerfil;
    }

    public void setCoPerfil(String coPerfil) {
        this.coPerfil = coPerfil;
    }

    public String getCoIdentificador() {
        return coIdentificador;
    }

    public void setCoIdentificador(String coIdentificador) {
        this.coIdentificador = coIdentificador;
    }

	public String getCoEntidad() {
		return coEntidad;
	}

	public void setCoEntidad(String coEntidad) {
		this.coEntidad = coEntidad;
	}

	public String getTipoEntidad() {
		return tipoEntidad;
	}

	public void setTipoEntidad(String tipoEntidad) {
		this.tipoEntidad = tipoEntidad;
	}       
}

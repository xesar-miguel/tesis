package pe.gob.susalud.renipress.dominio.entidades;


public class UsuarioSesionEntity implements java.io.Serializable {
	private static final long serialVersionUID = 1L;

	private Long idusuasesion;
	private String direccionip;
	private java.util.Date inisesion;
	private java.util.Date finsesion;
	private String usuareg;
	private String usuamod;

	private boolean existe;
	
	public boolean isExiste() {
		return existe;
	}

	public void setExiste(boolean existe) {
		this.existe = existe;
	}

	public Long getIdusuasesion() {
		return idusuasesion;
	}

	public void setIdusuasesion(Long idusuasesion) {
		this.idusuasesion = idusuasesion;
	}

	public String getDireccionip() {
		return direccionip;
	}

	public void setDireccionip(String direccionip) {
		this.direccionip = direccionip;
	}

	public java.util.Date getInisesion() {
		return inisesion;
	}

	public void setInisesion(java.util.Date inisesion) {
		this.inisesion = inisesion;
	}

	public java.util.Date getFinsesion() {
		return finsesion;
	}

	public void setFinsesion(java.util.Date finsesion) {
		this.finsesion = finsesion;
	}

	public String getUsuareg() {
		return usuareg;
	}

	public void setUsuareg(String usuareg) {
		this.usuareg = usuareg;
	}

	public String getUsuamod() {
		return usuamod;
	}

	public void setUsuamod(String usuamod) {
		this.usuamod = usuamod;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}

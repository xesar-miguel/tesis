package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class CatalogoErrorEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idcaterr;
    private String codcaterr;
    private String caterr;
    private String nivelcaterr;
    private String mensaje;
    private String mensajeusu;
    private String mensajesol;
    private Long estado;
    private String exception;
    
    private Exception tipoException;

    public Long getIdcaterr(){
        return this.idcaterr;
    }
    public void setIdcaterr(Long idcaterr){
        this.idcaterr = idcaterr;
    }
    public String getCodcaterr(){
        return this.codcaterr;
    }
    public void setCodcaterr(String codcaterr){
        this.codcaterr = codcaterr;
    }
    public String getCaterr(){
        return this.caterr;
    }
    public void setCaterr(String caterr){
        this.caterr = caterr;
    }
    public String getNivelcaterr(){
        return this.nivelcaterr;
    }
    public void setNivelcaterr(String nivelcaterr){
        this.nivelcaterr = nivelcaterr;
    }
    public String getMensaje(){
        return this.mensaje;
    }
    public void setMensaje(String mensaje){
        this.mensaje = mensaje;
    }
    public String getMensajeusu(){
        return this.mensajeusu;
    }
    public void setMensajeusu(String mensajeusu){
        this.mensajeusu = mensajeusu;
    }
    public String getMensajesol(){
        return this.mensajesol;
    }
    public void setMensajesol(String mensajesol){
        this.mensajesol = mensajesol;
    }
    public Long getEstado(){
        return this.estado;
    }
    public void setEstado(Long estado){
        this.estado = estado;
    }
	/**
	 * @return the exception
	 */
	public String getException() {
		return exception;
	}
	/**
	 * @param exception the exception to set
	 */
	public void setException(String exception) {
		this.exception = exception;
	}
	/**
	 * @return the tipoException
	 */
	public Exception getTipoException() {
		return tipoException;
	}
	/**
	 * @param tipoException the tipoException to set
	 */
	public void setTipoException(Exception tipoException) {
		this.tipoException = tipoException;
	}
    
	
	
}

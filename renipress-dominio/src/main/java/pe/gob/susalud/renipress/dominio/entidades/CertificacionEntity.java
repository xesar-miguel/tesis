package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class CertificacionEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idcertificacion;
    private Long idpersona;
    private Long tipocertificado;
    private String certificado;
    private java.util.Date fechaemision;
    private java.util.Date fechafinvigencia;
    private Long estado;
    private String accion;
    private String cliente;
    private Long idusuasesion;
    private Long indEstado;

    public Long getIdcertificacion(){
        return this.idcertificacion;
    }
    public void setIdcertificacion(Long idcertificacion){
        this.idcertificacion = idcertificacion;
    }
    public Long getIdpersona(){
        return this.idpersona;
    }
    public void setIdpersona(Long idpersona){
        this.idpersona = idpersona;
    }
    public Long getTipocertificado(){
        return this.tipocertificado;
    }
    public void setTipocertificado(Long tipocertificado){
        this.tipocertificado = tipocertificado;
    }
    public String getCertificado(){
        return this.certificado;
    }
    public void setCertificado(String certificado){
        this.certificado = certificado;
    }
    public java.util.Date getFechaemision(){
        return this.fechaemision;
    }
    public void setFechaemision(java.util.Date fechaemision){
        this.fechaemision = fechaemision;
    }
    public java.util.Date getFechafinvigencia(){
        return this.fechafinvigencia;
    }
    public void setFechafinvigencia(java.util.Date fechafinvigencia){
        this.fechafinvigencia = fechafinvigencia;
    }
    public Long getEstado(){
        return this.estado;
    }
    public void setEstado(Long estado){
        this.estado = estado;
    }
    public String getAccion(){
        return this.accion;
    }
    public void setAccion(String accion){
        this.accion = accion;
    }
    public String getCliente(){
        return this.cliente;
    }
    public void setCliente(String cliente){
        this.cliente = cliente;
    }
    public Long getIdusuasesion(){
        return this.idusuasesion;
    }
    public void setIdusuasesion(Long idusuasesion){
        this.idusuasesion = idusuasesion;
    }
	/**
	 * @return the indEstado
	 */
	public Long getIndEstado() {
		return indEstado;
	}
	/**
	 * @param indEstado the indEstado to set
	 */
	public void setIndEstado(Long indEstado) {
		this.indEstado = indEstado;
	}
    
    
}

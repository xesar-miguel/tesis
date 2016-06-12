package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class SolicitudCatEspEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idsoliccatesp;
    private Long idsolicusua;
    private String certificado;
    private java.util.Date fechaemision;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdsoliccatesp(){
        return this.idsoliccatesp;
    }
    public void setIdsoliccatesp(Long idsoliccatesp){
        this.idsoliccatesp = idsoliccatesp;
    }
    public Long getIdsolicusua(){
        return this.idsolicusua;
    }
    public void setIdsolicusua(Long idsolicusua){
        this.idsolicusua = idsolicusua;
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
}

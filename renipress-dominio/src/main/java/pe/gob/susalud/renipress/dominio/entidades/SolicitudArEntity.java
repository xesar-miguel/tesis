package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class SolicitudArEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idsolicar;
    private Long idsolicusua;
    private Long idautorsanit;
    private String resoldesig;
    private java.util.Date fechaemisionresol;
    private String dnititular;
    private String emisorresol;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdsolicar(){
        return this.idsolicar;
    }
    public void setIdsolicar(Long idsolicar){
        this.idsolicar = idsolicar;
    }
    public Long getIdsolicusua(){
        return this.idsolicusua;
    }
    public void setIdsolicusua(Long idsolicusua){
        this.idsolicusua = idsolicusua;
    }
    public Long getIdautorsanit(){
        return this.idautorsanit;
    }
    public void setIdautorsanit(Long idautorsanit){
        this.idautorsanit = idautorsanit;
    }
    public String getResoldesig(){
        return this.resoldesig;
    }
    public void setResoldesig(String resoldesig){
        this.resoldesig = resoldesig;
    }
    public java.util.Date getFechaemisionresol(){
        return this.fechaemisionresol;
    }
    public void setFechaemisionresol(java.util.Date fechaemisionresol){
        this.fechaemisionresol = fechaemisionresol;
    }
    public String getDnititular(){
        return this.dnititular;
    }
    public void setDnititular(String dnititular){
        this.dnititular = dnititular;
    }
    public String getEmisorresol(){
        return this.emisorresol;
    }
    public void setEmisorresol(String emisorresol){
        this.emisorresol = emisorresol;
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

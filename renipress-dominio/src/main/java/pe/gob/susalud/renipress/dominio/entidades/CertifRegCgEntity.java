package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class CertifRegCgEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idcertregcg;
    private Long idautorsanit;
    private Long idcertificacion;
    private String resolucion;
    private java.util.Date fechaemision;
    private String dnititular;
    private String nombre;
    private String accion;
    private String cliente;
    private String usuamod;
    private Long idusuasesion;

    public Long getIdcertregcg(){
        return this.idcertregcg;
    }
    public void setIdcertregcg(Long idcertregcg){
        this.idcertregcg = idcertregcg;
    }
    public Long getIdautorsanit(){
        return this.idautorsanit;
    }
    public void setIdautorsanit(Long idautorsanit){
        this.idautorsanit = idautorsanit;
    }
    public Long getIdcertificacion(){
        return this.idcertificacion;
    }
    public void setIdcertificacion(Long idcertificacion){
        this.idcertificacion = idcertificacion;
    }
    public String getResolucion(){
        return this.resolucion;
    }
    public void setResolucion(String resolucion){
        this.resolucion = resolucion;
    }
    public java.util.Date getFechaemision(){
        return this.fechaemision;
    }
    public void setFechaemision(java.util.Date fechaemision){
        this.fechaemision = fechaemision;
    }
    public String getDnititular(){
        return this.dnititular;
    }
    public void setDnititular(String dnititular){
        this.dnititular = dnititular;
    }
    public String getNombre(){
        return this.nombre;
    }
    public void setNombre(String nombre){
        this.nombre = nombre;
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
    public String getUsuamod(){
        return this.usuamod;
    }
    public void setUsuamod(String usuamod){
        this.usuamod = usuamod;
    }
    public Long getIdusuasesion(){
        return this.idusuasesion;
    }
    public void setIdusuasesion(Long idusuasesion){
        this.idusuasesion = idusuasesion;
    }
}

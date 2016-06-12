package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class OpinionpreviaEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idopinionprevia;
    private Long idsolicitud;
    private String opinionconforme;
    private Long conclusion;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdopinionprevia(){
        return this.idopinionprevia;
    }
    public void setIdopinionprevia(Long idopinionprevia){
        this.idopinionprevia = idopinionprevia;
    }
    public Long getIdsolicitud(){
        return this.idsolicitud;
    }
    public void setIdsolicitud(Long idsolicitud){
        this.idsolicitud = idsolicitud;
    }
    public String getOpinionconforme(){
        return this.opinionconforme;
    }
    public void setOpinionconforme(String opinionconforme){
        this.opinionconforme = opinionconforme;
    }
    public Long getConclusion(){
        return this.conclusion;
    }
    public void setConclusion(Long conclusion){
        this.conclusion = conclusion;
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

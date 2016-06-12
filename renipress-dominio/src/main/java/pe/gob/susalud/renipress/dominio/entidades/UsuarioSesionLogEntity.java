package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class UsuarioSesionLogEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idusuasesion;
    private String direccionip;
    private java.util.Date inisesion;
    private java.util.Date finsesion;

    public Long getIdusuasesion(){
        return this.idusuasesion;
    }
    public void setIdusuasesion(Long idusuasesion){
        this.idusuasesion = idusuasesion;
    }
    public String getDireccionip(){
        return this.direccionip;
    }
    public void setDireccionip(String direccionip){
        this.direccionip = direccionip;
    }
    public java.util.Date getInisesion(){
        return this.inisesion;
    }
    public void setInisesion(java.util.Date inisesion){
        this.inisesion = inisesion;
    }
    public java.util.Date getFinsesion(){
        return this.finsesion;
    }
    public void setFinsesion(java.util.Date finsesion){
        this.finsesion = finsesion;
    }
}

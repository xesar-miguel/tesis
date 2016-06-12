package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class ProfesionEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idprofesion;
    private Long idcolegprof;
    private String descripcion;
    private Long estado;

    public Long getIdprofesion(){
        return this.idprofesion;
    }
    public void setIdprofesion(Long idprofesion){
        this.idprofesion = idprofesion;
    }
    public Long getIdcolegprof(){
        return this.idcolegprof;
    }
    public void setIdcolegprof(Long idcolegprof){
        this.idcolegprof = idcolegprof;
    }
    public String getDescripcion(){
        return this.descripcion;
    }
    public void setDescripcion(String descripcion){
        this.descripcion = descripcion;
    }
    public Long getEstado(){
        return this.estado;
    }
    public void setEstado(Long estado){
        this.estado = estado;
    }
}

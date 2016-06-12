package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class EspecialidadEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idespecialidad;
    private Long idcolegprof;
    private String descripcion;
    private Long estado;

    public Long getIdespecialidad(){
        return this.idespecialidad;
    }
    public void setIdespecialidad(Long idespecialidad){
        this.idespecialidad = idespecialidad;
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

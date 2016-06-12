package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class ColegioProfEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idcolegprof;
    private String descripcion;

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
}

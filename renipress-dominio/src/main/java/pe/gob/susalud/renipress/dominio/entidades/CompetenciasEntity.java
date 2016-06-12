package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class CompetenciasEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idcompetencias;
    private String descripcion;
    private Long tipo;

    public Long getIdcompetencias(){
        return this.idcompetencias;
    }
    public void setIdcompetencias(Long idcompetencias){
        this.idcompetencias = idcompetencias;
    }
    public String getDescripcion(){
        return this.descripcion;
    }
    public void setDescripcion(String descripcion){
        this.descripcion = descripcion;
    }
    public Long getTipo(){
        return this.tipo;
    }
    public void setTipo(Long tipo){
        this.tipo = tipo;
    }
}

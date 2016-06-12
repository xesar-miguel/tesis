package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class UpsCategoriaEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idupscategoria;
    private Long idups;
    private Long idcategoria;
    private Long estado;

    public Long getIdupscategoria(){
        return this.idupscategoria;
    }
    public void setIdupscategoria(Long idupscategoria){
        this.idupscategoria = idupscategoria;
    }
    public Long getIdups(){
        return this.idups;
    }
    public void setIdups(Long idups){
        this.idups = idups;
    }
    public Long getIdcategoria(){
        return this.idcategoria;
    }
    public void setIdcategoria(Long idcategoria){
        this.idcategoria = idcategoria;
    }
    public Long getEstado(){
        return this.estado;
    }
    public void setEstado(Long estado){
        this.estado = estado;
    }
}

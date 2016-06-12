package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class ClasifCategoriaEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idclasifcategoria;
    private Long idclasif;
    private Long idcategoria;
    private Long estado;

    public Long getIdclasifcategoria(){
        return this.idclasifcategoria;
    }
    public void setIdclasifcategoria(Long idclasifcategoria){
        this.idclasifcategoria = idclasifcategoria;
    }
    public Long getIdclasif(){
        return this.idclasif;
    }
    public void setIdclasif(Long idclasif){
        this.idclasif = idclasif;
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

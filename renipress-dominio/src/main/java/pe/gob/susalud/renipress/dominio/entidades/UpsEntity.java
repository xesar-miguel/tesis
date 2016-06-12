package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class UpsEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idups;
    private String codups;
    private String nombre;
    private Long estado;

    public Long getIdups(){
        return this.idups;
    }
    public void setIdups(Long idups){
        this.idups = idups;
    }
    public String getCodups(){
        return this.codups;
    }
    public void setCodups(String codups){
        this.codups = codups;
    }
    public String getNombre(){
        return this.nombre;
    }
    public void setNombre(String nombre){
        this.nombre = nombre;
    }
    public Long getEstado(){
        return this.estado;
    }
    public void setEstado(Long estado){
        this.estado = estado;
    }
}

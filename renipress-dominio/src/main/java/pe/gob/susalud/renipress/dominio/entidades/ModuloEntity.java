package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class ModuloEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idmodulo;
    private String codmodulo;
    private String nombre;
    private String descripcion;
    private Long orden;
    private Long estado;

    public Long getIdmodulo(){
        return this.idmodulo;
    }
    public void setIdmodulo(Long idmodulo){
        this.idmodulo = idmodulo;
    }
    public String getCodmodulo(){
        return this.codmodulo;
    }
    public void setCodmodulo(String codmodulo){
        this.codmodulo = codmodulo;
    }
    public String getNombre(){
        return this.nombre;
    }
    public void setNombre(String nombre){
        this.nombre = nombre;
    }
    public String getDescripcion(){
        return this.descripcion;
    }
    public void setDescripcion(String descripcion){
        this.descripcion = descripcion;
    }
    public Long getOrden(){
        return this.orden;
    }
    public void setOrden(Long orden){
        this.orden = orden;
    }
    public Long getEstado(){
        return this.estado;
    }
    public void setEstado(Long estado){
        this.estado = estado;
    }
}

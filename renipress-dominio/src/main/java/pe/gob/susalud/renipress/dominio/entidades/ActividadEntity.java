package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class ActividadEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idactividad;
    private String nombre;
    private String descripcion;
    private Long actividad;
    private Long orden;
    private Long estado;

    public Long getIdactividad(){
        return this.idactividad;
    }
    public void setIdactividad(Long idactividad){
        this.idactividad = idactividad;
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
    public Long getActividad(){
        return this.actividad;
    }
    public void setActividad(Long actividad){
        this.actividad = actividad;
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

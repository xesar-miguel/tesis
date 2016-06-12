package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class CategoriaEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idcategoria;
    private String codcategoria;
    private String nombre;
    private String definicion;
    private String denominacion;
    private Long nivelcomplejidad;
    private Long nivelatencion;
    private String flagopiprevia;
    private Long orden;
    private Long estado;

    public Long getIdcategoria(){
        return this.idcategoria;
    }
    public void setIdcategoria(Long idcategoria){
        this.idcategoria = idcategoria;
    }
    public String getCodcategoria(){
        return this.codcategoria;
    }
    public void setCodcategoria(String codcategoria){
        this.codcategoria = codcategoria;
    }
    public String getNombre(){
        return this.nombre;
    }
    public void setNombre(String nombre){
        this.nombre = nombre;
    }
    public String getDefinicion(){
        return this.definicion;
    }
    public void setDefinicion(String definicion){
        this.definicion = definicion;
    }
    public String getDenominacion(){
        return this.denominacion;
    }
    public void setDenominacion(String denominacion){
        this.denominacion = denominacion;
    }
    public Long getNivelcomplejidad(){
        return this.nivelcomplejidad;
    }
    public void setNivelcomplejidad(Long nivelcomplejidad){
        this.nivelcomplejidad = nivelcomplejidad;
    }
    public Long getNivelatencion(){
        return this.nivelatencion;
    }
    public void setNivelatencion(Long nivelatencion){
        this.nivelatencion = nivelatencion;
    }
    public String getFlagopiprevia(){
        return this.flagopiprevia;
    }
    public void setFlagopiprevia(String flagopiprevia){
        this.flagopiprevia = flagopiprevia;
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

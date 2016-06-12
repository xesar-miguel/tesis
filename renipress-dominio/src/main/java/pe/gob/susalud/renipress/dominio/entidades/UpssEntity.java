package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class UpssEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idupss;
    private String codupss;
    private String nombre;
    private String definicion;
    private Long tipoactividad;
    private Long orden;
    private Long estado;
    private String flagsma;

    public Long getIdupss(){
        return this.idupss;
    }
    public void setIdupss(Long idupss){
        this.idupss = idupss;
    }
    public String getCodupss(){
        return this.codupss;
    }
    public void setCodupss(String codupss){
        this.codupss = codupss;
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
    public Long getTipoactividad(){
        return this.tipoactividad;
    }
    public void setTipoactividad(Long tipoactividad){
        this.tipoactividad = tipoactividad;
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
	public String getFlagsma() {
		return flagsma;
	}
	public void setFlagsma(String flagsma) {
		this.flagsma = flagsma;
	}
    
    
    
}

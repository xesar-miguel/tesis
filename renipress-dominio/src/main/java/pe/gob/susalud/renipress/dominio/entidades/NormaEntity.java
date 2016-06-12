package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class NormaEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idnorma;
    private String codnorma;
    private String nombre;
    private Long idestado;
    private String descripcion;
    private Long num;

    public Long getIdnorma(){
        return this.idnorma;
    }
    public void setIdnorma(Long idnorma){
        this.idnorma = idnorma;
    }
    public String getCodnorma(){
        return this.codnorma;
    }
    public void setCodnorma(String codnorma){
        this.codnorma = codnorma;
    }
    public String getNombre(){
        return this.nombre;
    }
    public void setNombre(String nombre){
        this.nombre = nombre;
    }
   
    public Long getIdestado() {
		return idestado;
	}
	public void setIdestado(Long idestado) {
		this.idestado = idestado;
	}
	public String getDescripcion(){
        return this.descripcion;
    }
    public void setDescripcion(String descripcion){
        this.descripcion = descripcion;
    }
	public Long getNum() {
		return num;
	}
	public void setNum(Long num) {
		this.num = num;
	}
    
    
}

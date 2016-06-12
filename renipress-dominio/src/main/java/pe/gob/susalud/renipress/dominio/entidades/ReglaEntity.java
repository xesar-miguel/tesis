package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class ReglaEntity extends AuditoriaEntity implements
		java.io.Serializable {

	private static final long serialVersionUID = 1L;

    private Long idregla;
    private Long idcategoria;
    private Long idnorma;
    private Long estado;
    private String accion;
    private String cliente;
    private Long idusuasesion;
    private String nombreCategoria;
    private String nombreNorma;
    private String condicion;
    

    public Long getIdregla(){
        return this.idregla;
    }
    public void setIdregla(Long idregla){
        this.idregla = idregla;
    }
    public Long getIdcategoria(){
        return this.idcategoria;
    }
    public void setIdcategoria(Long idcategoria){
        this.idcategoria = idcategoria;
    }
    public Long getIdnorma(){
        return this.idnorma;
    }
    public void setIdnorma(Long idnorma){
        this.idnorma = idnorma;
    }
	
	public String getNombreCategoria() {
		return nombreCategoria;
	}

	public void setNombreCategoria(String nombreCategoria) {
		this.nombreCategoria = nombreCategoria;
	}
	
	public String getNombreNorma() {
		return nombreNorma;
	}

	public void setNombreNorma(String nombreNorma) {
		this.nombreNorma = nombreNorma;
	}
	
    public Long getEstado(){
        return this.estado;
    }
    public void setEstado(Long estado){
        this.estado = estado;
    }
    public String getAccion(){
        return this.accion;
    }
    public void setAccion(String accion){
        this.accion = accion;
    }
    public String getCliente(){
        return this.cliente;
    }
    public void setCliente(String cliente){
        this.cliente = cliente;
    }
    public Long getIdusuasesion(){
        return this.idusuasesion;
    }
    public void setIdusuasesion(Long idusuasesion){
        this.idusuasesion = idusuasesion;
    }
	public String getCondicion() {
		return condicion;
	}
	public void setCondicion(String condicion) {
		this.condicion = condicion;
	}
    
}

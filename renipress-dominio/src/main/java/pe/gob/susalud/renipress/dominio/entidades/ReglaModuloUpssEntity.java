package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class ReglaModuloUpssEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idreglamoduloupss;
    private Long idupss;
    private Long idmodulo;
    private Long estado;
    private Long idregla;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdreglamoduloupss(){
        return this.idreglamoduloupss;
    }
    public void setIdreglamoduloupss(Long idreglamoduloupss){
        this.idreglamoduloupss = idreglamoduloupss;
    }
    public Long getIdupss(){
        return this.idupss;
    }
    public void setIdupss(Long idupss){
        this.idupss = idupss;
    }
    public Long getIdmodulo(){
        return this.idmodulo;
    }
    public void setIdmodulo(Long idmodulo){
        this.idmodulo = idmodulo;
    }
    
    public Long getEstado() {
		return estado;
	}
	public void setEstado(Long estado) {
		this.estado = estado;
	}
	public Long getIdregla(){
        return this.idregla;
    }
    public void setIdregla(Long idregla){
        this.idregla = idregla;
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
}

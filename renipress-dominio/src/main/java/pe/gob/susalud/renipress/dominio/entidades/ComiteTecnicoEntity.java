package pe.gob.susalud.renipress.dominio.entidades;

import java.text.SimpleDateFormat;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class ComiteTecnicoEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idcomitetecn;
    private Long idautoridadsanit;
    private java.util.Date fechresolucion;
    private java.util.Date fechafinvig;
    private String resolucion;
    private String autorizador;
    private String cargo;
    private Long estado;
    private String accion;
    private String cliente;
    private Long idusuasesion;
    private String nomAutoriaSanitaria;
    
    public String getNomAutoriaSanitaria() {
		return nomAutoriaSanitaria;
	}
	public void setNomAutoriaSanitaria(String nomAutoriaSanitaria) {
		this.nomAutoriaSanitaria = nomAutoriaSanitaria;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public Long getIdcomitetecn(){
        return this.idcomitetecn;
    }
    public void setIdcomitetecn(Long idcomitetecn){
        this.idcomitetecn = idcomitetecn;
    }
    public Long getIdautoridadsanit(){
        return this.idautoridadsanit;
    }
    public void setIdautoridadsanit(Long idautoridadsanit){
        this.idautoridadsanit = idautoridadsanit;
    }
    public java.util.Date getFechresolucion(){
        return this.fechresolucion;
    }
    public void setFechresolucion(java.util.Date fechresolucion){
        this.fechresolucion = fechresolucion;
    }
    public java.util.Date getFechafinvig(){
        return this.fechafinvig;
    }
    public void setFechafinvig(java.util.Date fechafinvig){
        this.fechafinvig = fechafinvig;
    }
    public String getResolucion(){
        return this.resolucion;
    }
    public void setResolucion(String resolucion){
        this.resolucion = resolucion;
    }
    public String getAutorizador(){
        return this.autorizador;
    }
    public void setAutorizador(String autorizador){
        this.autorizador = autorizador;
    }
    public String getCargo(){
        return this.cargo;
    }
    public void setCargo(String cargo){
        this.cargo = cargo;
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
    
    public String getFechresolucionFormat(){
    	SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy");
    	return getFechresolucion() == null ? "" : formato.format(getFechresolucion());
    }
    
    public String getFechafinvigFormat(){
    	SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy");
    	return getFechafinvig() == null ? "" : formato.format(getFechafinvig());
    }
    
}

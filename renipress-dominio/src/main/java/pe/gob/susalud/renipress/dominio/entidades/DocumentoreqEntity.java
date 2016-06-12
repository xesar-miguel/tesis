package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class DocumentoreqEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long iddocreq;
    private Long idproceso;
    private Long idautorsanit;
    private String nombrereq;
    private String anotacion;
    private String flagoblig;
    private String reqdocfech;
    private Long orden;
    private String abreviatura;
    private String comentario;
    private Long estado;
    private String accion;
    private String ipcliente;
    private Long idusuasesion;
    private String flagopiprev;

    public Long getIddocreq(){
        return this.iddocreq;
    }
    public void setIddocreq(Long iddocreq){
        this.iddocreq = iddocreq;
    }
    public Long getIdproceso(){
        return this.idproceso;
    }
    public void setIdproceso(Long idproceso){
        this.idproceso = idproceso;
    }
    public Long getIdautorsanit(){
        return this.idautorsanit;
    }
    public void setIdautorsanit(Long idautorsanit){
        this.idautorsanit = idautorsanit;
    }
    public String getNombrereq(){
        return this.nombrereq;
    }
    public void setNombrereq(String nombrereq){
        this.nombrereq = nombrereq;
    }
    public String getAnotacion(){
        return this.anotacion;
    }
    public void setAnotacion(String anotacion){
        this.anotacion = anotacion;
    }
    public String getFlagoblig(){
        return this.flagoblig;
    }
    public void setFlagoblig(String flagoblig){
        this.flagoblig = flagoblig;
    }
    public String getReqdocfech(){
        return this.reqdocfech;
    }
    public void setReqdocfech(String reqdocfech){
        this.reqdocfech = reqdocfech;
    }
    public Long getOrden(){
        return this.orden;
    }
    public void setOrden(Long orden){
        this.orden = orden;
    }
    public String getAbreviatura(){
        return this.abreviatura;
    }
    public void setAbreviatura(String abreviatura){
        this.abreviatura = abreviatura;
    }
    public String getComentario(){
        return this.comentario;
    }
    public void setComentario(String comentario){
        this.comentario = comentario;
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
    
    public String getIpcliente() {
		return ipcliente;
	}
	public void setIpcliente(String ipcliente) {
		this.ipcliente = ipcliente;
	}
	public Long getIdusuasesion(){
        return this.idusuasesion;
    }
    public void setIdusuasesion(Long idusuasesion){
        this.idusuasesion = idusuasesion;
    }
	public String getFlagopiprev() {
		return flagopiprev;
	}
	public void setFlagopiprev(String flagopiprev) {
		this.flagopiprev = flagopiprev;
	}
    
}

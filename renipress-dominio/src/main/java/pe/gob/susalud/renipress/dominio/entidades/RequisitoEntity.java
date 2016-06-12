package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class RequisitoEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idrequisito;
    private String corequisito;
    private Long idmodulo;
    private String nombre;
    private String descripcion;
    private String instructivo;
    private Long idcodigopadre;
    private Long idcodrelacionado;
    private String flagcant;
    private String flagalgunaespecialidad;
    private Long orden;
    private Long estado;
    private String accion;
    private String ipcliente;
    private Long idusuasesion;

    //private CredencialEntity credencial;
    
//    public CredencialEntity getCredencial() {
//		return credencial;
//	}
//	public void setCredencial(CredencialEntity credencial) {
//		this.credencial = credencial;
//	}
	
	public Long getIdrequisito(){
        return this.idrequisito;
    }
    public void setIdrequisito(Long idrequisito){
        this.idrequisito = idrequisito;
    }
    public String getCorequisito(){
        return this.corequisito;
    }
    public void setCorequisito(String corequisito){
        this.corequisito = corequisito;
    }
    public Long getIdmodulo(){
        return this.idmodulo;
    }
    public void setIdmodulo(Long idmodulo){
        this.idmodulo = idmodulo;
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
    public String getInstructivo(){
        return this.instructivo;
    }
    public void setInstructivo(String instructivo){
        this.instructivo = instructivo;
    }
    public Long getIdcodigopadre(){
        return this.idcodigopadre;
    }
    public void setIdcodigopadre(Long idcodigopadre){
        this.idcodigopadre = idcodigopadre;
    }
    public Long getIdcodrelacionado(){
        return this.idcodrelacionado;
    }
    public void setIdcodrelacionado(Long idcodrelacionado){
        this.idcodrelacionado = idcodrelacionado;
    }
    public String getFlagcant(){
        return this.flagcant;
    }
    public void setFlagcant(String flagcant){
        this.flagcant = flagcant;
    }
    public String getFlagalgunaespecialidad(){
        return this.flagalgunaespecialidad;
    }
    public void setFlagalgunaespecialidad(String flagalgunaespecialidad){
        this.flagalgunaespecialidad = flagalgunaespecialidad;
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
}

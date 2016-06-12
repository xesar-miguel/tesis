package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class RglactividadEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idrglactividad;
    private Long idregla;
    private Long idactividad;
    private String flagobligat;
    private String comentario;
    private Long estado;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdrglactividad(){
        return this.idrglactividad;
    }
    public void setIdrglactividad(Long idrglactividad){
        this.idrglactividad = idrglactividad;
    }
    public Long getIdregla(){
        return this.idregla;
    }
    public void setIdregla(Long idregla){
        this.idregla = idregla;
    }
    public Long getIdactividad(){
        return this.idactividad;
    }
    public void setIdactividad(Long idactividad){
        this.idactividad = idactividad;
    }
    public String getFlagobligat(){
        return this.flagobligat;
    }
    public void setFlagobligat(String flagobligat){
        this.flagobligat = flagobligat;
    }
    public String getComentario(){
        return this.comentario;
    }
    public void setComentario(String comentario){
        this.comentario = comentario;
    }
    
    public Long getEstado() {
		return estado;
	}
	public void setEstado(Long estado) {
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
}

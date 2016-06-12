package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class RglmodupssReqEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idrglmodupssreq;
    private Long reglamodulo_upss;
    private Long idrequisito;
    private String comentario;
    private String flagobligat;
    //private Long idregla;
    private Long estado;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdrglmodupssreq(){
        return this.idrglmodupssreq;
    }
    public void setIdrglmodupssreq(Long idrglmodupssreq){
        this.idrglmodupssreq = idrglmodupssreq;
    }
    public Long getReglamodulo_upss(){
        return this.reglamodulo_upss;
    }
    public void setReglamodulo_upss(Long reglamodulo_upss){
        this.reglamodulo_upss = reglamodulo_upss;
    }
    public Long getIdrequisito(){
        return this.idrequisito;
    }
    public void setIdrequisito(Long idrequisito){
        this.idrequisito = idrequisito;
    }
    public String getComentario(){
        return this.comentario;
    }
    public void setComentario(String comentario){
        this.comentario = comentario;
    }
    public String getFlagobligat(){
        return this.flagobligat;
    }
    public void setFlagobligat(String flagobligat){
        this.flagobligat = flagobligat;
    }
//    public Long getIdregla() {
//		return idregla;
//	}
//	public void setIdregla(Long idregla) {
//		this.idregla = idregla;
//	}
    
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
}

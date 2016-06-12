package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class RequisitoIpressEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idreqipress;
    private Long idipress;
    private Long idrglmodupssreq;
    private Long cantipress;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdreqipress(){
        return this.idreqipress;
    }
    public void setIdreqipress(Long idreqipress){
        this.idreqipress = idreqipress;
    }
    public Long getIdipress(){
        return this.idipress;
    }
    public void setIdipress(Long idipress){
        this.idipress = idipress;
    }
    public Long getIdrglmodupssreq(){
        return this.idrglmodupssreq;
    }
    public void setIdrglmodupssreq(Long idrglmodupssreq){
        this.idrglmodupssreq = idrglmodupssreq;
    }
    public Long getCantipress(){
        return this.cantipress;
    }
    public void setCantipress(Long cantipress){
        this.cantipress = cantipress;
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

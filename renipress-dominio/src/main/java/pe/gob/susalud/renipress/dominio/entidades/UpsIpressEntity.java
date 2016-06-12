package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class UpsIpressEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idupsipress;
    private Long idups;
    private Long idipress;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdupsipress(){
        return this.idupsipress;
    }
    public void setIdupsipress(Long idupsipress){
        this.idupsipress = idupsipress;
    }
    public Long getIdups(){
        return this.idups;
    }
    public void setIdups(Long idups){
        this.idups = idups;
    }
    public Long getIdipress(){
        return this.idipress;
    }
    public void setIdipress(Long idipress){
        this.idipress = idipress;
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

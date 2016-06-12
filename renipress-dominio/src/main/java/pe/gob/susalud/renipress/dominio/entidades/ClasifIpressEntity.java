package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class ClasifIpressEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idclasifipress;
    private Long idipress;
    private Long idclasif;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdclasifipress(){
        return this.idclasifipress;
    }
    public void setIdclasifipress(Long idclasifipress){
        this.idclasifipress = idclasifipress;
    }
    public Long getIdipress(){
        return this.idipress;
    }
    public void setIdipress(Long idipress){
        this.idipress = idipress;
    }
    public Long getIdclasif(){
        return this.idclasif;
    }
    public void setIdclasif(Long idclasif){
        this.idclasif = idclasif;
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

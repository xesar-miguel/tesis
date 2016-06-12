package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class ActividadIpressEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idactipress;
    private Long idipress;
    private Long idactividad;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdactipress(){
        return this.idactipress;
    }
    public void setIdactipress(Long idactipress){
        this.idactipress = idactipress;
    }
    public Long getIdipress(){
        return this.idipress;
    }
    public void setIdipress(Long idipress){
        this.idipress = idipress;
    }
    public Long getIdactividad(){
        return this.idactividad;
    }
    public void setIdactividad(Long idactividad){
        this.idactividad = idactividad;
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

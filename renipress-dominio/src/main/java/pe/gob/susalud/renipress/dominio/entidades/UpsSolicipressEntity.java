package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class UpsSolicipressEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idupssolipress;
    private Long idups;
    private Long idsolcipress;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdupssolipress(){
        return this.idupssolipress;
    }
    public void setIdupssolipress(Long idupssolipress){
        this.idupssolipress = idupssolipress;
    }
    public Long getIdups(){
        return this.idups;
    }
    public void setIdups(Long idups){
        this.idups = idups;
    }
    public Long getIdsolcipress(){
        return this.idsolcipress;
    }
    public void setIdsolcipress(Long idsolcipress){
        this.idsolcipress = idsolcipress;
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

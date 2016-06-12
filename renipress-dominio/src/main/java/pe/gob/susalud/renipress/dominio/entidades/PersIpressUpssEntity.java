package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class PersIpressUpssEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idperipressupss;
    private Long idpersipress;
    private Long idupss;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdperipressupss(){
        return this.idperipressupss;
    }
    public void setIdperipressupss(Long idperipressupss){
        this.idperipressupss = idperipressupss;
    }
    public Long getIdpersipress(){
        return this.idpersipress;
    }
    public void setIdpersipress(Long idpersipress){
        this.idpersipress = idpersipress;
    }
    public Long getIdupss(){
        return this.idupss;
    }
    public void setIdupss(Long idupss){
        this.idupss = idupss;
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

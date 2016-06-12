package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class PersSolipressUpssEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idpersolipressupss;
    private Long idpersolipress;
    private Long idupss;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdpersolipressupss(){
        return this.idpersolipressupss;
    }
    public void setIdpersolipressupss(Long idpersolipressupss){
        this.idpersolipressupss = idpersolipressupss;
    }
    public Long getIdpersolipress(){
        return this.idpersolipress;
    }
    public void setIdpersolipress(Long idpersolipress){
        this.idpersolipress = idpersolipress;
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

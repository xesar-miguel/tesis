package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class PersSolipressCompEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idperssolipresscomp;
    private Long idpersolipress;
    private Long idcompetencias;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdperssolipresscomp(){
        return this.idperssolipresscomp;
    }
    public void setIdperssolipresscomp(Long idperssolipresscomp){
        this.idperssolipresscomp = idperssolipresscomp;
    }
    public Long getIdpersolipress(){
        return this.idpersolipress;
    }
    public void setIdpersolipress(Long idpersolipress){
        this.idpersolipress = idpersolipress;
    }
    public Long getIdcompetencias(){
        return this.idcompetencias;
    }
    public void setIdcompetencias(Long idcompetencias){
        this.idcompetencias = idcompetencias;
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

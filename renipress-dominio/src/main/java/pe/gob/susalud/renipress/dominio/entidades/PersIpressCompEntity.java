package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class PersIpressCompEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idpersipresscomp;
    private Long idpersipress;
    private Long idcompetencias;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdpersipresscomp(){
        return this.idpersipresscomp;
    }
    public void setIdpersipresscomp(Long idpersipresscomp){
        this.idpersipresscomp = idpersipresscomp;
    }
    public Long getIdpersipress(){
        return this.idpersipress;
    }
    public void setIdpersipress(Long idpersipress){
        this.idpersipress = idpersipress;
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

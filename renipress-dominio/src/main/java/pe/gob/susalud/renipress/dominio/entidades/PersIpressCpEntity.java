package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class PersIpressCpEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idpersipresscp;
    private Long idpersipress;
    private Long idcolegprof;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdpersipresscp(){
        return this.idpersipresscp;
    }
    public void setIdpersipresscp(Long idpersipresscp){
        this.idpersipresscp = idpersipresscp;
    }
    public Long getIdpersipress(){
        return this.idpersipress;
    }
    public void setIdpersipress(Long idpersipress){
        this.idpersipress = idpersipress;
    }
    public Long getIdcolegprof(){
        return this.idcolegprof;
    }
    public void setIdcolegprof(Long idcolegprof){
        this.idcolegprof = idcolegprof;
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

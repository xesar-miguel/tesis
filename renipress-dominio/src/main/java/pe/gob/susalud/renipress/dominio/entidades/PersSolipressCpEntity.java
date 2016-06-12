package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class PersSolipressCpEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idperssolipresscp;
    private Long idpersolipress;
    private Long idcolegprof;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdperssolipresscp(){
        return this.idperssolipresscp;
    }
    public void setIdperssolipresscp(Long idperssolipresscp){
        this.idperssolipresscp = idperssolipresscp;
    }
    public Long getIdpersolipress(){
        return this.idpersolipress;
    }
    public void setIdpersolipress(Long idpersolipress){
        this.idpersolipress = idpersolipress;
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

package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class EquipoOperIntegEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idequipooperintg;
    private Long idequipooper;
    private Long idpersona;
    private Long cargo;
    private String flageje;
    private Long estado;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdequipooperintg(){
        return this.idequipooperintg;
    }
    public void setIdequipooperintg(Long idequipooperintg){
        this.idequipooperintg = idequipooperintg;
    }
    public Long getIdequipooper(){
        return this.idequipooper;
    }
    public void setIdequipooper(Long idequipooper){
        this.idequipooper = idequipooper;
    }
    public Long getIdpersona(){
        return this.idpersona;
    }
    public void setIdpersona(Long idpersona){
        this.idpersona = idpersona;
    }
    public Long getCargo(){
        return this.cargo;
    }
    public void setCargo(Long cargo){
        this.cargo = cargo;
    }
    public String getFlageje(){
        return this.flageje;
    }
    public void setFlageje(String flageje){
        this.flageje = flageje;
    }
    public Long getEstado(){
        return this.estado;
    }
    public void setEstado(Long estado){
        this.estado = estado;
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

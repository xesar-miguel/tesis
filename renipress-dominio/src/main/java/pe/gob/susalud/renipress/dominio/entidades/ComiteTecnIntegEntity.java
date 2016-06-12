package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class ComiteTecnIntegEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idcomittecint;
    private Long idcomite;
    private Long idpersona;
    private String cargo;
    private String accion;
    private String cliente;
    private String usuamof;
    private Long idusuasesion;

    public Long getIdcomittecint(){
        return this.idcomittecint;
    }
    public void setIdcomittecint(Long idcomittecint){
        this.idcomittecint = idcomittecint;
    }
    public Long getIdcomite(){
        return this.idcomite;
    }
    public void setIdcomite(Long idcomite){
        this.idcomite = idcomite;
    }
    public Long getIdpersona(){
        return this.idpersona;
    }
    public void setIdpersona(Long idpersona){
        this.idpersona = idpersona;
    }
    public String getCargo(){
        return this.cargo;
    }
    public void setCargo(String cargo){
        this.cargo = cargo;
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
    public String getUsuamof(){
        return this.usuamof;
    }
    public void setUsuamof(String usuamof){
        this.usuamof = usuamof;
    }
    public Long getIdusuasesion(){
        return this.idusuasesion;
    }
    public void setIdusuasesion(Long idusuasesion){
        this.idusuasesion = idusuasesion;
    }
}

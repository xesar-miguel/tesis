package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class PersonalSolicIpressEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idpersonalsolicipress;
    private Long idsolicipress;
    private Long idpersona;
    private Long rne;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdpersonalsolicipress(){
        return this.idpersonalsolicipress;
    }
    public void setIdpersonalsolicipress(Long idpersonalsolicipress){
        this.idpersonalsolicipress = idpersonalsolicipress;
    }
    public Long getIdsolicipress(){
        return this.idsolicipress;
    }
    public void setIdsolicipress(Long idsolicipress){
        this.idsolicipress = idsolicipress;
    }
    public Long getIdpersona(){
        return this.idpersona;
    }
    public void setIdpersona(Long idpersona){
        this.idpersona = idpersona;
    }
    public Long getRne(){
        return this.rne;
    }
    public void setRne(Long rne){
        this.rne = rne;
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

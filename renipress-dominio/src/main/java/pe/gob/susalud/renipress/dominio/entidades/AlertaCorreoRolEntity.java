package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class AlertaCorreoRolEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idalertcorreorol;
    private Long idtareacorreo;
    private Long idperfil;
    private Long estado;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdalertcorreorol(){
        return this.idalertcorreorol;
    }
    public void setIdalertcorreorol(Long idalertcorreorol){
        this.idalertcorreorol = idalertcorreorol;
    }
    public Long getIdtareacorreo(){
        return this.idtareacorreo;
    }
    public void setIdtareacorreo(Long idtareacorreo){
        this.idtareacorreo = idtareacorreo;
    }
    public Long getIdperfil(){
        return this.idperfil;
    }
    public void setIdperfil(Long idperfil){
        this.idperfil = idperfil;
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

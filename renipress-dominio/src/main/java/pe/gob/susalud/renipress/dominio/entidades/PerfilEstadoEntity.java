package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class PerfilEstadoEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idperfilestado;
    private Long idperfil;
    private Long idestado;
    private Long orden;
    private Long estado;

    public Long getIdperfilestado(){
        return this.idperfilestado;
    }
    public void setIdperfilestado(Long idperfilestado){
        this.idperfilestado = idperfilestado;
    }
    public Long getIdperfil(){
        return this.idperfil;
    }
    public void setIdperfil(Long idperfil){
        this.idperfil = idperfil;
    }
    public Long getIdestado(){
        return this.idestado;
    }
    public void setIdestado(Long idestado){
        this.idestado = idestado;
    }
    public Long getOrden(){
        return this.orden;
    }
    public void setOrden(Long orden){
        this.orden = orden;
    }
    public Long getEstado(){
        return this.estado;
    }
    public void setEstado(Long estado){
        this.estado = estado;
    }
}

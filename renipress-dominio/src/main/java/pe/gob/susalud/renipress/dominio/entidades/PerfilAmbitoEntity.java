package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class PerfilAmbitoEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idperfilambito;
    private Long idperfil;
    private Long tipoambito;
    private Long estado;

    public Long getIdperfilambito(){
        return this.idperfilambito;
    }
    public void setIdperfilambito(Long idperfilambito){
        this.idperfilambito = idperfilambito;
    }
    public Long getIdperfil(){
        return this.idperfil;
    }
    public void setIdperfil(Long idperfil){
        this.idperfil = idperfil;
    }
    public Long getTipoambito(){
        return this.tipoambito;
    }
    public void setTipoambito(Long tipoambito){
        this.tipoambito = tipoambito;
    }
    public Long getEstado(){
        return this.estado;
    }
    public void setEstado(Long estado){
        this.estado = estado;
    }
}

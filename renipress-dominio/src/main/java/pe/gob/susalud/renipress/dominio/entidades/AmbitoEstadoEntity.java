package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class AmbitoEstadoEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idambitoestado;
    private Long idestado;
    private Long tipoambito;
    private String estado;

    public Long getIdambitoestado(){
        return this.idambitoestado;
    }
    public void setIdambitoestado(Long idambitoestado){
        this.idambitoestado = idambitoestado;
    }
    public Long getIdestado(){
        return this.idestado;
    }
    public void setIdestado(Long idestado){
        this.idestado = idestado;
    }
    public Long getTipoambito(){
        return this.tipoambito;
    }
    public void setTipoambito(Long tipoambito){
        this.tipoambito = tipoambito;
    }
    public String getEstado(){
        return this.estado;
    }
    public void setEstado(String estado){
        this.estado = estado;
    }
}

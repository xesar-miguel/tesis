package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class EstadoEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idestado;
    private Long idproceso;
    private Long estado;
    private String descripcion;

    public Long getIdestado(){
        return this.idestado;
    }
    public void setIdestado(Long idestado){
        this.idestado = idestado;
    }
    public Long getIdproceso(){
        return this.idproceso;
    }
    public void setIdproceso(Long idproceso){
        this.idproceso = idproceso;
    }
    public Long getEstado(){
        return this.estado;
    }
    public void setEstado(Long estado){
        this.estado = estado;
    }
    public String getDescripcion(){
        return this.descripcion;
    }
    public void setDescripcion(String descripcion){
        this.descripcion = descripcion;
    }
}

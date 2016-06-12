package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class TareaEstadoEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idtareaestado;
    private Long idestado;
    private Long idtarea;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdtareaestado(){
        return this.idtareaestado;
    }
    public void setIdtareaestado(Long idtareaestado){
        this.idtareaestado = idtareaestado;
    }
    public Long getIdestado(){
        return this.idestado;
    }
    public void setIdestado(Long idestado){
        this.idestado = idestado;
    }
    public Long getIdtarea(){
        return this.idtarea;
    }
    public void setIdtarea(Long idtarea){
        this.idtarea = idtarea;
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

package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class TareasPrecedentesEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idtareaprecedent;
    private Long idtareaactual;
    private Long idtareaanterior;
    private Long estado;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdtareaprecedent(){
        return this.idtareaprecedent;
    }
    public void setIdtareaprecedent(Long idtareaprecedent){
        this.idtareaprecedent = idtareaprecedent;
    }
    public Long getIdtareaactual(){
        return this.idtareaactual;
    }
    public void setIdtareaactual(Long idtareaactual){
        this.idtareaactual = idtareaactual;
    }
    public Long getIdtareaanterior(){
        return this.idtareaanterior;
    }
    public void setIdtareaanterior(Long idtareaanterior){
        this.idtareaanterior = idtareaanterior;
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

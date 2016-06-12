package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class AlertaCorreoEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idalertcorreo;
    private Long idtarea;
    private Long numdiasprev;
    private String asunto;
    private String mensajcorreo;
    private Long idtareasig;
    private Long idestadosig;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdalertcorreo(){
        return this.idalertcorreo;
    }
    public void setIdalertcorreo(Long idalertcorreo){
        this.idalertcorreo = idalertcorreo;
    }
    public Long getIdtarea(){
        return this.idtarea;
    }
    public void setIdtarea(Long idtarea){
        this.idtarea = idtarea;
    }
    public Long getNumdiasprev(){
        return this.numdiasprev;
    }
    public void setNumdiasprev(Long numdiasprev){
        this.numdiasprev = numdiasprev;
    }
    public String getAsunto(){
        return this.asunto;
    }
    public void setAsunto(String asunto){
        this.asunto = asunto;
    }
    public String getMensajcorreo(){
        return this.mensajcorreo;
    }
    public void setMensajcorreo(String mensajcorreo){
        this.mensajcorreo = mensajcorreo;
    }
    public Long getIdtareasig(){
        return this.idtareasig;
    }
    public void setIdtareasig(Long idtareasig){
        this.idtareasig = idtareasig;
    }
    public Long getIdestadosig(){
        return this.idestadosig;
    }
    public void setIdestadosig(Long idestadosig){
        this.idestadosig = idestadosig;
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

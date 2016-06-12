package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class AlertaMensajeEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idalertmensaj;
    private Long idtarea;
    private String mensaje;
    private Long idtareasig;
    private Long idestadosig;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdalertmensaj(){
        return this.idalertmensaj;
    }
    public void setIdalertmensaj(Long idalertmensaj){
        this.idalertmensaj = idalertmensaj;
    }
    public Long getIdtarea(){
        return this.idtarea;
    }
    public void setIdtarea(Long idtarea){
        this.idtarea = idtarea;
    }
    public String getMensaje(){
        return this.mensaje;
    }
    public void setMensaje(String mensaje){
        this.mensaje = mensaje;
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

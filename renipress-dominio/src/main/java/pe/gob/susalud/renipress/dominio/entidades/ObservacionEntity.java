package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class ObservacionEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idobservacion;
    private Long idsolicitud;
    private Long observacion;
    private Long numero;
    private String descripcion;
    private String flagrechazo;
    private Long estado;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdobservacion(){
        return this.idobservacion;
    }
    public void setIdobservacion(Long idobservacion){
        this.idobservacion = idobservacion;
    }
    public Long getIdsolicitud(){
        return this.idsolicitud;
    }
    public void setIdsolicitud(Long idsolicitud){
        this.idsolicitud = idsolicitud;
    }
    public Long getObservacion(){
        return this.observacion;
    }
    public void setObservacion(Long observacion){
        this.observacion = observacion;
    }
    public Long getNumero(){
        return this.numero;
    }
    public void setNumero(Long numero){
        this.numero = numero;
    }
    public String getDescripcion(){
        return this.descripcion;
    }
    public void setDescripcion(String descripcion){
        this.descripcion = descripcion;
    }
    public String getFlagrechazo(){
        return this.flagrechazo;
    }
    public void setFlagrechazo(String flagrechazo){
        this.flagrechazo = flagrechazo;
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

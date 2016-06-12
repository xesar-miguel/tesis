package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class ErrorLogEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long iderror;
    private Long idcaterr;
    private String transaccion;
    private String mensajetraza;
    private String acciones;
    private Long estado;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIderror(){
        return this.iderror;
    }
    public void setIderror(Long iderror){
        this.iderror = iderror;
    }
    public Long getIdcaterr(){
        return this.idcaterr;
    }
    public void setIdcaterr(Long idcaterr){
        this.idcaterr = idcaterr;
    }
    public String getTransaccion(){
        return this.transaccion;
    }
    public void setTransaccion(String transaccion){
        this.transaccion = transaccion;
    }
    public String getMensajetraza(){
        return this.mensajetraza;
    }
    public void setMensajetraza(String mensajetraza){
        this.mensajetraza = mensajetraza;
    }
    public String getAcciones(){
        return this.acciones;
    }
    public void setAcciones(String acciones){
        this.acciones = acciones;
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

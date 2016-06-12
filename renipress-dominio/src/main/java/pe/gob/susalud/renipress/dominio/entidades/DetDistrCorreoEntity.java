package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class DetDistrCorreoEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long iddistrcorreo;
    private Long idalertcorreo;
    private Long idsolcreport;
    private Long districorreo;
    private String correoelectr;
    private Long estado;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIddistrcorreo(){
        return this.iddistrcorreo;
    }
    public void setIddistrcorreo(Long iddistrcorreo){
        this.iddistrcorreo = iddistrcorreo;
    }
    public Long getIdalertcorreo(){
        return this.idalertcorreo;
    }
    public void setIdalertcorreo(Long idalertcorreo){
        this.idalertcorreo = idalertcorreo;
    }
    public Long getIdsolcreport(){
        return this.idsolcreport;
    }
    public void setIdsolcreport(Long idsolcreport){
        this.idsolcreport = idsolcreport;
    }
    public Long getDistricorreo(){
        return this.districorreo;
    }
    public void setDistricorreo(Long districorreo){
        this.districorreo = districorreo;
    }
    public String getCorreoelectr(){
        return this.correoelectr;
    }
    public void setCorreoelectr(String correoelectr){
        this.correoelectr = correoelectr;
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

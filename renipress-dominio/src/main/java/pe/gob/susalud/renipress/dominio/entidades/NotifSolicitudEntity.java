package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class NotifSolicitudEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idnotifsolicit;
    private Long idsolicitud;
    private String telefono1;
    private String telefono2;
    private String correoelect1;
    private String correoelect2;
    private Long iddireccion;
    private String direccion;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdnotifsolicit(){
        return this.idnotifsolicit;
    }
    public void setIdnotifsolicit(Long idnotifsolicit){
        this.idnotifsolicit = idnotifsolicit;
    }
    public Long getIdsolicitud(){
        return this.idsolicitud;
    }
    public void setIdsolicitud(Long idsolicitud){
        this.idsolicitud = idsolicitud;
    }
    public String getTelefono1(){
        return this.telefono1;
    }
    public void setTelefono1(String telefono1){
        this.telefono1 = telefono1;
    }
    public String getTelefono2(){
        return this.telefono2;
    }
    public void setTelefono2(String telefono2){
        this.telefono2 = telefono2;
    }
    public String getCorreoelect1(){
        return this.correoelect1;
    }
    public void setCorreoelect1(String correoelect1){
        this.correoelect1 = correoelect1;
    }
    public String getCorreoelect2(){
        return this.correoelect2;
    }
    public void setCorreoelect2(String correoelect2){
        this.correoelect2 = correoelect2;
    }
    public Long getIddireccion(){
        return this.iddireccion;
    }
    public void setIddireccion(Long iddireccion){
        this.iddireccion = iddireccion;
    }
    public String getDireccion(){
        return this.direccion;
    }
    public void setDireccion(String direccion){
        this.direccion = direccion;
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

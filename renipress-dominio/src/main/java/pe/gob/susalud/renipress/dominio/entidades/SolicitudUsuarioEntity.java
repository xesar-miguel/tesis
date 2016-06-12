package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class SolicitudUsuarioEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idsolicusua;
    private Long idperfil;
    private Long idpersona;
    private String telefono;
    private String correoelectr;
    private Long idevalua;
    private String motivo;
    private java.util.Date fechasolicit;
    private String usuario;
    private Long estado;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdsolicusua(){
        return this.idsolicusua;
    }
    public void setIdsolicusua(Long idsolicusua){
        this.idsolicusua = idsolicusua;
    }
    public Long getIdperfil(){
        return this.idperfil;
    }
    public void setIdperfil(Long idperfil){
        this.idperfil = idperfil;
    }
    public Long getIdpersona(){
        return this.idpersona;
    }
    public void setIdpersona(Long idpersona){
        this.idpersona = idpersona;
    }
    public String getTelefono(){
        return this.telefono;
    }
    public void setTelefono(String telefono){
        this.telefono = telefono;
    }
    public String getCorreoelectr(){
        return this.correoelectr;
    }
    public void setCorreoelectr(String correoelectr){
        this.correoelectr = correoelectr;
    }
    public Long getIdevalua(){
        return this.idevalua;
    }
    public void setIdevalua(Long idevalua){
        this.idevalua = idevalua;
    }
    public String getMotivo(){
        return this.motivo;
    }
    public void setMotivo(String motivo){
        this.motivo = motivo;
    }
    public java.util.Date getFechasolicit(){
        return this.fechasolicit;
    }
    public void setFechasolicit(java.util.Date fechasolicit){
        this.fechasolicit = fechasolicit;
    }
    public String getUsuario(){
        return this.usuario;
    }
    public void setUsuario(String usuario){
        this.usuario = usuario;
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

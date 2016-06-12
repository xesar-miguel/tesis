package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class NotificacionEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idnotificacion;
    private Long notificacion;
    private String correocopia;
    private String asunto;
    private String titulo;
    private String mensaje;
    private String firma;
    private Long estado;

    public Long getIdnotificacion(){
        return this.idnotificacion;
    }
    public void setIdnotificacion(Long idnotificacion){
        this.idnotificacion = idnotificacion;
    }
    public Long getNotificacion(){
        return this.notificacion;
    }
    public void setNotificacion(Long notificacion){
        this.notificacion = notificacion;
    }
    public String getCorreocopia(){
        return this.correocopia;
    }
    public void setCorreocopia(String correocopia){
        this.correocopia = correocopia;
    }
    public String getAsunto(){
        return this.asunto;
    }
    public void setAsunto(String asunto){
        this.asunto = asunto;
    }
    public String getTitulo(){
        return this.titulo;
    }
    public void setTitulo(String titulo){
        this.titulo = titulo;
    }
    public String getMensaje(){
        return this.mensaje;
    }
    public void setMensaje(String mensaje){
        this.mensaje = mensaje;
    }
    public String getFirma(){
        return this.firma;
    }
    public void setFirma(String firma){
        this.firma = firma;
    }
    public Long getEstado(){
        return this.estado;
    }
    public void setEstado(Long estado){
        this.estado = estado;
    }
}

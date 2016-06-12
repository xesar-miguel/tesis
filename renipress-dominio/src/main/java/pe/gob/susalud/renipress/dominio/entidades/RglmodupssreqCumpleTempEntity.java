package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class RglmodupssreqCumpleTempEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long rglmodupssreq_cumple;
    private Long idrglmodupssreq_temp;
    private Long idsolicitud;
    private String flagcumple;
    private String comentario;

    public Long getRglmodupssreq_cumple(){
        return this.rglmodupssreq_cumple;
    }
    public void setRglmodupssreq_cumple(Long rglmodupssreq_cumple){
        this.rglmodupssreq_cumple = rglmodupssreq_cumple;
    }
    public Long getIdrglmodupssreq_temp(){
        return this.idrglmodupssreq_temp;
    }
    public void setIdrglmodupssreq_temp(Long idrglmodupssreq_temp){
        this.idrglmodupssreq_temp = idrglmodupssreq_temp;
    }
    public Long getIdsolicitud(){
        return this.idsolicitud;
    }
    public void setIdsolicitud(Long idsolicitud){
        this.idsolicitud = idsolicitud;
    }
    public String getFlagcumple(){
        return this.flagcumple;
    }
    public void setFlagcumple(String flagcumple){
        this.flagcumple = flagcumple;
    }
    public String getComentario(){
        return this.comentario;
    }
    public void setComentario(String comentario){
        this.comentario = comentario;
    }
}

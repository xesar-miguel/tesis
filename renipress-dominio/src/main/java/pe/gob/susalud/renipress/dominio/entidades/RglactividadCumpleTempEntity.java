package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class RglactividadCumpleTempEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idrglactividad_cumple;
    private Long idrglactividad_oblig;
    private Long idsolicitud;
    private String flagcumple;

    public Long getIdrglactividad_cumple(){
        return this.idrglactividad_cumple;
    }
    public void setIdrglactividad_cumple(Long idrglactividad_cumple){
        this.idrglactividad_cumple = idrglactividad_cumple;
    }
    public Long getIdrglactividad_oblig(){
        return this.idrglactividad_oblig;
    }
    public void setIdrglactividad_oblig(Long idrglactividad_oblig){
        this.idrglactividad_oblig = idrglactividad_oblig;
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
}

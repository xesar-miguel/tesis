package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class RglactividadObligTempEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idrglactividad_oblig;
    private Long idrglactividad;

    public Long getIdrglactividad_oblig(){
        return this.idrglactividad_oblig;
    }
    public void setIdrglactividad_oblig(Long idrglactividad_oblig){
        this.idrglactividad_oblig = idrglactividad_oblig;
    }
    public Long getIdrglactividad(){
        return this.idrglactividad;
    }
    public void setIdrglactividad(Long idrglactividad){
        this.idrglactividad = idrglactividad;
    }
}

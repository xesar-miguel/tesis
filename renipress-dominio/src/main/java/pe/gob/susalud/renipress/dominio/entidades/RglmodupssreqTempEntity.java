package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class RglmodupssreqTempEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idrglmodupssreq_temp;
    private Long idrglmodupssreq;
    private Long idregla;
    private Long idmodulo;
    private Long idupss;
    private Long idrequisito;
    private String flagoblig;
    private String flagalgunaespecialidad;
    private Long ordenreq;

    public Long getIdrglmodupssreq_temp(){
        return this.idrglmodupssreq_temp;
    }
    public void setIdrglmodupssreq_temp(Long idrglmodupssreq_temp){
        this.idrglmodupssreq_temp = idrglmodupssreq_temp;
    }
    public Long getIdrglmodupssreq(){
        return this.idrglmodupssreq;
    }
    public void setIdrglmodupssreq(Long idrglmodupssreq){
        this.idrglmodupssreq = idrglmodupssreq;
    }
    public Long getIdregla(){
        return this.idregla;
    }
    public void setIdregla(Long idregla){
        this.idregla = idregla;
    }
    public Long getIdmodulo(){
        return this.idmodulo;
    }
    public void setIdmodulo(Long idmodulo){
        this.idmodulo = idmodulo;
    }
    public Long getIdupss(){
        return this.idupss;
    }
    public void setIdupss(Long idupss){
        this.idupss = idupss;
    }
    public Long getIdrequisito(){
        return this.idrequisito;
    }
    public void setIdrequisito(Long idrequisito){
        this.idrequisito = idrequisito;
    }
    public String getFlagoblig(){
        return this.flagoblig;
    }
    public void setFlagoblig(String flagoblig){
        this.flagoblig = flagoblig;
    }
    public String getFlagalgunaespecialidad(){
        return this.flagalgunaespecialidad;
    }
    public void setFlagalgunaespecialidad(String flagalgunaespecialidad){
        this.flagalgunaespecialidad = flagalgunaespecialidad;
    }
    public Long getOrdenreq(){
        return this.ordenreq;
    }
    public void setOrdenreq(Long ordenreq){
        this.ordenreq = ordenreq;
    }
}

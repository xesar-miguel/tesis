package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class IpressEspecialidadEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idespipress;
    private Long idespecialidad;
    private Long idipress;
    private Long idcoleprof;
    private Long idestado;

    public Long getIdespipress(){
        return this.idespipress;
    }
    public void setIdespipress(Long idespipress){
        this.idespipress = idespipress;
    }
    public Long getIdespecialidad(){
        return this.idespecialidad;
    }
    public void setIdespecialidad(Long idespecialidad){
        this.idespecialidad = idespecialidad;
    }
    public Long getIdipress(){
        return this.idipress;
    }
    public void setIdipress(Long idipress){
        this.idipress = idipress;
    }
    public Long getIdcoleprof(){
        return this.idcoleprof;
    }
    public void setIdcoleprof(Long idcoleprof){
        this.idcoleprof = idcoleprof;
    }
    public Long getIdestado(){
        return this.idestado;
    }
    public void setIdestado(Long idestado){
        this.idestado = idestado;
    }
}

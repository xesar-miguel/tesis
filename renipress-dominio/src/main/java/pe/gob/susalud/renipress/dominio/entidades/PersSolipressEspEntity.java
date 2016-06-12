package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class PersSolipressEspEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idperssolipressesp;
    private Long idpersolipress;
    private Long idespecialidad;

    public Long getIdperssolipressesp(){
        return this.idperssolipressesp;
    }
    public void setIdperssolipressesp(Long idperssolipressesp){
        this.idperssolipressesp = idperssolipressesp;
    }
    public Long getIdpersolipress(){
        return this.idpersolipress;
    }
    public void setIdpersolipress(Long idpersolipress){
        this.idpersolipress = idpersolipress;
    }
    public Long getIdespecialidad(){
        return this.idespecialidad;
    }
    public void setIdespecialidad(Long idespecialidad){
        this.idespecialidad = idespecialidad;
    }
}

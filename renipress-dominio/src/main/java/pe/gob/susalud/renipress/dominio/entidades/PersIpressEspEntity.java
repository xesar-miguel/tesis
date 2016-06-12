package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class PersIpressEspEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idpersipressesp;
    private Long idpersipress;
    private Long idespecialidad;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdpersipressesp(){
        return this.idpersipressesp;
    }
    public void setIdpersipressesp(Long idpersipressesp){
        this.idpersipressesp = idpersipressesp;
    }
    public Long getIdpersipress(){
        return this.idpersipress;
    }
    public void setIdpersipress(Long idpersipress){
        this.idpersipress = idpersipress;
    }
    public Long getIdespecialidad(){
        return this.idespecialidad;
    }
    public void setIdespecialidad(Long idespecialidad){
        this.idespecialidad = idespecialidad;
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

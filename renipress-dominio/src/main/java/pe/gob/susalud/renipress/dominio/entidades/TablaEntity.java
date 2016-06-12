package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class TablaEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idtabla;
    private String nombre;
    private String logica;

    public Long getIdtabla(){
        return this.idtabla;
    }
    public void setIdtabla(Long idtabla){
        this.idtabla = idtabla;
    }
    public String getNombre(){
        return this.nombre;
    }
    public void setNombre(String nombre){
        this.nombre = nombre;
    }
    public String getLogica(){
        return this.logica;
    }
    public void setLogica(String logica){
        this.logica = logica;
    }
}

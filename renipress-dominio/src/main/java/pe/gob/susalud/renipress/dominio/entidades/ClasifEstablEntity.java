package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class ClasifEstablEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idclasif;
    private Long establec;
    private String descripcion;
    private Long estado;

    public Long getIdclasif(){
        return this.idclasif;
    }
    public void setIdclasif(Long idclasif){
        this.idclasif = idclasif;
    }
    public Long getEstablec(){
        return this.establec;
    }
    public void setEstablec(Long establec){
        this.establec = establec;
    }
    public String getDescripcion(){
        return this.descripcion;
    }
    public void setDescripcion(String descripcion){
        this.descripcion = descripcion;
    }
    public Long getEstado(){
        return this.estado;
    }
    public void setEstado(Long estado){
        this.estado = estado;
    }
}

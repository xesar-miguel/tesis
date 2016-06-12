package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class AutorSanitariaEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idautoridadsanit;
    private String nombre;
    private String direccion;
    private String telefono;
    private Long autoridadsanit;
    private Long estado;
    private String abreviatura;
    private String coordenada;

    public Long getIdautoridadsanit(){
        return this.idautoridadsanit;
    }
    public void setIdautoridadsanit(Long idautoridadsanit){
        this.idautoridadsanit = idautoridadsanit;
    }
    public String getNombre(){
        return this.nombre;
    }
    public void setNombre(String nombre){
        this.nombre = nombre;
    }
    public String getDireccion(){
        return this.direccion;
    }
    public void setDireccion(String direccion){
        this.direccion = direccion;
    }
    public String getTelefono(){
        return this.telefono;
    }
    public void setTelefono(String telefono){
        this.telefono = telefono;
    }
    public Long getAutoridadsanit(){
        return this.autoridadsanit;
    }
    public void setAutoridadsanit(Long autoridadsanit){
        this.autoridadsanit = autoridadsanit;
    }
    public Long getEstado(){
        return this.estado;
    }
    public void setEstado(Long estado){
        this.estado = estado;
    }
    public String getAbreviatura(){
        return this.abreviatura;
    }
    public void setAbreviatura(String abreviatura){
        this.abreviatura = abreviatura;
    }
    public String getCoordenada(){
        return this.coordenada;
    }
    public void setCoordenada(String coordenada){
        this.coordenada = coordenada;
    }
}

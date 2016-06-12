package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class RedEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idred;
    private String codred;
    private Long idautor_sanitaria;
    private String nombre;
    private String descripcorta;
    private String resolfuncio;
    private String direccion;
    private String departamento;
    private String provincia;
    private String distrito;
    private String responsable;
    private String telefono;
    private String correoelect;
    private Long estado;
    private String areg;
    private String amod;

    public Long getIdred(){
        return this.idred;
    }
    public void setIdred(Long idred){
        this.idred = idred;
    }
    public String getCodred(){
        return this.codred;
    }
    public void setCodred(String codred){
        this.codred = codred;
    }
    public Long getIdautor_sanitaria(){
        return this.idautor_sanitaria;
    }
    public void setIdautor_sanitaria(Long idautor_sanitaria){
        this.idautor_sanitaria = idautor_sanitaria;
    }
    public String getNombre(){
        return this.nombre;
    }
    public void setNombre(String nombre){
        this.nombre = nombre;
    }
    public String getDescripcorta(){
        return this.descripcorta;
    }
    public void setDescripcorta(String descripcorta){
        this.descripcorta = descripcorta;
    }
    public String getResolfuncio(){
        return this.resolfuncio;
    }
    public void setResolfuncio(String resolfuncio){
        this.resolfuncio = resolfuncio;
    }
    public String getDireccion(){
        return this.direccion;
    }
    public void setDireccion(String direccion){
        this.direccion = direccion;
    }
    public String getDepartamento(){
        return this.departamento;
    }
    public void setDepartamento(String departamento){
        this.departamento = departamento;
    }
    public String getProvincia(){
        return this.provincia;
    }
    public void setProvincia(String provincia){
        this.provincia = provincia;
    }
    public String getDistrito(){
        return this.distrito;
    }
    public void setDistrito(String distrito){
        this.distrito = distrito;
    }
    public String getResponsable(){
        return this.responsable;
    }
    public void setResponsable(String responsable){
        this.responsable = responsable;
    }
    public String getTelefono(){
        return this.telefono;
    }
    public void setTelefono(String telefono){
        this.telefono = telefono;
    }
    public String getCorreoelect(){
        return this.correoelect;
    }
    public void setCorreoelect(String correoelect){
        this.correoelect = correoelect;
    }
    public Long getEstado(){
        return this.estado;
    }
    public void setEstado(Long estado){
        this.estado = estado;
    }
    public String getAreg(){
        return this.areg;
    }
    public void setAreg(String areg){
        this.areg = areg;
    }
    public String getAmod(){
        return this.amod;
    }
    public void setAmod(String amod){
        this.amod = amod;
    }
}

package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class ClasEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idclas;
    private String descripcion;
    private Long idautorsanit;
    private String departamento;
    private String provincia;
    private Long estado;

    public Long getIdclas(){
        return this.idclas;
    }
    public void setIdclas(Long idclas){
        this.idclas = idclas;
    }
    public String getDescripcion(){
        return this.descripcion;
    }
    public void setDescripcion(String descripcion){
        this.descripcion = descripcion;
    }
    public Long getIdautorsanit(){
        return this.idautorsanit;
    }
    public void setIdautorsanit(Long idautorsanit){
        this.idautorsanit = idautorsanit;
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
    public Long getEstado(){
        return this.estado;
    }
    public void setEstado(Long estado){
        this.estado = estado;
    }
}

package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class UbigeoEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idubigeo;
    private String reniec;
    private String inei;
    private String departamento;
    private String provincia;
    private String distrito;

    public Long getIdubigeo(){
        return this.idubigeo;
    }
    public void setIdubigeo(Long idubigeo){
        this.idubigeo = idubigeo;
    }
    public String getReniec(){
        return this.reniec;
    }
    public void setReniec(String reniec){
        this.reniec = reniec;
    }
    public String getInei(){
        return this.inei;
    }
    public void setInei(String inei){
        this.inei = inei;
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
}

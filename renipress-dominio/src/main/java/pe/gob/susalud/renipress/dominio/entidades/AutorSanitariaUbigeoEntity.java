package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class AutorSanitariaUbigeoEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idautorsanitubigeo;
    private Long idautorsanitaria;
    private String ubigeo;

    public Long getIdautorsanitubigeo(){
        return this.idautorsanitubigeo;
    }
    public void setIdautorsanitubigeo(Long idautorsanitubigeo){
        this.idautorsanitubigeo = idautorsanitubigeo;
    }
    public Long getIdautorsanitaria(){
        return this.idautorsanitaria;
    }
    public void setIdautorsanitaria(Long idautorsanitaria){
        this.idautorsanitaria = idautorsanitaria;
    }
    public String getUbigeo(){
        return this.ubigeo;
    }
    public void setUbigeo(String ubigeo){
        this.ubigeo = ubigeo;
    }
}

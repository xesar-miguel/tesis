package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class UnidadEjecutoraEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idunidadeje;
    private String descripcion;
    private Long idautorsanit;
    private String codpliego;
    private String pliego;
    private Long codsector;
    private String sector;
    private Long idodsis;
    private Long estado;

    public Long getIdunidadeje(){
        return this.idunidadeje;
    }
    public void setIdunidadeje(Long idunidadeje){
        this.idunidadeje = idunidadeje;
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
    public String getCodpliego(){
        return this.codpliego;
    }
    public void setCodpliego(String codpliego){
        this.codpliego = codpliego;
    }
    public String getPliego(){
        return this.pliego;
    }
    public void setPliego(String pliego){
        this.pliego = pliego;
    }
    public Long getCodsector(){
        return this.codsector;
    }
    public void setCodsector(Long codsector){
        this.codsector = codsector;
    }
    public String getSector(){
        return this.sector;
    }
    public void setSector(String sector){
        this.sector = sector;
    }
    public Long getIdodsis(){
        return this.idodsis;
    }
    public void setIdodsis(Long idodsis){
        this.idodsis = idodsis;
    }
    public Long getEstado(){
        return this.estado;
    }
    public void setEstado(Long estado){
        this.estado = estado;
    }
}

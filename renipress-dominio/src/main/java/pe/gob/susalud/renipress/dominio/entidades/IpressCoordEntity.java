package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class IpressCoordEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idipresscoord;
    private Long idipress;
    private Long este;
    private Long norte;
    private Long cot;
    private String ubicpp;
    private Long unicoipress;
    private String imagen;
    private Long metodocoord;
    private String dnioper;
    private String nombresoper;
    private Long estado;

    public Long getIdipresscoord(){
        return this.idipresscoord;
    }
    public void setIdipresscoord(Long idipresscoord){
        this.idipresscoord = idipresscoord;
    }
    public Long getIdipress(){
        return this.idipress;
    }
    public void setIdipress(Long idipress){
        this.idipress = idipress;
    }
    public Long getEste(){
        return this.este;
    }
    public void setEste(Long este){
        this.este = este;
    }
    public Long getNorte(){
        return this.norte;
    }
    public void setNorte(Long norte){
        this.norte = norte;
    }
    public Long getCot(){
        return this.cot;
    }
    public void setCot(Long cot){
        this.cot = cot;
    }
    public String getUbicpp(){
        return this.ubicpp;
    }
    public void setUbicpp(String ubicpp){
        this.ubicpp = ubicpp;
    }
    public Long getUnicoipress(){
        return this.unicoipress;
    }
    public void setUnicoipress(Long unicoipress){
        this.unicoipress = unicoipress;
    }
    public String getImagen(){
        return this.imagen;
    }
    public void setImagen(String imagen){
        this.imagen = imagen;
    }
    public Long getMetodocoord(){
        return this.metodocoord;
    }
    public void setMetodocoord(Long metodocoord){
        this.metodocoord = metodocoord;
    }
    public String getDnioper(){
        return this.dnioper;
    }
    public void setDnioper(String dnioper){
        this.dnioper = dnioper;
    }
    public String getNombresoper(){
        return this.nombresoper;
    }
    public void setNombresoper(String nombresoper){
        this.nombresoper = nombresoper;
    }
    public Long getEstado(){
        return this.estado;
    }
    public void setEstado(Long estado){
        this.estado = estado;
    }
}

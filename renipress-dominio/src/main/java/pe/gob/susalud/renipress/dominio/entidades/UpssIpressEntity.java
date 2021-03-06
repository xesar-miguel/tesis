package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class UpssIpressEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idupssipress;
    private Long idupss;
    private Long idipress;
    private String flagterceriz;
    private String ructerceriz;
    private String razonsocialterceriz;
    private String numcontrato;
    private Long tipocontrato;
    private java.util.Date fechafincontrat;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdupssipress(){
        return this.idupssipress;
    }
    public void setIdupssipress(Long idupssipress){
        this.idupssipress = idupssipress;
    }
    public Long getIdupss(){
        return this.idupss;
    }
    public void setIdupss(Long idupss){
        this.idupss = idupss;
    }
    public Long getIdipress(){
        return this.idipress;
    }
    public void setIdipress(Long idipress){
        this.idipress = idipress;
    }
    public String getFlagterceriz(){
        return this.flagterceriz;
    }
    public void setFlagterceriz(String flagterceriz){
        this.flagterceriz = flagterceriz;
    }
    public String getRucterceriz(){
        return this.ructerceriz;
    }
    public void setRucterceriz(String ructerceriz){
        this.ructerceriz = ructerceriz;
    }
    public String getRazonsocialterceriz(){
        return this.razonsocialterceriz;
    }
    public void setRazonsocialterceriz(String razonsocialterceriz){
        this.razonsocialterceriz = razonsocialterceriz;
    }
    public String getNumcontrato(){
        return this.numcontrato;
    }
    public void setNumcontrato(String numcontrato){
        this.numcontrato = numcontrato;
    }
    public Long getTipocontrato(){
        return this.tipocontrato;
    }
    public void setTipocontrato(Long tipocontrato){
        this.tipocontrato = tipocontrato;
    }
    public java.util.Date getFechafincontrat(){
        return this.fechafincontrat;
    }
    public void setFechafincontrat(java.util.Date fechafincontrat){
        this.fechafincontrat = fechafincontrat;
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

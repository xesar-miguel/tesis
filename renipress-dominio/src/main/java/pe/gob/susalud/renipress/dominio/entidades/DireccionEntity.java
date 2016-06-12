package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class DireccionEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long iddireccion;
    private Long idtipovia;
    private String via;
    private String urbaniz;
    private String referencia;
    private String numero;
    private Long piso;
    private Long departamento;
    private String interior;
    private String manzana;
    private String lote;
    private String kilometro;
    private Long idubigeo;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIddireccion(){
        return this.iddireccion;
    }
    public void setIddireccion(Long iddireccion){
        this.iddireccion = iddireccion;
    }
    public Long getIdtipovia(){
        return this.idtipovia;
    }
    public void setIdtipovia(Long idtipovia){
        this.idtipovia = idtipovia;
    }
    public String getVia(){
        return this.via;
    }
    public void setVia(String via){
        this.via = via;
    }
    public String getUrbaniz(){
        return this.urbaniz;
    }
    public void setUrbaniz(String urbaniz){
        this.urbaniz = urbaniz;
    }
    public String getReferencia(){
        return this.referencia;
    }
    public void setReferencia(String referencia){
        this.referencia = referencia;
    }
    public String getNumero(){
        return this.numero;
    }
    public void setNumero(String numero){
        this.numero = numero;
    }
    public Long getPiso(){
        return this.piso;
    }
    public void setPiso(Long piso){
        this.piso = piso;
    }
    public Long getDepartamento(){
        return this.departamento;
    }
    public void setDepartamento(Long departamento){
        this.departamento = departamento;
    }
    public String getInterior(){
        return this.interior;
    }
    public void setInterior(String interior){
        this.interior = interior;
    }
    public String getManzana(){
        return this.manzana;
    }
    public void setManzana(String manzana){
        this.manzana = manzana;
    }
    public String getLote(){
        return this.lote;
    }
    public void setLote(String lote){
        this.lote = lote;
    }
    public String getKilometro(){
        return this.kilometro;
    }
    public void setKilometro(String kilometro){
        this.kilometro = kilometro;
    }
    public Long getIdubigeo(){
        return this.idubigeo;
    }
    public void setIdubigeo(Long idubigeo){
        this.idubigeo = idubigeo;
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

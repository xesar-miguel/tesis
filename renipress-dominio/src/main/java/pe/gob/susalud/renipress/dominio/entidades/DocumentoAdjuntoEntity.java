package pe.gob.susalud.renipress.dominio.entidades;

import java.text.Format;
import java.text.SimpleDateFormat;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class DocumentoAdjuntoEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long iddocadjunt;
    private String numero;
    private String nombreoriginal;
    private String nombreinterno;
    private Long idtabla;
    private Long codext;
    private Long iddocumentreq;
    private Long adjunto;
    private Long estado;
    private String flagtiene;
    private java.util.Date fechaemision;
    private java.util.Date fecharecepcion;
    private String flagobs;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIddocadjunt(){
        return this.iddocadjunt;
    }
    public void setIddocadjunt(Long iddocadjunt){
        this.iddocadjunt = iddocadjunt;
    }
    public String getNumero(){
        return this.numero;
    }
    public void setNumero(String numero){
        this.numero = numero;
    }
    public String getNombreoriginal(){
        return this.nombreoriginal;
    }
    public void setNombreoriginal(String nombreoriginal){
        this.nombreoriginal = nombreoriginal;
    }
    public String getNombreinterno(){
        return this.nombreinterno;
    }
    public void setNombreinterno(String nombreinterno){
        this.nombreinterno = nombreinterno;
    }
    public Long getIdtabla(){
        return this.idtabla;
    }
    public void setIdtabla(Long idtabla){
        this.idtabla = idtabla;
    }
    public Long getCodext(){
        return this.codext;
    }
    public void setCodext(Long codext){
        this.codext = codext;
    }
    public Long getIddocumentreq(){
        return this.iddocumentreq;
    }
    public void setIddocumentreq(Long iddocumentreq){
        this.iddocumentreq = iddocumentreq;
    }
    public Long getAdjunto(){
        return this.adjunto;
    }
    public void setAdjunto(Long adjunto){
        this.adjunto = adjunto;
    }
    public Long getEstado(){
        return this.estado;
    }
    public void setEstado(Long estado){
        this.estado = estado;
    }
    public String getFlagtiene(){
        return this.flagtiene;
    }
    public void setFlagtiene(String flagtiene){
        this.flagtiene = flagtiene;
    }
    public java.util.Date getFechaemision(){
        return this.fechaemision;
    }
    public void setFechaemision(java.util.Date fechaemision){
        this.fechaemision = fechaemision;
    }
    public String getFechaemisionStr(){
    	String fechaStr = "";
		if (getFechaemision() != null)
        {
            Format formatter = new SimpleDateFormat("dd/MM/yyyy");
            fechaStr = formatter.format(getFechaemision());
        }
        return fechaStr;
    }
    public java.util.Date getFecharecepcion(){
        return this.fecharecepcion;
    }
    public void setFecharecepcion(java.util.Date fecharecepcion){
        this.fecharecepcion = fecharecepcion;
    }
    public String getFlagobs(){
        return this.flagobs;
    }
    public void setFlagobs(String flagobs){
        this.flagobs = flagobs;
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

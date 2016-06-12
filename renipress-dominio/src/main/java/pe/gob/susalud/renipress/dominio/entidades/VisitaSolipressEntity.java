package pe.gob.susalud.renipress.dominio.entidades;

import java.text.Format;
import java.text.SimpleDateFormat;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class VisitaSolipressEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idvisitasolipress;
    private Long idsolicitud;
    private java.util.Date fechiniprog;
    private java.util.Date horainiprog;
    private java.util.Date fechfinprog;
    private java.util.Date horafinprog;
    private java.util.Date fechinicreal;
    private java.util.Date horainicreal;
    private java.util.Date fechfinreal;
    private java.util.Date horafinreal;
    private Long tipovisita;
    private Long numvisita;
    private String comentario;
    private Long resultado;
    private Long estado;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdvisitasolipress(){
        return this.idvisitasolipress;
    }
    public void setIdvisitasolipress(Long idvisitasolipress){
        this.idvisitasolipress = idvisitasolipress;
    }
    public Long getIdsolicitud(){
        return this.idsolicitud;
    }
    public void setIdsolicitud(Long idsolicitud){
        this.idsolicitud = idsolicitud;
    }
    public java.util.Date getFechiniprog(){
        return this.fechiniprog;
    }
    public void setFechiniprog(java.util.Date fechiniprog){
        this.fechiniprog = fechiniprog;
    }
    public java.util.Date getHorainiprog(){
        return this.horainiprog;
    }
    public void setHorainiprog(java.util.Date horainiprog){
        this.horainiprog = horainiprog;
    }
    public java.util.Date getFechfinprog(){
        return this.fechfinprog;
    }
    public void setFechfinprog(java.util.Date fechfinprog){
        this.fechfinprog = fechfinprog;
    }
    public java.util.Date getHorafinprog(){
        return this.horafinprog;
    }
    public void setHorafinprog(java.util.Date horafinprog){
        this.horafinprog = horafinprog;
    }
    public java.util.Date getFechinicreal(){
        return this.fechinicreal;
    }
    public void setFechinicreal(java.util.Date fechinicreal){
        this.fechinicreal = fechinicreal;
    }
    public java.util.Date getHorainicreal(){
        return this.horainicreal;
    }
    public void setHorainicreal(java.util.Date horainicreal){
        this.horainicreal = horainicreal;
    }
    public java.util.Date getFechfinreal(){
        return this.fechfinreal;
    }
    public void setFechfinreal(java.util.Date fechfinreal){
        this.fechfinreal = fechfinreal;
    }
    public java.util.Date getHorafinreal(){
        return this.horafinreal;
    }
    public void setHorafinreal(java.util.Date horafinreal){
        this.horafinreal = horafinreal;
    }
    public Long getTipovisita(){
        return this.tipovisita;
    }
    public void setTipovisita(Long tipovisita){
        this.tipovisita = tipovisita;
    }
    public Long getNumvisita(){
        return this.numvisita;
    }
    public void setNumvisita(Long numvisita){
        this.numvisita = numvisita;
    }
    public String getComentario(){
        return this.comentario;
    }
    public void setComentario(String comentario){
        this.comentario = comentario;
    }
    public Long getResultado(){
        return this.resultado;
    }
    public void setResultado(Long resultado){
        this.resultado = resultado;
    }
    public Long getEstado(){
        return this.estado;
    }
    public void setEstado(Long estado){
        this.estado = estado;
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
    public String getFechiniprogStr(){
    	String fechaStr = "";
		if (getFechiniprog() != null)
        {
            Format formatter = new SimpleDateFormat("dd/MM/yyyy");
            fechaStr = formatter.format(getFechiniprog());
        }
        return fechaStr;
    }
    public String getFechfinprogStr(){
    	String fechaStr = "";
		if (getFechfinprog() != null)
        {
            Format formatter = new SimpleDateFormat("dd/MM/yyyy");
            fechaStr = formatter.format(getFechfinprog());
        }
        return fechaStr;
    }
    public String getHorainiprogStr(){
    	String fechaStr = "";
		if (getHorainiprog() != null)
        {
            Format formatter = new SimpleDateFormat("hh:mm");
            fechaStr = formatter.format(getHorainiprog());
        }
        return fechaStr;
    }
    public String getHorafinprogStr(){
    	String fechaStr = "";
		if (getHorafinprog() != null)
        {
            Format formatter = new SimpleDateFormat("hh:mm");
            fechaStr = formatter.format(getHorafinprog());
        }
        return fechaStr;
    }
    
    
    public String getFechinicrealStr(){
    	String fechaStr = "";
		if (getFechinicreal() != null)
        {
            Format formatter = new SimpleDateFormat("dd/MM/yyyy");
            fechaStr = formatter.format(getFechinicreal());
        }
        return fechaStr;
    }
    public String getFechfinrealStr(){
    	String fechaStr = "";
		if (getFechfinreal() != null)
        {
            Format formatter = new SimpleDateFormat("dd/MM/yyyy");
            fechaStr = formatter.format(getFechfinreal());
        }
        return fechaStr;
    }
    public String getHorainicrealStr(){
    	String fechaStr = "";
		if (getHorainicreal() != null)
        {
            Format formatter = new SimpleDateFormat("hh:mm");
            fechaStr = formatter.format(getHorainicreal());
        }
        return fechaStr;
    }
    public String getHorafinrealStr(){
    	String fechaStr = "";
		if (getHorafinreal() != null)
        {
            Format formatter = new SimpleDateFormat("hh:mm");
            fechaStr = formatter.format(getHorafinreal());
        }
        return fechaStr;
    }
}

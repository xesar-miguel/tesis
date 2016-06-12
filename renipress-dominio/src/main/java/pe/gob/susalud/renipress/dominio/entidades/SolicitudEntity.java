package pe.gob.susalud.renipress.dominio.entidades;

import java.text.Format;
import java.text.SimpleDateFormat;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class SolicitudEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idsolicitud;
    private Long idproceso;
    private Long idnorma;
    private String codtramite;
    private Long idpersona;
    private java.util.Date fechaenvio;
    private Long estado;
    private java.util.Date fecharecepcion;
    private String flagnotific;
    private java.util.Date fechaadmision;
    private java.util.Date fechaultnotif;
    private java.util.Date fechaopinprevia;
    private Long idcategdeseada;
    private Long idcategasignadact;
    private Long idcategasignada;
    private java.util.Date fechacargo_resol;
    private java.util.Date _fechahabilitado;
    private Long idtarea;
    private Long idpersonafirmaresol;
    private String cargopersfirmaresol;
    private java.util.Date fechasolampliacion;
    private Long resulsolampliacion;
    private Long solsgdainstancia;
    private java.util.Date fechasgdainstancia;
    private String persresolsgdainst;
    private String cargoperssgdainst;
    private Long idcategoriasgdainst;
    private String flagbajacod;
    private java.util.Date fechaautoriza;
    private String accion;
    private String cliente;
    private Long idusuasesion;
    private String cargopersfirmacerti;
    private Long idpersonafirmacerti;
    private Long indcalculo;
    private Long esActualizar;
	
	private String nompersonafirmacerti;
	
	private String categcalculada;
	
	private Long diassolampliacion;
	
    public Long getIdsolicitud(){
        return this.idsolicitud;
    }
    public void setIdsolicitud(Long idsolicitud){
        this.idsolicitud = idsolicitud;
    }
    public Long getIdproceso(){
        return this.idproceso;
    }
    public void setIdproceso(Long idproceso){
        this.idproceso = idproceso;
    }
    public Long getIdnorma(){
        return this.idnorma;
    }
    public void setIdnorma(Long idnorma){
        this.idnorma = idnorma;
    }
    public String getCodtramite(){
        return this.codtramite;
    }
    public void setCodtramite(String codtramite){
        this.codtramite = codtramite;
    }
    public Long getIdpersona(){
        return this.idpersona;
    }
    public void setIdpersona(Long idpersona){
        this.idpersona = idpersona;
    }
    public java.util.Date getFechaenvio(){
        return this.fechaenvio;
    }
    public void setFechaenvio(java.util.Date fechaenvio){
        this.fechaenvio = fechaenvio;
    }
    public Long getEstado(){
        return this.estado;
    }
    public void setEstado(Long estado){
        this.estado = estado;
    }
    public java.util.Date getFecharecepcion(){
        return this.fecharecepcion;
    }
    public String getFecharecepcionStr(){
    	String fechaStr = null;
		if (getFecharecepcion() != null)
        {
            Format formatter = new SimpleDateFormat("dd/MM/yyyy");
            fechaStr = formatter.format(getFecharecepcion());
        }
        return fechaStr;
    }
    public void setFecharecepcion(java.util.Date fecharecepcion){
        this.fecharecepcion = fecharecepcion;
    }
    public String getFlagnotific(){
        return this.flagnotific;
    }
    public void setFlagnotific(String flagnotific){
        this.flagnotific = flagnotific;
    }
    public java.util.Date getFechaadmision(){
        return this.fechaadmision;
    }
    public String getFechaadmisionStr() {
		String fechaStr = null;
		if (getFechaadmision() != null)
        {
            Format formatter = new SimpleDateFormat("dd/MM/yyyy");
            fechaStr = formatter.format(getFechaadmision());
        }
        return fechaStr;
    }
    public void setFechaadmision(java.util.Date fechaadmision){
        this.fechaadmision = fechaadmision;
    }
    public java.util.Date getFechaultnotif(){
        return this.fechaultnotif;
    }
    public void setFechaultnotif(java.util.Date fechaultnotif){
        this.fechaultnotif = fechaultnotif;
    }
    public java.util.Date getFechaopinprevia(){
        return this.fechaopinprevia;
    }
    public void setFechaopinprevia(java.util.Date fechaopinprevia){
        this.fechaopinprevia = fechaopinprevia;
    }
    public Long getIdcategdeseada(){
        return this.idcategdeseada;
    }
    public void setIdcategdeseada(Long idcategdeseada){
        this.idcategdeseada = idcategdeseada;
    }
    public Long getIdcategasignadact(){
        return this.idcategasignadact;
    }
    public void setIdcategasignadact(Long idcategasignadact){
        this.idcategasignadact = idcategasignadact;
    }
    public Long getIdcategasignada(){
        return this.idcategasignada;
    }
    public void setIdcategasignada(Long idcategasignada){
        this.idcategasignada = idcategasignada;
    }
    public java.util.Date getFechacargo_resol(){
        return this.fechacargo_resol;
    }
    public void setFechacargo_resol(java.util.Date fechacargo_resol){
        this.fechacargo_resol = fechacargo_resol;
    }
    public java.util.Date get_fechahabilitado(){
        return this._fechahabilitado;
    }
    public void set_fechahabilitado(java.util.Date _fechahabilitado){
        this._fechahabilitado = _fechahabilitado;
    }
    public Long getIdtarea(){
        return this.idtarea;
    }
    public void setIdtarea(Long idtarea){
        this.idtarea = idtarea;
    }
    public Long getIdpersonafirmaresol(){
        return this.idpersonafirmaresol;
    }
    public void setIdpersonafirmaresol(Long idpersonafirmaresol){
        this.idpersonafirmaresol = idpersonafirmaresol;
    }
    public String getCargopersfirmaresol(){
        return this.cargopersfirmaresol;
    }
    public void setCargopersfirmaresol(String cargopersfirmaresol){
        this.cargopersfirmaresol = cargopersfirmaresol;
    }
    public java.util.Date getFechasolampliacion(){
        return this.fechasolampliacion;
    }
    public void setFechasolampliacion(java.util.Date fechasolampliacion){
        this.fechasolampliacion = fechasolampliacion;
    }
    public Long getResulsolampliacion(){
        return this.resulsolampliacion;
    }
    public void setResulsolampliacion(Long resulsolampliacion){
        this.resulsolampliacion = resulsolampliacion;
    }
    public Long getSolsgdainstancia(){
        return this.solsgdainstancia;
    }
    public void setSolsgdainstancia(Long solsgdainstancia){
        this.solsgdainstancia = solsgdainstancia;
    }
    public java.util.Date getFechasgdainstancia(){
        return this.fechasgdainstancia;
    }
    public void setFechasgdainstancia(java.util.Date fechasgdainstancia){
        this.fechasgdainstancia = fechasgdainstancia;
    }
    public String getPersresolsgdainst(){
        return this.persresolsgdainst;
    }
    public void setPersresolsgdainst(String persresolsgdainst){
        this.persresolsgdainst = persresolsgdainst;
    }
    public String getCargoperssgdainst(){
        return this.cargoperssgdainst;
    }
    public void setCargoperssgdainst(String cargoperssgdainst){
        this.cargoperssgdainst = cargoperssgdainst;
    }
    public Long getIdcategoriasgdainst(){
        return this.idcategoriasgdainst;
    }
    public void setIdcategoriasgdainst(Long idcategoriasgdainst){
        this.idcategoriasgdainst = idcategoriasgdainst;
    }
    public String getFlagbajacod(){
        return this.flagbajacod;
    }
    public void setFlagbajacod(String flagbajacod){
        this.flagbajacod = flagbajacod;
    }
    public java.util.Date getFechaautoriza(){
        return this.fechaautoriza;
    }
    public void setFechaautoriza(java.util.Date fechaautoriza){
        this.fechaautoriza = fechaautoriza;
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
    public String getFechaSolicitud(){
    	SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy");
    	return getFechasolampliacion() == null ? "" : formato.format(getFechasolampliacion());
    }
    
    public String getStrFechacargo_resol(){
    	SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy");
    	return getFechacargo_resol() == null ? null : formato.format(this.getFechacargo_resol());
    }
    
	public String getCargopersfirmacerti() {
		return cargopersfirmacerti;
	}
	public void setCargopersfirmacerti(String cargopersfirmacerti) {
		this.cargopersfirmacerti = cargopersfirmacerti;
	}
	public Long getIdpersonafirmacerti() {
		return idpersonafirmacerti;
	}
	public void setIdpersonafirmacerti(Long idpersonafirmacerti) {
		this.idpersonafirmacerti = idpersonafirmacerti;
	}
	
	public String getNompersonafirmacerti() {
		return nompersonafirmacerti;
	}
	public void setNompersonafirmacerti(String nompersonafirmacerti) {
		this.nompersonafirmacerti = nompersonafirmacerti;
	}
	/**
	 * @return the categcalculada1
	 */
	public String getCategcalculada() {
		return categcalculada;
	}
	/**
	 * @param categcalculada1 the categcalculada1 to set
	 */
	public void setCategcalculada1(String categcalculada) {
		this.categcalculada = categcalculada;
	}
	
	/**
	 * @return the indcalculo
	 */
	public Long getIndcalculo() {
		return indcalculo;
	}
	/**
	 * @param indcalculo the indcalculo to set
	 */
	public void setIndcalculo(Long indcalculo) {
		this.indcalculo = indcalculo;
	}
	/**
	 * @return the diassolampliacion
	 */
	public Long getDiassolampliacion() {
		return diassolampliacion;
	}
	/**
	 * @param diassolampliacion the diassolampliacion to set
	 */
	public void setDiassolampliacion(Long diassolampliacion) {
		this.diassolampliacion = diassolampliacion;
	}
	/**
	 * @param categcalculada the categcalculada to set
	 */
	public void setCategcalculada(String categcalculada) {
		this.categcalculada = categcalculada;
	}
	
	public void setEsActualizar(Long esActualizar){
		this.esActualizar = esActualizar;
	}
	
	public Long getEsActualizar(){
		return this.esActualizar;
	}
}

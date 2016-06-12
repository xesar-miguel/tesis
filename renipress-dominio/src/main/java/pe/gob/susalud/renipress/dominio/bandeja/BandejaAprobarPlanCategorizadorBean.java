package pe.gob.susalud.renipress.dominio.bandeja;

import java.io.Serializable;
import java.util.Date;

public class BandejaAprobarPlanCategorizadorBean implements Serializable{

	public static final long serialVersionUID = 1L;

	private String row;
	private String codigoTramite;				
	private String denominacion;
	private String ruc;
	private String autoridadSanitaria;
	private String departamento;
	private String provincia;
	private String distrito;
	private Date fechaini;
	private Date fechafin;
	private String categorizadores;
	private String plan;
	
	public String getRow() {
		return row;
	}
	public void setRow(String row) {
		this.row = row;
	}
	public String getCodigoTramite() {
		return codigoTramite;
	}
	public void setCodigoTramite(String codigoTramite) {
		this.codigoTramite = codigoTramite;
	}
	public String getDenominacion() {
		return denominacion;
	}
	public void setDenominacion(String denominacion) {
		this.denominacion = denominacion;
	}
	public String getRuc() {
		return ruc;
	}
	public void setRuc(String ruc) {
		this.ruc = ruc;
	}
	public String getAutoridadSanitaria() {
		return autoridadSanitaria;
	}
	public void setAutoridadSanitaria(String autoridadSanitaria) {
		this.autoridadSanitaria = autoridadSanitaria;
	}
	public String getDepartamento() {
		return departamento;
	}
	public void setDepartamento(String departamento) {
		this.departamento = departamento;
	}
	public String getProvincia() {
		return provincia;
	}
	public void setProvincia(String provincia) {
		this.provincia = provincia;
	}
	public String getDistrito() {
		return distrito;
	}
	public void setDistrito(String distrito) {
		this.distrito = distrito;
	}
	public Date getFechaini() {
		return fechaini;
	}
	public void setFechaini(Date fechaini) {
		this.fechaini = fechaini;
	}
	public Date getFechafin() {
		return fechafin;
	}
	public void setFechafin(Date fechafin) {
		this.fechafin = fechafin;
	}
	public String getCategorizadores() {
		return categorizadores;
	}
	public void setCategorizadores(String categorizadores) {
		this.categorizadores = categorizadores;
	}
	public String getPlan() {
		return plan;
	}
	public void setPlan(String plan) {
		this.plan = plan;
	}
}

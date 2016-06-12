package pe.gob.susalud.renipress.dominio.entidades.base;

import java.io.Serializable;
import java.text.SimpleDateFormat;

public class AuditoriaEntity implements Serializable {
	
    private static final long serialVersionUID = 1L;
    
	private java.util.Date fechareg;
    private java.util.Date fechamod;
    private String usuareg;
    private String usuamod;
    
	public java.util.Date getFechareg() {
		return fechareg;
	}
	public void setFechareg(java.util.Date fechareg) {
		this.fechareg = fechareg;
	}
	public java.util.Date getFechamod() {
		return fechamod;
	}
	public void setFechamod(java.util.Date fechamod) {
		this.fechamod = fechamod;
	}
	public String getUsuareg() {
		return usuareg;
	}
	public void setUsuareg(String usuareg) {
		this.usuareg = usuareg;
	}
	public String getUsuamod() {
		return usuamod;
	}
	public void setUsuamod(String usuamod) {
		this.usuamod = usuamod;
	}
	
	//***MODIFICADO : JSQP*************//
	public String getFechaRegFmtrDate(String pattern) {
		SimpleDateFormat simpledf = new SimpleDateFormat();
		simpledf.applyPattern(pattern);
		return this.fechareg == null ? "" : simpledf.format(this.fechareg);
	}
	
	public String getFechaModFmtrDate(String pattern) {
		SimpleDateFormat simpledf = new SimpleDateFormat();
		simpledf.applyPattern(pattern);
		return this.fechamod == null ? "" : simpledf.format(this.fechamod);
	}
	
	public String getFechaRegStr()
	{
		return getFechaRegFmtrDate("dd/MM/yyyy");
	}
	
	public String getHoraRegStr()
	{
		return getFechaRegFmtrDate("hh:mm");
	}
	
	public String getFechaModStr()
	{
		return getFechaModFmtrDate("dd/MM/yyyy");
	}
	
	public String getHoraModStr()
	{
		return getFechaModFmtrDate("hh:mm");
	}
}

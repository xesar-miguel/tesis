/**
 * 
 */
package pe.gob.susalud.renipress.comun.beans;

import java.io.Serializable;

/***
 * @name      : RedBean 
 * @author    : millesca
 * @version   : 1.0
 * @copyrigth : SUSALUD
 */
public class RedBean implements Serializable
{
	private static final long serialVersionUID = 1L; 
	
	private Long idRed;
	private String codRed;
	private String nombre;
	
	
	public Long getIdRed() {
		return idRed;
	}
	public void setIdRed(Long idRed) {
		this.idRed = idRed;
	}
	public String getCodRed() {
		return codRed;
	}
	public void setCodRed(String codRed) {
		this.codRed = codRed;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
}

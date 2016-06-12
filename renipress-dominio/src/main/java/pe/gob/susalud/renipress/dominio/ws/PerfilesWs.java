package pe.gob.susalud.renipress.dominio.ws;

import java.io.Serializable;

/***
 * @name      : PerfilesWs - Entidad de la WebServices de Perfiles
 * @author    : [BIT] - millesca
 * @version   : 1.0
 * @date      : 8/4/2015
 * @copyrigth : SUSALUD
 */
public class PerfilesWs implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private String codigoPerfil;
	private String descripcionPerfil;
	
	/**
	 * @return the codigoPerfil
	 */
	public String getCodigoPerfil() {
		return codigoPerfil;
	}
	/**
	 * @param codigoPerfil the codigoPerfil to set
	 */
	public void setCodigoPerfil(String codigoPerfil) {
		this.codigoPerfil = codigoPerfil;
	}
	/**
	 * @return the descripcionPerfil
	 */
	public String getDescripcionPerfil() {
		return descripcionPerfil;
	}
	/**
	 * @param descripcionPerfil the descripcionPerfil to set
	 */
	public void setDescripcionPerfil(String descripcionPerfil) {
		this.descripcionPerfil = descripcionPerfil;
	}		
}

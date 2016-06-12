package pe.gob.susalud.renipress.dominio.entidades;

import java.io.Serializable;

public class AdjuntoOpinionPreviaEntity implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long rowNum;

	private Long idDocReq;
	
	private Long idAutorSanit;
	
	private String nombreReq;
	
	private String anotacion;
	
	private Long idDocAdjunt;

	public Long getRowNum() {
		return rowNum;
	}

	public void setRowNum(Long rowNum) {
		this.rowNum = rowNum;
	}
	
	public Long getIdDocReq() {
		return idDocReq;
	}

	public void setIdDocReq(Long idDocReq) {
		this.idDocReq = idDocReq;
	}

	public Long getIdAutorSanit() {
		return idAutorSanit;
	}

	public void setIdAutorSanit(Long idAutorSanit) {
		this.idAutorSanit = idAutorSanit;
	}

	public String getNombreReq() {
		return nombreReq;
	}

	public void setNombreReq(String nombreReq) {
		this.nombreReq = nombreReq;
	}

	public String getAnotacion() {
		return anotacion;
	}

	public void setAnotacion(String anotacion) {
		this.anotacion = anotacion;
	}

	public Long getIdDocAdjunt() {
		return idDocAdjunt;
	}

	public void setIdDocAdjunt(Long idDocAdjunt) {
		this.idDocAdjunt = idDocAdjunt;
	}
	
}

package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class RequisitosEntity extends AuditoriaEntity implements
		java.io.Serializable {

	private static final long serialVersionUID = 1L;

	private Long idrequisito;
	private String corequisito;
	private Long idmodulo;
	private String nombreModulo;
	private String nombreRequisito;
	private String descripcion;
	private Long estado;

	public Long getIdrequisito() {
		return idrequisito;
	}

	public void setIdrequisito(Long idrequisito) {
		this.idrequisito = idrequisito;
	}

	public String getCorequisito() {
		return corequisito;
	}

	public void setCorequisito(String corequisito) {
		this.corequisito = corequisito;
	}

	public Long getIdmodulo() {
		return idmodulo;
	}

	public void setIdmodulo(Long idmodulo) {
		this.idmodulo = idmodulo;
	}

	public String getNombreModulo() {
		return nombreModulo;
	}

	public void setNombreModulo(String nombreModulo) {
		this.nombreModulo = nombreModulo;
	}

	public String getNombreRequisito() {
		return nombreRequisito;
	}

	public void setNombreRequisito(String nombreRequisito) {
		this.nombreRequisito = nombreRequisito;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Long getEstado() {
		return estado;
	}

	public void setEstado(Long estado) {
		this.estado = estado;
	}

}
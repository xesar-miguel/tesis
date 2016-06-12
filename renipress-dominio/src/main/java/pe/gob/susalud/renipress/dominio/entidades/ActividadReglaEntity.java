package pe.gob.susalud.renipress.dominio.entidades;


public class ActividadReglaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idactividad;
    private String nombreactividad;
    private Long idestado;
    private String nombreestado;
    
	public Long getIdactividad() {
		return idactividad;
	}
	public void setIdactividad(Long idactividad) {
		this.idactividad = idactividad;
	}
	public String getNombreactividad() {
		return nombreactividad;
	}
	public void setNombreactividad(String nombreactividad) {
		this.nombreactividad = nombreactividad;
	}
	public Long getIdestado() {
		return idestado;
	}
	public void setIdestado(Long idestado) {
		this.idestado = idestado;
	}
	public String getNombreestado() {
		return nombreestado;
	}
	public void setNombreestado(String nombreestado) {
		this.nombreestado = nombreestado;
	}
    
    
    

    
}

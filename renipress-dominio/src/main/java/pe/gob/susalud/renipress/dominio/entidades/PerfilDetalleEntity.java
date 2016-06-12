package pe.gob.susalud.renipress.dominio.entidades;

public class PerfilDetalleEntity implements java.io.Serializable 
{
	private static final long serialVersionUID = 1L;

	//atributos
	private Long idusuariosolicitud;
	private Long idsolar;
	private Long idcatesp;
	private Long idautosanitsolicitudar;
	private String nombreautosanit;
	private String dnititular;
	private String fechemicertsolicitudesp;
	private String numresoldesigsolicitudar;
	private String fechemiresosolicitudar;
	private String nombreemisorresosolicitudar;
	private String numerocertificadoemitido;
	
	
	
	public Long getIdsolar() {
		return idsolar;
	}
	public void setIdsolar(Long idsolar) {
		this.idsolar = idsolar;
	}
	public Long getIdcatesp() {
		return idcatesp;
	}
	public void setIdcatesp(Long idcatesp) {
		this.idcatesp = idcatesp;
	}
	public Long getIdusuariosolicitud() {
		return idusuariosolicitud;
	}
	public void setIdusuariosolicitud(Long idusuariosolicitud) {
		this.idusuariosolicitud = idusuariosolicitud;
	}
	public Long getIdautosanitsolicitudar() {
		return idautosanitsolicitudar;
	}
	public void setIdautosanitsolicitudar(Long idautosanitsolicitudar) {
		this.idautosanitsolicitudar = idautosanitsolicitudar;
	}
	public String getNombreautosanit() {
		return nombreautosanit;
	}
	public void setNombreautosanit(String nombreautosanit) {
		this.nombreautosanit = nombreautosanit;
	}
	public String getDnititular() {
		return dnititular;
	}
	public void setDnititular(String dnititular) {
		this.dnititular = dnititular;
	}
	public String getFechemicertsolicitudesp() {
		return fechemicertsolicitudesp;
	}
	public void setFechemicertsolicitudesp(String fechemicertsolicitudesp) {
		this.fechemicertsolicitudesp = fechemicertsolicitudesp;
	}
	
	public String getFechemiresosolicitudar() {
		return fechemiresosolicitudar;
	}
	public void setFechemiresosolicitudar(String fechemiresosolicitudar) {
		this.fechemiresosolicitudar = fechemiresosolicitudar;
	}
	public String getNombreemisorresosolicitudar() {
		return nombreemisorresosolicitudar;
	}
	public void setNombreemisorresosolicitudar(String nombreemisorresosolicitudar) {
		this.nombreemisorresosolicitudar = nombreemisorresosolicitudar;
	}
	public String getNumresoldesigsolicitudar() {
		return numresoldesigsolicitudar;
	}
	public void setNumresoldesigsolicitudar(String numresoldesigsolicitudar) {
		this.numresoldesigsolicitudar = numresoldesigsolicitudar;
	}
	public String getNumerocertificadoemitido() {
		return numerocertificadoemitido;
	}
	public void setNumerocertificadoemitido(String numerocertificadoemitido) {
		this.numerocertificadoemitido = numerocertificadoemitido;
	}
	
	
	
	
}

package pe.gob.susalud.renipress.dominio.entidades;


public class SessionUpssEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idUpss;
    private String nombre;
    private Long flag;
    
	public Long getIdUpss() {
		return idUpss;
	}
	public void setIdUpss(Long idUpss) {
		this.idUpss = idUpss;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public Long getFlag() {
		return flag;
	}
	public void setFlag(Long flag) {
		this.flag = flag;
	}
  
    
    
}

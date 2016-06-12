package pe.gob.susalud.renipress.dominio.entidades;


import java.util.Comparator;
import java.util.List;

public class OpcionesPorPerfil implements 
Comparator<OpcionesPorPerfil>, Comparable<OpcionesPorPerfil>{

	private int codOpcion;
	private int codPadrOption;
	private String codTopcion;
	private String nomOpcion;
	private String desOpcion;
	private String ordOpcion;
	private String estOpcion;
	private String acceso;
	private List<String> url;
	
	public int getCodOpcion() {
		return codOpcion;
	}
	public void setCodOpcion(int codOpcion) {
		this.codOpcion = codOpcion;
	}
	public int getCodPadrOption() {
		return codPadrOption;
	}
	public void setCodPadrOption(int codPadrOption) {
		this.codPadrOption = codPadrOption;
	}
	public String getCodTopcion() {
		return codTopcion;
	}
	public void setCodTopcion(String codTopcion) {
		this.codTopcion = codTopcion;
	}
	public String getNomOpcion() {
		return nomOpcion;
	}
	public void setNomOpcion(String nomOpcion) {
		this.nomOpcion = nomOpcion;
	}
	public String getDesOpcion() {
		return desOpcion;
	}
	public void setDesOpcion(String desOpcion) {
		this.desOpcion = desOpcion;
	}
	public String getOrdOpcion() {
		return ordOpcion;
	}
	public void setOrdOpcion(String ordOpcion) {
		this.ordOpcion = ordOpcion;
	}
	public String getEstOpcion() {
		return estOpcion;
	}
	public void setEstOpcion(String estOpcion) {
		this.estOpcion = estOpcion;
	}
	public String getAcceso() {
		return acceso;
	}
	public void setAcceso(String acceso) {
		this.acceso = acceso;
	}
	
    // Overriding the compareTo method
    public int compareTo(OpcionesPorPerfil d){
       return (this.nomOpcion).compareTo(d.nomOpcion);
    }

    // Overriding the compare method to sort the age 
    public int compare(OpcionesPorPerfil d, OpcionesPorPerfil d1){
       return d.codOpcion - d1.codOpcion;
    }
	/**
	 * @return the url
	 */
	public List<String> getUrl() {
		return url;
	}
	/**
	 * @param url the url to set
	 */
	public void setUrl(List<String> url) {
		this.url = url;
	}
    
    
}


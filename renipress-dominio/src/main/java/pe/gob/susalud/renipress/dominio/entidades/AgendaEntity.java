package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class AgendaEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private String idSolicitud;
    private String deEstado;
    private String coTramite;
    private String deRazon;
    private String coUnicoIPRESS;
    
    private String deTitle ;
    private String id ;
    
    private String feIniProg ; 
    private String feFinProg ; 
    private String feIniReal ; 
    private String feFinReal ; 
    private String deUsuario ; 
    private String idAutoridad; 
    
    private String feInicio; 
    private String feFin; 
    private String noComercial; 
    
    
    
	public String getNoComercial() {
		return noComercial;
	}
	public void setNoComercial(String noComercial) {
		this.noComercial = noComercial;
	}
	public String getFeInicio() {
		return feInicio;
	}
	public void setFeInicio(String feInicio) {
		this.feInicio = feInicio;
	}
	public String getFeFin() {
		return feFin;
	}
	public void setFeFin(String feFin) {
		this.feFin = feFin;
	}
	public String getCoUnicoIPRESS() {
		return coUnicoIPRESS;
	}
	public void setCoUnicoIPRESS(String coUnicoIPRESS) {
		this.coUnicoIPRESS = coUnicoIPRESS;
	}
	public String getIdAutoridad() {
		return idAutoridad;
	}
	public void setIdAutoridad(String idAutoridad) {
		this.idAutoridad = idAutoridad;
	}
	public String getFeIniProg() {
		return feIniProg;
	}
	public void setFeIniProg(String feIniProg) {
		this.feIniProg = feIniProg;
	}

	public String getFeFinProg() {
		return feFinProg;
	}
	public void setFeFinProg(String feFinProg) {
		this.feFinProg = feFinProg;
	}
	
	public String getFeIniReal() {
		return feIniReal;
	}
	public void setFeIniReal(String feIniReal) {
		this.feIniReal = feIniReal;
	}
	
	public String getFeFinReal() {
		return feFinReal;
	}
	public void setFeFinReal(String feFinReal) {
		this.feFinReal = feFinReal;
	}
	
	public String getDeUsuario() {
		return deUsuario;
	}
	public void setDeUsuario(String deUsuario) {
		this.deUsuario = deUsuario;
	}
	
	public void setDeTitle(String deTitle) {
		this.deTitle = deTitle;
	}
	public void setId(String id) {
		this.id = id;
	}	
	
	
	public String getDeTitle() {
		return deTitle;
	}
	public String getId() {
		return id;
	}
	public String getIdSolicitud() {
		return idSolicitud;
	}
	
	public String getCoTramite() {
		return coTramite;
	}
	public String getDeRazon() {
		return deRazon;
	}
	
	public void setIdSolicitud(String idSolicitud) {
		this.idSolicitud = idSolicitud;
	}
	public void setCoTramite(String coTramite) {
		this.coTramite = coTramite;
	}
	public void setDeRazon(String deRazon) {
		this.deRazon = deRazon;
	}
	public String getDeEstado() {
		return deEstado;
	}
	public void setDeEstado(String deEstado) {
		this.deEstado = deEstado;
	}
	
   

}

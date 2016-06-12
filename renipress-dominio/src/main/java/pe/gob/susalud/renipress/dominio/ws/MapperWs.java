package pe.gob.susalud.renipress.dominio.ws;

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author imeneses
 */
public class MapperWs {
    private String coError;
    private String coRpta;
    private String nuDni;
    private String preNombres;
    private String apPaterno;
    private String apMaterno;
    private String apCasado;
    private String deDireccion;
    private String coGenero;
    private String feNac;
    private String coUbigeo;
    private String coUbigeoDep;
    private String coUbigeoPro;
    private String coUbigeoDis;
    private String deUbigeo;
    private String deUbigeoDep;
    private String deUbigeoPro;
    private String deUbigeoDis;
 
    // SE AGREGA EL ID DE LA PERSONA    
    private String idPersona;
    
    private boolean wsReniec = false;
    
    

    public String getCoError() {
		return coError;
	}

	public void setCoError(String coError) {
		this.coError = coError;
	}

	public String getCoRpta() {
		return coRpta;
	}

	public void setCoRpta(String coRpta) {
		this.coRpta = coRpta;
	}

	public String getNuDni() {
		return nuDni;
	}

	public void setNuDni(String nuDni) {
		this.nuDni = nuDni;
	}

	public String getPreNombres() {
		return preNombres;
	}

	public void setPreNombres(String preNombres) {
		this.preNombres = preNombres;
	}

	public String getApPaterno() {
		return apPaterno;
	}

	public void setApPaterno(String apPaterno) {
		this.apPaterno = apPaterno;
	}

	public String getApMaterno() {
		return apMaterno;
	}

	public void setApMaterno(String apMaterno) {
		this.apMaterno = apMaterno;
	}

	public String getApCasado() {
		return apCasado;
	}

	public void setApCasado(String apCasado) {
		this.apCasado = apCasado;
	}

	public String getDeDireccion() {
		return deDireccion;
	}

	public void setDeDireccion(String deDireccion) {
		this.deDireccion = deDireccion;
	}

	public String getCoGenero() {
		return coGenero;
	}

	public void setCoGenero(String coGenero) {
		this.coGenero = coGenero;
	}

	public String getFeNac() {
		return feNac;
	}

	public void setFeNac(String feNac) {
		this.feNac = feNac;
	}

	public String getCoUbigeo() {
		return coUbigeo;
	}

	public void setCoUbigeo(String coUbigeo) {
		this.coUbigeo = coUbigeo;
	}

	public String getCoUbigeoDep() {
		return coUbigeoDep;
	}

	public void setCoUbigeoDep(String coUbigeoDep) {
		this.coUbigeoDep = coUbigeoDep;
	}

	public String getCoUbigeoPro() {
		return coUbigeoPro;
	}

	public void setCoUbigeoPro(String coUbigeoPro) {
		this.coUbigeoPro = coUbigeoPro;
	}

	public String getCoUbigeoDis() {
		return coUbigeoDis;
	}

	public void setCoUbigeoDis(String coUbigeoDis) {
		this.coUbigeoDis = coUbigeoDis;
	}

	public String getDeUbigeo() {
		return deUbigeo;
	}

	public void setDeUbigeo(String deUbigeo) {
		this.deUbigeo = deUbigeo;
	}

	public String getDeUbigeoDep() {
		return deUbigeoDep;
	}

	public void setDeUbigeoDep(String deUbigeoDep) {
		this.deUbigeoDep = deUbigeoDep;
	}

	public String getDeUbigeoPro() {
		return deUbigeoPro;
	}

	public void setDeUbigeoPro(String deUbigeoPro) {
		this.deUbigeoPro = deUbigeoPro;
	}

	public String getDeUbigeoDis() {
		return deUbigeoDis;
	}

	public void setDeUbigeoDis(String deUbigeoDis) {
		this.deUbigeoDis = deUbigeoDis;
	}

	public String getIdPersona() {
		return idPersona;
	}

	public void setIdPersona(String idPersona) {
		this.idPersona = idPersona;
	}

	public MapperWs(){
		super();
	}
	
	

    /**
	 * @return the wsReniec
	 */
	public boolean isWsReniec() {
		return wsReniec;
	}

	/**
	 * @param wsReniec the wsReniec to set
	 */
	public void setWsReniec(boolean wsReniec) {
		this.wsReniec = wsReniec;
	}

	public MapperWs(String coError, String coRpta, String nuDni, String preNombres, String apPaterno, String apMaterno, String apCasado, String deDireccion,
            String coGenero, String feNac, String coUbigeo, String coUbigeoDep, String coUbigeoPro, String coUbigeoDis, String deUbigeo, String deUbigeoDep,
            String deUbigeoPro, String deUbigeoDis) {
	    super();
	    this.coError = coError;
	    this.coRpta = coRpta;
	    this.nuDni = nuDni;
	    this.preNombres = preNombres;
	    this.apPaterno = apPaterno;
	    this.apMaterno = apMaterno;
	    this.apCasado = apCasado;
	    this.deDireccion = deDireccion;
	    this.coGenero = coGenero;
	    this.feNac = feNac;
	    this.coUbigeo = coUbigeo;
	    this.coUbigeoDep = coUbigeoDep;
	    this.coUbigeoPro = coUbigeoPro;
	    this.coUbigeoDis = coUbigeoDis;
	    this.deUbigeo = deUbigeo;
	    this.deUbigeoDep = deUbigeoDep;
	    this.deUbigeoPro = deUbigeoPro;
	    this.deUbigeoDis = deUbigeoDis;
    }

	public MapperWs(String coError, String coRpta) {
        this.coError = coError;
        this.coRpta = coRpta;
    }
    
}

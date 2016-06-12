package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class SolicIpressEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idsolicipress;
    private String unicoipress;
    private Long idcategoriaipress;
    private String doccategorizac;
    private Long personaprop;
    private Long idpersonaprop;
    private String rucprop;
    private String razonsocialprop;
    private String comercialprop;
    private Long iddireccionprop;
    private String direccionprop;
    private String telefonoprop;
    private String faxprop;
    private String correoelectrprop;
    private String paginawebprop;
    private Long idpersonareprleg;
    private String correoelectrreplegal;
    private String telefonoreplegal;
    private Long idprofreplegal;
    private Long tipoestabl;
    private String razonsocialestabl;
    private String comercialestabl;
    private Long iddireccionestabl;
    private String direccionestabl;
    private String telefonoestabl;
    private String telefonoemergestabl;
    private String radioestabl;
    private String faxestabl;
    private String correoelectrestabl;
    private String paginawebestabl;
    private java.util.Date fechainicactestabl;
    private java.util.Date fechacreacionestabl;
    private String resolucionestabl;
    private Long idautsanitariaestabl;
    private Long idinstitucionestabl;
    private Long idred;
    private Long idmicrored;
    private Long idunidadeje;
    private Long idodsis;
    private Long idclas;
    private Long idpersonadirmed;
    private Long idcolegprofdirmed;
    private String colegiatura;
    private String rnedirmed;
    private String telefonodirmed;
    private String correoelectrdirmed;
    private Long ambientestabl;
    private String flagpoblasig;
    private String poblasignada;
    private Long tipoatencion;
    private Long grupoetario;
    private String horarioatencion;
    private String campoclinico;
    private Long idsolicitud;
    private String accion;
    private String cliente;
    private java.util.Date fechareg;
    private java.util.Date fechamod;
    private String usureg;
    private String usuamod;
    private Long idusuasesion;
    
	public Long getIdsolicipress() {
		return idsolicipress;
	}
	public void setIdsolicipress(Long idsolicipress) {
		this.idsolicipress = idsolicipress;
	}
	public String getUnicoipress() {
		return unicoipress;
	}
	public void setUnicoipress(String unicoipress) {
		this.unicoipress = unicoipress;
	}
	public Long getIdcategoriaipress() {
		return idcategoriaipress;
	}
	public void setIdcategoriaipress(Long idcategoriaipress) {
		this.idcategoriaipress = idcategoriaipress;
	}
	public String getDoccategorizac() {
		return doccategorizac;
	}
	public void setDoccategorizac(String doccategorizac) {
		this.doccategorizac = doccategorizac;
	}
	public Long getPersonaprop() {
		return personaprop;
	}
	public void setPersonaprop(Long personaprop) {
		this.personaprop = personaprop;
	}
	public Long getIdpersonaprop() {
		return idpersonaprop;
	}
	public void setIdpersonaprop(Long idpersonaprop) {
		this.idpersonaprop = idpersonaprop;
	}
	public String getRucprop() {
		return rucprop;
	}
	public void setRucprop(String rucprop) {
		this.rucprop = rucprop;
	}
	public String getRazonsocialprop() {
		return razonsocialprop;
	}
	public void setRazonsocialprop(String razonsocialprop) {
		this.razonsocialprop = razonsocialprop;
	}
	public String getComercialprop() {
		return comercialprop;
	}
	public void setComercialprop(String comercialprop) {
		this.comercialprop = comercialprop;
	}
	public Long getIddireccionprop() {
		return iddireccionprop;
	}
	public void setIddireccionprop(Long iddireccionprop) {
		this.iddireccionprop = iddireccionprop;
	}
	public String getDireccionprop() {
		return direccionprop;
	}
	public void setDireccionprop(String direccionprop) {
		this.direccionprop = direccionprop;
	}
	public String getTelefonoprop() {
		return telefonoprop;
	}
	public void setTelefonoprop(String telefonoprop) {
		this.telefonoprop = telefonoprop;
	}
	public String getFaxprop() {
		return faxprop;
	}
	public void setFaxprop(String faxprop) {
		this.faxprop = faxprop;
	}
	public String getCorreoelectrprop() {
		return correoelectrprop;
	}
	public void setCorreoelectrprop(String correoelectrprop) {
		this.correoelectrprop = correoelectrprop;
	}
	public String getPaginawebprop() {
		return paginawebprop;
	}
	public void setPaginawebprop(String paginawebprop) {
		this.paginawebprop = paginawebprop;
	}
	public Long getIdpersonareprleg() {
		return idpersonareprleg;
	}
	public void setIdpersonareprleg(Long idpersonareprleg) {
		this.idpersonareprleg = idpersonareprleg;
	}
	public String getCorreoelectrreplegal() {
		return correoelectrreplegal;
	}
	public void setCorreoelectrreplegal(String correoelectrreplegal) {
		this.correoelectrreplegal = correoelectrreplegal;
	}
	public String getTelefonoreplegal() {
		return telefonoreplegal;
	}
	public void setTelefonoreplegal(String telefonoreplegal) {
		this.telefonoreplegal = telefonoreplegal;
	}
	public Long getIdprofreplegal() {
		return idprofreplegal;
	}
	public void setIdprofreplegal(Long idprofreplegal) {
		this.idprofreplegal = idprofreplegal;
	}
	public Long getTipoestabl() {
		return tipoestabl;
	}
	public void setTipoestabl(Long tipoestabl) {
		this.tipoestabl = tipoestabl;
	}
	public String getRazonsocialestabl() {
		return razonsocialestabl;
	}
	public void setRazonsocialestabl(String razonsocialestabl) {
		this.razonsocialestabl = razonsocialestabl;
	}
	public String getComercialestabl() {
		return comercialestabl;
	}
	public void setComercialestabl(String comercialestabl) {
		this.comercialestabl = comercialestabl;
	}
	public Long getIddireccionestabl() {
		return iddireccionestabl;
	}
	public void setIddireccionestabl(Long iddireccionestabl) {
		this.iddireccionestabl = iddireccionestabl;
	}
	public String getDireccionestabl() {
		return direccionestabl;
	}
	public void setDireccionestabl(String direccionestabl) {
		this.direccionestabl = direccionestabl;
	}
	public String getTelefonoestabl() {
		return telefonoestabl;
	}
	public void setTelefonoestabl(String telefonoestabl) {
		this.telefonoestabl = telefonoestabl;
	}
	public String getTelefonoemergestabl() {
		return telefonoemergestabl;
	}
	public void setTelefonoemergestabl(String telefonoemergestabl) {
		this.telefonoemergestabl = telefonoemergestabl;
	}
	public String getRadioestabl() {
		return radioestabl;
	}
	public void setRadioestabl(String radioestabl) {
		this.radioestabl = radioestabl;
	}
	public String getFaxestabl() {
		return faxestabl;
	}
	public void setFaxestabl(String faxestabl) {
		this.faxestabl = faxestabl;
	}
	public String getCorreoelectrestabl() {
		return correoelectrestabl;
	}
	public void setCorreoelectrestabl(String correoelectrestabl) {
		this.correoelectrestabl = correoelectrestabl;
	}
	public String getPaginawebestabl() {
		return paginawebestabl;
	}
	public void setPaginawebestabl(String paginawebestabl) {
		this.paginawebestabl = paginawebestabl;
	}
	public java.util.Date getFechainicactestabl() {
		return fechainicactestabl;
	}
	public void setFechainicactestabl(java.util.Date fechainicactestabl) {
		this.fechainicactestabl = fechainicactestabl;
	}
	public java.util.Date getFechacreacionestabl() {
		return fechacreacionestabl;
	}
	public void setFechacreacionestabl(java.util.Date fechacreacionestabl) {
		this.fechacreacionestabl = fechacreacionestabl;
	}
	public String getResolucionestabl() {
		return resolucionestabl;
	}
	public void setResolucionestabl(String resolucionestabl) {
		this.resolucionestabl = resolucionestabl;
	}
	public Long getIdautsanitariaestabl() {
		return idautsanitariaestabl;
	}
	public void setIdautsanitariaestabl(Long idautsanitariaestabl) {
		this.idautsanitariaestabl = idautsanitariaestabl;
	}
	public Long getIdinstitucionestabl() {
		return idinstitucionestabl;
	}
	public void setIdinstitucionestabl(Long idinstitucionestabl) {
		this.idinstitucionestabl = idinstitucionestabl;
	}
	public Long getIdred() {
		return idred;
	}
	public void setIdred(Long idred) {
		this.idred = idred;
	}
	public Long getIdmicrored() {
		return idmicrored;
	}
	public void setIdmicrored(Long idmicrored) {
		this.idmicrored = idmicrored;
	}
	public Long getIdunidadeje() {
		return idunidadeje;
	}
	public void setIdunidadeje(Long idunidadeje) {
		this.idunidadeje = idunidadeje;
	}
	public Long getIdodsis() {
		return idodsis;
	}
	public void setIdodsis(Long idodsis) {
		this.idodsis = idodsis;
	}
	public Long getIdclas() {
		return idclas;
	}
	public void setIdclas(Long idclas) {
		this.idclas = idclas;
	}
	public Long getIdpersonadirmed() {
		return idpersonadirmed;
	}
	public void setIdpersonadirmed(Long idpersonadirmed) {
		this.idpersonadirmed = idpersonadirmed;
	}
	public Long getIdcolegprofdirmed() {
		return idcolegprofdirmed;
	}
	public void setIdcolegprofdirmed(Long idcolegprofdirmed) {
		this.idcolegprofdirmed = idcolegprofdirmed;
	}
	public String getColegiatura() {
		return colegiatura;
	}
	public void setColegiatura(String colegiatura) {
		this.colegiatura = colegiatura;
	}
	public String getRnedirmed() {
		return rnedirmed;
	}
	public void setRnedirmed(String rnedirmed) {
		this.rnedirmed = rnedirmed;
	}
	public String getTelefonodirmed() {
		return telefonodirmed;
	}
	public void setTelefonodirmed(String telefonodirmed) {
		this.telefonodirmed = telefonodirmed;
	}
	public String getCorreoelectrdirmed() {
		return correoelectrdirmed;
	}
	public void setCorreoelectrdirmed(String correoelectrdirmed) {
		this.correoelectrdirmed = correoelectrdirmed;
	}
	public Long getAmbientestabl() {
		return ambientestabl;
	}
	public void setAmbientestabl(Long ambientestabl) {
		this.ambientestabl = ambientestabl;
	}
	public String getFlagpoblasig() {
		return flagpoblasig;
	}
	public void setFlagpoblasig(String flagpoblasig) {
		this.flagpoblasig = flagpoblasig;
	}
	public String getPoblasignada() {
		return poblasignada;
	}
	public void setPoblasignada(String poblasignada) {
		this.poblasignada = poblasignada;
	}
	public Long getTipoatencion() {
		return tipoatencion;
	}
	public void setTipoatencion(Long tipoatencion) {
		this.tipoatencion = tipoatencion;
	}
	public Long getGrupoetario() {
		return grupoetario;
	}
	public void setGrupoetario(Long grupoetario) {
		this.grupoetario = grupoetario;
	}
	public String getHorarioatencion() {
		return horarioatencion;
	}
	public void setHorarioatencion(String horarioatencion) {
		this.horarioatencion = horarioatencion;
	}
	public String getCampoclinico() {
		return campoclinico;
	}
	public void setCampoclinico(String campoclinico) {
		this.campoclinico = campoclinico;
	}
	public Long getIdsolicitud() {
		return idsolicitud;
	}
	public void setIdsolicitud(Long idsolicitud) {
		this.idsolicitud = idsolicitud;
	}
	public String getAccion() {
		return accion;
	}
	public void setAccion(String accion) {
		this.accion = accion;
	}
	public String getCliente() {
		return cliente;
	}
	public void setCliente(String cliente) {
		this.cliente = cliente;
	}
	public java.util.Date getFechareg() {
		return fechareg;
	}
	public void setFechareg(java.util.Date fechareg) {
		this.fechareg = fechareg;
	}
	public java.util.Date getFechamod() {
		return fechamod;
	}
	public void setFechamod(java.util.Date fechamod) {
		this.fechamod = fechamod;
	}
	public String getUsureg() {
		return usureg;
	}
	public void setUsureg(String usureg) {
		this.usureg = usureg;
	}
	public String getUsuamod() {
		return usuamod;
	}
	public void setUsuamod(String usuamod) {
		this.usuamod = usuamod;
	}
	public Long getIdusuasesion() {
		return idusuasesion;
	}
	public void setIdusuasesion(Long idusuasesion) {
		this.idusuasesion = idusuasesion;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

    

}

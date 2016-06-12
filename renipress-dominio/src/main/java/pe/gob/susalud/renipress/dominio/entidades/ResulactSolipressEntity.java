package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class ResulactSolipressEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idresulact_solipress;
    private Long idsolipress;
    private Long idactividad;
    private String flagtieneipress;
    private String conformidad01;
    private String obs01;
    private String conformidad02;
    private String obs02;
    private String flagsubs;
    private String comentariosubs;
    private Long idadjsubs;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdresulact_solipress(){
        return this.idresulact_solipress;
    }
    public void setIdresulact_solipress(Long idresulact_solipress){
        this.idresulact_solipress = idresulact_solipress;
    }
    public Long getIdsolipress(){
        return this.idsolipress;
    }
    public void setIdsolipress(Long idsolipress){
        this.idsolipress = idsolipress;
    }
    public Long getIdactividad(){
        return this.idactividad;
    }
    public void setIdactividad(Long idactividad){
        this.idactividad = idactividad;
    }
    public String getFlagtieneipress(){
        return this.flagtieneipress;
    }
    public void setFlagtieneipress(String flagtieneipress){
        this.flagtieneipress = flagtieneipress;
    }
    public String getConformidad01(){
        return this.conformidad01;
    }
    public void setConformidad01(String conformidad01){
        this.conformidad01 = conformidad01;
    }
    public String getObs01(){
        return this.obs01;
    }
    public void setObs01(String obs01){
        this.obs01 = obs01;
    }
    public String getConformidad02(){
        return this.conformidad02;
    }
    public void setConformidad02(String conformidad02){
        this.conformidad02 = conformidad02;
    }
    public String getObs02(){
        return this.obs02;
    }
    public void setObs02(String obs02){
        this.obs02 = obs02;
    }
    public String getAccion(){
        return this.accion;
    }
    public void setAccion(String accion){
        this.accion = accion;
    }
    public String getCliente(){
        return this.cliente;
    }
    public void setCliente(String cliente){
        this.cliente = cliente;
    }
    public Long getIdusuasesion(){
        return this.idusuasesion;
    }
    public void setIdusuasesion(Long idusuasesion){
        this.idusuasesion = idusuasesion;
    }
	/**
	 * @return the flagsubs
	 */
	public String getFlagsubs() {
		return flagsubs;
	}
	/**
	 * @param flagsubs the flagsubs to set
	 */
	public void setFlagsubs(String flagsubs) {
		this.flagsubs = flagsubs;
	}
	/**
	 * @return the comentariosubs
	 */
	public String getComentariosubs() {
		return comentariosubs;
	}
	/**
	 * @param comentariosubs the comentariosubs to set
	 */
	public void setComentariosubs(String comentariosubs) {
		this.comentariosubs = comentariosubs;
	}
	/**
	 * @return the idadjsubs
	 */
	public Long getIdadjsubs() {
		return idadjsubs;
	}
	/**
	 * @param idadjsubs the idadjsubs to set
	 */
	public void setIdadjsubs(Long idadjsubs) {
		this.idadjsubs = idadjsubs;
	}
    
    
}

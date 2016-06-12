package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class ResultadoSolipressEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idresultado_solipress;
    private Long idsolipress;
    
    private Long idupsss;
    private Long idrequisito;    
    private String flagtieneipress;
    private Long cantipress;
    private String conformidad01;
    private Long cant01;
    private String obs01;
    private String conformidad02;
    private Long cant02;
    private String obs02;
    private String accion;
    private String cliente;
    
    private String flagsubs;
    private String comentariosubs;
    private Long idadjsubs;
    
    private Long idusuasesion;

    public Long getIdresultado_solipress(){
        return this.idresultado_solipress;
    }
    public void setIdresultado_solipress(Long idresultado_solipress){
        this.idresultado_solipress = idresultado_solipress;
    }
    public Long getIdsolipress(){
        return this.idsolipress;
    }
    public void setIdsolipress(Long idsolipress){
        this.idsolipress = idsolipress;
    }

    public String getFlagtieneipress(){
        return this.flagtieneipress;
    }
    public void setFlagtieneipress(String flagtieneipress){
        this.flagtieneipress = flagtieneipress;
    }
    public Long getCantipress(){
        return this.cantipress;
    }
    public void setCantipress(Long cantipress){
        this.cantipress = cantipress;
    }
    public String getConformidad01(){
        return this.conformidad01;
    }
    public void setConformidad01(String conformidad01){
        this.conformidad01 = conformidad01;
    }
    public Long getCant01(){
        return this.cant01;
    }
    public void setCant01(Long cant01){
        this.cant01 = cant01;
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
    public Long getCant02(){
        return this.cant02;
    }
    public void setCant02(Long cant02){
        this.cant02 = cant02;
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
	 * @return the idupsss
	 */
	public Long getIdupsss() {
		return idupsss;
	}
	/**
	 * @param idupsss the idupsss to set
	 */
	public void setIdupsss(Long idupsss) {
		this.idupsss = idupsss;
	}
	/**
	 * @return the idrequisito
	 */
	public Long getIdrequisito() {
		return idrequisito;
	}
	/**
	 * @param idrequisito the idrequisito to set
	 */
	public void setIdrequisito(Long idrequisito) {
		this.idrequisito = idrequisito;
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

package pe.gob.susalud.renipress.dominio.entidades;

import java.text.SimpleDateFormat;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class PersonaEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idpersona;
    private String nombre;
    private String paterno;
    private String materno;
    private String casada;
    private Long tipodoc;
    private String doc;
    private Long idpais;
    private String correoelectr;
    private String telefono;
    private String movil;
    private Long idsexo;
    private java.util.Date fechanac;
    private String comentario;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdpersona(){
        return this.idpersona;
    }
    public void setIdpersona(Long idpersona){
        this.idpersona = idpersona;
    }
    public String getNombre(){
        return this.nombre;
    }
    public void setNombre(String nombre){
        this.nombre = nombre;
    }
    public String getPaterno(){
        return this.paterno;
    }
    public void setPaterno(String paterno){
        this.paterno = paterno;
    }
    public String getMaterno(){
        return this.materno;
    }
    public void setMaterno(String materno){
        this.materno = materno;
    }
    public String getCasada(){
        return this.casada;
    }
    public void setCasada(String casada){
        this.casada = casada;
    }
    public Long getTipodoc(){
        return this.tipodoc;
    }
    public void setTipodoc(Long tipodoc){
        this.tipodoc = tipodoc;
    }
    public String getDoc(){
        return this.doc;
    }
    public void setDoc(String doc){
        this.doc = doc;
    }
    public Long getIdpais(){
        return this.idpais;
    }
    public void setIdpais(Long idpais){
        this.idpais = idpais;
    }
    public String getCorreoelectr(){
        return this.correoelectr;
    }
    public void setCorreoelectr(String correoelectr){
        this.correoelectr = correoelectr;
    }
    public String getTelefono(){
        return this.telefono;
    }
    public void setTelefono(String telefono){
        this.telefono = telefono;
    }
    public String getMovil(){
        return this.movil;
    }
    public void setMovil(String movil){
        this.movil = movil;
    }
    public Long getIdsexo(){
        return this.idsexo;
    }
    public void setIdsexo(Long idsexo){
        this.idsexo = idsexo;
    }
    public java.util.Date getFechanac(){
        return this.fechanac;
    }
    public void setFechanac(java.util.Date fechanac){
        this.fechanac = fechanac;
    }
    public String getComentario(){
        return this.comentario;
    }
    public void setComentario(String comentario){
        this.comentario = comentario;
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
	public String getFechanacFmtrDate() {
		SimpleDateFormat simpledf = new SimpleDateFormat();
		simpledf.applyPattern("yyyy-MM-dd");
		return this.fechanac == null ? "" : simpledf.format(this.fechanac);
	}
	
	public String getStrFechanacFmtrDate() {
		SimpleDateFormat simpledf = new SimpleDateFormat();
		simpledf.applyPattern("dd/MM/yyyy");
		return this.fechanac == null ? "" : simpledf.format(this.fechanac);
	}
}

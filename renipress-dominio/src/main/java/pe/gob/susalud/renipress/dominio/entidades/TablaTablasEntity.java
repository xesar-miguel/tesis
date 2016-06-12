package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class TablaTablasEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idttablas;
    private Long idtabla;
    private String codvalor;
    private String nombrecampo;
    private String valor;
    private String abreviatura;
    private String comentario;

    public Long getIdttablas(){
        return this.idttablas;
    }
    public void setIdttablas(Long idttablas){
        this.idttablas = idttablas;
    }
    public Long getIdtabla(){
        return this.idtabla;
    }
    public void setIdtabla(Long idtabla){
        this.idtabla = idtabla;
    }
    public String getCodvalor(){
        return this.codvalor;
    }
    public void setCodvalor(String codvalor){
        this.codvalor = codvalor;
    }
    public String getNombrecampo(){
        return this.nombrecampo;
    }
    public void setNombrecampo(String nombrecampo){
        this.nombrecampo = nombrecampo;
    }
    public String getValor(){
        return this.valor;
    }
    public void setValor(String valor){
        this.valor = valor;
    }
    public String getAbreviatura(){
        return this.abreviatura;
    }
    public void setAbreviatura(String abreviatura){
        this.abreviatura = abreviatura;
    }
    public String getComentario(){
        return this.comentario;
    }
    public void setComentario(String comentario){
        this.comentario = comentario;
    }
}

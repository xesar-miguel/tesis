package pe.gob.susalud.renipress.dominio.entidades;

import java.util.ArrayList;
import java.util.List;

public class ReglasTreeEntity {

//	private String idUpss;
//	private String descripcionUpss;
	private String idRequisito;
	private String idPadreRequisito;
	private String descripcion;
	private Integer flag;
	private boolean showLink = true;
	private Long identificador;
	private boolean showEditar = false;
	private String obligatorio;
	private String comentario;
	private List<ReglasTreeEntity> nodos;

	public ReglasTreeEntity()
    {
		nodos = new ArrayList<ReglasTreeEntity>();
    }

	public Integer getFlag() {
		return flag;
	}

	public void setFlag(final Integer flag) {
		this.flag = flag;
	}

	public String getIdRequisito()
	{
		return idRequisito;
	}

	public void setIdRequisito(final String idRequisito) {
		this.idRequisito = idRequisito;
	}

	public String getIdPadreRequisito() {
		return idPadreRequisito;
	}

	public void setIdPadreRequisito(final String idPadreRequisito) {
		this.idPadreRequisito = idPadreRequisito;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(final String descripcion) {
		this.descripcion = descripcion;
	}

	public List<ReglasTreeEntity> getNodos() {
		return nodos;
	}

	public void setNodos(final List<ReglasTreeEntity> nodos) {
		this.nodos = nodos;
	}

	public boolean isShowLink() {
		return showLink;
	}

	public void setShowLink(final boolean showLink) {
		this.showLink = showLink;
	}

	public Long getIdentificador() {
		return identificador;
	}

	public void setIdentificador(final Long identificador) {
		this.identificador = identificador;
	}

	public boolean isShowEditar() {
		return showEditar;
	}

	public void setShowEditar(final boolean showEditar) {
		this.showEditar = showEditar;
	}

    public String getObligatorio()
    {
        return obligatorio;
    }

    public void setObligatorio(final String obligatorio)
    {
        this.obligatorio = obligatorio;
    }

    public String getComentario()
    {
        return comentario;
    }

    public void setComentario(final String comentario)
    {
        this.comentario = comentario;
    }

}

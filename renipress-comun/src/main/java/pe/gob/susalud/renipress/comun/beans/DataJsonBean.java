package pe.gob.susalud.renipress.comun.beans;

import java.io.Serializable;

public class DataJsonBean implements Serializable {

	private static final long serialVersionUID = 9221199608000723880L;

	private String estado;
	private String msg;
	private Object dataJson;

	public void setRespuesta(String estado, String msg, Object dataJson) {
		setEstado(estado);
		setMsg(msg);
		setDataJson(dataJson);
	}

	public void setRespuesta(String estado, String msg) {
		setEstado(estado);
		setMsg(msg);
	}	
	
	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		if (estado == null) this.estado = "";
		else this.estado = estado;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		if (msg == null) this.msg = "";
		else this.msg = msg;
	}

	public Object getDataJson() {
		return dataJson;
	}

	public void setDataJson(Object dataJson) {
		this.dataJson = dataJson;
	}

}
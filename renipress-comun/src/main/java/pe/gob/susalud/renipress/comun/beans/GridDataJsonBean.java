package pe.gob.susalud.renipress.comun.beans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class GridDataJsonBean implements Serializable {

	private static final long serialVersionUID = 9221199608000723880L;

	List<HashMap<String, Object>> data = new ArrayList<HashMap<String, Object>>();	
	
	public List<HashMap<String, Object>> getData() {
		return data;
	}

	public void setData(List<HashMap<String, Object>> data) {
		this.data = data;
	}

	public void setRespuesta(List<HashMap<String, Object>> data) {
		setData(data);
	}
		

}
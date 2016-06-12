
/**
 * 
 */
package pe.gob.susalud.renipress.comun.util;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

/***
 * @name      : General
 * @author    : millesca
 * @version   : 1.0
 * @copyrigth : SUSALUD
 */
public class General { 

	public static List<Map<String, Object>> obtenerDatos(String dataJson) throws Exception{
		ObjectMapper mapper = new ObjectMapper();

		List<Map<String, Object>> dataGrilla = mapper.readValue(dataJson, new TypeReference<List<HashMap<String, Object>>>() {
		});
		 
		return dataGrilla;
	}
}

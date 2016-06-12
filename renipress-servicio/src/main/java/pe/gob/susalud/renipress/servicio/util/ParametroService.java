package pe.gob.susalud.renipress.servicio.util;

import java.util.List;
import java.util.Map;

import pe.gob.susalud.renipress.dominio.entidades.ParametroEntity;

public interface ParametroService {
	public List<ParametroEntity> select(ParametroEntity entity) throws Exception;
	
	public void selectCorredores(Map<String, Object> params) throws Exception;
}

package pe.gob.susalud.renipress.negocio.util;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import pe.gob.susalud.renipress.dao.util.ParametroDAO;
import pe.gob.susalud.renipress.dominio.entidades.ParametroEntity;


@Component
public class ParametroNegocio {
	@Autowired
	private ParametroDAO parametroDAO;
 
	public List<ParametroEntity> select(ParametroEntity entity) throws Exception {
		return parametroDAO.select(entity); 
	}
	
	public void selectCorredores(Map<String, Object> params) throws Exception {
		parametroDAO.selectCorredores(params); 
	}
	
}

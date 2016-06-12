package pe.gob.susalud.renipress.servicio.util.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.gob.susalud.renipress.dominio.entidades.ParametroEntity;
import pe.gob.susalud.renipress.negocio.util.ParametroNegocio;
import pe.gob.susalud.renipress.servicio.util.ParametroService;

@Service("parametroService")
public class ParametroServiceImpl implements ParametroService {

	@Autowired
	private ParametroNegocio parametroNegocio;
	
	@Override
	public List<ParametroEntity> select(ParametroEntity entity)
			throws Exception {
		return parametroNegocio.select(entity);
	}
	
	@Override
	public void selectCorredores(Map<String, Object> params) throws Exception {
		parametroNegocio.selectCorredores(params);
	}
	
}

package pe.gob.susalud.renipress.servicio.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.gob.susalud.renipress.dominio.entidades.TablaTablasEntity;
import pe.gob.susalud.renipress.negocio.TablaTablasNegocio;
import pe.gob.susalud.renipress.servicio.TablaTablasService;

@Service("tablaTablasService")
public class TablaTablasServiceImpl implements TablaTablasService {
	
	@Autowired
	private TablaTablasNegocio tablaTablasNegocio;
	
	@Override
    public List<TablaTablasEntity> select(TablaTablasEntity entity) throws Exception {
		return tablaTablasNegocio.select(entity);
    }

    @Override
    public TablaTablasEntity selectPorNombreCampo(TablaTablasEntity entity) throws Exception {
	return tablaTablasNegocio.selectPorNombreCampo(entity);
    }
}

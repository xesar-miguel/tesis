package pe.gob.susalud.renipress.negocio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import pe.gob.susalud.renipress.dao.TablaTablasDAO;
import pe.gob.susalud.renipress.dominio.entidades.TablaTablasEntity;

@Component
public class TablaTablasNegocio {
	
	@Autowired
	private TablaTablasDAO tablaTablasDAO;
 
	public List<TablaTablasEntity> select(TablaTablasEntity entity) throws Exception {
		return tablaTablasDAO.select(entity); 
	} 

    public TablaTablasEntity selectPorNombreCampo(TablaTablasEntity entity) throws Exception {
		return tablaTablasDAO.selectPorNombreCampo(entity); 
	}
}

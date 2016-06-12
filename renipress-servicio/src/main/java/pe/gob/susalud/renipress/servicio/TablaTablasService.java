package pe.gob.susalud.renipress.servicio;

import java.util.List;
import java.util.Map;

import pe.gob.susalud.renipress.dominio.entidades.TablaTablasEntity;

public interface TablaTablasService {
	List<TablaTablasEntity> select(TablaTablasEntity entity) throws Exception;    
    TablaTablasEntity selectPorNombreCampo(TablaTablasEntity entity) throws Exception;
}

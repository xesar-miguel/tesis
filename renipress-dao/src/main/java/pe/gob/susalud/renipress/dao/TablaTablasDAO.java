package pe.gob.susalud.renipress.dao;

import java.util.List;

import pe.gob.susalud.renipress.dominio.entidades.TablaTablasEntity;

public interface TablaTablasDAO {
    public List<TablaTablasEntity> select(TablaTablasEntity entity) throws Exception;
    TablaTablasEntity selectPorNombreCampo(TablaTablasEntity entity)throws Exception;
}

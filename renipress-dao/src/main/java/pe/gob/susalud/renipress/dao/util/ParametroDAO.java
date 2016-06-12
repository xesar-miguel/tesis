package pe.gob.susalud.renipress.dao.util;

import java.util.Map;

import pe.gob.susalud.renipress.dominio.entidades.ParametroEntity;

public interface ParametroDAO {

    java.util.List<ParametroEntity> select(ParametroEntity entity) throws Exception;

    Long selectIdNextVal() throws Exception;

    void insert(ParametroEntity entity) throws Exception;

    void update(ParametroEntity entity) throws Exception;  
    
    void selectCorredores(Map<String, Object> params) throws Exception;
    
}

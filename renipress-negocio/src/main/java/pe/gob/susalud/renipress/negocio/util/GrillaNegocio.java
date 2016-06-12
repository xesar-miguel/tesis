package pe.gob.susalud.renipress.negocio.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import pe.gob.susalud.renipress.dao.grilla.GrillaDAO;

@Component
public class GrillaNegocio {
	
	@Autowired
	private GrillaDAO grillaDAO;
	
}

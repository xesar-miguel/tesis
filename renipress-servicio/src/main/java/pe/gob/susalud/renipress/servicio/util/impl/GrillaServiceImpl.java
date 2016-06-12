package pe.gob.susalud.renipress.servicio.util.impl;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.gob.susalud.renipress.negocio.util.GrillaNegocio;
import pe.gob.susalud.renipress.servicio.util.GrillaService;

@Service("grillaService")
public class GrillaServiceImpl implements GrillaService{
	
	@Autowired
	private GrillaNegocio grillaNegocio;

}

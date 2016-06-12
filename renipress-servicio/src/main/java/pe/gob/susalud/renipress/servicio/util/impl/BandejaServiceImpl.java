/**
 * 
 */
package pe.gob.susalud.renipress.servicio.util.impl;
 
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.gob.susalud.renipress.negocio.util.BandejaNegocio;
import pe.gob.susalud.renipress.servicio.util.BandejaService;

@Service("bandejaService")
public class BandejaServiceImpl implements BandejaService{
	
	static final Logger log = LogManager.getLogger(BandejaServiceImpl.class);
	
	@Autowired
	private BandejaNegocio bandejaNegocio;

	@Override
	public void selectBandejaAprobarPlanCategorizador(Map<String, Object> map) {
		bandejaNegocio.selectBandejaAprobarPlanCategorizador(map);
	}
	
}

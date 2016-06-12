/**
 * 
 */
package pe.gob.susalud.renipress.negocio.util;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import pe.gob.susalud.renipress.dao.grilla.BandejaDAO;

@Component
public class BandejaNegocio {
	
	@Autowired
	private BandejaDAO bandejaDAO;
	
	public void selectBandejaAprobarPlanCategorizador(Map<String, Object> map) {
		bandejaDAO.selectBandejaAprobarPlanCategorizador(map);
	}
}
package pe.gob.susalud.renipress.controlador.util;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import pe.gob.susalud.renipress.dominio.entidades.ParametroEntity;
import pe.gob.susalud.renipress.servicio.util.ParametroService;

@Component("parametros")
public class Parametros {

	private List<ParametroEntity> lista = null;

	@Autowired
	@Qualifier("parametroService")
	private ParametroService parametroService;

	public String getParametro(String codigoParametro) {
		String vParametro = "";
		ParametroEntity parametro = new ParametroEntity();
		parametro.setCodigo(codigoParametro);
		try { 
			lista = this.getLista();
		} catch (Exception e) {
			vParametro = "";
		}
		for (ParametroEntity parametroEntity : lista) {
			if (codigoParametro.equalsIgnoreCase(parametroEntity.getCodigo())) {
				vParametro = parametroEntity.getValor();
			}
		}
		return vParametro;
	}

	private List<ParametroEntity> getLista() {
		if (lista == null) {
			try {
				this.setLista(parametroService.select(new ParametroEntity()));
			} catch (Exception e) {
				this.setLista(new ArrayList<ParametroEntity>());
			}
		}
		return lista;
	}

	private void setLista(List<ParametroEntity> lista) {
		this.lista = lista;
	}

}

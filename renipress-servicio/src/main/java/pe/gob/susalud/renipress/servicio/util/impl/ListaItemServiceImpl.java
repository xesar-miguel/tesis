package pe.gob.susalud.renipress.servicio.util.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.gob.susalud.renipress.comun.beans.ListaItem;
import pe.gob.susalud.renipress.negocio.util.ListaItemNegocio;
import pe.gob.susalud.renipress.servicio.util.ListaItemService;

@Service("listaItemService")
public class ListaItemServiceImpl implements ListaItemService {
 
	@Autowired 
	private ListaItemNegocio listaItemNegocio;

	@Override
	public List<ListaItem> selectAutoridadSanitaria(ListaItem item) throws Exception {
		return listaItemNegocio.selectAutoridadSanitaria(item);
	}

	@Override
	public List<ListaItem> selectDepartamento(ListaItem item) throws Exception {
		return listaItemNegocio.selectDepartamento(item);
	}

	@Override
	public List<ListaItem> selectProvincia(ListaItem item) throws Exception {
		return listaItemNegocio.selectProvincia(item);
	}

	@Override
	public List<ListaItem> selectDistrito(ListaItem item) throws Exception {
		return listaItemNegocio.selectDistrito(item);
	}

	@Override
	public List<ListaItem> selectProcesoAbreviatura(ListaItem item) throws Exception {
		return listaItemNegocio.selectProcesoAbreviatura(item);
	}

	@Override
	public List<ListaItem> selectTablaID(ListaItem item) throws Exception {
		return listaItemNegocio.selectTablaID(item);
	}
	
}

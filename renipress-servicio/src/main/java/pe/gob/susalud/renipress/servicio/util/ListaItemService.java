package pe.gob.susalud.renipress.servicio.util;

import java.util.List;

import pe.gob.susalud.renipress.comun.beans.ListaItem;

public interface ListaItemService {
	public List<ListaItem> selectAutoridadSanitaria(ListaItem item) throws Exception;
	public List<ListaItem> selectDepartamento(ListaItem item) throws Exception;
	public List<ListaItem> selectProvincia(ListaItem item) throws Exception;
	public List<ListaItem> selectDistrito(ListaItem item) throws Exception;
	public List<ListaItem> selectProcesoAbreviatura(ListaItem item) throws Exception;
	public List<ListaItem> selectTablaID(ListaItem item) throws Exception;
}


package pe.gob.susalud.renipress.negocio.util;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import pe.gob.susalud.renipress.comun.beans.ListaItem;
import pe.gob.susalud.renipress.comun.beans.RedBean;
import pe.gob.susalud.renipress.comun.util.Constantes;
import pe.gob.susalud.renipress.dao.util.ListaItemDAO;
import pe.gob.susalud.renipress.negocio.base.BaseNegocio;

@Component
public class ListaItemNegocio extends BaseNegocio {

	@Autowired
	private ListaItemDAO listaItemDAO;

	public List<ListaItem> selectTabla(ListaItem item) throws Exception {
		return listaItemDAO.selectTabla(item);
	}

	public List<ListaItem> selectTablas(ListaItem item) throws Exception {
		return listaItemDAO.selectTablas(item);
	}
	
	public List<ListaItem> selectAutoridadSanitaria(ListaItem item) throws Exception {
		return listaItemDAO.selectAutoridadSanitaria(item);
	}

	public List<ListaItem> selectPais() throws Exception {
		return listaItemDAO.selectPais();
	}
	
	public List<ListaItem> selectProceso() throws Exception {
		return listaItemDAO.selectProceso();
	}

	public List<ListaItem> selectProcesoAbreviatura(ListaItem item) throws Exception {
		return listaItemDAO.selectProcesoAbreviatura(item);
	}

	public List<ListaItem> selectEstados(ListaItem item) throws Exception {
		return listaItemDAO.selectEstados(item);
	}

	public List<ListaItem> selectSiNo() {
		// ESTOS DATOS NO SE TRAE DE BD
		List<ListaItem> lista = new ArrayList<ListaItem>();		
		ListaItem item = null;
		// ITEM SI
		item = new ListaItem();
		item.setId(Constantes.SI_VALOR);
		item.setLabel(Constantes.SI);
		lista.add(item);
		// ITEM NO
		item = new ListaItem();
		item.setId(Constantes.NO_VALOR);
		item.setLabel(Constantes.NO);
		lista.add(item);		
		return lista;
	}

	public List<ListaItem> selectNumCorreoElectronico(String item) {
		// ESTOS DATOS NO SE TRAE DE BD
		List<ListaItem> lista = new ArrayList<ListaItem>();		
		ListaItem oItem = null;
		int cantidadCorreo = 0;
		try{
			cantidadCorreo = JS.toInt(item);
		}catch(Exception e){
			cantidadCorreo = 0;
		}

		for(int i = 1; i <= cantidadCorreo; i++){
			oItem = new ListaItem();
			oItem.setId(i+"");
			oItem.setLabel(i+"");
			lista.add(oItem);
		}		
		
		return lista;
	}

	public List<ListaItem> selectProcesoTarea(ListaItem listaItem) throws Exception {
		return listaItemDAO.selectProcesoTarea(listaItem);
	}

	public List<ListaItem> selectProcesoEstado(ListaItem listaItem) throws Exception {
		return listaItemDAO.selectProcesoEstado(listaItem);
	}

	public List<ListaItem> selectPerfilEstado(ListaItem listaItem) throws Exception  {
		return listaItemDAO.selectPerfilEstado(listaItem);
	}

	public List<ListaItem> selectEstadoAmbito(ListaItem listaItem) throws Exception  {
		return listaItemDAO.selectEstadoAmbito(listaItem);
	}	

	public List<ListaItem> selectDepartamento(ListaItem listaItem) throws Exception {
		return listaItemDAO.selectDepartamento(listaItem);
	}

	public List<ListaItem> selectProvincia(ListaItem listaItem) throws Exception {
		return listaItemDAO.selectProvincia(listaItem);
	}

	public List<ListaItem> selectDistrito(ListaItem listaItem) throws Exception {
		return listaItemDAO.selectDistrito(listaItem);
	}
	
	/**
	 * @name   selectDistritoCodUbigeo - selecciona los distritos con el codigo de ubigeo como id
	 * @param listaItem
	 * @return
	 * @author [BIT] - rordonez
	 * @fecha  16/4/2015
	 */
	public List<ListaItem> selectDistritoCodUbigeo(ListaItem listaItem) throws Exception {
		return listaItemDAO.selectDistritoCodUbigeo(listaItem);
	}
	
	
	public List<ListaItem> selectTablas_tablas(ListaItem item) throws Exception {
		return listaItemDAO.selectTablas_tablas(item);
	}
	
	public List<ListaItem> selectRequisitoId(ListaItem item) throws Exception {
		return listaItemDAO.selectRequisitoId(item);
	}
	public List<ListaItem> selectModulo() throws Exception {
		return listaItemDAO.selectModulo();
	}
	
	public List<ListaItem> selectRequisito() throws Exception {
		return listaItemDAO.selectRequisito();
	}
	
	public List<ListaItem> selectNorma_estado() throws Exception {
		return listaItemDAO.selectNorma_estado();
	}
	
	public List<ListaItem> selectCategoria_estadosc(ListaItem listaItem) throws Exception {
		return listaItemDAO.selectCategoria_estadosc(listaItem);
	}
	
	public List<ListaItem> selectCategoria_estado() throws Exception {
		return listaItemDAO.selectCategoria_estado();
	}
	
	public List<ListaItem> selectTareaEstado(ListaItem listaItem)throws Exception{
		return listaItemDAO.selectTareaEstado(listaItem);
	}
	
	public List<ListaItem> selectItem_nivel_complejidad() throws Exception {
		return listaItemDAO.selectItem_nivel_complejidad();
	}
	
	public List<ListaItem> selectItem_nivel_atencion() throws Exception {
		return listaItemDAO.selectItem_nivel_atencion();
	}

	public List<ListaItem> selectTareaEstadoEstado(ListaItem listaItem) throws Exception {
		return listaItemDAO.selectTareaEstadoEstado(listaItem);
	}
		
	public List<ListaItem> selectTablaID(ListaItem item) throws Exception {
		return listaItemDAO.selectTablaID(item);
	}
	
	public List<ListaItem> selectInstituciones(ListaItem item) throws Exception {
		return listaItemDAO.selectInstituciones(item);
	}
	
	public List<ListaItem> selectUnidadEjecutora(ListaItem item) throws Exception {
		return listaItemDAO.selectUnidadEjecutora(item);
	}
	
	public List<ListaItem> selectCategoria(ListaItem item) throws Exception {
		return listaItemDAO.selectCategoria(item);
	}
	
	public List<ListaItem> selectRed(ListaItem item) throws Exception {
		return listaItemDAO.selectRed(item);
	}
	
	public List<ListaItem> selectMicroRed(ListaItem item) throws Exception {
		return listaItemDAO.selectMicroRed(item);
	}
	
	public RedBean selectRedPorId(ListaItem item) throws Exception {
		return listaItemDAO.selectRedPorId(item);
	}

	public List<ListaItem> selectReglaByNorma(ListaItem item) throws Exception {
		return listaItemDAO.selectReglaByNorma(item);
	}
	
	public List<ListaItem> selectTablas_tipoDocumento() throws Exception {
		return listaItemDAO.selectTablas_tipoDocumento();
	}

	public List<ListaItem> selectCategoriaOpinion(ListaItem item) throws Exception {
		return listaItemDAO.selectCategoriaOpinion(item);
	}
	
	//NO BORRAR JVERA
	public List<ListaItem> selectIpress(ListaItem item) throws Exception {
		return listaItemDAO.selectIpress(item);
	}
	
	public List<ListaItem> selectUPSS(ListaItem item) throws Exception {
		return listaItemDAO.selectUPSS(item);
	}
	
	public List<ListaItem> selectColegio(ListaItem item) throws Exception {
		return listaItemDAO.selectColegio(item);
	}
	
	public List<ListaItem> selectEspecialidad(ListaItem item) throws Exception {
		return listaItemDAO.selectEspecialidad(item);
	}
	
	public List<ListaItem> selectCategoriaAsignadaAct(ListaItem item) throws Exception {
		return listaItemDAO.selectCategoriaAsignadaAct(item);
	}
	
	public List<ListaItem> selectSoliReporte(ListaItem item) throws Exception {
		return listaItemDAO.selectSoliReporte(item);
	}
	
	public List<ListaItem> selectTareaSiguiente(ListaItem item) throws Exception {
		return listaItemDAO.selectTareaSiguiente(item);
	}
	
	public List<ListaItem> selectObtUsuAutoSanitaria(ListaItem item) throws Exception {
		return listaItemDAO.selectObtUsuAutoSanitaria(item);
	}
	
	public List<ListaItem> selectEstadoSiguiente(ListaItem item) throws Exception {
		return listaItemDAO.selectEstadoSiguiente(item);
	}

	public List<ListaItem> selectEstadoVisita(ListaItem item) throws Exception {
		return listaItemDAO.selectEstadoVisita(item);
	}
	
	public List<ListaItem> selectCargoUsuario(ListaItem item) throws Exception {
		return listaItemDAO.selectCargoUsuario(item);
	}
	
	public List<ListaItem> selectDepartamentos() throws Exception {
		return listaItemDAO.selectDepartamentos();
	}
        

       public List<ListaItem> selectTipoSolicitud() throws Exception {
           return listaItemDAO.selectTipoSolicitud();
       }

	public List<ListaItem> selectSexo() throws Exception {
            return listaItemDAO.selectSexo();
	}

    public List<ListaItem> selectTipoSolicitudAll() {
        return listaItemDAO.selectTipoSolicitudAll();
    }
}

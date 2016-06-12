package pe.gob.susalud.renipress.dao.util;

import java.util.List;

import pe.gob.susalud.renipress.comun.beans.ListaItem;
import pe.gob.susalud.renipress.comun.beans.RedBean;

public interface ListaItemDAO {
	List<ListaItem> selectTabla(ListaItem item) throws Exception;
	List<ListaItem> selectTablas(ListaItem item) throws Exception;
	List<ListaItem> selectTablas_tablas(ListaItem item) throws Exception;
	List<ListaItem> selectTablas_tipoDocumento() throws Exception;
	List<ListaItem> selectRequisitoId(ListaItem item) throws Exception;
	List<ListaItem> selectAutoridadSanitaria(ListaItem item) throws Exception;	
	List<ListaItem> selectPais() throws Exception;	
	List<ListaItem> selectProceso() throws Exception;
	List<ListaItem> selectProcesoAbreviatura(ListaItem item) throws Exception;
	List<ListaItem> selectEstados(ListaItem item) throws Exception;
	List<ListaItem> selectProcesoTarea(ListaItem listaItem) throws Exception;
	List<ListaItem> selectProcesoEstado(ListaItem listaItem) throws Exception;	
	List<ListaItem> selectPerfilEstado(ListaItem listaItem)throws Exception;
	List<ListaItem> selectDistrito(ListaItem listaItem)throws Exception;
	List<ListaItem> selectDistritoCodUbigeo(ListaItem listaItem)throws Exception;
	List<ListaItem> selectProvincia(ListaItem listaItem)throws Exception;
	List<ListaItem> selectTareaEstado(ListaItem listaItem)throws Exception;
	List<ListaItem> selectEstadoAmbito(ListaItem listaItem)throws Exception;
	List<ListaItem> selectDepartamento(ListaItem listaItem)throws Exception;
	List<ListaItem> selectModulo() throws Exception;
	List<ListaItem> selectRequisito() throws Exception;
	List<ListaItem> selectNorma_estado() throws Exception;
	List<ListaItem> selectCategoria_estadosc(ListaItem listaItem) throws Exception;
	
	List<ListaItem> selectCategoria_estado() throws Exception;
	
	java.util.List<ListaItem> selectItem_nivel_complejidad() throws Exception;
	java.util.List<ListaItem> selectItem_nivel_atencion() throws Exception;
	
	java.util.List<ListaItem> selectTareaEstadoEstado(ListaItem listaItem) throws Exception;
	
	List<ListaItem> selectTablaID(ListaItem item) throws Exception;
	
	List<ListaItem> selectInstitucion() throws Exception;
	
	public java.util.List<ListaItem> selectInstituciones(ListaItem listaItem) throws Exception;
	
	List<ListaItem> selectUnidadEjecutora(ListaItem item) throws Exception;
	List<ListaItem> selectRed(ListaItem item) throws Exception;
	List<ListaItem> selectMicroRed(ListaItem item) throws Exception;
	List<ListaItem> selectReglaByNorma(ListaItem item) throws Exception;
	RedBean selectRedPorId(ListaItem item) throws Exception;
	
	public java.util.List<ListaItem> selectCategoria(ListaItem listaItem) throws Exception;
	List<ListaItem> selectObtUsuAutoSanitaria(ListaItem item) throws Exception;

	public java.util.List<ListaItem> selectCategoriaOpinion(ListaItem listaItem) throws Exception;

	//NO BORRAR JVERA
	public List<ListaItem> selectIpress(ListaItem listaItem) throws Exception;
	public List<ListaItem> selectUPSS(ListaItem listaItem) throws Exception;
	public List<ListaItem> selectColegio(ListaItem listaItem) throws Exception;
	public List<ListaItem> selectEspecialidad(ListaItem listaItem) throws Exception;
	
	public List<ListaItem> selectCategoriaAsignadaAct(ListaItem item) throws Exception;
	public List<ListaItem> selectSoliReporte(ListaItem item) throws Exception;
	public List<ListaItem> selectTareaSiguiente(ListaItem item) throws Exception;
	public List<ListaItem> selectEstadoSiguiente(ListaItem item) throws Exception;
	public List<ListaItem> selectCargoUsuario(ListaItem item) throws Exception;
	java.util.List<ListaItem> selectEstadoVisita(ListaItem listaItem) throws Exception;
	public List<ListaItem> selectDepartamentos() throws Exception;
        
        //Adiconado por dlarico
        public List<ListaItem> selectTipoSolicitud() throws Exception;
        public List<ListaItem> selectSexo()throws Exception;

    public List<ListaItem> selectTipoSolicitudAll();
}

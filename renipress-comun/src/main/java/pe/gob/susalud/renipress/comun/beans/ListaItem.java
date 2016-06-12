package pe.gob.susalud.renipress.comun.beans;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;

import com.jcfr.utiles.web.ComboWebItem;

import pe.gob.susalud.renipress.comun.util.Constantes;

public class ListaItem extends ComboWebItem {
	
	private String campo = ""; 
	private String tabla = "";

	private Long indice;
	private Long indicador;
	private Long codigo;
		   
	public ListaItem(String id, String label) {
		super(id, label);		
	} 
	
	public ListaItem(String campo) {
		super("",""); 
		this.campo = campo; 
	} 
	
	public ListaItem(String campo, String tabla, boolean sw) {
		super("",""); 		
		this.tabla = tabla; // PRIMERO TABLA
		this.campo = campo; // SEGUNDO CAMPO 			 			
	}
	
	public ListaItem() {
		super("",""); 
	}
			
	public static List<ComboWebItem> getLista(List<ListaItem> listaItem , String ...tipo){
		List<ComboWebItem> combo = new ArrayList<ComboWebItem>();
		 
		if (tipo.length > 0){
			if ( Constantes.MOD_REG_CAT.COMBO_ALL.equals(  tipo[0] ))
				combo.add(new ComboWebItem("0","(Todos)"));
			else if ( Constantes.MOD_REG_CAT.COMBO_SEL.equals(  tipo[0] ))
				combo.add(new ComboWebItem("-1","(Seleccione)"));
			else if ( Constantes.MOD_REG_CAT.COMBO_VACIO.equals(  tipo[0] ))
				combo.add(new ComboWebItem("-1",""));
			else if ( Constantes.MOD_REG_CAT.COMBO_SEL_TODOS.equals(  tipo[0] )){
				combo.add(new ComboWebItem("-1","(Seleccione)"));
				combo.add(new ComboWebItem("-2","(Todos)"));
			}else if ( Constantes.MOD_REG_CAT.COMBO_TODOS_NEW.equals(  tipo[0] )){				
				combo.add(new ComboWebItem("-2","(Todos)"));
			}
				
		}
							
		for (ListaItem item : listaItem) {
			combo.add((ComboWebItem)item);
		}			
		return combo;		
	}
	
	public static String getLabel(List<ListaItem> listaItem , Object pid){
		String label = "";
		String id = "";
		
		try{
			id = pid.toString();
		}catch(Exception e){
			id = "";
		}
		
		if (!id.isEmpty()){
			for (ListaItem lista : listaItem) {
				if ( StringUtils.trimToEmpty(id).equalsIgnoreCase(lista.getId()) ){
					label = lista.getLabel();
					break;
				}			
	        }
		}
				
		return label;		
	}
			
	private static final long serialVersionUID = 1L;

	public String getCampo() {
		return campo;
	}

	public void setCampo(String campo) {
		this.campo = campo;
	}
	
	public String getTabla() {
		return tabla;
	}

	public void setTabla(String tabla) {
		this.tabla = tabla;
	}
	
	public Long getIndice() {
		return indice;
	}

	public void setIndice(Long indice) {
		this.indice = indice;
	}

	public Long getIndicador() {
		return indicador;
	}

	public void setIndicador(Long indicador) {
		this.indicador = indicador;
	}

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}
}

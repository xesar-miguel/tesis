package pe.gob.susalud.renipress.controlador.util;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import pe.gob.susalud.renipress.dominio.entidades.TablaTablasEntity;
import pe.gob.susalud.renipress.servicio.TablaTablasService;

@Component("tablaTablas")
public class TablaTablas {

	private List<TablaTablasEntity> lista = null;

	@Autowired
	@Qualifier("tablaTablasService")
	private TablaTablasService tablaTablasService;

	public String getRuta(Long tabla, String nombrecampo) {
		String vRuta = "";
		TablaTablasEntity tablasEntity = new TablaTablasEntity();
		tablasEntity.setIdtabla(tabla);
		tablasEntity.setNombrecampo(nombrecampo);
		
		try { 
			lista = this.getLista();
		} catch (Exception e) {
			vRuta = "";
		}
		for (TablaTablasEntity tablaTablasEntity : lista) {
			if (	tablasEntity.getIdtabla().equals(tablaTablasEntity.getIdtabla())
				&&  tablasEntity.getNombrecampo().equalsIgnoreCase(tablaTablasEntity.getNombrecampo())
			   ) {
				vRuta = tablaTablasEntity.getComentario();
			}
		}
		return vRuta;
	}
	
	public String getAbreviatura(Long tabla, String nombrecampo){
		String vAbreviatura = "";
		TablaTablasEntity tablasEntity = new TablaTablasEntity();
		tablasEntity.setIdtabla(tabla);
		tablasEntity.setNombrecampo(nombrecampo);
		
		try { 
			lista = this.getLista();
		} catch (Exception e) {
			vAbreviatura = "";
		}
		for (TablaTablasEntity tablaTablasEntity : lista) {
			if (	tablasEntity.getIdtabla().equals(tablaTablasEntity.getIdtabla())
				&&  tablasEntity.getNombrecampo().equalsIgnoreCase(tablaTablasEntity.getNombrecampo())
			   ) {
				vAbreviatura = tablaTablasEntity.getAbreviatura();
				break;
			}
		}
		return vAbreviatura;
	}
	
	public String getCodValor(Long tabla, String nombrecampo){
		String vCodValor = "";
		TablaTablasEntity tablasEntity = new TablaTablasEntity();
		tablasEntity.setIdtabla(tabla);
		tablasEntity.setNombrecampo(nombrecampo);
		
		try { 
			lista = this.getLista();
		} catch (Exception e) {
			vCodValor = "";
		}
		for (TablaTablasEntity tablaTablasEntity : lista) {
			if (	tablasEntity.getIdtabla().equals(tablaTablasEntity.getIdtabla())
				&&  tablasEntity.getNombrecampo().equalsIgnoreCase(tablaTablasEntity.getNombrecampo())
			   ) {
				vCodValor = tablaTablasEntity.getCodvalor();
				break;
			}
		}
		return vCodValor;
	}

	private List<TablaTablasEntity> getLista() {
		if (lista == null) {
			try {
				this.setLista(tablaTablasService.select(new TablaTablasEntity()));
			} catch (Exception e) {
				this.setLista(new ArrayList<TablaTablasEntity>());
			}
		}
		return lista;
	}

	private void setLista(List<TablaTablasEntity> lista) {
		this.lista = lista;
	}

}

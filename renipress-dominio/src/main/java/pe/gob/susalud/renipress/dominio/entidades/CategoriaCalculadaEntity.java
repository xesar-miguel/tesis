package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class CategoriaCalculadaEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idcategcalculada;
    private Long idcategoria;
    private Long idsolicitud;
    private String accion;
    private String cliente;
    private Long idusuasesion;

    public Long getIdcategcalculada(){
        return this.idcategcalculada;
    }
    public void setIdcategcalculada(Long idcategcalculada){
        this.idcategcalculada = idcategcalculada;
    }
    public Long getIdcategoria(){
        return this.idcategoria;
    }
    public void setIdcategoria(Long idcategoria){
        this.idcategoria = idcategoria;
    }
    public Long getIdsolicitud(){
        return this.idsolicitud;
    }
    public void setIdsolicitud(Long idsolicitud){
        this.idsolicitud = idsolicitud;
    }
    public String getAccion(){
        return this.accion;
    }
    public void setAccion(String accion){
        this.accion = accion;
    }
    public String getCliente(){
        return this.cliente;
    }
    public void setCliente(String cliente){
        this.cliente = cliente;
    }
    public Long getIdusuasesion(){
        return this.idusuasesion;
    }
    public void setIdusuasesion(Long idusuasesion){
        this.idusuasesion = idusuasesion;
    }
}

package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class EquipoOperativoEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idequipooper;
    private Long idsolicitud;
    private Long estado;
    private String accion;
    private String cliente;
    private Long idusuasesion;
    private Long equipooper;

    public Long getIdequipooper(){
        return this.idequipooper;
    }
    public void setIdequipooper(Long idequipooper){
        this.idequipooper = idequipooper;
    }
    public Long getIdsolicitud(){
        return this.idsolicitud;
    }
    public void setIdsolicitud(Long idsolicitud){
        this.idsolicitud = idsolicitud;
    }
    public Long getEstado(){
        return this.estado;
    }
    public void setEstado(Long estado){
        this.estado = estado;
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
	public Long getEquipooper() {
		return equipooper;
	}
	public void setEquipooper(Long equipooper) {
		this.equipooper = equipooper;
	}
}

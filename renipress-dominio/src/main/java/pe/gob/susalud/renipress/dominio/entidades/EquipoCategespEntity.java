package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class EquipoCategespEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idequipocategesp;
    private Long idsolicitud;
    private Long idpersona;
    private Long estado;
    private String accion;
    private String cliente;
    private Long idusuasesion;
    private Long cargo;

    public Long getIdequipocategesp(){
        return this.idequipocategesp;
    }
    public void setIdequipocategesp(Long idequipocategesp){
        this.idequipocategesp = idequipocategesp;
    }
    public Long getIdsolicitud(){
        return this.idsolicitud;
    }
    public void setIdsolicitud(Long idsolicitud){
        this.idsolicitud = idsolicitud;
    }
    public Long getIdpersona(){
        return this.idpersona;
    }
    public void setIdpersona(Long idpersona){
        this.idpersona = idpersona;
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
	public Long getCargo() {
		return cargo;
	}
	public void setCargo(Long cargo) {
		this.cargo = cargo;
	}
}

package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class ReqEspecialidadEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idreqespecialidad;
    private Long idrequisito;
    private Long idespecialidad;
    private Long idestado;
    private String accion;
    private String ipcliente;
    private Long idusuasesion;

    public Long getIdreqespecialidad(){
        return this.idreqespecialidad;
    }
    public void setIdreqespecialidad(Long idreqespecialidad){
        this.idreqespecialidad = idreqespecialidad;
    }
    public Long getIdrequisito(){
        return this.idrequisito;
    }
    public void setIdrequisito(Long idrequisito){
        this.idrequisito = idrequisito;
    }
    public Long getIdespecialidad(){
        return this.idespecialidad;
    }
    public void setIdespecialidad(Long idespecialidad){
        this.idespecialidad = idespecialidad;
    }
  
	public Long getIdestado() {
		return idestado;
	}
	public void setIdestado(Long idestado) {
		this.idestado = idestado;
	}
	public String getAccion(){
        return this.accion;
    }
    public void setAccion(String accion){
        this.accion = accion;
    }
    
    public String getIpcliente() {
		return ipcliente;
	}
	public void setIpcliente(String ipcliente) {
		this.ipcliente = ipcliente;
	}
	public Long getIdusuasesion(){
        return this.idusuasesion;
    }
    public void setIdusuasesion(Long idusuasesion){
        this.idusuasesion = idusuasesion;
    }
}

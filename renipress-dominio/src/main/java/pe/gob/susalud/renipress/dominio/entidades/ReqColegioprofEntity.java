package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class ReqColegioprofEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idreqcolegprof;
    private Long idrequisito;
    private Long idcolegprof;
    private Long idestado;
    private String accion;
    private String ipcliente;
    private Long idusuasesion;

    public Long getIdreqcolegprof(){
        return this.idreqcolegprof;
    }
    public void setIdreqcolegprof(Long idreqcolegprof){
        this.idreqcolegprof = idreqcolegprof;
    }
    public Long getIdrequisito(){
        return this.idrequisito;
    }
    public void setIdrequisito(Long idrequisito){
        this.idrequisito = idrequisito;
    }
    public Long getIdcolegprof(){
        return this.idcolegprof;
    }
    public void setIdcolegprof(Long idcolegprof){
        this.idcolegprof = idcolegprof;
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

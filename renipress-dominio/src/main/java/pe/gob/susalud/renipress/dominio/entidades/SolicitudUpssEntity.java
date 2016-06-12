package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class SolicitudUpssEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idsoli_upss;
    private Long idsolicitud;
    private Long idupss;
    private String flagincluir;
    private String flagincluir2;

    public Long getIdsoli_upss(){
        return this.idsoli_upss;
    }
    public void setIdsoli_upss(Long idsoli_upss){
        this.idsoli_upss = idsoli_upss;
    }
    public Long getIdsolicitud(){
        return this.idsolicitud;
    }
    public void setIdsolicitud(Long idsolicitud){
        this.idsolicitud = idsolicitud;
    }
    public Long getIdupss(){
        return this.idupss;
    }
    public void setIdupss(Long idupss){
        this.idupss = idupss;
    }
    public String getFlagincluir(){
        return this.flagincluir;
    }
    public void setFlagincluir(String flagincluir){
        this.flagincluir = flagincluir;
    }
    public String getFlagincluir2(){
        return this.flagincluir2;
    }
    public void setFlagincluir2(String flagincluir2){
        this.flagincluir2 = flagincluir2;
    }
}
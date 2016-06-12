package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class TareaEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idtarea;
    private Long tipotarea;
    private String flagtareatupa;
    private Long tipodias;
    private Long idproceso;
    private Long idperfil;
    private Long idautorsanit;
    private String descripcion;
    private Long cantdias;
    private String flagtareafinal;
    private String flagtipoalertmensaj;
    private String flagtipoalertcorreo;
    private Long cantcorreo;
    private Long estado;

    public Long getIdtarea(){
        return this.idtarea;
    }
    public void setIdtarea(Long idtarea){
        this.idtarea = idtarea;
    }
    public Long getTipotarea(){
        return this.tipotarea;
    }
    public void setTipotarea(Long tipotarea){
        this.tipotarea = tipotarea;
    }
    public String getFlagtareatupa(){
        return this.flagtareatupa;
    }
    public void setFlagtareatupa(String flagtareatupa){
        this.flagtareatupa = flagtareatupa;
    }
    public Long getTipodias(){
        return this.tipodias;
    }
    public void setTipodias(Long tipodias){
        this.tipodias = tipodias;
    }
    public Long getIdproceso(){
        return this.idproceso;
    }
    public void setIdproceso(Long idproceso){
        this.idproceso = idproceso;
    }
    public Long getIdperfil(){
        return this.idperfil;
    }
    public void setIdperfil(Long idperfil){
        this.idperfil = idperfil;
    }
    public Long getIdautorsanit(){
        return this.idautorsanit;
    }
    public void setIdautorsanit(Long idautorsanit){
        this.idautorsanit = idautorsanit;
    }
    public String getDescripcion(){
        return this.descripcion;
    }
    public void setDescripcion(String descripcion){
        this.descripcion = descripcion;
    }
    public Long getCantdias(){
        return this.cantdias;
    }
    public void setCantdias(Long cantdias){
        this.cantdias = cantdias;
    }
    public String getFlagtareafinal(){
        return this.flagtareafinal;
    }
    public void setFlagtareafinal(String flagtareafinal){
        this.flagtareafinal = flagtareafinal;
    }
    public String getFlagtipoalertmensaj(){
        return this.flagtipoalertmensaj;
    }
    public void setFlagtipoalertmensaj(String flagtipoalertmensaj){
        this.flagtipoalertmensaj = flagtipoalertmensaj;
    }
    public String getFlagtipoalertcorreo(){
        return this.flagtipoalertcorreo;
    }
    public void setFlagtipoalertcorreo(String flagtipoalertcorreo){
        this.flagtipoalertcorreo = flagtipoalertcorreo;
    }
    public Long getCantcorreo(){
        return this.cantcorreo;
    }
    public void setCantcorreo(Long cantcorreo){
        this.cantcorreo = cantcorreo;
    }
    public Long getEstado(){
        return this.estado;
    }
    public void setEstado(Long estado){
        this.estado = estado;
    }
}

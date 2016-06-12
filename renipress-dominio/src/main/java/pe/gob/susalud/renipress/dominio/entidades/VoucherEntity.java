package pe.gob.susalud.renipress.dominio.entidades;

import pe.gob.susalud.renipress.dominio.entidades.base.AuditoriaEntity;

public class VoucherEntity extends AuditoriaEntity implements java.io.Serializable {
    private static final long serialVersionUID = 1L;

    private Long idvoucher;
    private Long idsolicitud;
    private String numvoucher;
    private java.util.Date fechapago;

    public Long getIdvoucher(){
        return this.idvoucher;
    }
    public void setIdvoucher(Long idvoucher){
        this.idvoucher = idvoucher;
    }
    public Long getIdsolicitud(){
        return this.idsolicitud;
    }
    public void setIdsolicitud(Long idsolicitud){
        this.idsolicitud = idsolicitud;
    }
    public String getNumvoucher(){
        return this.numvoucher;
    }
    public void setNumvoucher(String numvoucher){
        this.numvoucher = numvoucher;
    }
    public java.util.Date getFechapago(){
        return this.fechapago;
    }
    public void setFechapago(java.util.Date fechapago){
        this.fechapago = fechapago;
    }
}

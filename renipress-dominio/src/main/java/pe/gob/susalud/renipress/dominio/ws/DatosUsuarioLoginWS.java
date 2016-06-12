/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.susalud.renipress.dominio.ws;

import java.io.Serializable;

public class DatosUsuarioLoginWS implements Serializable{

	private static final long serialVersionUID = 1L;
	private String codi_per,
                   codi_usu,
                   vnomb_largo_per,
                   vape_pat_per,
                   vape_mat_per,
                   vnomb_per,
                   vini_per,
                   vemail_per,
                   codi_are,
                   vlogin_usu,
                   vpassw_usu,
                   vcarg_usu,
                   nesta_usu,
                   dfec_regi_usu,
                   dfec_act_usu,
                   cinterno_usu,
                   codi_tar,
                   vnomb_are,
                   vdesc_are,
                   vsig_are,
                   nesta_are;
    //Se Adiciono
    private String codi_opc,
                   codi_apl,
                   codi_sis,
                   codi_top,
                   codi_padre_opc,
                   vnomb_opc,
                   vdesc_opc,
                   norden_opc,
                   nesta_opc,
                   accesos,
                   codi_enc,
                   vdesc_car,
                   vdesc_enc,
                   nesta_enc,
                   feIni_enc,
                   fefin_enc,
                   CODI_ENT;

    public String getCodi_per() {
        return codi_per;
    }

    public void setCodi_per(String codi_per) {
        this.codi_per = codi_per;
    }

    public String getCodi_usu() {
        return codi_usu;
    }

    public void setCodi_usu(String codi_usu) {
        this.codi_usu = codi_usu;
    }

    public String getVnomb_largo_per() {
        return vnomb_largo_per;
    }

    public void setVnomb_largo_per(String vnomb_largo_per) {
        this.vnomb_largo_per = vnomb_largo_per;
    }

    public String getVape_pat_per() {
        return vape_pat_per;
    }

    public void setVape_pat_per(String vape_pat_per) {
        this.vape_pat_per = vape_pat_per;
    }

    public String getVape_mat_per() {
        return vape_mat_per;
    }

    public void setVape_mat_per(String vape_mat_per) {
        this.vape_mat_per = vape_mat_per;
    }

    public String getVnomb_per() {
        return vnomb_per;
    }

    public void setVnomb_per(String vnomb_per) {
        this.vnomb_per = vnomb_per;
    }

    public String getVini_per() {
        return vini_per;
    }

    public void setVini_per(String vini_per) {
        this.vini_per = vini_per;
    }

    public String getVemail_per() {
        return vemail_per;
    }

    public void setVemail_per(String vemail_per) {
        this.vemail_per = vemail_per;
    }

    public String getCodi_are() {
        return codi_are;
    }

    public void setCodi_are(String codi_are) {
        this.codi_are = codi_are;
    }

    public String getVlogin_usu() {
        return vlogin_usu;
    }

    public void setVlogin_usu(String vlogin_usu) {
        this.vlogin_usu = vlogin_usu;
    }

    public String getVpassw_usu() {
        return vpassw_usu;
    }

    public void setVpassw_usu(String vpassw_usu) {
        this.vpassw_usu = vpassw_usu;
    }

    public String getVcarg_usu() {
        return vcarg_usu;
    }

    public void setVcarg_usu(String vcarg_usu) {
        this.vcarg_usu = vcarg_usu;
    }

    public String getNesta_usu() {
        return nesta_usu;
    }

    public void setNesta_usu(String nesta_usu) {
        this.nesta_usu = nesta_usu;
    }

    public String getDfec_regi_usu() {
        return dfec_regi_usu;
    }

    public void setDfec_regi_usu(String dfec_regi_usu) {
        this.dfec_regi_usu = dfec_regi_usu;
    }

    public String getDfec_act_usu() {
        return dfec_act_usu;
    }

    public void setDfec_act_usu(String dfec_act_usu) {
        this.dfec_act_usu = dfec_act_usu;
    }

    public String getCinterno_usu() {
        return cinterno_usu;
    }

    public void setCinterno_usu(String cinterno_usu) {
        this.cinterno_usu = cinterno_usu;
    }

    public String getCodi_tar() {
        return codi_tar;
    }

    public void setCodi_tar(String codi_tar) {
        this.codi_tar = codi_tar;
    }

    public String getVnomb_are() {
        return vnomb_are;
    }

    public void setVnomb_are(String vnomb_are) {
        this.vnomb_are = vnomb_are;
    }

    public String getVdesc_are() {
        return vdesc_are;
    }

    public void setVdesc_are(String vdesc_are) {
        this.vdesc_are = vdesc_are;
    }

    public String getVsig_are() {
        return vsig_are;
    }

    public void setVsig_are(String vsig_are) {
        this.vsig_are = vsig_are;
    }

    public String getNesta_are() {
        return nesta_are;
    }

    public void setNesta_are(String nesta_are) {
        this.nesta_are = nesta_are;
    }

    public String getCodi_opc() {
        return codi_opc;
    }

    public void setCodi_opc(String codi_opc) {
        this.codi_opc = codi_opc;
    }

    public String getCodi_apl() {
        return codi_apl;
    }

    public void setCodi_apl(String codi_apl) {
        this.codi_apl = codi_apl;
    }

    public String getCodi_sis() {
        return codi_sis;
    }

    public void setCodi_sis(String codi_sis) {
        this.codi_sis = codi_sis;
    }

    public String getCodi_top() {
        return codi_top;
    }

    public void setCodi_top(String codi_top) {
        this.codi_top = codi_top;
    }

    public String getCodi_padre_opc() {
        return codi_padre_opc;
    }

    public void setCodi_padre_opc(String codi_padre_opc) {
        this.codi_padre_opc = codi_padre_opc;
    }

    public String getVnomb_opc() {
        return vnomb_opc;
    }

    public void setVnomb_opc(String vnomb_opc) {
        this.vnomb_opc = vnomb_opc;
    }

    public String getVdesc_opc() {
        return vdesc_opc;
    }

    public void setVdesc_opc(String vdesc_opc) {
        this.vdesc_opc = vdesc_opc;
    }

    public String getNorden_opc() {
        return norden_opc;
    }

    public void setNorden_opc(String norden_opc) {
        this.norden_opc = norden_opc;
    }

    public String getNesta_opc() {
        return nesta_opc;
    }

    public void setNesta_opc(String nesta_opc) {
        this.nesta_opc = nesta_opc;
    }

    public String getAccesos() {
        return accesos;
    }

    public void setAccesos(String accesos) {
        this.accesos = accesos;
    }

    public String getCodi_enc() {
        return codi_enc;
    }

    public void setCodi_enc(String codi_enc) {
        this.codi_enc = codi_enc;
    }

    public String getVdesc_car() {
        return vdesc_car;
    }

    public void setVdesc_car(String vdesc_car) {
        this.vdesc_car = vdesc_car;
    }

    public String getVdesc_enc() {
        return vdesc_enc;
    }

    public void setVdesc_enc(String vdesc_enc) {
        this.vdesc_enc = vdesc_enc;
    }

    public String getNesta_enc() {
        return nesta_enc;
    }

    public void setNesta_enc(String nesta_enc) {
        this.nesta_enc = nesta_enc;
    }

    public String getFeIni_enc() {
        return feIni_enc;
    }

    public void setFeIni_enc(String feIni_enc) {
        this.feIni_enc = feIni_enc;
    }

    public String getFefin_enc() {
        return fefin_enc;
    }

    public void setFefin_enc(String fefin_enc) {
        this.fefin_enc = fefin_enc;
    }

    public String getCODI_ENT() {
        return CODI_ENT;
    }

    public void setCODI_ENT(String CODI_ENT) {
        this.CODI_ENT = CODI_ENT;
    }
    
    
}

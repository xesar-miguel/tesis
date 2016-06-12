
package pe.gob.susalud.renipress.dominio.entidades;

import java.io.Serializable;

public class UsuarioIpressEntity implements Serializable{

	private static final long serialVersionUID = 1L;
	private int coIdUsuario;
    private String coIpress;
    private String feRegi;
    private String feModi;
    private String inActivo;
    private int coPerfil;

    public  UsuarioIpressEntity(){
        
    }

    public int getCoIdUsuario() {
        return coIdUsuario;
    }

    public void setCoIdUsuario(int coIdUsuario) {
        this.coIdUsuario = coIdUsuario;
    }

    public String getCoIpress() {
        return coIpress;
    }

    public void setCoIpress(String coIpress) {
        this.coIpress = coIpress;
    }

    public String getFeRegi() {
        return feRegi;
    }

    public void setFeRegi(String feRegi) {
        this.feRegi = feRegi;
    }

    public String getFeModi() {
        return feModi;
    }

    public void setFeModi(String feModi) {
        this.feModi = feModi;
    }

    public String getInActivo() {
        return inActivo;
    }

    public void setInActivo(String inActivo) {
        this.inActivo = inActivo;
    }

    public int getCoPerfil() {
        return coPerfil;
    }

    public void setCoPerfil(int coPerfil) {
        this.coPerfil = coPerfil;
    }

       
}

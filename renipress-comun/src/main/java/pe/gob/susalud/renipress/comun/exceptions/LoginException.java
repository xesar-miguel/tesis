/**
 * 
 */
package pe.gob.susalud.renipress.comun.exceptions;

/***
 * @name      : LoginException
 * @author    : millesca
 * @version   : 1.0
 * @copyrigth : SUSALUD
 */
public class LoginException extends Exception {

	private static final long serialVersionUID = 1L;
	
	public LoginException(){
		
	}
	
	public LoginException(String mensaje){
		super(mensaje);
	}

}

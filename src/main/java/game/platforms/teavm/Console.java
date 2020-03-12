package game.platforms.teavm;

import org.teavm.jso.JSBody;

/** This is a class for logging to the web console.
 * It is used primarily for debugging.
 * */
public class Console {

  /** Emits an error message.
   * @param message The error message to emit.
   * */
  public static void error(String message) {
    log("error: " + message);
  }

  /** Logs a message to the console.
   * This is used by other functions in the console
   * class to print unformatted data.
   * @param message The message to log.
   * */
  @JSBody(params = { "message" }, script = "console.log(message)")
  public static native void log(String message);
}

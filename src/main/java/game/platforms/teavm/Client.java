package game.platforms.teavm;

import org.teavm.jso.dom.html.HTMLDocument;
import org.teavm.jso.dom.html.HTMLElement;

/** This class contains the entry point of the browser platform.
 * It renders the game using HTML.
 * */
public class Client {
  /** The entry point for the TeaVM platform.
   * @param args These are unused.
   * */
  public static void main(String[] args) {

    Console.log("Starting game");

    HTMLDocument document = HTMLDocument.current();

    GameView gameView = new GameView(document);
  }
}

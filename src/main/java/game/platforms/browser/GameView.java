package game.platforms.browser;

import org.teavm.jso.dom.html.HTMLDocument;
import org.teavm.jso.dom.html.HTMLCanvasElement;

import org.teavm.jso.canvas.CanvasRenderingContext2D;

/** This class provides a view of the game.
 * Internally, it creates a 'canvas' HTML element
 * for the game to be drawn with.
 * */
public class GameView {

  /** The canvas element on which the game is rendered on. */
  private HTMLCanvasElement canvas;

  /** The 2D rendering context for the canvas element. */
  private CanvasRenderingContext2D context;

  /** Constructs a new game view instance.
   * @param document The document to add the game view to.
   * */
  public GameView(HTMLDocument document) {

    canvas = (HTMLCanvasElement) document.createElement("canvas");

    /* TODO : size to fill window */
    canvas.setWidth(640);
    canvas.setHeight(480);

    context = (CanvasRenderingContext2D) canvas.getContext("2d");

    context.fillRect(100, 100, 50, 50);

    document.getBody().appendChild(canvas);
  }
}

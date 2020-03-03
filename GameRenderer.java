import java.awt.Color;

/** This class is used to render the game contents
 * using the graphics context interface. By using the
 * graphics context interface, instead of directly using
 * AWT's Graphics object, we can reuse this renderer for
 * the web by simply implementing GraphicsContext for WebGL.
 * @see GraphicsContext
 * @see Game
 * */
public class GameRenderer {

  /** Renders the room.
   * @param gc The graphics context used to draw the game.
   * @param game The game to be drawn.
   * */
  public void render(GraphicsContext gc, Game game) {

    gc.setColor(new Color(0, 0, 0));

    gc.fillRect(0.25, 0.25, 0.5, 0.5);
  }
}

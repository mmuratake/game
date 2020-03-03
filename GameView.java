import java.awt.Canvas;
import java.awt.Graphics;

import java.awt.image.BufferStrategy;

/** This class contains the window in which
 * the game is rendered. It sits inside the
 * main window and is called to render the
 * game whenever the frame timer expires.
 * @see Game
 * @see GameUi
 * */
public class GameView extends Canvas {

  /** Used to render the game. */
  private GameRenderer renderer;

  /** This constructs a new instance of the game view.
   * Internally, this just makes sure that the window
   * is visible and 'repaint' events from the OS are
   * set to be ignored.
   * */
  public GameView() {
    setIgnoreRepaint(true);
    setVisible(true);
    renderer = new GameRenderer();
  }

  /** Renders the game onto the window.
   * @param game The game to be rendered.
   * */
  public void render(Game game) {

    BufferStrategy strategy = lazyInitBufferStrategy();

    // This loop is suggested in the Oracle docs,
    // although the exact reason for it is slightly unclear (to me.)
    //
    // Here's the explaination from: https://docs.oracle.com/javase/8/docs/api/java/awt/image/BufferStrategy.html
    //
    // The following loop ensures that the contents of the drawing buffer
    // are consistent in case the underlying surface was recreated
    do {

      do {

        Graphics graphics = strategy.getDrawGraphics();

        int w = getWidth();
        int h = getHeight();

        GraphicsContextAwt gc = new GraphicsContextAwt(graphics, w, h);

        renderer.render(gc, game);

        graphics.dispose();

      } while (strategy.contentsRestored());

      strategy.show();

    } while (strategy.contentsLost());
  }

  /** This initializes the swap buffer when it is needed.
   * It should only be called right before the game is rendered.
   * @return The swap buffer instance that's either brand new or
   * already created in a previous call to this function.
   * */
  BufferStrategy lazyInitBufferStrategy() {
    if (getBufferStrategy() == null) {
      createBufferStrategy(2);
    }
    return getBufferStrategy();
  }
}

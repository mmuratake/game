import java.awt.Frame;

import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

/** This is a view of the game using
 * Java's builtin AWT framework. The
 * AWT is quite old and very basic, but
 * it has all of the required items to
 * implement the game view.
 * */
public class GameView extends Frame {

  /** An instance of the game being viewed. */
  private Game game;

  /** The width of the window on startup.
   * This is considered HD resolution and
   * it can be expected for most game players. */
  final int startupWidth = 1280;

  /** The height of the window on startup.
   * This is considered HD resolution and
   * it can be expected for most game players. */
  final int startupHeight = 720;

  /** Constructs a new instance of a game view.
   * This opens up a new window in which the
   * game is shown to the user. The keyboard
   * keys captured by this window are used to
   * control the game.
   * @param game The game to be viewed.
   * */
  public GameView(Game game) {

    this.game = game;

    // This ugly tid bit of code is just to close
    // the window when the user hits the close button.
    addWindowListener(new WindowAdapter() {
      public void windowClosing(WindowEvent e) {
        dispose();
      }
    });

    addKeyListener(new KeyboardController(this.game));

    setSize(startupWidth, startupHeight);

    setTitle(this.game.getTitle());

    setVisible(true);
  }
}

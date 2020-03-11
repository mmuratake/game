package game.platforms.awt;

import game.Game;

import java.awt.Frame;
import java.awt.GridLayout;

import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

import java.io.InputStream;

import java.util.concurrent.locks.ReentrantLock;

/** This class is used for listening for
 * import window events for the game UI,
 * such as when the window is opened and
 * when the close button is clicked.
 * */
class GameUiListener extends WindowAdapter {

  /** A reference to the game UI. */
  final private GameUi ui;

  /** Constructs a new UI listener.
   * @param ui A reference to the game UI.
   * */
  public GameUiListener(GameUi ui) {
    this.ui = ui;
  }

  /** Called when the user hits the close button.
   * @param e A reference to the window event.
   * This parameter is unused by this function.
   * */
  @Override
  public void windowClosing(WindowEvent e) {
    ui.onWindowClosed();
  }
}

/** This is a user interface of the game using
 * Java's builtin AWT framework. The
 * AWT is quite old and very basic, but
 * it has all of the required items to
 * implement the game interface.
 * */
public class GameUi extends Frame {

  /** An instance of the game being played. */
  private Game game;

  /** The canvas on which the game is rendered. */
  private GameView view;

  /** Whether or not the game has exited. */
  private boolean exited;

  /** This is a lock that is used to control access
   * to the game from multiple threads. Since the thread
   * that passes controls to the game and the timer thread
   * are not the same thread, the game instance is at risk
   * for getting called by two threads at the same time.
   * To synchronize access to the game, the lock is here
   * to block the thread until the game instance becomes available again.
   * */
  private ReentrantLock gameLock;

  /** The width of the window on startup.
   * This is considered HD resolution and
   * it can be expected for most game players. */
  final int startupWidth = 1280;

  /** The height of the window on startup.
   * This is considered HD resolution and
   * it can be expected for most game players. */
  final int startupHeight = 720;

  /** Constructs a new instance of a user interface.
   * This opens up a new window in which the
   * game is shown to the user. The keyboard
   * keys captured by this window are used to
   * control the game.
   * @param game The game to be played.
   * */
  public GameUi(Game game) {

    this.exited = false;

    setSize(startupWidth, startupHeight);

    this.game = game;
    this.gameLock = new ReentrantLock();

    this.view = new GameView();

    add(view);

    view.addKeyListener(new KeyboardController(this.game, this.gameLock));
    view.addMouseListener(new MouseController(this.game, this.gameLock));

    addWindowListener(new GameUiListener(this));

    setVisible(true);
    setTitle(this.game.getTitle());
    setLayout(new GridLayout(1, 1));
  }

  /** Advances the game forward in time.
   * This function may be called from multiple threads.
   * @param milliseconds The number of milliseconds to advance the game.
   * */
  public void advance(int milliseconds) {

    this.gameLock.lock();

    this.game.advance(milliseconds);

    this.view.render(this.game);

    this.gameLock.unlock();
  }

  /** Indicates whether or not the program has exited. */
  public boolean isExited() { return exited; }

  /** This function loads an image for a certain tile.
   * The tile image is used by the game view during the rendering process.
   * @param id The ID to assign the image.
   * @param imageStream The stream containing the image data.
   * */
  public void loadTileImage(long id, InputStream imageStream) {
    this.view.loadTileImage(id, imageStream);
  }

  /** Closes the user interface.
   * This destroys the window and
   * sets the "exited" flag to true.
   * */
  public void onWindowClosed() {
    dispose();
    exited = true;
  }
}

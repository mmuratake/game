import java.awt.BorderLayout;
import java.awt.Frame;
import java.awt.Graphics;

import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

import java.util.Timer;
import java.util.TimerTask;

import java.util.concurrent.locks.ReentrantLock;

/** This class is responsible for moving
 * the game forward in time whenever a timer
 * expires for a frame.
 * @see Game
 * */
class GameTimerTask extends TimerTask {

  /** The window that the game is being shown in.
   * This is here so that we can tell the window it
   * needs to get repainted whenever the game advances
   * in time. */
  private GameUi gameUi;

  /** The number of milliseconds in one frame. */
  private int frameDelay;

  /** Constructs a new instance of the game timer task.
   * @param gameUi The UI in which the game is shown in
   * This gets repainted whenever the timer expires.
   * @param frameDelay The expected duration of one frame, in milliseconds.
   * This can be taken by dividing one thousand by the target frames per second.
   * */
  public GameTimerTask(GameUi gameUi, int frameDelay) {
    this.gameUi = gameUi;
    this.frameDelay = frameDelay;
  }

  /** Moves the game forward by one frame
   * and tells the main window that it should
   * repaint itself.
   * */
  @Override
  public void run() {

    if (System.currentTimeMillis() - scheduledExecutionTime() > frameDelay) {
      // We're late by a whole frame, so let's just skip this one.
      System.out.println("Warning: frame dropped");
      return;
    }

    gameUi.advance(frameDelay);
  }
}

/** This class is used for listening for
 * import window events for the game UI,
 * such as when the window is opened and
 * when the close button is clicked.
 * */
class GameUiListener extends WindowAdapter {

  /** A reference to the game UI. */
  private GameUi ui;

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

  /** The timer controlling the frame rate. */
  private Timer timer;

  /** This is a lock that is used to control access
   * to the game from multiple threads. Since the thread
   * that passes controls to the game and the timer thread
   * are not the same thread, the game instance is at risk
   * for getting called by two threads at the same time.
   * To synchronize access to the game, the lock is here
   * to block the thread until the game instance becomes available again.
   * */
  private ReentrantLock gameLock;

  /** This is the target frame rate for the game. */
  final int frameRate = 30;

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

    setSize(startupWidth, startupHeight);

    this.game = game;
    this.gameLock = new ReentrantLock();
    this.timer = new Timer();

    this.view = new GameView();
    view.addKeyListener(new KeyboardController(this.game, this.gameLock));
    view.addMouseListener(new MouseController(this.game, this.gameLock));

    add(view);
    addWindowListener(new GameUiListener(this));

    setVisible(true);
    setTitle(this.game.getTitle());
    setLayout(new BorderLayout());

    this.timer.scheduleAtFixedRate(new GameTimerTask(this, getFrameDelay()), 500, getFrameDelay());
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

  /** This function loads an image for a certain tile.
   * The tile image is used by the game view during the rendering process.
   * @param id The ID to assign the image.
   * @param imagePath The path to the image to load.
   * */
  public void loadTileImage(long id, String imagePath) {
    this.view.loadTileImage(id, imagePath);
  }

  /** Closes the user interface.
   * This destroys the window and
   * stops the frame timer for the game.
   * */
  public void onWindowClosed() {
    timer.cancel();
    timer.purge();
    dispose();
  }

  /** Gets the number of milliseconds in a single frame.
   * @return The number of milliseconds in one frame.
   * */
  private int getFrameDelay() {
    return 1000 / frameRate;
  }
}

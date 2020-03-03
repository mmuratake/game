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

/** This is a user interface of the game using
 * Java's builtin AWT framework. The
 * AWT is quite old and very basic, but
 * it has all of the required items to
 * implement the game interface.
 * */
public class GameUi extends Frame {

  /** An instance of the game being played. */
  private Game game;

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

    this.game = game;
    this.gameLock = new ReentrantLock();

    // This ugly tid bit of code is just to close
    // the window when the user hits the close button.
    addWindowListener(new WindowAdapter() {
      public void windowClosing(WindowEvent e) {
        dispose();
        timer.cancel();
      }
    });

    addKeyListener(new KeyboardController(this.game, this.gameLock));
    addMouseListener(new MouseController(this.game, this.gameLock));

    setSize(startupWidth, startupHeight);

    setTitle(this.game.getTitle());

    setVisible(true);

    int frameDelay = 1000 / frameRate;

    this.timer = new Timer();

    this.timer.scheduleAtFixedRate(new GameTimerTask(this, frameDelay), 0, frameDelay);
  }

  /** Advances the game forward in time.
   * This function may be called from multiple threads.
   * @param milliseconds The number of milliseconds to advance the game.
   * */
  void advance(int milliseconds) {
    this.gameLock.lock();
    this.game.advance(milliseconds);
    this.gameLock.unlock();
    repaint(milliseconds);
  }

  /** Overrides the paint function
   * in order to pass control to the game.
   * @param graphics The graphics context
   * to be passed to the game.
   * @see GraphicsContext
   * @see Game
   * */
  @Override
  public void paint(Graphics graphics) {
    int w = getWidth();
    int h = getHeight();
    this.game.render(new GraphicsContextAwt(graphics, w, h));
  }
}

import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

import java.util.concurrent.locks.ReentrantLock;

/** This class is used to implement game controls
 * using a standard keyboard from the main window's key listener.
 * Only the buttons that are hit while the main window is
 * in focus are captured by this class. So if the window is not
 * in focus and an arrow key is hit, this class does not pick it up.
 * */
public class KeyboardController implements KeyListener {

  /** The game instance to pass the keyboard controls to. */
  private Game game;

  /** The lock for the game to control thread access. */
  private ReentrantLock gameLock;

  /** Contains the current X axis value.
   * This should be within the range of -1 and 1. */
  private double xAxis;

  /** Contains the current Y axis value.
   * This should be within the range of -1 and 1. */
  private double yAxis;

  /** Constructs a new instance of a keyboard controller.
   * This class should be created from the window that
   * the game is being displayed in.
   * @param game The game to pass the controls to.
   * @see GameUi
   * */
  public KeyboardController(Game game, ReentrantLock gameLock) {
    this.game = game;
    this.gameLock = gameLock;
  }

  /** Detects if one of the game buttons was hit
   * and updates the button state in the game if one was.
   * @param event The key event instance containing information
   * regarding which keyboard key was pressed.
   * */
  @Override
  public void keyPressed(KeyEvent event) {

    /* Arrow keys */
    if (event.getKeyCode() == KeyEvent.VK_LEFT) {
      updateX(-1);
    } else if (event.getKeyCode() == KeyEvent.VK_UP) {
      updateY(1);
    } else if (event.getKeyCode() == KeyEvent.VK_RIGHT) {
      updateX(1);
    } else if (event.getKeyCode() == KeyEvent.VK_DOWN) {
      updateY(-1);
    }

    /* WASD keys */
    if (event.getKeyChar() == 'a') {
      updateX(-1);
    } else if (event.getKeyChar() == 'w') {
      updateY(1);
    } else if (event.getKeyChar() == 'd') {
      updateX(1);
    } else if (event.getKeyChar() == 's') {
      updateY(-1);
    }
  }

  /** Detects if one of the game buttons has
   * released and updates the button state in the game if it was.
   * @param event The key event instance containing information
   * regarding which keyboard key was pressed.
   * */
  @Override
  public void keyReleased(KeyEvent event) {

    /* Arrow keys */
    if ((event.getKeyCode() == KeyEvent.VK_LEFT)
     || (event.getKeyCode() == KeyEvent.VK_RIGHT)) {
      updateX(0);
    } else if ((event.getKeyCode() == KeyEvent.VK_UP)
            || (event.getKeyCode() == KeyEvent.VK_DOWN)) {
      updateY(0);
    }

    /* WASD keys */
    if ((event.getKeyChar() == 'a')
     || (event.getKeyChar() == 'd')) {
      updateX(0);
    } else if ((event.getKeyChar() == 'w')
            || (event.getKeyChar() == 's')) {
      updateY(0);
    }
  }

  /** This function is required to implement
   * the KeyListener interface but is not required
   * for game controls. All this function will do
   * is exit as soon as it is called.
   * */
  @Override
  public void keyTyped(KeyEvent event) { }

  /** This function updates the X axis value,
   * if it has changed. If it has not changed,
   * then this function does nothing.
   * */
  private void updateX(double value) {
    if (this.xAxis != value) {
      this.xAxis = value;
      this.gameLock.lock();
      this.game.axisUpdate(0, this.xAxis, this.yAxis);
      this.gameLock.unlock();
    }
  }

  /** This function updates the Y axis value,
   * if it has changed. If it has not changed,
   * then this function does nothing.
   * */
  private void updateY(double value) {
    if (this.yAxis != value) {
      this.yAxis = value;
      this.gameLock.lock();
      this.game.axisUpdate(0, this.xAxis, this.yAxis);
      this.gameLock.unlock();
    }
  }
}

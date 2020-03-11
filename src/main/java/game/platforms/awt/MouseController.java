package game.platforms.awt;

import game.Game;

import java.awt.event.MouseListener;
import java.awt.event.MouseEvent;

import java.util.concurrent.locks.ReentrantLock;

/** This class is used to relay mouse clicks
 * from the user interface to the game (as button events.)
 * @see Game
 * @see GameUi
 * */
public class MouseController implements MouseListener {

  /** The game instance that the mouse
   * controller should send the events to. */
  private Game game;

  /** The lock used to control thread access. */
  private ReentrantLock gameLock;

  /** Constructs a new mouse controller instance.
   * @param game The game that this mouse controller
   * should relay information to.
   * @param gameLock The game lock used to control thread access.
   * */
  public MouseController(Game game, ReentrantLock gameLock) {
    this.game = game;
    this.gameLock = gameLock;
  }

  /** This function receives the mouse press
   * event from the main window and relays it to
   * the game as a button press event.
   * @param event Contains extra information
   * regarding the mouse press event (such as
   * whether it was a left or right click.)
   * */
  @Override
  public void mousePressed(MouseEvent event) {
    switch (event.getButton()) {
      case MouseEvent.BUTTON1:
        modifyButtonState(Game.Button.BUTTON_A, true);
        break;
      case MouseEvent.BUTTON3:
        modifyButtonState(Game.Button.BUTTON_B, true);
        break;
    }
  }

  /** This function receives the mouse release
   * event from the main window and relays it to
   * the game as a button release event.
   * @param event Contains extra information
   * regarding the mouse press event (such as
   * whether it was a left or right click.)
   * */
  @Override
  public void mouseReleased(MouseEvent event) {
    switch (event.getButton()) {
      case MouseEvent.BUTTON1:
        modifyButtonState(Game.Button.BUTTON_A, false);
        break;
      case MouseEvent.BUTTON3:
        modifyButtonState(Game.Button.BUTTON_B, false);
        break;
    }
  }

  /** This function is for modifying
   * the button state of the game. It is used
   * because care has to be taken when using the
   * game locks. This function makes it easier
   * to modify the button states without having
   * to worry about locking and unlocking.
   * @param button The button to update the state of.
   * @param state The state the button is now in.
   * */
  private void modifyButtonState(Game.Button button, boolean state) {
    this.gameLock.lock();
    this.game.buttonUpdate(0, button, state);
    this.gameLock.unlock();
  }

  /** This function is just a stub.
   * Added to complete the MouseListener interface.
   * */
  @Override
  public void mouseEntered(MouseEvent event) {}

  /** This function is just a stub.
   * Added to complete the MouseListener interface.
   * */
  @Override
  public void mouseExited(MouseEvent event) {}

  /** This function is just a stub.
   * Added to complete the MouseListener interface.
   * */
  @Override
  public void mouseClicked(MouseEvent event) {}
}

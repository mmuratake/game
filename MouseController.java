import java.awt.event.MouseListener;
import java.awt.event.MouseEvent;

/** This class is used to relay mouse clicks
 * from the user interface to the game (as button events.)
 * @see Game
 * @see GameUi
 * */
public class MouseController implements MouseListener {

  /** The game instance that the mouse
   * controller should send the events to. */
  private Game game;

  /** Constructs a new mouse controller instance.
   * @param game The game that this mouse controller
   * should relay information to.
   * */
  public MouseController(Game game) {
    this.game = game;
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
        game.buttonUpdate(0, Game.Button.BUTTON_A, true);
        break;
      case MouseEvent.BUTTON3:
        game.buttonUpdate(0, Game.Button.BUTTON_B, true);
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
        game.buttonUpdate(0, Game.Button.BUTTON_A, false);
        break;
      case MouseEvent.BUTTON3:
        game.buttonUpdate(0, Game.Button.BUTTON_B, false);
        break;
    }
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

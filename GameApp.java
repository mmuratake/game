/** This class contains the entry point of the game.
 * The game is divided into a user interface layer and
 * the actual game layer. This is because there may be
 * multiple implementations of the user interface. In
 * this case, the AWT interface is used.
 * @see Game
 * @see GameUi
 * */
public class GameApp {
  public static void main(String[] args) {
    new GameUi(new Game());
  }
}

package game.platforms.browser;

import game.Game;

import java.util.ArrayList;

import org.teavm.jso.dom.html.HTMLDocument;
import org.teavm.jso.dom.html.HTMLElement;
import org.teavm.jso.dom.html.HTMLImageElement;

/** This class is used to start the game
 * when all of the resources get downloaded properly.
 * */
public class PresentationPhase implements GameLoader.Observer {

  /** The game present to the user if all contents load successfully. */
  private Game game;

  /** Constructs a new instance of the presentation phase.
   * @param game The game to play if all contents load.
   * */
  public PresentationPhase(Game game) {
    this.game = game;
  }

  /** Handles the case that the primary game resources were loaded.
   * This function will create the game view and present the game to the user for playing.
   * @param images The loaded tile images.
   * */
  @Override
  public void onSuccess(ArrayList<HTMLImageElement> images) {

    HTMLDocument document = HTMLDocument.current();

    GameView gameView = new GameView(game, images, document);

    gameView.render();
  }

  /** Handles the case of an error occuring while loading the game.
   * Displays an error message describing the error.
   * */
  @Override
  public void onFailure(String msg) {
    System.err.println(msg);
  }
}

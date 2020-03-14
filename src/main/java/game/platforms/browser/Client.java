package game.platforms.browser;

import game.Game;

/** This class contains the entry point of the browser platform.
 * It renders the game using HTML.
 * */
public class Client {

  /** The entry point for the TeaVM platform.
   * @param args These are unused.
   * */
  public static void main(String[] args) {

    Game game = new Game();

    PresentationPhase presentationPhase = new PresentationPhase(game);

    GameLoader gameLoader = new GameLoader(game, presentationPhase);

    gameLoader.load();
  }
}

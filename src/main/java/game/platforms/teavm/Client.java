package game.platforms.teavm;

import game.Game;
import game.TileSet;

import java.io.InputStream;

import org.teavm.jso.dom.html.HTMLDocument;
import org.teavm.jso.dom.html.HTMLElement;

/** This class contains the entry point of the browser platform.
 * It renders the game using HTML.
 * */
public class Client {

  /** The entry point for the TeaVM platform.
   * @param args These are unused.
   * */
  public static void main(String[] args) {

    HTMLDocument document = HTMLDocument.current();

    InputStream tileSetStream = ClassLoader.getSystemClassLoader().getResourceAsStream("/tiles.tsx");

    TileSet tileSet = new TileSet();

    loadTiles(tileSet);

    GameView gameView = new GameView(document);

    Game game = new Game(tileSet);
  }

  /** Loads the tile set.
   * @param tileSet The tile set instance to put the tiles into.
   * */
  private static void loadTiles(TileSet tileSet) {

    TileSetLoader loader = new TileSetLoader(tileSet);

    loader.load("WEB-INF/classes/tiles.tsx");
  }
}

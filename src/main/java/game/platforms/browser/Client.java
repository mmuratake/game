package game.platforms.browser;

import game.Game;
import game.TileMap;
import game.TileSet;

import java.util.ArrayList;

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

    Game game = new Game(tileSet);

    loadMaps(game);

    GameView gameView = new GameView(document);
  }

  /** Loads the maps required by the game.
   * @param game The game instance to load the maps for.
   * */
  private static void loadMaps(Game game) {

    ArrayList<String> mapFileNames = game.getMapFileNames();

    for (String mapFileName : mapFileNames) {
      loadMap(game, "WEB-INF/classes/" + mapFileName);
    }
  }

  /** Loads a map to be used by the game.
   * @param game The game instance to put the map into.
   * @param url The url of the map to load.
   * */
  private static void loadMap(Game game, String url) {

    TileMap tileMap = new TileMap();

    TileMapLoader tileMapLoader = new TileMapLoader(tileMap);

    tileMapLoader.load(url);
  }

  /** Loads the tile set.
   * @param tileSet The tile set instance to put the tiles into.
   * */
  private static void loadTiles(TileSet tileSet) {

    TileSetLoader loader = new TileSetLoader(tileSet);

    loader.load("WEB-INF/classes/tiles.tsx");
  }
}

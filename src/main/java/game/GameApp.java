package game;

import game.platforms.awt.GameUi;

import java.io.File;

import java.util.ArrayList;

/** This class contains the entry point of the game.
 * The game is divided into a user interface layer and
 * the actual game layer. This is because there may be
 * multiple implementations of the user interface. In
 * this case, the AWT interface is used.
 * @see Game
 * @see GameUi
 * */
public class GameApp {

  /** The entry point of the program.
   * Loads the tile set, all the maps,
   * and opens the window that the game is displayed in.
   * @param args The arguments passed to the program.
   * Currently, this parameter is unused.
   *  */
  public static void main(String[] args) {

    /* Indicate to Java that we want GPU accelerated graphics. */
    System.setProperty("sun.java2d.opengl", "true");

    String tileSetPath = "tiled/tiles.tsx";

    File tileSetFile = null;

    try {
      tileSetFile = new File(tileSetPath);
    } catch (Exception e) {
      e.printStackTrace();
    }

    if (tileSetFile == null) {
      return;
    }

    TileSet tileSet = new TileSet();

    TileSetReader tileSetReader = new TileSetReader(tileSet);

    try {
      tileSetReader.readFromFile(tileSetFile);
    } catch (Exception e) {
      e.printStackTrace();
    }

    String tileSetDirectoryPath = tileSetFile.getParent();

    Game game = new Game(tileSet);

    loadMaps(game);

    GameUi gameUi = new GameUi(game);

    for (int i = 0; i < tileSet.getTileCount(); i++) {

      Tile tile = tileSet.getTile(i);

      String imagePath = tileSetDirectoryPath + File.separator + tile.getImagePath();

      gameUi.loadTileImage(tile.getID(), imagePath);
    }

    timerLoop(gameUi);
  }

  /** Advances the game in time until the
   * user closes the window.
   * @param gameUi The user interface of the game.
   * This will indicate an exited state when the user closes the window.
   * */
  private static void timerLoop(GameUi gameUi) {

    long timeStampLast = System.nanoTime();

    final long targetFps = 30;

    final long targetDelay = 1_000 / targetFps;

    while (!gameUi.isExited()) {

      long timeStampNow = System.nanoTime();

      /* Time difference in milliseconds */
      long timeDelta = (timeStampNow - timeStampLast) / 1_000_000;

      gameUi.advance((int) timeDelta);

      /* Note time difference again, in case it
       * takes a while to render the scene. */
      long timeDelta2 = (System.nanoTime() - timeStampLast) / 1_000_000;

      /* If we made the time window,
       * let's put the game to sleep until
       * it's time to render the next frame. */
      if (targetDelay > timeDelta) {
        try {
          Thread.sleep(targetDelay - timeDelta2);
        } catch (Exception e) {
          /* TODO : What to do on interrupts? */
        }
      }

      timeStampLast = timeStampNow;
    }
  }

  /** Loads the tile maps for the game.
   * @param game The game instance to put the tile maps into.
   * */
  private static void loadMaps(Game game) {

    ArrayList<String> mapFileNames = game.getMapFileNames();

    for (String mapFileName : mapFileNames) {
      loadMap(game, "tiled" + File.separator + mapFileName);
    }
  }

  /** Loads a single map into the game.
   * @param game The game to put the map data into.
   * @param mapPath The path of the map to load.
   * */
  private static void loadMap(Game game, String mapPath) {

    TileMap tileMap = new TileMap();

    TileMapReader tileMapReader = new TileMapReader(tileMap);

    try {
      tileMapReader.readFromFile(new File(mapPath));
    } catch (Exception e) {
      e.printStackTrace();
    }

    game.addTileMap(tileMap);
  }
}

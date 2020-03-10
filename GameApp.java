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

  public static void main(String[] args) {

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

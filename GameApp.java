import java.io.File;

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

    GameUi gameUi = new GameUi(new Game(tileSet));

    for (int i = 0; i < tileSet.getTileCount(); i++) {

      Tile tile = tileSet.getTile(i);

      String imagePath = tileSetDirectoryPath + File.separator + tile.getImagePath();

      gameUi.loadTileImage(tile.getID(), imagePath);
    }
  }
}

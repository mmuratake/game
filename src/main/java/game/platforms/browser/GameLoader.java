package game.platforms.browser;

import game.Game;
import game.Tile;
import game.TileMap;
import game.TileSet;

import java.util.ArrayList;

import org.teavm.jso.dom.html.HTMLImageElement;

/** This class is used for downloading all the assets
 * used to play the game.
 * */
public class GameLoader implements DownloadObserver, TileImageLoader.Observer {

  /** Used for observing state changes of the game loader.
   * It is used by the caller to handle the condition of
   * either all the game resources being downloaded successfully,
   * or a failure for any of the downloads.
   * */
  public interface Observer {
    /** Called when all the resources download successfully.
     * @param images The loaded tile images.
     * */
    public void onSuccess(ArrayList<HTMLImageElement> images);
    /** Called when one of the resources fail to download. */
    public void onFailure(String message);
  }

  /** The game instance to put the downloaded contents into. */
  private Game game;

  /** Gets notified if the game was loaded properly or not. */
  private Observer observer;

  /** The number of tile maps loaded. */
  private int tileMapsLoaded;

  /** The number of tile sets loaded. */
  private int tileSetsLoaded;

  /** The loaded tile images. */
  private ArrayList<HTMLImageElement> tileImages;

  /** Constructs a new game loader instance.
   * @param game The game to put the contents into.
   * */
  public GameLoader(Game game, Observer observer) {
    this.tileMapsLoaded = 0;
    this.tileSetsLoaded = 0;
    this.tileImages = null;
    this.game = game;
    this.observer = observer;
  }

  /** Loads all game contents.
   * */
  public void load() {
    loadTileSets();
    loadMaps();
  }

  /** Loads the tile sets. */
  private void loadTileSets() {

    TileSetLoader loader = new TileSetLoader(game.getTileSet(), this);

    loader.load("WEB-INF/classes/tiles.tsx");
  }

  /** Loads the images of a tile set.
   * @param tileSetIndex The index of the tile set to load the images for.
   * */
  private void loadTileSetImages(int tileSetIndex) {

    TileSet tileSet = game.getTileSet();

    ArrayList<String> urlList = new ArrayList<String>();

    for (int i = 0; i < tileSet.getTileCount(); i++) {

      Tile tile = tileSet.getTile(i);

      String filename = tile.getImagePath().split("../textures/")[1];

      String url = "WEB-INF/classes/" + filename;

      urlList.add(url);
    }

    new TileImageLoader(urlList, this);
  }

  /** Called when all the tile images have been loaded.
   * @param images The loaded iamges.
   * */
  @Override
  public void tileImagesLoaded(ArrayList<HTMLImageElement> images) {
    this.tileImages = images;
    checkCompletion();
  }

  /** Loads the maps required by the game. */
  private void loadMaps() {

    ArrayList<String> mapFileNames = game.getMapFileNames();

    for (String mapFileName : mapFileNames) {
      loadMap("WEB-INF/classes/" + mapFileName);
    }
  }

  /** Loads a map to be used by the game.
   * @param url The url of the map to load.
   * */
  private void loadMap(String url) {

    TileMap tileMap = new TileMap();

    TileMapLoader tileMapLoader = new TileMapLoader(tileMap, this);

    tileMapLoader.load(url);

    game.addTileMap(tileMap);
  }

  /** Checks if all resources have been loaded.
   * If all resources have been loaded, then the
   * observer is notified of a successful load.
   * */
  private void checkCompletion() {

    if (this.tileSetsLoaded != 1) {
      return;
    }

    if (this.tileMapsLoaded != game.getMapFileNames().size()) {
      return;
    }

    if (this.tileImages == null) {
      return;
    }

    this.observer.onSuccess(this.tileImages);
  }

  /** Called whenever an asset is finished downloading.
   * @param item The item that was downloaded.
   * */
  @Override
  public void loaded(DownloadObserver.Item item) {

    switch (item) {
      case TILE_MAP:
        this.tileMapsLoaded++;
        break;
      case TILE_SET:
        this.tileSetsLoaded++;
        loadTileSetImages(this.tileSetsLoaded - 1);
        break;
    }

    checkCompletion();
  }

  /** Called whenever an asset fails to download.
   * @param item The item that failed to download.
   * @param message A message describing why the download failed.
   * */
  @Override
  public void failed(DownloadObserver.Item item, String message) {
    switch (item) {
      case TILE_MAP:
        this.observer.onFailure("Failed to download tile map (" + message + ")");
        break;
      case TILE_SET:
        this.observer.onFailure("Failed to download tile set (" + message + ")");
        break;
    }
  }
}

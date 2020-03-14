package game.platforms.browser;

/** This class is for observing the status
 * of a tile set, tile map, or image download.
 * There are several state changes that have to
 * get made that depend on the changing state of
 * a download. The first is the successful download
 * of the tile set data. When the tile set data gets
 * loaded, the images have to get loaded next. The
 * second state change is after all tile sets, tile maps,
 * and tile images get downloaded. At that point, the
 * game play can actually begin.
 * */
public interface DownloadObserver {

  /** Enumerates the several
   * types of items watched for
   * download state changes.
   * */
  enum Item {
    TILE_MAP,
    TILE_SET
  }

  /** Called when an item is successfully downloaded.
   * @param item The item that was downloaded.
   * */
  public void loaded(Item item);

  /** Called when an item failed to download.
   * @param item The item that failed to download.
   * @param message A message describing why the item failed to download.
   * */
  public void failed(Item item, String message);
}

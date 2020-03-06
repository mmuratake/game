import java.util.ArrayList;

/** This class is made to contain the data from a .tsx file.
 * */
public class TileSet {

  /** The list of tiles in the tile set.
   * This is most likely to be built
   * using the tile reader class.
   * @see TileReader
   * */
  private ArrayList<Tile> tileList;

  /** Constructs a new instance of a tile set.
   * */
  public TileSet() {
    tileList = new ArrayList<Tile>();
  }

  /** Adds a tile to the tile set.
   * @param tile The tile to add to the set.
   * */
  public void add(Tile tile) {
    tileList.add(tile);
  }

  /** Gets a tile from the tile set.
   * @param i The index of the tile to get.
   * @return The specified tile.
   * */
  public Tile getTile(int i) {
    return tileList.get(i);
  }

  /** Gets the number of tiles in the tile set.
   * @return The number of tiles in the tile set.
   * */
  public int getTileCount() {
    return tileList.size();
  }
}

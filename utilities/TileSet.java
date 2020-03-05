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
  }

  /** Adds a tile to the tile set.
   * @param tile The tile to add to the set.
   * */
  public void add(Tile tile) {
    tileList.add(tile);
  }
}

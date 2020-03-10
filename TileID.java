/** This class contains helper methods
 * for dealing with tile IDs. While tile
 * IDs are just long integers, they contain
 * encoded information and are not usually just
 * an index to a tile within the tile set.
 * */
public class TileID {

  /** The horizontal flip flag. */
  final static long hFlipFlag = 0x80000000L;

  /** The vertical flip flag. */
  final static long vFlipFlag = 0x40000000L;

  /** The diagonal flip flag. */
  final static long dFlipFlag = 0x20000000L;

  /** Contains all the bit values for each of the flip flags. */
  final static long flipMask = hFlipFlag | vFlipFlag | dFlipFlag;

  /** The first global ID. This actually depends
   * on the tile set, but since we know what our
   * data looks like, there's no need to read
   * it from there. */
  final static long firstGID = 1L;

  /** Converts the tile ID to an index
   * that refers to a tile in the tile set.
   * @param tileID The tile ID to convert.
   * @return An index pointing to a tile in the tile set.
   * */
  public static long toIndex(long tileID) {
    return (tileID - firstGID) & (~flipMask);
  }

  /** Indicates if a tile ID is valid or not.
   * Tile ID values that are less than that of the first GID are considered to be invalid.
   * @return True if the tile ID is valid, false if it's not.
   * */
  public static boolean isValid(long tileID) {
    return tileID >= firstGID;
  }
}

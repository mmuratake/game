package game;

import java.util.ArrayList;

/** This class is a tile layer, part of a tile map,
 * that has not yet been "normalized." Tile layers
 * stored in the file are made up of "chunks", which
 * are sections of a tile layer. While storing chunks
 * of tile layers is ideal from the tile map editor perspective,
 * it makes it confusing to work with during rendering and game
 * execution. Ideally, we'd want a tile layer that solely consists
 * of tile IDs (as an integer matrix.) So before we get to the simplied
 * tile layer matrix, we have an irregular tile layer. Further examination
 * of the ".tmx" files can be made to understand the data layout of this class.
 * */
public class IrregularTileLayer {

  /** Contains the data for one
   * section of the tile layer.
   * This is only used internally.
   * */
  private class Chunk {

    /** The top-left position of the chunk. */
    private Vector position;

    /** The tiles referenced by this chunk. */
    private Matrix tiles;

    /** Constructs a new chunk instance.
     * @param position The starting position of the chunk.
     * @param tiles The tile values for the chunk.
     * */
    public Chunk(Vector position, Matrix tiles) {
      this.position = position;
      this.tiles = tiles;
    }

    /** Gets the position of the chunk within the layer.
     * @return The chunk's position within the tile layer.
     * */
    public Vector getPosition() {
      return position;
    }

    /** Gets the tile matrix assigned to the chunk.
     * @return The tile matrix assigned to the chunk.
     * */
    public Matrix getTileMatrix() {
      return tiles;
    }

    /** Gets the maximum point of the chunk.
     * @return The maximum point of the chunk.
     * */
    public Vector getMax() {
      int w = tiles.getWidth();
      int h = tiles.getHeight();
      return Vector.sum(position, new Vector(w, h));
    }

    /** Accesses the chunk position.
     * @return The minimum point of the chunk.
     * */
    public Vector getMin() {
      return position;
    }
  }

  /** The chunks (or sections) of the tile layer. */
  private ArrayList<Chunk> chunks;

  /** Constructs a new instance of an irregular tile layer.
   * */
  public IrregularTileLayer() {
    chunks = new ArrayList<Chunk>();
  }

  /** Adds a chunk to the tile layer.
   * @param position The position of the chunk.
   * @param tiles The tiles that the chunk contains.
   * */
  public void addChunk(Vector position, Matrix tiles) {
    chunks.add(new Chunk(position, tiles));
  }

  /** Combines all chunks in the irregular tile layer into a single matrix.
   * @return The matrix containing all tile IDs of the tile layer.
   * */
  public Matrix combine() {

    Vector min = getMin();
    Vector max = getMax();

    Vector size = Vector.diff(max, min);
    int w = (int) size.getX();
    int h = (int) size.getY();

    Matrix matrix = new Matrix(w, h);

    for (Chunk chunk : chunks) {

      Vector insertionPos = Vector.diff(chunk.getPosition(), min);
      int insertionX = (int) insertionPos.getX();
      int insertionY = (int) insertionPos.getY();

      matrix.insertMatrix(chunk.getTileMatrix(), insertionX, insertionY);
    }

    return matrix;
  }

  /** Gets the maximum boundary of the tile layer.
   * @return The maximum boundary of the tile layer.
   * */
  public Vector getMax() {

    Vector max = new Vector(Integer.MIN_VALUE, Integer.MIN_VALUE);

    for (Chunk chunk : chunks) {
      max = Vector.max(chunk.getMax(), max);
    }

    return max;
  }

  /** Calculates the minimum position of the tile layer.
   * @return The minimum layer position.
   * */
  public Vector getMin() {

    Vector min = new Vector(Integer.MAX_VALUE, Integer.MAX_VALUE);

    for (Chunk chunk : chunks) {
      min = Vector.min(chunk.getMin(), min);
    }

    return min;
  }
}

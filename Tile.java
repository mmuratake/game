import java.util.ArrayList;

/** Represents a single tile within a tile set.
 * */
public class Tile {

  /** The numerical ID used to reference the tile in a tile map. */
  private int id;

  /** The path to the image used for this tile. */
  private String imagePath;

  /** The polygon shapes inside the tile.
   * These are used for collision detection,
   * since the are used to cover "solid" parts
   * of the tile. */
  private ArrayList<Polygon> polygons;

  /** Constructs a new tile instance.
   * @param id The ID to assign the tile.
   * @param imagePath The path to the image for this tile.
   * */
  public Tile(int id, String imagePath) {
    this.id = id;
    this.imagePath = imagePath;
    this.polygons = new ArrayList<Polygon>();
  }

  /** Adds a polygon shape to the tile.
   * @param shape The polygon shape to add to the tile.
   * */
  public void addPolygon(Polygon shape) {
    polygons.add(shape);
  }

  /** Gets the ID of the tile.
   * @return The ID of the tile.
   * */
  public int getID() {
    return id;
  }

  /** Gets the image associated with the tile.
   * @return The image associated with the tile.
   * */
  public String getImagePath() {
    return imagePath;
  }
}

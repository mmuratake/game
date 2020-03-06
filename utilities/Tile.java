import java.awt.image.BufferedImage;

import java.util.ArrayList;

/** Represents a single tile within a tile set.
 * */
public class Tile {

  /** The numerical ID used to reference the tile in a tile map. */
  private int id;

  /** The visual data associated with the tile. */
  private BufferedImage image;

  /** The polygon shapes inside the tile.
   * These are used for collision detection,
   * since the are used to cover "solid" parts
   * of the tile. */
  private ArrayList<Polygon2D> polygons;

  /** Constructs a new tile instance.
   * @param id The ID to assign the tile.
   * @param image The image associated with the tile.
   * */
  public Tile(int id, BufferedImage image) {
    this.id = id;
    this.image = image;
    this.polygons = new ArrayList<Polygon2D>();
  }

  /** Adds a polygon shape to the tile.
   * @param shape The polygon shape to add to the tile.
   * */
  public void addPolygon(Polygon2D shape) {
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
  public BufferedImage getImage() {
    return image;
  }
}

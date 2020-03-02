import java.awt.image.BufferedImage;

/** This class implements the wall generation logic.
 * To use it, you give it the three primary images
 * and then run the "generate" function to perform
 * the calculations.
 * */
public class WallGenerator {

  /** This enumerates the several
   * types of tiles produced by this
   * class.
   * */
  enum TileID {
    /** A concave corner at zero degrees of rotation. */
    CONCAVE_CORNER,
    /** A convex corner at zero degrees of rotation. */
    CONVEX_CORNER,
    /** A flat wall tile with zero degrees of rotation. */
    FLAT_WALL
  }

  /** The image for the ceiling texture. */
  private BufferedImage ceilingImage;

  /** The image for the floor texture. */
  private BufferedImage floorImage;

  /** The image for the wall texture. */
  private BufferedImage wallImage;

  /** Generates a tile, specified by the tile ID.
   * @param tileID Specifies which tile we want produced.
   * @param rotation The degrees of rotation that we want from the tile.
   * Valid values are: 0, 90, 180, or 270.
   * @return A generated image for the tile.
   * */
  BufferedImage generate(TileID tileID, int rotation) {
    // TODO
    return generateFallbackImage();
  }

  /** Sets the ceiling texture.
   * @param image The image containing the ceiling texture.
   * */
  void setCeiling(BufferedImage image) {
    this.ceilingImage = image;
  }

  /** Sets the floor texture.
   * @param image The image containing the floor texture.
   * */
  void setFloor(BufferedImage image) {
    this.floorImage = image;
  }

  /** Sets the wall texture.
   * @param image The image containing the wall texture.
   * */
  void setWall(BufferedImage image) {
    this.wallImage = image;
  }

  /** This function is called for when
   * we need to create an image object but
   * we haven't implemented the function.
   * When this class is fully implemented,
   * we can just take out this function altogether.
   * @return An empty buffered image instance.
   * */
  private BufferedImage generateFallbackImage() {
    int width = 256;
    int height = 256;
    int type = BufferedImage.TYPE_INT_ARGB;
    return new BufferedImage(width, height, type);
  }
}

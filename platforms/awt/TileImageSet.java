import java.awt.image.AffineTransformOp;
import java.awt.image.BufferedImage;
import java.awt.image.ColorModel;
import java.awt.image.WritableRaster;

import java.awt.geom.AffineTransform;

import java.util.TreeMap;

import java.io.File;

import javax.imageio.ImageIO;

/** Contains a tile image in all possible rotations.
 * */
class TransformedTile {

  /** The eight possible transforms of the tile image. */
  private BufferedImage[] transforms;

  /** Constructs a new instance of the transformed tile image.
   * @param source The original tile image.
   * */
  public TransformedTile(BufferedImage source) {
    transforms = new BufferedImage[] {
      source,
      hFlip(source),
      vFlip(source),
      vFlip(hFlip(source)),
      dFlip(source),
      dFlip(hFlip(source)),
      dFlip(vFlip(source)),
      dFlip(hFlip(vFlip(source)))
    };
  }

  /** Accesses a specific transformation of the tile.
   * @return The specified transformed tile image.
   * */
  public BufferedImage get(boolean h, boolean v, boolean d) {
    int index = 0;
    index += h ? 1 : 0;
    index += v ? 2 : 0;
    index += d ? 4 : 0;
    return transforms[index];
  }

  /** Applies a horizontal flip to the image. */
  private BufferedImage hFlip(BufferedImage img) {

    AffineTransform transform = AffineTransform.getScaleInstance(-1, 1);

    transform.translate(-img.getWidth(), 0);

    AffineTransformOp op = new AffineTransformOp(transform, AffineTransformOp.TYPE_NEAREST_NEIGHBOR);

    return op.filter(img, null);
  }

  /** Applies a vertical flip to the image. */
  private BufferedImage vFlip(BufferedImage img) {

    AffineTransform transform = AffineTransform.getScaleInstance(1, -1);

    transform.translate(0, -img.getHeight());

    AffineTransformOp op = new AffineTransformOp(transform, AffineTransformOp.TYPE_NEAREST_NEIGHBOR);

    return op.filter(img, null);
  }

  /** Applies a diagonal flip to the image. */
  private BufferedImage dFlip(BufferedImage img) {
    return vFlip(rotateQuadrant(img));
  }

  /** Rotates the image by one quadrant (counter clockwise.) */
  private BufferedImage rotateQuadrant(BufferedImage img) {

    AffineTransform transform = AffineTransform.getQuadrantRotateInstance(1);

    transform.translate(0, -img.getHeight());

    AffineTransformOp op = new AffineTransformOp(transform, AffineTransformOp.TYPE_NEAREST_NEIGHBOR);

    return op.filter(img, null);
  }
}

/** Used for storing scaled and rotated tile images.
 * */
public class TileImageSet {

  /** Contains all scaled, transformed tiles. */
  private TreeMap<Long, TransformedTile> transformedTiles;

  /** Constructs a new tile image set instance.
   * */
  public TileImageSet() {
    transformedTiles = new TreeMap<Long, TransformedTile>();
  }

  /** Indicates whether or not the tile image set contains a specified tile.
   * @param id The tile to check for in the tile image set.
   * @return True if the ID is contained by this tile image set, false otherwise.
   * */
  public boolean contains(long id) {
    return transformedTiles.containsKey(id);
  }

  /** Gets a tile with a specific rotation.
   * @param id The ID of the tile to get.
   * @param hFlip Whether or not the tile should be horizontally flipped.
   * @param vFlip Wehther or not the tile should be vertically flipped.
   * @param dFlip Whether or not the tile should be diagonally flipped.
   * @return The specified tile image.
   * */
  BufferedImage get(long id, boolean hFlip, boolean vFlip, boolean dFlip) {

    TransformedTile tile = transformedTiles.get(id);

    return (tile != null) ? tile.get(hFlip, vFlip, dFlip) : null;
  }

  /** Loads an image into the image tile set.
   * @param id The ID to assign the image.
   * @param imagePath The path of the image to load.
   * */
  public void load(long id, String imagePath) {

    BufferedImage image = null;

    try {
      image = ImageIO.read(new File(imagePath));
    } catch (Exception e) {}

    if (image != null) {
      transformedTiles.put(id, new TransformedTile(image));
    } else {
      transformedTiles.put(id, null);
    }
  }
}

import java.awt.image.BufferedImage;
import java.awt.image.ColorModel;
import java.awt.image.WritableRaster;

import java.util.TreeMap;

import java.io.File;

import javax.imageio.ImageIO;

/** Contains a tile image in all possible rotations.
 * */
class TransformedTile {

  /** The four possible rotations of the tile image. */
  private BufferedImage[] rotations;

  /** Constructs a new instance of the transformed tile image.
   * @param source The original tile image.
   * */
  public TransformedTile(BufferedImage source) {
    rotations = new BufferedImage[] {
      source,
      copyImage(source),
      copyImage(source),
      copyImage(source)
    };
  }

  public BufferedImage get(int index) {
    return rotations[index];
  }

  /** Makes a copy of an image.
   * @param in The image to copy.
   * @return The copy of the specified input image.
   * */
  static BufferedImage copyImage(BufferedImage in) {
    ColorModel cm = in.getColorModel();
    boolean isAlphaPremultiplied = cm.isAlphaPremultiplied();
    WritableRaster raster = in.copyData(null);
    return new BufferedImage(cm, raster, isAlphaPremultiplied, null);
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

  /** Gets a tile with a specific rotation.
   * @param id The ID of the tile to get.
   * @param hFlip Whether or not the tile should be horizontally flipped.
   * @param vFlip Wehther or not the tile should be vertically flipped.
   * @return The specified tile image.
   * */
  BufferedImage get(long id, boolean hFlip, boolean vFlip) {
    int index = 0;
    index += hFlip ? 1 : 0;
    index += vFlip ? 2 : 0;
    TransformedTile tile = transformedTiles.get(id);
    return tile != null ? tile.get(index) : null;
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

import java.awt.Color;
import java.awt.Container;
import java.awt.Component;
import java.awt.Graphics;
import java.awt.GridLayout;

import java.awt.image.BufferedImage;

/** This class is used to render a single tile. */
class TilePreview extends Component {

  /** The image to be drawn onto the window. */
  private BufferedImage image;

  /** The number of checkered rows in the background. */
  private static final int checkered_rows = 10;

  /** The number of checkered columns in the background. */
  private static final int checkered_cols = 10;

  /** Assigns the image to be drawn.
   * @param image The image to be drawn on the tile preview.
   * */
  public void setImage(BufferedImage image) {
    this.image = image;
    repaint();
  }

  /** Paints the contents of the tile preview
   * onto the window.
   * @param graphics Passed from internal AWT
   * and is used to draw the image onto the window.
   * */
  @Override
  public void paint(Graphics graphics) {

    paintCheckeredBackground(graphics);

    if (image != null) {
      graphics.drawImage(image, 0, 0, this);
    }
  }

  /** This is the function that's called
   * when the tile preview doesn't have
   * an image to draw. It draws a black
   * rectangle to indicate its geometry.
   * */
  private void paintCheckeredBackground(Graphics graphics) {

    int w = getWidth();
    int h = getHeight();

    int minSize = (w < h) ? w : h;

    int xOffset = (w - minSize) / 2;
    int yOffset = (h - minSize) / 2;

    int rectW = minSize / checkered_cols;
    int rectH = minSize / checkered_rows;

    for (int y = 0; y < checkered_rows; y++) {

      for (int x = 0; x < checkered_cols; x++) {

        if (((y + x) % 2) == 0) {
          graphics.setColor(Color.WHITE);
        } else {
          graphics.setColor(Color.GRAY);
        }

        System.out.println("x: " + x * rectW);
        System.out.println("y: " + y * rectH);
        System.out.println("w: " + rectH);
        System.out.println("h: " + rectW);

        graphics.fillRect(xOffset + (x * rectW),
                          yOffset + (y * rectH),
                          rectW,
                          rectH);
      }
    }
  }
}

/** This class is for showing the user previews
 * of what the tiles are going to look like. It is
 * made up of several images for flag walls, convex corners,
 * concave corners, and an image of the whole thing put together.
 * */
public class WallGeneratorPreviewGrid extends Container {

  /** This is the layout of the preview grid.
   * This organizes the generated images for the user to see.
   * */
  private GridLayout layout;

  /** These are the tile previews for each of the tile types. */
  private TilePreview tiles[];

  /** The number tile rows that appear in the grid. */
  private static final int rows = 3;

  /** The number tile columns that appear in the grid. */
  private static final int cols = 4;

  /** The number of pixels used to separate tiles horizontally. */
  private static final int h_spacing = 10;

  /** The number of pixels used to separate tiles vertically. */
  private static final int v_spacing = 5;

  /** The total number of tiles in the tile grid. */
  private static final int tileCount = rows * cols;

  /** Constructs a new instance of the preview grid.
   * */
  public WallGeneratorPreviewGrid() {

    setLayout(new GridLayout(rows, cols, h_spacing, v_spacing));

    tiles = new TilePreview[tileCount];

    for (int i = 0; i < tileCount; i++) {
      tiles[i] = new TilePreview();
    }

    for (int i = 0; i < tileCount; i++) {
      add(tiles[i]);
    }
  }

  /** Updates an image shown by the wall generator.
   * @param tileID The ID of the tile image to replace.
   * @param rotation The rotation angle of the generated tile.
   * @param image The tile image to be displayed.
   * */
  public void update(WallGenerator.TileID tileID, int rotation, BufferedImage image) {

    int index = getContainerIndexFor(tileID, rotation);

    tiles[index].setImage(image);
  }

  /** This function is used to get the container
   * index for a certain tile and rotation.
   * @param tileID The ID of the tile to get the container position for.
   * @param rotation The rotation of the tile to get the container position for.
   * @return The index of the specified tile container.
   * */
  private int getContainerIndexFor(WallGenerator.TileID tileID, int rotation) {

    switch (tileID) {
      case CONCAVE_CORNER:
        return 0 + getRotationOffset(rotation);
      case CONVEX_CORNER:
        return 4 + getRotationOffset(rotation);
      case FLAT_WALL:
        return 8 + getRotationOffset(rotation);
    }

    throw new IllegalArgumentException("Invalid Tile ID");
  }

  /** Gets the container index offset for a certain rotation value.
   * @param rotation The rotation value to get the offset for.
   * If this is a weird angle, then an illegal argument exception is thrown.
   * @return The offset for the specified value.
   * */
  private int getRotationOffset(int rotation) {
    if (rotation == 0) {
      return 0;
    } else if (rotation == 90) {
      return 1;
    } else if (rotation == 180) {
      return 2;
    } else if (rotation == 270) {
      return 3;
    } else {
      throw new IllegalArgumentException("Unsupported rotation angle");
    }
  }
}

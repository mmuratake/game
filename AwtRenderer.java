import java.awt.Graphics;

import java.awt.image.BufferedImage;

import java.util.TreeMap;

/** Used for drawing the game with
 * described by the rendering commands,
 * using the AWT graphics context.
 * */
public class AwtRenderer implements RenderCommandVisitor {

  /** The tile images to be referenced. */
  private TreeMap<Long, BufferedImage> tileImageMap;

  /** The graphics context to implement the render commands with. */
  private Graphics graphics;

  /** Constructs a new instance of the AWT renderer.
   * @param tileImageMap The tile images to be rendered.
   * @param graphics The graphics context to draw the contents with.
   * */
  public AwtRenderer(TreeMap<Long, BufferedImage> tileImageMap, Graphics graphics) {
    this.tileImageMap = tileImageMap;
    this.graphics = graphics;
  }

  @Override
  public void visit(DrawTileCommand drawTileCommand) {

    long tileID = drawTileCommand.getTileID();

    long tileIndex = TileID.toIndex(tileID);

    if (!tileImageMap.containsKey(tileIndex)) {
      return;
    }

    BufferedImage img = tileImageMap.get(tileIndex);

    Rect<Integer> rect = drawTileCommand.getRect();

    int x = rect.getX();
    int y = rect.getY();
    int w = rect.getWidth();
    int h = rect.getHeight();

    graphics.drawImage(img, x, y, w, h, null);
  }

  @Override
  public void visit(FillRectCommand fillRectCommand) {

    Rect<Integer> rect = fillRectCommand.getRect();

    graphics.setColor(fillRectCommand.getColor());

    graphics.fillRect(rect.getX(),
                      rect.getY(),
                      rect.getWidth(),
                      rect.getHeight());
  }
}

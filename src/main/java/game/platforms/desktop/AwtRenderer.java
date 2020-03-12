package game.platforms.desktop;

import game.math.Rect;
import game.RenderCommandVisitor;
import game.DrawTileCommand;
import game.TileID;
import game.FillRectCommand;

import java.awt.Graphics;

import java.awt.image.BufferedImage;

/** Used for drawing the game with
 * described by the rendering commands,
 * using the AWT graphics context.
 * */
public class AwtRenderer implements RenderCommandVisitor {

  /** The tile images to be referenced. */
  private TileImageSet tileImageSet;

  /** The graphics context to implement the render commands with. */
  private Graphics graphics;

  /** Constructs a new instance of the AWT renderer.
   * @param tileImageSet The tile images to be rendered.
   * @param graphics The graphics context to draw the contents with.
   * */
  public AwtRenderer(TileImageSet tileImageSet, Graphics graphics) {
    this.tileImageSet = tileImageSet;
    this.graphics = graphics;
  }

  @Override
  public void visit(DrawTileCommand drawTileCommand) {

    long tileID = drawTileCommand.getTileID();

    long tileIndex = TileID.toIndex(tileID);

    if (!tileImageSet.contains(tileIndex)) {
      return;
    }

    boolean hFlip = TileID.isFlippedHorizontally(tileID);
    boolean vFlip = TileID.isFlippedVertically(tileID);
    boolean dFlip = TileID.isFlippedDiagonally(tileID);

    BufferedImage img = tileImageSet.get(tileIndex, hFlip, vFlip, dFlip);

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

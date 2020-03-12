package game;

import game.math.Rect;

/** This is a command to the graphics processor to draw a tile.
 * @see RenderCommand
 * @see RenderCommandVisitor
 * */
public class DrawTileCommand implements RenderCommand {

  /** The ID of the tile to be drawn. */
  private long tileID;

  /** The rectangle on which to draw the tile. */
  private Rect<Integer> rect;

  /** Constructs a tile draw command.
   * @param tileID The ID of the tile to draw.
   * @param rect The rectangle to draw the tile on.
   * */
  public DrawTileCommand(long tileID, Rect<Integer> rect) {
    this.tileID = tileID;
    this.rect = rect;
  }

  /** Accepts a render command visitor.
   * @param visitor The visitor to accept.
   * */
  @Override
  public void accept(RenderCommandVisitor visitor) {
    visitor.visit(this);
  }

  /** Accesses the rectangle on which the tile will be drawn.
   * @return The rectangle to draw the tile on.
   * */
  public Rect<Integer> getRect() {
    return rect;
  }

  /** Accesses the ID of the tile to draw.
   * @return The ID of the tile to draw.
   * */
  public long getTileID() {
    return tileID;
  }
}

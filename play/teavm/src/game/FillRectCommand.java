package game;

import game.math.Rect;
import java.awt.Color;

/** This command is used to fill an area with color.
 * @see RenderCommand
 * @see RenderCommandVisitor
 * */
public class FillRectCommand implements RenderCommand {
  /** The color to fill the area with. */
  private Color color;
  /** The area to fill with color. */
  private Rect<Integer> rect;
  /** Constructs a rectangle fill command.
   * @param color The color to fill the area with.
   * @param rect The area to fill with color.
   * */
  public FillRectCommand(Color color, Rect<Integer> rect) {
    this.color = color;
    this.rect = rect;
  }
  /** Accepts a render command visitor.
   * @param visitor The render command visitor to accept.
   * */
  @Override
  public void accept(RenderCommandVisitor visitor) {
    visitor.visit(this);
  }
  /** Gets the color to be drawn. */
  public Color getColor() { return color; }
  /** Gets the rectangle to draw. */
  public Rect<Integer> getRect() { return rect; }
}

import java.awt.Color;

/** This class allows graphics to be drawn for
 * the game without having to know whether we're using
 * AWT or a different UI or graphics implementation.
 * It's best to keep this interface is minimal as possible,
 * so there's fewer possible issues in porting to the web.
 * */
public interface GraphicsContext {

  /** Gets the aspect ratio of the target window.
   * @return The width to height ratio of the target window.
   * */
  double aspectRatio();

  /** Fills a rectangle with the current foreground color.
   * @param x The horizontal offset, from 0 to 1.
   * @param y The vertical offset, from 0 to 1.
   * @param w The width, relative to the window size, to make the rectangle.
   * @param h The height, relative to the window size, to make the rectangle.
   * */
  void fillRect(double x, double y, double w, double h);

  /** Sets the color to be displayed by
   * the next draw operation.
   * @param color The color to assign the next draw operation.
   * */
  void setColor(Color color);
}

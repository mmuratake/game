import java.awt.Color;
import java.awt.Graphics;

/** This is an implementation of the graphics context
 * class to work with the AWT framework. This is basically
 * an adapter to AWT graphics, so that the game doesn't have
 * to "know" that it's using AWT graphics.
 * */
public class GraphicsContextAwt implements GraphicsContext {

  /** An instance of the AWT graphics context. */
  private Graphics graphics;

  /** The width of the target window, in pixels. */
  private int w;

  /** The height of the target window, in pixels. */
  private int h;

  /** Constructs a new graphics context.
   * @param graphics An instance of the AWT graphics context.
   * @param w The width of the window.
   * @param h The height of the window.
   * */
  public GraphicsContextAwt(Graphics graphics, int w, int h) {
    this.graphics = graphics;
    this.w = w;
    this.h = h;
  }

  /** Gets the aspect ratio of the target window.
   * @return The aspect ratio of the target window.
   * */
  @Override
  public double aspectRatio() {
    double x_res = w;
    double y_res = h;
    return x_res / y_res;
  }

  /** Fills a rectangle with the
   * currently selected color.
   * @param x The position of the left side of the rectangle.
   * @param y The position to start the top of the rectangle at.
   * @param w The width of the rectangle.
   * @param h The height of the rectangle.
   * */
  @Override
  public void fillRect(double x, double y, double w, double h) {

    int scaled_x = scale_x(x);
    int scaled_y = scale_y(y);

    int scaled_w = scale_x(w);
    int scaled_h = scale_y(h);

    this.graphics.fillRect(scaled_x,
                           scaled_y,
                           scaled_w,
                           scaled_h);
  }

  /** Sets the color currently being drawn.
   * @param color The color to give the
   * next draw operation.
   * */
  @Override
  public void setColor(Color color) {
    this.graphics.setColor(color);
  }

  /** Scales an X value to the window width.
   * This is used for translating the NDC coordinates to window coordinates.
   * @param value The value to scale to the window width.
   * @return The scaled value, in pixels.
   * */
  private int scale_x(double value) {
    // (long casted to int)
    return (int) Math.round(value * w);
  }

  /** Scales an Y value to the window width.
   * This is used for translating the NDC coordinates to window coordinates.
   * @param value The value to scale to the window height.
   * @return The scaled value, in pixels.
   * */
  private int scale_y(double value) {
    // (long casted to int)
    return (int) Math.round(value * h);
  }
}

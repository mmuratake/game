package game.math;

/** Represents a simple 2D rectangle.
 * Can either be used as an integer rectangle
 * or a floating point rectangle.
 * */
public class Rect<T> {
  /** The X position of the rectangle. */
  private T x;
  /** The Y position of the rectangle. */
  private T y;
  /** The width of the rectangle. */
  private T w;
  /** The height of the rectangle. */
  private T h;
  /** Constructs a new rectangle.
   * @param x The X coordinate to assign the rectangle.
   * @param y The Y coordinate to assign the rectangle.
   * @param w The width to assign the rectangle.
   * @param h The height to assign the rectangle.
   * */
  public Rect(T x, T y, T w, T h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  /** Accesses the X component of the position. */
  public T getX() { return x; }
  /** Accesses the Y component of the position. */
  public T getY() { return y; }
  /** Accesses the rectangle width. */
  public T getWidth() { return w; }
  /** Accesses the rectangle height. */
  public T getHeight() { return h; }
}

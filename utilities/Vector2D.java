/** Represents a 2 dimensional vector.
 * Used for various math calculations,
 * and for composing polygons.
 * */
public class Vector2D {

  /** The X value of the vector. */
  private double x;

  /** The Y value of the vector. */
  private double y;

  /** Constructs a new instance of a 2D vector.
   * @param x The X value to assign.
   * @param y The Y value to assign.
   * */
  Vector2D(double x, double y) {
    this.x = x;
    this.y = y;
  }
}

package game.math;

/** A two dimensional vector.
 * Used in various locations to indicate
 * either direction or position.
 * */
public class Vector {

  private double x;

  private double y;

  /** Calculates the difference between two vectors.
   * @return The difference between the two vector parameters.
   * */
  public static Vector diff(Vector a, Vector b) {
    return new Vector(a.x - b.x, a.y - b.y);
  }

  /** Calculates the max of two vectors.
   * @return The max between the two vectors.
   * */
  public static Vector max(Vector a, Vector b) {
    double x = Math.max(a.x, b.x);
    double y = Math.max(a.y, b.y);
    return new Vector(x, y);
  }

  /** Calculates the min of two vectors.
   * @return The min between the two vectors.
   * */
  public static Vector min(Vector a, Vector b) {
    double x = Math.min(a.x, b.x);
    double y = Math.min(a.y, b.y);
    return new Vector(x, y);
  }

  /** Multiplies the vector by a scalar value.
   * @param in The vector to multiply.
   * @param factor The factor to multiply each component by.
   * @return The resultant vector.
   * */
  public static Vector mul(Vector in, double factor) {
    return new Vector(in.x * factor, in.y * factor);
  }

  /** Calculates the sum of two vectors.
   * @return The sum of the first and second vectors.
   * */
  public static Vector sum(Vector a, Vector b) {
    return new Vector(a.x + b.x, a.y + b.y);
  }

  public Vector(double x, double y) {
    this.x = x;
    this.y = y;
  }

  /** Gets the X component of the vector. */
  public double getX() { return this.x; }

  /** Gets the Y component of the vector. */
  public double getY() { return this.y; }

  /** Sets the X component of the vector. */
  public void setX(double x) { this.x = x; }

  /** Sets the Y component of the vector. */
  public void setY(double y) { this.y = y; }

  /** Indicates if the net direction is upwards.
   * @return True if the direction is mostly upwards, false otherwise. */
  public boolean isMostlyUp() {
    if (y > 0 && y > Math.abs(x)) {
      return true;
    }
    return false;
  }

  public boolean isMostlyRight() {
    if (x > 0 && x > Math.abs(y)) {
      return true;
    }
    return false;
  }

  public boolean isMostlyDown() {
    if (y < 0 && Math.abs(y) > Math.abs(x)) {
       return true;
    }
    return false;
  }

  public boolean isMostlyLeft() {
    if (x < 0 && Math.abs(x) > Math.abs(y)) {
      return true;
    }
    return false;
  }
}

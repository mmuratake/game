/** A two dimensional vector.
 * Used in various locations to indicate
 * either direction or position. Most of
 * the functions in this class are not documented
 * simply because they're self-documenting.
 * */
class Vector {

  private double x;

  private double y;

  public Vector(double x, double y) {
    this.x = x;
    this.y = y;
  }

  public double getX() {
    return this.x;
  }

  public double getY() {
    return this.y;
  }

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

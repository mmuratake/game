import java.util.ArrayList;

/** Represents a 2D polygon
 * with an arbitrary number of sides.
 * The points should be added in clockwise
 * rounding order.
 * */
public class Polygon2D {

  /** Contains all the points in the polygon. */
  private ArrayList<Vector2D> points;

  /** Constructs a new instance of a 2D polygon.
   * */
  public Polygon2D() {
    points = new ArrayList<Vector2D>();
  }

  /** Adds a point to the polygon.
   * @param point The point to be added.
   * */
  void add(Vector2D point) {
    points.add(point);
  }
}

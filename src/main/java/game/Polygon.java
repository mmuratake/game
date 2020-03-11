package game;

import java.util.ArrayList;

/** Represents a  polygon
 * with an arbitrary number of sides.
 * The points should be added in clockwise
 * rounding order.
 * */
public class Polygon {

  /** Contains all the points in the polygon. */
  private ArrayList<Vector> points;

  /** Constructs a new instance of a  polygon.
   * */
  public Polygon() {
    points = new ArrayList<Vector>();
  }

  /** Adds a point to the polygon.
   * @param point The point to be added.
   * */
  void add(Vector point) {
    points.add(point);
  }
}

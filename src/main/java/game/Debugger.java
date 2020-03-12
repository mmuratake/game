package game;

import game.math.Rect;
import game.math.Matrix;

/** This class is used to print information
 * within the classes in this project. It is
 * used primarily for debugging purposes.
 * */
public class Debugger {

  /** The current indentation. */
  private int indent;

  /** Constructs a new debugger instance. */
  public Debugger() {
    this.indent = 0;
  }

  /** Prints a matrix value. */
  public void print(Matrix matrix) {
    for (int y = 0; y < matrix.getHeight(); y++) {
      for (int x = 0; x < matrix.getWidth(); x++) {
        System.err.print(matrix.getValue(x, y));
        System.err.print(" ");
      }
      System.err.println();
    }
  }

  /** Prints a rectangle. */
  void print(Rect rect) {
    System.err.print("{ ");
    System.err.print("x:" + rect.getX() + " ");
    System.err.print("y:" + rect.getY() + " ");
    System.err.print("w:" + rect.getWidth()  + " ");
    System.err.print("h:" + rect.getHeight() + " ");
    System.err.print(" }");
    System.err.println();
  }
}

package game;

/** A simple integer matrix, used for referencing tiles.
 * */
public class Matrix {

  /** The number of columns in one row of the matrix. */
  private int width;

  /** The number of rows in the matrix. */
  private int height;

  /** The matrix values. */
  private long[] values;

  /** Constructs a new matrix instance.
   * @param w The width of the matrix.
   * @param h The height of the matrix.
   * */
  Matrix(int w, int h) {
    this.width = w;
    this.height = h;
    this.values = new long[w * h];
  }

  /** Gets the height of the matrix.
   * @return The height of the matrix.
   * */
  int getHeight() {
    return height;
  }

  /** This function accesses a value from the matrix.
   * @param x The X coordinate of the value.
   * @param y The Y coordinate of the value.
   * @return The value at the specified location.
   * If the coordinates are out of bounds, zero is returned instead.
   * */
  long getValue(int x, int y) {
    return inBounds(x, y) ? values[indexOf(x, y)] : 0;
  }

  /** Gets the width of the matrix.
   * @return The width of the matrix.
   * */
  int getWidth() {
    return width;
  }

  /** Assigns a value to the matrix.
   * If the coordinates passed to this function are
   * out of bounds, then nothing is done to the matrix.
   * @param x The X coordinate of the value to assign.
   * @param y The Y coordinate of the value to assign.
   * @param value The value to assign to the matrix.
   * */
  void setValue(int x, int y, long value) {
    if (inBounds(x, y)) {
      values[indexOf(x, y)] = value;
    }
  }

  /** Indicates if a certain set of coordinates
   * is in bounds of the matrix. This is used for
   * safely accessing matrix data.
   * @param x The X coordinate to check.
   * @param y The Y coordinate to check.
   * @return True if the coordinates are in bounds, false otherwise
   * */
  boolean inBounds(int x, int y) {
    return (x < width) && (y < height);
  }

  /** Copies the values from another matrix onto this one.
   * @param other The matrix to copy the values from.
   * @param insertionX The X value to insert the matrix at.
   * @param insertionY The Y value to insert the matrix at.
   * */
  public void insertMatrix(Matrix other, int insertionX, int insertionY) {

    for (int y = 0; y < other.height; y++) {
      for (int x = 0; x < other.width; x++) {
        setValue(insertionX + x, insertionY + y, other.getValue(x, y));
      }
    }
  }

  /** This function computes the value index of a coordinate.
   * @param x The X value of the coordinate.
   * @param y The Y value of the coordinate.
   * @return The index used to reference the value.
   * */
  private int indexOf(int x, int y) {
    return (y * width) + x;
  }
}

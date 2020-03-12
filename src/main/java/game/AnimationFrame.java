package game;

/** Used to store information regarding
 * a single frame in an animation.
 * */
public class AnimationFrame {
  /** The ID of the tile to display for this frame. */
  private long tileID;
  /** The number of milliseconds to display this frame for. */
  private int delay;
  /** Constructs a new animation frame.
   * @param tileID The ID of the tile to be displayed.
   * @param delay The number of milliseconds to display the tile for.
   * */
  public AnimationFrame(long tileID, int delay) {
    this.tileID = tileID;
    this.delay = delay;
  }
}

package game;

import java.util.ArrayList;

/** An animation is a series of tiles
 * displayed in a certain order, each tile
 * taking up a specific amount of tile.
 * */
public class Animation {
  /** The frames making up the animation. */
  private ArrayList<AnimationFrame> frames;
  /** Constructs a new animation instance. */
  public Animation() {
    frames = new ArrayList<AnimationFrame>();
  }
  /** Adds a frame to the animation.
   * @param frame The frame to add to the animation.
   * */
  public void addFrame(AnimationFrame frame) {
    frames.add(frame);
  }
}

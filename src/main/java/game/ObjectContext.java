package game;

/** This class contains object data that
 * changes throughout game play. It tracks
 * current object velocity, position, and
 * the action that the object is currently performing.
 */
public class ObjectContext {

  /** The current position of the object. */
  private Vector position;

  /** The current velocity of the object. */
  private Vector velocity;

  /** The current step within the action
   * timeline that the object is at. */
  private int actionStep;

  /** Constructs a new object context.
   * */
  public ObjectContext() {
    position = new Vector(0, 0);
    velocity = new Vector(0, 0);
    actionStep = 0;
  }
}

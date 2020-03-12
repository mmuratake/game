package game;

/** This class contains object data that
 * changes throughout game play. It tracks
 * current object velocity, position, and
 * the action that the object is currently performing.
 */
public class Object {

  /** The template on which this object is based on. */
  private ObjectTemplate template;

  /** The current position of the object. */
  private Vector position;

  /** The current velocity of the object. */
  private Vector velocity;

  /** The current step within the action
   * timeline that the object is at. */
  private int actionStep;

  /** The ID of the player controlling this object.
   * If this value is equal to or above {@link #PLAYER_MAX},
   * then it is not considered to be played by a human. */
  private int playerID;

  /** The maximum ID for a human player. */
  private final int PLAYER_MAX = 3;

  /** Constructs a new object context.
   * @param playerID The ID of the player to control this object.
   * @param template The template to base this object on.
   * */
  public Object(int playerID, ObjectTemplate template) {
    this.playerID = playerID;
    this.template = template;
    this.position = new Vector(0, 0);
    this.velocity = new Vector(0, 0);
    this.actionStep = 0;
  }

  /** Advances the object through time.
   * @param milliseconds The number of milliseconds
   * to advance the object forward in time. */
  public void advance(int milliseconds) {

    Vector deltaPos = Vector.mul(this.velocity, (double) milliseconds);

    this.position = Vector.sum(this.position, deltaPos);
  }
}

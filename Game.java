import java.awt.Color;

import java.util.ArrayList;

/** This class implements all of the game logic.
 * It is meant to be separate from the method in
 * which the game is presented to the user.
 * @see GameUi
 * */
public class Game {

  /** The position of the player. */
  private Vector playerPosition;

  /** The velocity of the player. */
  private Vector playerVelocity;

  /** The game's tile set. This contains information
   * such as the physical characteristics of the tiles,
   * which can be used to detect collision.
   * */
  private TileSet tileSet;

  /** The tile maps for the game.
   * These have to be loaded from the calling environment.
   * */
  private ArrayList<TileMap> tileMaps;

  /** Enumerates the buttons available to the game.
   * The way this buttons get pressed or released
   * depends on the origin of the user interface.
   * Usually, it's a mixture of mouse and keyboard events.
   * */
  enum Button {
    BUTTON_A,
    BUTTON_B
  }

  /** Constructs a new instance of the game.
   * @param tileSet The game's tile data.
   * */
  public Game(TileSet tileSet) {
    this.playerPosition = new Vector(7, 13);
    this.playerVelocity = new Vector(0, 0);
    this.tileSet = tileSet;
    this.tileMaps = new ArrayList<TileMap>();
  }

  /** Adds a tile map to the game.
   * @param tileMap The tile map to add to the game.
   * */
  public void addTileMap(TileMap tileMap) {
    tileMaps.add(tileMap);
  }

  /** This function is called to move the game forward
   * in time by a certain number of milliseconds.
   * @param milliseconds The number of milliseconds in
   * which to move the game forward.
   * */
  public void advance(int milliseconds) {

    Vector delta = Vector.mul(this.playerVelocity, (double) milliseconds);

    this.playerPosition = Vector.sum(this.playerPosition, delta);
  }

  /** This function is called when the user moves the analog stick.
   * For keyboard controls, this means either the arrow keys or the WASD keys.
   * @param controller The ID of the controller that is being updated.
   * This is only relevant for multiplayer, in which case player 2 would
   * have a value for one, player 3 would have a value of two, and so one.
   * For single player, the value will always be zero.
   * @param x The new X value that the axis was updated to.
   * For keyboard controls, this will either be -1, 0, or 1.
   * For analog controls, this will be anywhere within the range of -1 and 1.
   * @param y The new Y value that the axis was updated to.
   * For keyboard controls, this will either be -1, 0, or 1.
   * For analog controls, this will be anywhere within the range of -1 and 1.
   * */
  public void axisUpdate(int controller, double x, double y) {
    System.out.println("Axis updated: " + x + ", " + y);
    playerVelocity.setX(x);
    playerVelocity.setY(y);
  }

  /** This function is called when the user either lets go or presses a button.
   * @param controller The ID of the controller whose button was pressed or released.
   * @param button The button that was pressed or release.
   * @param state The new state of the button. A value of true means that
   * the button was pressed, a value of false means the button was released.
   * */
  public void buttonUpdate(int controller, Button button, boolean state) {
    System.out.println("Button state updated: " + button + " = " + state);
  }

  /** Gets the title of the game.
   * This is eventually used to be displayed
   * on the title of the window.
   * @return The name of the game, as a title.
   * */
  public String getTitle() {
    return "Pending Title";
  }

  /** Accesses the current map being played. */
  public TileMap getCurrentMap() {
    return tileMaps.get(1);
  }

  /** Gets the position of the player.
   * The game renderer uses this information
   * to render the active part of the current map.
   * @return The player position, in terms of tile coordinates.
   * */
  public Vector getPlayerPosition() {
    return playerPosition;
  }

  /** This function gets a list of file names
   * of all the maps for the game. This is used
   * by the calling environment (desktop or browser)
   * to determine which files to open as maps.
   * @return An alphabetical list of map file names.
   * */
  public ArrayList<String> getMapFileNames() {
    /* Keep this alphabetized */
    ArrayList<String> fileNames = new ArrayList<String>();
    fileNames.add("grassy_plains.tmx");
    fileNames.add("house_interior.tmx");
    fileNames.add("village.tmx");
    return fileNames;
  }
}

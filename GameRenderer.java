import java.awt.Color;

/** This class is used to describe how the game
 * should currently be renderer. It uses a command
 * queue which accumulates the instructions required
 * to render the current frame.
 * @see RenderCommandQueue
 * @see Game
 * */
public class GameRenderer {

  /** The horizontal resolution of the window. */
  private int xRes;

  /** The vertical resolution of the window. */
  private int yRes;

  /** The number of tiles that appear in one row. */
  private int xRoomRes;

  /** The number of tiles that appear in one column. */
  private int yRoomRes;

  /** Constructs a new game renderer instance,
   * using default resolution values.
   * */
  public GameRenderer() {
    this.xRes = 100;
    this.yRes = 100;
    this.xRoomRes = 10;
    this.yRoomRes = 10;
  }

  /** Renders the room.
   * @param cmdQueue The rendering command queue.
   * Commands that draw onto the window are added here.
   * @param game The game to be drawn.
   * */
  public void render(RenderCommandQueue cmdQueue, Game game) {

    Vector center = game.getPlayerPosition();

    TileMap tileMap = game.getCurrentMap();

    for (int i = 0; i < tileMap.getLayerCount(); i++) {

      Matrix layer = tileMap.getLayer(i);

      renderLayer(cmdQueue, layer, center);
    }
  }

  /** Sets the horizontal and vertical resolution of the window.
   * This is used to scale tiles appropiately to the window size.
   * @param x The X resolution to assign, in pixels.
   * @param y The Y resolution to assign, in pixels.
   * */
  void setResolution(int x, int y) {
    this.xRes = x;
    this.yRes = y;
  }

  /** Sets the room resolution.
   * In other words, sets the number of tiles
   * that appear at once in a room.
   * @param x The number of tiles to appear in one row.
   * @param y The number of tiles to appear in one column.
   * */
  void setRoomResolution(int x, int y) {
    this.xRoomRes = x;
    this.yRoomRes = y;
  }

  /** Renders a single layer of a tile map.
   * @param cmdQueue The command queue to fill with instructions to render the layer.
   * @param layer The tile matrix for the layer.
   * @param center The center
   * */
  private void renderLayer(RenderCommandQueue cmdQueue, Matrix layer, Vector center) {

    int wTile = xTileRes();
    int hTile = yTileRes();

    for (int y = 0; y < layer.getHeight(); y++) {

      for (int x = 0; x < layer.getWidth(); x++) {

        long tileID = layer.getValue(x, y);

        Rect<Integer> tileRect = new Rect<Integer>(wTile * x, hTile * y, wTile, hTile);

        cmdQueue.add(new DrawTileCommand(tileID, tileRect));
      }
    }
  }

  /** Gets the horizontal resolution of one tile. */
  private int xTileRes() { return 100; }

  /** Gets the vertical resolution of one tile. */
  private int yTileRes() { return 100; }
}

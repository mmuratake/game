package game;

import game.math.Rect;
import game.math.Vector;
import game.math.Matrix;
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

  /** Constructs a new game renderer instance,
   * using default resolution values.
   * */
  public GameRenderer() {
    this.xRes = 100;
    this.yRes = 100;
  }

  /** Renders the room.
   * @param cmdQueue The rendering command queue.
   * Commands that draw onto the window are added here.
   * @param game The game to be drawn.
   * */
  public void render(RenderCommandQueue cmdQueue, Game game) {

    Vector center = game.getPlayerPosition();

    TileMap tileMap = game.getCurrentMap();

    /* Set the background color */
    cmdQueue.add(new FillRectCommand(new Color(0, 0, 0, 0), new Rect<Integer>(0, 0, xRes, yRes)));

    for (int i = 0; i < tileMap.getLayerCount(); i++) {
      renderLayer(cmdQueue, tileMap.getLayer(i), center);
    }
  }

  /** Sets the horizontal and vertical resolution of the window.
   * This is used to scale tiles appropiately to the window size.
   * @param x The X resolution to assign, in pixels.
   * @param y The Y resolution to assign, in pixels.
   * */
  public void setResolution(int x, int y) {
    this.xRes = x;
    this.yRes = y;
  }

  /** Renders a single layer of a tile map.
   * @param cmdQueue The command queue to fill with instructions to render the layer.
   * @param layer The tile matrix for the layer.
   * @param center The center
   * */
  private void renderLayer(RenderCommandQueue cmdQueue, Matrix layer, Vector center) {

    int xCenter = (int) center.getX();
    int yCenter = (int) center.getY();

    int xPixelCenter = (int) (xTileRes() * center.getX());
    int yPixelCenter = (int) (yTileRes() * center.getY());

    int xRoomRes = ((xRes + (xTileRes() - 1)) / xTileRes()) + 1;
    int yRoomRes = ((yRes + (yTileRes() - 1)) / yTileRes()) + 1;

    for (int y = 0; y < yRoomRes; y++) {

      for (int x = 0; x < xRoomRes; x++) {

        long tileID = layer.getValue(x + xCenter, y + yCenter);

        if (!TileID.isValid(tileID)) {
          continue;
        }

        int xTilePos = (xTileRes() * x) - (xPixelCenter % xTileRes());
        int yTilePos = (yTileRes() * y) - (yPixelCenter % yTileRes());

        int wTile = xTileRes();
        int hTile = yTileRes();

        Rect<Integer> tileRect = new Rect<Integer>(xTilePos, yTilePos, wTile, hTile);

        cmdQueue.add(new DrawTileCommand(tileID, tileRect));
      }
    }
  }

  /** Gets the horizontal resolution of one tile. */
  private int xTileRes() { return 100; }

  /** Gets the vertical resolution of one tile. */
  private int yTileRes() { return 100; }
}

package game.platforms.browser;

import game.DrawTileCommand;
import game.FillRectCommand;
import game.Game;
import game.GameRenderer;
import game.RenderCommandQueue;
import game.RenderCommandVisitor;
import game.Tile;
import game.TileID;
import game.TileSet;

import game.math.Rect;

import java.util.ArrayList;
import java.util.TreeMap;

import java.awt.Color;

import org.teavm.jso.dom.html.HTMLCanvasElement;
import org.teavm.jso.dom.html.HTMLDocument;
import org.teavm.jso.dom.html.HTMLImageElement;

import org.teavm.jso.browser.AnimationFrameCallback;
import org.teavm.jso.browser.Window;

import org.teavm.jso.canvas.CanvasRenderingContext2D;
import org.teavm.jso.canvas.CanvasImageSource;

import org.teavm.jso.dom.events.EventListener;
import org.teavm.jso.dom.events.KeyboardEvent;

/** Represents the axis of a controller.
 * In this case, the controller is the keyboard.
 * */
class ControlAxis {
  /** The X value of the control axis. */
  double x;
  /** The Y value of the control axis. */
  double y;
  /// Constructs a new control axis instance.
  public ControlAxis() {
    x = 0;
    y = 0;
  }
  public double getX() { return x; }
  public double getY() { return y; }
  public void setX(double x) { this.x = x; }
  public void setY(double y) { this.y = y; }
}

/** Used for handling keyboard events.
 * These are usually interpreted as game controls.
 * */
class KeyListener implements EventListener<KeyboardEvent> {

  /** The game to pass the controls to. */
  private Game game;

  /** The key state that this listener is for. */
  private boolean keyState;

  /** The control axis to modify. */
  private ControlAxis axis;

  /** Constructs a new keyboard listener.
   * @param game The game instance to pass the controls to.
   * @param keyState The key state that this key listener is for.
   * True indicates it's for key press events, false indicates
   * it's for key release events.
   * */
  public KeyListener(Game game, ControlAxis axis, boolean keyState) {
    this.game = game;
    this.keyState = keyState;
    this.axis = axis;
  }

  /** Handles a keyboard event.
   * The controls, if the key matches,
   * are passed to the game for processing. */
  @Override
  public void handleEvent(KeyboardEvent event) {

    double x = axis.getX();
    double y = axis.getY();

    switch (event.getKeyCode()) {
      case 65: /* A */
      case 37: /* Arrow Left */
        x = keyState ? -1 : 0;
        break;
      case 87: /* W */
      case 38: /* Arrow Up */
        y = keyState ? -1 : 0;
        break;
      case 68: /* D */
      case 39: /* Arrow Right */
        x = keyState ? 1 : 0;
        break;
      case 83: /* S */
      case 40: /* Arrow Down */
        y = keyState ? 1 : 0;
        break;
    }

    if ((x == axis.getX()) && (y == axis.getY())) {
      // No change
      return;
    }

    axis.setX(x);
    axis.setY(y);

    game.axisUpdate(0, x, y);
  }
}

/** This class provides a view of the game.
 * Internally, it creates a 'canvas' HTML element
 * for the game to be drawn with.
 * */
public class GameView implements RenderCommandVisitor, AnimationFrameCallback {

  /** The game being viewed. */
  private Game game;

  /** The canvas element on which the game is rendered on. */
  private HTMLCanvasElement canvas;

  /** The 2D rendering context for the canvas element. */
  private CanvasRenderingContext2D context;

  /** The tile images to be rendered. */
  private TreeMap<Integer, HTMLImageElement> images;

  /** Used for creating the render command queue. */
  private GameRenderer gameRenderer;

  /** The render commands used to describe the scene. */
  private RenderCommandQueue renderCmdQueue;

  /** The controller axis. */
  private ControlAxis controlAxis;

  /** The key release listener, affecting the game controls. */
  private KeyListener keyReleaseListener;

  /** The key press listener, affecting the game controls. */
  private KeyListener keyPressListener;

  /** The timestamp of the last rendered frame. */
  private double lastTimestamp;

  /** Constructs a new game view instance.
   * @param game The game to be viewed.
   * @param document The document to add the game view to.
   * */
  public GameView(Game game, TreeMap<Integer, HTMLImageElement> images, HTMLDocument document) {

    this.game = game;

    this.controlAxis = new ControlAxis();

    this.keyReleaseListener = new KeyListener(game, this.controlAxis, false);
    this.keyPressListener = new KeyListener(game, this.controlAxis, true);

    document.getBody().addEventListener("keydown", this.keyPressListener);
    document.getBody().addEventListener("keyup", this.keyReleaseListener);

    Window window = Window.current();

    this.canvas = (HTMLCanvasElement) document.createElement("canvas");
    this.canvas.setWidth(window.getInnerWidth());
    this.canvas.setHeight(window.getInnerHeight());

    this.context = (CanvasRenderingContext2D) this.canvas.getContext("2d");

    this.images = images;

    this.gameRenderer = new GameRenderer();

    this.renderCmdQueue = new RenderCommandQueue();

    document.getBody().appendChild(canvas);

    this.lastTimestamp = -1;
  }

  /** Renders the game to the canvas. */
  public void render() {

    this.gameRenderer.setResolution(canvas.getWidth(), canvas.getHeight());

    this.renderCmdQueue.clear();

    this.gameRenderer.render(this.renderCmdQueue, this.game);

    this.renderCmdQueue.visitAll(this);
  }

  /** Draws a tile image onto the canvas.
   * @param drawTileCommand The command instance
   * containing the data required to draw the tile.
   * */
  @Override
  public void visit(DrawTileCommand drawTileCommand) {

    Rect<Integer> targetArea = drawTileCommand.getRect();

    long tileID = drawTileCommand.getTileID();

    int tileIndex = (int) TileID.toIndex(tileID);

    this.context.save();

    this.context.translate(targetArea.getX(), targetArea.getY());

    if (TileID.isFlippedHorizontally(tileID)) {
      this.context.scale(-1, 1);
      this.context.translate(-targetArea.getWidth(), 0);
    }

    if (TileID.isFlippedHorizontally(tileID)) {
      this.context.scale(1, -1);
      this.context.translate(0, -targetArea.getHeight());
    }

    if (TileID.isFlippedDiagonally(tileID)) {
      this.context.rotate(-Math.PI / 2.0);
      this.context.translate(-targetArea.getWidth(), 0);
    }

    this.context.drawImage(images.get(tileIndex), 0, 0);

    this.context.restore();
  }

  /** Fills a rectangle on the canvas with a specified color.
   * @param fillRectCommand The command instance containing the
   * information required to fill the rectangle with color.
   * */
  @Override
  public void visit(FillRectCommand fillRectCommand) {

    Color color = fillRectCommand.getColor();

    Rect<Integer> area = fillRectCommand.getRect();

    String fillStyle = "rgba(";
    fillStyle += color.getRed();
    fillStyle += ", ";
    fillStyle += color.getGreen();
    fillStyle += ", ";
    fillStyle += color.getBlue();
    fillStyle += ", ";
    fillStyle += color.getAlpha();
    fillStyle += ")";

    //this.context.setFillStyle(fillStyle);

    this.context.fillRect(area.getX(),
                          area.getY(),
                          area.getWidth(),
                          area.getHeight());
  }

  /** Called when the browser requests a new animation frame.
   * @param timestamp The number of timestamp of the current frame.
   * */
  @Override
  public void onAnimationFrame(double timestamp) {

    // Handles the case of the first timestamp
    if (this.lastTimestamp >= 0) {
      this.game.advance((int) (timestamp - this.lastTimestamp));
    }

    this.lastTimestamp = timestamp;

    this.render();

    Window window = Window.current();

    window.requestAnimationFrame(this);
  }
}

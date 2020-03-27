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

import org.teavm.jso.browser.Window;

import org.teavm.jso.canvas.CanvasRenderingContext2D;
import org.teavm.jso.canvas.CanvasImageSource;

/** This class provides a view of the game.
 * Internally, it creates a 'canvas' HTML element
 * for the game to be drawn with.
 * */
public class GameView implements RenderCommandVisitor {

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

  /** Constructs a new game view instance.
   * @param game The game to be viewed.
   * @param document The document to add the game view to.
   * */
  public GameView(Game game, TreeMap<Integer, HTMLImageElement> images, HTMLDocument document) {

    this.game = game;

    Window window = Window.current();

    this.canvas = (HTMLCanvasElement) document.createElement("canvas");
    this.canvas.setWidth(window.getInnerWidth());
    this.canvas.setHeight(window.getInnerHeight());

    this.context = (CanvasRenderingContext2D) this.canvas.getContext("2d");

    this.images = images;

    // Breaks the build
    this.gameRenderer = new GameRenderer();

    this.renderCmdQueue = new RenderCommandQueue();

    document.getBody().appendChild(canvas);
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

    double x_scale = 1;
    double y_scale = 1;

    double angle = 0;

    int x_offset = 0;
    int y_offset = 0;

    long tileID = drawTileCommand.getTileID();

    int tileIndex = (int) TileID.toIndex(tileID);

    if (TileID.isFlippedDiagonally(tileID)) {
      angle = -(Math.PI / 2);
      y_scale *= -1;
    }

    if (TileID.isFlippedHorizontally(tileID)) {
      x_scale *= -1;
      x_offset = -targetArea.getWidth();
    }

    if (TileID.isFlippedVertically(tileID)) {
      y_scale *= -1;
      y_offset = -targetArea.getWidth();
    }

    this.context.save();

    this.context.translate(targetArea.getX(), targetArea.getY());

    this.context.scale(x_scale, y_scale);

    this.context.rotate(angle);

    this.context.drawImage(images.get(tileIndex), x_offset, y_offset);

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

    System.out.println(fillStyle);
    System.out.println(area.getWidth());
    System.out.println(area.getHeight());

    //this.context.setFillStyle(fillStyle);

    this.context.fillRect(area.getX(),
                          area.getY(),
                          area.getWidth(),
                          area.getHeight());
  }
}

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

import org.teavm.jso.dom.html.HTMLCanvasElement;
import org.teavm.jso.dom.html.HTMLDocument;
import org.teavm.jso.dom.html.HTMLImageElement;

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

    this.canvas = (HTMLCanvasElement) document.createElement("canvas");

    /* TODO : size to fill window */
    this.canvas.setWidth(640);
    this.canvas.setHeight(480);

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

    long tileID = drawTileCommand.getTileID();

    this.context.drawImage(images.get((int) TileID.toIndex(tileID)),
                           targetArea.getX(),
                           targetArea.getY(),
                           targetArea.getWidth(),
                           targetArea.getHeight());
  }

  /** Fills a rectangle on the canvas with a specified color.
   * @param fillRectCommand The command instance containing the
   * information required to fill the rectangle with color.
   * */
  @Override
  public void visit(FillRectCommand fillRectCommand) {
  }
}

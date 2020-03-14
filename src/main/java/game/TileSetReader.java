package game;

import game.math.Polygon;
import game.math.Vector;

import game.xml.Element;
import game.xml.ElementList;

/** This class is used for reading tile sets
 * from the XML file created by Tiled.
 * */
public class TileSetReader {

  /** The tile set that the data
   * will be going into. */
  private TileSet tileSet;

  /** Constructs a new instance of a tile set reader.
   * @param tileSet The tile set to put the data into.
   * */
  public TileSetReader(TileSet tileSet) {
    this.tileSet = tileSet;
  }

  /** Reads a tile set from an XML node.
   * @param root The root XML node to read the tile set from.
   * */
  public void readFromElement(Element root) {

    ElementList tileElements = root.getElementsByTag("tile");

    for (int i = 0; i < tileElements.getCount(); i++) {
      readTileElement(tileElements.getElement(i));
    }
  }

  /** Reads tile data from a tile element.
   * @param tileElement The element from the XML file containing the tile data.
   * */
  private void readTileElement(Element tileElement) {

    String imagePath = "";

    ElementList imageElementList = tileElement.getElementsByTag("image");
    if (imageElementList.getCount() > 0) {
      imagePath = imageElementList.getElement(0).getAttribute("source");
    }

    ElementList objectGroupElementList = tileElement.getElementsByTag("objectgroup");

    String id = tileElement.getAttribute("id");

    Tile tile = new Tile(Long.parseLong(id), imagePath);

    for (int i = 0; i < objectGroupElementList.getCount(); i++) {
      readTileObjectGroup(tile, objectGroupElementList.getElement(i));
    }

    tileSet.add(tile);
  }

  /** Reads the element containing the objects of the tile
   * and assigns them as polygons in the tile.
   * @param tile The tile to put the object data into.
   * @param objectGroup The element containing the tile object shapes.
   * */
  private void readTileObjectGroup(Tile tile, Element objectGroup) {

    ElementList objectElements = objectGroup.getElementsByTag("object");

    for (int i = 0; i < objectElements.getCount(); i++) {
      readTileObject(tile, objectElements.getElement(i));
    }
  }

  /** Reads the object data for a tile.
   * @param tile The tile to put the object data into.
   * @param object The XML object node containing the data points.
   * */
  private void readTileObject(Tile tile, Element objectElement) {
    readTilePolygons(tile, objectElement.getElementsByTag("polygon"));
  }

  /** Reads the list of polygons found in an object element.
   * @param tile The tile to put the polygon data into.
   * @param polygonElements The list of polygon nodes from the XML file.
   * */
  private void readTilePolygons(Tile tile, ElementList polygonElements) {
    for (int i = 0; i < polygonElements.getCount(); i++) {
      readTilePolygon(tile, polygonElements.getElement(i));
    }
  }

  /** Reads a polygon element and puts the data into a tile.
   * @param tile The tile to put the data into.
   * @param polygon The polygon element to read the points from.
   * */
  private void readTilePolygon(Tile tile, Element polygon) {
    readTilePolygonPointData(tile, polygon.getAttribute("points"));
  }

  /** Reads a space separated list of polygon points.
   * Each point is separated by a comma. The X value
   * comes first, then the y value follows.
   * @param tile The tile to put the points tino.
   * @param pointData The string containing the point data.
   * */
  private void readTilePolygonPointData(Tile tile, String pointData) {

    Polygon polygon = new Polygon();

    String[] points = pointData.split(" ");

    for (int i = 0; i < points.length; i++) {

      String[] values = points[i].split(",");

      double x = Double.parseDouble(values[0]);
      double y = Double.parseDouble(values[1]);

      polygon.add(new Vector(x, y));
    }

    tile.addPolygon(polygon);
  }
}

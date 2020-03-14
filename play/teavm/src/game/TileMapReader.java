package game;

import game.math.Vector;
import game.math.Matrix;

import game.xml.Element;
import game.xml.ElementList;

/** This class is used to load a tile map
 * from the tile map editors data file.
 * */
public class TileMapReader {

  /** The tile map instance to put the data into. */
  private TileMap tileMap;

  /** Constructs a new instance of a tile map reader.
   * @param tileMap The tile map to put the data into.
   * */
  public TileMapReader(TileMap tileMap) {
    this.tileMap = tileMap;
  }

  /** Reads the tile map data from an XML element.
   * @param root The root XML element to read the tile map from.
   * */
  public void readFromElement(Element root) {

    ElementList layerElements = root.getElementsByTag("layer");

    for (int i = 0; i < layerElements.getCount(); i++) {
      readLayer(layerElements.getElement(i));
    }
  }

  /** Reads a layer from the tile map.
   * @param layerElement The layer node to read.
   * */
  private void readLayer(Element layerElement) {

    IrregularTileLayer layer = new IrregularTileLayer();

    ElementList dataElementList = layerElement.getElementsByTag("data");

    for (int i = 0; i < dataElementList.getCount(); i++) {
      readLayerData(layer, dataElementList.getElement(i));
    }

    tileMap.addLayer(layer.combine());
  }

  /** Reads the data contained by a single layer data node.
   * @param tileLayer The layer instance to put the data into.
   * @param layerData The layer data node to get the data from.
   * */
  private void readLayerData(IrregularTileLayer tileLayer, Element layerData) {

    if (!layerData.getAttribute("encoding").equals("csv")) {
      throw new IllegalArgumentException("Unsupported layer encoding");
    }

    ElementList chunkElementList = layerData.getElementsByTag("chunk");

    for (int i = 0; i < chunkElementList.getCount(); i++) {
      readChunk(tileLayer, chunkElementList.getElement(i));
    }
  }

  /** Reads a chunk of tiles for a tile layer.
   * @param tileLayer The tile layer that the chunk is for.
   * @param chunkElement The element containing the chunk data.
   * */
  private void readChunk(IrregularTileLayer tileLayer, Element chunkElement) {

    String xStr = chunkElement.getAttribute("x");
    String yStr = chunkElement.getAttribute("y");
    String wStr = chunkElement.getAttribute("width");
    String hStr = chunkElement.getAttribute("height");

    int x = Integer.parseInt(xStr);
    int y = Integer.parseInt(yStr);
    int w = Integer.parseInt(wStr);
    int h = Integer.parseInt(hStr);

    Vector position = new Vector(x, y);

    Matrix tiles = new Matrix(w, h);

    readChunkValues(tiles, chunkElement.getInnerText());

    tileLayer.addChunk(position, tiles);
  }

  /** Reads the chunk values from a string.
   * @param tiles The tile matrix to put the values into.
   * @param valuesString The string containing the matrix values.
   * */
  private void readChunkValues(Matrix tiles, String valuesString) {

    String[] valueStrings = valuesString.split(",");

    /* Remove newline characters */
    for (int i = 0; i < valueStrings.length; i++) {
      valueStrings[i] = valueStrings[i].trim();
    }

    for (int y = 0; y < tiles.getHeight(); y++) {
      for (int x = 0; x < tiles.getWidth(); x++) {
        int i = (y * tiles.getWidth()) + x;
        if (i < valueStrings.length) {
          tiles.setValue(x, y, Long.parseLong(valueStrings[i]));
        }
      }
    }
  }
}

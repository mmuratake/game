import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.xml.sax.SAXException;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import java.io.File;
import java.io.IOException;

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

  /** Reads the tile map data from a file.
   * @param file The file to read the data from.
   * */
  public void readFromFile(File file) throws ParserConfigurationException, SAXException, IOException {

    DocumentBuilderFactory docBuilderFactory = DocumentBuilderFactory.newInstance();

    DocumentBuilder docBuilder = docBuilderFactory.newDocumentBuilder();

    Document doc = docBuilder.parse(file);

    readFromDocument(doc);
  }

  /** Reads the tile map data from the DOM.
   * @param doc The DOM instance to read the data from.
   * */
  private void readFromDocument(Document doc) throws IOException {

    Element root = doc.getDocumentElement();

    NodeList layerNodes = root.getElementsByTagName("layer");

    for (int i = 0; i < layerNodes.getLength(); i++) {
      Node layerNode = layerNodes.item(i);
      if (layerNode.getNodeType() != Node.ELEMENT_NODE) {
        continue;
      } else {
        readLayer((Element) layerNode);
      }
    }
  }

  /** Reads a layer from the tile map.
   * @param layerElement The layer node to read.
   * */
  private void readLayer(Element layerElement) {

    IrregularTileLayer layer = new IrregularTileLayer();

    NodeList dataNodeList = layerElement.getElementsByTagName("data");

    for (int i = 0; i < dataNodeList.getLength(); i++) {
      Node dataNode = dataNodeList.item(i);
      if (dataNode.getNodeType() != Node.ELEMENT_NODE) {
        continue;
      } else {
        readLayerData(layer, (Element) dataNode);
      }
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

    NodeList chunkNodeList = layerData.getElementsByTagName("chunk");

    for (int i = 0; i < chunkNodeList.getLength(); i++) {
      Node chunkNode = chunkNodeList.item(i);
      if (chunkNode.getNodeType() != Node.ELEMENT_NODE) {
        continue;
      } else {
        readChunk(tileLayer, (Element) chunkNode);
      }
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

    readChunkValues(tiles, chunkElement.getTextContent());

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

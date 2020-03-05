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

  /** Opens a file containing a tile set.
   * This function will throw an exception
   * if there is an error in reading the file.
   * @param path The path of the tile to open.
   * */
  public void readFromFile(String path) throws ParserConfigurationException, SAXException, IOException {

    DocumentBuilderFactory docBuilderFactory = DocumentBuilderFactory.newInstance();

    DocumentBuilder docBuilder = docBuilderFactory.newDocumentBuilder();

    Document doc = docBuilder.parse(new File(path));

    readFromDocument(doc);
  }

  /** Reads the tile set data from an open document.
   * @param doc The document to get the tile set data from.
   * */
  public void readFromDocument(Document doc) {

    Element root = doc.getDocumentElement();

    NodeList tileNodes = root.getElementsByTagName("tile");

    for (int i = 0; i < tileNodes.getLength(); i++) {
      Node tileNode = tileNodes.item(i);
      if (tileNode.getNodeType() == Node.ELEMENT_NODE) {
        readTileElement((Element) tileNode);
      }
    }
  }

  /** Reads tile data from a tile element.
   * @param tileElement The element from the XML file containing the tile data.
   * */
  private void readTileElement(Element tileElement) {

    Element imageElement = (Element) tileElement.getElementsByTagName("image").item(0);

    String id = tileElement.getAttribute("id");

    String imagePath = imageElement.getAttribute("source");

    System.out.println("tile id: " + id + " image: " + imagePath);

    tileSet.add(new Tile(Integer.parseInt(id)));
  }
}

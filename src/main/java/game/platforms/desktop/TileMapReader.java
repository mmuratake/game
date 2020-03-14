package game.platforms.desktop;

import game.TileMap;

import game.xml.Element;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.xml.sax.SAXException;

import org.w3c.dom.Document;

import java.io.IOException;
import java.io.InputStream;

/** This class is used to load a tile map
 * from the tile map editors data file.
 * */
public class TileMapReader extends game.TileMapReader {

  /** Constructs a new instance of a tile map reader.
   * @param tileMap The tile map to put the data into.
   * */
  public TileMapReader(TileMap tileMap) {
    super(tileMap);
  }

  /** Reads the tile map data from a file.
   * @param inputStream The input stream to read the map data from.
   * */
  public void readFromStream(InputStream inputStream) throws ParserConfigurationException, SAXException, IOException {

    DocumentBuilderFactory docBuilderFactory = DocumentBuilderFactory.newInstance();

    DocumentBuilder docBuilder = docBuilderFactory.newDocumentBuilder();

    Document doc = docBuilder.parse(inputStream);

    super.readFromElement(new XmlElement(doc.getDocumentElement()));
  }
}

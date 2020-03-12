package game.platforms.desktop;

import game.TileSet;

import java.io.IOException;
import java.io.InputStream;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.w3c.dom.Document;
import org.w3c.dom.Element;

import org.xml.sax.SAXException;

/** An extension of the base tile set reader
 * that handles reading the XML document from an input stream.
 * */
class TileSetReader extends game.TileSetReader {

  /** Constructs a tile set reader.
   * @param tileSet The tile set instance
   * to put the data into. */
  TileSetReader(TileSet tileSet) {
    super(tileSet);
  }

  /** Reads a tile set from an input stream.
   * @param inputStream The input stream to read the data from. */
  public void readFromStream(InputStream inputStream) throws ParserConfigurationException, SAXException, IOException {

    DocumentBuilderFactory docBuilderFactory = DocumentBuilderFactory.newInstance();

    DocumentBuilder docBuilder = docBuilderFactory.newDocumentBuilder();

    Document doc = docBuilder.parse(inputStream);

    XmlElement root = new XmlElement(doc.getDocumentElement());

    readFromElement(root);
  }
}

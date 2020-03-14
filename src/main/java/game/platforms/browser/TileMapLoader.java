package game.platforms.browser;

import game.TileMap;
import game.TileMapReader;

import org.teavm.jso.dom.xml.Document;

import org.teavm.jso.ajax.XMLHttpRequest;
import org.teavm.jso.ajax.ReadyStateChangeHandler;

/** This class is for loading tile maps into the game.
 * It requests the browser to download the tile maps
 * so that the game instance can use them.
 * @see TileMap
 * */
public class TileMapLoader implements ReadyStateChangeHandler {

  /** The tile map instance to put the data into. */
  private TileMap tileMap;

  /** The AJAX request that was made for the tile map. */
  private XMLHttpRequest request;

  /** The observer of the tile map download. */
  private DownloadObserver observer;

  /** Constructs a new tile map loader.
   * @param tileMap The tile map to put the data into.
   * */
  public TileMapLoader(TileMap tileMap, DownloadObserver observer) {
    this.tileMap = tileMap;
    this.observer = observer;
  }

  /** Loads the tile map from a URL.
   * @param url The URL to load the tile map from.
   * */
  public void load(String url) {
    request = XMLHttpRequest.create();
    request.overrideMimeType("text/xml");
    request.setOnReadyStateChange(this);
    request.open("GET", url, true);
    request.send();
  }

  /** Called when the state of an AJAX request changes.
   * This might be called due to an error or to a successful load.
   * */
  @Override
  public void stateChanged() {
    if (request.getReadyState() == XMLHttpRequest.DONE) {
      onComplete();
    }
  }

  /** This is called when the loading operation is complete.
   * If the document loaded successfully, then the XML document is unmarshalled.
   * */
  private void onComplete() {

    if (request.getStatus() != 200) {
      this.observer.failed(DownloadObserver.Item.TILE_MAP, request.getStatusText());
      return;
    }

    Document doc = request.getResponseXML();
    if (doc == null) {
      this.observer.failed(DownloadObserver.Item.TILE_MAP, "Failed to get XML response");
    } else {
      readFromDocument(doc);
    }
  }

  /** Reads the tile map from an XML document.
   * @param doc The XML document to read from.
   * */
  private void readFromDocument(Document doc) {

    TileMapReader tileMapReader = new TileMapReader(tileMap);

    tileMapReader.readFromElement(new XmlElement(doc.getDocumentElement()));

    this.observer.loaded(DownloadObserver.Item.TILE_MAP);
  }
}

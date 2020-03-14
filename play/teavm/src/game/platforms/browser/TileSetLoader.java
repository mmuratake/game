package game.platforms.browser;

import game.TileSet;

import org.teavm.jso.dom.xml.Document;

import org.teavm.jso.ajax.XMLHttpRequest;
import org.teavm.jso.ajax.ReadyStateChangeHandler;

/** This class is used for loading the tile set using an AJAX request.
 * This class was created because TeaVM doesn't support reading resources.
 * @see game.TileSet
 * */
public class TileSetLoader implements ReadyStateChangeHandler {

  /** The tile set instance to put the data into. */
  private TileSet tileSet;

  /** The AJAX request that was made for the tile set. */
  private XMLHttpRequest request;

  /** The download observer to notify on success. */
  private DownloadObserver observer;

  /** Constructs a new tile set loader.
   * @param tileSet The tile set to put the data into.
   * */
  public TileSetLoader(TileSet tileSet, DownloadObserver observer) {
    this.tileSet = tileSet;
    this.observer = observer;
  }

  /** Loads the tile set from a URL.
   * @param url The URL to load the tile set from.
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
      observer.failed(DownloadObserver.Item.TILE_SET, request.getStatusText());
      return;
    }

    Document doc = request.getResponseXML();
    if (doc == null) {
      observer.failed(DownloadObserver.Item.TILE_SET, "Failed to get resposne XML");
    } else {
      readFromDocument(doc);
    }
  }

  /** Reads the tile set from an XML document.
   * @param doc The XML document to read from.
   * */
  private void readFromDocument(Document doc) {

    game.TileSetReader tileSetReader = new game.TileSetReader(tileSet);

    tileSetReader.readFromElement(new XmlElement(doc.getDocumentElement()));

    observer.loaded(DownloadObserver.Item.TILE_SET);
  }
}

package game.platforms.browser;

import java.util.ArrayList;
import java.util.Map;
import java.util.TreeMap;

import org.teavm.jso.dom.html.HTMLDocument;
import org.teavm.jso.dom.html.HTMLImageElement;

import org.teavm.jso.dom.events.Event;
import org.teavm.jso.dom.events.EventListener;

/** Used for loading tile set images. */
public class TileImageLoader implements EventListener {

  /** Used for listening for the tile image to be loaded. */
  public interface Observer {
    /** Called when all images are loaded. */
    public void tileImagesLoaded(TreeMap<Integer, HTMLImageElement> elements);
  }

  /** The image element being loaded. */
  private TreeMap<Integer, HTMLImageElement> elements;

  /** The number of images currently loaded. */
  private int loadedCount;

  /** The number of images required to notify the observer. */
  private int required;

  /** The observer to notify when all the images have been loaded. */
  private Observer observer;

  /** Constructs a new tile image loader.
   * @param urlList The list of image URLs to load.
   * @param observer The observer to notify when all images have been loaded.
   * */
  public TileImageLoader(TreeMap<Integer, String> urlList, Observer observer) {

    HTMLDocument document = HTMLDocument.current();

    this.observer = observer;

    this.loadedCount = 0;
    this.required = urlList.size();

    this.elements = new TreeMap<Integer, HTMLImageElement>();

    for (Map.Entry<Integer, String> url : urlList.entrySet()) {

      HTMLImageElement element = (HTMLImageElement) document.createElement("img");
      element.listenLoad(this);
      element.setSrc(url.getValue());

      this.elements.put(url.getKey(), element);
    }
  }

  /** Handles a load event.
   * If this is the last load event, the observer
   * is notified in this function.
   * @param event The load event to handle.
   * */
  @Override
  public void handleEvent(Event event) {

    loadedCount++;

    if (loadedCount == required) {
      observer.tileImagesLoaded(elements);
    }
  }
}

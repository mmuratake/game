package game.platforms.browser;

import org.teavm.jso.JSObject;

/** The interface for the XML reader.
 * */
public interface DOMParser extends JSObject {

  /** Parses a document from a string.
   * @param str The string containing the document to parse.
   * @return The object instance of the parsed document.
   * This will most likely require a cast.
   * */
  JSObject parseFromString(String str);
}

package game.platforms.browser;

import game.xml.ElementList;

import org.teavm.jso.dom.xml.Element;

/** This is an implementation of the XML element interface
 * so that XML documents can be unmarshalled into tile set
 * and tile map data.
 * */
public class XmlElement implements game.xml.Element {

  /** The TeaVM instance of the element. */
  private Element element;

  /** Constructs a new element instance.
   * @param element The element to assign the interface.
   * */
  public XmlElement(Element element) {
    this.element = element;
  }

  /** Accesses all child elements of a certain tag name.
   * @param name The name of the tag to search for.
   * @return All child elements with the specified tag name.
   * */
  @Override
  public ElementList getElementsByTag(String name) {

    ElementList elements = new ElementList();

    return elements;
  }

  /** Gets an attribute of the element.
   * @param name The name of the attribute to get the value of.
   * @return The attribute of the specified element.
   * */
  @Override
  public String getAttribute(String name) {
    return element.getAttribute(name);
  }

  @Override
  public String getInnerText() {
    return element.getNodeValue();
  }
}

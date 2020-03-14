package game.platforms.browser;

import game.xml.ElementList;

import org.teavm.jso.dom.xml.Element;
import org.teavm.jso.dom.xml.Node;
import org.teavm.jso.dom.xml.NodeList;

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

    NodeList nodes = element.getElementsByTagName(name);

    for (int i = 0; i < nodes.getLength(); i++) {
      elements.add(new XmlElement((Element) nodes.item(i)));
    }

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

  /** Gets the text inside of the XML node.
   * @return The text inside of the element.
   * */
  @Override
  public String getInnerText() {

    String innerText = "";

    NodeList childNodes = element.getChildNodes();

    for (int i = 0; i < childNodes.getLength(); i++) {
      Node node = childNodes.item(i);
      if (node.getNodeType() == Node.TEXT_NODE) {
        innerText += node.getNodeValue();
      }
    }

    return innerText;
  }
}

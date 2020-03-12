package game.platforms.awt;

import game.xml.Element;
import game.xml.ElementList;

import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

/** An implementation of an XML element.
 * */
public class XmlElement implements game.xml.Element {

  /** The actual element implementation. */
  private org.w3c.dom.Element elementImpl;

  /** Constructs a new XML element. */
  public XmlElement(org.w3c.dom.Element e) {
    this.elementImpl = e;
  }

  /** Gets child elements of a specific tag name.
   * @param name The name of the tag to search for.
   * @return The elements that were found.
   * */
  @Override
  public ElementList getElementsByTag(String name) {

    ElementList list = new ElementList();

    NodeList nodeList = elementImpl.getElementsByTagName(name);

    for (int i = 0; i < nodeList.getLength(); i++) {
      Node node = nodeList.item(i);
      if (node.getNodeType() == Node.ELEMENT_NODE) {
        list.add(new XmlElement((org.w3c.dom.Element) node));
      }
    }

    return list;
  }

  /** Gets the inner text of the element.
   * @return The text contained by the element.
   * */
  @Override
  public String getInnerText() {
    return elementImpl.getTextContent();
  }

  /** Gets an attribute value from the element.
   * @param name The name of the attribute to get the value of.
   * @return The value of the specified element.
   * If the attribute doesn't exist, then an empty string is returned.
   * */
  @Override
  public String getAttribute(String name) {
    return elementImpl.getAttribute(name);
  }
}

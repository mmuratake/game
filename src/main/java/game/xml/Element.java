package game.xml;

/** This is an interface for an XML element.
 * Since XML elements from TeaVM and Java SE are slightly different,
 * this class provides a common interface for both of them.
 * */
public interface Element {

  /** Gets an attribute from the node.
   * @param name The name of the attribute to get the value of.
   * @return The value of the specified attribute.
   * If the attribute does not exist, then an empty string is returned instead.
   * */
  String getAttribute(String name);

  /** Gets a list of child elements of a specified tag name.
   * @param name The name of the tag.
   * @return The list of elements containing the specified tag.
   * */
  ElementList getElementsByTag(String name);

  /** Gets the text inside of the element.
   * @return The text inside of the element.
   * */
  String getInnerText();
}

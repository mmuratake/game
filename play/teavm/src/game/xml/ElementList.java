package game.xml;

import java.util.ArrayList;

/** A list of XML elements.
 * @see Element
 * */
public class ElementList {

  /** The list of elements contained by this list. */
  private ArrayList<Element> elements;

  /** Constructs a new element list. */
  public ElementList() {
    this.elements = new ArrayList<Element>();
  }

  /** Adds an element to the element list.
   * @param element The element to add. */
  public void add(Element element) {
    this.elements.add(element);
  }

  /** Accesses an element at a specific index.
   * @param index The index of the element to get.
   * @return The specified element.
   * This may be null of the index is out of bounds. */
  public Element getElement(int index) {
    return this.elements.get(index);
  }

  /** Gets the number of elements in the list.
   * @return The number of elements in the list. */
  public int getCount() {
    return this.elements.size();
  }
}

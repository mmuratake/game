package game;

import java.util.ArrayList;

/** Contains static information regarding an object.
 * This class is used when constructing new object instances.
 * */
public class ObjectTemplate {
  /** The actions that the object can perform. */
  private ArrayList<ObjectAction> actions;
  /** Constructs a new object instance. */
  public ObjectTemplate() {
    actions = new ArrayList<ObjectAction>();
  }
}

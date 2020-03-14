package game;

import java.util.ArrayList;

/** This class contains all the commands issued to render a scene.
 * Rendering commands are added to a queue so that the method in which
 * they are implemented can be done in a platform-specific way.
 * */
public class RenderCommandQueue {

  /** Contains all the commands added to the queue.
   * */
  private ArrayList<RenderCommand> commands;

  /** Constructs a new instance of the render command queue.
   * */
  public RenderCommandQueue() {
    commands = new ArrayList<RenderCommand>();
  }

  /** Adds a rendering command to the command queue.
   * @param command The command to add to the render queue.
   * */
  public void add(RenderCommand command) {
    commands.add(command);
  }

  /** Removes all items from the command queue. */
  public void clear() {
    commands.clear();
  }

  /** Visits all commands in the command queue.
   * @param visitor The visitor to pass to each command.
   * */
  public void visitAll(RenderCommandVisitor visitor) {
    for (RenderCommand cmd : commands) {
      cmd.accept(visitor);
    }
  }
}

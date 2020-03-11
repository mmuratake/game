package game;

/** A render command is the base of any rendering
 * instruction that can be sent to the rendering pipeline.
 * The derived classes describe what the command would do.
 * */
public interface RenderCommand {
  public void accept(RenderCommandVisitor visitor);
}

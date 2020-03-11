package game;

public interface RenderCommandVisitor {
  public void visit(DrawTileCommand drawTileCommand);
  public void visit(FillRectCommand fillRectCommand);
}

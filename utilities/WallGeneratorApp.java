/** This is the top level class for the wall generator.
 * All this does is create the window and the wall generator.
 * @see WallGeneratorView WallGeneratorView
 * @see WallGenerator
 * */
public class WallGeneratorApp {
  public static void main(String[] args) {
    new WallGeneratorView(new WallGenerator());
  }
}

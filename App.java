/** This is the top level class for the project.
 * For right now, since there's only one tile generator,
 * it just goes straight into the wall generator window.
 * @see WallGeneratorView WallGeneratorView
 * */
public class App {
  public static void main(String[] args) {
    new WallGeneratorView(new WallGenerator());
  }
}

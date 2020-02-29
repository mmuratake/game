import java.awt.Frame;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

/** This class is used for allowing a user to select three images
 * and generate wall tiles from them. It can also modify camera perspectives
 * to achieve different looking angles from the wall tiles. The app is
 * divided into two sides. The left side is responsible for choosing
 * the images and modifying settings, and the right is for previewing the result.
 * */
public class WallGeneratorView extends java.awt.Frame {
  /** This is the default window width
   * that is assumed when the program starts up.
   * */
  final int startupWidth = 640;
  /** This is the default window height
   * that is assumed when the program starts up. */
  final int startupHeight = 480;

  /** Constructs a new instance of the wall generator program.
   * */
  public WallGeneratorView() {

    add(new WallGeneratorSettings());
    add(new WallGeneratorPreviewGrid());

    /* This is required for the window to
     * get closed. Normally, a window event
     * listener is used for detecting when something
     * happens to a window (such as getting closed,
     * resized, or getting minimized.)
     * */
    addWindowListener(new WindowAdapter() {
      public void windowClosing(WindowEvent e) {
        dispose();
      }
    });

    setLayout(new java.awt.GridLayout(1, 2));

    setSize(startupWidth, startupHeight);

    setVisible(true);
  }
}

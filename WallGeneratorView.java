import java.awt.FileDialog;
import java.awt.Frame;
import java.awt.GridLayout;

import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

import java.awt.image.BufferedImage;

import java.io.IOException;
import java.io.File;

import javax.imageio.ImageIO;

/** This class is used for allowing a user to select three images
 * and generate wall tiles from them. It can also modify camera perspectives
 * to achieve different looking angles from the wall tiles. The app is
 * divided into two sides. The left side is responsible for choosing
 * the images and modifying settings, and the right is for previewing the result.
 * */
public class WallGeneratorView extends java.awt.Frame implements WallGeneratorSettingsObserver {

  /** This is the default window width
   * that is assumed when the program starts up.
   * */
  final int startupWidth = 640;

  /** This is the default window height
   * that is assumed when the program starts up. */
  final int startupHeight = 480;

  /** This is the class that does the actual
   * tile rendering from the base textures.
   * */
  private WallGenerator wallGenerator;

  /** The settings for the wall generator.
   * This is retained as a field so that this
   * class can modify the path fields of the settings.
   * */
  private WallGeneratorSettings settings;

  /** Contains the previews for the generated tiles.
   * It is called to update the previews every time
   * a user opens a new texture.
   * */
  private WallGeneratorPreviewGrid previewGrid;

  /** Constructs a new instance of the wall generator program.
   * @param generator The wall generator instance to
   * perform the tile generation from the base images.
   * */
  public WallGeneratorView(WallGenerator generator) {

    this.wallGenerator = generator;

    settings = new WallGeneratorSettings(this);

    previewGrid = new WallGeneratorPreviewGrid();

    add(settings);
    add(previewGrid);

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

    GridLayout layout = new GridLayout(1, 2);

    setLayout(layout);

    setSize(startupWidth, startupHeight);

    setTitle("Wall Tile Generator");

    setVisible(true);
  }

  /** This function is called whenever the
   * "Browse" button is clicked from the settings window.
   * @param textureID The ID of the texture that is getting browsed for.
   * */
  @Override
  public void browseButtonClicked(WallGeneratorSettings.TextureID textureID) {

    String title = getSuitableBrowseTitle(textureID);

    FileDialog fileDialog = new FileDialog(this, getSuitableBrowseTitle(textureID), FileDialog.LOAD);
    fileDialog.setVisible(true);

    if (fileDialog.getFile() == null) {
      /* Cancelled file dialog */
      return;
    }

    String texturePath = fileDialog.getDirectory() + fileDialog.getFile();

    openTexture(textureID, texturePath);
  }

  /** Opens a texture chosen from a file dialog.
   * @param textureID The ID of the texture being opened.
   * @param texturePath The path of the texture being opened.
   * */
  private void openTexture(WallGeneratorSettings.TextureID textureID, String texturePath) {

    BufferedImage image = null;

    try {
      image = ImageIO.read(new File(texturePath));
    } catch (IOException exception) {
      settings.setTexturePath(textureID, "(failed to open)");
      return;
    }

    if (image == null) {
      settings.setTexturePath(textureID, "(failed to open)");
      return;
    }

    settings.setTexturePath(textureID, texturePath);

    switch (textureID) {
      case CEILING:
        wallGenerator.setCeiling(image);
        break;
      case FLOOR:
        wallGenerator.setFloor(image);
        break;
      case WALL:
        wallGenerator.setWall(image);
        break;
    }

    refreshGeneratedTiles();
  }

  /** This function calls the wall generator to
   * regenerate the tiles and puts the newly generated
   * tiles up for preview.
   * */
  private void refreshGeneratedTiles() {
    for (WallGenerator.TileID tileID : WallGenerator.TileID.values()) {
      refreshTileSet(tileID);
    }
  }

  /** Refreshes the images for a certain tile type.
   * This function goes through all the rotations of one tile type.
   * @param tileID The ID of the tile type to generate the images for.
   * */
  private void refreshTileSet(WallGenerator.TileID tileID) {

    for (int angle = 0; angle < 360; angle += 90) {

      BufferedImage image = wallGenerator.generate(tileID, angle);

      previewGrid.update(tileID, angle, image);
    }
  }

  /** Gets a title suitable for a file dialog of a certain texture.
   * @param textureID The texture ID to get the browse title for.
   * @return A window title suitable for a certain texture.
   * */
  private static String getSuitableBrowseTitle(WallGeneratorSettings.TextureID textureID) {
    switch (textureID) {
      case FLOOR:
        return "Open a Floor Texture";
      case WALL:
        return "Open a Wall Texture";
      case CEILING:
        return "Open a Ceiling Texture";
    }
    // This shouldn't be reachable,
    // but it's here just in case.
    return "Open a Texture";
  }
}

import java.awt.Button;
import java.awt.Component;
import java.awt.Container;
import java.awt.FileDialog;
import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;
import java.awt.Label;
import java.awt.TextField;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/** This class is used for responding to a user
 * click of the "Browse" button. It responds by
 * passing control to the settings observer inteface.
 * */
class BrowseButtonListener implements ActionListener {

  /** This identifies the texture
   * that is getting browsed for.
   * */
  private WallGeneratorSettings.TextureID textureID;
  /** The settings observer to pass control to.
   * This is an interface but ends up being the main
   * window of the application.
   * */
  private WallGeneratorSettingsObserver observer;

  /** Constructs a new instance of a browse button listener.
   * @param fileType The file type that this browse button is for.
   * @param observer The observer to pass control to when
   * the button gets clicked.
   * */
  BrowseButtonListener(WallGeneratorSettings.TextureID textureID,
                       WallGeneratorSettingsObserver observer) {

    this.textureID = textureID;
    this.observer = observer;
  }

  /** This function gets called when the "Browse" button gets clicked.
   * All it does is relay control to the settings observer.
   * */
  @Override
  public void actionPerformed(ActionEvent event) {
    observer.browseButtonClicked(textureID);
  }
};

/** This class is used for allowing the user
 * to view and modify the various settings of the wall generator.
 * */
public class WallGeneratorSettings extends Container {

  /** This enumerates the several
   * textures that appear in the
   * wall generator settings.
   * */
  enum TextureID {
    /** The texture that gets
     * applied to the floor. */
    FLOOR,
    /** The texture that gets
     * applied to the wall. */
    WALL,
    /** The texture that gets
     * applied to the ceiling. */
    CEILING
  };

  /** This is an interface of the observer interface
   * that gets passed the various events that happen
   * from the wall generator settings.
   * */
  private WallGeneratorSettingsObserver observer;

  /** This is the text field for the
   * path of the ceiling texture.
   * */
  private TextField ceilingPath;

  /** This is the text field for the
   * path of the floor texture.
   * */
  private TextField floorPath;

  /** This is the text field for the
   * path of the wall texture.
   * */
  private TextField wallPath;

  /** Organizes the buttons and input fields
   * to appear as a data entry form, where the
   * labels appear on the left and the input
   * elements appear on the right.
   * */
  private GridBagLayout layout;

  /** Constructs a new instance of the wall settings.
   * */
  public WallGeneratorSettings(WallGeneratorSettingsObserver observer) {

    this.observer = observer;

    layout = new GridBagLayout();

    setLayout(layout);

    ceilingPath = addTextureOption("Ceiling Texture", TextureID.CEILING);
    floorPath   = addTextureOption("Floor Texture",   TextureID.FLOOR);
    wallPath    = addTextureOption("Wall Texture",    TextureID.WALL);

    addButton("Generate Tiles");

    setVisible(true);
  }

  /** Sets the path of a certain texture.
   * This is only to show the user the path of the texture they selected.
   * @param textureID The ID of the texture to set the path for.
   * @param path The path to display for the specified texture.
   * */
  public void setTexturePath(TextureID textureID, String path) {
    switch (textureID) {
      case CEILING:
        ceilingPath.setText(path);
        break;
      case FLOOR:
        floorPath.setText(path);
        break;
      case WALL:
        wallPath.setText(path);
        break;
    }
  }

  /** This function adds a simple button to the settings container.
   * @param name The name to given the button.
   * */
  private void addButton(String name) {
    Button button = new Button(name);
    add(button);
  }

  /** This function is made for creating a texture
   * option for the settings window.
   * @param name The name to give the texture option.
   * This should a name that indicates what the texture
   * is going to be used for (example: "Background Image")
   * @param textureID The ID of the texture that is being
   * made. This is mostly for the settings observer so that
   * it knows how to handle the selected texture.
   * @return The text field for the texture option.
   * */
  private TextField addTextureOption(String name, TextureID textureID) {

    GridBagConstraints constraints = new GridBagConstraints();
    constraints.fill   = GridBagConstraints.HORIZONTAL;
    constraints.anchor = GridBagConstraints.NORTHWEST;

    GridBagConstraints lastConstraints = (GridBagConstraints) constraints.clone();
    lastConstraints.gridwidth = GridBagConstraints.REMAINDER;
    lastConstraints.weightx   = 1;

    Label label         = new Label(name);
    Button browseButton = new Button("Browse");
    TextField pathField = new TextField();

    browseButton.addActionListener(new BrowseButtonListener(textureID, observer));

    pathField.setEditable(false);

    layout.setConstraints(label, constraints);
    layout.setConstraints(browseButton, constraints);
    layout.setConstraints(pathField, lastConstraints);

    add(label);
    add(browseButton);
    add(pathField);

    return pathField;
  }
};

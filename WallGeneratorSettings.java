import java.awt.Button;
import java.awt.Component;
import java.awt.Container;
import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;
import java.awt.Label;
import java.awt.TextField;

/** This class is used for allowing the user
 * to view and modify the various settings of the wall generator.
 * */
public class WallGeneratorSettings extends java.awt.Container {

  /** Organizes the buttons and input fields
   * to appear as a data entry form, where the
   * labels appear on the left and the input
   * elements appear on the right.
   * */
  private GridBagLayout layout;

  /** Constructs a new instance of the wall settings.
   * */
  public WallGeneratorSettings() {

    layout = new GridBagLayout();

    setLayout(layout);

    addFileOption("Ceiling Image");
    addFileOption("Wall Image");
    addFileOption("Floor Image");

    setVisible(true);
  }
  /** This function is made for creating a file
   * option for the settings window.
   * @param name The name to give the file option.
   * This should a name that indicates what the tile
   * is going to be used for (example: "Background Image")
   * @return A component that may be added to the settings.
   * */
  private void addFileOption(String name) {

    GridBagConstraints constraints = new GridBagConstraints();
    constraints.fill   = GridBagConstraints.HORIZONTAL;
    constraints.anchor = GridBagConstraints.NORTHWEST;

    GridBagConstraints lastConstraints = (GridBagConstraints) constraints.clone();
    lastConstraints.gridwidth = GridBagConstraints.REMAINDER;
    lastConstraints.weightx   = 1;

    Label label         = new Label(name);
    Button browseButton = new Button("Browse");
    TextField pathField = new TextField();

    layout.setConstraints(label, constraints);
    layout.setConstraints(browseButton, constraints);
    layout.setConstraints(pathField, lastConstraints);

    add(label);
    add(browseButton);
    add(pathField);
  }
};

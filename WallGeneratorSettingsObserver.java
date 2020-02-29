/** This interface is for defining an object
 * that will receive updates from the wall generator
 * settings window. For example, when one of the "Browse"
 * buttons in the settings window is clicked, whichever
 * classes implement this interface are notified that
 * the browse button was clicked.
 * */
interface WallGeneratorSettingsObserver {
  /** This function is called whenever a browse button is clicked.
   * There are several browse buttons in the wall generator settings,
   * so this may be called for any one of them. It is up to the main
   * window to implement this interface and create the file dialog for
   * opening up a file from the browse button.
   * @param textureID The ID of the texture that the browse button was clicked for.
   * */
  void browseButtonClicked(WallGeneratorSettings.TextureID textureID);
}

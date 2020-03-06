import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintStream;

import java.awt.image.BufferedImage;

import java.util.ArrayList;
import java.util.Date;
import java.util.Random;

/** Used for writing a tile set to a file as Java code.
 * This is done so that tile data can be accesed without
 * much runtime complexity.
 * */
public class TileSetWriter {

  /** The stream to be used to write the code to. */
  private PrintStream outputStream;

  /** Constructs a new instance of a tile set writer.
   * @param path The path to the open to write the data to.
   * */
  public TileSetWriter(String path) throws FileNotFoundException {
    outputStream = new PrintStream(new File(path));
  }

  /** Writes a tile set to file.
   * @param tileSet The tile set to generate code for.
   * */
  public void write(TileSet tileSet) {

    outputStream.println("/* This is a generated file.");
    outputStream.println(" * All changes made to this file will probably be lost.");
    outputStream.println(" *");
    outputStream.println(" * Generated on " + new Date());
    outputStream.println(" *");
    outputStream.println(" * Source code nutrition facts:");
    ArrayList<String> recipe = generateRandomRecipe();
    for (String ingredient : recipe) {
      outputStream.println(" *  - \"" + ingredient + "\"");
    }
    outputStream.println(" */");

    outputStream.println();

    outputStream.println("/** This class is a generated set of tiles");
    outputStream.println(" * derived from an external file. It contains");
    outputStream.println(" * the data required to display the tile visuals.");
    outputStream.println(" */");
    outputStream.println("final class GeneratedTileSet {");

    outputStream.println("  private static final int[] idArray = {");
    for (int i = 0; i < tileSet.getTileCount(); i++) {
      if ((i + 1) >= tileSet.getTileCount()) {
        outputStream.println("    " + tileSet.getTile(i).getID());
      } else {
        outputStream.println("    " + tileSet.getTile(i).getID() + ",");
      }
    }
    outputStream.println("  };");

    outputStream.println("  private static final int[] widthArray = {");
    for (int i = 0; i < tileSet.getTileCount(); i++) {
      if ((i + 1) >= tileSet.getTileCount()) {
        outputStream.println("    " + tileSet.getTile(i).getImage().getWidth());
      } else {
        outputStream.println("    " + tileSet.getTile(i).getImage().getWidth() + ",");
      }
    }
    outputStream.println("  };");

    outputStream.println("  private static final int[] heightArray = {");
    for (int i = 0; i < tileSet.getTileCount(); i++) {
      if ((i + 1) >= tileSet.getTileCount()) {
        outputStream.println("    " + tileSet.getTile(i).getImage().getHeight());
      } else {
        outputStream.println("    " + tileSet.getTile(i).getImage().getHeight() + ",");
      }
    }
    outputStream.println("  };");

    for (int i = 0; i < tileSet.getTileCount(); i++) {
      writeImageData(tileSet.getTile(i), i);
    }

    outputStream.println("}");
  }

  /** Writes the image data from a tile.
   * @param tile The tile containing the image data.
   * @param tileIndex The index of the tile within the tile set.
   * */
  private void writeImageData(Tile tile, int tileIndex) {

    BufferedImage image = tile.getImage();

    outputStream.print("  int[] pixels_" + tileIndex + " = {");
    for (int y = 0; y < image.getHeight(); y++) {
      for (int x = 0; x < image.getWidth(); x++) {
        outputStream.println("    " + image.getRGB(x, y) + ",");
      }
    }
    outputStream.println("  };");
  }

  /** Generates a random source code generation recipe, for humor.
   * @return A list of random items used to "cook" the source code.
   * */
  private ArrayList<String> generateRandomRecipe() {

    ArrayList<String> recipe = new ArrayList<String>();

    Random rand = new Random();

    for (int i = 0; i < 3; i++) {
      recipe.add(generateRandomIngredient(rand));
    }

    return recipe;
  }

  /** Generates a random source code ingredient.
   * @param rand The random value generator.
   * @return A string containing a random ingredient.
   * */
  private String generateRandomIngredient(Random rand) {

    /* Feel free to add to this list,
     * but keep it alphabetized. */
    String[] ingredients = new String[] {
      "Chocolate",
      "Coffee",
      "H2O",
      "Hapiness",
      "Literally Pure Caffeine",
      "Phil Collin's Best Hits",
      "Magic",
      "Mexican Food",
      "Red Wine",
      "The Smell of Aged Books",
      "Yoda in Spirit Form"
    };

    return ingredients[rand.nextInt(ingredients.length)];
  }
}

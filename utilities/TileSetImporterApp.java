import java.util.Scanner;

import java.io.FileNotFoundException;

/** This program is for taking a tile set made
 * with Tiled and generating Java code containing
 * the tile set data. It is a simple command line
 * app. It asks the user to enter in the file path
 * of the tile set and then the path to generate
 * the code at.
 * @see TileSet
 * @see TileSetReader
 * */
public class TileSetImporterApp {

  /** The entry point of the program.
   * Prompts the user for two paths,
   * a tile set input path and a source
   * file output path.
   * */
  public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);

    System.out.print("Enter path to .tsx file (tile set file): ");

    String tileSetPath = scanner.next();

    String sourcePath = "GeneratedTileSet.java";

    processTileSet(tileSetPath, sourcePath);
  }

  /** Here we run the rest of the program
   * after we've gotten the tile set path and
   * the Java source file path.
   * @param tileSetPath The path of the tile set file to read.
   * @param sourcePath The path of the Java file to generate.
   * @return True on success, false on failure.
   * */
  private static boolean processTileSet(String tileSetPath, String sourcePath) {

    TileSet tileSet = new TileSet();

    TileSetReader tileSetReader = new TileSetReader(tileSet);

    try {

      tileSetReader.readFromFile(tileSetPath);

      TileSetWriter writer = new TileSetWriter(sourcePath);

      writer.write(tileSet);

    } catch (FileNotFoundException e) {
      System.err.println(e);
    } catch (Exception e) {
      e.printStackTrace();
    }

    return true;
  }
}

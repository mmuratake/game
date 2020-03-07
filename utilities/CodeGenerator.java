import java.io.PrintStream;

/** This class is used for generating Java code.
 * It can be used to resource-compile files, structing
 * them in a more organized fashion than just as a flat-binary file.
 * */
public class CodeGenerator {

  /** The stream to write the code to. */
  private PrintStream stream;

  /** The current level of indentation. */
  private int indent;

  /** Constructs a new code generator instance.
   * @param stream The stream to print the code with.
   * */
  public CodeGenerator(PrintStream stream) {
    this.stream = stream;
    this.indent = 0;
  }

  /** Generates a multi-line comment.
   * @param content The content to put into the comment.
   * This may be multiple lines but must not use the carriage
   * return character '\r'.
   * */
  void generateComment(String content) {

    String[] lines = content.split("\n");

    if (lines.length > 0) {

      printIndentedLine("/* " + lines[0]);

      for (int i = 1; i < lines.length; i++) {
        printIndentedLine(" * " + lines[i]);
      }

      printIndentedLine(" */");
    }
  }

  /** Generates a public class.
   * @param name The name to give the class.
   * @param scopedCodeGenerator The code generator
   * used to create the code inside the class.
   * This ideally would be a lambda expression.
   * */
  void generatePublicClass(String name, ScopedCodeGenerator scopedCodeGenerator) {
    printIndentedLine("public class " + name + " {");
    indent++;
    scopedCodeGenerator.generate(this);
    indent--;
    printIndentedLine("}");
  }

  /** Generates a private class.
   * @param name The name of the class.
   * @param scopedCodeGenerator Used to generate the code inside the class.
   * This ideally would be a lambda expression.
   * */
  void generatePrivateClass(String name, ScopedCodeGenerator scopedCodeGenerator) {
    printIndentedLine("private class " + name + " {");
    indent++;
    scopedCodeGenerator.generate(this);
    indent--;
    printIndentedLine("}");
  }

  /** Prints an indented line.
   * The current level of indentation is used
   * to determine the number of spaces to add.
   * @param str The string to print on the line.
   * */
  private void printIndentedLine(String str) {

    for (int i = 0; i < indent; i++) {
      stream.print("  ");
    }

    stream.println(str);
  }
}

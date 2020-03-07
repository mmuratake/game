/** This is used with a code generator
 * class in order to generate code inside of a scope.
 * The scope may be a class scope, array scope, function
 * scope, or whatever else is provided by the code generator class.
 * It's ideal to be used as a lambda expression.
 * @see CodeGenerator
 * */
interface ScopedCodeGenerator {
  /** This function is called to generate the code inside the class.
   * @param generator The generator that does the actual code printing.
   * */
  void generate(CodeGenerator generator);
}

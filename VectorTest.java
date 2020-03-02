/** This is a program used to test
 * the correctness of the vector class.
 * @see Vector
 * */
public class VectorTest {
  public static void main(String[] args) {

    Vector[] vecList = {
      new Vector(3,1),
      new Vector(2,-1),
      new Vector(1,-2),
      new Vector(-1,-5),
      new Vector(-3,-1),
      new Vector(-7,2),
      new Vector(-2,9),
      new Vector(1,2)
    };

    int counter = 1;

    for (Vector n : vecList) {
      System.out.println("----------------Vector " + (counter++) + "------------------");
      System.out.println("Vector coords : (" + n.getX() + ", " + n.getY() + ")");
      System.out.println("Mostly up     : " + n.isMostlyUp());
      System.out.println("Mostly down   : " + n.isMostlyDown());
      System.out.println("Mostly right  : " + n.isMostlyRight());
      System.out.println("Mostly left   : " + n.isMostlyLeft());
    }
  }
}

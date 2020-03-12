import game.math.Vector;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

/** This is a program used to test
 * the correctness of the vector class.
 * @see Vector
 * */
public class VectorTest {

  /** These are sample vectors that can
   * be used to test various functions.
   * */
  final private static Vector[] samples = {

    new Vector(3,1),
    new Vector(2,-1),
    new Vector(1,-2),
    new Vector(-1,-5),

    new Vector(-3,-1),
    new Vector(-7,2),
    new Vector(-2,9),
    new Vector(1,2)
  };

  @Test
  public void testMostlyUp() {

    assertEquals(samples[0].isMostlyUp(), false);
    assertEquals(samples[1].isMostlyUp(), false);
    assertEquals(samples[2].isMostlyUp(), false);
    assertEquals(samples[3].isMostlyUp(), false);

    assertEquals(samples[4].isMostlyUp(), false);
    assertEquals(samples[5].isMostlyUp(), false);
    assertEquals(samples[6].isMostlyUp(), true);
    assertEquals(samples[7].isMostlyUp(), true);
  }

  @Test
  public void testMostlyDown() {

    assertEquals(samples[0].isMostlyDown(), false);
    assertEquals(samples[1].isMostlyDown(), false);
    assertEquals(samples[2].isMostlyDown(), true);
    assertEquals(samples[3].isMostlyDown(), true);

    assertEquals(samples[4].isMostlyDown(), false);
    assertEquals(samples[5].isMostlyDown(), false);
    assertEquals(samples[6].isMostlyDown(), false);
    assertEquals(samples[7].isMostlyDown(), false);
  }

  @Test
  public void testMostlyLeft() {

    assertEquals(samples[0].isMostlyLeft(), false);
    assertEquals(samples[1].isMostlyLeft(), false);
    assertEquals(samples[2].isMostlyLeft(), false);
    assertEquals(samples[3].isMostlyLeft(), false);

    assertEquals(samples[4].isMostlyLeft(), true);
    assertEquals(samples[5].isMostlyLeft(), true);
    assertEquals(samples[6].isMostlyLeft(), false);
    assertEquals(samples[7].isMostlyLeft(), false);
  }

  @Test
  public void testMostlyRight() {

    assertEquals(samples[0].isMostlyRight(), true);
    assertEquals(samples[1].isMostlyRight(), true);
    assertEquals(samples[2].isMostlyRight(), false);
    assertEquals(samples[3].isMostlyRight(), false);

    assertEquals(samples[4].isMostlyRight(), false);
    assertEquals(samples[5].isMostlyRight(), false);
    assertEquals(samples[6].isMostlyRight(), false);
    assertEquals(samples[7].isMostlyRight(), false);
  }
}

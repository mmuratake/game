import java.util.ArrayList;

/** A tile map can be thought of as one "room" in the game.
 * It consists of several layers, in which tiles are referenced by index.
 * Since the only data required to reference a tile is an integer,
 * matrices are used to reference tile maps.
 * */
public class TileMap {

  /** The layers making up the tile map. */
  private ArrayList<Matrix> layers;

  /** Constructs a new tile map instance.
   * */
  public TileMap() {
    layers = new ArrayList<Matrix>();
  }

  /** Adds a layer to the tile map.
   * @param layer The layer to add to the tile map.
   * */
  void addLayer(Matrix layer) {
    layers.add(layer);
  }
}

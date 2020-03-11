public class Vector3D {
   
   double x;
   double y;
   double z;
   
   Vector3D(double x, double y, double z) {
      this.x = x;
      this.y = y;
      this.z = z;
   }
   
   Vector3D sum(Vector3D other) {
      return new Vector3D(this.x + other.x,
                          this.y + other.y,
                          this.z + other.z);
   }
   
   Vector3D diff(Vector3D other) {
      return new Vector3D(this.x - other.x,
                          this.y - other.y,
                          this.z - other.z);
   }
   
   Vector3D cross(Vector3D other) {
      return new Vector3D( (this.y * other.z) - (this.z * other.y),
                           (this.z * other.x) - (this.x * other.z),
                           (this.x * other.y) - (this.y * other.x) );
   }
   double dot(Vector3D other) {
      return (this.x * other.x) + (this.y * other.y) + (this.z * other.z);
   }
   
   double magnitude() {
      return Math.sqrt((this.x)*(this.x) + (this.y)*(this.y) + (this.z)*(this.z));
   }
   
   Vector3D normalize() {
      return new Vector3D(this.x / this.magnitude(),
                          this.y / this.magnitude(),
                          this.z / this.magnitude());
   }
   
   public String toString() {
      return "<" + this.x + "," + this.y + "," + this.z + ">";
   }
   // Main method for testing
   public static void main(String[] args) {
      Vector3D vec1 = new Vector3D(1.2,3.6,12.19); // <-- Created vector with coords <1.2,3.6,12.19>
      System.out.println(vec1.magnitude());        // <-- Magnitude works well
      Vector3D vec2 = vec1.normalize();            // <-- Created a unit vector from the first vector.
      System.out.println(vec2);                    // <-- Print coords of unit vector
      System.out.println(vec2.magnitude());        // <-- compute magnitude of unit vector
      
      Vector3D vec3 = new Vector3D(10,15,90);      // <-- Vectors 3 and 4 for testing new calculations
      Vector3D vec4 = new Vector3D(0,45,75);
      System.out.println(vec3.dot(vec4));          // <-- Calculate cross product of vectors 3 and 4
   }
}

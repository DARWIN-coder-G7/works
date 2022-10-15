package array;
import java.util.ArrayList;

public class Arraylisttoarray {

	public static void main(String[] args) {
		// TODO Auto-generated method stub


		
		    ArrayList<String> languages= new ArrayList<>();

		    // Add elements in the ArrayList
		    languages.add("tamil");
		    languages.add("english");
		    languages.add("hindi");
		    System.out.println("ArrayList: " + languages);

		    // Create a new array of String type
		    // size of array is same as the ArrayList
		    String[] arr = new String[languages.size()];

		    // Convert ArrayList into an array
		    languages.toArray(arr);

		    // print all elements of the array
		    System.out.print("Array: ");
		    for(String item:arr) {
		      System.out.print(item+", ");
		    }
		  }
		}

	
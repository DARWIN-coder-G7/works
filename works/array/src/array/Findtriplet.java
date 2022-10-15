package array;
import java.util.Arrays;
public class Findtriplet {
	public class TripletSum {
		 
		  public static boolean findTriplet(int[] arr, int sum) {
		 
		       if(arr.length < 3) {
		          return false; 
		       }
		 
		       //Sort the array
		       Arrays.sort(arr);
		       int len = arr.length;
		 
		       for(int i = 0; i < len; i++) {
		 
		           int start = i+1;
		           int end = len-1;
		 
		           while(start < end) {
		 
		             if(arr[i] + arr[start] + arr[end] == sum) {
		                return true;
		 
		              } else if (arr[i] + arr[start] + arr[end] < sum) {
		                start++;
		           
		              } else {
		                 end--;
		 
		               }
		             }
		          }
		 
		        return false;
		   }

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 int[] arr = { 1,5,9,8,6,5,3,2}; 
	      int k = 13;
	 
	      boolean result = findTriplet(arr, k);
	 
	      if(result) {
	         System.out.println("Exists");
	      } else {
	         System.out.println("Not exists");
	      }
		
		
	}

	}
}

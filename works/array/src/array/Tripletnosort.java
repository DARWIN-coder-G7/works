package array;

public class Tripletnosort {
	 public static boolean findTripletWithBruteForce(int[] arr, int sum) {
		 
	     //If array size is less than 3 then simply return false
	     if(arr.length < 3) {
	         return false; 
	     }
	 
	     int len = arr.length;
	 
	    //Run three loop to check whether triplet exists in an array
	     for(int i = 0; i < len-2; i++) {
	        for(int j = i+1; j < len-1; j++) {
	           for(int k = j+1; k < len; k++) {
	 
	               if(arr[i] + arr[j] + arr[k] == sum) {
	                   return true;
	                }
	            }
	         }
	      }
	 
	      return false;
	 }

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 int[] arr = { 1,5,9,4,0,3,2,6}; 
	      int k = 7;
	 
	      boolean result = findTripletWithBruteForce(arr, k);
	 
	      if(result) {
	         System.out.println("Exists");
	      } else {
	         System.out.println("Not exists");
	      }
		
		
	}

}

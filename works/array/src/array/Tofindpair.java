package array;
import java.util.Scanner;
import java.util.Arrays;
public class Tofindpair {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 Scanner sc = new Scanner(System.in);
	      System.out.println("Enter the size of the array that is to be created: ");
	      int size = sc.nextInt();
	      int[] myArray = new int[size];
	      System.out.println("Enter the elements of the array: ");
	      for(int i=0; i<size; i++){
	         myArray[i] = sc.nextInt();
	      }
	      //Reading the number
	      System.out.println("Enter the number: ");
	      int num = sc.nextInt();
	      
	      System.out.println("The array created is: "+Arrays.toString(myArray));
	      
	      System.out.println("indices of the elements whose sum is: "+num);
	      for(int i=0; i<myArray.length; i++){
	         for (int j=i; j<myArray.length; j++){
	            if((myArray[i]+myArray[j])== num && i!=j){
	               System.out.println(i+", "+j);
	            }
	         }
	      }
	}
}



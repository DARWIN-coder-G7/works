package array;
import java.util.Arrays;
import java.util.Scanner;
public class Missingelementinanarray {
	public static int getMissingNumber(int[] arr)
	{
		// get the array's length
		int n = arr.length;

		// the actual size is `n+1` since a number is missing from the array
		int m = n + 1;

		// get a sum of integers between 1 and `n+1`
		int total = m * (m + 1) / 2;

		// get an actual sum of integers in the array
		int sum = Arrays.stream(arr).sum();

		// the missing number is the difference between the expected sum
		// and the actual sum
		return total - sum;
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int n,i;
		Scanner sc = new Scanner (System.in);
		System.out.println("enter your array length");
		n = sc.nextInt();
		int[] array = new int[n];
		System.out.println("enter the elements of array are ");
		for (i=0 ;i<n ;i++ )
		{
			
		array[i]=sc.nextInt();  
		}
		System.out.println("thus the elemnts of the array are ");
		for ( i=0; i<n; i++)   
		{  
		System.out.println(array[i]);  
		}  
		Arrays.sort(array);
		System.out.println("sorted array");
		for ( i=0; i<n; i++)   
		{  
		System.out.println(array[i]);  
		} 
		//thus the missing number of the array is
		System.out.println("thus the missing element of that array is"+getMissingNumber(array));
	}

}

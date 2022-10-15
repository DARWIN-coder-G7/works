package array;
import java.io.*;
public class Sumclosesttozero {	
	static void findMinSum(int[] arr, int n)
	{
		for(int i = 1; i < n; i++)
		{
			if (!(Math.abs(arr[i - 1]) <
				Math.abs(arr[i])))
			{
				int temp = arr[i - 1];
				arr[i - 1] = arr[i];
				arr[i] = temp;
			}
		}
		int min = Integer.MAX_VALUE;
		
		int x = 0, y = 0;
		
		for(int i = 1; i < n; i++)
		{
			
			// Absolute value shows how close
			// it is to zero
			if (Math.abs(arr[i - 1] + arr[i]) <= min)
				//System.out.println(min);
			{
				//System.out.println(min);
				// If found an even close value
				// update minimum and store the index
				min = Math.abs(arr[i - 1] + arr[i]);
				x = i - 1;
				y = i;
				//System.out.println(min);
			}
		}
		System.out.println("The two elements whose " +
						"sum is minimum are " +
						arr[x] + " and " + arr[y]);
	}

	// Driver code
	public static void main(String[] args)
	{
		int[] arr = { 1, 6,-10,70,-80,85,9,-7 };
		int n = arr.length;
		
		findMinSum(arr, n);
	}
	}


	



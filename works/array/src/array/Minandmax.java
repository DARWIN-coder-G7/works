package array;

import java.util.Arrays;
import java.util.Scanner;

public class Minandmax {

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
		
		System.out.println("the minimum value elemnt of that arrayis" +   array[0]);
		int last = array[array.length - 1];
		System.out.println("the minimum value elemnt of that arrayis" +   last);
	}

	}



package array;

import java.util.Arrays;
import java.util.Scanner;

public class Secondlastelement {

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
		
		int last = array[array.length - 2];
		System.out.println("the second largest elemnt of that arrayis" + " "+  last);
	}

	

	}



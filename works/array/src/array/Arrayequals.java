package array;
import java.util.Scanner;
import java.util.Arrays;
public class Arrayequals {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		int n,i;
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
		System.out.println("enter your second array length");
		int m;
m=sc.nextInt();
int[]arr=new int [m];
System.out.println("enter the elments of the second array");
for(i=0;i<m;i++)
{
	arr[i]=sc.nextInt();
	}
System.out.println("thus the elemnts of the second array are");
for(i=0;i<m;i++) {
	System.out.println(arr[i]);
}



	if(Arrays.equals(array, arr)) {

	
System.out.println("yes the array are equals");
	}
	else
		System.out.println("not equal");



	}
}

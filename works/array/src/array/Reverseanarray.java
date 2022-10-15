// to reverse an array


package array;
import java.util.Arrays;
import java.util.Scanner;

public class Reverseanarray {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=  new Scanner(System.in);
int n,i;
System.out.println("enter the no of elements you want to store in this array");
n=sc.nextInt();
int arr[]=new int[n];
for(i=0;i<n;i++)
{
	arr[i]=sc.nextInt();
}
System.out.println("thus the elements of the array");
for(i=0;i<n;i++)
{
	System.out.println(arr[i]);
}
// to reverse the elements of an array
System.out.println("thus the reversed elements of the array are");
for(i=arr.length-1;i>=0;i--)
{
	System.out.println(arr[i]+" ");
	
}


	}

}

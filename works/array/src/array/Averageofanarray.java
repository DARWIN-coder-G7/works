//2.	Write a Java program to calculate the average value of array elements

package array;
import java.util.Scanner;
public class Averageofanarray {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 Scanner s = new Scanner(System.in);
		 float avg = 0;
		int total = 0;
		int k,l,m,n;
		
		
		System.out.println("here you can create and find out average of that array");
		
		System.out.println("enter the no of rows you want in this array");
		k=s.nextInt();
		System.out.println("enter the no of collumns you want in tis array");
		l=s.nextInt();
		int arr[][]=new int [k][l];
		System.out.println("enter the elemnts of an array");
		
		for(m=0;m<k;m++) 
			for(n=0;n<l;n++) 
				 arr[m][n]=s.nextInt();
		
		System.out.println("Elements of the array are: ");   
		for (m = 0; m < k; m++)   
		{   
		for (n = 0; n < l; n++)   
	
		System.out.print(arr[m][n] + " ");   
		
		System.out.println();   
		} 
		//average of an array
		for (m = 0; m < k; m++)   
		{   
		for (n = 0; n < l; n++) 
			
		total+=arr[m][n];
		}  
		avg=(total/(k*l));
		System.out.println("thus average of the given arary  is "+avg);
		
		
	}
}
	

package array;
import java.util.Arrays; 
import java.util.Scanner;

public class Sortarrayandstring {
	
	
	public static void main(String[] args){   
	    Scanner s = new Scanner(System.in);
	    System.out.println("here you can sort arrays");
	    
	    System.out.println("enter noo 1 to sort integer array enter noo 02 to sort an integer");
	   int k=s.nextInt();
	    if(k==2) {
	    
	    // for string
        String[] array = new String[20];

        System.out.println("Please enter 20 names to sort");              
       
        for (int i = 0; i < array.length;i++){

            array[i] = s.nextLine();}
        System.out.println("Original string array : "+Arrays.toString(array));
	    Arrays.sort(array);
	    System.out.println("Sorted string array : "+Arrays.toString(array));}
	    if(k==2) {
	    //for integer
            int[] array1=new int[20];
            System.out.println("Please enter 20 numbers to sort");
            for (int i = 0; i < array1.length;i++){

               array1[i] = s.nextInt();}
	    System.out.println("Original numeric array : "+(array1));
	    Arrays.sort(array1);
	    System.out.println("Sorted numeric array : "+(array1));}
	    
	 
	    }
	}




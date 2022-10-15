//11.	Write a Java program to find common elements from three sorted (in non-decreasing order) arrays.

package array;

public class Commonelementsofthreearray {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int arr1[] = {1,4,0,3,4,55,22,21};
		int arr2[] = {2,3,4,5,6,7,8,9};
		int arr3[] = {4,0,5,6,78,4,33,22,44};
		int i = 0, j = 0, k = 0, x = 0;
		System.out.print("Array1: ");
		for(x = 0; x < arr1.length; x++) {
		System.out.print(arr1[x] + " ");
		}
		System.out.print("\nArray2: ");
		for(x = 0; x < arr2.length; x++) {
		System.out.print(arr2[x] + " ");
		}
		System.out.print("\nArray3: ");
		for(x = 0; x < arr3.length; x++) {
		System.out.print(arr3[x] + " ");
		}
		System.out.print("\nThe common elements in the 3 sorted arrays are: ");
		while (i < arr1.length && j < arr2.length && k < arr3.length) {
		if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
		System.out.print(arr1[i] + " ");
		i++;
		j++;
		k++;
		}else if (arr1[i] < arr2[j]) {
		i++;
		}else if (arr2[j] < arr3[k]) {
		j++;
		}else {
		k++;
		}
		}

	}

}

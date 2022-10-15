package array;

public class Elementnot0and {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int [] arr = new int [] {1, 2, 7, 3, 2, 2, 2, 5, 1};
		boolean zero=false;
		boolean one=false;
		for(int i=0;i<arr.length;i++) {
			if(arr[i]==0) {zero=true;}
			else if(arr[i]==-1) {one=true;}
		}
		if(zero) {System.out.println("the array contains zero");}
		else if(one) {System.out.println("the array contains one");}
		else {
			System.out.println("the array doesnt contain both 0 and -1");
		}
		
		
	}
		

}

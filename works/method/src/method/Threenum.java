//to find smallest among three numbers

package method;

public abstract class Threenum {
	public static int smallest( int n,int m,int k) {
		
	
		if((n<m)&& (n<k)) {System.out.println(n+"is smaller");}
		else if((m<n)&& (m<k)) {System.out.println(m+"is smaller");}
		else {System.out.println(k+"is smaller");}
		return 0;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
smallest(5,6,7);
	}

}

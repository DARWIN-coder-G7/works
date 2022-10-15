package method;

public class Sumofint {
public static void sumofint(int n) {
int m,sum=0;
	while(n>0) {
	//	System.out.println(n);
		m=n%10;
		sum=sum+m;
		//System.out.println(sum);
		n=n/10;
}	
	System.out.println("thus sum of the elemnts of the given int is"+   "-----"  +sum);
}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
sumofint(1255);
	}

}

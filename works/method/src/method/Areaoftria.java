package method;
import java.util.Scanner;
public class Areaoftria {
public static int tria( int base,int height) {
	int area;
	//System.out.println(base);
	area=(base*height)/2;
	System.out.println("thus the area of the triangle is"+ "------"+area);
	
	return 0;
}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
	int x;
	int y;
	Scanner sc= new Scanner(System.in);
	System.out.println("enter the base of the triangle");
	x = sc.nextInt(); 
	System.out.println("enter the height of the triangle");
	y = sc.nextInt(); 
		tria(x,y);

	}

}

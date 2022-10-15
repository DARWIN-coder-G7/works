package method;

import java.util.Scanner;

public class Areaopenta {
	

	
		public static int pentagon( int perimeter,int apothem) {
			int area;
			//System.out.println(base);
			area=(perimeter*apothem)/2;
			System.out.println("thus the area of the pentagon is"+ "------"+area);
			
			return 0;
		}
			public static void main(String[] args) {
				// TODO Auto-generated method stub
			int x;
			int y;
			Scanner sc= new Scanner(System.in);
			System.out.println("enter the perimeter of the triangle");
			x = sc.nextInt(); 
			System.out.println("enter the apothem of the triangle");
			y = sc.nextInt(); 
				pentagon(x,y);

			}

}

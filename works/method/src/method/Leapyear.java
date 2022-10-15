package method;

public class Leapyear {
	public static int leap(int year) {
		if(   ((year%4)==0)||((year%400)==0)&&((year%100)!=0)  ) {
			System.out.println("THE YEAR YOU ENTERD IS A LEAP YEAR");
		}
		else {System.out.println("THE YEAR ENTERED IS NOT A LEAP YEAR");} 
			
		return 0;
		
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
leap(2022);
	}

}

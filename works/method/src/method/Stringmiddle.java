package method;

public class Stringmiddle {
	public static void pmc(String s)
    {
        // Find string length
        int len = s.length();
 
        // Find middle index of string
        int middle = len / 2;
 
        // Print the middle character of the string
        System.out.println(s.charAt(middle));
    }

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		 pmc( "seeman is doing some work");
	}

}

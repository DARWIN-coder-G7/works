package method;

public class Countwords {
public static void count(String n) 
{
      
    int Count = 0;  
      
    for(int i = 0; i < n.length()-1; i++) {  
        //Counts all the spaces present in the string  
        if(n.charAt(i) == ' ' && Character.isLetter(n.charAt(i+1)) && (i > 0)) {  
            Count++;  
        }  
    }  
    //To count the last word present in the string, increment wordCount by 1  
    Count++;  
      
    //Displays the total number of words present in the given string  
    System.out.println("Total number of words in the given string: " + Count);  
	
	/*String k[] = n.split("");
	System.out.println("the word count is"+ "     "  +k.length);*/
	
}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
/*count("hi this is darwin from nowhere");
String x="hisname is what";
String y[] = x.split(x);
System.out.println(y.length);*/
		String n = "hi this is darwin from nowhere";
		count(n);

	}

}

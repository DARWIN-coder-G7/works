package array;

public class Arrayelementsnot0 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
int arr[]= {1,2,3,4,5,3,2,1,1,2,3,5,6,7,8};
int freq[]=new int[arr.length];

for(int i=0;i<arr.length;i++) {
	//c is count 
	int c=1;
	for(int j=i+1;j<arr.length;j++) {
		if(arr[i]==arr[j]) {
		c++;
		System.out.println(c);
		freq[j]=-1;
		}
	}
	if(freq[i]!=-1) 
		freq[i]=c;
	
	
}
	/*int countofduplics=0;
	for( i=0;i<freq.length;i++) {
		if(freq[i]>1) {
			countofduplics++;
		}
	}*/

	for( int i=0;i<freq.length;i++) {
		if(freq[i]!=-1) {
			System.out.println(arr[i]+"appeared"+freq[i]+"times");
		}
	}
	

	}

}

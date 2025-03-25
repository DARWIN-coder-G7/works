#include <stdio.h>

// Function prototype (declaration)
int add(int a, int b);

int main(void){
    printf("Hello, World!\n");
    printf("%d\n", add(2,8)); 
    return 0;
}

// Function definition
int add(int a, int b){
    return a + b;
}

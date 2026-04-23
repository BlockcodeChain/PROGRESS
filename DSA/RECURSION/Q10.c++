// Write a program to print the sum of all odd numbers from a to b (inclusive) using recursion.

#include<iostream>
using namespace std;

int range(int a,int b){

    // base condition
    if(a>b) return 0;
    
    //  odd
        if(a%2!=0){
           return a+ range(a+1,b);
        
     }
    //  skip and go to next
    else {
        return range(a+1,b);
    }
   
}
int main()
{
    int a,b;
    cout<<"Enter range from a to b:";
    cin>>a>>b;
    
     cout<<range(a,b);
}
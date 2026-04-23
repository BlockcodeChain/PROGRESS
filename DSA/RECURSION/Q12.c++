// There are n stairs, and a person standing at the bottom wants to climb the stairs to reach the nth stair. The person can climb either 1, 2, or 3 stairs at a time. Write a program to count the number of ways the person can reach the top using recursion.



#include<iostream>
using namespace std;

int stairs(int n){

    // base condition
     if (n<0) return 0;
    if(n==0 ||n==1) return 1;
    
    return stairs(n-1)+stairs(n-2)+stairs(n-3);
  
   
}
int main()
{
    int num;
    cout<<"Enter number of stairs:";
    cin>>num;
    
     cout<<stairs(num);
}
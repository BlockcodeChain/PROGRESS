// Given a positive integer, return true if it is a power of 2 using recursion.


#include<iostream>
using namespace std;

bool check(int n){

    // base condition
    if(n==1) return true;
    if(n<=0||n%2!=0) return false;

    return check(n/2);
    
   
}
int main()
{
    int num;
    cout<<"Enter positive number:";
    cin>>num;
    
     cout<<check(num);
}
// Given a positive integer, return true if it is a power of 2 without recursion.


#include<iostream>
using namespace std;

bool check(int n){
  if(n<=0) return false;
   while(n%2==0){
    n/=2;
   }
   return (n==1);
    
   
}
int main()
{
    int num;
    cout<<"Enter positive number:";
    cin>>num;
    
     cout<<check(num);
}
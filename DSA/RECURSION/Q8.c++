// fibonnaci series using recursion
#include<iostream>
using namespace std;
int fibonnaci(int n){
    // base cased
    if(n==1||n==2 ) return 1;
  
   return fibonnaci(n-1)+fibonnaci(n-2);
}
int main(){
    int num;
    cout<<"Enter number:"<<" ";
    cin>>num;
   cout<<fibonnaci(num);
}

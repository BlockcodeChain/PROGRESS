// factorial of a number
#include<iostream>
using namespace std;
int factorial(int n){
    // base cased
    if(n==0 ||n==1) return 1;

   return n*factorial(n-1);
}
int main(){
    int num;
    cout<<"Enter number:";
    cin>>num;
    cout<<factorial(num);
}

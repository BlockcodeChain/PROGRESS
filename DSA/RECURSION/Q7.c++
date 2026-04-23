// make a function which calculates a raised to ower b 
#include<iostream>
using namespace std;
int  power(int a,int b){
   int p=1;
   for(int i=1;i<=b;i++){
    p*=a;
   }
   return  p;
 
}
int main(){
    int a,b;
    cout<<"Enter number and power:";
    cin>>a>>b;
  cout<< power(a,b);
}
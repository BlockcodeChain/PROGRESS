// sum form 1 to n
#include<iostream>
using namespace std;
int  sumof1(int n){
    // base cased
    if(n==0 ) return 0;
   return n+sumof1(n-1);
 
}
int main(){
    int num;
    cout<<"Enter number:";
    cin>>num;
  cout<< sumof1(num);
}
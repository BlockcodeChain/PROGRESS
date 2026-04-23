// recursion  greet msg
#include<iostream>
using namespace std;
void greet(int n){
    // base cased
    if(n==0 ) return ;
  cout<<n<<" . Hello Recursion"<<endl;
   return greet(n-1);
}
int main(){
    int num;
    cout<<"Enter number:";
    cin>>num;
   greet(num);
}

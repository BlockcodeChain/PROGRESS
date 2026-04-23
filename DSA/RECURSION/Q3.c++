// print n to 1
#include<iostream>
using namespace std;
void print(int n){
    // base cased
    if(n==0 ) return ;
  cout<<n<<endl;
   return print(n-1);
}
int main(){
    int num;
    cout<<"Enter number:";
    cin>>num;
   print(num);
}

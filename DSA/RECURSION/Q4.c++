// print 1 to n
#include<iostream>
using namespace std;
void print(int n){
    // base cased
    if(n==0 ) return ;
     print(n-1);
  cout<<n<<endl;
   
}
int main(){
    int num;
    cout<<"Enter number:";
    cin>>num;
   print(num);
}

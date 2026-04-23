// gcd of a number
#include<iostream>
using namespace std;
void GCD(int a,int b){
    if(b==0){
        cout<<a;
    } 
     GCD(b,a%b);
   
   
}
int main()
{
    int a,b;
    cout<<"Enter A and B value:";
    cin>>a>>b;
    GCD(a,b);
}
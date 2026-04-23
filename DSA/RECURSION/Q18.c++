// pallindrome using recursion
#include<iostream>
using namespace std;
void Pallindroe(int a,int b){
    if(b==0){
        cout<<a;
    } 
     Pallindroe(b,a%b);
   
   
}
int main()
{
    string str;
    cout<<"Enter string:";
    cin>>str;
    Pallindroe(str);
}
// pallindrome 
#include<iostream>
using namespace std;
bool Pallindrome(string str){
//    2 pointer se kr stke hai ise hum
int size=str.size();
int start=0,end=size-1;
while(start<=end){
    if(str[start]==str[end]){
        start++;
        end--;
    }
    else return false;
}
   return true;
   
}
int main()
{
    string str;
    cout<<"Enter string:";
    cin>>str;
   if( Pallindrome(str)){
    cout<<"Pallindrome";
   }
   else cout<<"Not pallindrome";
}
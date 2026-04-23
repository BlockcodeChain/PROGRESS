// print n to 1 even number 

#include<iostream>
using namespace std;
int even(int n){
    if(n<=0) return 0;
    if(n%2==0){
        cout<<n<<endl;
    }
    return even(n-1);
}
int main()
{
    int num;
    cout<<"Enter number:";
    cin>>num;
    cout<<even(num);
}
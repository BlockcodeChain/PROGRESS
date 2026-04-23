// print 1 to n even number 

#include<iostream>
using namespace std;
void even(int n){
    if(n<=0) return ;
     even(n-1);
    if(n%2==0){
        cout<<n<<endl;
    }
   
}
int main()
{
    int num;
    cout<<"Enter number:";
    cin>>num;
    even(num);
}
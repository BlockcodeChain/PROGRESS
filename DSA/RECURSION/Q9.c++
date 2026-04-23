// 1.Print an increasing-decreasing sequence using recursion
// Example: If n = 5, the output should be: 1 2 3 4 5 4 3 2 6


#include<iostream>
using namespace std;
void increasing(int n){
    if(n==0) return ;
    increasing(n-1);
   cout<<n<<" ";
}
void decreasing(int n){
    // base condition
    if(n==0) return ;
    cout<<n<<" ";
   decreasing(n-1);
   
}
int main()
{
    int num;
    cout<<"Enter number:";
    cin>>num;
     increasing(num);
     decreasing(num-1);
}
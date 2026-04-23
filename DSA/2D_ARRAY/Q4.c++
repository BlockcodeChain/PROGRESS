// wrp in cpp to find the sum of all  elem of a given 2d array of matrix


#include<iostream>

using namespace std;
int main()
{
    int arr[2][4];
    // input liya yah pe 
    for(int i=0;i<2;i++){
        for(int j=0;j<4;j++){
            cin>>arr[i][j];
        }
    }
    int sum=0;

    for(int i=0;i<2;i++){
        for(int j=0;j<4;j++){
            sum+=arr[i][j];
        }
    }
    cout<<"Sum of all Element:"<<sum;



    
}
// wrp in cpp to find the largest elem of a given 2d array of integers


#include<iostream>
#include<limits.h>
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
    int max=INT_MIN;

    for(int i=0;i<2;i++){
        for(int j=0;j<4;j++){
            if(max<arr[i][j]){
                max=arr[i][j];
            }
        }
    }
    cout<<"Maximum Element:"<<max;



    
}
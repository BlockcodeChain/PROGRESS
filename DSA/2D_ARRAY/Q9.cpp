// multiplication of matrix

#include<iostream>
using namespace std;
int main(){
    cout<<"enter matrix 1:";
    int arr1[3][2];
    int arr2[2][3];
 for(int i=0;i<3;i++){
    for(int j=0;j<2;j++){
        cin>>arr1[i][j];
    }
 }
 cout<<"enter matrix 2:";
 for(int i=0;i<2;i++){
    for(int j=0;j<3;j++){
        cin>>arr2[i][j];
    }
 }
 int res[3][3];
 for(int i=0;i<3;i++){
    for(int j=0;j<3;j++){
              res[i][j] = 0;  // ✅ initialize
        for(int k=0;k<2;k++)
        res[i][j]+=arr1[i][k]*arr2[k][j];
    }
 }
 for(int i=0;i<3;i++){
    for(int j=0;j<3;j++){
        cout<<res[i][j]<<" ";
    }
    cout<<endl;
 }
}
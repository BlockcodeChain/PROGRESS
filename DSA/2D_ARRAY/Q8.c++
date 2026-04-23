// reverse matrix


// you are given a matrix of size n*n change this mmatrix into its tanspose


#include<iostream>
#include<bits/stdc++.h>
using namespace std;
int main()
{
    
    int mat1[3][3];
    
    // input liya yah pe 
    cout<<"Input Matirx ";
    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
            cin>>mat1[i][j];
        }
    }

  cout<<"Reverse Matrix";
        
     for(int i=2;i>=0;i--){
        for(int j=2;j>=0;j--){
            cout<<mat1[i][j]<<" ";
        }
        cout<<endl;
        
    }
       
}
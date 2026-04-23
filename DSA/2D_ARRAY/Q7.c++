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

    cout<<"Transpose of Matrix";
     for(int i=0;i<3;i++){
        for(int j=i+1;j<3;j++){
         swap(mat1[i][j],mat1[j][i]);
        }
        
    }
     for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
            cout<<mat1[i][j]<<" ";
        }
        cout<<endl;
        
    }
    
  
    


    
}
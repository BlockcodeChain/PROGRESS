// WAVE FORM MATRIX
// case 3

#include<iostream>
#include<bits/stdc++.h>
using namespace std;
int main()
{
    int m,n;
   cout<<"Ente rnumber:";
   cin>>m>>n;

    int mat1[m][n];
    
    // input liya yah pe 
    cout<<"Input Matirx ";
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            cin>>mat1[i][j];
        }
    }

 for(int j=0;j<n;j++){
    // column
  if(j%2==0){
    // even
    for(int i=0;i<m;i++){
        cout<<mat1[i][j]<<" ";

    }
    
  }
  else {
    for(int i=n-1;i>=0;i--){
        cout<<mat1[i][j]<<" ";

    }
    
  }

 }
       
}
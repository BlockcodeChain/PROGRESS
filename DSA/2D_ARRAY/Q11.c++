// WAVE FORM MATRIX

// case 2
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
    for(int i=m-1;i>=0;i--){
        for(int j=0;j<n;j++){
            cin>>mat1[i][j];
        }
    }

 for(int i=0;i<m;i++){
  if(i%2==0){
    // even
    for(int j=0;j<n;j++){
        cout<<mat1[i][j]<<" ";

    }
    
  }
  else {
    for(int j=n-1;j>=0;j--){
        cout<<mat1[i][j]<<" ";

    }
    
  }

 }
       
}
// wrp to add two matrix

#include<iostream>

using namespace std;
int main()
{
    // two matrix tb hota hai jb dono ka m*n same ho 
    int mat1[3][3];
     int mat2[3][3];
    // input liya yah pe 
    cout<<"Input Matirx1";
    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
            cin>>mat1[i][j];
        }
    }
      cout<<"Input Matirx2";
    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
            cin>>mat2[i][j];
        }
    }
  
int res[3][3];
    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
           res[i][j]=mat1[i][j]+mat2[i][j];
        }
    }
    
   for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
          cout<< res[i][j]<<" ";
        }
        cout<<endl;
    }
    


    
}
// write a program to ritn transpose of matrix entered by the user and store it n an new maatrix
#include<iostream>

using namespace std;
int main()
{
    // two matrix tb hota hai jb dono ka m*n same ho 
    int mat1[3][4];
    
    // input liya yah pe 
    cout<<"Input Matirx ";
    for(int i=0;i<3;i++){
        for(int j=0;j<4;j++){
            cin>>mat1[i][j];
        }
    }
    int res[4][3];
    cout<<"Transpose of Matrix";
     for(int i=0;i<4;i++){
        for(int j=0;j<3;j++){
            res[i][j]=mat1[j][i];
        }
        
    }
     for(int i=0;i<4;i++){
        for(int j=0;j<3;j++){
            cout<<res[i][j]<<" ";
        }
        cout<<endl;
        
    }
    
  
    


    
}
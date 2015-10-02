#include<iostream>
using namespace std;
int main(){
long long chas=0, minuti=0;
bool halb=false, repeating=true;
char answer[1];
while(repeating){
    cout<<"Please type the time, separating it with space instead of :"<<endl;
    cin>>chas>>minuti;
    if(minuti==30){
        halb=true;
    }
    if(halb){
        cout<<"Es ist halb ";
        if(chas==0 || chas==12 || chas==24){
            cout<<"eins.";
        }
        if(chas==1 || chas==13){
            cout<<"zwei.";
        }
        if(chas==2 || chas==14){
            cout<<"drei.";
        }
        if(chas==3 || chas==15){
            cout<<"vier.";
        }
        if(chas==4 || chas==16){
            cout<<"fünf.";
        }
        if(chas==5 || chas==17){
            cout<<"sechs.";
        }
        if(chas==6 || chas==18){
            cout<<"sieben.";
        }
        if(chas==7 || chas==19){
            cout<<"acht.";
        }
        if(chas==8 || chas==20){
            cout<<"neun.";
        }
        if(chas==9 || chas==21){
            cout<<"zehn.";
        }
        if(chas==10 || chas==22){
            cout<<"elf.";
        }
        if(chas==11 || chas==23){
            cout<<"zwölf.";
        }
    }
    cout<<endl<<"Do you want to try it again?"<<endl;
    cout<<"A.Yes  B.No"<<endl;
    cin>>answer[1];
    if(answer[1]=='A' || answer[1]=='a'){
        repeating=true;
    }else if(answer[1]=='B' || answer[1]=='b'){
        repeating=false;
        cout<<"Exiting.";
    }else{
        cout<<"Sorry, I can't understand you. Exiting.";
        repeating=false;
    }
}
return 0;
}

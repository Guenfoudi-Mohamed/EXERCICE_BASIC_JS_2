﻿	//EXE_1

                
                var v1 = "guenfoudi mohamed",v2="";
                for(var i = v1.length-1;i >= 0;i--){
                    v2 += v1[i];
                }
                document.write("word >> "+v1+"<br>");
                document.write("result >> "+v2);
                


             	//EXE_2

                //please enter a number in >> v1 
                var v1 = -3,result = 1;
                if(v1 < 0){
                    v1 = v1 * -1;   
                    //if v1 == 0 so no enter in loop             
                    for(var i=v1 ; i > 0 ; i--){
                        result *= i;
                    }
                    document.write("The Factorial is : "+result*-1);
                }
                else{  
                    //if v1 == 0 so no enter in loop                 
                    for(var i=v1 ; i > 0 ; i--){
                        result *= i;
                    }
                    document.write("The Factorial is : "+result);
                }
                


               //EXE_3

                //Perimeter of the rectangle
                //please enter the width 
                var width = 5;
                //please enter the height
                var height = 7;
                var result;
                result = width*2+height*2;
                document.write("The Perimeter of the rectangle is : "+result+" And the area is : ",width*height);



                //EXE_4

                var hours,minutes,result;
                // please enter the value of hour 
                hours = 0.5;
                // please enter the value of minut
                minutes = 0.5;
                //resulte
                result = (hours*3600)+(minutes*60);
                document.write("Number of seconds : "+result+" SECONDS");
                



                //EXE_5

                var Name = "mohamed guenfoudi",result_name="";
                for(var i = Name.length-3;i < Name.length;i++){
                    result_name += Name[i];
                    // j++;
                    // if(j == 3){
                    //     break;
                    // }
                }
                document.write("The last 3 letters are : "+result_name);
                



                //EXE_6

                //please enter a word or sentence
                var v1 = "guenfoudimohamed",value_word="";
                var result;
                result = v1.length / 2;
                for(var i = 0;i < result;i++){
                    value_word += v1[i];
                }
                document.write("the result numerique is : "+result+" ,and the value of word or sentence is : "+value_word);
                



                //EXE_7

                var v1 = "GUENFOUDI" , v2= "MOHAMED",result = "";
                for(var i = 1;i <= v1.length-1;i++){
                    result += v1[i];
                }

                result += "&";
                
                for(var i = 1;i <= v2.length-1;i++){
                    result += v2[i];
                }
                document.write(v1 +"_"+ v2);
                document.write("<br>The somme of the two words is : "+result);
                



                //EXE_8

                              

                
                var v1 = "helldo worldew";    // =>=> heldo wrl
                var i = 0,j = 1,con = 0;
                var conteur = []; var result=""; 
                                                                //3 i=4
                for(var i = 0;i < v1.length;i++){
                    
                    for(var t1 = 0;t1 < v1.length;t1++){
                        if(i == conteur[t1]){
                            break;
                        }
                    }
                    if(i == conteur[t1]){
                        continue;
                    }
                    else if(i == v1.length-1){
                        result += v1[i];
                        break;
                    }
                    for(j=i+1;j < v1.length;j++){
                        
                        if(v1[i] == v1[j]){
                            conteur.push(j);
                            result+=v1[i];
                            con=0;
                            break;
                        }
                        else if(v1[i] != v1[j]){
                            con++;
                            continue;

                        }
                        else if(i == v1.length-1){
                            result+=v1[i];
                            con=0;
                            break;
                        }
                    }
                    if(con != 0){
                        result+=v1[i];
                    }
                }

                document.write("word >>>"+v1+" =>=> \"heldo wrl\"<br>");
                document.write("result >> "+result+"<br>");
                


                
                //EXE_9

                var v1 = "hello world";
                var i = 0,j = 1,con = 1;
                var conteur = []; var result=""; 
                                                            
                for(var i = 0;i < v1.length;i++){
                    for(var t1 = 0;t1 < v1.length;t1++){
                        if(i == conteur[t1]){
                            break;
                        }
                    }
                    if(i == conteur[t1]){
                        continue;
                    }
                    else if(i == v1.length-1){
                        document.write(v1[i]+" : <mark>"+con+"</mark><br>");    
                        break;
                    }
                    for(j=i+1;j < v1.length;j++){
                        if(v1[i] == v1[j]){
                            conteur.push(j);
                            con+=1;
                            continue;
                        }
                        else if(v1[i] != v1[j]){
                            continue;
                        }
                    }
                    if(v1[i] != " "){
                        document.write(v1[i]+" : <mark>"+con+"</mark><br>");
                        con = 1;
                    }
                    con = 1;
                }
                
      

                //EXE_10
                var v1 = "hochohochocbt1";    // =>=> ho
                var i = 0,j = 1,con = 0;                    //conteur 1-3-5__4-6 
                var conteur = []; var result=""; 
                                                                
                for(var i = 0;i < v1.length;i++){
                    for(var t1 = 0;t1 < v1.length;t1++){
                        if(i == conteur[t1]){
                            break;
                        }
                    }
                    if(i == conteur[t1]){
                        continue;
                    }    
                    if(i == v1.length-1){
                        result+=v1[i];                          
                        break;
                    }                                                    
                    for(j=i+1;j < v1.length;j++){       
                        if(v1[i] == v1[j]){
                            conteur.push(j);                                      
                            if(j != v1.length-1){
                                continue;
                            }
                            else if(j == v1.length-1){
                                result+=v1[i];                          
                                break;    
                            }
                        }
                        if(j == v1.length-1){
                            result+=v1[i];                          
                            break;
                        }
                    }
                }
                document.write("word >>>"+v1+"<br>");
                document.write("result >> "+result+"<br>");



                //EX_11

                /*
                                                                        5
                                                                       454
                                                                      34543
                                                                     2345432
                                                                    123454321
                                                                     2345432
                                                                      34543
                                                                       454
                                                                        5  
                */ 
                var num_val = 10,last=0;
                var sp = " ",result = "";
                var c = 1;
                for(var i = num_val;i > 0;i--){
                    sp = "";
                    for(var j = num_val-c;j > 0;j--){
                        sp+=" ";
                        
                    }
                    if(i == num_val && i > 10){
                        sp+=" ";
                    }
                    if(i == num_val){
                        result = i;
                        console.log(sp+""+result);
                        sp="";
                        c++;
                        result="";
                        continue;
                    }
                    else if(i < num_val){ //i=4;
                    result = "";
                    result += i;
                        for(var t1 = i;t1 < num_val; t1++){
                            result+=(t1+1);
                        }
                        for(var t2 = num_val-1;t2 >= i; t2--){
                            result+=(t2);
                        }
                    }
                    console.log(sp+""+result);
                    sp="";
                    c++;
                    result="";
                }
                c = 1;
                var arr = [];
                for(var i_1 =  num_val-1;i_1 > 0;i_1--){ 
                    for(var j_1 = 0;j_1 < c;j_1++){
                        sp+=" ";
                    }
                    
                    for(var t3 = c+1;t3 <= num_val;t3++){  
                        result+=t3;
                        arr.push(t3);                       
                    }
                    if(result == num_val && result > 10){
                        sp+=" ";
                    }
                    if(result == num_val){
                        console.log(sp+""+result);
                        break;
                    }
                    
                    for(var t4 = num_val-1;t4 >= arr[0]; t4--){
                        result+=(t4);
                    }

                    console.log(sp+""+result);
                    arr.shift();
                    sp="";
                    result="";
                    arr.pop();
                    c++;
                }
                





                //EX_12
                
                var num = 21,cn;
                var result = "";
                console.log("=== Number of lines : "+num+" ===");
                // console.log();
                for(var i = 0;i < num;i++){
                    cn = i+1;
                    for(var j = 0;j < 1;j++){
                        for(var z = 0;z < num;z++){
                            result+="*";
                        }
                    }
                    if(result[i] == "*" && result[result.length-cn] == "*"){
                        var op = result.length-cn;
                        
                        result="";
                        for(var y1 = 0;y1 < num;y1++){
                            if(y1 == i || y1 == op){
                                result+="G";
                            }
                            else{
                                result+="*";
                            }
                        } 
                    }
                    // if(num%2 == 1){
                    //     if(i == (num-1)/2){
                    //         console.log(result);
                    //         result="";
                    //         continue;
                    //     }
                    // }
                    console.log(result);
                    result="";
                }
                
                
                //EX_13

                var num_line = 5;
                var stars = "*"; //star*2 
                for(var i = 0 ; i < num_line ; i++){
                    console.log(stars+"<br>");
                    stars+="**";
                }
            


                //EX_14

                var num_line = 9;
                var sp = "";result ="";
                for(var i = 0;i < num_line ; i++){
                    for(var j = 1;j < num_line-i;j++){
                        sp+=" ";
                    }
                    result += 1+i;
                    console.log(sp+result);
                    sp = "";
                }

                //EX_15

                var v1 = [1,1,2,3,5,5,1,6,7,1,5,1,5,9,5,9,5,9,5,9,5,9,1,100];
                var v2 = [];
                var dep = 0;
                for(var j = 0;j < v1.length*2;j++){
                    for(var i = 0;i < v1.length;i++){
                        var result = (v1[i] % 2);  
                        if(result == 1){
                            dep = v1[i];
                            v1[i] = v1[v1.length-1];
                            v1[v1.length-1] = dep;
                            v2.push(v1[v1.length-1]);
                            v1.pop();
                        }
                    }
                }
                document.write("list_1 : "+v1+"<br>");
                document.write("list_2 : "+v2.join('+')); //join('seperator'); << seperatore methode



                //EX_16 METHODE ADNANE
                
                var list_1 = [1,5,1,2,4,2,5,6,3,2,1,5,2,4,5,1,2]; // >> 1,5,2,4,6,3 
                var list_2 = [];
                var boll = false;
                for(var i = 0;i < list_1.length;i++){
                    for(var k = 0;k < list_2.length; k++){
                        if(list_1[i] == list_2[k]){
                            boll = true;
                            break;
                        }
                        else{
                            boll = false;
                            continue;
                        }
                    }
                    if(boll == false){
                        list_2.push(list_1[i]);
                    }
                }
                document.write(list_1+"<br>");
                document.write(list_2);

                //EX_16 METHODE me
                
                var list_1 = "hello world"; //>> 1,5,2,4,6,3 
                var list_2 = "";
                var con = 0;

                for(var i = 0;i < list_1.length;i++){
                    for(var j = 0;j < list_2.length;j++){
                        if(list_1[i] == list_2[j]){
                            con++;
                            continue;
                        }
                    }
                    if(con == 0){
                        list_2+=list_1[i];
                    }
                    con = 0;
                }
                document.write(list_1+"<br>"+list_2);
                
                //EX_17
                let list = [1,55,2,6,100,-5,0,9652,-55,0,221,25,625,-6,52,8,0.3,226.5,-65,-47,9,62,-8,-1000,-512,-85.6,541,336]; 
                let stock;
                for(let x = 0;x < (list.length/2);x++){
                    for(let i = 0;i < list.length;i++){
                        if(list[i] < list[i+1]){
                            stock = list[i];
                            list[i] = list[i+1];
                            list[i+1] = stock;
                        }
                        else if(list[i] > list[i+1] || list[i] == list[i+1]){
                            continue;
                        }
                        // console.log("1:> "+list);
                    }
                    for(let x = list.length-1;x >= 0;x--){
                        if(list[x] > list[x-1]){
                            stock = list[x];
                            list[x] = list[x-1];
                            list[x-1] = stock;
                        }
                        else if(list[x] < list[x-1] || list[x] == list[x-1]){
                            continue;
                        }
                        // console.log("2:> "+list); 
                    }
                }
                console.log("RESULT : "+list);
                

                //Ex_18
                let word = "hello world";let result = ""; // variable declaration 
                for(let i = 0;i < word.length;i++){         // loop for
                    if((i % 2) == 1){                           //condition if
                        result+=word[i].toUpperCase();
                    }
                    else if((i % 2) == 0){                      //condition else if
                        result+=word[i].toLowerCase();
                    }
                }
                document.write(result);                         //display result

                


                //Ex_19
                let myAdmins = ["Ahmed","Osama","Sayed","Stop","Samer"]; //LIST 1
                let myEmployees = ["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia","Anwar"]; //LIST 2
                let conteur = 0;
                let num = 0;
                let calc = () =>{
                    for(let i = 0;i<myAdmins.length;i++){
                        if(myAdmins[i] == "Stop"){
                            break;
                        }
                        else{
                            conteur++;
                        }
                    }
                    document.write("We have "+conteur+" Admins<br><br>");
                    for(let x = 0;x < myAdmins.length;x++){
                        if(myAdmins[x] == "Stop"){
                            break;
                        }
                        document.write("The admin for Team "+(x+1)+" is "+myAdmins[x]+"<br>");
                        document.write("Team Members : <br>");
                        for(let y = 0;y<myEmployees.length;y++){
                            if(myAdmins[x][0] == myEmployees[y][0]){  //Character comparison 
                                num++;
                                document.write("- "+num+" "+myEmployees[y]+"<br>");
                            }
                        }
                        num=0;
                        document.write("<br>");
                    }
                }
                calc();

              // 3 ways to sort an array 
                //==========================
                
                    //Method_1

                let list = [100,1,2252,3,42,-5,65,76,6.81,96];
                let conteur = 0,statu = false,stock=0;
                for(let i =1;i<list.length;i++){
                    for(let y = 0;y<list.length;y++){
                        if(list[y] < list[y+1]){
                            conteur++;
                            console.log(""+conteur);
                        }
                        if(conteur == list.length-1){
                            statu = true;
                            break;
                        }
                        else if(list[y] > list[y+1]){
                            stock = y;
                            break;
                        }
                    } 
                    conteur = 0;
                    if(statu==true){break;}
                    for(let x = stock;x<list.length-1;x++){
                        if(list[x] > list[x+1]){
                            [list[x+1] , list[x]]=[list[x] , list[x+1]];
                        }
                    }
                }
                console.log(list);


                    //Method_2

                let list = [5,9,1,5,9,1];
                for(let i = 0;i<list.length;i++){
                    for(let x = i+1;x<list.length;x++){
                        if(list[i] > list[x]){
                            [list[x] , list[i]] = [list[i] , list[x]];
                        }
                    }
                }
                console.log(list);


                    //Method_3

                let list = [5,9,1,5,9,1];               
                for(var i = 1; i<list.length ; i++){
                    for(var x =0;x<list.length-i;x++){
                        if(list[x] > list[x+1]){
                            [list[x+1] , list[x]] = [list[x] , list[x+1]];
                        }
                    }
                }
                console.log(list);


                //===Exercice 1 & 2===

                
                //===Exercice 1
                let str = "hello world";
                let list1 = [];
                let conteur = 1;
                for(let i =0;i<str.length;i++){
                    list1[i] = str[i]            
                }
                console.log(list1);
                for(let x =0;x<list1.length;x++){
                    for(let y = x+1;y<list1.length;y++){
                        if(list1[x] == list1[y]){
                            conteur++;
                            list1[y]="";
                        }
                    }
                    if(list1[x] == " " || list1[x] == ""){conteur = 1; continue;}
                    console.log(list1[x] +" : "+ conteur);
                    conteur = 1;
                }
                console.log(list1);


                //===Exercice 2==="
                
                str="";
                for(let w = 0;w<list1.length;w++){
                    if(list1[w] != ""){
                        str+=list1[w];
                    }
                }
                console.log(str);



                //exercice remove from array not overwrite
                
                var arr = [1,3,3,1,1,3,3,3,3,3,3,8,3,1,1,1,9,8,1,3];

                for(let i = 0;i < arr.length;i++){
                    for(let x= i+1;x < arr.length;x++){
                        if(arr[i] == arr[x]){
                            if(x == arr.length-1){
                                arr.pop();
                                continue;
                            }
                            for(let y = x;y < arr.length-1;y++){ 
                                [arr[y+1],arr[y]]=[arr[y],arr[y+1]];
                            }
                            arr.pop();
                            x=x-1;
                        }
                    }
                }
                console.log(arr);


                // Creat Method Delete case of arrays  Delete(list,case'index+1');

                let arr = [1,5,4,5,5,6,2,6,2,5,1,4,2,58,8,5,5,1,"sd",4]
                function Delete(list,index){
                    --index;
                    if(index >= list.length || index < 0){
                        return `Enter Number entie Between ${1} & ${list.length}`;
                    }
                    else{
                        for(let y = index;y < list.length-1;y++){ 
                            [list[y+1],list[y]]=[list[y],list[y+1]];
                        }
                        list.pop();
                        return list;
                    }
                }
                console.log(Delete(arr/*array*/,2/*case*/));


                //Exercice__1

                let arr = [1,2,3,3,3,3,3,2,2,2,1,2,2,2,2,-2,"2",2,2,2,,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2];             
                let arr1 = [];
                let conteur = 1,most = 0,con=0;
                let n1 = false;
                
                for(let i =0;i<arr.length;i++){
                    for(let x = i+1;x<arr.length;x++){   
                        for(let y =0;y<arr1.length;y++){
                            if(i == arr1[y]){
                                n1 = true;
                                break;
                            }
                        }
                        if(n1 == true){
                            n1 == false;
                            continue;
                        }
                        if(arr[i] === arr[x]){
                            conteur++;
                            arr1.push(x);
                        }
                    }
                    if(con < conteur){
                        most = arr[i];
                        con = conteur;
                    }
                    conteur=1;
                }
                console.log(`The most repeated number is ${most} Repeat ${con} times`);


                //Exercice__2

                let arr = [1,2,3,3,3,3,3,2,2,2,1,2,2,2,2,2,2,2,3,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2];              
                let arr1 = [];
                let conteur = 1;
                let n1 = false;
                
                for(let i = 0;i < arr.length;i++){
                    for(let y =0;y<arr1.length;y++){
                        if(i == arr1[y]){
                            n1 = true;
                            break;
                        }
                    }
                    if(n1 == true){
                        n1 = false;
                        continue;
                    }
                    for(let x = i+1;x<arr.length;x++){   
                        if(arr[i] === arr[x]){
                            conteur++;
                            arr1.push(x);                      //arr1 = [1,]
                        }
                    }
                    console.log(`number ${arr[i]} Repeat ${conteur} times`);
                    conteur=1;
                }

                
                //Exercice__3

                let arr = [1,2,3,3,3,3,3,3,1,2,"x",4,4];
                let conteur = 0;
                let arr1 = [];
                let arr2 = [];
                let n1 = false;

                for(let i = 0;i < arr.length;i++){
                    for(let y =0;y<arr2.length;y++){
                        if(i == arr2[y]){
                            n1 = true;
                            break;
                        }
                    }
                    if(n1 == true){
                        n1 = false;
                        continue;
                    }
                    for(let x = i+1;x<arr.length;x++){   
                        if(arr[i] === arr[x]){
                            arr2.push(x);
                            conteur++;
                        }
                    }
                    if(conteur == 0){
                        arr1.push(arr[i]);  
                    }
                    conteur = 0;
                }
                console.log(arr1);


//Exercice__4

                //method_1
                let list = [2,5,1,6,9,8,4,2,5,6,3,2,5,4,12,5,8,6,5];
                console.log(list);
                for(let i = 0;i<list.length;i++){
                    for(let x = i+1;x<list.length;x++){
                        if(list[i] > list[x]){
                            [list[x],list[i]]=[list[i],list[x]];
                        }
                    }
                }
                console.log("The first largest number is : "+list[list.length-1]+" & the second is : "+list[list.length-2]);
                
                //method_2

                let list = [1,5,52,625,252,45,20,3,9];
                let max = 0;// max != no list[0]
                let index = 0,conteur=0; 
                let arr = [];
                let arr1 = [];
                let n1 = false;
                for(let i = 0;i <= list.length;i++){
                    for(let x = 0;x < arr1.length;x=x+1){
                        if(i == arr1[x]){
                            n1 = true;
                            break;
                        }
                    }
                    if(n1 == true){
                        n1 = false;
                        continue;
                    }
                    if(list[i] > max){
                        max = list[i];
                        index = i;  
                    }
                    if(i == list.length){
                        conteur++;
                        arr.push(max);
                        arr1.push(index);
                        max = 0; 
                        index = 0; 
                        if(conteur == list.length){ // conteur == number of line  // 
                            break;
                        }
                        i=-1;
                    }
                    // if(list[i] > max){
                    //     index = i;
                    //     max = list[i];
                    // }
                    // if(max == list[list.length-1]){
                    //     console.log("hello");
                    //     arr.push(max);
                    //     arr.push(index);
                    //     break;
                    // }
                    // if(i == (list.length-t)){
                    //     conteur++;
                    //     arr.push(max);
                    //     arr.push(index);
                    //     max = 0;
                    //     index = 0;
                    //     if(conteur > 1){
                    //         break;
                    //     }
                    //     i = -1;                    
                    // }
                }
                for(let t = 0;t<2;t++){
                    console.log("The "+(t+1)+" largest number is "+arr[t]);
                }
                console.log("=".repeat(10*3));
                for(let t = arr.length-1;t>=arr.length-2;t--){
                    console.log("The "+((t-arr.length)*-1)+" smallest number is "+arr[t]);
                }
                
                //Exercice__5

                let list = ["abc","ab","abcd","a","abcde","abc"];
                let max = 0; 
                for(let i = 0; i < list.length;i++){
                    if(max < list[i].length){
                        result = list[i]; 
                        max = list[i].length;
                    }
                }
                console.log(result);

                //Exercice__6

                let num_line = 5;
                let result="";
                for(let i = 1;i <= num_line;i++){
                    if(i == 1 || i == num_line){
                        for(let x = 1;x <= i;x++){
                            result+=x+"";    
                        }
                        console.log(result);
                        result="";
                        continue;
                    }
                    else{
                        for(let y = 1;y <= i;y++){ //2
                            if(y == 1 || y == i){
                                result+=y+"";
                            }    
                            else{result+=" ";}

                        }
                        console.log(result);
                        result="";
                    }
                }

                //Exercice__7
                for(var i=1 ; i<=5 ; i++){
                    for(var j=1 ; j<=i ; j++){
                        document.write( i + " " )
                        
                    }
                    document.write( "<br>")
                }

                //Exercice__8

                for(var i=4 ; i>=1 ; i--){
                    for(var j=1 ; j<=i ; j++){
                        document.write( i + " " )
                        
                    }
                    document.write( "<br>")
                }

                //Pascal's triangle

                var arr_1 = [],arr_2 = [];
                var result = 0;
                function tp(num_line){
                    document.write("Pascal's triangle :<br>");
                    for(var i = 1;i <= num_line;i++){                                
                        for(var j = 0;j < i;j++){            
                            if(j == 0 || j == (i-1)){         
                                arr_2.push(1);              
                                continue;
                            }
                            result = arr_1[j]+arr_1[(j-1)];
                            arr_2.push(result);
                        }
                        if((i >= 2)){
                            // console.log(i);                             
                            arr_1.splice(0,arr_1.length);                       
                            for(var y = 0;y<arr_2.length;y++){                      
                                arr_1.push(arr_2[y]);                                   
                            }
                            document.write(arr_2+"<br>");                    
                            arr_2.splice(0,arr_2.length);                         
                            continue;    
                        } 
                        document.write(arr_2+"<br>");                  
                        arr_2.splice(0,arr_2.length);                   
                    }
                }
                tp(10);



  //method delete();
    // let list = [1,5,5,6,9,8]; //short of (2) 
    let list = new Array(1,5,5,6,9,8); ////////  <=<=(2)
    Array.prototype.Delete = function(index){
        let arr = this;
        // console.log(this instanceof Array);
        if(index>list.length || index < 1){
            return `Erorr =>=> number of case  ==  1 ~ ${arr.length}`;
        }
        else{
            --index;
            if(index >= arr.length || index < 0){
                return `Enter Number entie Between ${1} & ${arr.length}`;
            }
            else{
                for(let y = index;y < arr.length-1;y++){ 
                    [arr[y+1],arr[y]]=[arr[y],arr[y+1]];
                }
                arr.pop();
                return arr;
            }
        }
    }
    console.log(list.Delete(4));

//method sort array 'number'
    let list = [-9,0,3,4,9,2,6,5];
    Array.prototype.sortarray = function(){
        let arr = this;
        console.log(arr);
        for(let i = 0;i < arr.length-1;i++){
            for(let j = 0;j < arr.length-i;j++){
                if(arr[j] > arr[j+1]){
                    [arr[j+1],arr[j]] = [arr[j],arr[j+1]]; 
                }
            }   
        }
        return arr;
    }
    console.log(list.sortarray());







    //=== convert array multidimensional to array one dimension ===

    let list0 = ["mohamed",["amine","youssef"],["isam",["khalid","adnan"]],"abdellah",["med",["med1",["hy",[99,true]]]]];
    let list1 = [];
    let list2 = [];
    let result = "";
    for(i = 0;i<list0.length;i++){
        if(!Array.isArray(list0[i])){
            list2[list2.length] = list0[i];
        }
        else{
            list1 = list0[i];
            for(let j = 0;j<list1.length;j++){
                if(Array.isArray(list1[j])){
                    list1=list1[j];
                    j=-1;
                    continue;
                }
                list2[list2.length] = list1[j]; 
            }
        }
    }
    console.log(list2);



//Exercise without methods CharSearch
let list0 = [["mohamed"],["amine","youssef",'t'],["isam",["khal1isd","hamid"]],"abdellah",["med",["meddt","medt",["hy"]]]]; 
    function SearchChar(arr,char){
        let list1 = [];
        let list2 = [];
        let conteur = 0;
        let result = "";
        let bool = false;
        r = 0;
        for(i = 0;i<arr.length;i++){
            if(!(arr[i] instanceof Array)){
                list2[list2.length] = arr[i];    //push();
            }
            else{
                list1 = arr[i];
                for(let j = 0;j<list1.length;j++){
                    if(list1[j] instanceof Array){
                        list1=list1[j];
                        j=-1;
                        continue;
                    }
                    list2[list2.length] = list1[j]; 
                }
            }
        }
        for(let x = 0;x<list2.length;x++){                                    
            for(let z = 0;z<list2[x].length;z++){                                   
                if(list2[x][z] === char[r]){           
                    for(let w =(z+1);w < z+char.length;w++){  
                        r++;
                        if(list2[x][w] === char[r]){
                            conteur++;
                        }
                    }
                    if(conteur===char.length-1){ 
                        result+=list2[x]+" "
                        r=0;
                        conteur=0;
                        bool=true;
                        break;
                    }
                    else{r=0;conteur=0;continue;}
                }
            }
            if(bool===true){
                bool=false;
                r=0;
                conteur=0;
            }
        }
        if(result === ""){
            result = "Error *-_-* => => char paramter";
        }
        return "Result : "+result;
    }
    console.log(SearchChar(list0,"hy")); 


                                                                                      //method push();
    let list = [1,5,6,9,1];
    console.log(list);
    
    Array.prototype.PUSH = function(value){
        let arr = this;
        arr[arr.length]=value;
    }
    list.PUSH(55);
    console.log(list);



                                                                                        //method pop();

    let list = [1,5,6,9,4];
    console.log(list);
    Array.prototype.POP = function(){
            //method1
        // let arr = this;
        // delete arr[arr.length-1];
        // if(arr[arr.length-1] === undefined){
        //     arr.length=arr.length-1;
        // }
            //method2
        let arr = this;
        let arr1 = [];
        for(let i = 0;i<arr.length-1;i++){
            arr1[i] = arr[i];
        }
        arr.length=arr1.length;
    }
    list.POP();
    console.log(list);


                                                                                          // method remove from array
    
    var ar = [1, 2, 3, 4, 5, 6];
    ar.length = ar.length-1; // set length to remove elements
    console.log( ar ); // [1, 2, 3, 4]


                                                                                            //method unshift();
    let list = [1,2,3,4];
    console.log(list);
    Array.prototype.UNSHIFT = function(value){
        let arr = this;
        for(let i = 0;i<arr.length;i++){
            [arr[arr.length-i],arr[arr.length-(i+1)]]=[arr[arr.length-(i+1)],arr[arr.length-i]];
        }
        arr[0]=value;
    }
    list.UNSHIFT(0);
    console.log(list);
    

                                                                                        
                                                                                            //method shift();
    let list = [1,2,3,4];
    console.log(list);
    Array.prototype.SHIFT = function(){
        let arr = this;
        for(let i = 0;i<arr.length-1;i++){
            [arr[i+1],arr[i]]=[arr[i],arr[i+1]];
        }
        arr.length=arr.length-1;
    }
    list.SHIFT();
    console.log(list);



  /*Exercice Prime Numbers - Nombres premiers  */ 
    let num =50;
    let arr2 = [];
    for(let x =3;x<num;x=x+2){
        for(let y=3;y<=(num/x);y=y+2){
        if((x*y) >= 10){
            arr2[arr2.length]=x*y;
        }
        }
    }
    for(let i =0;i<=num;i++){ 
        let conteur =0;
        if(i>1){
            if(i==2){
                console.log(i);
                continue;
            }
            if(i%2==1&&i!=9&&i<10){
                console.log(i);
                continue;
            }
            if(i%2==1 && i>10){
                for(let w=0;w<arr2.length;w++){
                    if(i==arr2[w]){conteur++;break;}
                }
                if(conteur==0){console.log(i);}
            }
        }
    }


  /*upload exercice search*/
  let list_0 = ["food","full","fooil","fikjikl"]; 
    function SearchChar(arr,char){
        let list_0 = arr;
        let conteur = 0;
        let result = "";
        let bool = false;
        r = 0;
        for(let x = 0;x<list_0.length;x++){                                    
            for(let z = 0;z<list_0[x].length;z++){                                   
                if(list_0[x][z] === char[r]){           
                    for(let w =(z+1);w < z+char.length;w++){  
                        r++;
                        if(list_0[x][w] === char[r]){
                            conteur++;
                        }
                    }
                    if(conteur===char.length-1){ 
                        result+=list_0[x]+" "
                        r=0;
                        conteur=0;
                        bool=true;
                        break;
                    }
                    else{  // fhalat kanou 3ndna lea character kytchabho f nafs item  , plus kndirou countinue bax yb9a kychearch fnafs item mykhrjx meno
                        r=0;
                        conteur=0;
                        continue;
                    }
                }
            }
            if(bool===true){
                bool=false;
                r=0;  
                conteur=0;
                //break; <<  fhalat mbrina ri first result 
            }
        }
        if(result === ""){
            result = "Error *-_-* => => char paramter";
        }
        return "Result : "+result;
    }
    console.log(SearchChar(list_0,"ul")); 


/*==========Course========*/

//Exercice CallBack Function && Function Run Itself && Closure Function.
    let result = (function(){
        function add(){
            let num = 0;
            function plus(){
                return num++;
            }
            return plus;
        }
        let result = add();
        return result;
    })();
    function myFunction(){        
        console.log(`Hello Number ${result()}`);
    }
    myFunction();
    myFunction();
    myFunction();
    myFunction();
    myFunction();
    myFunction();


    /*==========Note=============course=============*/

                // possible nstantjo ana had l function 'Iterables' ktkhdm b
                //  function >> Expression or arrow << with function 'call itself' =>=> method_1 
        //method_1
    let dt = (function(){
        let num = 0;
        return function gt(){
            console.log("hello "+num++);
        }
    })();
    dt();
    dt();
    dt();
        //method_2
    function dt(){
        let num = 0;
        function plus(){
            return `Hello ${++num}`;
        }
        console.log("hello");
        return plus;
    };
    let result = dt();
    console.log(result());
    console.log(result());
    console.log(result());
/*=====================================*/

//==================================================== exercice Note'<=<='
    //method_1
        function Player(name,age,enrgie){
            let player = Object.create(Player.prototype);
            player.namee=name;
            player.age=age;
            player.enrgie=enrgie;
            return player;
        }
        Player.prototype.run=function(value=10){
            this.enrgie-=value;
            console.log(this.enrgie);
        }
        Player.prototype.kick=function(value=3){
            this.enrgie-=value;
            console.log(this.enrgie);
        }
        Player.prototype.jump=function(value=5){
            this.enrgie-=value;
            console.log(this.enrgie);
        }
        let person0 = Player("mohamed",24,300);
        let person1 = Player("adnan",10,200); 
        let person2 = Player("imad",17,154);
        // console.log(person1.namee);
        console.log(person0.kick());
        console.log(person0.kick());
        console.log(person0.kick());
        console.log(person0.namee);
    //method_2
        function Player(name,age,enrgie){
            // let player = Object.create(Player.prototype);
            this.name=name;
            this.age=age;
            this.enrgie=enrgie;
            this.run = function(value=10){
                let result = ((this.enrgie-value) >= 5) && ((this.enrgie-value) <=10) ? "Erorr replace player!" : this.enrgie-=value;
                return result;
            }
            this.jump = function(value=3){
                let result = ((this.enrgie-value) >= 5) && ((this.enrgie-value) <=10) ? "Erorr replace player!" : this.enrgie-=value;
                return result;
            }
            this.kick = function(value=5){
                let result = ((this.enrgie-value) >= 5) && ((this.enrgie-value) <=10) ? "Erorr replace player! "+this.name : this.enrgie-=value;

                return result;
            }
        }
        let person0 =new Player("mohamed",24,30);
        let person1 =new Player("adnan",10,20); 
        let person2 =new Player("imad",17,15);
        console.log(person0.kick());
        console.log(person0.kick());
        console.log(person0.kick());
        console.log(person0.name);
/*=====================================*/
//Note

function user(name,age){
        this.name=name;
        this.age=age;
        
        if((this instanceof user) === false){
            throw new Error(`the Object ${this.name} is not instance of ${user.name} Constructor use the 'new' keyword !`); //Erorr 
        }
        else{
            this.info = function(){
                console.log(`your name is ${this.name} and your age is ${this.age}`);
            };
        }
        
    }
    let perosn0 = new user("mohamed",24);
    perosn0.info();
    console.log(perosn0 instanceof perosn0.constructor /*or user*/ );  // true
    console.log(perosn0.constructor === user);  // true
    let person1 = user("adnane",11);  // if we don't use the 'new' keyword !
    console.log(perosn1 instanceof perosn1.constructor /*or user*/ );  // false
    console.log(perosn1.constructor === user); // false
    perosn1.info(); //Erorr


    //Note          'number of Object we Creat from class '
    class user{
        static conteur = 0
        constructor(name){
            this.name = name;
            if(this instanceof user !== true){    //min mknkhdmux b new or kn9ulo l user ydir new bax k instance mn function constructor
                throw new Error("most use new keyword in '"+this.name+"' Object");
            }
            user.conteur++;
            //or
            // if(this.constructor !== user){       //min mknkhdmux b new or kn9ulo l user ydir new bax k instance mn function constructor
            //     throw new Error("most use new keyword in '"+this.name+"' Object");
            // }
        }
    }
    let us1 =new user("mohamed");
    let us2 =new user("khalid");
    console.log(user.conteur); // number of Object we Creat from class User // user.conteur == 2

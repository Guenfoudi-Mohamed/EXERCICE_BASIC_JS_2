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

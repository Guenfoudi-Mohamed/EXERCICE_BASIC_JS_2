	//EXE_1

                /*
                var v1 = "guenfoudi mohamed",v2="";
                for(var i = v1.length-1;i >= 0;i--){
                    v2 += v1[i];
                }
                document.write("word >> "+v1+"<br>");
                document.write("result >> "+v2);
                */


             	//EXE_2

                //please enter a number in >> v1 
                /*var v1 = -3,result = 1;
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
                }*/
                


               //EXE_3

                //Perimeter of the rectangle
                //please enter the width 
                /*var width = 5;
                //please enter the height
                var height = 7;
                var result;
                result = width*2+height*2;
                document.write("The Perimeter of the rectangle is : "+result+" And the area is : ",width*height);*/



                //EXE_4

                /*var hours,minutes,result;
                // please enter the value of hour 
                hours = 0.5;
                // please enter the value of minut
                minutes = 0.5;
                //resulte
                result = (hours*3600)+(minutes*60);
                document.write("Number of seconds : "+result+" SECONDS");
                */



                //EXE_5

                /*var Name = "mohamed guenfoudi",result_name="";
                for(var i = Name.length-3;i < Name.length;i++){
                    result_name += Name[i];
                    // j++;
                    // if(j == 3){
                    //     break;
                    // }
                }
                document.write("The last 3 letters are : "+result_name);
                */



                //EXE_6

                //please enter a word or sentence
                /*var v1 = "guenfoudimohamed",value_word="";
                var result;
                result = v1.length / 2;
                for(var i = 0;i < result;i++){
                    value_word += v1[i];
                }
                document.write("the result numerique is : "+result+" ,and the value of word or sentence is : "+value_word);
                */



                //EXE_7

                /*var v1 = "GUENFOUDI" , v2= "MOHAMED",result = "";
                for(var i = 1;i <= v1.length-1;i++){
                    result += v1[i];
                }

                result += "&";
                
                for(var i = 1;i <= v2.length-1;i++){
                    result += v2[i];
                }
                document.write(v1 +"_"+ v2);
                document.write("<br>The somme of the two words is : "+result);
                */



                //EXE_8

                              

                /*
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
                */


                
                //EXE_9
/*
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
                }*/
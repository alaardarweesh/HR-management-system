'use strict';
const allUsers=[]

function Employee(identity,name,department,level,image){
    this.identity=identity;
    this.name=name;
    this.department=department;
    this.level=level;
    this.image=image;


   
    allUsers.push(this);
   }
    




    const ghazi= new Employee("1000 ","Ghazi Samer ","Administration ","Senior ","assits/Ghazi.jpg")
    const lana= new Employee("1001 ","Lana Ali	","Finance ","Senior ","assits/Lana.jpg")
    const tamara= new Employee("1002 ","Tamara Ayoub ","Marketing ","Senior ","assits/Tamara.jpg")
    const safi= new Employee("1003 ","Safi Walid ","Administration ","Mid-Senior ","assits/Safi.jpg")
    const omar= new Employee("1004 ","Omar Zaid	","Development ","Senior ","assits/Omar.jpg")
    const rana= new Employee("1005 ","Rana Saleh ","Development ","JUNIOR     ","assits/Rana.jpg")
    const hadi= new Employee("1006 ","Hadi Ahmad ","Finance ","Mid-Senior ", "assits/Ghazi.jpg")

      
   

    Employee.prototype.salary=function(){

       
        
                    
        if (this.level.trim().toLowerCase()=="junior"){
           this.salary = randomIntFromInterval(500, 1000)
            
          

        }
        else if(this.level.trim().toLowerCase()=="mid-senior"){
           this.salary = randomIntFromInterval(1000, 1500)
         
        }
        else(this.level.trim().toLowerCase()=="senior")
        {
            this.salary = randomIntFromInterval(1500, 2000) 
         
        }
         
      
    }


    
  
  
Employee.prototype.addInfo=function(){

    let divEl=document.getElementById("hai");
    const lele=divEl.textContent ="Name:   "+this.name+"      "+"-ID:"+this.identity+"-Department:"+this.department+"-level:"+this.level+" &nbsp; &nbsp;   -"+this.salary+"JOD&nbsp; &nbsp; <br><br>"

 const image= document.createElement("img")
 image.setAttribute("src",this.image);
 divEl.appendChild(image);

 let divEl2=document.getElementById("hi");
 const lele2=divEl.textContent ="Name:   "+this.name+"      "+"-ID:"+this.identity+"-Department:"+this.department+"-level:"+this.level+" &nbsp; &nbsp;   -"+this.salary+"JOD&nbsp; &nbsp; <br><br>"

const image2= document.createElement("img2")
image.setAttribute("src",this.image);
divEl.appendChild(image);

      
    const pEl=document.createElement("p");
    pEl.textContent="Name:   "+this.image+this.name+"      "+"-ID:"+this.identity+"-Department:"+this.department+"-level:"+this.level+" &nbsp; &nbsp;   -"+this.salary+"JOD"+ this.image
    divEl.appendChild(pEl)
  console.log(divEl)
  
} 
console.log(this.image)


 for (var i=0; i<allUsers.length;i++){
    allUsers[i].salary();
    allUsers[i].addInfo();
    

 }


function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
    
  }
  //         imgGhazi.src="https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Ghazi.jpg?raw=true"
//         divEl.appendChild(imgGhazi);
//     }
    
// else if(this.name.toLowerCase.trim()=="lana ali"){
//     const imgLana=document.createElement("img")
//     imgLana.src="https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Lana.jpg?raw=true"
//     divEl.appendChild(imgLana);
// }
    // Employee.prototype.addimg=function(){
//     if(this.name.toLowerCase.trim()=="Ghazi Samer"){
//         this.image=
//     }
// }
    // const imgEl=document.createElement("img")
    // imgEl.src="https://physicsworld.com/wp-content/uploads/2019/05/Sunshine.jpg";
    // imgEl.alt="sun"
    // const divEl=document.getElementsByTagName("div")
    
    // Employee.prototype.image=function(){
    //     if(this.name.trim().toLowerCase="Ghazi Samer"){
            
            
    //     }
    // }
        // divEl.appendChild(lele)
//     if(this.name.toLowerCase.trim()=="ghazi samer"){
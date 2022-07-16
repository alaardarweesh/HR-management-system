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
    




    const ghazi= new Employee("1000 ","Ghazi Samer ","Administration ","Senior ","./assits/Ghazi.jpg")
    const lana= new Employee("1001 ","Lana Ali	","Finance ","Senior ","./assits/Lana.jpg")
    const tamara= new Employee("1002 ","Tamara Ayoub ","Marketing ","Senior ","./assits/Tamara.jpg")
    const safi= new Employee("1003 ","Safi Walid ","Administration ","Mid-Senior ","./assits/Safi.jpg")
    const omar= new Employee("1004 ","Omar Zaid	","Development ","Senior ","./assits/Omar.jpg")
    const rana= new Employee("1005 ","Rana Saleh ","Development ","JUNIOR     ","./assits/Rana.jpg")
    const hadi= new Employee("1006 ","Hadi Ahmad ","Finance ","Mid-Senior ", "./assits/Ghazi.jpg")

      
   

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

    let div  = document.getElementById('container');

    let divInner= document.createElement('div');
    
    div.setAttribute("class","container");
    divInner.setAttribute("class","innerDivstyle");

    const imageinner= document.createElement("img")

    imageinner.setAttribute("src",this.image);
    imageinner.setAttribute("class","img");

    divInner.appendChild(imageinner);

    let b  = document.createElement('br');
    divInner.appendChild(b);
    
    
    let nameEmp  = document.createElement('span');
    
    nameEmp = document.createTextNode(`Name : ${this.name}`);  
   
    let br1  = document.createElement('br');
    divInner.appendChild(nameEmp);
    divInner.appendChild(br1);

    let idenEmp  = document.createElement('span');
    idenEmp = document.createTextNode(`Id : ${this.identity}`);    
    let br2  = document.createElement('br');
    divInner.appendChild(idenEmp);
    divInner.appendChild(br2);

    
    let levelEmp  = document.createElement('span');
    levelEmp = document.createTextNode(`Level : ${this.level}`);    
    let br3  = document.createElement('br');
    divInner.appendChild(levelEmp);
    divInner.appendChild(br3);


  
    div.appendChild(divInner);



}

    

 for (var i=0; i<allUsers.length;i++){
    allUsers[i].salary();
    allUsers[i].addInfo();
    
 }



function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
    
  }
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
    

console.log(allUsers)


    const ghazi= new Employee("1000 ","Ghazi Samer ","Administration ","Senior ")
    const lana= new Employee("1001 ","Lana Ali	","Finance ","Senior ")
    const tamara= new Employee("1002 ","Tamara Ayoub ","Marketing ","Senior ")
    const safi= new Employee("1003 ","Safi Walid ","Administration ","Mid-Senior ")
    const omar= new Employee("1004 ","Omar Zaid	","Development ","Senior ")
    const rana= new Employee("1005 ","Rana Saleh ","Development ","JUNIOR     ")
    const hadi= new Employee("1006 ","Hadi Ahmad ","Finance ","Mid-Senior ")

      
   

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
    document.write("Emplyee Name:   "+this.name+"      "," &nbsp; &nbsp;   ,Employee Salary:   "+this.salary+"JOD&nbsp; &nbsp; <br><br>")
} 

 for (var i=0; i<allUsers.length;i++){
    allUsers[i].salary();
    allUsers[i].addInfo();
 }
// 

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
    
  }
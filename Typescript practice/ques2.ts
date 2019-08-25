class Demo {
     n :number= 9;
      check(){
            if(this.n==9){
            let n:number= 10;
                console.log(this.n);
            }
      }
    } 
let demoObject=new Demo();
demoObject.check();


// this.n refers to the class property.
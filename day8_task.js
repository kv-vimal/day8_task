var request = new XMLHttpRequest();
request.open('GET',"https://restcountries.com/v2/all",true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    console.log(data)
   
   
//1.Get all the countries from Asia continent /region using Filter function
    var rdata =data.filter((element)=>element.region==="Asia")
    console.log(rdata);
//2.Get all the countries with a population of less than 2 lakhs using Filter function
     var rdata1=data.filter((element)=>element.population<200000)
     console.log(rdata1)
//3.Print the country which uses US Dollars as currency.
    
    var rdata2=data.filter((element)=>{
        for(let i in element.currencies){
          if(element.currencies[i].code==="USD")  
          return true;
        }
        
    })
    console.log(rdata2);
    
//4.Print the total population of countries using reduce function

 var rdata3 = data.reduce((acc,ele)=>acc+ele.population,0)
 console.log(rdata3)


    
}
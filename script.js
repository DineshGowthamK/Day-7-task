//Question a : Get all the countries from Asia continent /region using Filter function

const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function(){
    const data = request.response;
    const result = JSON.parse(data);
    const res = result.filter((ele)=>{
        if(ele.region==="Asia"){
            console.log(ele.name.common);
        }
    });
    // const res6 = result.reduce((acc,cv)=>{
    //     return acc + cv.population;
    // },0);
    // console.log(res6);
}

//Question b : Get all the countries with a population of less than 2 lakhs using Filter function

const request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true);
request1.send();
request1.onload = function(){
    const data1 = request1.response;
    const result1 = JSON.parse(data1);
    const res1 = result1.filter((ele)=>{
        if(ele.population<= 200000){
            console.log(ele.name.common);
        }
    });
}

//Question c : Print the following details name, capital, flag, using forEach function

const request3 = new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v3.1/all",true);
request3.send();
request3.onload = function(){
    const data3 = request3.response;
    const result3 = JSON.parse(data3);
    const res3 = result3.forEach((ele)=>console.log(`Name : ${ele.name.common}, Capital : ${ele.capital}, Flag : ${ele.flags.png}`));
}

//Question d : Print the total population of countries using reduce function

const request4 = new XMLHttpRequest();
request4.open("GET","https://restcountries.com/v3.1/all",true);
request4.send();
request4.onload = function(){
    const data4 = request4.response;
    const result4 = JSON.parse(data4);
    const res4 = result4.reduce((acc,cv)=>{
        return acc + cv.population;
    },0);
    console.log(res4);
}

//Question e : Print the country that uses US dollars as currency.

var request5 = new XMLHttpRequest();
request5.open("GET","https://restcountries.com/v3.1/all",true);
request5.send();
request5.onload = function(){
    const data5 = request5.response;
    const result5 = JSON.parse(data5);
    const res5 = result5.filter((ele)=>{
        if(ele.currencies==="US dollars"){
            console.log(ele.name.common);
        }
    })
    console.log(res5);
}

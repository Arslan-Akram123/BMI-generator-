let form=document.querySelector('form')

form.addEventListener("submit",function(e){
    e.preventDefault();

    let height=parseFloat(document.querySelector("#height").value)
    let weight=parseFloat(document.querySelector("#weight").value)
    let result=document.querySelector("#result")

    if(height=='' || height<0 || isNaN(height)){
        result.innerHTML=  `please give a vaild height ${height}`
    }else if(weight=='' || weight<0 || isNaN(weight)){
        result.innerHTML=  `please give a vaild weight ${weight}`
    }else{
        let bmi=(weight/((height*height)/1000)).toFixed(2)
        result.innerHTML=`<span>${bmi} </span>`   
        // if(bmi<18){
        //     console.log("Under weight = less than 18.6 and heigth is:", bmi)
        // }else if(bmi>18 && bmi<24){
        //     console.log("Normal weight = 18.6 to 24.9 andheigth is:", bmi)
        // }else{
        //     console.log("Overweight = greater than 24.9 and heigth is:", bmi)
        // }
    }
 
   
})
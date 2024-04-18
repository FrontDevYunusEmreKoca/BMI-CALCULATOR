
var calculte =document.getElementById("calculate");
var reset = document.getElementById ("reset")

calculate.onclick = function CalculateBmi (){
  
    var weight = document.querySelector("#inputWeight").value;
  
  
 
    var height = document.querySelector("#inputheight").value;

    var uyari = "Lütfen gerekli alanları doldurunuz!!"

    if (weight == ""){
        document.getElementById("result_text").innerText = uyari;
    }
    else if (height == ""){
        document.getElementById("result_text").innerText = uyari;
    }
    else {
        var calculate_height = height * height ;

   
 
        var result = weight / calculate_height ;
        
    
        document.getElementById("result").innerText = result;
    
        var result_underWieght = "Under Weight";
        var result_Normal = "Normal";
        var result_OverWeight = "Over Weight"
        var result_Obese = "Obese"
        
        if (result < 18.5 ){
            
            document.getElementById("result_text").innerText = result_underWieght;
        }   
        else if (result >=  18.5 && result < 25){
            document.getElementById("result_text").innerText = result_Normal;
        }
        else if (result >=  25 && result < 30){
            document.getElementById("result_text").innerText = result_OverWeight;
        }  
        else {
            document.getElementById("result_text").innerText = result_Obese;
        } 
    
    }

    

  
    
 };

 reset.onclick = function ResetBmi (){
    var weight = document.querySelector("#inputWeight").value = "";
    var height = document.querySelector("#inputheight").value = "";
    // document.getElementById("inputWeight").removeAttribute("placeholder");
    // document.getElementById("inputheight").removeAttribute("placeholder");
    document.getElementById("result_text").innerText = "";
    document.getElementById("result").innerText = "";
 }



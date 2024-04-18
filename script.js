
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
        document.getElementById("result").innerText = result.toFixed(3);
    
        var result_underWieght = "Under Weight";
        var result_Normal = "Normal";
        var result_OverWeight = "Over Weight"
        var result_Obese = "Obese"
        
        if (result < 18.5 ){
            
            document.getElementById("result_text").innerText = result_underWieght;
            document.getElementById("result_text").style.color = "#007bff";
        }   
        else if (result >=  18.5 && result < 25){
            document.getElementById("result_text").innerText = result_Normal;
            document.getElementById("result_text").style.color = "#28a745";
        }
        else if (result >=  25 && result < 30){
            document.getElementById("result_text").innerText = result_OverWeight;
            document.getElementById("result_text").style.color = "#fd7e14";
        }  
        else {
            document.getElementById("result_text").innerText = result_Obese;
            document.getElementById("result_text").style.color = "#dc3545";
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



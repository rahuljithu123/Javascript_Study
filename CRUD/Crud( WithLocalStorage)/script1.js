function validateForm(){
    var name = document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var address=document.getElementById("address").value;
    var email=document.getElementById("email").value;

    if(name==""){
        alert("Name is required")
        return false;
    }

    if (age == "") {
      alert("Age is required");
      return false;
    }

    else if (age<1) {
      alert("Age must not be zero or less than zero");
      return false;
    }

    if (address == "") {
      alert("Address is required");
      return false;
    }

    if(email=""){
        alert("email is required");
        return false;
    }
    // else if(!email.includes("@")){
    //     alert("Invalid email address");
    //     return false;
    // }

    return true;
}
//function to show data from localstorage
function showData(){
    var peopleList;
        if(localStorage.getItem("peopleList")==null){
            peopleList=[];
        }
        else{
            peopleList=JSON.parse(localStorage.getItem("peopleList")) //converting to javascript object;
        }

        var html="";
        peopleList.forEach(function(element,i){
            html+="<tr>";
            html+="<td>"+element.name+"</td>"
            html += "<td>" + element.age + "</td>";
            html += "<td>" + element.address + "</td>";
             html += "<td>" + element.email + "</td>";  
          html +='<td><button onclick="deleteData('+ i+')" class="btn btn-danger">Delete</button><button onclick="updateData('+ i+')" class="btn btn-warning m-2">Edit</button>';
          
        })
    document.querySelector("#crudTable tbody").innerHTML=html;    
}
//Loads all data from local storage when document or page loaded
document.onload=showData();

//function to add data;

function AddData(){
    if(validateForm()==true){
        var name=document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var address = document.getElementById("address").value;
        var email = document.getElementById("email").value;
        var peopleList;
        if (localStorage.getItem("peopleList") == null) {
          peopleList = [];
        } else {
          peopleList = JSON.parse(localStorage.getItem("peopleList")); //converting to javascript object;
        }
      peopleList.push({
        name:name,
        age:age,
        address:address,
        email:email,
      });
      localStorage.setItem("peopleList",JSON.stringify(peopleList));
      showData();
      document.getElementById("name").value="";
       document.getElementById("age").value = "";
        document.getElementById("address").value = "";
         document.getElementById("email").value = "";

    }
}

function deleteData(index){
    var peopleList;
     if (localStorage.getItem("peopleList") == null) {
       peopleList = [];
     } else {
       peopleList = JSON.parse(localStorage.getItem("peopleList")); //converting to javascript object;
     }

     peopleList.splice(index,1);
     localStorage.setItem("peopleList",JSON.stringify(peopleList));
     showData()

}


function updateData(index){
//submit button will hide and update button will show for updating of data in local storage
document.getElementById("Submit").style.display="none"
document.getElementById("Update").style.display = "block";
var peopleList;

if (localStorage.getItem("peopleList") == null) {
  peopleList = [];
} else {
  peopleList = JSON.parse(localStorage.getItem("peopleList")); //converting to javascript object;
}

document.getElementById("name").value=peopleList[index].name;
document.getElementById("age").value=peopleList[index].age;
document.getElementById("address").value=peopleList[index].address;
document.getElementById("email").value=peopleList[index].email;


document.querySelector("#Update").onclick=function(){
    if(validateForm()==true){
        peopleList[index].name = document.getElementById("name").value;
        peopleList[index].age = document.getElementById("age").value;
        peopleList[index].address = document.getElementById("address").value;
        peopleList[index].email = document.getElementById("email").value;

localStorage.setItem("peopleList", JSON.stringify(peopleList));

        showData();

        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("address").value = "";
        document.getElementById("email").value = "";

      //update button will hide  and submit button will show
       document.getElementById("Submit").style.display = "block";
       document.getElementById("Update").style.display = "none";
        



    }
}

}
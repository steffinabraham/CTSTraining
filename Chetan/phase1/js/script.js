function loginAdmin() {
    
    var email = document.adminForm.email.value;
    var password = document.adminForm.password.value;

    if (email!="admin@mod.com"&&password!="1234"){  
        alert("Wrong Credientials");  
        return false;  
      } 
}

function loginUser() {
    
    var email = document.userForm.email.value;
    var password = document.userForm.password.value;

    if (email!="user@mod.com"&&password!="1234"){  
        alert("Wrong Credientials");  
        return false;  
      } 
}

function signupUser() {
    
    var name = document.signupUserForm.name.value;
    var age = document.signupUserForm.age.value;
    var email = document.signupUserForm.email.value;
    var password = document.signupUserForm.password.value;
    var confirm = document.signupUserForm.confirm.value;

    if (name==null || name==""){  
        alert("Name is required");  
        return false;  
      } 
      if(age==null || age==""){  
        alert("Age is required");  
        return false;  
      }
      if(email==null || email==""){
        alert("Email is required");  
        return false; 
      }
      if(password.length<4){  
        alert("Password must be at least 4 characters long");  
        return false;  
        } 
        if(confirm==null||confirm==""){  
            alert("Please enter your Password once again");  
            return false;  
            } 
        if(confirm!=password) {
            alert("Password doesnot match");
            return false;
        }
}

function signupTrainer() {
    
    var name = document.signupTrainerForm.name.value;
    var age = document.signupTrainerForm.age.value;
    var email = document.signupTrainerForm.email.value;
    var password = document.signupTrainerForm.password.value;
    var confirm = document.signupTrainerForm.confirm.value;

    if (name==null || name==""){  
        alert("Name is required");  
        return false;  
      } 
      if(age==null || age==""){  
        alert("Age is required");  
        return false;  
      }
      if(email==null || email==""){
        alert("Email is required");  
        return false; 
      }
      if(password.length<4){  
        alert("Password must be at least 4 characters long");  
        return false;  
        } 
        if(confirm==null||confirm==""){  
            alert("Please enter your Password once again");  
            return false;  
            } 
        if(confirm!=password) {
            alert("Password doesnot match");
            return false;
        }
}


function loginTrainer() {
    
    var email = document.trainerForm.email.value;
    var password = document.trainerForm.password.value;

    if (email!="trainer@mod.com"&&password!="1234"){  
        alert("Wrong Credientials");  
        return false;  
      } 
}
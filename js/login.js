// class Login{
//     constructor(){
//         this.url = "http://www.icodeilife.cn/ctrl/login.php";
//         this.btn = $("#btn");
//         this.user = $("#txt");
//         this.pass = $("#pass");
//         this.span = $("span");

//         this.init()
//     }
//     init(){
//         var that = this;
//         this.btn.click(function(){
//             that.load()
//         })
//     }
//     load(){
//         var that = this;
//         $.ajax({
//             url:this.url,
//             data:{
//                 user:this.user.val(),
//                 pass:this.pass.val()
//             },
//             success:function(res){
//                 switch(res){
//                     case "0":
//                         that.span.html("用户名密码不符");break;
//                     case "1":
//                         that.span.html("请重新登陆");break;
//                     default:
//                         that.btn.html("登录成功，正在跳转");
//                         that.res = JSON.parse(res);
//                         that.display()
//                 }
//             },
//             beforeSend:function(){
//                 // that.span.html("<img src='loading.gif'>")
//             }
//         })
//     }
//     display(){
//         location.href="index1.html";
//         that.setcookie();
//     }
//    setcookie(){
//     this.logincookie=getCookie("locookie")
//     console.log(123)
//         this.logincookie=[{
//             id:this.user.val(),
//             pass:this.pass.val()
//         }]
   
//     console.log(this.logincookie)
//     setCookie("locookie",JSON.stringify(this.logincookie))
//    } 
// }


// new Login()


function Login(){
    this.txt=document.querySelector("#txt");
    this.pass=document.querySelector("#pass");
    this.btn=document.querySelector("#btn");
    this.span=document.querySelector(".formcircle span")
    this.addeve();
    this.teloff=this.passoff=false;
}
Login.prototype.addeve=function(){
  
        this.getcookie();
  
}

Login.prototype.getcookie=function(){
    
    this.regcookie=getCookie("reg")!=""?JSON.parse(getCookie("reg")):[];
    // console.log(typeof this.regcookie)
    for(var i in this.regcookie){
        this.obj=this.regcookie[i]
        console.log(this.obj)
        // console.log(this.obj.user)
    }
    this.diplay();
  

}
Login.prototype.diplay=function(){
    var that=this;
   
    this.txt.onblur=function(){

        if(that.txt.value!=""){
            if(that.txt.value==that.obj.user){
                that.teloff=true;
            }
        }
     
      
    }

    this.pass.onblur=function(){
        if(that.pass.value!=""){
            if(that.pass.value==that.obj.pass){
                that.passoff=true;
            }
        }
    }

    this.btn.onclick=function(){
        if(that.teloff==true&&that.passoff==true){
          
            that.btn.value="登录成功，请稍等..."
            setTimeout(() => {
                location.href = "index1.html";
            }, 500);
        }else{
            if(that.teloff==false){
                that.span.innerHTML="手机号失败";
            }
            if(that.passoff==false){
               that.pass.nextSibling.innerHTML="密码失败";
            }
        }
    
    }
}


new Login();
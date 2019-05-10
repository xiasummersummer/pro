

    var urlf = "http://localhost/xiajuan/public.html #publicbox #footerbox"
    $("#footer ").load(urlf, function () {

    });
// class Login{
//     constructor(){
//         this.url = "http://www.icodeilife.cn/ctrl/register.php";
//         this.btn = $("#btn");
//         this.user = $("#txt");
//         this.pass = $("#pass");
//         this.span = $(".formcircle").children("span");
//         this.init()
//     }
//     init(){
//         var that = this;
//         this.btn.click(function(){
//             that.load(0)
//         })
//     }
//     load(){
//         var that = this;
//         $.ajax({
//             url:this.url,
//             data:{
//                 tel:this.user.val(),
//                 pass:this.pass.val()
//             },
//             success:function(res){
//                 switch(res){
//                     case "0":
//                         that.span.html("你的名字太火啦，换一个把");break;
//                     case "1":
//                         that.span.html("恭喜你，注册成功，3秒后跳转到登录");
//                         setTimeout(() => {
//                             location.href = "login.html";
//                         }, 3000);
//                         break;
//                     case "2":
//                         that.span.html("你的数据不全");break;
//                 }
//             },
            
//         })
//     }
// }
// new Login()

var otel = document.getElementById("txt");
var opass = document.getElementById("pass");
var opass2 = document.getElementById("pass2");
var obtn = document.getElementById("btn");

var teloff = passoff = pass2off = false;


function Register(){
    this.tel= document.getElementById("txt");
    this.opass = document.getElementById("pass");
    this.opass2 = document.getElementById("pass2");
    this.obtn = document.getElementById("btn");
    this.span=document.querySelector(".formcircle span")
 
    this.teloff = passoff = pass2off = false;
    this.addeve();

}

Register.prototype.addeve=function(){
var that=this;
    this.tel.onblur=function(){
    var reg = /^1[3-9]\d{9}$/;
    if(reg.test(that.tel.value)){
        that.span.innerHTML = "成功";
        teloff = true;
    }else{
        that.span.innerHTML = "失败";
        teloff = false;
    }
    }

    this.opass.onblur = function(){
        // 验证长度
        var lengthReg = /^.{6,18}$/;
        if(!lengthReg.test(that.opass.value)){
            that.opass.nextSibling.innerHTML = "长度不符";
            passoff = false;
            return;
        }
    
        // 每种类型独立判断的状态开关
        var a=b=c=0;
    
        var numReg = /\d/;
        if(numReg.test(that.opass.value)){
            a = 1
        }
    
        var azReg = /[a-zA-Z]/;
        if(azReg.test(that.opass.value)){
            b = 1
        }
        var tsReg = /[^\da-zA-Z]/;
        if(tsReg.test(that.opass.value)){
            c = 1
        }
        // 判断出现了几种情况
        switch(a+b+c){
            case 1:
            that.opass.nextSibling.innerHTML = "简单";break;
            case 2:
            that.opass.nextSibling.innerHTML = "一般";break;
            case 3:
            that.opass.nextSibling.innerHTML = "困难";break;
        }
        passoff = true;
        if(that.opass.value != ""){
            if(that.opass2.value == that.opass.value){
                that.opass2.nextSibling.innerHTML = "一致";
                pass2off = true;
            }else{
                that.opass2.nextSibling.innerHTML = "不一致";
                pass2off = false;
            }
        }

    }

    // 重复密码的验证
this.opass2.onblur = function(){
    if(that.opass2.value == that.opass.value){
        that.opass2.nextSibling.innerHTML = "一致";
        pass2off = true;
    }else{
        that.opass2.nextSibling.innerHTML = "不一致";
        pass2off = false;
    }
}

// 点击提交时，整体验证
    this.obtn.onclick = function(){
        if(teloff && passoff && pass2off){

            setTimeout(() => {
                location.href = "login.html";
            }, 1000);
            that.setcookie();
        }else{
            // 当失败时，通过每个部分的状态判断到底是谁失败了
            if(!teloff){
                alert("手机号失败")
            }
            if(!passoff){
                alert("密码失败")
            }
            if(!pass2off){
                alert("重复密码失败")
            }
        }
    }

}


Register.prototype.setcookie=function(){
    this.regcookie=getCookie("reg")

        // this.regcookie=[{
        //     user:this.tel.value,
        //    pass:this.opass.value
        // }]
    
console.log(this.regcookie)
        if(this.regcookie==""){
            this.regcookie=[{
                user:this.tel.value,
                pass:this.opass.value,
                onff:0,
            }]


        }else{
            var off=true;
            this.regcookie=JSON.parse(this.regcookie)
            for(var i=0;i<this.regcookie.length;i++){
                if(this.regcookie[i].id==this.id){
                   
                    off=false;
                    break;
                }
            }
            if(off){
                this.regcookie.push([{
                    user:this.tel.value,
                    pass:this.opass.value,
                    onoff:0,
                }])
            }
        }


    console.log(this.regcookie)
    setCookie("reg",JSON.stringify(this.regcookie))
}






new Register();





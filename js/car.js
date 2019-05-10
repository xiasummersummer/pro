var urlf = "http://localhost/xiajuan/public.html #publicbox #footerbox"
$("#footer ").load(urlf, function () {

});

function Car(){
    this.goodsul=document.querySelector(".goods");
    this.url="http://localhost/xiajuan/data.json";
    this.cargoods=document.querySelector(".car-goods");
    this.checkall=document.querySelector(".checkall")
this.posi=document.querySelector("#posi");
this.num=document.querySelector(".hright .num")
    this.checkprice=document.querySelector(".checkprice")
    this.checkcar=document.querySelector("#checkcar")
    this.carshop=document.querySelector("#carshop")
    this.h5=document.querySelector("#countcar h5")
    this.account=document.querySelector(".account")
    this.inint();
    this.addeve();
  
};
Car.prototype.inint=function(){
    var that=this;
    ajaxGet(this.url).then(function(res){
     
        that.res=JSON.parse(res)
        that.getcookie()
    })

    this.regcookie=getCookie("reg")!=""?JSON.parse(getCookie("reg")):[];
    // console.log(this.regcookie)
 
    if(this.regcookie.length==0){
        alert("请先注册")
        setTimeout(() => {
            location.href = "register.html";
        }, 500);

     
    }
}


Car.prototype.getcookie=function(){

    this.goods=getCookie("goods")!=""?JSON.parse(getCookie("goods")):[];
    var sum=0
    for(var i in this.goods){
     this.arr=this.goods[i]
   sum+=this.arr.num

 }
 this.num.innerHTML=sum

    if(this.goods.length==0){
        this.posi.style.display="block"
        this.carshop.style.display="none";
        this.account.style.display="none"
    }
    for(var i in this.res){

        if(this.res[i].special!=49){
            this.diplay()
        }
    }

}

Car.prototype.diplay=function(){
    var str=""
    var obj={}
    var obj2={}
    for(var i=0;i<this.res.length;i++){
        for(var j=0;j<this.goods.length;j++){
            if(this.res[i].id==this.goods[j].id){
                // console.log(this.res[i].id)
                str+=` <ul class="goods" index="${this.res[i].id}">
                <li class="li1">
                <span>1</span>
                <input type="checkbox" class="check1" >
            </li>
            <li class="li2 clear">
                <a href="" class="imgbox"> <img src="${this.res[i].url}" alt="">
                </a>
                <p>
                    <a href="">${this.res[i].name}</a>
                </p>

            </li>
            <li class="li3">
                <p>
                    <a href="">${this.res[i].specs}</a>
                    <a href="">${this.res[i].color}</a>
                </p>
                <p>${this.res[i].title}</p>
            </li>
            <li class="li4">${this.res[i].price}</li>
            <li class="li5"><span class="reduce">-</span><input type="number" value="${this.goods[j].num}" class="num" min=1><span class="add">+</span></li>
            <li class="li6">
                <h5></h5>
            </li>
            <li class="li7"><a href="">我要收藏</a><span class="dele">删除</span></li> 
            </ul>`
            // console.log(this.res[i].price)
            
            obj[this.res[i].price]=this.goods[j].num

            // obj2[this.res[i].price]=this.goods[j].num
           
            
         }
        }
    }
  
    this.obj2=obj2;
    // console.log(this.obj2)
    this.obj=obj;
    // console.log(this.obj)
    // console.log(str)
    this.cargoods.innerHTML=str;
      this.check=document.querySelectorAll(".goods .li1 .check1")
      this.li4p=document.querySelectorAll(".li4")

   
// console.log(this.oprodlist.offsetHeight)
// console.log(this.oprodlist.length)
// console.log(this.oprodlist[this.oprodlist.length-1])
this.singleprice=document.querySelectorAll(".li6 h5")
    this.gl=document.querySelectorAll(".goods #gl");
    console.log(2)
    // this.singlep();
}

Car.prototype.addeve=function(){
    var that=this;
    this.cargoods.addEventListener("input",function(eve){
        var e=eve||window.event;
        var target=e.target||e.srcElement;
        if(target.className=="num"){
            that.num=target.value;
            console.log(target.value)
            that.id=  target.parentNode.parentNode.getAttribute("index");
            // console.log(that.id)
            that.changecookie();
        }
    })


    this.cargoods.addEventListener("click",function(eve){
        var e=eve||window.event;
        var target=e.target||e.srcElement;
        // console.log(target)
        if(target.className=="dele"){
            that.id=  target.parentNode.parentNode.getAttribute("index");
            // console.log(that.id)
            target.parentNode.parentNode.remove()
            // console.log(that.goods)
            that.removecookie()

        }
    })

    this.cargoods.addEventListener("click",function(eve){
        var e=eve||window.event;
        var target=e.target||e.srcElement;
        if(target.className=="check"){
            that.id=target.parentNode.children[0].innerHTML;
            that.price=target.parentNode.parentNode.children[3].innerHTML
            // console.log(that.price)
            that.acount()
            // console.log(target)
            //  console.log(that.price)
        }
        
    })

    this.checkall.onfocus=function(){
        var sum=0
        for(var i=0;i<that.check.length;i++){
            that.check[i].setAttribute("checked","checked")
            // console.log(that.check[i])

         that.acount();
        
        }
      
    }
    this.checkcar.onfocus=function(){
        var sum=0
        for(var i=0;i<that.check.length;i++){
            that.check[i].setAttribute("checked","checked")
            // console.log(that.check[i])

         that.acount();
        
        }
      
    }

}

Car.prototype.acount=function(){
    var sum=0
   
        for(var i in this.obj){
            // console.log(this.obj[i])
            sum+=this.obj[i]*i
        
    }
    this.checkprice.innerHTML=sum
    this.h5.innerHTML=sum;
    }



    Car.prototype.singlep=function(){
        
        this.goods=getCookie("goods")!=""?JSON.parse(getCookie("goods")):[];
        var sum=0
        for(var i in this.goods){
         this.arr=this.goods[i]
       sum+=this.arr.num
    
     }

     for(var j=0;j<this.li4p.length;j++){
        console.log(this.li4p[j].innerHTML)
    }

    }
    // console.log(this.li4p.length)
  


Car.prototype.changecookie=function(){
    // console.log(1)
   for(var i=0;i<this.goods.length;i++){
    if(this.goods[i].id==this.id){
        this.goods[i].num=this.num;
        // console.log(this.num)
    }
   }
//    console.log(this.goods)
   setCookie("goods",JSON.stringify(this.goods))
}

Car.prototype.removecookie=function(){
    // console.log(1221)
    for(var i=0;i<this.goods.length;i++){
        if(this.goods[i].id==this.id){
            // console.log(this.goods[0],this.goods[1])
            this.goods.splice(i,1)
            // console.log(this.goods)
        }
    }
    setCookie("goods",JSON.stringify(this.goods))

   

}

new Car()




function User(){
    this.username=document.querySelector(".customername")
    this.out=document.querySelector(".out")
    this.sec=document.querySelector(".sec")
    this.login=document.querySelector(".login")
    this.inint();
}
User.prototype.inint=function(){
    this.getcookie();
}



User.prototype.getcookie=function(){
    
    this.regcookie=getCookie("reg")!=""?JSON.parse(getCookie("reg")):[];
    // console.log(this.regcookie)
    // console.log(typeof this.regcookie)
    for(var i in this.regcookie){
        this.obj=this.regcookie[i]
        // console.log(this.obj)
        // console.log(this.obj.user)
    }
    this.diplay();
}
User.prototype.diplay=function(){

    this.username.innerHTML=this.obj.user;
    this.out.innerHTML="";
    this.login.innerHTML="";
    this.sec.innerHTML="退出";


}
new User();
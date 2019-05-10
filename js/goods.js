// var urlh = "http://localhost/mypro2/public.html #publicbox #headerbox"
// $("#header .margin").load(urlh, function () {

// });
var urls = "http://localhost/xiajuan/public.html #publicbox #searchbox";
$("#search").load(urls, function () {

});

var urlf = "http://localhost/xiajuan/public.html #publicbox #footerbox"
$("#footer ").load(urlf, function () {

});



    
function Store(options){
    this.num=options.num;
            this.index=options.index;
    this.url="http://localhost/xiajuan/data.json";
    this.oproduct=document.querySelector("#product");
    this.tbody=document.querySelector("#page .pagging");
    this.left=document.querySelector(".left");
    this.right=document.querySelector(".right");
    this.pageindex=document.querySelector(".pageindex")
    this.inint();
    this.addeve();
}

Store.prototype.inint=function(){
    var that =this;

    ajaxGet(this.url).then(function(res){
        // console.log(res)
        // console.log(typeof res)
        that.res=JSON.parse(res)
            that.diplay();
     
     
        that.pagGing();
    })

}

Store.prototype.diplay=function(){
    var str="";
    for(var i=this.num*this.index;i<this.num*this.index+this.num;i++){
        if(i<this.res.length){
        str+=`<div id="prod-list" index="${this.res[i].id}" >
        <a href="details.html">
        <img src="${this.res[i].url}" alt="" class="plist">
    </a>
    <em>￥9.9</em>
    <a href="" title="雄狮 12色素描铅笔（塑盒装） GPC-12 12支/盒" class="headline">${this.res[i].name}</a>
    <p><span>${this.res[i].title}</span></p>
    <i>满就送</i>
    <h4>已有<b>${this.res[i].num}</b>人评价</h4>
    </div>`
    // console.log(this.res[i].id)
    }
}
    this.oproduct.innerHTML=str;
this.oprodlist=document.querySelectorAll("#prod-list")
// console.log(this.oprodlist.offsetHeight)
// console.log(this.oprodlist.length)
// console.log(this.oprodlist[this.oprodlist.length-1])
    this.oproduct.style.height=this.oprodlist[this.oprodlist.length-1].offsetTop+"px";
// console.log(str)
}

Store.prototype.pagGing=function(){
    // console.log(this.res) 
    this.maxpage=Math.ceil(this.res.length/this.num);
    // console.log(this.maxpage) ;
    var str="";
    for(var i=0;i<this.maxpage;i++){
        str+= `<li id="page-item"><a id="page-link" href="#">${i+1}</a></li>`
    }
    this.tbody.innerHTML=str
    this.active();
   
    this.alick();
}


Store.prototype.addeve=function(){
    var that=this;
// console.log( this.oproduct)
    this.oproduct.addEventListener("click",function(eve){
        var e=eve||window.event;
        var target=e.target||e.srcElement;
        // console.log(target)  //img
    console.log(target.className)
        if(target.className=="plist"){
        //  console.log(target.parentNode)
         that.id = target.parentNode.parentNode.getAttribute("index");
        //  console.log(target.className)
            // console.log(that.id)
            that.setCookie();
        }
    })
}

Store.prototype.setCookie=function(){
    this.goods=getCookie("goods")
    if(this.goods==""){
        this.goods=[{
            id:this.id,
            num:1
        }]
    }else{
        var off=true;
        this.goods=JSON.parse(this.goods)
        for(var i=0;i<this.goods.length;i++){
            if(this.goods[i].id==this.id){
                // this.goods[i].num++;
                off=false;
                break;
            }
        }
        if(off){
            this.goods.push({
                id:this.id,
                num:1
            })
        }
    }
    console.log(this.goods)
    setCookie("goods",JSON.stringify(this.goods))
}





Store.prototype.active=function(){
    // console.log(this.index)
    for(var i=0;i<this.maxpage;i++){
        this.tbody.children[i].className=""
    }
    this.tbody.children[this.index].className="active";
    this.pageindex.value=this.tbody.children[this.index].children[0].innerHTML
}
Store.prototype.alick=function(){
    var that=this;
    this.left.onclick=function(){
       that.changeindex(1);
    }
    this.right.onclick=function(){
        that.changeindex(2);
     }
}
Store.prototype.changeindex=function(type){
    if(type==1){
        if(this.index==0){
            this.index=this.maxpage-1;
        }else{
            this.index--}
            this.diplay();
            this.active();
            this.right.innerHTML="下一页"
    }else{
        if(this.index==this.maxpage-1){
            this.index=this.maxpage-1;
            this.right.innerHTML="到底啦"
        }else{
            this.index++
        }
        this.diplay();
        this.active()
    }
}

new Store({num:10,index:0})

function User(){
    this.username=document.querySelector(".customername")
    this.regi=document.querySelector(".regi")
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
    this.regi.innerHTML="";
    this.login.innerHTML="退出";
}
new User();
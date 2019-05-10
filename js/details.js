// var urlh = "http://localhost/mypro2/public.html #publicbox #headerbox"
// $("#header .margin").load(urlh, function () {

// });
var urls = "http://localhost/xiajuan/public.html #publicbox #searchbox";
$("#search").load(urls, function () {

});

var urlf = "http://localhost/xiajuan/public.html #publicbox #footerbox"
$("#footer ").load(urlf, function () {

});

function Add() {
    this.url="http://localhost/xiajuan/data.json";
    this.addcar = document.querySelector(".addcar");

    this.fdjt=document.querySelector(".fdj-t");
    this.aimg=document.querySelectorAll(".fdj-list img")
    this.inint();
    this.addeve();
};

Add.prototype.inint = function () {
    var that=this;
    ajaxGet(this.url).then( function(res){
            // console.log(res)
        that.res=JSON.parse(res)
        // that.diplay()
        that.getcookie();
        }
    )
}

Add.prototype.getcookie=function(){

    this.goods=getCookie("goods")!=""?JSON.parse(getCookie("goods")):[];
    console.log(this.goods)
    this.diplay()
}

Add.prototype.diplay = function () {
    var str=""
    for(var i=0;i<this.res.length;i++){
        for(var j=0;j<this.goods.length;j++){
            if(this.res[i].id==this.goods[j].id){
        str=`<a href="" index="${this.res[i].id}">
        <img src="${this.res[i].url}" alt="">
    </a>`;
 
        
         }
    }
}



    // console.log(str)
    this.fdjt.innerHTML=str;
    this.id=this.fdjt.children[0].getAttribute("index");

    for(var j=0;j<this.aimg.length;j++){
        this.aimg[j].src=this.fdjt.children[0].children[0].src;
    }
    // console.log(this.id)

}


Add.prototype.addeve = function () {
    var that = this;
    this.addcar.onclick = function () {
        that.setcookie();
 location.href="http://localhost/xiajuan/car.html"
    }

}
Add.prototype.setcookie = function () {
    this.goods = getCookie("goods");
    if (this.goods == "") {
        this.goods = [{
            id: this.id,
            num: 1
        }]
    } else {
        var off = true;
        this.goods = JSON.parse(this.goods);
        for (var i = 0; i < this.goods.length; i++) {
            if (this.goods[i].id == this.id) {
                this.goods[i].num++
                off = false;
                break;
            }
        }
        if (off) {
            this.goods.push({
                id: this.id,
                num: 1
            })
        }
    }
console.log(this.goods)
    setCookie("goods", JSON.stringify(this.goods))
   
console.log(this.goods)
}
new Add();
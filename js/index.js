

//    var urlh = "http://localhost/mypro2/public.html #publicbox #headerbox"
//    $("#header .margin").load(urlh, function () {

//    });
//    var urls = "http://localhost/mypro2/public.html #publicbox #searchbox";
//    $("#search").load(urls, function () {

//    });

   var urlf = "http://localhost/xiajuan/public.html #publicbox #footerbox"
   $("#footer ").load(urlf, function () {

   });



;(function($){
    "use strict";

  
    $.fn.extend({
        banner:function(options){
         
            var bannerObj = {
               
                index:0,
              
                iPrev:options.items.length-1
            };

        
            if(options.list == undefined || options.list == true){
                bannerObj.list = true;
            }else{
                bannerObj.list = false;
            }

            if(options.autoPlay == undefined || options.autoPlay == true){
                bannerObj.autoPlay = true;
            }else{
                bannerObj.autoPlay = false;
            }

            bannerObj.delayTime = options.delayTime || 2000; 
            bannerObj.moveTime = options.moveTime || 200; 

            
            if(bannerObj.list){
           
                var $ul = $("<ul>");
                for(var i=0;i<options.items.length;i++){
                    $ul.append($("<li></li>"))
                }
                this.append($ul)
                $ul.css({
                    width:"80px",
                    height:10,
                    lineHeight:"30px",
                    display:"flex",
                    position:"absolute",
                    bottom:20,
                   
                    margin:"auto",
                    left:0,
                    right:0,
                    padding:0
                }).children("li").css({
                    flex:"1",
                    textAlign:"center",
                    listStyle:"none",
                    marginLeft:10,
                    
                }).eq(bannerObj.index).css({
                    background:"red"
                })



             
                $ul.children("li").on("click",function(){
                  
                    if($(this).index() > bannerObj.index){
                        
                        bannerObj.listMove($(this).index(),1)
                    }
                 
                    if($(this).index() < bannerObj.index){
                      
                        bannerObj.listMove($(this).index(),-1)
                    }

                  
                    bannerObj.index = $(this).index();
                    
                    $(this).css({
                        background:"red"
                    }).siblings().css({
                        background:""
                    })

                })
             
                bannerObj.listMove = function(iNow,type){
                    options.items.eq(bannerObj.index).css({
                        left:0
                    }).stop().animate({
                        left:-options.items.eq(0).width() * type
                    },bannerObj.moveTime)
                    options.items.eq(iNow).css({
                        left:options.items.eq(0).width() * type
                    }).stop().animate({
                        left:0
                    },bannerObj.moveTime)
                }

                

            }


            function rightClick(){
          
                if(bannerObj.index == options.items.length-1){
                    bannerObj.index = 0;
                    bannerObj.iPrev = options.items.length-1;
                }else{
                    bannerObj.index++;
                    bannerObj.iPrev = bannerObj.index - 1
                }
              
                bannerObj.btnMove(1)
            }
            function leftClick(){
               
                if(bannerObj.index == 0){
                    bannerObj.index = options.items.length-1;
                    bannerObj.iPrev = 0
                }else{
                    bannerObj.index--;
                    bannerObj.iPrev = bannerObj.index + 1;
                }
         
                bannerObj.btnMove(-1)
            }
        
            bannerObj.btnMove = function(type){
                options.items.eq(bannerObj.iPrev).css({
                    left:0
                }).stop().animate({
                    left:-options.items.eq(0).width() * type
                },bannerObj.moveTime)
                options.items.eq(bannerObj.index).css({
                    left:options.items.eq(0).width() * type
                }).stop().animate({
                    left:0
                },bannerObj.moveTime)
                
                if(bannerObj.list){
                   
                    $ul.children("li").css({
                        background:""
                    }).eq(bannerObj.index).css({
                        background:"red"
                    })

                }
            }

           
            if(options.left != undefined && options.left.length != 0 && options.right != undefined && options.right.length != 0){
          
                options.left.on("click",leftClick)
            
                options.right.on("click",rightClick)
            }

            if(bannerObj.autoPlay){
               
                bannerObj.timer = setInterval(() => {
                    rightClick()
                }, bannerObj.delayTime);
                
                this.hover(function(){
                    clearInterval(bannerObj.timer)
                },function(){
                    bannerObj.timer = setInterval(() => {
                        rightClick()
                    }, bannerObj.delayTime);
                })
            }
        }
    })

})(jQuery);

$("#banner").banner({
    items:$("#banner").children("#imgbox").children("a"),  
    left:$("#banner").find("#left"),
    right:$("#banner").find("#right"),

    list:true,
  
    autoPlay:true,
  
    delayTime:2000,
   
    moveTime:1000
})

$("#smallbanner").banner({
    items:$("#smallbanner").children("#bant").children("a"),   
    list:false,
 
    autoPlay:true,
  
    delayTime:2000,
  
    moveTime:300
})



$("#smallbanner").banner({
    items:$("#smallbanner").children("#banb").children("a"),      
    list:false,
   
    autoPlay:true,
    
    delayTime:1000,
   
    moveTime:300
});

// 楼梯banner


// $(".fbanner").banner({
//     items:$(".fbanner").children("a"),      //必选
//  
//     // left:$("#smallbanner").find("#left"),
//     // right:$("#smallbanner").find("#right"),
//    
//     list:false,
//    
//     autoPlay:true,
// 
//     delayTime:2000,

//     moveTime:300
// });


// class Sbanner{
//     constructor(){
//         this.img=document.querySelectorAll("#smallbanner #bant a");
//         this.index=0;
//         this.i=0;
//         this.inint()
//     }
   
// }

// new Sbanner()


// class Search{

//     constructor(){
//         this.url=options.url;
//         this.ul=options.ul;
//         this.txt=options.txt;
//         this.addeve()
//     }
//     addeve(){

//     }
// }

// new Search()



// 二级菜单



    // function Menu(){
    //     this.ali=document.querySelectorAll("#menu ul li");
    //     this.subm=document.querySelector("#submenu ");
    //     this.inint();

    // }

    // Menu.prototype.inint=function(){
    //     var that=this;
    //     for(var i=0;i<this.ali.length;i++){
    //         this.index=i;
    //         this.ali[i].onclick=function(){
    //             // for(var j=0;j<that.ali.length;j++){
    //                 console.log(4)
    //             // }
    //            that.subm.style.display="block"

    //         }


    //     }
    // }

    // new Menu();

// 特价包邮

;(function(){
    function Splist(){
        this.asprt=document.querySelectorAll(".sp-right #sprt");
        this.specialist=document.querySelectorAll(".spr-b .special-list")
        this.goods=document.querySelectorAll(".goods")
        // console.log(this.specialist)
        this.url="http://localhost/xiajuan/data.json";
        this.inint();
        this.addeve();
    }
    Splist.prototype.inint=function(){
        var that=this;
        // console.log(10)
        ajaxGet(this.url).then(function(res){
            // console.log(res)
            that.res=JSON.parse(res);
            var str=""
            for(var i=0;i<that.res.length;i++){
                for(var i in that.res){
                    if(that.res[i].special=="10A"){
                    //   console.log(8)
                    str+=`<div class="sprblist-l" index="${that.res[i].id}"> <a href="details.html" class="goods">
                            <img src="${that.res[i].url}" alt="">
                              <h3>${that.res[i].special}</h3>
                              <p><span>${that.res[i].price}</span><i>${that.res[i].perprice}</i></p>
                     </a> </div>`
                    }
                }
            }
            for(var j=0;j<that.specialist.length;j++){
                that.specialist[j].innerHTML=str
            }
    
            that.spl1display();
            // that.id=document.querySelector(".sprblist-l").getAttribute("index")
        
            // console.log(that.id)
          
        })
    }


    Splist.prototype.spl1display=function(){
        var str=""
        for(var i=0;i<this.res.length;i++){
            for(var i in this.res){
                if(this.res[i].special=="20A"){
                //   console.log(8)
                str+=`<div class="sprblist-l">
                        <img src="${this.res[i].url}" alt="">
                          <h3>${this.res[i].special}</h3>
                          <p><span>${this.res[i].price}</span><i>${this.res[i].perprice}</i></p>
                  </div>`
                }
            }
        }
        this.specialist[1].innerHTML=str;
        this.spl2display();
    }
    Splist.prototype.spl2display=function(){
        var str=""
        for(var i=0;i<this.res.length;i++){
            for(var i in this.res){
                if(this.res[i].special=="30A"){
                //   console.log(8)
                str+=`<div class="sprblist-l">   <a href="details.html">
                        <img src="${this.res[i].url}" alt="">
                          <h3>${this.res[i].special}</h3>
                          <p><span>${this.res[i].price}</span><i>${this.res[i].perprice}</i></p>
                 </a> </div>`
                }
            }
        }
   
        this.specialist[2].innerHTML=str;
      
    }


    Splist.prototype.addeve=function(){
        var that=this;
        for(var i=0;i<this.asprt.length;i++){
          this.asprt[i].index=i;
            this.asprt[i].onclick=function(){
                for(var j=0;j<that.asprt.length;j++){
                    that.asprt[j].className="";
                    // console.log( that.specialist[0])
                    that.specialist[j].style.display="none";

                }
                // console.log(that.index)
                this.className="active";
                // console.log(that)
                // console.log(that.index)
                // console.log( that.specialist[that.index])
                that.specialist[this.index].style.display="block"
                // that.display()
            }
        }

        for(var i=0;i<this.goods.length;i++){
            this.goods[i].onclick=function(){
                
            }
        }


    }
   
    new Splist()    
})();


;(function(){
    function Detaillist(){
        this.atab=document.querySelectorAll(".dl-right #atab");
        this.sdlul=document.querySelectorAll(".dl-right .dl-ul")
        this.addeve();
    }
    Detaillist.prototype.addeve=function(){
        var that=this;
        // console.log(this.atab.length)
        for(var i=0;i<this.atab.length;i++){
        //  console.log(this.atab.length)
          this.atab[i].index=i;
        //   console.log(this.atab[i])
            this.atab[i].onclick=function(){
                console.log(that.atab.length)
                console.log(327)
                for(var j=0;j<that.atab.length;j++){
                    that.atab[j].className="";
                    console.log(that.sdlul[j])
                    that.sdlul[j].style.display="none"
                }
            
                this.className="active";
                // console.log( that.specialist[that.index])
                that.sdlul[this.index].style.display="block"
            }
        }
    }
    
    new Detaillist()    
})();

// 楼梯数据

;(function(){
    onload=function(){
        
        function pengoods(){
            this.url="http://localhost/xiajuan/data.json";
            // this.pgt=document.querySelectorAll(".pgt");
            this.f1=document.querySelector(" .pengoods .pgt ")
            this.f2=document.querySelector("#floor-f2 .pengoods .pgt ")
            this.f3=document.querySelector("#floor-f3 .pengoods .pgt ")
            this.f4=document.querySelector("#floor-f4 .pengoods .pgt ")
            this.f5=document.querySelector("#floor-f5 .pengoods .pgt ")
            this.f6=document.querySelector("#floor-f6 .pengoods .pgt ")
            this.f7=document.querySelector("#floor-f7 .pengoods .pgt ")
            this.f1b=document.querySelector(" .pengoods .pgb ")
            this.f2b=document.querySelector("#floor-f2 .pengoods .pgb ")
            this.f3b=document.querySelector("#floor-f3 .pengoods .pgb ")
            this.f4b=document.querySelector("#floor-f4 .pengoods .pgb ")
            this.f5b=document.querySelector("#floor-f5 .pengoods .pgb ")
            this.f6b=document.querySelector("#floor-f6 .pengoods .pgb ")
            this.f7b=document.querySelector("#floor-f7 .pengoods .pgb ")
            this.inint();
            // this.addeve();
        }
        
        pengoods.prototype.inint=function(){
            var that =this;
        
            ajaxGet(this.url).then(function(res){
                // console.log(res)
                that.res=JSON.parse(res)
                that.diplay();
                that.f2play();
                that.f3play();
                that.f4play();
                that.f5play();
                that.f6play();
                that.f7play();
                that.f1bdiplay();
                that.f2bdiplay();
                that.f3bdiplay();
                that.f4bdiplay();
                that.f5bdiplay();
                that.f6bdiplay();
                that.f7bdiplay();
            })
        
        }
        
        pengoods.prototype.diplay=function(){
            var str=""
            for(var i=0;i<this.res.length;i++){
              
                for(var i in this.res){
                    if(this.res[i].special=="f1"){
                    
                    str+=` <li class="pgtli">
                        <a href="details.html">
                             <img src="${this.res[i].url}" alt="">
                           <div class="discribe">
                               <h2>${this.res[i].title}</h2>
                              <p>${this.res[i].price}</p>
                           </div>
                        </a>
                    </li>`
                    }
                }
            }
        this.f1.innerHTML=str  
        }
        pengoods.prototype.f2play=function(){
            var str=""
            for(var i=0;i<this.res.length;i++){
                for(var i in this.res){
                    if(this.res[i].special=="f2"){
                    //   console.log(8)
                    str+=` <li class="pgtli">
                        <a href="details.html">
                             <img src="${this.res[i].url}" alt="">
                           <div class="discribe">
                               <h2>${this.res[i].title}</h2>
                              <p>${this.res[i].price}</p>
                           </div>
                        </a>
                    </li>`
                    }
                }
            }
        this.f2.innerHTML=str
        }

        pengoods.prototype.f3play=function(){

            var str=""
            for(var i=0;i<this.res.length;i++){
                for(var i in this.res){
                    if(this.res[i].special=="f3"){
                    //   console.log(8)
                    str+=` <li class="pgtli">
                        <a href="details.html">
                             <img src="${this.res[i].url}" alt="">
                           <div class="discribe">
                               <h2>${this.res[i].title}</h2>
                              <p>${this.res[i].price}</p>
                           </div>
                        </a>
                    </li>`
                    }
                }
            }
        this.f3.innerHTML=str
        }

        pengoods.prototype.f4play=function(){

            var str=""
            for(var i=0;i<this.res.length;i++){
                for(var i in this.res){
                    if(this.res[i].special=="f4"){
                 
                    str+=` <li class="pgtli">
                        <a href="details.html">
                             <img src="${this.res[i].url}" alt="">
                           <div class="discribe">
                               <h2>${this.res[i].title}</h2>
                              <p>${this.res[i].price}</p>
                           </div>
                        </a>
                    </li>`
                    }
                }
            }
        this.f4.innerHTML=str
        }
        pengoods.prototype.f5play=function(){

            var str=""
            for(var i=0;i<this.res.length;i++){
                for(var i in this.res){
                    if(this.res[i].special=="f5"){
                      
                    str+=` <li class="pgtli">
                        <a href="details.html">
                             <img src="${this.res[i].url}" alt="">
                           <div class="discribe">
                               <h2>${this.res[i].title}</h2>
                              <p>${this.res[i].price}</p>
                           </div>
                        </a>
                    </li>`
                    }
                }
            }
        this.f5.innerHTML=str
        }

        pengoods.prototype.f6play=function(){

            var str=""
            for(var i=0;i<this.res.length;i++){
                for(var i in this.res){
                    if(this.res[i].special=="f6"){
          
                    str+=` <li class="pgtli">
                        <a href="details.html">
                             <img src="${this.res[i].url}" alt="">
                           <div class="discribe">
                               <h2>${this.res[i].title}</h2>
                              <p>${this.res[i].price}</p>
                           </div>
                        </a>
                    </li>`
                    }
                }
            }
        this.f6.innerHTML=str
        }
        pengoods.prototype.f7play=function(){

            var str=""
            for(var i=0;i<this.res.length;i++){
                for(var i in this.res){
                    if(this.res[i].special=="f7"){
              
                    str+=` <li class="pgtli">
                        <a href="details.html">
                             <img src="${this.res[i].url}" alt="">
                           <div class="discribe">
                               <h2>${this.res[i].title}</h2>
                              <p>${this.res[i].price}</p>
                           </div>
                        </a>
                    </li>`
                    }
                }
            }
        this.f7.innerHTML=str
        }

        pengoods.prototype.f1bdiplay=function(){
            var str=""
            for(var i=0;i<this.res.length;i++){
            //   console.log(this.res)
                for(var i in this.res){
                    // console.log(this.res[i].special)
                    if(this.res[i].special=="fb1"){
                    
                    str+=` <li class="pgtli">
                    <a href="details.html">
                         <img src="${this.res[i].url}" alt="">
                       <div class="discribe">
                           <h2>${this.res[i].title}</h2>
                          <p>${this.res[i].price}</p>
                       </div>
                    </a>
                </li>`
                    }
                }
            }
            // console.log(this.f1b)
            // console.log(str)
        this.f1b.innerHTML=str  
        };

        pengoods.prototype.f2bdiplay=function(){
            var str=""
            for(var i=0;i<this.res.length;i++){
              
                for(var i in this.res){
                    if(this.res[i].special=="fb2"){
                    
                    str+=` <li class="pgtli">
                        <a href="details.html">
                             <img src="${this.res[i].url}" alt="">
                           <div class="discribe">
                               <h2>${this.res[i].title}</h2>
                              <p>${this.res[i].price}</p>
                           </div>
                        </a>
                    </li>`
                    }
                }
            }
        this.f2b.innerHTML=str  
        }
        pengoods.prototype.f3bdiplay=function(){
            var str=""
            for(var i=0;i<this.res.length;i++){
              
                for(var i in this.res){
                    if(this.res[i].special=="fb3"){
                    
                    str+=` <li class="pgtli">
                        <a href="details.html">
                             <img src="${this.res[i].url}" alt="">
                           <div class="discribe">
                               <h2>${this.res[i].title}</h2>
                              <p>${this.res[i].price}</p>
                           </div>
                        </a>
                    </li>`
                    }
                }
            }
        this.f3b.innerHTML=str  
        }
        pengoods.prototype.f4bdiplay=function(){
            var str=""
            for(var i=0;i<this.res.length;i++){
              
                for(var i in this.res){
                    if(this.res[i].special=="fb4"){
                    
                    str+=` <li class="pgtli">
                        <a href="details.html">
                             <img src="${this.res[i].url}" alt="">
                           <div class="discribe">
                               <h2>${this.res[i].title}</h2>
                              <p>${this.res[i].price}</p>
                           </div>
                        </a>
                    </li>`
                    }
                }
            }
        this.f4b.innerHTML=str  
        }
        pengoods.prototype.f5bdiplay=function(){
            var str=""
            for(var i=0;i<this.res.length;i++){
              
                for(var i in this.res){
                    if(this.res[i].special=="fb5"){
                    
                    str+=` <li class="pgtli">
                        <a href="details.html">
                             <img src="${this.res[i].url}" alt="">
                           <div class="discribe">
                               <h2>${this.res[i].title}</h2>
                              <p>${this.res[i].price}</p>
                           </div>
                        </a>
                    </li>`
                    }
                }
            }
        this.f5b.innerHTML=str  
        }
        pengoods.prototype.f6bdiplay=function(){
            var str=""
            for(var i=0;i<this.res.length;i++){
              
                for(var i in this.res){
                    if(this.res[i].special=="fb6"){
                    
                    str+=` <li class="pgtli">
                        <a href="details.html">
                             <img src="${this.res[i].url}" alt="">
                           <div class="discribe">
                               <h2>${this.res[i].title}</h2>
                              <p>${this.res[i].price}</p>
                           </div>
                        </a>
                    </li>`
                    }
                }
            }
        this.f6b.innerHTML=str  
        }
        pengoods.prototype.f7bdiplay=function(){
            var str=""
            for(var i=0;i<this.res.length;i++){
              
                for(var i in this.res){
                    if(this.res[i].special=="fb7"){
                    
                    str+=` <li class="pgtli">
                        <a href="details.html">
                             <img src="${this.res[i].url}" alt="">
                           <div class="discribe">
                               <h2>${this.res[i].title}</h2>
                              <p>${this.res[i].price}</p>
                           </div>
                        </a>
                    </li>`
                    }
                }
            }
        this.f7b.innerHTML=str  
        }

        new pengoods();
        }  
})();

function Fc(){
    this.f1c=document.querySelector("#floor-f1 .f1-c")

    this.url="http://localhost/xiajuan/data.json";
    this.f2c=document.querySelector("#floor-f2 .f1-c")
    this.f3c=document.querySelector("#floor-f3 .f1-c")
    this.f4c=document.querySelector("#floor-f4 .f1-c")
    this.f5c=document.querySelector("#floor-f5 .f1-c")
    this.f6c=document.querySelector("#floor-f6 .f1-c")
    this.f7c=document.querySelector("#floor-f7 .f1-c")
    this.inint();
}
Fc.prototype.inint=function(){
    var that=this;
    ajaxGet(this.url).then(function(res){
        // console.log(res)
        that.res=JSON.parse(res)
      that.f1display();
      that.f2display();
      that.f3display();
      that.f4display();
      that.f5display();
      that.f6display();
      that.f7display();
    })
}

Fc.prototype.f1display=function(){
    var str=""
    for(var i=0;i<this.res.length;i++){
      
        for(var i in this.res){
            if(this.res[i].special=="banner1"){
            
            str+=` <a href=""><img src="${this.res[i].url}" alt=""></a>`
            }
        }
    }
this.f1c.innerHTML=str  
}
Fc.prototype.f2display=function(){
    var str=""
    for(var i=0;i<this.res.length;i++){
      
        for(var i in this.res){
            if(this.res[i].special=="banner2"){
            
            str+=` <a href=""><img src="${this.res[i].url}" alt=""></a>`
            }
        }
    }
this.f2c.innerHTML=str  
}
Fc.prototype.f3display=function(){
    var str=""
    for(var i=0;i<this.res.length;i++){
      
        for(var i in this.res){
            if(this.res[i].special=="banner3"){
            
            str+=` <a href=""><img src="${this.res[i].url}" alt=""></a>`
            }
        }
    }
this.f3c.innerHTML=str  
}
Fc.prototype.f4display=function(){
    var str=""
    for(var i=0;i<this.res.length;i++){
      
        for(var i in this.res){
            if(this.res[i].special=="banner4"){
            
            str+=` <a href=""><img src="${this.res[i].url}" alt=""></a>`
            }
        }
    }
this.f4c.innerHTML=str  
}
Fc.prototype.f5display=function(){
    var str=""
    for(var i=0;i<this.res.length;i++){
      
        for(var i in this.res){
            if(this.res[i].special=="banner5"){
            
            str+=` <a href=""><img src="${this.res[i].url}" alt=""></a>`
            }
        }
    }
this.f5c.innerHTML=str  
}
Fc.prototype.f6display=function(){
    var str=""
    for(var i=0;i<this.res.length;i++){
      
        for(var i in this.res){
            if(this.res[i].special=="banner6"){
            
            str+=` <a href=""><img src="${this.res[i].url}" alt=""></a>`
            }
        }
    }
this.f6c.innerHTML=str  
}
Fc.prototype.f7display=function(){
    var str=""
    for(var i=0;i<this.res.length;i++){
      
        for(var i in this.res){
            if(this.res[i].special=="banner7"){
            
            str+=` <a href=""><img src="${this.res[i].url}" alt=""></a>`
            }
        }
    }
this.f7c.innerHTML=str  
}


new Fc();



    function Scroll(){
        this.sideleft= document.querySelector("#sideleft")
        this.scrollsearch=document.querySelector("#scrollsearch")
        onscroll=function(){
           var t=document.documentElement.scrollTop;
        //    console.log(document.querySelector("#main").offsetTop)
           if(t>document.querySelector("#main").offsetTop){
             this.sideleft.style.display="block";
             this.scrollsearch.style.display="block"
           }else{
            this.sideleft.style.display="none"
            this.scrollsearch.style.display="none"
           }
        }
    }
    
    new Scroll();




    $("#sideleft").children("ul").children("li").click(
        function(){
            // console.log(this)
            var index=$(this).index()
            // console.log(index)
            $("html").stop().animate({
                scrollTop:$("#floor-f"+($(this).index()+1)).offset().top
            })

            // $(this).css({
            //     background:"#e93052"
            // }).siblings().css({
            //     background:"",
            // })
        }
    )



// function Menu(){

// }

// new Menu();
// var that=this;

// $(".menubox").children("ul").children("li").hover(function(){
//     $(this).css({
//         background:"#e50048"
//     }).siblings().css({
//         background:""
//     })



// },function(){
//     $(this).css({
//         background:""
//     })
// });

//     $.ajax({
//         url:"http://localhost/mypro2/menu.json",
//         success:function(res){
//             console.log(res)
//           for(var i in res){
//               console.log(res[i])
//               this.resobj=res[i]
//               console.log(i)
//             //   console.log(i)
//             // console.log(  this.resobj.bigName)
//             $(".menubox").children("ul").children("li").children("a").html(this.resobj.bigName)
//             console.log($(".office").children("h3").children("a").html(this.resobj.bigName))
//             $(".office").children("h3").children("a").html(this.resobj.bigName);
//         }
//           }
//     });

// $(".menubox").hover(function(){
//     // console.log(this)
//     // console.log(  $("#menu").children("#submenu"))
//     $("#submenu").css({
//         display:"block"
//     })
// },function(){
//     $("#submenu").css({
//         // display:"none"
//     })
// });



// 三级菜单

function  Menu(){
    this.aa=document.querySelectorAll(".menubox ul a")
    this.secondma=document.querySelectorAll("#submenu .office h3 a")
    this.thirdmenu=document.querySelectorAll("#submenu .office p a")
    this.aoffice=document.querySelectorAll(".office");
    this.smf1=document.querySelector("#sm-f1")
    this.url="http://localhost/xiajuan/menu.json"
   this.ali=document.querySelectorAll(".menubox ul li");
   this.submenu=document.querySelector("#submenu");
   this.menubox=document.querySelector(".menubox");

    this.inint();
    this.addeve();
}

Menu.prototype.inint=function(){
    var that=this;
 ajaxGet(this.url).then(function(res){
    //   console.log(res)
        that.res=JSON.parse(res);
     
        that.display();
    })

}


Menu.prototype.display=function(){

    for(var i=0;i<this.aa.length;i++){
    
        this.aa[i].innerHTML=this.res[i].bigName
    }
    // console.log(this.secondma.length)
    for(var j=0;j<this.secondma.length;j++){
       this.arr=this.res[i].bigMsg;
    
     
       for(var i in this.arr){
          
        //    console.log(str)
        //    console.log(this.arr[i].middleName)
        this.secondma[j].innerHTML=this.arr[i].middleName
            this.arr2=this.arr[i].middleMsg;
        
        }
        for(var i in this.arr2){
         
            this.thirdmenu[j].innerHTML=this.arr2[i].smallMsg    
          }
    }

}

Menu.prototype.addeve=function(){
    var that=this;
    
    for(var i=0;i<this.ali.length;i++){
        this.ali[i].index=i;
     
        this.ali[i].onmouseover=function(){
           
        that.submenu.style.display="block"
           for(var j=0;j<that.ali.length;j++){

          
            that.aoffice[j].style.display="none";

            that.ali[j].className="";
           }
         
           this.className="active";
           that.aoffice[this.index].style.display="block";
           
        }

        // this.ali[i].onmouseout=function(){
        //     this.className="";
        //     that.submenu.style.display="none"
        // }
       
    }


    this.menubox.onmouseleave=function(){
       for(var i=0;i<that.ali.length;i++){
        // that.ali[i].onmouseout=null
        that.submenu.style.display="none"
       }
    }
   
}

new Menu()



function Search(options){

    this.url = options.url;
    this.ul = options.ul;
    this.txt = options.txt;

    this.addEvent()
}
Search.prototype.addEvent = function(){
    var that = this;
    this.txt.onkeyup = function(){
  
        that.value = this.value;
      
   
        that.load()
    }

}
Search.prototype.load = function(){
    var that = this;
    jsonp(this.url,function(res){
   
        that.res = res.s;
 
        that.display()
    },{
       
        column:"cb",
        cb:"jagdsau",
    
        wd:this.value
    })
}
Search.prototype.display = function(){
    var str = "";
    for(var i=0;i<this.res.length;i++){
        str += `<li>${this.res[i]}</li>`
    }
    this.ul.innerHTML = str;
}


new Search({
    url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
    ul:document.querySelector(".search-res"),
    txt:document.querySelector("#txt")
})













    function User(){
        this.username=document.querySelector(".customername")
        this.regi=document.querySelector(".regi")
        this.login=document.querySelector(".login")
        this.esc=document.querySelector(".esc")
        this.num=document.querySelector(".hright .num")
        this.num2=document.querySelector("#slideright .num2")
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
            this.arr=this.regcookie[i]
            // console.log(this.obj)
            // console.log(this.obj.user)
          
        }

        // console.log(this.regcookie.length)
        this.diplay();
       this.goods=getCookie("goods")!=""?JSON.parse(getCookie("goods")):[];
    //    console.log(this.goods.length)
       var sum=0
       for(var i in this.goods){
        this.obj=this.goods[i]
//    console.log(this.obj.num)
        // console.log(i)
        // console.log(this.obj.user)
      sum+=this.obj.num
    }
    // console.log(sum)
    this.num.innerHTML=sum
    this.num2.innerHTML=sum
    
    }

  

    User.prototype.diplay=function(){
        if(this.regcookie.length!=0){
        //     console.log(this.username.innerHTML)
   
            this.username.innerHTML=this.arr.user;
            this.regi.innerHTML="";
            this.esc.innerHTML="退出";
            this.login.innerHTML=""
            this.exit();
          
        }


    }



    User.prototype.exit=function(){

        var that=this;
        // console.log(  this.esc)
        this.esc.onclick=function(){
        
            that.removecookie()
        }

    }



    User.prototype.removecookie=function(){
      
      
        for(var i=0;i<this.regcookie.length;i++){
            if(this.regcookie[i].id==this.id){
            
                // this.regcookie.splice(i,1)
                // this.regcookie=""
                // console.log(this.goods)
            }
        }
        setCookie("reg",JSON.stringify(this.regcookie))
    }
    

    new User();
    


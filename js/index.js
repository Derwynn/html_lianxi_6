/**
 * Created by Administrator on 2018/11/17 0017.
 */

// µ¼º½
var oli=document.getElementsByClassName("fuA");
var oul=document.getElementsByClassName("sub_nav");
for( var i=0;i<oli.length;i++){
    oli[i].index=i;
    oli[i].onmouseover = function(){
        this.style.background="#000";
        oul[this.index].style.display = "block";
    };
    oli[i].index=i;
    oli[i].onmouseout = function(){
        this.style.background="#212121";
        oul[this.index].style.display = "none";
    }
}

//ÂÖ²¥Í¼;
var opic=document.getElementsByClassName("box_pic");
var num=1;
setInterval(function(){
    opic[0].src="images/banner"+ num +".jpg";
    num++;
    if(num==4){
        num=1
    }
},1000);


//ÂÖ²¥Í¼2

window.onload = function(){
    var omain=document.getElementsByClassName("mainBot");
    var obox=document.getElementsByClassName("picBox")[1];
    var opicbox=document.getElementsByClassName("pic");
    var obtn1=document.getElementsByClassName("a1")[0];
    var obtn2=document.getElementsByClassName("a2")[0];
    console.log(obtn2);
    var num=0;

    obtn1.onclick=function(){
        num=num+288;
        obox.style.left=num+"px";
        if(obox.style.left>0){
           obox.style.left=-576

        }
    };
    obtn2.onclick=function(){
        num=num-288;
        obox.style.left=num+"px";
    }
};





<?php


$link=@mysql_connect("localhost:3306","root",666);
if(!$link){
    echo '{"code":0,"msg":"'.mysql_error().'"}';
}

$db=@mysql_select_db("pro");
if(!$db){
    echo '{"code":0,"msg":"'.mysql_error().'"}';
};

$utf=@mysql_query("set names utf8");
if(!$utf){
    echo '{"code":0,"msg":"'.mysql_error().'"}';
}



    echo select();


function select(){
    $data=mysql_query("SELECT*FROM glist");
    $str="";
    if($data){ 
        while($arr=mysql_fetch_assoc($data)){
        $str=$str.json_encode($arr).",";
    }
    return "[".substr($str,0,-1)."]";}else{
        return  '{"code":0,"msg":"'.mysql_error().'"}';
    }
   
}



?>
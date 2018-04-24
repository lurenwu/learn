
    $.ajax({
        url:'http://192.168.31.227/sfytjjk/wdaj/wdla.php',
        type:"post",
        timeout:5000,
        async:true, //默认是true，即为异步方式，如果是false这个ajax请求为同步请求，success之后打印日志
        cache:true, //如果当前请求有缓存的话，直接使用缓存。如果该属性设置为 false，则每次都会向服务器请求
        data:"user_id=12&page=0",
        dataType:"json",
        contentType:"application/x-www-form-urlencoded",  
        //contentType 主要设置你发送给服务器的格式，dataType设置你收到服务器数据的格式
        //关于更详细的 https://www.cnblogs.com/htoooth/p/7242217.html
        beforeSend:function(XMLHttpRequest){
            console.log(this);
            $("#inp").val("正在获取数据..."); 
        },
        success:function(data){
            console.log(data);
            $(".display").html("获取到的数据:</br>");
            $(".display").append("总条数:"+data.data.all_count);
            $("#inp").val("点击获取数据"); 
        },
        complete:function(XMLHttpRequest,textStatus){
            if(textStatus=='timeout'){
                var xmlhttp = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHttp");
                xmlhttp.abort(); 
                $(".box").html("网络超时！");
    　　　　}
            $("#inp").val("点击获取数据"); 
        },
        error:function(XMLHttpRequest, textStatus){
            console.log(XMLHttpRequest);  //XMLHttpRequest.responseText    XMLHttpRequest.status   XMLHttpRequest.readyState
            console.log(textStatus);
            $(".box").html("服务器错误！");
        }
    });

/* 
通过捕捉error事件来获取出错的信息:
error: function(XMLHttpRequest, textStatus, errorThrown) {
 alert(XMLHttpRequest.status);
 alert(XMLHttpRequest.readyState);
 alert(textStatus);
}

XMLHttpRequest.readyState: 状态码的意思
0 － （未初始化）还没有调用send()方法
1 － （载入）已调用send()方法，正在发送请求
2 － （载入完成）send()方法执行完成，已经接收到全部响应内容
3 － （交互）正在解析响应内容
4 － （完成）响应内容解析完成，可以在客户端调用了

status:返回的HTTP状态码，比如常见的404,500等错误代码。
statusText:对应状态码的错误信息，比如404错误信息是not found,500是Internal Server Error。
responseText ：服务器响应返回的文本信息

complete: function (XMLHttpRequest, textStatus) {  
    //textStatus的值：success,notmodified,nocontent,error,timeout,abort,parsererror  
},  
error: function (XMLHttpRequest, textStatus, errorThrown) {  
    //textStatus的值：null, timeout, error, abort, parsererror  
    //errorThrown的值：收到http出错文本，如 Not Found 或 Internal Server Error.  
}  
*/
}


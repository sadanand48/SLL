var btn = document.getElementById("btn1");
    var in1 = document.getElementById("input1");
    var sp1 = document.getElementById("sp1");
    btn.onclick = function(){
        var vals = in1.value.split(' ');
        var maxi = vals[0];
        vals.forEach(function(v){ if(v.length>maxi.length) maxi = v;});
        sp1.textContent = maxi + '   length:   ' + maxi.length;
    }

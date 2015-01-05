    	var pic=document.getElementById('pic').getElementsByTagName('li');
    	var txt=document.getElementById('txt').getElementsByTagName('li');
    	var tag=document.getElementById('tag').getElementsByTagName('li');
    	var arrowr=document.getElementById('next');
    	var arrowl=document.getElementById('prev');
    	var index=0;
    	var timer;
    	/*var getCurIndex=function (){
    		for(var i=0;i<tag.length;i++){
    			if(tag[i].className.indexOf('selected')!=-1){
    				return i;
    			}
    		}
    	}*/
    	var move = function(flag){
		//index = getCurIndex();
		if (flag){
			index++;
			if(index >= pic.length)
				index = 0;
		}
		else {
			index--;
			if(index < 0)
				index = pic.length-1;
		}
		display(index);
	}
	var display = function(index){	
		for(var i=0; i<tag.length; i++){
    		pic[i].className = '';
    		tag[i].className = '';
            txt[i].className = '';
    	}
    	pic[index].className='show';
    	tag[index].className = 'selected';
        txt[index].className = 'liying';
    }
    arrowr.onclick=function(){move(true);}
     
    function play(){
    	timer=setInterval(function(){
    		move(true)},1000);
    }
    play();
    function stop(){
    	clearInterval(timer);
    }
    for(var i= 0; i<txt.length; i++){
        tag[i].onclick = function(){
            for(var j= 0; j<txt.length; j++){
                if(this == tag[j])
                    index = j;
            }
            display(index);
        }
    }
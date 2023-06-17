var Body = {
    setColor: function(color){
        document.querySelector('body').style.color=color;
    },
    setBackgroundColor: function(color){
        document.querySelector('body').style.backgroundColor=color;
    }

}

var Link = {
    setColor: function(color){
    var links = document.querySelectorAll('a');
        for (var i = 0; i < links.length; i++) 
            links[i].style.color = color;
}

}


function nightDayHandler(self){
    if(self.value=='night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value='day';
        
        Link.setColor('powderblue')

        document.querySelector('#active').style.color='red';

    }

    else{
        Body.setBackgroundColor('white');
        Body.setColor("black");
        self.value='night';
        
        Link.setColor('blue');
        
        document.querySelector('#active').style.color='red';

    }
    
}
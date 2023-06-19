var Body = {
    setColor: function(color){
        // document.querySelector('body').style.color=color;
        $('body').css('color', color)
    },
    setBackgroundColor: function(color){
        // document.querySelector('body').style.backgroundColor=color;
        $('body').css('backgroundColor', color)
    }

}

var Link = {
    setColor: function(color){
    // var links = document.querySelectorAll('a');
    //     for (var i = 0; i < links.length; i++) 
    //         links[i].style.color = color;
    $('a').css('color', color);
}

}


function nightDayHandler(self){
    if(self.value=='night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value='day';
        
        Link.setColor('powderblue')

        $('#active').css('color', 'red');
        $('#article').addClass('night-mode');
        $('#article img').addClass('night-mode');
    }

    else{
        Body.setBackgroundColor('white');
        Body.setColor("black");
        self.value='night';
        
        Link.setColor('blue');
        
        $('#active').css('color', 'red');
        $('#article').removeClass('night-mode');
        $('#article img').removeClass('night-mode');
    }
    
}
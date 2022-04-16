document.addEventListener("DOMContentLoaded",function() {
    var menu = document.querySelectorAll('div.body');
    var menu = menu[0];
        //Truy xuất div menu
        var trangthai="duoi100";
    window.addEventListener("scroll",function(){
        var x = pageYOffset;
        if(x > 150){
            if(trangthai == "duoi100")
            {
                trangthai="tren100";
                menu.classList.add('menutora');
            }
        }
        else{
            if(trangthai=="tren100"){
            menu.classList.remove('menutora');
            trangthai="duoi100";}
        }
    
    })
})

function myFunction() {
  var x = document.getElementById("saler");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
  

     function broFunction() {
       var x = document.getElementById("saler");
       if (x.style.display === "block") {
         x.style.display = "none";
       } 
       else {
         x.style.display = "none";
       }
     } 



    //  $(window).on('load',function(){
    //     var delayMs = 1000; // delay in milliseconds
      
    //    setTimeout(function(){
    //         $('#myModal').modal('show');
    //      }, delayMs);
    //   });    
  

    const targetDiv = document.getElementById("myModal");
const btn = document.getElementById("close-im");
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};


  jQuery("#carousel").owlCarousel({
  autoplay: true,
  rewind: true, /* use rewind if you don't want loop */
  margin: 20,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 3
    },

    1024: {
      items: 4
    },

    1366: {
      items: 4
    }
  }
});

setInterval(showTime, 1000);
        function showTime() {
            let time = new Date();
            let hour = time.getHours();
            let min = time.getMinutes();
            let sec = time.getSeconds();
            am_pm = "AM";
  
            if (hour > 12) {
                hour -= 12;
                am_pm = "PM";
            }
            if (hour == 0) {
                hr = 12;
                am_pm = "AM";
            }
  
            hour = hour < 10 ? "0" + hour : hour;
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;
  
            let currentTime = hour + ":" 
                + min + ":" + sec + am_pm;
  
            document.getElementById("clock")
                .innerHTML = currentTime;
        }
  
        showTime()
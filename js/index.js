$(document).ready(function(){

    // for responsiv navbar
    function openNav() {
        $("#mySidenav").css("width","100%");
    }
      
    function closeNav() {
        $("#mySidenav").css("width","0")
    }

    $(".droper").click(openNav);
    $(".closenav").click(closeNav);

    // for shadow on scrool under navbars
    var navLarge = $('.nav-lg'); 
    var navSmall = $('.nav-sm');
    var threshold = 100; // Change to pixels scrolled
    
    $(window).scroll(function () {
        var distance = $(this).scrollTop();
        if (distance > threshold) { // If scrolled past threshold
            navLarge.addClass("shadow-bottom white-background");
            navSmall.addClass("shadow-bottom white-background");
            $(".logo-lg").attr('src', "images/LOGO-sm.png");
            $(".others").addClass("black");
        } else { // If user scrolls back to top
            if (navLarge.hasClass("shadow-bottom white-background")) { // And if class has been added
                navLarge.removeClass("shadow-bottom white-background"); // Remove it
                $(".logo-lg").attr('src', "images/LOGO.png");
                $(".others").removeClass("black");
            }
            if (navSmall.hasClass("shadow-bottom white-background")) { // And if class has been added
                navSmall.removeClass("shadow-bottom white-background"); // Remove it
            }
        }

        
    });

    // for hover effect on icons in our depts
    function changeImage(className,imgClass,newImage){
        $(className).mouseenter(function(){
            $(imgClass).attr('src', "images/"+newImage+".png");
        });
    }

    function resetImage(className,imgClass,newImage){
        $(className).mouseleave(function(){
            $(imgClass).attr('src', "images/"+newImage+".png");
        });
    }


    changeImage(".psych",".brain","brain-white");
    resetImage(".psych",".brain","brain-blue");

    changeImage(".lab",".tube","tube-white");
    resetImage(".lab",".tube","tube-blue");

    changeImage(".dent",".teeth","dentistry-white");
    resetImage(".dent",".teeth","dentistry-blue");

    changeImage(".cardio",".heart","heart-white");
    resetImage(".cardio",".heart","heart-blue");

    changeImage(".gynacology",".gyna","gyna-white");
    resetImage(".gynacology",".gyna","gyna-blue");

    changeImage(".medicine",".med","med-white");
    resetImage(".medicine",".med","med-blue");

    changeImage(".crash",".accident","accident-white");
    resetImage(".crash",".accident","accident-blue");

    changeImage(".pedo",".baby","baby-white");
    resetImage(".pedo",".baby","baby-blue");

    changeImage(".prima",".nurse","nurse-white");
    resetImage(".prima",".nurse","nurse-blue");

    changeImage(".well",".bowl","bowl-white");
    resetImage(".well",".bowl","bowl-blue");

    changeImage(".allergy",".virus","virus-white");
    resetImage(".allergy",".virus","virus-blue");


    // for hover change of text headings in our services
    function headingChange(className){
        $(className).mouseenter(function(){
            $(className + " h3").addClass("white");
        });
        
    }

    function headingreset(className){
        $(className).mouseleave(function(){
            $(className + " h3").removeClass("white");
        });
        
    }

    headingChange(".prima");
    headingreset(".prima");

    headingChange(".well");
    headingreset(".well");

    headingChange(".allergy");
    headingreset(".allergy");

})
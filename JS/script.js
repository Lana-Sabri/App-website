$(document).ready(function(){
    $(function(){
        var austDay = new Date();
        austDay = new Date(austDay.getFullYear () + 1, 1 - 1, 26);
        $('#countdown').countdown({until: austDay, format: 'odHMS'});

    });

    var wow = new WOW({
        mobile:false
    });
    wow.init();

    $('.form-control').blur(function(){
        var x = document.forms["myForm"]["email"].value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if(atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
        {
            $(this).parent().find(".alert-success").fadeOut(200);
            $(this).parent().find(".alert-danger").fadeIn(50);  
         }
        else{
            $(this).parent().find(".alert-danger").fadeOut(200);
            $(this).parent().find(".alert-success").fadeIn(200);    
        }
    });

    $('.form-control').blur(function(){
        var x = document.forms["myForm2"]["email2"].value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if(atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
        {
            $(this).parent().find(".alert-danger").fadeIn(50);
            $(this).parent().find(".alert-success").fadeOut(200);

        }
        else{
            $(this).parent().find(".alert-success").fadeIn(200);
            $(this).parent().find(".alert-danger").fadeOut(200);
        }
    });

});
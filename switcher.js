

function switcher(elem){
   var SwitchBtn = $(elem);
   var dataAction  = SwitchBtn.attr('data-action');  //switch
   var dataGroup   = SwitchBtn.attr('data-group');   //transcs
   var dataHandle  = SwitchBtn.attr('data-handle');  //id
   var contentShown = $("#"+dataHandle+"[data-rel='"+dataAction+"'");

   if(dataHandle == sessionStorage.getItem(dataGroup)){
    setTimeout(function(){
       $("[data-handle="+dataHandle+"]").addClass("active")
     },500)
      
    }
   var contentsHide = $("."+dataGroup+"[data-rel='"+dataAction+"'");
   $("[data-action='"+dataAction+"'").removeClass('active');
    sessionStorage.setItem(dataGroup,dataHandle);
    contentsHide.fadeOut(10,function(){
     contentShown.fadeIn(10);
     SwitchBtn.addClass("active")
    });
    
}

function loadSwitcher(...items){ 
      //item => transacs 
   for(var i=0; i < items.length; i++){
     var item = items[i];
     if(sessionStorage.getItem(item)){
       var active = sessionStorage.getItem(item);
       $("[data-group='"+item+"'][data-handle='"+active+"']").click();
     }else{
      $("[data-group='"+item+"']").eq(0).click();
     }
   }
}

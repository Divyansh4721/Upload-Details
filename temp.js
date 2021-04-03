var option=1;
$('#button').click(function(){
  if($(box1).val()==''||$(box2).val()==''||$(box3).val()==''){
    alert('All Values Not Entered');
  }
  else{
    if(option==1){
      $("#right").append('<div id="rightpane1"><span id="contain">Roll No - <span id="bg">'+$(box1).val()+'</span> , <span id="bg">'+$(box2).val()+'</span> has scored <span id="bg">'+$(box3).val()+'</span> marks.</div>');
      option=2;
    }
    else{
      $("#right").append('<div id="rightpane2"><span id="contain">Roll No - <span id="bg">'+$(box1).val()+'</span> , <span id="bg">'+$(box2).val()+'</span> has scored <span id="bg">'+$(box3).val()+'</span> marks.</div>');
      option=1;
    }
    $(box1).val('');
    $(box2).val('');
    $(box3).val('');
  }
});

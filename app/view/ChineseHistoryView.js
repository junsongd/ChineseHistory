Ext.define("ChineseDemo.view.ChineseHistoryView", {
   extend: 'Ext.Container',
   xtype: 'chinesehistoryview',
   config: {
      id: 'chinesehistoryview',   
      width: '100%',
      showAnimation: {
                type: 'slide',
                duration: 200,
                direction:'left'
            }, 
      layout: 'fit',
      items: [ 
          
          {
                 xtype:'panel',
                 id: "chineseimagesview", 
                 items : [ 
                    { 
                        xtype:'panel',
                        id: "chineseimagesview", 
                        html : '<h1>Carousel Demo</h1>'+
                                    '<div id="carousel">'+
                                    '<img src="resources/css/images/1.jpg" id="item-1" class= "imageitem"/>'+
                                    '<img src="resources/css/images/2.jpg" id="item-2" class= "imageitem"/>'+
                                    '<img src="resources/css/images/3.jpg" id="item-3" class= "imageitem"/>'+
                                    '<img src="resources/css/images/4.jpg" id="item-4" class= "imageitem"/>'+
                                    '<img src="resources/css/images/5.jpg" id="item-5" class= "imageitem"/>'+
                                    '<img src="resources/css/images/6.jpg" id="item-6" class= "imageitem"/>'+
                                    '<img src="resources/css/images/7.jpg" id="item-7" class= "imageitem"/>'+
                                    '<img src="resources/css/images/8.jpg" id="item-8" class= "imageitem"/>'+
                                    '<img src="resources/css/images/9.jpg" id="item-9" class= "imageitem"/>'+
                                  '</div>'+
                                  '<a href="#" id="prev">Prev</a> | <a href="#" id="next">Next</a>',
               

                    } 
                ],
                
          }  
      ],
      
      
 
   },
    
   initialize: function() {

           setTimeout(function(){
                             var carousel = $("#carousel").waterwheelCarousel({
                              flankingItems: 3,
                              movingToCenter: function ($item) {
                                $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
                              },
                              movedToCenter: function ($item) {
                                $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
                              },
                              movingFromCenter: function ($item) {
                                $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
                              },
                              movedFromCenter: function ($item) {
                                $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
                              },
                              clickedCenter: function ($item) {
                                $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
                              }
                            });

                            $('#prev').bind('click', function () {
                              carousel.prev();
                              return false
                            });

                            $('#next').bind('click', function () {
                              carousel.next();
                              return false;
                            });

                            $('#reload').bind('click', function () {
                              newOptions = eval("(" + $('#newoptions').val() + ")");
                              carousel.reload(newOptions);
                              return false;
                            });

                             $(".imageitem").click(function(obj){
                                // Holds the product ID of the clicked element
                                 alert(obj.currentTarget.id + " " + "selected");
                             }); 

                        },500); 
     
   }

});
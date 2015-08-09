Ext.define("ChineseDemo.view.HomeViewContainer", {
   extend: 'Ext.Container',
   xtype: 'homeviewcontainer',
   config: {
      id: 'homeviewcontainer',   
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
                 id: "homemenu",
                 layout:"vbox",
                 items:[

                         {
                            xtype: 'button',
                            cls :"homemenuitem history",
                            itemId: ' ', 
                            //text: '汉字的故事',
                            listeners :{ 
                                       tap: function(){
                                             Ext.getCmp('home_navigation_view').push(
                                               {
                                                xtype: 'chinesehistoryview',
                                                title: "汉字的故事" 
                                               }
                                            );
                                     }
                                }
                         },
                         {
                            xtype: 'button',
                            cls :"homemenuitem evolu",
                            itemId: ' ', 
                            //text: '汉字的演变',
                            listeners :{

                                     tap: function(){
                                          Ext.getCmp('home_navigation_view').push(
                                               {
                                                xtype: 'chineseevolusummaryview',
                                                title: "汉字的演变" 
                                               }
                                            );
                                           
                                     }
                                }
                         },  
                         {
                            xtype: 'button',
                            cls :"homemenuitem art",
                            itemId: ' ', 
                           // text: '汉字的艺术',
                            listeners :{

                                      tap: function(){
                                             Ext.getCmp('home_navigation_view').push(
                                               {
                                                xtype: 'chineseartsummaryview',
                                                title: "汉字的艺术" 
                                               }
                                            );
                                     }
                                }
                         }    

                 ]
                  
                 
          }  
      ],
      
      
 
   },
    
   initialize: function() {
     
   }

});
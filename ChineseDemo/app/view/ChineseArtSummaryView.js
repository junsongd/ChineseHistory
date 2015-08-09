Ext.define("ChineseDemo.view.ChineseArtSummaryView", {
   extend: 'Ext.Container',
   xtype: 'chineseartsummaryview',
   config: {
      id: 'chineseartsummaryview',   
      width: '100%',
      showAnimation: {
                type: 'slide',
                duration: 200,
                direction:'left'
            }, 
      layout: 'hbox',
      items: [ 
          
          {
                 xtype:'panel',
                 id: "art_summary", 
                 html : "目录" 
                
          },
          {
                 xtype:'panel',
                 id: "art_list",
                 layout : 'vbox',
                 items : [

                     {
                        xtype : 'button',
                        cls : "art_list_item", 
                        html : "汉字书法" ,
                        listeners: {
                              tap: function() {
                               
                                          Ext.getCmp('home_navigation_view').push(
                                               {
                                                xtype: 'artchlistview',
                                                title: "汉字书法" 
                                               }
                                            );  
 
                               }
                          }

                     },

                     {
                        xtype : 'button',
                        cls : "art_list_item",  
                        html : "名家示范",
                          listeners: {
                              tap: function() {
                                
                                      Ext.getCmp('home_navigation_view').push(
                                               {
                                                xtype: 'artchlistview',
                                                title: "名家示范" 
                                               }
                                            ); 
 
                               }
                          }


                     },

                     {
                        xtype : 'button',
                        cls : "art_list_item",  
                        html : "名帖鉴赏",
                          listeners: {
                              tap: function() {
                                
                                      Ext.getCmp('home_navigation_view').push(
                                               {
                                                xtype: 'artchlistview',
                                                title: "名帖鉴赏" 
                                               }
                                            ); 
 
                               }
                          }


                     }, 


                 ]
                 
                
          }  
      ],
      
      
 
   },
    
   initialize: function() {

     
   }

});
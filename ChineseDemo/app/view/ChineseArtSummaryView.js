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
      layout: 'fit',
      items: [ 
          
          {
                 xtype:'panel',
                 id: "chineseimagesview", 
                 items : [ 
                    { 
                        xtype:'panel',
                        id: "chineseimagesview", 
                        html : '',
               

                    } 
                ],
                
          }  
      ],
      
      
 
   },
    
   initialize: function() {

     
   }

});
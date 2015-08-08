Ext.define("ChineseDemo.view.ChineseEvoluSummaryView", {
   extend: 'Ext.Container',
   xtype: 'chineseevolusummaryview',
   config: {
      id: 'chineseevolusummaryview',   
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
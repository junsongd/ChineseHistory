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
                        html : '',
               

                    } 
                ],
                
          }  
      ],
      
      
 
   },
    
   initialize: function() {

     
   }

});
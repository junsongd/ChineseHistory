Ext.define("ChineseDemo.view.ChineseEvoluView", {
   extend: 'Ext.Container',
   xtype: 'chineseevoluview',
   config: {
      id: 'chineseevoluview',   
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
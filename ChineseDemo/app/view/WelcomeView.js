Ext.define("ChineseDemo.view.WelcomeView", {
   extend: 'Ext.Container',
   xtype: 'welcomeview',
   config: {
      id: 'welcomeview',   
      width: '100%',
      hideAnimation: {
            type: 'flip',
            duration: 500,
            easing: 'ease-out'
        },  
      layout: 'fit',
      items: [ 
          
          {
               xtype:'panel',
               cls : "welcomeviewcontainer",
               listeners:[
                             {
                                element: 'element',
                                event: 'tap',
                                fn: function() {
                                    setTimeout(function(){ 
                                  
                                         Ext.getCmp('welcomeview').hide();
                                    },100);  
                                }
                            }
                      ]    
          }  
      ],
      
      
 
   },
    
   initialize: function() {
     
   }

});
Ext.define("ChineseDemo.view.WelcomeView", {
   extend: 'Ext.Container',
   xtype: 'welcomeview',
   config: {
      id: 'welcomeview',   
      width: '100%',
      hideAnimation: {
            type: 'flip',
            duration: 1000,
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
                                   Ext.getCmp('welcomeview').hide();
                                    setTimeout(function(){   
                                         Ext.getCmp('homeview').show();
                                    },1000);  
                                }
                            }
                      ]    
          }  
      ],
      
      
 
   },
    
   initialize: function() {
     
   }

});
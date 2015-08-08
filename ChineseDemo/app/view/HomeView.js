Ext.define("ChineseDemo.view.HomeView", {
   extend: 'Ext.Container',
   xtype: 'homeview',
   config: {
      id: 'homeview',   
      width: '100%',
      showAnimation: {
                type: 'slide',
                duration: 200,
                direction:'left'
            }, 
      layout: 'fit',
      items: [ 
          
          {
                 xtype:'navigationview',
                 id: "home_navigation_view",
                 defaultBackButtonText: ' ',
                 navigationBar : {
                  docked : 'top',
                  cls:'nav-toolbar  app-toolbar-top',
                  title:'',
                  items : [
                    
                  ]
                },
                items : [ 
                  { 
                    xtype :'homeviewcontainer',
                     title : '汉字演示',  
                  } 
                ]
          }  
      ],
      
      
 
   },
    
   initialize: function() {
     
   }

});
Ext.define("ChineseDemo.view.ArtChListView", {
   extend: 'Ext.Container',
   xtype: 'artchlistview',
   config: {
      id: 'artchlistview',   
     // width: '100%',
      showAnimation: {
                type: 'slide',
                duration: 200,
                direction:'left'
            }, 
       
      items: [ 
                { 
                    //give it an xtype of list for the list component
                    xtype: 'dataview',
                    itemId :'artDataview',

                    height: 205,

                    scrollable: 'horizontal',

                    inline: {
                        wrap: false
                    },
                 
                    defaults: {
                          styleHtmlContent: true
                      },
                     itemTpl: '<img src="{imageurl}"><div>{name}</div>', 

                     store : "artcharacterstore"

                }
            ],
                  
      
 
   },
    
   initialize: function() {
     /**
       var store = Ext.getStore('artcharacterstore');
        var dv = Ext.ComponentQuery.query('dataview[itemId=artDataview]')[0];
        dv.setStore(store);
        store.load(function(){
            console.log(this); 
        }); **/
   }

});  
 
 /**
  Ext.define("ChineseDemo.view.ArtChListView", {
   extend: 'Ext.Container',
   xtype: 'artchlistview',
   config: {
      id: 'artchlistview',   
      width: '100%',
      showAnimation: {
                type: 'slide',
                duration: 200,
                direction:'left'
            }, 
      
       layout : 'fit',
      items: [ 
                {
                    xtype : "carousel",
                    itemId :'artDataview',
                      fullscreen: true,

            defaults: {
                styleHtmlContent: true
            },

            items: [
                {
                    html : 'Item 1',
                    style: 'background-color: #5E99CC'
                },
                {
                    html : 'Item 2',
                    style: 'background-color: #759E60'
                },
                {
                    html : 'Item 3'
                }
            ]
 

                }
            ],
                  
      
 
   },
    
   initialize: function() {
     
      
   }
         

}); **/
 
 

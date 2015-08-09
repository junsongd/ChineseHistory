Ext.define("ChineseDemo.model.ArtCharacterModel", {
   extend: "Ext.data.Model",
   xtype:'artcharactermodel',
   config: { 
       fields: [
            
            { name: 'imageurl', type: 'string' },
            { name: 'name', type: 'string' }, 

         ],

   }
});
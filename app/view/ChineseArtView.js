Ext.define('ChineseDemo.view.ChineseArtView', {
    extend: 'Ext.tab.Panel',
    xtype: 'chineseartview',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom', 
        items: [
            
            {
                title: '篆书',
               // iconCls: 'action', 
                items: [ 
                    {
                        xtype: 'video',
                        id : "myvideos",
                        url: 'resources/css/images/dizzy.mp4',
                        posterUrl: 'resources/css/images/shufa.jpg',
                        preload: true,
                        loop: false,

                    }
                ] ,

                
            } ,
             {
                title: '隶书',
               // iconCls: 'action', 
                items: [ 
                    {
                        xtype: 'video',
                        id : "myvideos",
                        url: 'resources/css/images/dizzy.mp4',
                        posterUrl: 'resources/css/images/shufa.jpg',
                        preload: true,
                        loop: false,

                    }
                ] ,

                
            } ,
             {
                title: '草书',
               // iconCls: 'action', 
                items: [ 
                    {
                        xtype: 'video',
                        id : "myvideos",
                        url: 'resources/css/images/dizzy.mp4',
                        posterUrl: 'resources/css/images/shufa.jpg',
                        preload: true,
                        loop: false,

                    }
                ] ,

                
            } ,
             {
                title: '楷书',
               // iconCls: 'action', 
                items: [ 
                    {
                        xtype: 'video',
                        id : "myvideos",
                        url: 'resources/css/images/dizzy.mp4',
                        posterUrl: 'resources/css/images/shufa.jpg',
                        preload: true,
                        loop: false,

                    }
                ] ,

                
            }  
        ],

    }
});

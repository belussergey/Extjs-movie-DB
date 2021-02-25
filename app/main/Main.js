Ext.define('Test.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'appMain',

    viewModel:{},
    height:'100%',

    items:[
        {
            xtype:'moviedb'
        }
    ]
});

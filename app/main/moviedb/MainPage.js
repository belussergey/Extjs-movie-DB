Ext.define('Test.main.moviedb.MainPage', {
    extend: 'Ext.container.Container',
    xtype: 'moviedb-main',
    layout: {
        type: 'vbox',
        align: 'right'
    },

    height: '100%',
    width: '100%',
    items: [
        {
            flex: 1,
        },
        {
            xtype: 'button',
            text: 'Избранное',
            handler: 'handleOpenFavorites',
        },
        {
            xtype: 'dataview',
            scrollable: 'y',
            height: 850,
            width: '100%',
            bind: {
                store: '{films}',
            },
            listeners: {
                itemdblclick: 'openDescription'
            },
            itemSelector: '.container-box',
            tpl: '<div class="container">' +
                '<tpl for="."><div class="container-box">' +
                '<img class="container-box-image" src="{poster_path}"/>' +
                '</div></tpl>></div>'
        },
        {
            xtype: 'grid',
            height: '100%',
            width: '100%',
            dockedItems: {
                xtype: 'pagingtoolbar',
                dock: 'bottom',
                bind: {
                    store: '{films}'
                },
                displayInfo: true,
                displayMsg: 'C {0} по {1}, из {2}'
            }
        }
    ]
});

Ext.define('Test.main.favorites.Favorites', {
    extend: 'Ext.container.Container',
    xtype: 'favorites',

    height: '100%',
    width: '100%',

    items: [
        {
            xtype: 'grid',
            height: '100%',
            width: '100%',
            bind: {
                store: '{favorites}',
                selection: '{selectedFilm}'
            },
            tbar: [{
                xtype: 'button',
                text: 'Удалить',
                bind: {
                    handler: 'handleDelFavorite',
                    hidden: '{!selectedFilm}'
                },
            },
                {
                    xtype: 'container',
                    flex: 1
                },
                {
                    xtype: 'button',
                    text: 'Вернуться на главную',
                    handler: 'openMain'
                }
            ],
            columns: [
                {
                    xtype: 'templatecolumn',
                    text: 'Изображение',
                    tpl: '<img height="100" src="{poster_path}"/>',
                    dataIndex: 'poster_path',
                    align: 'center',
                    flex: 2
                },
                {
                    text: 'Название',
                    dataIndex: 'title',
                    flex: 2,
                    align: 'left'
                },
                {
                    text: 'Описание',
                    dataIndex: 'overview',
                    flex: 4,
                    align: 'left'
                }
            ]
        }
    ]
});

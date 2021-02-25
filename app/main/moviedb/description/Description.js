Ext.define('Test.main.moviedb.description.Description', {
    extend: 'Ext.container.Container',
    xtype: 'description',
    viewModel: 'description',
    controller: 'description',

    layout: 'hbox',
    margin: 20,
    height: 800,
    items: [
        {
            xtype: 'container',
            width: 300,
            items: [
                {
                    xtype: 'box',
                    height: 250,
                    bind: {
                        data: '{currentFilm}'
                    },
                    tpl: '<img height="400" width="280" src="{poster_path}">'
                }
            ],
        },
        {
            xtype: 'container',
            layout: 'vbox',
            height: '100%',
            items: [
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Название',
                    labelCls: 'display-field--label',
                    cls: 'display-field',
                    bind: {
                        value: '{currentFilm.title}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Описание',
                    labelCls: 'display-field--label',
                    cls: 'display-field',
                    maxWidth: 600,
                    bind: {
                        value: '{currentFilm.overview}'
                    }
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        align: 'left'
                    },
                    items: [
                        {
                            xtype: 'button',
                            text: 'Добавить в избранное',
                            handler: 'handleAddFavorite',
                            bind: {
                                hidden: '{currentFilm.isFavorite}'
                            },
                        },
                        {
                            xtype: 'button',
                            text: 'Удалить из избранного',
                            handler: 'handleDeleteFavorite',
                            bind: {
                                hidden: '{!currentFilm.isFavorite}'
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Вернуться на главную',
                            handler: 'openMain'
                        }
                    ]
                }
            ]
        }
    ]
});

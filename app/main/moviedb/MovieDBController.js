Ext.define('Test.main.moviedb.MovieDBController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.moviedb',

    init: function () {
        var vm = this.getViewModel(),
            films = vm.get('films');

        this.readFromLocalStorage();
        films.load();
    },

    routes: {
        'home': 'onHome',
        'home/:id': {
            action: 'onDescription',
        },
        'favorites': 'onFavorites'
    },

    onHome: function () {
        var view = this.getView();

        view.removeAll();
        view.add({
            xtype: 'moviedb-main'
        });
    },

    openDescription: function (cmp, record) {
        if (record.id) {
            this.redirectTo('home/' + record.id);
        }
    },

    onDescription: function (id) {
        var view = this.getView();

        view.removeAll();
        view.add({
            xtype: 'description',
            recordId: id
        });
    },

    handleOpenFavorites: function () {
        this.redirectTo('favorites');
    },

    onFavorites: function () {
        var view = this.getView();

        view.removeAll();
        view.add({
            xtype: 'favorites'
        });
    },

    handleDelFavorite: function () {
        var vm = this.getViewModel(),
            selectedFilm = vm.get('selectedFilm'),
            favorites = vm.get('favorites');

        if (selectedFilm) {
            selectedFilm.set('isFavorite', false);
            favorites.remove(selectedFilm);
        }
        this.saveToLocalStorage();
    },

    openMain: function () {
        this.redirectTo('home');
    },

    saveToLocalStorage: function () {
        var vm = this.getViewModel(),
            favorites = vm.get('favorites'),
            data = [];

        favorites.each(function (record) {
            data.push(record.getData())
        });

        localStorage.setItem('favorites', JSON.stringify(data));
    },

    readFromLocalStorage: function () {
        var vm = this.getViewModel(),
            favorites = vm.get('favorites'),
            data = localStorage.getItem('favorites'),
            list = data ? JSON.parse(data) : [];

        favorites.add(list);
    },

    handleLoad: function (store) {
        var vm = this.getViewModel(),
            favorites = vm.get('favorites');

        store.each(function (recordFilm) {
            var isFavorite = favorites.findBy(function (recordFavorite) {
                return (recordFilm.id === recordFavorite.id);
            }) >= 0;
            recordFilm.set('isFavorite', isFavorite);
        });
    }
});

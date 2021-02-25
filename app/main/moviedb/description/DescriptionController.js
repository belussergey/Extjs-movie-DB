Ext.define('Test.main.moviedb.description.DescriptionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.description',

    init: function () {
        var vm = this.getViewModel(),
            view = this.getView(),
            films = vm.get('films'),
            currentFilm = films.getById(view.recordId);

        if (currentFilm) {
            vm.set('currentFilm', currentFilm);
        } else {
            this.redirectTo('home')
        }
    },

    handleAddFavorite: function () {
        var vm = this.getViewModel(),
            currentFilm = vm.get('currentFilm'),
            favorites = vm.get('favorites');

        if (currentFilm) {
            currentFilm.set('isFavorite', true)
            favorites.add(currentFilm)
        }
        this.saveToLocalStorage();
    },

    handleDeleteFavorite: function () {
        var vm = this.getViewModel(),
            currentFilm = vm.get('currentFilm'),
            favorites = vm.get('favorites');

        if (currentFilm) {
            currentFilm.set('isFavorite', false);
            favorites.remove(currentFilm);
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
    }
});

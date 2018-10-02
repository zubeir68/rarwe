import Ember from 'ember';

export default Ember.Controller.extend({
    title: '',

    songCreatedStarted: false,

    canCreateSong: Ember.computed('songCreationStarted', 'model.song.length', function() {
        return this.get('songCreationStarted') || this.get('model.songs.length');
    }),

    actions: {
        enableSongCreation: function() {
            this.set('songCreationStarted', true);
        }
    },  

    isAddButtonDisabled: Ember.computed('title', function() {
        return Ember.isEmpty(this.get('title'));
    })
}); 

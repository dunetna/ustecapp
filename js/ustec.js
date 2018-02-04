/**
 * USTECapp provides the most important news from USTEC
 * 
 * @source: https://gitlab.com/ustec/ustecapp
 * 
 * @licstart Copyright (C) 2018 Mònica Ramírez Arceda
 * 
 * The JavaScript code in this page is free software: you can redistribute it
 * and/or modify it under the terms of the GNU General Public License (GNU GPL)
 * as published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version. The code is distributed
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE. See the GNU GPL for more details.
 * 
 * As additional permission under GNU GPL version 3 section 7, you may
 * distribute non-source (e.g., minimized or compacted) forms of that code
 * without the copy of the GNU GPL normally required by section 4, provided you
 * include this license notice and a URL through which recipients can access the
 * Corresponding Source.
 * @licend
 */

var protocol = 'http://'
    var host = 'main.sindicat.net'
        var important_entries_URL = protocol + host + '/json/important_entries';
var tags_URL = protocol + host + '/json/tags';

Vue.use(VueMaterial)
Vue.material.registerTheme('default', {
    primary: {
        color: 'lime',
        hue: 'A700'
    },
    accent: {
        color: 'blue',
        hue: '900'
    }
})

var App = new Vue({
    el: '#app',
    data: {
        entries: [],
        entry_text: "", // current clicked entry
        tags: [], 
        entries_list_visible: true, // flag that indicates if we are in main page
        entry_visible: false, // flag that indicates if we are viewing an entry
    },
    mounted() {
        this.refresh();
        // Refresh news list every minute
        setInterval(function () {
            this.refresh();
        }.bind(this), 60000);
    },
    methods: {
        refresh: function() {
            this.get_entries();
            this.get_tags();
        },
        get_entries: function(){
            var self = this;
            // Get all entries from server
            $.getJSON(important_entries_URL, function(data) {
                self.entries = data;
                // Add host to images URL
                // HTML with an embedded image is sent with the following format:
                // <img src="/media/.../image_name.png" ... />
                // Image will be get from server, we must compose the whole URL:
                // <img src="http://main.sindicat.net/media/.../image_name.png" ... />
                for (i=0; i< self.entries.length; i++){
                    self.entries[i].summary = self.entries[i].summary.replace("/media", protocol + host + "/media");
                    self.entries[i].body = self.entries[i].body.replace("/media", protocol + host + "/media");
                }
            });
        },
        get_tags: function(){
            var self = this;
            $.getJSON(tags_URL, function(data) {
                stored_tags = JSON.parse(localStorage.getItem("tags"));
                self.tags = data;
                self.reset_filters();
                // Get previous values of existent tags and 
                // set if they were checked or not
                for (i=0; i<self.tags.length; i++){
                    for (j=0; j<stored_tags.length; j++){
                        if(self.tags[i].name == stored_tags[j].name){
                            self.tags[i].checked = stored_tags[j].checked;
                        }
                    }
                }
            });
        },
        reset_filters: function () {
            // Add an attribute to each tag in filters to set if they are
            // checked or not. By default, they are checked.
            for (i=0; i< this.tags.length; i++){
                this.tags[i].checked = true;
            }
        },
        get_entry: function (pk) {
            // Search clicked entry
            for (i=0; i< this.entries.length; i++){
                if(this.entries[i].pk == pk){        		
                    if (this.entries[i].body){
                        // If entry has body, show summary as title and body
                        this.entry_text = "<h2>" + 
                                          this.entries[i].summary + 
                                          "</h2>" + 
                                          this.entries[i].body;
                    }
                    break;
                }
            }
            // Show clicked entry
            this.entries_list_visible = false;
            this.entry_visible = true;
        },
        // Go to main page
        go_home: function () {
            // Show list of entries
            this.entries_list_visible = true;
            this.entry_visible = false;
        },
        // Open menu
        filter: function () {
            // Show menu
            this.$refs.rightSidenav.open();
        },
        // Refresh list of entries and close menu
        refresh_close_menu: function(){
            this.refresh();
            this.$refs.rightSidenav.close();
        },
        // Check if an entry must be visible or not,
        // depending on the filters (tags checked or not)
        show_entry: function(entry){
            // Loop all tags of this entry
            for(i=0; i<entry.tags.length; i++){
                // Loop all tags
                for(j=0; j<this.tags.length; j++){
                    // If the entry has this tag and the tag is checked, 
                    // show the entry
                    if(entry.tags[i].name == this.tags[j].name && 
                            this.tags[j].checked){
                        return true;
                    }
                }
            }
            // If any tag of this entry is checked, do not show the entry
            return false;    	
        },
        refresh_list: function(){
            this.entries_list_visible = false;
            this.entries_list_visible = true;
        },
        save_filters: function(){
            localStorage.setItem("tags", JSON.stringify(this.tags));
        },
        openDialog(ref) {
            this.$refs[ref].open();
        },
        closeDialog(ref) {
            this.$refs[ref].close();
        },
    }
})
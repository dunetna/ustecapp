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
	
var protocol = 'http://'
var host = 'localhost:8000'
var important_entries_URL = protocol + host + '/json/important_entries';
var tags_URL = protocol + host + '/json/tags';

var App = new Vue({
  el: '#app',
  data: {
    entries: [], // empty array for all entries
    entry_text: "", // current clicked entry
    tags: [], // empty array for all tags
    entries_list_visible: true, // flag that indicates if we are in main page
    entry_visible: false, // flag that indicates if we are viewing an entry
  },
  mounted() { // when the Vue app is booted up, this is run automatically.
	  this.refresh();
  },
  methods: {
	refresh: function() {
		var self = this // create a closure to access component in the callback below
	    // Get all entries from server
	    $.getJSON(important_entries_URL, function(data) {
	      self.entries = data;
	      // Add host to images URL
	      for (i=0; i< self.entries.length; i++){
	    	self.entries[i].summary = self.entries[i].summary.replace("/media", protocol + host + "/media");
	    	self.entries[i].body = self.entries[i].body.replace("/media", protocol + host + "/media");
	      }
	    });
	    // Get all tags
	    $.getJSON(tags_URL, function(data) {
	    	stored_tags = JSON.parse(localStorage.getItem("tags"));
	        self.tags = data;
	        self.reset_filters();
	        // Get previous values of existent tags and set if they were checked or not
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
		// Add an attribute to each tag to set if it is checked or not in filters
        // By default, it is checked
        // TODO: save filters in local storage
		for (i=0; i< this.tags.length; i++){
        	this.tags[i].checked = true;
        }
	},
	// Get clicked entry
    get_entry: function (pk) {
    	// Search clicked entry
    	for (i=0; i< this.entries.length; i++){
        	if(this.entries[i].pk == pk){        		
        		if (this.entries[i].body != ''){
        			// If entry has body, show summary as title and body
        			this.entry_text = "<h2>" + this.entries[i].summary + "</h2>" + this.entries[i].body;
        		} else {
        			// If entry has no body, show only summary
        			this.entry_text = this.entries[i].summary;
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
    // Go to main page
    filter: function () {
    	// Show filters
    	this.$refs.rightSidenav.open();
    },
    // Check if an entry must be visible or not, 
    // depending on the filters (tags checked or not)
    show_entry: function(entry){
    	// Loop all tags of this entry
    	for(i=0; i<entry.tags.length; i++){
    		// Loop all tags
    		for(j=0; j<this.tags.length; j++){
    			// If the entry has this tag and the tag is checked, show the entry
    			if(entry.tags[i].name == this.tags[j].name && 
    			   this.tags[j].checked == true){
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
    }
  }
})
Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
	  primary: {
		  color: 'lime',
		  hue: 'A700'
	  }
	})
	
var protocol = 'http://'
var host = 'localhost:8000'
var dataURL = protocol + host + '/json';

var App = new Vue({
  el: '#app',
  data: {
    entries: [], // empty array for all entries
    entry_text: "", // current clicked entry
    entries_list_visible: true, // flag that indicates if we are in main page
    entry_visible: false, // flag that indicates if we are viewing an entry
    filter_visible: false
  },
  mounted() { // when the Vue app is booted up, this is run automatically.
    var self = this // create a closure to access component in the callback below
    // Get all entries from server
    $.getJSON(dataURL, function(data) {
      self.entries = data;
      // Add host to images URL
      for (i=0; i< self.entries.length; i++){
    	self.entries[i].summary = self.entries[i].summary.replace("/media", protocol + host + "/media");
    	self.entries[i].body = self.entries[i].body.replace("/media", protocol + host + "/media");
      }
    });
  },
  methods: {
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
        this.filter_visible = false;
    },
    // Go to main page
    go_home: function () {
    	// Show list of entries
    	this.entries_list_visible = true;
        this.entry_visible = false;
        this.filter_visible = false;
    },
    // Go to main page
    filter: function () {
    	// Show filters
    	this.entries_list_visible = false;
        this.entry_visible = false;
        this.filter_visible = true;
    },
  }
})
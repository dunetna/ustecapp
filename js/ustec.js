Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
	  primary: {
		  color: 'lime',
		  hue: 'A700'
	  }
	})
	
var dataURL = 'http://localhost:8000/json';

var App = new Vue({
  el: '#app',
  data: {
    entries: [], // initialize empty array
    entry_text: "",
    entries_list_visible: true,
    entry_visible: false
  },
  mounted() { // when the Vue app is booted up, this is run automatically.
    var self = this // create a closure to access component in the callback below
    $.getJSON(dataURL, function(data) {
      self.entries = data;
    });
  },
  methods: {
    get_entry: function (pk) {
    	for (i=0; i< this.entries.length; i++){
        	if(this.entries[i].pk == pk){
        		this.entry_text = this.entries[i].body;
        		break;
        	}
        }
    	this.entries_list_visible = false;
        this.entry_visible = true;
        
    },
    go_home: function () {
    	this.entries_list_visible = true;
        this.entry_visible = false;
    },
  }
})
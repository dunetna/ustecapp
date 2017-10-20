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
    entries_list_visible: true,
    entry_visible: false
  },
  mounted() { // when the Vue app is booted up, this is run automatically.
    var self = this // create a closure to access component in the callback below
    $.getJSON(dataURL, function(data) {
      self.entries = data;
    });
  }
})
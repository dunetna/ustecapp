Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
	  primary: {
		  color: 'lime',
		  hue: 'A700'
	  }
	})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Testing Vue'
  }
})
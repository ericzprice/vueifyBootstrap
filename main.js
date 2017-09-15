  // {{name}} is a tag
  Vue.component('my-comp', {
    template: `
        <div class="jumbotron">
            <div>{{ptitle}}</div>
            <div>{{pauthor}}</div>
            <div>{{pcontent}}</div>
        </div>
    `,
    props: ['ptitle','pauthor','pcontent'],
    data: function(){
        // for components' data, we must define a function that returns an object, instead of just using an object.
        return {
            // the great part about using a function instead of an object here is that each instance of this component can keep track of its own data. In this example, each instance knows when it was instantiated.
            loginTime: new Date()
        }
    },
    // this section is like data, but it's for data that is computed based upon other data.
    computed: {
        // computed properties can be tricky, because we define them like functions, but they get used like data.
        prettyLoginTime: function(){
            return this.loginTime.toLocaleTimeString()
        }
    },

    // the methods section is mostly intended for functions that run in response to user interactions.
    methods: {

        // // this DOES work, but it's less efficient than using a computed property in this case.
        // // getPrettyLoginTime: function(){
        // //     return this.loginTime.toLocaleTimeString()
        // // },
        //
        // block: function(){
        //     console.log('Blocked!')
        //     // we need to define our own custom event here, called 'blocked'
        //     // components can't directly change data in their parent vm, but they can emit events to alert the parent that work needs to be done.
        //     this.$emit('blocked')

        }
})


var mainVm = new Vue({
  el : '#app',
  data : {
    books:[
      {
        title: 'Sidhartha',
        author: 'Hesse',
        content: 'Buddha stuff'
      },
      {
        title: 'Christianity',
        author: 'Jesus',
        content: 'letting it be'
      },
      {
        title: 'Christianity',
        author: 'Jesus',
        content: 'letting it be'
      },
      {
        title: 'Christianity',
        author: 'Jesus',
        content: 'letting it be'
      },
      {
        title: 'Christianity',
        author: 'Jesus',
        content: 'letting it be'
      },
      {
        title: 'Christianity',
        author: 'Jesus',
        content: 'letting it be'
      },
      {
        title: 'Christianity',
        author: 'Jesus',
        content: 'letting it be'
      },
      {
        title: 'Christianity',
        author: 'Jesus',
        content: 'letting it be'
      },
      {
        title: 'Christianity',
        author: 'Jesus',
        content: 'letting it be'
      },
      {
        title: 'Christianity',
        author: 'Jesus',
        content: 'letting it be'
      },
    ]
  }
})

# Vueify Bootstrap

Bootstrap provides many components which are quite useful. Unfortunately, using some of these components requires a lot of repetitive boilerplate code. 
For example, if you use the bootstrap modal 10 times throughout your app, each of those modals will probably share 95% of their code with each other, and only a few details will be different. 
For this exercise, you need to choose a bootstrap component from https://getbootstrap.com/docs/3.3/components or https://getbootstrap.com/docs/3.3/javascript, and create a vue component which wraps the bootstrap component. 
The vue component you make should be flexible, so you can use the component properties to specify how each of your 10 modals is different, but all the redundant code that is the same across all of your modals should be hidden in the definition of the component, so you don't have to look at that redundant code in your HTML. 

Ideally, we'd like to write modals in our HTML like this:

```html
<my-modal 
    v-bind:modal-title="vm.modalTitle" 
    v-bind:modal-content="vm.modalContent" 
    v-bind:modal-footer="vm.modalFooter"
>
</my-modal>

```

Instead of this:

```html
<div class="modal fade" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Modal title</h4>
      </div>
      <div class="modal-body">
        <p>One fine body&hellip;</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
```

Depending on which Bootstrap component you choose to turn into a Vue component, this exercise might be very challenging, or relatively simple. Turning the Bootstrap Jumbotron component into a Vue component would be relatively easy. Turning the modal into a Vue component, like in the example above, will be moderately challenging. Making a Vue component out of the split-button dropdown menus will be pretty tricky. 
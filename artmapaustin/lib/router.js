Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('maphome', {path: '/'});

  this.route('markerSubmit', {
    path: '/submit'
  });
})

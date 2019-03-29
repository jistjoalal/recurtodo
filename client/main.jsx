import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App'

import 'bootstrap/dist/js/bootstrap.bundle.min';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/serviceWorker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

Meteor.startup(() => {
  render(<App />, document.getElementById('react-target'));
});

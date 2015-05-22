// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.turbolinks
//= require turbolinks
//= require bootstrap
//= require mapbox.js
//= require_tree .
$(document).ready(function(){
            L.mapbox.accessToken = 'pk.eyJ1IjoiZmV0aXNvdnNlcmdleSIsImEiOiI0X09HSjZFIn0.aU0mwcW1UZIj5ZWVBFkRdQ';
            var map = L.mapbox.map('map', 'examples.map-i86nkdio').setView([56.643752,36.268878], 14);
          L.control.layers({
          'Схема': L.mapbox.tileLayer('examples.map-i86nkdio').addTo(map),
          'Спутник': L.mapbox.tileLayer('examples.map-igb471ik')
          }).addTo(map);
          map.touchZoom.disable();
          map.scrollWheelZoom.disable();
          var marker = L.marker([56.64358,36.279195],
          {
          icon: L.mapbox.marker.icon({'marker-color': '#000000','marker-size': 'large'})
          }).addTo(map);
        });
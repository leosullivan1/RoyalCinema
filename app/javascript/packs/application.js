// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

// Default:
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// Boostrap 4:
import 'bootstrap'
// import './bootstrap'

// Enables the tooltips & popovers:
document.addEventListener("turbolinks:load", () => {
    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="popover"]').popover()
});

// FontAwesome scripting:
// import "@fortawesome/fontawesome-free/js/all";

import './easing'
import './move-top'
import './responsiveslides'
// import './SmoothScroll.min'
import './SmoothScroll'

import './jquery.cm-overlay'
import './jquery.cntl'
// import './jquery.mobile-1.5.0-rc1.min'
import './jquery.tools.min'
import './skill.bars.jquery'
import './jquery.mobile.custom.min'



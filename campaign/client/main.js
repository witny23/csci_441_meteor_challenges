import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Candidates} from './../imports/api/candidates.js'; 
import {Tracker} from 'meteor/tracker';

import App from '../imports/ui/App.js';

Meteor.startup(() => {
  Tracker.autorun(() => { 

    let candidates_in_db = Candidates.find().fetch();
    let title = 'The big Campaign';
    let moderator = 'Grace Hopper';

    ReactDom.render(<App  main_title_prop={title} 
                          main_moderator_prop={moderator} 
                          main_candidate_obj_prop={candidates_in_db}/>, 
                        document.getElementById('content'));
  });

});



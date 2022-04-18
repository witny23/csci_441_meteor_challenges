import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Calculate_rank_and_position_for_candidates, Candidates} from './../imports/api/candidates.js'; 
import {Tracker} from 'meteor/tracker';
import Instructions from './../imports/ui/Instructions.js';
import App from './../imports/ui/App.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


Meteor.startup(() => {
  Tracker.autorun(() => { 

    let candidates_in_db = Candidates.find({}, {sort: {votes: -1}}).fetch();
    let title = 'The big Campaign';
    let moderator = 'Grace Hopper';

    let positioned_candidates = Calculate_rank_and_position_for_candidates(candidates_in_db);

    let jsx = (
      <>
        <Instructions />
        <App 
          main_title_prop={title} 
          main_moderator_prop={moderator}
          main_candidate_obj_prop={candidates_in_db}
        />

      </>
          
    );
    ReactDom.render(jsx, document.getElementById('content'));
  });
  


});



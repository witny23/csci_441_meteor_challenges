import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Calculate_rank_and_position_for_candidates, Candidates} from './../imports/api/candidates.js'; 
import {Tracker} from 'meteor/tracker';
import Instructions from './../imports/ui/Instructions.js';
import App from './../imports/ui/App.js';
import NotFound from './../imports/ui/NotFound.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




Meteor.startup(() => {
  Tracker.autorun(() => { 

    let title = 'The big Campaign';
    let moderator = 'Grace Hopper';
    let candidates_in_db = Candidates.find({}, {sort: {votes: -1}}).fetch();
    let positioned_candidates = Calculate_rank_and_position_for_candidates(candidates_in_db);

    const routes = (  

      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Instructions />} />
          <Route path="/App" element={<App 
                                        main_title_prop={title} 
                                        main_moderator_prop={moderator}
                                        main_candidate_obj_prop={positioned_candidates}
                                      />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    );

    ReactDom.render(routes, document.getElementById('content'));
  });
  


});



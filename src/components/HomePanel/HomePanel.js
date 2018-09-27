import React, { Component } from 'react';
import FilterBlock from './../FilterBlock/FilterBlock';
import FormCheckInline from './../FormCheckInline/FormCheckInline';

class HomePanel extends Component {
  render() {
    return (
      <div className="home-wrap">
        <div className="container">
          <div className="panel-home">
            <div className="panel-col-1 panel-flash px-5">
              <span>Image Laurie Rowan</span>
            </div>
            <div className="panel-col-2 px-5">
              <h1 className="font-weight-bold h2 mb-3">Find the right marijuana for your mood</h1>
              <FilterBlock filterTitle="I want to feel:">
                <FormCheckInline label="Happy" id="check1"/>
                <FormCheckInline label="Relaxed" id="check2"/>
                <FormCheckInline label="Euphoric" id="check3"/>
                <FormCheckInline label="Uplifted" id="check4"/>
              </FilterBlock>
            </div>
          </div>
      </div>
    </div>
    );
  }
}

export default HomePanel;
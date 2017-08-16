import React, { Component } from 'react';
import axios from 'axios';

class Form1 extends Component {

  _handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/category", this.state).then((res) => {
      console.log("Success!");
    })
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="center">
        <form id="jsAutoSum1" name="charges">								
          <fieldset>
            <legend>CHARGES</legend>
            <input class="amount" id="charge3" name="total" type="text" value="" autocomplete="off" /*onFocus="startTime();" onBlur="stop_Time();"*/ />
            <label for="tendr">sales + tips </label><br />
            <div class="clear"></div>
            <input class="amount" id="charge2" name="grats" type="text" value="" autocomplete="off" /*onFocus="startTime();" onBlur="stop_Time();"*/ />
            <label for="grats">- tips </label><br />
            <div class="clear"></div>
            <input class="amount fixed" id="charge1" name="sales" type="text" value="0.00" readonly />
            <label for="sales">= sales </label><br />
            <div class="clear"></div>
            <button class="apply" type="reset" /*onClick="document.allTotals.reset();"*/ title="Clear form and start over">Reset all values!</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form1;
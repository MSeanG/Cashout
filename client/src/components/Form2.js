import React, { Component } from 'react';
import axios from 'axios';

class Form2 extends Component {

  _handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/users", this.state).then((res) => {
      console.log("Success!");
    })
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="center">
      <form id="jsAutoSum2" name="allTotals" action="cashOutReport.html" method="post">
        <fieldset id="reportTotals">
          <legend>EMPLOYEE SHIFT SALES LEDGER</legend>
          <input class="amount" id="allTotals1" name="orders" type="text" value="" autocomplete="off" /*onFocus="startTime();" onBlur="stop_Time();"*/ />
          <label for="orders">a = Total Dine In Orders</label>
          <span><strong>"Servers Dine In Sales Report"</strong></span><div class="clear"></div>
          
          <input class="amount fixed" id="allTotals2" name="credit" type="text" value="0.00" autocomplete="off" readonly />
          <label class="fixed" for="credit">b = Total Charge Sales Plus Tips</label>
          <span class="fixed">"Cashier Out Money Count Report"</span><div class="clear"></div>
          
          <input class="amount" id="allTotals3" name="payout" type="text" value="" autocomplete="off" /* onFocus="startTime();" onBlur="stop_Time();" */ />
          <label for="payout">c = Total Pay Outs</label>
          <span><strong>"Cashier Closing Report"</strong></span><div class="clear"></div>
          
          <input class="amount fixed" id="allTotals4" name="plus" type="text" value="0.00" autocomplete="off" readonly />
          <label class="fixed" for="plus">d = ( b + c )</label>
          <span class="fixed">auto sum (total charges and payouts)</span><div class="clear"></div>
          
          <input class="amount fixed" id="allTotals5" name="minus" type="text" value="0.00" autocomplete="off" readonly />
          <label class="fixed" for="minus">e = ( a - d )</label>
          <span class="fixed">auto sum (projected total cash on hand)</span><div class="clear"></div>
          
          <input class="amount" id="allTotals6" name="cash" type="text" value="" autocomplete="off" /* onFocus="startTime();" onBlur="stop_Time();" */ />
          <label for="cash">f = Total Cash On Hand</label>
          <span><strong>"Actual Cash On Hand"</strong></span><div class="clear"></div>
          
          <input class="amount fixed" id="allTotals7" name="differ" type="text" value="0.00" autocomplete="off" readonly />
          <label class="fixed" for="differ">g = (e - f)</label>
          <span class="fixed">auto sum (cash amount difference [over? short?])</span><div class="clear"></div>
          <br /><div class="clear"></div>
          
          <input class="amount" id="gratuity" name="tips" type="text" value="" autocomplete="off" />
          <label for="tips">Gratuity</label>
          <span><strong>"IRS requires 8% sales"</strong></span><div class="clear"></div>
          <br /><div class="clear"></div>
          
          <input class="signed" name="endorse" type="text" />
          <label class="signed" for="endorse">Digital Signature</label>
        </fieldset>
        </form>  
      </div>
    );
  }
}

export default Form2;
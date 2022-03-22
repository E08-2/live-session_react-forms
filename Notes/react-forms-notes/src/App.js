import React from "react";
import "./App.css";

const App = () => {

    return (
        <div className="container">
            <div className="form_container">
                <div className="heading_container">
                    <h2>My React Form</h2>
                </div>
                <form>
                    <label htmlFor="users_name">Name</label>
                    <input id="users_name" name="users_name"/>

                    <label htmlFor="age">Age</label>
                    <input id="age" name="age" type="number" />

                    <label htmlFor="comment">Comment</label>
                    <textarea id="comment" name="comment"></textarea>

                    <label htmlFor="gender">Gender</label>
                    <select id="gender" name="gender">
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                    </select>

                    <label>Do you consent to the data policy?</label>
                    
                    <input className="radio_input" type="radio" name="consent" value="yes" />
                    <label className="radio_label">Yes</label>
                    <input className="radio_input radio_input_right" type="radio" name="consent" value="no" />
                    <label className="radio_label">No</label>
                    
                    <div className="button_container">
                        <button type="submit">Submit Data</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;
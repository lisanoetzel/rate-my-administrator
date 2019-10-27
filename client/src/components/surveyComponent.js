import React, {Component} from 'react';

export default class Survey extends Component {

    constructor(props) {
        super(props);

        this.onChangeSurveyInfo  = this.onChangeSurveyInfo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            survey_info: '',
            survey_completed: false
        }
    }
        onChangeSurveyInfo(e) {
            this.setState({
                survey_info: e.target.value
            });
        }
        onSubmit(e) {
            e.preventDefault();

            console.log(`Survey submitted:`);
            console.log(`Survey Response: ${this.state.survey_info}`);

            this.setState({
                survey_info:'',
                survey_completed: false
            })
        }

    render(){
            return (
                <div className="container">
                    <div style = {{marginTop: 10}}>
                    <h2>Administrator Information</h2>
                    <form onSubmit = {this.onSubmit}>
                        <div className = "form-group">
                            <label> Administrator Name (Required)</label>
                            <input type="text" 
                                className="form-control" 
                                id="adminName"
                                value = {this.state.survey_info}
                                onChange={this.onChangeSurveyInfo}
                            />
                        </div>  
                        <div className = "form-group">
                            <label>Administrator Title (Required)</label>
                            <input type="text" 
                                className="form-control" 
                                id="adminTitle"
                                value = {this.state.survey_info}
                                onChange={this.onChangeSurveyInfo}
                            />
                        </div>
                        <div className = "form-group">
                            <label>Institution (Required)</label>
                            <input type="text" 
                                className="form-control"
                                id="adminInstitution" 
                                value = {this.state.survey_info}
                                onChange={this.onChangeSurveyInfo}
                            />
                        </div>
                        <div className = "form-group">
                            <label>Current Academic Term (Required)</label>
                            <input type="text" 
                                className="form-control"
                                id="acadTerm" 
                                value = {this.state.survey_info}
                                onChange={this.onChangeSurveyInfo}
                            />
                        </div>
                        <hr></hr>
                        <h2>Survey Questions</h2>
                            <div className="form-group">
                                <h3><strong>Question 1</strong></h3>
                                <h4>Your administrator is knowledgeable of institutional rules and procedures.</h4>
                                <select class="form control" id="q1">
                                    <option value></option> 
                                    <option value="1">1 (Strongly Disagree)</option>
                                    <option value="2">2 (Disagree)</option>
                                    <option value="3">3 (Neutral)</option>
                                    <option value="4">4 (Agree)</option>
                                    <option value="5">5 (Strongly Agree)</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <h3><strong>Question 2</strong></h3>
                                <h4>Your administrator meets frequently with faculty.</h4>
                                <select class="form control" id="q2">
                                    <option value></option> 
                                    <option value="1">1 (Strongly Disagree)</option>
                                    <option value="2">2 (Disagree)</option>
                                    <option value="3">3 (Neutral)</option>
                                    <option value="4">4 (Agree)</option>
                                    <option value="5">5 (Strongly Agree)</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <h3><strong>Question 3</strong></h3>
                                <h4>Your administrator is open to faculty input.</h4>
                                <select class="form control" id="q3">
                                    <option value></option> 
                                    <option value="1">1 (Strongly Disagree)</option>
                                    <option value="2">2 (Disagree)</option>
                                    <option value="3">3 (Neutral)</option>
                                    <option value="4">4 (Agree)</option>
                                    <option value="5">5 (Strongly Agree)</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Submit Survey" className="btn btn-primary"/>
                            </div>
                    </form>
                </div>
            </div>
            )
        }
     };

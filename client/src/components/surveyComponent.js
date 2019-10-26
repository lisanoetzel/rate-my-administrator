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
                    <h2>Survey</h2>
                    <form onSubmit = {this.onSubmit}>
                        <div className = "form-group">
                            <label> Administrator Name (Required)</label>
                            <input type="text" 
                                className="form-control" 
                                value = {this.state.survey_info}
                                onChange={this.onChangeSurveyInfo}
                            />
                        </div>  
                        <div className = "form-group">
                            <label>Administrator Title (Required)</label>
                            <input type="text" 
                                className="form-control" 
                                value = {this.state.survey_info}
                                onChange={this.onChangeSurveyInfo}
                            />
                        </div>
                        <div className = "form-group">
                            <label>Institution (Required)</label>
                            <input type="text" 
                                className="form-control" 
                                value = {this.state.survey_info}
                                onChange={this.onChangeSurveyInfo}
                            />
                        </div>
                        <div className = "form-group">
                            <label>Current Academic Term (Required)</label>
                            <input type="text" 
                                className="form-control" 
                                value = {this.state.survey_info}
                                onChange={this.onChangeSurveyInfo}
                            />
                        </div>
                        <hr></hr>
                        
                    </form>
                </div>
            </div>
            )
        }
     };

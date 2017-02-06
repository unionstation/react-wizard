import React, {Component} from 'react'
import {Button, ButtonToolbar, Alert} from 'react-bootstrap'

class Step extends Component {
  constructor(props) {
    super(props)
    this.state = {
      advanceDisabled: false,
      retreatDisabled: false,
    }
    this.onBack = this.onBack.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onAdvance = this.onAdvance.bind(this)
  }
  
  onAdvance(err) {
    if(err) {
      this.setState({
        advanceDisabled: false,
        retreatDisabled: false,
        currentError: err
      });
    } else {
      this.props.onAdvance();
    }
  }

  onSubmit() {
    this.setState({
      advanceDisabled: true,
      retreatDisabled: true
    });
    this.props.onSubmit.apply(this, [this.onAdvance]);
  }

  onBack() {
    if(this.props.onBack) {
      this.props.onBack.apply(this, [this.props.onRetreat]);
    } else {
      this.props.onRetreat();
    }
  }
  
  render() {
    var AdvanceButton;
    if(!this.props.lastStep) {
      AdvanceButton = <Button onClick={this.onSubmit} 
                              disabled={this.state.advanceDisabled}
                              bsStyle='primary'>Onward
                      </Button>
    }

    var RetreatButton;
    if(!this.props.lastStep) {
      RetreatButton = <Button onClick={this.onBack} 
                              disabled={this.props.firstStep || 
                                        this.state.retreatDisabled}>back
                      </Button>
    }

    var ComponentClass = this.props.component;

    var Error;
    if(this.state.currentError){
      Error = <Alert bsStyle="danger">
                <p>{this.state.currentError.message}</p>
              </Alert>;
    }

    return <div className="step">
              <ComponentClass data={this.props.data}/>
              <ButtonToolbar>
                {RetreatButton}
                {AdvanceButton}
              </ButtonToolbar>
              {Error}
           </div>;
  }
}

export default Step

import React, {Component} from 'react'
import {ListGroupItem, ListGroup} from 'react-bootstrap'
import Step from './step'

class Wizard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: this.props.start || 0,
      currentError: null,
      data: this.props,
      advanceDisabled: false,
      retreatDisabled: false
    } 
  }
  
  advance(e) {
    this.setState({
      advanceDisabled: true,
      retreatDisabled: true
    });
  }

  retreat(e) {
    this.setState({
      currentStep: this.state.currentStep-1,
    });
  }

  navigate(e) {
    console.log(e);
  }

  render() {

    console.log("render the wizard")

    var items = this.props.steps.map((step, idx) => {
      return (<ListGroupItem key={'nav' + idx} onClick={this.navigate} active={idx === this.state.currentStep ? 'active' : ''}>{step.name}</ListGroupItem>);
    });

    var step = this.props.steps[this.state.currentStep];
    console.dir(step)
    var component = <Step key={'step' + this.state.currentStep}
                          onSubmit={step.onSubmit}
                          onBack={step.onBack}
                          onAdvance={() => {
                            this.setState({
                              currentError: null,
                              currentStep: this.state.currentStep+1
                            })
                          }}
                          onRetreat={() => {
                            this.setState({
                              currentError: null,
                              currentStep: this.state.currentStep-1
                            })
                          }}
                        component={step.component}
                        data={this.state.data}
                        firstStep={this.state.currentStep === 0}
                        lastStep={this.state.currentStep === this.props.steps.length-1}/>
    return <div className="wizard">
            <div className="wizard-nav col-xs-2">
              <ListGroup>
                {items}
              </ListGroup>
            </div>
            <div className="wizard-content col-xs-4">
              {component}
            </div>
           </div>;
  }
}

Wizard.defaultProps = {
  steps: []
}

module.exports = Wizard

import React, { Component } from "react";
import EventRegister from "../../components/EventRegister";
import { eventRegister } from '../../components/UserFunctions'

class CreateEvent extends Component {
    constructor() {
        super()
        this.state = {
          title: '',
          link: '',
          description: '',
          organization: '',
          street: '',
          city: '',
          state: '',
          zip: '',
          smalldescription: '',
          image: '',
          needed: '',
          date: '',
          time: '',
      }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        console.log(this.state)
      }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
    }
    onSubmit(e) {
        e.preventDefault()

        const newEvent = {
          title: this.state.title,
          link: this.state.link,
          description: this.state.description,
          organization: this.state.organization,
          street: this.state.street,
          city: this.state.city,
          state: this.state.state,
          zip: this.state.zip,
          smalldescription: this.state.smalldescription,
          image: this.state.image,
          needed: this.state.needed,
          date: this.state.date,
          time: this.state.time,
        }
        
        eventRegister(newEvent).then(res => {
            this.props.history.push(`/login`)
            console.log('STATE', this.state)
        })
    }



    render() {
        return (
            <div>
                <EventRegister
                    title={this.state.title}
                    link={this.state.link}
                    description={this.state.description}
                    organization={this.state.organization}
                    street={this.state.street}
                    city={this.state.city}
                    state={this.state.state}
                    zip={this.state.zip}
                    smalldescription={this.state.smalldescription}
                    image={this.state.image}
                    needed={this.state.needed}
                    date={this.state.date}
                    time={this.state.time}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                />

                <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                    onClick={this.onSubmit}
                >
                    Register Event!
              </button>
            </div >

        )
    }
}


export default CreateEvent;



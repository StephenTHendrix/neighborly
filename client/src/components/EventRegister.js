import React, { Component } from 'react'


class EventRegister extends Component {

  render(props) {
    return (
      
      <form>
        <h1 className="h3 mb-3 font-weight-normal text-center title">Register Event</h1>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="title">Event title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="Title of event"
              value={this.props.title}
              onChange={this.props.onChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="name">Link</label>
            <input
              type="text"
              className="form-control"
              name="link"
              placeholder="Enter link for event"
              value={this.props.link}
              onChange={this.props.onChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            placeholder="Description of event"
            value={this.props.description}
            onChange={this.props.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="organization">Organization</label>
          <input
            type="text"
            className="form-control"
            name="organization"
            placeholder="Organization name"
            value={this.props.organization}
            onChange={this.props.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="street">Street</label>
          <input
            type="text"
            className="form-control"
            name="street"
            placeholder="Street name"
            value={this.props.street}
            onChange={this.props.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className="form-control"
            name="city"
            placeholder="City"
            value={this.props.city}
            onChange={this.props.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            className="form-control"
            name="state"
            placeholder="State"
            value={this.props.state}
            onChange={this.props.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="zip">Zip</label>
          <input
            type="text"
            className="form-control"
            name="zip"
            placeholder="zip"
            value={this.props.zip}
            onChange={this.props.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="smalldescription">Smalldescription</label>
          <input
            type="text"
            className="form-control"
            name="smalldescription"
            placeholder="smalldescription"
            value={this.props.smalldescription}
            onChange={this.props.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image link</label>
          <input
            type="text"
            className="form-control"
            name="image"
            placeholder="image link"
            value={this.props.image}
            onChange={this.props.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="needed">Number needed</label>
          <input
            type="text"
            className="form-control"
            name="needed"
            placeholder="Number needed"
            value={this.props.needed}
            onChange={this.props.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="text"
            className="form-control"
            name="date"
            placeholder="date"
            value={this.props.date}
            onChange={this.props.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input
            type="text"
            className="form-control"
            name="time"
            placeholder="time"
            value={this.props.time}
            onChange={this.props.onChange}
          />
        </div>
      </form>
    )
  }
}

export default EventRegister

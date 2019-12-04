import React, { Component } from 'react'

class EventRegister extends Component {


  render(props) {
    return (

      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="sub-title">Event title</label>
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
        <div className="row">
          <div className="form-group col-md-8">
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

          <div className="form-group col-md-4">
            <label htmlFor="inputState">State</label>
            <select
              id="inputState"
              className="form-control"
              name="state"
              value={this.props.state}
              onChange={this.props.onChange}>
              <option defaultValue>Choose...</option>
              <option>Alabama - AL</option>
              <option>Alaska - AK</option>
              <option>Arizona - AZ</option>
              <option>Arkansas - AR</option>
              <option>California - CA</option>
              <option>Colorado - CO</option>
              <option>Connecticut - CT</option>
              <option>Delaware - DE</option>
              <option>Florida - FL</option>
              <option>Georgia - GA</option>
              <option>Hawaii - HI</option>
              <option>Idaho - ID</option>
              <option>Illinois - IL</option>
              <option>Indiana - IN</option>
              <option>Iowa - IA</option>
              <option>Kansas - KS</option>
              <option>Kentucky - KY</option>
              <option>Louisiana - LA</option>
              <option>Maine - ME</option>
              <option>Maryland - MD</option>
              <option>Massachusetts - MA</option>
              <option>Michigan - MI</option>
              <option>Minnesota - MN</option>
              <option>Mississippi - MS</option>
              <option>Missouri - MO</option>
              <option>Montana - MT</option>
              <option>Nebraska - NE</option>
              <option>Nevada - NV</option>
              <option>New Hampshire - NH</option>
              <option>New Jersey - NJ</option>
              <option>New Mexico - NM</option>
              <option>New York - NY</option>
              <option>North Carolina - NC</option>
              <option>North Dakota - ND</option>
              <option>Ohio - OH</option>
              <option>Oklahoma - OK</option>
              <option>Oregon - OR</option>
              <option>Pennsylvania - PA</option>
              <option>Rhode Island - RI</option>
              <option>South Carolina - SC</option>
              <option>South Dakota - SD</option>
              <option>Tennessee - TN</option>
              <option>Texas - TX</option>
              <option>Utah - UT</option>
              <option>Vermont - VT</option>
              <option>Virginia - VA</option>
              <option>Washington - WA</option>
              <option>West Virginia - WV</option>
              <option>Wisconsin - WI</option>
              <option>Wyoming - WY</option>
            </select>
          </div>

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
        {/* <div className="form-group">
          <label htmlFor="smalldescription">Smalldescription</label>
          <input
            type="text"
            className="form-control"
            name="smalldescription"
            placeholder="smalldescription"
            value={this.props.smalldescription}
            onChange={this.props.onChange}
          />
        </div> */}

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
            id="date"
            placeholder="mm/dd/yyyy"
            maxLength="10"
            value={this.props.date}
            onChange={this.props.onChange}
          />
        </div>
        <div className="row">
          <div className="form-group col-md-9">
            <label htmlFor="time">Time</label>
            <input
              type="text"
              className="form-control"
              name="time"
              maxLength="5"
              placeholder="00:00"
              value={this.props.time}
              onChange={this.props.onChange}
            />
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="inputState">AM/PM</label>
            <select
              id="inputState"
              className="form-control"
              name="ampm"
              value={this.props.ampm}
              onChange={this.props.onChange}>
              <option defaultValue>Choose...</option>
              <option>AM</option>
              <option>PM</option>
            </select>
          </div>
        </div>

      </form>
    )
  }
}

export default EventRegister

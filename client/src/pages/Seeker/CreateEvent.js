// import React, { Component } from "react";
// import EventRegister from "../../components/EventRegister";
// import { eventRegister } from "../../components/UserFunctions";
// import jwt_decode from 'jwt-decode';


// class CreateEvent extends Component {
//   constructor() {
//     super();
//     this.state = {
//       title: "",
//       link: "",
//       description: "",
//       organization: "",
//       street: "",
//       city: "",
//       state: "",
//       zip: "",
//       smalldescription: "",
//       image: "",
//       needed: "",
//       date: "",
//       time: "",
//       token: {},
//       decoded: {},
//     };
//     this.BACKSPACE = 8;
//     this.DELETE_KEY = 46;
//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   // componentDidMount() {
//   //   console.log(this.state);
//   //   document.cookie = "imageUpload= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
//   // }

//   // handleInit() {
//   //   console.log('FilePond instance has initialised', this.pond);
//   // }

//   // onChange(e) {
//   //   this.setState({ [e.target.name]: e.target.value });
//   //   if (e.target.name === "date") {
//   //     console.log(this.state.date)
//   //     var numChars = e.target.value.length;
//   //     if (this.state[e.target.name].length < e.target.value.length && (numChars === 2 || numChars === 5)) {
//   //       var thisVal = e.target.value;
//   //       thisVal += '/';
//   //       e.target.value = thisVal;
//   //       this.setState({ [e.target.name]: thisVal });
//   //       console.log(this.state.date)
//   //     }
//   //   }
//   // }

//   // onSubmit(e) {
//   //   e.preventDefault();

//   //   this.setState({ image: document.cookie.split('=')[1] })
//   //   const imgCookie = document.cookie.split('=')[1]
//   //   console.log("Img cookie: " + imgCookie)

//   //   setTimeout(() => {
//   //     console.log(this.state.image)

//   //     const newEvent = {
//   //       title: this.state.title,
//   //       link: this.state.link,
//   //       description: this.state.description,
//   //       organization: this.state.organization,
//   //       street: this.state.street,
//   //       city: this.state.city,
//   //       state: this.state.state,
//   //       zip: this.state.zip,
//   //       smalldescription: this.state.smalldescription,
//   //       image: this.state.image,
//   //       needed: this.state.needed,
//   //       date: this.state.date,
//   //       time: this.state.time
//   //     };

//   //     eventRegister(newEvent)
//   //     // .then(res => {
//   //     this.props.history.push(`/login`);
//   //     // console.log("STATE", this.state);
//   //     // });
//   //   }, 1000)
//   // }



//   render() {
//     if (localStorage.usertoken) {
//       this.state.token = localStorage.usertoken
//       this.state.decoded = jwt_decode(this.state.token)
//     }
//     else {
//       this.state.token = false;
//       this.state.decoded = false;
//     }
//     return (
//       <div>
//         {this.state.decoded.kind === "volunteer" || !this.state.token ?
//           (<h3>Not for you.</h3>) :

//           (<div>
//             <EventRegister
//               title={this.state.title}
//               link={this.state.link}
//               description={this.state.description}
//               organization={this.state.organization}
//               street={this.state.street}
//               city={this.state.city}
//               state={this.state.state}
//               zip={this.state.zip}
//               smalldescription={this.state.smalldescription}
//               image={this.state.image}
//               files={this.state.files}
//               needed={this.state.needed}
//               date={this.state.date}
//               time={this.state.time}
//               onChange={this.onChange}
//               onSubmit={this.onSubmit}
//             />

//             {/* <button
//           type="submit"
//           className="btn btn-lg btn-sub"
//           onClick={this.onSubmit}
//         >
//           Create Event!
//         </button> */}
//           </div>)}
//       </div>
//     );
//   }
// }

// export default CreateEvent;

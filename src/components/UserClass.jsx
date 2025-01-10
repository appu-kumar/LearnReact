import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
      userData: {
        name: "dummy",
        location: "delhi",
      },
    };
    console.log("constructor");
  }

  async componentDidMount() {
    console.log("after constructor and render method ");
    const response = await fetch("https://api.github.com/users/appu-kumar");
    const userData = await response.json();
    console.log("first phase");
    this.setState(
      {
        userData: userData,
      },
      () => {
        console.log("state", this.state.userData); // it is called just after state is called
      }
    );
  }

  componentDidUpdate(){
     console.log('this is called after updation of the state and rendering  second phase ')
  }

  componentWillUnmount(){
     console.log('This is called when componenet is removed from dom third phase')
  }

  render() {
    console.log("render");
    const { count, userData } = this.state;

    return (
      <>
        <div className="user">
          <p>{this.props.title}</p>
          <p>count: {count}</p>
          <p>count2: {this.state.count2}</p>
          <button
            onClick={() => {
              this.setState({
                // this is inbuilt method that update state
                count: this.state.count + 1,
              });
            }}
          >
            Increase
          </button>
          <img src={userData.avatar_url} />
          <h1>{userData.name}</h1>
          <h3>{userData.location}</h3>
        </div>
      </>
    );
  }
}

export default UserClass;

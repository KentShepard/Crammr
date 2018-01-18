import React from 'react';
import Login from './Login.jsx'
import Header from './Header.jsx'
import MainView from './MainView.jsx'
import Footer from './Footer.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: Boolean(document.user),
      user: null
    };
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  componentWillMount() {
    if (document.user) {
      this.getUserInfo();
    }
  }

  getUserInfo() {
<<<<<<< HEAD
=======
    console.log('Getting next question');
>>>>>>> Refactor get user info ajax request and add a key to modules categories
    $.ajax({
      method: "GET",
      url: '/users/email',
      data: {
        email: document.user.email
<<<<<<< HEAD
<<<<<<< HEAD
      }
    })
    .done((data) => {
<<<<<<< HEAD
      console.log('getUserInfo in App.jsx succeeded', data);
      document.user = data;
      this.setState({user: document.user});
    })
    .fail((err) => {
      console.log('getUserInfo in App.jsx failed', err);
=======
      },
      dataType: 'json'
=======
      }
>>>>>>> Refactor getUsers in Header
    })
    .done((data) => {
      console.log('Got User data, success', data);
      document.user = data;
      this.setState({user: document.user});
    })
    .fail((data) => {
      console.log('Got User data, fail', data.responseText);
      document.user = JSON.parse(data.responseText);
>>>>>>> Refactor get user info ajax request and add a key to modules categories
=======
      console.log('getUserInfo request in App.jsx succeeded', data);
      document.user = data;
      this.setState({user: document.user});
    })
    .fail((err) => {
      console.log('getUserInfo request in App.jsx failed', err);
>>>>>>> Include more descriptive success and failure console logs
    });
  }

  logout() {
    document.user = null;
    this.setState({loggedIn: false});
    window.location = "/logout";
    console.log('LOGGING OUT');
  }

  render() {
    return (
      <div>
        <Header user={this.state.user} logout={this.logout} loggedIn={this.state.loggedIn} />
        <MainView loggedIn={this.state.loggedIn} getUserInfo={this.getUserInfo} user={this.state.user}/>
        <Footer />
      </div>
    )
  }
}

export default App;
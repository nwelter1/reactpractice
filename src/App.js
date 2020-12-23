import React, { Component } from 'react'
import './app.css'
export default class App extends Component {
  constructor() {
    console.log('Constructed')
    super();

    this.state = {
      names: ['Derek', 'Joel', 'Biran', 'Nate'],
      locations: [],
      attendees: []
    }
  }
  handleGetPartners = () => void

  componentDidMount(){
    console.log('Mounted')
    this.setState({
      locations: ['Washington', 'Dallas', 'Chicago']
    });
    
    fetch('https://ct-flask-blog-api.herokuapp.com/')
    .then(res => res.json())
    .then(data => this.setState({ attendees:data.partners }))
  }
  render() {
    console.log('rendered')
    return (
      <div>
        <header>
        <Navbar />
        </header>
        <main className="container">
          <Switch>
            <Route exact path='/' render={() => <Home />} />
            <Route path='/about' render={() => <Contact />} />
            <Route path='/contact' render={() => <About />} />
          </Switch>
          
          <hr />
          
        </main>
        <footer>

        </footer>
      </div>
    )
  }
}


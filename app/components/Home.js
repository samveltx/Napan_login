import React, {Component} from 'react'
import {connect} from 'react-redux'

class Home extends Component {
  render () {
    return (
      <article>
        <div>
          <section className='text-section'>
            <h1>Welcome to NapaN!</h1>
            

            <p> See the full source code on <a href='https://github.com/samveltx'>GitHub</a>!</p>

        
          </section>

          
        </div>
      </article>
    )
  }
}

function select (state) {
  return {
    data: state
  }
}

export default connect(select)(Home)

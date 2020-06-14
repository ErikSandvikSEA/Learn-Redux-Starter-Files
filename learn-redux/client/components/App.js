import { bindActionCreators } from 'redux'
import { connect  } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'

import Main from './Main'

function mapStateToProps(state){
     return {
          posts: state.posts,
          comments: state.comments
     }
}

function mapDistpatchToProps(dispatch) {
     return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDistpatchToProps)(Main)

export default App;
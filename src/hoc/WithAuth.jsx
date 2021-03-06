import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../redux/auth/auth.actions'
import * as moviesActions from '../redux/movies/movies.actions'
import * as filtersActions from '../redux/filters/filters.actions'

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    movies: state.movies,
    filters: state.filters,
  }
}

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch),
  moviesActions: bindActionCreators(moviesActions, dispatch),
  filtersActions: bindActionCreators(filtersActions, dispatch),
})

export const withAuth = (Component) =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    class WithAuth extends React.Component {
      render() {
        return <Component {...this.props} />
      }
    }
  )

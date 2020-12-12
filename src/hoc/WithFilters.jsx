import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as filtersActions from '../redux/filters/filters.actions'

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  }
}

const mapDispatchToProps = (dispatch) => ({
  filtersActions: bindActionCreators(filtersActions, dispatch),
})

export const withFilters = (Component) =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    class withFilters extends React.Component {
      render() {
        return <Component {...this.props} />
      }
    }
  )

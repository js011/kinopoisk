import React from 'react'
import { TabContent, Nav, NavItem } from 'reactstrap'
import { Route, Switch, NavLink } from 'react-router-dom'
import CallApi from '../../../utils/apies'
import { MovieHeader } from './MovieHeader.jsx'
import MovieMedia from './Tabs/MovieMedia.jsx'
import MovieActors from './Tabs/MovieActors.jsx'

export default class MoviePage extends React.Component {
  constructor() {
    super()

    this.state = {
      movie: {},
    }
  }

  componentDidMount() {
    CallApi.get(`/movie/${this.props.match.params.id}`, {
      params: {
        language: 'ru-RU',
      },
    }).then((data) => this.setState(() => ({ movie: data })))
  }

  render() {
    const { movie, activeTab } = this.state
    const { movies, moviesActions, auth, match } = this.props

    return (
      <div className="movie-page">
        <MovieHeader
          movies={movies}
          moviesActions={moviesActions}
          auth={auth}
          movie={movie}
        />
        <div className="movie-tabs w-100">
          <div className="container">
            <Nav tabs>
              <NavItem className="cursor-pointer">
                <p className="mb-0 mr-1 mt-1 movie-tabs__item">
                  <NavLink
                    className="p-2 pl-3 pr-3 movie-tabs__link-tab d-block"
                    to={`${match.url}/media/`}
                    activeClassName="active"
                  >
                    Медиа
                  </NavLink>
                </p>
              </NavItem>
              <NavItem className="cursor-pointer">
                <p className="mb-0 mr-1 mt-1 movie-tabs__item">
                  <NavLink
                    className="p-2 pl-3 pr-3 movie-tabs__link-tab d-block"
                    to={`${match.url}/actors/`}
                    activeClassName="active"
                  >
                    Актеры
                  </NavLink>
                </p>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <Switch>
                <Route
                  path={`${match.url}/media/`}
                  render={() => <MovieMedia movie_id={match.params.id} />}
                />
                <Route
                  path={`${match.url}/actors/`}
                  render={() => <MovieActors movie_id={match.params.id} />}
                />
              </Switch>
            </TabContent>
          </div>
        </div>
      </div>
    )
  }
}

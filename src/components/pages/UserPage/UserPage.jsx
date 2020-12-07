import React from 'react'
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from 'reactstrap'
import classnames from 'classnames'
import { withAuth } from '../../../hoc/WithAuth.jsx'
import { FavouriteMoviesTab } from './Tabs/FavouriteMoviesTab.jsx'
import { WatchlistTab } from './Tabs/WatchlistTab.jsx'

class UserPage extends React.Component {
  constructor() {
    super()

    this.state = {
      activeTab: '1',
    }
  }
  componentDidMount() {
    const { authActions } = this.props
    authActions.toggleUserModal(false)
  }

  render() {
    const { auth, movies, moviesActions } = this.props

    const toggle = (tab) => {
      if (this.state.activeTab !== tab)
        this.setState(() => ({ activeTab: tab }))
    }

    const { activeTab } = this.state

    return (
      <div className="user-page">
        <div className="user-page__header">
          <div className="bg-image">
            <img
              className="image"
              src="/kinopoisk/images/user-page.png"
              alt=""
            />
          </div>
          <div className="inner-content">
            <div className="content container">
              <img
                src={`https://image.tmdb.org/t/p/w500${auth.user.avatar.tmdb.avatar_path}`}
                alt=""
                className="user-img"
              />
              <div className="user-data">
                <h2 className="user-data__name">{auth.user.name}</h2>
                <p className="user-data__nickname">{auth.user.username}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <Nav tabs>
            <NavItem className="cursor-pointer">
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => {
                  toggle('1')
                }}
              >
                Избранные
              </NavLink>
            </NavItem>
            <NavItem className="cursor-pointer">
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => {
                  toggle('2')
                }}
              >
                Список отслеживания
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  {movies.favouriteMovies.length > 0 ? (
                    <FavouriteMoviesTab
                      favouriteMovies={movies.favouriteMovies}
                      watchlist={movies.watchlist}
                      moviesActions={moviesActions}
                      auth={auth}
                    />
                  ) : (
                    <p className="mt-4">У вас нет избранных фильмов...</p>
                  )}
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  {movies.watchlist.length > 0 ? (
                    <WatchlistTab
                      favouriteMovies={movies.favouriteMovies}
                      watchlist={movies.watchlist}
                      moviesActions={moviesActions}
                      auth={auth}
                    />
                  ) : (
                    <p className="mt-4">
                      У вас нет выбранных фильмов для просмотра...
                    </p>
                  )}
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </div>
    )
  }
}

export default withAuth(UserPage)

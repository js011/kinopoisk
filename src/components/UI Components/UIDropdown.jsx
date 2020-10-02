import React from 'react'

export default class UIDropdown extends React.Component {
  static defaultProps = {
    position: {
      top: 'auto',
      right: 'auto',
      bottom: 'auto',
      left: 'auto',
    },
  }

  constructor() {
    super()

    this.state = {
      show: false,
    }
  }

  toggleShow = () => {
    this.setState({
      show: !this.state.show,
    })
  }

  render() {
    return (
      <>
        {this.props.render(this.toggleShow)}
        <div className="dropdown__wrapper">
          {this.state.show && (
            <div
              className="dropdown__popover"
              style={{ ...this.props.position }}
            >
              <div className="dropdown__cover" onClick={this.toggleShow}></div>
              <div className="dropdown__wrapper-content">
                {this.props.children(this.toggleShow)}
              </div>
            </div>
          )}
        </div>
      </>
    )
  }
}

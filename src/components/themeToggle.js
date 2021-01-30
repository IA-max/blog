import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

class MyComponent extends React.Component {
  constructor(props){
    super(props);
    this.changeMode = this.changeMode.bind(this)
  }
  changeMode = (theme,handle) => {handle(theme==='light'?'dark':'light')}
  render() {    
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <>
        <span className="font-medium text-gray-500 hover:text-gray-900 ml-5 hover:no-underline hover:text-blue-700 cursor-pointer" onClick={e => this.changeMode(theme, toggleTheme) }>
          { theme === 'light' ? '🌙' : '🌞' }
        </span>
          </>
        )}
      </ThemeToggler>
    )
  }
}

export default MyComponent;
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
        <a href="#" className={"font-medium text-gray-500 hover:text-gray-900 ml-5 hover:no-underline hover:text-blue-700"} onClick={e => this.changeMode(theme, toggleTheme) }>
        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>*
        </svg>
        </a>
          </>
        )}
      </ThemeToggler>
    )
  }
}

export default MyComponent;
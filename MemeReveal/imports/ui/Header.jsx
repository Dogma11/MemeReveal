import React from 'react';

export const Header = ({ children }) => {
  // console.log(WrappedComponent);
  return (
        <div className="main">
            <header>
                <nav>
                    <div className="navbar py-2">
                        <h3 className="title-app col-auto mx-auto my-0 h-100">MemeReveal</h3>
                    </div>
                </nav>
            </header>
            <div className="container">
              { children }
            </div>
        </div>
    )
}
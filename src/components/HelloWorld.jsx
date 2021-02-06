import React, {Component} from 'react';

export class HelloWorld extends Component {
  render() {
    return (
      <>
        <h1>¡Hola mundo, webpack con {this.props.name}!</h1>
        <img className="icon" src={this.props.logo} alt={this.props.name} />
        <nav className="menu">
          {this.props.menu.map((link) => (
            <a key={link[0]} href={link[1]}>
              {link[0]}
            </a>
          ))}
        </nav>

        {console.log(this.props)}
      </>
    );
  }
}

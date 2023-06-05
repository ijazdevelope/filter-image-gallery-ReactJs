import React from 'react';
import Button from '../components/custom-button/Button';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
        console.log('constructor');
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoritecolor: 'yellow' })
        }, 1000);
        console.log('componentDidMount')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    render() {

        const style = {
            color: 'blue',
            textTransform: 'uppercase'
        }

        return (
            <>
                <h2>My Favorite Color is <span style={style}>{this.state.favoritecolor}</span></h2>
                <button onClick={() => this.setState({ favoritecolor: 'green' })}>Hit Me</button>
                {/* <Button type='button' className='btn btn-warning' onClick={() => this.setState({ favoritecolor: 'green' })}>Hit Me</Button> */}
            </>
        );
    }
}

export default Header;
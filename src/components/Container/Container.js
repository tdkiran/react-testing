import React from 'react';
export class Container extends React.Component {
    constructor() {
        super();
        this.state = { count: 0 };
        this.updateCounter = this.updateCounter.bind(this);
    }

    updateCounter() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <>
                <div>Kiran</div>
                <input
                    value='Visitor Digital Sign'
                    type='button'
                    onClick={this.updateCounter}
                />
                <div className="visitorCount">
                    {this.state.count}
                </div>
            </>
        );
    }
}
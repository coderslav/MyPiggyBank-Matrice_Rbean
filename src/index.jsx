import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';
import FormNewEntry from './FormNewEntry';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: [
                { id: 1, name: 'Loto ticket', desc: '', price: 20 },
                { id: 2, name: 'Beers', desc: 'Party night \\o/', price: -15 },
                { id: 3, name: 'Phone Bill', desc: 'January', price: -29.99 },
            ],
        };
    }

    deleteHandler = (event) => {
        let newArrayOfObjects = this.state.entries.filter((object) => object.id !== parseInt(event.currentTarget.value));
        this.setState({ entries: newArrayOfObjects });
    };

    handleNewEntry = (event) => {
        event.preventDefault();
        const formData = Object.fromEntries(new FormData(event.currentTarget).entries());
        this.setState({ entries: [...this.state.entries, { id: Math.max(...this.state.entries.map((object) => object.id)) + 1, name: formData.name, desc: formData.description, price: parseFloat(formData.price) }] });
        event.currentTarget.reset();
    };

    updateTotal = () => {
        let arrayOfPrices = this.state.entries.map((object) => object.price);
        return arrayOfPrices.length > 0 ? arrayOfPrices.reduce((previousValue, currentValue) => previousValue + currentValue) : 0;
    };

    render() {
        return (
            <>
                <Table entries={this.state.entries} deleteHandler={this.deleteHandler} updateTotal={this.updateTotal} />
                <FormNewEntry handleNewEntry={this.handleNewEntry} />
            </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

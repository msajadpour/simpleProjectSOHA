import React, { Component } from 'react';
import SearchBox from './../components/search';
import Header from './../components/header';
class SearchCountries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }
    componentDidMount() {
        fetch("https://restcountries.eu/rest/v2/all")
            .then((res) => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error,
                    });
                }
            );
    }
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <React.Fragment>
                    <div className="main">
                        <div>
                            <Header />
                        </div>

                        <div className="center">
                            <h2>Search Your Club</h2>
                            <SearchBox  countries={items}/>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
    }
}
 
export default SearchCountries;
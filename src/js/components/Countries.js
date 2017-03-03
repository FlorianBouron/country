import React, {Component}  from "react";
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';

class Country extends Component {

    renderCountries() {

        let id = 0;

        if(this.props.search.length==0) {
            return (
                <h4>
                    No countries found.
                </h4>
            );
        } else {
            return this.props.search.map((country) => {

                id = id+1;

                const name = country.name,
                      capitalCity = country.capital;
                let languages = [],
                    currencies = [],
                    timezones = [];

                country.languages.forEach(function(language) {
                    languages.push(language.name);
                });

                country.currencies.forEach(function(currency) {
                    currencies.push(currency.name + " (" + currency.symbol + ")");
                });

                country.timezones.forEach(function(timezone) {
                    timezones.push(timezone);
                });

                return (
                    <Col key={id} xs={12} sm={12} md={12} lg={12}>
                        <h3>
                            {name}
                        </h3>
                        <div>
                            Capital City: {capitalCity}
                        </div>
                        <div>
                            Languages: {languages.toString()}
                        </div>
                        <div>
                            Currencies: {currencies.toString()}
                        </div>
                        <div>
                            Timezones: {timezones.toString()}
                        </div>
                    </Col>
                );

            });
        }
    }


    render() {

        if (!this.props.search) {

            return (<div id="country-list"></div>);

        } else {

            return (
                <Row id="country-list" className="show-grid">
                    <h2>Countries: </h2>
                    {this.renderCountries()}
                </Row>
            );

        }
    }
}


function mapStateToProps(state) {
    return {
        search: state.search
    };
}


export default connect(mapStateToProps)(Country);
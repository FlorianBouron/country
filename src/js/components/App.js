import React from 'react';
import Album from './Countries';
import Search from './search';
import {Grid, Row, Col} from 'react-bootstrap';
require('../../scss/style.scss');

const App = () => (
    <div>
        <Grid>
            <h2>Country app searcher</h2>
            <Row className="show-grid">
                <Col xs={12} sm={6} md={8} lg={8}><Search /></Col>
            </Row>
            <hr />
            <Row className="show-grid">
                <Col xs={12} sm={12} md={12} lg={12}><Album /></Col>
            </Row>
        </Grid>
    </div>
);
export default App;

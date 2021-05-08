import React from "react";
import Header from './header'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function search () {
    return (

        <div >
        <div className="container mt-3">
           


            <form className="form mt-5">
                <input
                className="form-control w-25 mx-auto"
                type="search"
                placeholder="Search for Employee"
                name="search"
                onChange=""
                value=""
                />
            </form>
            <br></br>
            <br></br>


        </div>


            <Jumbotron >
                <Card>
                <Card.Header as="h5">Search Results </Card.Header>
                <Card.Body>
                    <Card.Title>Book Title</Card.Title>
                    <Card.Subtitle> Author </Card.Subtitle>
                    <Card.Text>
                    Book Description from Google Books API 
                    </Card.Text>
                    <Button href="#">View </Button> <Button href="#">Save</Button> 
                    
                </Card.Body>
                </Card>
            </Jumbotron>
        </div>

    )
}
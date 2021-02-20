import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faStar } from '@fortawesome/free-solid-svg-icons';

const MovieDetails = ({ showDetails, movieDetails, hideDetails, selectedMovie }) => {
	
	const renderMetaScore = (score) => {
        if (score) {
            let starArr = [];
            for (let i = 0; i < Math.ceil(score / 20); i++) {
                starArr.push(
					<FontAwesomeIcon key={i} icon={faStar} color="#FFCB45" />
				);
            }
			return starArr;
        }
    }

    return (
        <React.Fragment>
            <Modal size="lg" show={showDetails.includes(selectedMovie)} onHide={hideDetails}>
				<div className="float-right mt-3 mr-3">
					<button type="button" className="close" aria-label="Close" onClick={hideDetails}>
					  <span aria-hidden="true">&times;</span>
					</button>
				</div>
				<Modal.Body>
				{movieDetails &&
					<div className="row">
						<div className="col-12 col-sm-4">
							<img className="img-fluid rounded" src={movieDetails.Poster ? movieDetails.Poster : ""} width="174" height="189" alt="movie-poster" />
							<div className="mt-3">
								{movieDetails.Metascore ? `Meta Score: ` : null}
								{movieDetails.Metascore ? renderMetaScore(movieDetails.Metascore) : null}
							</div>
						</div>
						<div className="col12 col-sm-8">
							<h2>{movieDetails.Title ? movieDetails.Title : ""}</h2>
							<p>{movieDetails.Plot ? movieDetails.Plot : ""}</p>
							<p>{movieDetails.Director ? `Directed by: ${movieDetails.Director}` : `Directed by: `}</p>
							<p>{movieDetails.Actors ? `Cast: ${movieDetails.Actors}` : `Cast: `}</p>
							<p>{movieDetails.Writer ? `Writer: ${movieDetails.Writer}` : `Writer: `}</p>
							<p>{movieDetails.Language ? `Language: ${movieDetails.Language}` : `Language: `}</p>
							<p>{movieDetails.Released ? `Release Date: ${movieDetails.Released}` : `Release Date: `}</p> 
							<p>{movieDetails.Country ? `Country: ${movieDetails.Country}` : `Country: `}</p>
							<p>{movieDetails.BoxOffice ? `Box Office: ${movieDetails.BoxOffice}` : `Box Office: `}</p> 
							<span>{movieDetails.Runtime ? movieDetails.Runtime : ""}</span>
							<span className="ml-4">{movieDetails.Genre ? movieDetails.Genre : ""}</span> 
						</div>
					</div>
				}
				</Modal.Body>
			</Modal>
		</React.Fragment>
	);
}

export default MovieDetails;
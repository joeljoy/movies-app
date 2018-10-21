import React, {Component} from 'react';
import Header from '../../common/header/Header';
import moviesData from '../../assets/movieData';
import Typography from '@material-ui/core/Typography';
import './Details.css';
import YouTube from 'react-youtube';
import Home from '../home/Home';
import ReactDOM from 'react-dom';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

class Details extends Component {
  constructor() {
    super();
    this.state = {
      movie: {}
    }
  }

  componentWillMount() {
    let currentState = this.state;
    currentState.movie = moviesData.filter((mov) => {
      return mov.id === this.props.movieId
    })[0];
    this.setState({currentState});
  }

  artistClickHandler = (url) => {
    window.location = url;
  }

  backToHomeHandler = () => {
    ReactDOM.render(<Home/>, document.getElementById('root'));
  }

  render() {
    let movie = this.state.movie;
    const opts = {
      height: '300',
      width: '700',
      playerVars: {
        autoplay: 1
      }
    }
    return (<div className="details">
      <Header/>
      <div className="back">
        <Typography onClick={this.backToHomeHandler}>
          &#60; Back to Home
        </Typography>
      </div>
      <div className="flex-containerDetails">
        <div className="leftDetails">
          <img src={movie.poster_url} alt={movie.title}/>
        </div>
        <div className="middleDetails">
          <div>
            <Typography variant="headline" component="h2">{movie.title}
            </Typography>
          </div>
          <br/>
          <div>
            <Typography>
              <span className="bold">Genres:
              </span>
              {movie.genres.join(', ')}
            </Typography>
            <div>
              <Typography>
                <span className="bold">Duration:</span>
                {movie.duration}
              </Typography>
            </div>
            <div>
              <Typography>
                <span className="bold">Release Date:</span>
                {new Date(movie.release_date).toDateString()}
              </Typography>
            </div>
            <div>
              <Typography>
                <span className="bold">
                  Rating:</span>
                {movie.critics_rating}
              </Typography>
            </div>
            <div className="marginTop16">
              <Typography>
                <span className="bold">Plot:</span>
                <a href={movie.wiki_url}>(Wiki Link)</a>
                {movie.storyline}
              </Typography>
            </div>
            <div className="trailerContainer">
              <Typography>
                <span className="bold">Trailer:</span>
              </Typography>
              <YouTube videoId={movie.trailer_url.split("?v=")[1]} opts={opts} onReady={this._onReady}/>
            </div>
          </div>
        </div>
        <div className="rightDetails">
          <div className="bold marginBottom16 marginTop16">
            <Typography>
              <span className="bold">Artists:</span>
            </Typography>
          </div>
          <div className="paddingRight">
            <GridList cellHeight={160} cols={2}>
              {
                movie.artists != null && movie.artists.map(artist => (<GridListTile className="gridTile" onClick={() => this.artistClickHandler(artist.wiki_url)} key={artist.id}>
                  <img src={artist.profile_url} alt={artist.first_name + " " + artist.last_name}/>
                  <GridListTileBar title={artist.first_name + " " + artist.last_name}/>
                </GridListTile>))
              }
            </GridList>
          </div>
        </div>
      </div>
    </div>)
  }
}
export default Details;

import React, {Component} from 'react';
import './Home.css';
import Header from '../../common/header/Header'
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import MovieData from '../../assets/movieData';

const styles = theme => ({
   root: {
       flexGrow: 1,
       backgroundColor: theme.palette.background.paper
   },
   upcomingMoviesHeading: {
       textAlign: 'center',
       background: '#ff9999',
       padding: '8px',
       fontSize: '1rem'
   },
   gridListUpcomingMovies: {
       flexWrap: 'nowrap',
       transform: 'translateZ(0)',
       width: '100%',
   },
   gridListReleasedMovies:{
     transform: 'translateZ(0)',
     cursor: 'pointer'
   }
});

class Home extends Component{

  getFormattedReleaseDate = (date) => {
    return new Date(date);
  }

  render(){
    const { classes } = this.props;
    const that = this;
    return(
      <div>
        <Header></Header>
        <div className={classes.upcomingMoviesHeading}>
          <span>Upcoming Movies</span>
        </div>
        <GridList cols={5} className={classes.gridListUpcomingMovies}>
          {
            MovieData.map(function(movie){
              return(
                <GridListTile key={movie.id}>
                  <img className="movie-poster" src={movie.poster_url} alt={movie.title}/>
                  <GridListTileBar title={movie.title}/>
                </GridListTile>
              );
            })
          }
        </GridList>
        <div className="flex-container">
          <div className="left">
            <GridList cellHeight={350} cols={4} className={classes.gridListReleasedMovies}>
              {
                MovieData.map(function(movie){
                  return(
                    <GridListTile className="released-movie-grid-item" key={"grid"+movie.id}>
                      <img className="movie-release-poster" src={movie.poster_url} alt={movie.title}/>
                      <GridListTileBar title={movie.title} subtitle={<span>Release Date: {new Date(movie.release_date).toDateString()}</span>}/>
                    </GridListTile>
                  );
                })
              }
            </GridList>
          </div>
          <div className="right">

          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);

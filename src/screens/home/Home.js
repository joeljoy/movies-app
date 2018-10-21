import React, {Component} from 'react';
import './Home.css';
import Header from '../../common/header/Header'
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import MovieData from '../../assets/movieData';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

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
   },
   formControl: {
     margin: theme.spacing.unit,
     minWidth: 240,
     maxWidth: 240
   },
   title: {
     color: theme.palette.primary.light,
  }
});

class Home extends Component{

  constructor() {
    super();
    this.state = {
      movieName: ""
    }
  }

  movieNameChangeHandler = event => {
       this.setState({ movieName: event.target.value });
   }

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
            <Card>
              <CardContent>
                <FormControl className={classes.formControl}>
                  <Typography className={classes.title} color="textSecondary">
                      FIND MOVIES BY:
                  </Typography>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="movieName">Movie Name</InputLabel>
                  <Input id="movieName" onChange={this.movieNameChangeHandler} />
                </FormControl>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);

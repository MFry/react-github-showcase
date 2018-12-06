/**
 * Carousel of material cards representing each repo
 * TODO: Clean up inline style and look for an alternative to slick-carousel.
 *        Slick carousel does many things very well, but it also injects too much inline style.
 *
 */
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import RepoCard from './Card';

// Required for slick-carousel. Due to time constraints this is unavoidable.
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './correct-slick-slider.css';

/*
const Repos = styled.div`
  background-color: #2a2834;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
`;
*/

const ArrowWrapper = styled.div`
  z-index: 9001;
`;

const NextArrow = props => (
  <ArrowWrapper {...props}>
    <IconButton
      style={{ position: 'absolute', top: '50%', right: '-15px' }}
      aria-label="Go to next card"
    >
      <ChevronRight style={{ transform: 'scale(1.5)' }} fontSize="large" />
    </IconButton>
  </ArrowWrapper>
);

const PreviousArrow = props => (
  <ArrowWrapper {...props}>
    <IconButton
      style={{ position: 'absolute', top: '50%', right: '-35px' }}
      aria-label="Go to previous card"
    >
      <ChevronLeft style={{ transform: 'scale(1.5)' }} fontSize="large" />
    </IconButton>
  </ArrowWrapper>
);

const CardCarousel = ({ loading, error, repos }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  };
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (repos !== false) {
    return (
      <Slider {...settings}>
        {repos.map(repo => (
          <div key={repo.id}>
            <RepoCard {...repo} />
          </div>
        ))}
      </Slider>
    );
  }

  return null;
};
export default CardCarousel;

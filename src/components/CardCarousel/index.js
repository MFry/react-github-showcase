import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import RepoCard from './Card';

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
    <IconButton aria-label="Go to next card">
      <ChevronRight />
    </IconButton>
  </ArrowWrapper>
);

const PreviousArrow = props => (
  <ArrowWrapper {...props}>
    <IconButton aria-label="Go to previous card">
      <ChevronLeft />
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
          <div>
            <RepoCard {...repo} />
          </div>
        ))}
      </Slider>
    );
  }

  return null;
};
export default CardCarousel;

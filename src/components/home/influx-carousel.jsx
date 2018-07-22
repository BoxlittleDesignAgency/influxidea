import React, { Fragment, Component } from 'react';

import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';


const items = [
  {
    id: 1,
    src: 'https://mdbootstrap.com/img/Photos/Slides/img%20(150).jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    id: 2,
    src: 'https://mdbootstrap.com/img/Photos/Slides/img%20(149).jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    id: 3,
    src: 'https://mdbootstrap.com/img/Photos/Slides/img%20(151).jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class InfluxCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    };
  }

  onExiting = () => {
    this.animating = true;
  }

  onExited = () => {
    this.animating = false;
  }

  next = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({
      activeIndex: nextIndex
    });
  }

  previous = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({
      activeIndex: nextIndex
    });
  }

  goToIndex = (newIndex) => {
    if (this.animating) return;
    this.setState({
      activeIndex: newIndex
    });
  }

  render() {
    const {activeIndex} = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem key={ item.id } onExiting={ this.onExiting } onExited={ this.onExited }>
          <img className='img-fluid' src={ item.src } alt={ item.altText } />
          <CarouselCaption className="text-danger" captionText={ item.caption } captionHeader={ item.caption } />
        </CarouselItem>
      );
    });

    return (<Fragment>
      <Carousel activeIndex={ activeIndex } next={ this.next } previous={ this.previous }>
        <CarouselIndicators items={ items } activeIndex={ activeIndex } onClickHandler={ this.goToIndex } />
        { slides }
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={ this.previous } />
        <CarouselControl direction="next" directionText="Next" onClickHandler={ this.next } />
      </Carousel>
    </Fragment>);
  }
}

export default InfluxCarousel;
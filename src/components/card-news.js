
// outsource dependencies
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Card, CardBody, CardFooter, CardSubtitle, CardText, CardTitle } from 'reactstrap';

// local dependencies
import placeholderIMG from '../images/placeholder.png';

function CardNews ({ title, urlToImage, description, publishedAt, author }) {
  return <Card className="h-100">
    <img src={urlToImage || placeholderIMG} alt={title} className="img-fluid w-100" width="220" height="125" />
    <CardBody>
      <CardTitle tag="h5" className="mb-2 mt-0">{ title || 'Unknown title' }</CardTitle>
      <CardSubtitle tag="h6" className="mb-2 mt-0">
        { author || 'Unknown author' }
      </CardSubtitle>
      <CardText>{ description || '-' }</CardText>
    </CardBody>
    <CardFooter className="text-center">
      { moment(publishedAt || new Date()).format('LLL') }
    </CardFooter>
  </Card>;
}

CardNews.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  urlToImage: PropTypes.string,
  description: PropTypes.string,
  publishedAt: PropTypes.string,
};

CardNews.defaultProps = {
  title: '-',
  description: '-',
  publishedAt: new Date(),
  author: 'Unknown author',
  urlToImage: placeholderIMG,
};

export default memo(CardNews);

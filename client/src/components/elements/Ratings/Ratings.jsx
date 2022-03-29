import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Container, RatingStar } from "./Ratings.styles";

const Rating = ({ rating }) => {
  return (
    <React.Fragment>
      <Container>
        <RatingStar>
          {rating >= 1 ? (
            <FaStar />
          ) : rating >= 0.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </RatingStar>
        <RatingStar>
          {rating >= 2 ? (
            <FaStar />
          ) : rating >= 1.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </RatingStar>
        <RatingStar>
          {rating >= 3 ? (
            <FaStar />
          ) : rating >= 2.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </RatingStar>
        <RatingStar>
          {rating >= 4 ? (
            <FaStar />
          ) : rating >= 3.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </RatingStar>
        <RatingStar>
          {rating >= 5 ? (
            <FaStar />
          ) : rating >= 4.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </RatingStar>
      </Container>
    </React.Fragment>
  );
};

export default Rating;

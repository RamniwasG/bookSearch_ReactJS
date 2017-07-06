import _ from 'lodash';
import { BOOK_SEARCH } from '../actions/index';

const BOOKS = [
  { title: 'Javascript: The Good Parts', pages: 101 },
  { title: 'Harry Potter', pages: 39 },
  { title: 'The Dark Tower', pages: 85 },
  { title: 'Eloquent Ruby', pages: 10 },
  { title: 'React-Redux', pages: 120 },
  { title: 'Moment Script', pages: 140 },
  { title: 'Java Language', pages: 170 },
  { title: 'C in Depth', pages: 190 },
  { title: 'mastering in C++', pages: 1000 },
];

export default function(state = BOOKS, action) {
  switch(action.type) {
  case BOOK_SEARCH:
    return _.filter(BOOKS, book => book.title.match(action.payload))
  default:
    return state;
  }
}

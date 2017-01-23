import React from 'react';

export default class Test extends React.Component {
      render(){
        const arr = ['alok','alokjoshi','alokjoshiofaarmax'];
        const indexOf = _.indexOf(arr,'alok');
        return (
          <h3>By {arr[indexOf]}</h3>
        )
      }
}

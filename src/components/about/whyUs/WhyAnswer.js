import React from 'react';

export default function WhyAnswer({ why }) {
  let displayText;

  switch (why) {
    case 'Transparency':
      displayText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas commodo orci sit amet magna tincidunt, ac tristique risus volutpat. Fusce vel quam cursus, euismod erat quis, ornare tellus. Donec leo erat, pretium eget tincidunt pharetra, malesuada at elit. Donec vel elit rutrum, luctus nulla vitae, dictum erat. Morbi consectetur quis est sed cursus.';
      break;
    case 'Efficiency':
      displayText = 'Phasellus id feugiat metus. Aenean volutpat tincidunt ipsum, nec rhoncus nisl fringilla a. Fusce semper rhoncus eleifend. Nam pellentesque et nulla tristique dictum. Duis finibus nisi convallis sem maximus euismod. Nullam molestie lorem tellus, et sagittis nisl aliquam at.';
      break;
    case 'Experience':
      displayText = 'Aenean justo leo, dictum at maximus vel, elementum eget nibh. Integer tempus ex sit amet neque rutrum, sit amet interdum justo convallis. Vestibulum fermentum velit eget ultrices congue. Sed efficitur nisi massa, sit amet malesuada sem suscipit ut. Donec ultrices, elit quis pellentesque consequat, risus enim auctor diam, non sollicitudin felis velit ut tortor.';
      break;
    case 'Integrity':
      displayText = 'Vivamus malesuada dapibus porttitor. Nullam sagittis nibh in sem convallis, sit amet vehicula erat vulputate. Maecenas cursus justo vel tortor finibus, ut pellentesque est commodo. Phasellus nec est velit. Sed molestie ut nunc vitae aliquam. Etiam molestie lacus sit amet magna sagittis fermentum. Ut blandit justo purus, non lobortis turpis facilisis ac.';
      break;
    default:
      displayText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas commodo orci sit amet magna tincidunt, ac tristique risus volutpat. Fusce vel quam cursus, euismod erat quis, ornare tellus. Donec leo erat, pretium eget tincidunt pharetra, malesuada at elit. Donec vel elit rutrum, luctus nulla vitae, dictum erat. Morbi consectetur quis est sed cursus.'
  }

  return (
    <p className='answerDisplayText'>{displayText}</p>
  )
}
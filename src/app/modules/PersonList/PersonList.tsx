import React from 'react';
import PropTypes from 'prop-types';

export interface IPersonListProps {
  persons: string[];
}

const PersonList: React.FC<IPersonListProps> = ({ persons }) => {
  return (
    <div>
      <ul>
        {persons.map((person) => {
          return <li key={person}>{person}</li>;
        })}
      </ul>
    </div>
  );
};

PersonList.propTypes = {
  persons: PropTypes.array.isRequired,
};

// PersonList.defaultProps = {
//   persons: [],
// };

export default PersonList;

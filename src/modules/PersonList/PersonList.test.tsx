import React from 'react';
import { shallow } from 'enzyme';
import PersonList, { IPersonListProps } from './PersonList';

describe('Person list', () => {
  it('should have 1 unordered list', () => {
    const personListWrapper = shallow<IPersonListProps>(
      <PersonList persons={[]} />,
    );
    // Finding unordered list element in UI
    const personsListUl = personListWrapper.find('ul');
    expect(personsListUl).toHaveLength(1);
  });
  it('Renders 0 (Z) li elements when persons array is empty', () => {
    const persons: string[] = [];
    const personListWrapper = shallow<IPersonListProps>(
      <PersonList persons={persons} />,
    );
    const personListLi = personListWrapper.find('li');
    expect(personListLi).toHaveLength(0);
  });

  it('Renders 1 (O) li elements when persons array has 1 person', () => {
    const persons: string[] = ['Amel'];
    const personListWrapper = shallow<IPersonListProps>(
      <PersonList persons={persons} />,
    );
    const personListLi = personListWrapper.find('li');
    expect(personListLi).toHaveLength(1);
  });
  it('Renders M (Many) li elements when persons array has M person', () => {
    const persons: string[] = ['Lucian', 'Kennen', 'Jinx'];
    const personListWrapper = shallow<IPersonListProps>(
      <PersonList persons={persons} />,
    );
    const personListLi = personListWrapper.find('li');
    expect(personListLi).toHaveLength(persons.length);
  });

  it('Should have a 3 li tags with names, where last one is Rakan', () => {
    const persons: string[] = ['Lucian', 'Xayah', 'Rakan'];
    const personListWrapper = shallow<IPersonListProps>(
      <PersonList persons={persons} />,
    );
    const personListLi = personListWrapper.find('li');

    expect(personListLi.at(2).text()).toContain('Rakan');
  });
});

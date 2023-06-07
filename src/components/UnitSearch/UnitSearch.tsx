import React, {useId, useMemo, useState} from 'react';
import {TextField} from '@digdir/design-system-react';
import {matchingUnitsWithPrefix} from '../../utils/unitUtils';
import {UnitKeywords, UnitPrefixKeywords} from '../../types';
import {UnitOrPrefixSearchResultItem} from '../../classes';

export type UnitSearchProps = {
  unitKeywords: UnitKeywords;
  prefxKeywords: UnitPrefixKeywords;
};

export const UnitSearch = ({
                             unitKeywords,
                             prefxKeywords,
                           }: UnitSearchProps) => {
  const listId = useId();
  const [searchValue, setSearchValue] = useState<string>('');
  const searchResult = useMemo(
    () => matchingUnitsWithPrefix(searchValue, unitKeywords, prefxKeywords),
    [prefxKeywords, searchValue, unitKeywords]
  );

  return (
    <>
      <TextField
        list={listId}
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
      <datalist id={listId}>
        {searchResult.map(searchResultOption)}
      </datalist>
    </>
  );
}

const searchResultOption = (item: UnitOrPrefixSearchResultItem) => {
  const id = item.id();
  return <option key={id} value={id}>{id}</option>;
};
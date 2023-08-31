import React from 'react';

export interface ComboboxItem {
  value: string;
  label: React.ReactNode;
  searchString?: string;
}
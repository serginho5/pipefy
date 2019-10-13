import React from 'react';
import { MdAdd } from 'react-icons/md';
import Card from '../Card';
import { Container } from './styles';

export default function List({ data }) {
  return (
    <Container>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#fff" />
          </button>
        )}
      </header>

      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </Container>
  );
}


import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MeuComponente from './MeuComponente'; // Verifique se o caminho está correto

test("verifica se o texto está sendo renderizado corretamente", () => {
    render(<MeuComponente/>);
    const linkElement = screen.getByText('Olá mundo!');
    expect(linkElement).toBeInTheDocument();
})
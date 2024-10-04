import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { HeaderComponte } from './Componentes/Header/HeaderComponte';
import { Home } from './Componentes/Home/Home';
import { Producto } from './Componentes/Producto/ProductoComponente';
import { Servicios } from './Componentes/Servicio/Servicios';
import { ContactoComponente } from './Componentes/Contacto/ContactoComponente';
import { FooterComponente } from './Componentes/Footer/FooterComponente';

describe('Pruebas de los componentes de la página web', () => {
  it('El componente HeaderComponte se renderiza correctamente', () => {
    const { getByText } = render(<HeaderComponte />);
    expect(getByText('Inicio')).toBeInTheDocument();
    expect(getByText('Productos')).toBeInTheDocument();
    expect(getByText('Servicios')).toBeInTheDocument();
    expect(getByText('Contacto')).toBeInTheDocument();
  });

  it('El componente Home se renderiza correctamente', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Bienvenidos a nuestra farmacia')).toBeInTheDocument();
    expect(getByText('Salud y bienestar para ti y tu familia')).toBeInTheDocument();
  });

  it('El componente Producto se renderiza correctamente', () => {
    const { getByText } = render(<Producto />);
    expect(getByText('Lista de Medicamentos')).toBeInTheDocument();
  });

  it('El componente Servicios se renderiza correctamente', () => {
    const { getByText } = render(<Servicios />);
    expect(getByText('Servicios')).toBeInTheDocument();
  });

  it('El componente ContactoComponente se renderiza correctamente', () => {
    const { getByText } = render(<ContactoComponente />);
    expect(getByText('Contacto')).toBeInTheDocument();
  });

  it('El componente FooterComponente se renderiza correctamente', () => {
    const { getByText } = render(<FooterComponente />);
    expect(getByText('Derechos reservados a AngieAngulo JohnGarcia BrayhanOrrego JhonatanAriza')).toBeInTheDocument();
  });
});
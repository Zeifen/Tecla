import { render, screen } from '@testing-library/react';
import NewCourse from '../components/NewCourse/NewCourse';



test('Mostrar Titulo Nuevo curso', () => {
  render(<NewCourse/>);
  const title = screen.getByText(/Nuevo curso/i);
  expect(title).toBeInTheDocument();
});

test('Mostrar Label', () => {
    render(<NewCourse/>);
    const otro = screen.getByLabelText(/Nombre del curso/i);
    expect(otro).toBeInTheDocument();
  });
  
  test('Mostrar Boton', () => {
    render(<NewCourse/>);
    const btnCurso = screen.getByText(/Guardar/i);
    expect(btnCurso).toBeInTheDocument();
  });  

  test('Label Lugar del curso', () => {
    render(<NewCourse/>);
    const labelLugar = screen.getByText(/Lugar donde se realizo/i);
    expect(labelLugar).toBeInTheDocument();
  });  

  

import { getByTestId, render, screen } from '@testing-library/react';
import EmployeeCard from './Employee';

const nameId = 'name';

describe('Employee', () => {
  it('should render same name passed into name prop', () => {
    const { getByTestId } = render(<EmployeeCard name='maria' />);
    const name = getByTestId(nameId);    
    expect(name).toBeInTheDocument();

    //render(<EmployeeCard name='maria' />)
    //const employeeElement = screen.getByText(/maria/i);
    //expect(employeeElement).toBeInTheDocument();
  });

  it('should render same role passed into role prop', () => {
    render(<EmployeeCard role='Software Developer' />);
    const employeeElement = screen.getByText(/Software Developer/i);
    expect(employeeElement).toBeInTheDocument();
  });
})

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter} from 'react-router-dom';
import NavBar from './Navbar'; 

describe('NavBar Component', () => {
  const renderWithRouter = (ui, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route);
    return render(ui, { wrapper: MemoryRouter });
  };

  it('renders the navbar with all links', () => {
    renderWithRouter(<NavBar />);
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Create Budget/i)).toBeInTheDocument();
    expect(screen.getByText(/Add Expenses/i)).toBeInTheDocument();
    expect(screen.getByText(/Log Out/i)).toBeInTheDocument();
  });

  it('applies active style to the active link', () => {
    renderWithRouter(<NavBar />, { route: '/create-budget' });

    const createBudgetLink = screen.getByText(/Create Budget/i);
    expect(createBudgetLink).toHaveClass('active');
  });
});

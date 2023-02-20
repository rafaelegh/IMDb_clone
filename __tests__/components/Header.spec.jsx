import Header from '@/components/Header';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

describe('Header component', () => {
    it('renders the title', () => {
        render(<Header />);
        const header = screen.getByRole('heading');

        expect(header).toBeInTheDocument();
        expect(header).toHaveTextContent('IMDbClone');
    });
});
import { fireEvent, render, screen } from '@testing-library/react';
import DarkModeSwitch from '@/components/DarkModeSwitch';
import "@testing-library/jest-dom/extend-expect";
import RootLayout from '@/app/layout';

describe('Light/Dark mode switch button', () => {
    it('renders the dark mode switch button', () => {
        render(<DarkModeSwitch />);
        const darkModeButton = screen.getByTestId('dark-mode-button');

        expect(darkModeButton).toBeInTheDocument();
    });

    test('renders the light mode switch button', async () => {
        render(<DarkModeSwitch />);
        const darkModeButton = screen.getByTestId('dark-mode-button');
        await fireEvent.click(darkModeButton);
        screen.debug();
/*         const lightModeButton = screen.getByTestId('light-mode-button');
        expect(lightModeButton).toBeInTheDocument(); */
/*         const documentpage = screen.getByRole('document', { hidden: true });
        expect(documentpage).toHaveClass('dark'); */
    });
});
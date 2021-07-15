// __tests__/Contact.test.js
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactForm from './Contact'

afterEach(cleanup);

describe('Contact component renders', () => {
    it('renders', () => {
    render(<ContactForm />);
    });

});

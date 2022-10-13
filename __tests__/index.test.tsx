
import Home from '../pages/index'
import singletonRouter, {
  useRouter
 } from 'next/router';
import Link from 'next/link';
import {
  render,
  act,
  fireEvent,
  screen,
  waitFor
 } from '@testing-library/react';
describe('Home', () => {
  describe("Renders necessary components"  ,()=>{
    
      
    it('renders the  heading', () => {
      render(<Home /> );
       const heading = screen.getByRole('heading', {
        name: /We grow by learning everyday/i,
      })
  
      expect(heading).toBeInTheDocument()
    })
    it('renders the link heading', () => {
       render(<Home /> );
       const heading = screen.getByRole('heading', {
        name: /Read a book today/i,
      })
  
      expect(heading).toBeInTheDocument()
    })
    it('renders the image', () => {
       render(<Home /> );
       const image = screen.getByRole('img', {
        alt: /books/i,
      })
  
      expect(image).toBeInTheDocument()
    })
  
})
})
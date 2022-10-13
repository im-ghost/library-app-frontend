
import Home from '../pages/index'

import Link from 'next/link';
import {
  render,
  act,
  fireEvent,
  screen,
  waitFor
 } from '@testing-library/react';
 import singletonRouter,{ useRouter } from "next/router";
 jest.mock("next/router",()=>({
   useRouter(){
     return {
       route:"/",
       pathName:"",
       asPath:"",
       push:jest.fn(),
       query:""
     }
   }
 }))
 jest.spyOn(require("next/router"),"useRouter")
describe('Home', () => {
  useRouter.mockImplementation(()=>({
   useRouter(){
     return {
       route:"/",
       pathName:"",
       asPath:"",
       push:jest.fn(),
       query:""
     }
   }
 }))
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
describe("Routing works ",()=>{
  it("Read a book today",()=>{
    render(<Home/>)
    const btn = screen.getByRole("heading",{
      name:/Read a book today/i
    })
    fireEvent.click(btn)
    expect(useRouter.route).toBe("/books")
  })
})
})
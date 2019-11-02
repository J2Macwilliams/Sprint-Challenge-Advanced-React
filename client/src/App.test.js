import React from 'react';

// import * as rtl from "@testing-library/react";
import { render } from  "@testing-library/react";
import App from './App';


//1
test("renders without crashing", () => {
  render(<App />);
});

//2
test("HDoes a Home exist?", () => {
   const { findAllByDisplayValue } = render(<App />)
  
  findAllByDisplayValue(/home/)
 })

 //3
test("Is the a toggle?", () => {
  const { findAllByDisplayValue } = render(<App />);

  findAllByDisplayValue(/toggle/i);
})

//4
test("Is there a Womens world Cup image?", () => {
  const { findByAltText } = render(<App />)

  findByAltText(/wwc/)
})

//5
test("Does a Home exist?", () => {
  const { findAllByDisplayValue } = render(<App />)

  findAllByDisplayValue(/home/)
})

//6
test("Is there a h1 Title in navBar", () => {
  const { queryByText } = render(<App />)

  queryByText(/h1/)
})


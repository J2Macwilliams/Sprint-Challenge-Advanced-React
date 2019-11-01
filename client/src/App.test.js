import React from 'react';

import { render } from "@testing-library/react";
import App from './App';
import NavBar from './components/Navbar';
import Club from './components/Club';



test("renders without crashing", () => {

  render(<App />);
});


test("Players?", () => {
  const { getByText } = render(<App />);

  getByText(/players/i);
})

test("toggle?", () => {
  const { findAllByDisplayValue } = render(<App />);

  findAllByDisplayValue(/toggle/i);
})

test("Womens world Cup?", () => {
  const { findByAltText } = render(<App />)

  findByAltText(/wwc/)
})

test("Home?", () => {
  const { findAllByDisplayValue } = render(<App />)

  findAllByDisplayValue(/home/)
})

test("Title", () => {
  const { queryByText } = render(<NavBar />)

  queryByText(/h1/)
})

test("I'm a color", () => {
  const { queryByDisplayValue } = render(<Club />)

  queryByDisplayValue(/color/)
})

test("I take info out of local storage?", () => {
  const { getByText } = render(<App />)

  getByText(/parse/)
})
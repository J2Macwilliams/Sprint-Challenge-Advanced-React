import React from 'react';

import { render } from "@testing-library/react";
import App, { {props.data.map}, toggleMode,   } from './App';
// import NavBar from './components/Navbar';
// import Club from './components/Club';



test("renders without crashing", () => {

  render(<App />);
});

test('In Players JS, expect props from club to be mapped over array and return all the names ', () => {
  let actual;
  let expected;
  actual={props.data.map((player, id) =>

    <div key={id} >
        <h2>#{id + 1} {player.name}</h2>
        <h4>{player.country}</h4>
    </div>
)};
  expected= [];
  expect(actual).toBe(expected);
  expect(actual).not.toBe({});
})


test ('expect the toggle to turn on dark mode', () =>{
  let actual;
  let expected;
  actual = toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };
    expected=(!darkMode)
    expect(actual).toBe(expected);
  expect(actual).not.toBe({});
})


// test("Does Players exist?", () => {
//   const { getByText } = render(<App />);

//   getByText(/players/i);
// })

// test("Is the a toggle?", () => {
//   const { findAllByDisplayValue } = render(<App />);

//   findAllByDisplayValue(/toggle/i);
// })

// test("Is there a Womens world Cup image?", () => {
//   const { findByAltText } = render(<App />)

//   findByAltText(/wwc/)
// })

// test("HDoes a Home exist?", () => {
//   const { findAllByDisplayValue } = render(<App />)

//   findAllByDisplayValue(/home/)
// })

// test("Is there a h1 Title in navBar", () => {
//   const { queryByText } = render(<NavBar />)

//   queryByText(/h1/)
// })

// test("Does Dark mode change a color?", () => {
//   const { queryByDisplayValue } = render(<Club />)

//   queryByDisplayValue(/color/)
// })

// test("Does info come out of local storage?", () => {
//   const { getByText } = render(<App />)

//   getByText(/parse/)
// })
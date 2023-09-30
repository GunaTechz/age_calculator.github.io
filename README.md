# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: https://github.com/Jake-Oz/age-calculator.git
- Live Site URL: https://age-calculator-jake-oz.vercel.app

## My process

### Built with

- Tailwind CSS
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework

### What I learned

I learned how to deal with animation events in React using the "Animation Event" import.

eg:

```tsx
const handleAnimationEvent = (e: AnimationEvent<HTMLDivElement>) => {
  setIsNewData(false);
};
```

Also learnt more about the "react-hook-form" library which was really powerful for managing form validation.
eg:

```tsx
<input
  placeholder="YYYY"
  {...register("year", {
    required: "This field is required",
    pattern: {
      value: /[0-9]+/,
      message: "Must be a valid year",
    },
    maxLength: {
      value: 4,
      message: "Must be a valid year",
    },
    validate: (value, formValues) => {
      const dateNow = +new Date();
      const checkDate = +new Date(
        Number(formValues.year),
        Number(formValues.month) - 1,
        Number(formValues.day)
      );
      return checkDate < dateNow || "Must be in the past";
    },
  })}
/>
```

Also learnt more about Next JS and React hooks and props.

### Useful resources

- https://felixgerschau.com/react-typescript-onanimationend-event-type/ - This helped me understand the syntax for AnimationEvent in a really simple way.
- https://react-hook-form.com - This site is not all that descriptive but does give a good examples of the form validation options.

## Author

- Frontend Mentor - @Jake-Oz (https://www.frontendmentor.io/profile/Jake-Oz)

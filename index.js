/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(t) {
  let hr = t.split(':')[0];
  if (hr < 12) {
    return "Good Morning";
  } else if (hr > 12 && hr < 17) {
    return "Good Afternoon";
  } else if (hr > 17 && hr < 24) {
    return "Good Evening";
  }
}

function displayMessage(m) {
  let greeting = document.querySelector("#greeting");
  greeting.innerText = m;
  console.log(greeting.innerText);
}
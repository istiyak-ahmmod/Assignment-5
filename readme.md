

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer:The primary differences between getElementById, getElementsByClassName, and querySelector/querySelectorAll are  

getElementById :Used to bring an element given a specific id.Will return only one element.

getElementsByClassName:Gets all elements of the specified class name.If there are multiple elements, returns them all as an HTMLCollection (similar to an array but not quite an array).

querySelector:Any element can be selected using CSS selector.Returns only the first matching element.

querySelectorAll:Gets all elements that match the CSS selector.Returns them as a NodeList (it's like an array)




2. How do you **create and insert a new element into the DOM**?

Answer: document.createElement("tagName") Will create a new element.
element.innerHTML = "text" You can put whatever you want to write in it.
parent.appendChild(element) Add it to the parent element you want to place it inside.

3. What is **Event Bubbling** and how does it work?

Answer: Event Bubbling is a process where when an event (such as a click) occurs on an element, it first acts on itself, then gradually propagates upwards to its parent, and then its parent.

Meaning → the event starts from the inner child and goes to the outer parent.

4. What is **Event Delegation** in JavaScript? Why is it useful?

Answer: Event delegation is a technique where we place an event listener on the parent element, rather than providing a forward event listener for the child element. The parent can discuss events on a child using event bubbles.

Less code: No need to write separate listeners for multiple child elements.

Better performance: Less memory consumption due to not having multiple event listeners.

Works for dynamic elements: No need to set a separate listener even if a new child element is added to the DOM, it works with the parent's event listener.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer: preventDefault():Disables the default behavior of an element. For example, if a form is submitted and the page reloads, or if a link is clicked and the page is redirected to another page, these can be prevented.

preventDefault():Stops event bubbling or capturing.This means that events will no longer propagate up or down.


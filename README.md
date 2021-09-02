# -Battle-Burrow
https://burrow.com/nomad-fabric/king-sofa-chaise?sku=NSC-IV-4-LO-CM&tufted=UT&pickAPillow=NAC-4-LB&sleepkit=ALRSK-OSGR01  
Clone practice -- HTML/CSS/small JS




https://user-images.githubusercontent.com/74447462/131851082-d9a2bbf4-4f4c-45dd-bb0a-057a62fe3ace.mp4
## Copyright audio: 
Rough draft - Royalty-Free Music by https://audiohub.com

## Learn
- forget that align-self can apply to grid thank you MT
- create inside a modal-blur beneath modal-content -- to capture click outside

## Practice

- use grid  
- use tag: select -- option
- Use background-image, for complicated illustration (like "?" icon), can take advantage of background-size, not need to know specific property of illustration itself (technique put element illustration on an address so that we can import it through url())  
 
- "blur part of modal window" if set :absolute (100% will base on viewport), :fixed (100% will base on full browser size)  
- centering by top:50% + transform:translate (scale with window's size) 
- justify-items:start (for grid items) (-content for aligning grid) 
(JS)
- use getAttribute + setAttribute -change url with difference event (with Ternary Operator)
- event "keydown" ESC
- check .classList.contains()
- border-top-left-radius (point to specifit direction)

 
## Try
- CSS grid: min-content, max-content for grid-template-columns, which has size of largest of element (don't completely understand)
- mix border (outline_1) + boxshadow (outline_2) for hover effect AHHHHHHHHHHHHH --> we can use multiple box-shadow (layers like background-image)
- linear gradient 2 color, with 50%, deg (confuse -.-)
- min-width (but don't how different with max-width;)
- Edit video, add effect Fade in/out, render, embed audio

## Lack of:
- Not control placing grid items if we write full list of <span> then a list of <input> --> they display with HTML flow not side-by-side as we want (so we temporary fix by edit order in HTML)
- Dont know how to write separate function, with require run for loop of .querySelectorAll <-- write eventHandler inside
- Dont' quite understand why function "select" not remove class if we click that color again -.-
- :"{ .querySelector not work with pseudo-element ::after <-- if we want create icon has event, need creat new <div>; ::after just for decoration


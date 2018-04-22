# Styled Accessible "Picker" Inputs
A repository of customized, accessible, native form elements. 

## Why?
These input elements are commonly used in many forms, but can be considered annoying to style. Using these element patterns ensures they can look attractive without excluding users who may rely on assistive technology to get things done.     

## How to use?
Well, do do ya, Scott?


## Inputs

### Checkboxes and Radio Buttons
Styled native checkboxes, and radio button patterns.  

Checkboxes select one or more options from a series of choices, while radio input only allows one selection to occur. 

1. [Native Checkboxes](src/native-checkbox)
2. [Native Radio Buttons](src/native-radio)  
3. [Rating Radios](src/native-radio--rating)  
4. [Radio Pill](src/native-radio--pill)  


### Switch Buttons  
Switches are a type of button control that is typically represented in the form of an on/off toggle UI control. 

Unlike a checkbox, switches are meant to perform an instant change in a component or application's state, but as there is no native "switch" control, checkboxes or button elements (with appropriate ARIA attributes) are often used as a substitute for this type of control.

1. [Switch Button](src/switch--button/)
2. [Switch Checkbox](src/switch--checkbox/)
3. [ARIA Switch Component (external repo)](https://scottaohara.github.io/aria-switch-button/)


### File Upload Input
A styled file upload input that heavily relies upon the native input for appropriate and meaningful announcements for assistive technology users.

File upload input allows users to add files to a website.  

1. [Native File Upload (in progress)](src/native-file)  


### Range Slider
A styled native range slider that takes multiple browser quirks (re: varied implementations) into consideration.  

Range slider input allows users to select a point or a scoped range from a series of data.

1. [Native Range Slider (in progress)](src/native-range)  


### Select Boxes
Styled native single and multi-select patterns.  

Select boxes allow a user to pick one or more options from a menu of choices.

1. [Native Select Box (in progress)](src/native-select)  
2. [Native Multi-Select Box (in progress)](src/native-select--multi)  


### Progress Bar
Progress bars indicate the current status of a task on a scale of 0 to completion. They are considered part of the specification for form elements, yet do not possess a focusable form control.

Progress bars are useful for informing how much time remains for tasks that may take a longer amount of time, or need time to process before displaying results.  

1. [Native Progress Bar (in progress)](src/native-progress)  


### Search Component
1. [Search Component (in progress)](src/search)  


## License & Such
These patterns and scripts were written by [Scott O'Hara](https://twitter.com/scottohara).  

Everything here is under an [MIT license](https://github.com/scottaohara/accessible-components/blob/master/LICENSE.md).

Enjoy :)

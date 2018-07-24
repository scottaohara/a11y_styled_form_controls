# Accessible Styled Form Controls
A repository of stylized, accessible, form control patterns. 

## Why?
Form controls are commonly used in many interfaces, but are often considered annoying to style. The markup patterns presented here can help ensure these form controls can look (objectively) attractive without excluding users who may rely on assistive technology to get things done.     


## How to use?
Largely, many of these form controls can be copied and pasted into your pattern library, project, or pattern library project. Each form control has its own CSS file, and only when needed, JavaScript file. Each form control shares the *--demo-only--.css* and *--shared--.css* files, but these are largely for purposes of presenting on these demo pages, and much of the shared styles are merely ports of a few [normalize.css](https://necolas.github.io/normalize.css/) selectors.  


## The Form Controls
The following controls each have demo pages with additional documentation pertaining to implementation, UX, and screen reader announcements.


### Checkboxes and Radio Buttons
Styled HTML checkboxes, and radio button patterns.  

Checkboxes can be be used for a single form option, or grouped to allow one or more selections to be made by the user. In contrast, radio buttons provide users a series of options to choose from, but only one option may be chosen from a single radio button grouping.

1. [Styled Checkboxes](src/checkbox)
2. [Styled Radio Buttons](src/radio-button)  
3. [Radio Button Star Rating](src/radio-button--rating)  
4. [Radio Button Pill](src/radio-button--pill)  


### Switches & Toggle Buttons 
Switches are a type of form control that is typically visually represented as an on/off toggle. A toggle button may be styled similarly, or as a button that has a clear difference between the default and active (pressed) state.

Unlike a checkbox, switches and toggle buttons are meant to perform an instant change to a component or application's state. As there is no "switch" in HTML, a `checkbox` or `button` element is progressively enhanced into a `switch` with the appropriate ARIA attributes. Similarly with a toggle button, there is no native HTML attribute to indicate pressed vs default state, so `aria-pressed` is necessary to make a toggle button.

1. [Switch Checkbox](src/checkbox--switch)
2. [ARIA Switch Button (external link)](https://scottaohara.github.io/aria-switch-button/)
3. [ARIA Toggle Button](src/toggle-button-switch)
4. [Switch Radio Button Group](src/radio-button--switch)


### File Upload
A styled file upload form control that relies upon the native HTML input for providing the appropriate announcements to screen readers.

A file upload allows users to add one, or more, files to upload on form submission.  

1. [File Upload](src/file-upload)  


### Range Slider
A styled range form control that takes multiple browser quirks (re: varied implementations) into consideration.  

Range sliders allow users to select a point or a scoped range from a series of data.

1. [Range Slider](src/range-slider)  


### Select Boxes
Styled single and multi-select patterns.  

Selects allow a user to pick one or more options from a menu of choices.

1. [Select (single)](src/select)  
2. [Select (multi) - future link](#src/select--multi)  


### Progress Bar
Progress bars indicate the current status of a particular task, or tasks, on a scale of 0 to completion. 

The <code>progress</code> element is part of the specification for form elements, but they are not focusable form control.

1. [Progress Bar](src/progress-bar)  


## Search Component
A search component offers users an easily discoverable way to find information in a website or application.   

1. [Search Component](src/search)  


## License & Such
Unless noted, these components were written by [Scott O'Hara](https://twitter.com/scottohara).  

Everything here is under an [MIT license](https://github.com/scottaohara/accessible-components/blob/master/LICENSE.md).

Special thanks to [Eric Bailey](https://github.com/ericwbailey) for helping me review many of these components.

Enjoy :)

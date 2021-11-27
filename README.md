# The Accessibility of Styled Form Controls
A repository of styled and "styled" form control elements and markup patterns, and how they are announced by screen readers. 

## Why?
Form controls are necessary in many interfaces, but are often considered annoying, if not downright difficult, to style. Many of the markup patterns presented here can serve as a baseline for building more attractive form controls without having to exclude users who may rely on assistive technology to get things done. 

In some cases, there may be a lack of support, or complications that arise when controls are styled. Those instances will be noted as well.


## How to use?
Largely, many of these demos can be copied and pasted into your pattern library, project, or pattern library project. Each form control has its own CSS file, and a JavaScript file as necessary. Each form control shares the *--demo-only--.css* and *--shared--.css* files. These stylesheets are largely only for use on these demo pages. Many of the shared styles are merely instances of a few [normalize.css](https://necolas.github.io/normalize.css/) selectors.  


### Wait, JavaScript?
Yes, while many of these form controls can be styled with some thoughtful maneuvering of markup and CSS, controls such as file uploads, toggle buttons and switches need a bit of JavaScript (and sometime <abbr title="accessible rich internet applications">ARIA</abbr>) to properly function and convey state. 


## The Different Form Elements
The following controls and elements each have demo pages with additional documentation pertaining to implementation, UX, and screen reader announcements.

<details>
    <summary>Regarding screen reader announcements...</summary>
    <p>
        Note the documentation of screen reader announcements is based on using the versions of the screen reader and browser combos, as indicated on each test page. Be sure to check the last updated date of each test page. Documentation is noted as "updated" when new testing or techniques have changed.  Editorial updates may not constitute a change in the posted updated date. 
    </p>
    <p>
        Things may change as browsers and screen readers are updated, so please refer to these as a snapshot in time rather than being definitive results.  
    </p>
    <p>
        If you find that announcements and/or support has changed, please <a href="https://github.com/scottaohara/a11y_styled_form_controls/issues/new">file an issue</a>!
    </p>
</details>


### Checkboxes and Radio Buttons
Styled HTML checkboxes, and radio button patterns.  

Checkboxes can be used as a single form option, or grouped with similar checkboxes. Within a group, one or more checkboxes may be checked by the user. In contrast, radio buttons provide users two or more options to choose from, but only one option may be chosen from a radio button grouping at a time.

1. [Styled Checkboxes](src/checkbox)
2. [Styled Radio Buttons](src/radio-button)  
3. [Radio Button Star Rating](src/radio-button--rating)  
4. [Radio Button Pill](src/radio-button--pill)  


### Switches & Toggle Buttons 
Switches are a type of form control that are often visually represented as an on/off toggle. A toggle button may be styled similarly, or as a button that has a clear difference between the default and active (pressed) state. A toggle button is created when a `button` has the `aria-pressed` attribute set to `true` or `false`.

Unlike checkboxes, which are largely used in the context of forms where a user submits data after filling out all necessary information, switches and toggle buttons can be used to perform an instant change to a component or application's state. As there is no "switch" in HTML, a `checkbox` or `button` element can be progressively enhanced into a `switch`, with the appropriate ARIA attributes. 

1. [Switch Checkbox](src/checkbox--switch)
2. [ARIA Switch Controls (external repo)](https://scottaohara.github.io/aria-switch-control/)
3. [ARIA Toggle Button](src/toggle-button-switch)
4. [Switch Radio Button Group](src/radio-button--switch)


### File Upload
A styled file upload form control that relies on the native HTML `input type="file"` for providing the appropriate announcements to screen readers.

A file upload allows users to add one, or more, file(s) to submit with a form.  

1. [File Upload](src/file-upload)  


### Range Slider
A styled `input type="range"` form control that takes multiple browser's CSS implementations into consideration.  

Range sliders allow users to select a point, or a scoped range, from a series of data.

1. [Range Slider](src/range-slider)  


### Select Boxes
Styled single and multi-select patterns.  

Selects allow a user to pick one or more options from a menu of choices.

1. [Select (single)](src/select)  


### Progress Bar & Meter
Progress bars indicate the current status of a particular task, or tasks, on a scale of 0 to completion. A meter acts as a gauge and indicates a value within a finite value set. 

The <code>progress</code> and <code>meter</code> elements are considered form elements, but they are not focusable form controls.

Unfortunately, neither of these elements are consistently accessible to screen readers. Styling each can actually make them even more inaccessible...

1. [Progress Bar](src/progress-bar)  
2. [Meter](src/meter)


### Search Component
A search component offers users an easily discoverable way to find information in a website or application.   

1. [Search Component](src/search)  


## Contribute?
There are still patterns to make and test, as well as retesting of current patterns to ensure nothing gets stale. [File or check out available issues](https://github.com/scottaohara/a11y_styled_form_controls/issues) for some of the stuff that needs working on :)

## License, Thanks, and such
Everything here is under an [MIT license](https://github.com/scottaohara/accessible-components/blob/master/LICENSE.md).

While I was unaware of [WTFForms](http://wtfforms.com/) when starting this project, it is still a great example of what can be done with only CSS, and served as an excellent baseline to compare against. Thank you <a href="https://twitter.com/mdo">mdo</a> and to those involved with that project.

Additional thanks to [Eric Bailey](https://github.com/ericwbailey), [Josh Drumm](https://twitter.com/wwnjp), [James Curd](https://github.com/aminimalanimal), [Adrian Roselli](http://adrianroselli.com/), [Sara Soueidan](https://www.sarasoueidan.com/), [Heydon Pickering](https://inclusive-components.design/), [Richard Keizer](https://codepen.io/rakeizer), [Chris O'Brien](https://github.com/a11ycob) and [Alexander Farkas](https://github.com/aFarkas). They have each provided inspiration and/or excellent resources that have been quite helpful in the building of these components.


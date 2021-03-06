---
title: "A Complete Guide to Grid"
date: "2019-12-20"
featured: false
category: "css"
excerpt: "CSS Grid Layout is the most powerful layout system available in CSS. It is a 2-dimensional system, meaning it can handle both columns and rows"
tag: ["css","grid","float","layout"]
status: "publish"
type: "post"
cover: "./cover-layout.png"
---

CSS Grid Layout is the most powerful layout system available in CSS. It is a 2-dimensional system, meaning it can handle both columns and rows, unlike [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) which is largely a 1-dimensional system. You work with Grid Layout by applying CSS rules both to a parent element (which becomes the Grid Container) and to that element’s children (which become Grid Items).  
This article was originally ported over from [Chris House’s guide](http://chris.house/blog/a-complete-guide-css-grid-layout/), and has since been kept up to date by CSS-Tricks staff and paid writers.

- [Introduction](https://css-tricks.com/snippets/css/complete-guide-grid/#grid-introduction)
- [Basics and Browser Support](https://css-tricks.com/snippets/css/complete-guide-grid/#grid-browser-support)
- [Important Terminology](https://css-tricks.com/snippets/css/complete-guide-grid/#grid-terminology)
- [Grid Properties Table of Contents](https://css-tricks.com/snippets/css/complete-guide-grid/#grid-table-of-contents)

Properties for the Parent  

### Grid Container

#### display
Defines the element as a grid container and establishes a new *grid formatting context* for its contents.
Values:
- **grid** – generates a block-level grid
- **inline-grid** – generates an inline-level grid

```css
.container {
  display: grid | inline-grid;
}
```

Note: The ability to pass grid parameters down through nested elements (aka subgrids) has been moved to [level 2 of the CSS Grid specification.](https://www.w3.org/TR/css-grid-2/#subgrids) Here’s [a quick explanation](https://css-tricks.com/grid-level-2-and-subgrid/).

#### grid-template-columns  
grid-template-rows

Defines the columns and rows of the grid with a space-separated list of values. The values represent the track size, and the space between them represents the grid line.

Values:

- **&lt;track-size&gt;** – can be a length, a percentage, or a fraction of the free space in the grid (using the `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#fr-unit">fr</a>` unit)
- **&lt;line-name&gt;** – an arbitrary name of your choosing

```css
.container {
  grid-template-columns: <track-size> ... | <line-name> <track-size> ...;
  grid-template-rows: <track-size> ... | <line-name> <track-size> ...;
}
```

Examples:

When you leave an empty space between the track values, the grid lines are automatically assigned positive and negative numbers:

```css
.container {
  grid-template-columns: 40px 50px auto 50px 40px;
  grid-template-rows: 25% 100px auto;
}
```

![](https://css-tricks.com/wp-content/uploads/2018/11/template-columns-rows-01.svg)
But you can choose to explicitly name the lines. Note the bracket syntax for the line names:

```css
.container {
  grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
  grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
}
```

![Grid with user named lines](https://css-tricks.com/wp-content/uploads/2018/11/template-column-rows-02.svg)
Note that a line can have more than one name. For example, here the second line will have two names: row1-end and row2-start:

```css
.container {
  grid-template-rows: [row1-start] 25% [row1-end row2-start] 25% [row2-end];
}
```

If your definition contains repeating parts, you can use the `repeat()` notation to streamline things:

```css
.container {
  grid-template-columns: repeat(3, 20px [col-start]);
}
```

Which is equivalent to this:

```css
.container {
  grid-template-columns: 20px [col-start] 20px [col-start] 20px [col-start];
}
```

If multiple lines share the same name, they can be referenced by their line name and count.

```css
.item {
  grid-column-start: col-start 2;
}
```

The `fr` unit allows you to set the size of a track as a fraction of the free space of the grid container. For example, this will set each item to one third the width of the grid container:

```css
.container {
  grid-template-columns: 1fr 1fr 1fr;
}
```

The free space is calculated *after* any non-flexible items. In this example the total amount of free space available to the `fr` units doesn’t include the 50px:

```css
.container {
  grid-template-columns: 1fr 50px 1fr 1fr;
}
```

#### grid-template-areas

Defines a grid template by referencing the names of the grid areas which are specified with the [grid-area](https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-area) property. Repeating the name of a grid area causes the content to span those cells. A period signifies an empty cell. The syntax itself provides a visualization of the structure of the grid.

Values:

- **&lt;grid-area-name&gt;** – the name of a grid area specified with <a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-area">grid-area</a>
- **.** – a period signifies an empty grid cell
- **none** – no grid areas are defined

```css
.container {
  grid-template-areas:
    "<grid-area-name> | . | none | ..."
    "...";
}
```

Example:

```css
.item-a {
  grid-area: header;
}
.item-b {
  grid-area: main;
}
.item-c {
  grid-area: sidebar;
}
.item-d {
  grid-area: footer;
}
.container {
  display: grid;
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas:
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
}
```

That’ll create a grid that’s four columns wide by three rows tall. The entire top row will be comprised of the **header** area. The middle row will be comprised of two **main** areas, one empty cell, and one **sidebar** area. The last row is all **footer**.

![Example of grid-template-areas](https://css-tricks.com/wp-content/uploads/2018/11/dddgrid-template-areas.svg)Each row in your declaration needs to have the same number of cells.

You can use any number of adjacent periods to declare a single empty cell. As long as the periods have no spaces between them they represent a single cell.

Notice that you’re not naming lines with this syntax, just areas. When you use this syntax the lines on either end of the areas are actually getting named automatically. If the name of your grid area is ***foo***, the name of the area’s starting row line and starting column line will be ***foo*-start**, and the name of its last row line and last column line will be ***foo*-end**. This means that some lines might have multiple names, such as the far left line in the above example, which will have three names: header-start, main-start, and footer-start.

#### grid-template

A shorthand for setting <a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-template-columns-rows">grid-template-rows</a>, <a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-template-columns-rows">grid-template-columns</a>, and <a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-template-areas">grid-template-areas</a> in a single declaration.

Values:

- **none** – sets all three properties to their initial values
- **&lt;grid-template-rows&gt; / &lt;grid-template-columns&gt;** – sets <a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-template-columns-rows">grid-template-columns</a> and <a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-template-columns-rows">grid-template-rows</a> to the specified values, respectively, and sets <a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-template-areas">grid-template-areas</a> to none

```css
.container {
  grid-template: none | <grid-template-rows> / <grid-template-columns>;
}
```

It also accepts a more complex but quite handy syntax for specifying all three. Here’s an example:

```css
.container {
  grid-template:
    
```

\[row<span class="token number" style="box-sizing: border-box; color: rgb(252, 148, 99);">1</span>-start\]

 “header header header” 25px \[row1-end\]

\[row<span class="token number" style="box-sizing: border-box; color: rgb(252, 148, 99);">2</span>-start\]

 “footer footer footer” 25px \[row2-end\] / auto 50px auto; }

That’s equivalent to this:

```css
.container {
  grid-template-rows: [row1-start] 25px [row1-end row2-start] 25px [row2-end];
  grid-template-columns: auto 50px auto;
  grid-template-areas:
    "header header header"
    "footer footer footer";
}
```

Since `grid-template` doesn’t reset the *implicit* grid properties (<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-auto-columns-rows">grid-auto-columns</a>, <a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-auto-columns-rows">grid-auto-rows</a>, and <a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-auto-flow">grid-auto-flow</a>), which is probably what you want to do in most cases, it’s recommended to use the <a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid">grid</a> property instead of `grid-template`.

#### grid-column-gap  
grid-row-gap

Specifies the size of the grid lines. You can think of it like setting the width of the gutters between the columns/rows.

Values:

- **&lt;line-size&gt;** – a length value

```css
.container {
  grid-column-gap: <line-size>;
  grid-row-gap: <line-size>;
}
```

Example:

```css
.container {
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px;
  grid-column-gap: 10px;
  grid-row-gap: 15px;
}
```

![Example of grid-column-gap and grid-row-gap](https://css-tricks.com/wp-content/uploads/2018/11/dddgrid-gap.svg)The gutters are only created *between* the columns/rows, not on the outer edges.

Note: The `grid-` prefix will be removed and `grid-column-gap` and `grid-row-gap` renamed to `column-gap` and `row-gap`. The unprefixed properties are already supported in Chrome 68+, Safari 11.2 Release 50+ and Opera 54+.

#### grid-gap

A shorthand for `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-column-row-gap">grid-row-gap</a>` and `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-column-row-gap">grid-column-gap</a>`

Values:

- **&lt;grid-row-gap&gt; &lt;grid-column-gap&gt;** – length values

```css
.container {
  grid-gap: <grid-row-gap> <grid-column-gap>;
}
```

Example:

```css
.container {
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px;
  grid-gap: 15px 10px;
}
```

If no `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-column-row-gap">grid-row-gap</a>` is specified, it’s set to the same value as `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-column-row-gap">grid-column-gap</a>`

Note: The `grid-` prefix will be removed and `grid-gap` renamed to `gap`. The unprefixed property is already supported in Chrome 68+, Safari 11.2 Release 50+ and Opera 54+.

#### justify-items

Aligns grid items along the *inline (row)* axis (as opposed to `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-items">align-items</a>` which aligns along the *block (column)* axis). This value applies to all grid items inside the container.

Values:

- **start** – aligns items to be flush with the start edge of their cell
- **end** – aligns items to be flush with the end edge of their cell
- **center** – aligns items in the center of their cell
- **stretch** – fills the whole width of the cell (this is the default)

```css

.container {
  justify-items: start | end | center | stretch;
}
```

Examples:

```css

.container {
  justify-items: start;
}
```

![Example of justify-items set to start](https://css-tricks.com/wp-content/uploads/2018/11/justify-items-start.svg)
```css
.container {
  justify-items: end;
}
```

![Example of justify-items set to end](https://css-tricks.com/wp-content/uploads/2018/11/justify-items-end.svg)
```css
.container {
  justify-items: center;
}
```

![Example of justify-items set to center](https://css-tricks.com/wp-content/uploads/2018/11/justify-items-center.svg)

```css  

.container {
  justify-items: stretch;
}
```

![Example of justify-items set to stretch](https://css-tricks.com/wp-content/uploads/2018/11/justify-items-stretch.svg)This behavior can also be set on individual grid items via the `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-self">justify-self</a>` property.

#### align-items

Aligns grid items along the *block (column)* axis (as opposed to `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-items">justify-items</a>` which aligns along the *inline (row)* axis). This value applies to all grid items inside the container.

Values:

- **start** – aligns items to be flush with the start edge of their cell
- **end** – aligns items to be flush with the end edge of their cell
- **center** – aligns items in the center of their cell
- **stretch** – fills the whole height of the cell (this is the default)

```css
.container {
  align-items: start | end | center | stretch;
}
```

Examples:

```css
.container {
  align-items: start;
}
```

![Example of align-items set to start](https://css-tricks.com/wp-content/uploads/2018/11/align-items-start.svg)

```css
.container {
  align-items: end;
}
```

![Example of align-items set to end](https://css-tricks.com/wp-content/uploads/2018/11/align-items-end.svg)

```css
.container {
  align-items: center;
}
```

![Example of align-items set to center](https://css-tricks.com/wp-content/uploads/2018/11/align-items-center.svg)

```css
.container {
  align-items: stretch;
}
```

![Example of align-items set to stretch](https://css-tricks.com/wp-content/uploads/2018/11/align-items-stretch.svg)This behavior can also be set on individual grid items via the `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-self">align-self</a>` property.

#### place-items

`place-items` sets both the `align-items` and `justify-items` properties in a single declaration.

Values:

- **&lt;align-items&gt; / &lt;justify-items&gt;** – The first value sets `align-items`, the second value `justify-items`. If the second value is omitted, the first value is assigned to both properties.

All major browsers except Edge support the `place-items` shorthand property.

For more details, see [align-items](https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-items) and [justify-items](https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-items).

#### justify-content

Sometimes the total size of your grid might be less than the size of its grid container. This could happen if all of your grid items are sized with non-flexible units like `px`. In this case you can set the alignment of the grid within the grid container. This property aligns the grid along the *inline (row)* axis (as opposed to `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-content">align-content</a>` which aligns the grid along the *block (column)* axis).

Values:

- **start** – aligns the grid to be flush with the start edge of the grid container
- **end** – aligns the grid to be flush with the end edge of the grid container
- **center** – aligns the grid in the center of the grid container
- **stretch** – resizes the grid items to allow the grid to fill the full width of the grid container
- **space-around** – places an even amount of space between each grid item, with half-sized spaces on the far ends
- **space-between** – places an even amount of space between each grid item, with no space at the far ends
- **space-evenly** – places an even amount of space between each grid item, including the far ends

```css
.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
}
```

Examples:

```css
.container {
  justify-content: start;
}
```

![Example of justify-content set to start](https://css-tricks.com/wp-content/uploads/2018/11/justify-content-start.svg)

```css
.container {
  justify-content: end;
}
```

![Example of justify-content set to end](https://css-tricks.com/wp-content/uploads/2018/11/justify-content-end.svg)

```css
.container {
  justify-content: center;
}
```

![Example of justify-content set to center](https://css-tricks.com/wp-content/uploads/2018/11/justify-content-center.svg)

```css
.container {
  justify-content: stretch;
}
```

![Example of justify-content set to stretch](https://css-tricks.com/wp-content/uploads/2018/11/justify-content-stretch.svg)

```css
.container {
  justify-content: space-around;
}
```

![Example of justify-content set to space-around](https://css-tricks.com/wp-content/uploads/2018/11/justify-content-space-around.svg)

```css
.container {
  justify-content: space-between;
}
```

![Example of justify-content set to space-between](https://css-tricks.com/wp-content/uploads/2018/11/justify-content-space-between.svg)

```css
.container {
  justify-content: space-evenly;
}
```

![Example of justify-content set to space-evenly](https://css-tricks.com/wp-content/uploads/2018/11/justify-content-space-evenly.svg)

#### align-content

Sometimes the total size of your grid might be less than the size of its grid container. This could happen if all of your grid items are sized with non-flexible units like `px`. In this case you can set the alignment of the grid within the grid container. This property aligns the grid along the *block (column)* axis (as opposed to `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-content">justify-content</a>` which aligns the grid along the *inline (row)* axis).

Values:

- **start** – aligns the grid to be flush with the start edge of the grid container
- **end** – aligns the grid to be flush with the end edge of the grid container
- **center** – aligns the grid in the center of the grid container
- **stretch** – resizes the grid items to allow the grid to fill the full height of the grid container
- **space-around** – places an even amount of space between each grid item, with half-sized spaces on the far ends
- **space-between** – places an even amount of space between each grid item, with no space at the far ends
- **space-evenly** – places an even amount of space between each grid item, including the far ends

```css
.container {
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;
}
```

Examples:

```css
.container {
  align-content: start;
}
```

![Example of align-content set to start](https://css-tricks.com/wp-content/uploads/2018/11/align-content-start.svg)

```css
.container {
  align-content: end;
}
```

![Example of align-content set to end](https://css-tricks.com/wp-content/uploads/2018/11/align-content-end.svg)

```css
.container {
  align-content: center;
}
```

![Example of align-content set to center](https://css-tricks.com/wp-content/uploads/2018/11/align-content-center.svg)

```css
.container {
  align-content: stretch;
}
```

![Example of align-content set to stretch](https://css-tricks.com/wp-content/uploads/2018/11/align-content-stretch.svg)

```css
.container {
  align-content: space-around;
}
```

![Example of align-content set to space-around](https://css-tricks.com/wp-content/uploads/2018/11/align-content-space-around.svg)

```css
.container {
  align-content: space-between;
}
```

![Example of align-content set to space-between](https://css-tricks.com/wp-content/uploads/2018/11/align-content-space-between.svg)

```css
.container {
  align-content: space-evenly;
}
```

![Example of align-content set to space-evenly](https://css-tricks.com/wp-content/uploads/2018/11/align-content-space-evenly.svg)

#### place-content

`place-content` sets both the `align-content` and `justify-content` properties in a single declaration.

Values:

- **&lt;align-content&gt; / &lt;justify-content&gt;** – The first value sets `align-content`, the second value `justify-content`. If the second value is omitted, the first value is assigned to both properties.

All major browsers except Edge support the `place-content` shorthand property.

For more details, see [align-content](https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-content) and [justify-content](https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-content).

#### grid-auto-columns  
grid-auto-rows

Specifies the size of any auto-generated grid tracks (aka *implicit grid tracks*). Implicit tracks get created when there are more grid items than cells in the grid or when a grid item is placed outside of the explicit grid. (see [The Difference Between Explicit and Implicit Grids](https://css-tricks.com/difference-explicit-implicit-grids/))

Values:

- **&lt;track-size&gt;** – can be a length, a percentage, or a fraction of the free space in the grid (using the `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#fr-unit">fr</a>` unit)

```css
.container {
  grid-auto-columns: <track-size> ...;
  grid-auto-rows: <track-size> ...;
}
```

To illustrate how implicit grid tracks get created, think about this:

```css
.container {
  grid-template-columns: 60px 60px;
  grid-template-rows: 90px 90px;
}
```

![Example of 2x2 grid](https://css-tricks.com/wp-content/uploads/2018/11/grid-auto-columns-rows-01.svg)This creates a 2 x 2 grid.

But now imagine you use `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-column-row">grid-column</a>` and `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-column-row">grid-row</a>` to position your grid items like this:

```css
.item-a {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}
.item-b {
  grid-column: 5 / 6;
  grid-row: 2 / 3;
}
```

![Example of implicit tracks](https://css-tricks.com/wp-content/uploads/2018/11/grid-auto-columns-rows-02.svg)We told .item-b to start on column line 5 and end at column line 6, *but we never defined a column line 5 or 6*. Because we referenced lines that don’t exist, implicit tracks with widths of 0 are created to fill in the gaps. We can use `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-auto-columns-rows">grid-auto-columns</a>` and `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-auto-columns-rows">grid-auto-rows</a>` to specify the widths of these implicit tracks:

```css
.container {
  grid-auto-columns: 60px;
}
```

![grid-auto-columns-rows](https://css-tricks.com/wp-content/uploads/2018/11/grid-auto-columns-rows-03.svg)

#### grid-auto-flow

If you have grid items that you don’t explicitly place on the grid, the *auto-placement algorithm* kicks in to automatically place the items. This property controls how the auto-placement algorithm works.

Values:

- **row** – tells the auto-placement algorithm to fill in each row in turn, adding new rows as necessary (default)
- **column** – tells the auto-placement algorithm to fill in each column in turn, adding new columns as necessary
- **dense** – tells the auto-placement algorithm to attempt to fill in holes earlier in the grid if smaller items come up later

```css
.container {
  grid-auto-flow: row | column | row dense | column dense;
}
```

Note that **dense** only changes the visual order of your items and might cause them to appear out of order, which is bad for accessibility.

Examples:

Consider this HTML:

```markup
<section class="container">
  <div class="item-a">item-a</div>
  <div class="item-b">item-b</div>
  <div class="item-c">item-c</div>
  <div class="item-d">item-d</div>
  <div class="item-e">item-e</div>
</section>
```

You define a grid with five columns and two rows, and set `grid-auto-flow` to `row` (which is also the default):

```css
.container {
  display: grid;
  grid-template-columns: 60px 60px 60px 60px 60px;
  grid-template-rows: 30px 30px;
  grid-auto-flow: row;
}
```

When placing the items on the grid, you only specify spots for two of them:

```css
.item-a {
  grid-column: 1;
  grid-row: 1 / 3;
}
.item-e {
  grid-column: 5;
  grid-row: 1 / 3;
}
```

Because we set `grid-auto-flow` to `row`, our grid will look like this. Notice how the three items we didn’t place (**item-b**, **item-c** and **item-d**) flow across the available rows:

![Example of grid-auto-flow set to row](https://css-tricks.com/wp-content/uploads/2018/11/grid-auto-flow-01.svg)If we instead set `grid-auto-flow` to `column`, **item-b**, **item-c** and **item-d** flow down the columns:

```css
.container {
  display: grid;
  grid-template-columns: 60px 60px 60px 60px 60px;
  grid-template-rows: 30px 30px;
  grid-auto-flow: column;
}
```

![Example of grid-auto-flow set to column](https://css-tricks.com/wp-content/uploads/2018/11/grid-auto-flow-02.svg)

#### grid

A shorthand for setting all of the following properties in a single declaration: `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-template-columns-rows">grid-template-rows</a>`, `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-template-columns-rows">grid-template-columns</a>`, `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-template-areas">grid-template-areas</a>`, `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-auto-columns-rows">grid-auto-rows</a>`, `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-auto-columns-rows">grid-auto-columns</a>`, and `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-auto-flow">grid-auto-flow</a>` (Note: You can only specify the explicit or the implicit grid properties in a single grid declaration).

Values:

- **none** – sets all sub-properties to their initial values.
- **&lt;grid-template&gt;** – works the same as the `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-template">grid-template</a>` shorthand.
- **&lt;grid-template-rows&gt; / \[ auto-flow &amp;&amp; dense? \] &lt;grid-auto-columns&gt;?** – sets `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-template-columns-rows">grid-template-rows</a>` to the specified value. If the `auto-flow` keyword is to the right of the slash, it sets `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-auto-flow">grid-auto-flow</a>` to `column`. If the `dense` keyword is specified additionally, the auto-placement algorithm uses a “dense” packing algorithm. If `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-auto-columns-rows">grid-auto-columns</a>` is omitted, it is set to `auto`.
- **\[ auto-flow &amp;&amp; dense? \] &lt;grid-auto-rows&gt;? / &lt;grid-template-columns&gt;** – sets `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-template-columns-rows">grid-template-columns</a>` to the specified value. If the `auto-flow` keyword is to the left of the slash, it sets `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-auto-flow">grid-auto-flow</a>` to `row`. If the `dense` keyword is specified additionally, the auto-placement algorithm uses a “dense” packing algorithm. If `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-auto-columns-rows">grid-auto-rows</a>` is omitted, it is set to `auto`.

Examples:

The following two code blocks are equivalent:

```css
.container {
    grid: 100px 300px / 3fr 1fr;
  }
```

```css
.container {
    grid-template-rows: 100px 300px;
    grid-template-columns: 3fr 1fr;
  }
```

The following two code blocks are equivalent:

```css
.container {
    grid: auto-flow / 200px 1fr;
  }
```

```css
.container {
    grid-auto-flow: row;
    grid-template-columns: 200px 1fr;
  }
```

The following two code blocks are equivalent:

```css
.container {
    grid: auto-flow dense 100px / 1fr 2fr;
  }
```

```css
.container {
    grid-auto-flow: row dense;
    grid-auto-rows: 100px;
    grid-template-columns: 1fr 2fr;
  }
```

And the following two code blocks are equivalent:

```css
.container {
    grid: 100px 300px / auto-flow 200px;
  }
```

```css
.container {
    grid-template-rows: 100px 300px;
    grid-auto-flow: column;
    grid-auto-columns: 200px;
  }
```

It also accepts a more complex but quite handy syntax for setting everything at once. You specify `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-template-areas">grid-template-areas</a>`, `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-template-columns-rows">grid-template-rows</a>` and `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-template-columns-rows">grid-template-columns</a>`, and all the other sub-properties are set to their initial values. What you’re doing is specifying the line names and track sizes inline with their respective grid areas. This is easiest to describe with an example:

```css
.container {
    grid: [row1-start] "header header header" 1fr [row1-end]
          
```

\[row<span class="token number" style="box-sizing: border-box; color: rgb(252, 148, 99);">2</span>-start\]

 “footer footer footer” 25px \[row2-end\] / auto 50px auto; }

That’s equivalent to this:

```css
.container {
    grid-template-areas:
      "header header header"
      "footer footer footer";
    grid-template-rows: [row1-start] 1fr [row1-end row2-start] 25px [row2-end];
    grid-template-columns: auto 50px auto;
  }
```

Properties for the Children  
(Grid Items)
------------------------------------------

**Note:**  
`float`, `display: inline-block`, `display: table-cell`, `vertical-align` and `column-*` properties have no effect on a grid item.

#### grid-column-start  
grid-column-end  
grid-row-start  
grid-row-end

Determines a grid item’s location within the grid by referring to specific grid lines. `grid-column-start`/`grid-row-start` is the line where the item begins, and `grid-column-end`/`grid-row-end` is the line where the item ends.

Values:

- **&lt;line&gt;** – can be a number to refer to a numbered grid line, or a name to refer to a named grid line
- **span &lt;number&gt;** – the item will span across the provided number of grid tracks
- **span &lt;name&gt;** – the item will span across until it hits the next line with the provided name
- **auto** – indicates auto-placement, an automatic span, or a default span of one

```css
.item {
  grid-column-start: <number> | <name> | span <number> | span <name> | auto;
  grid-column-end: <number> | <name> | span <number> | span <name> | auto;
  grid-row-start: <number> | <name> | span <number> | span <name> | auto;
  grid-row-end: <number> | <name> | span <number> | span <name> | auto;
}
```

Examples:

```css
.item-a {
  grid-column-start: 2;
  grid-column-end: five;
  grid-row-start: row1-start;
  grid-row-end: 3;
}
```

![Example of grid-row/column-start/end](https://css-tricks.com/wp-content/uploads/2018/11/grid-column-row-start-end-01.svg)

```css
.item-b {
  grid-column-start: 1;
  grid-column-end: span col4-start;
  grid-row-start: 2;
  grid-row-end: span 2;
}
```

![Example of grid-row/column-start/end](https://css-tricks.com/wp-content/uploads/2018/11/grid-column-row-start-end-02.svg)If no `grid-column-end`/`grid-row-end` is declared, the item will span 1 track by default.

Items can overlap each other. You can use `z-index` to control their stacking order.

#### grid-column  
grid-row

Shorthand for `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-column-row-start-end">grid-column-start</a>` + `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-column-row-start-end">grid-column-end</a>`, and `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-column-row-start-end">grid-row-start</a>` + `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-column-row-start-end">grid-row-end</a>`, respectively.

Values:

- **&lt;start-line&gt; / &lt;end-line&gt;** – each one accepts all the same values as the longhand version, including span

```css
.item {
  grid-column: <start-line> / <end-line> | <start-line> / span <value>;
  grid-row: <start-line> / <end-line> | <start-line> / span <value>;
}
```

Example:

```css
.item-c {
  grid-column: 3 / span 2;
  grid-row: third-line / 4;
}
```

![Example of grid-column/grid-row](https://css-tricks.com/wp-content/uploads/2018/11/grid-column-row.svg)If no end line value is declared, the item will span 1 track by default.

#### grid-area

Gives an item a name so that it can be referenced by a template created with the `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-template-areas">grid-template-areas</a>` property. Alternatively, this property can be used as an even shorter shorthand for `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-column-row-start-end">grid-row-start</a>` + `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-column-row-start-end">grid-column-start</a>` + `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-column-row-start-end">grid-row-end</a>` + `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-column-row-start-end">grid-column-end</a>`.

Values:

- **&lt;name&gt;** – a name of your choosing
- **&lt;row-start&gt; / &lt;column-start&gt; / &lt;row-end&gt; / &lt;column-end&gt;** – can be numbers or named lines

```css
.item {
  grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;
}
```

Examples:

As a way to assign a name to the item:

```css
.item-d {
  grid-area: header;
}
```

As the short-shorthand for `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-column-row-start-end">grid-row-start</a>` + `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-column-row-start-end">grid-column-start</a>` + `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-column-row-start-end">grid-row-end</a>` + `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-column-row-start-end">grid-column-end</a>`:

```css
.item-d {
  grid-area: 1 / col4-start / last-line / 6;
}
```

![Example of grid-area](https://css-tricks.com/wp-content/uploads/2018/11/grid-area.svg)

#### justify-self

Aligns a grid item inside a cell along the *inline (row)* axis (as opposed to `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-self">align-self</a>` which aligns along the *block (column)* axis). This value applies to a grid item inside a single cell.

Values:

- **start** – aligns the grid item to be flush with the start edge of the cell
- **end** – aligns the grid item to be flush with the end edge of the cell
- **center** – aligns the grid item in the center of the cell
- **stretch** – fills the whole width of the cell (this is the default)

```css
.item {
  justify-self: start | end | center | stretch;
}
```

Examples:

```css
.item-a {
  justify-self: start;
}
```

![Example of justify-self set to start](https://css-tricks.com/wp-content/uploads/2018/11/justify-self-start.svg)

```css
.item-a {
  justify-self: end;
}
```

![alt="Example](https://css-tricks.com/wp-content/uploads/2018/11/justify-self-end.svg)

```css
.item-a {
  justify-self: center;
}
```

![Example of justify-self set to center](https://css-tricks.com/wp-content/uploads/2018/11/justify-self-center.svg)

```css
.item-a {
  justify-self: stretch;
}
```

![Example of justify-self set to stretch](https://css-tricks.com/wp-content/uploads/2018/11/justify-self-stretch.svg)To set alignment for *all* the items in a grid, this behavior can also be set on the grid container via the `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-items">justify-items</a>` property.

#### align-self

Aligns a grid item inside a cell along the *block (column)* axis (as opposed to `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-self">justify-self</a>` which aligns along the *inline (row)* axis). This value applies to the content inside a single grid item.

Values:

- **start** – aligns the grid item to be flush with the start edge of the cell
- **end** – aligns the grid item to be flush with the end edge of the cell
- **center** – aligns the grid item in the center of the cell
- **stretch** – fills the whole height of the cell (this is the default)

```css
.item {
  align-self: start | end | center | stretch;
}
```

Examples:

```css
.item-a {
  align-self: start;
}
```

![Example of align-self set to start](https://css-tricks.com/wp-content/uploads/2018/11/align-self-start.svg)

```css
.item-a {
  align-self: end;
}
```

![Example of align-self set to end](https://css-tricks.com/wp-content/uploads/2018/11/align-self-end.svg)```css
.item-a {
  align-self: center;
}
```

![Example of align-self set to center](https://css-tricks.com/wp-content/uploads/2018/11/align-self-center.svg)

```css
.item-a {
  align-self: stretch;
}
```

![Example of align-self set to stretch](https://css-tricks.com/wp-content/uploads/2018/11/align-self-stretch.svg)To align *all* the items in a grid, this behavior can also be set on the grid container via the `<a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-items">align-items</a>` property.

#### place-self

`place-self` sets both the `align-self` and `justify-self` properties in a single declaration.

Values:

- **auto** – The “default” alignment for the layout mode.
- **&lt;align-self&gt; / &lt;justify-self&gt;** – The first value sets `align-self`, the second value `justify-self`. If the second value is omitted, the first value is assigned to both properties.

Examples:

```css
.item-a {
  place-self: center;
}
```

![place self set to center](https://css-tricks.com/wp-content/uploads/2018/11/place-self-center.svg)

```css
.item-a {
  place-self: center stretch;
}
```

![place set set to center stretch](https://css-tricks.com/wp-content/uploads/2018/11/place-self-center-stretch.svg)All major browsers except Edge support the `place-self` shorthand property.

### [\#](https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-4)Special Functions and Keywords

- When sizing rows and columns, you can use all the [lengths](https://css-tricks.com/the-lengths-of-css/) you are used to, like `px`, rem, %, etc, but you also have keywords like `min-content`, `max-content`, `auto`, and perhaps the most useful, fractional units. `grid-template-columns: 200px 1fr 2fr min-content;`
- You also have access to a function which can help set boundaries for otherwise flexible units. For example to set a column to be 1fr, but shrink no further than 200px: `grid-template-columns: 1fr minmax(200px, 1fr);`
- There is `repeat()` function, which saves some typing, like making 10 columns: `grid-template-columns: repeat(10, 1fr);`
- Combining all of these things can be extremely powerful, like `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));`
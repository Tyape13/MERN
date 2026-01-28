Ok Let's Start to learn. 
This is more about Intermediate Css Stuff. 

in first video i was supposed to download html file. that's it

### 2 - Box Model
Height, width, border, padding, margin.

### 3 -  Height and Width
when we set height, 
it's just about Content ko Height, and Width. 
I think height and width is smaller part inside whole box itself. 

### 4 - Border Property
border-width: 5px;
border-style: solid;
border: 2px solid black;
I only write New concepts.

### 5 - Border-Radius Property
Curved Edges Square Boxes/Borders.  
border-radius:50%;
or (14px)

### 6 - Padding Property
Spaces outside Content, Bubble Wrapper.
padding: 1px 2px;
// top & bottom | right & left.
padding: 1px 2px 3px;
// top | left & right | bottom
padding: 1px 2px 3px 4px;
// top | right | bottom | left
- It goes Clockwise direction to apply the padding effects.

### 7 - Margin Property
BROOO, To Control Space Between 2 Content Sections/Boxes.
Concept to Understand.
Same Mathi ko zastai concept can be used here. 
margin changed for block elements like div won't change any right side margin cause div occupies all right side and it's not inline element

### 8 - Practice Qs
just traffic lights made with divs

### 9 - Display Property
This is Gonna Be Great Concept. (No Flexbox i think, idk we just saw inline/block)
- products that are placed right beside each other are inline elements and not block cause they take entire block
- display: inline;
- display: block;
bro it makes even div inline??????????????
YES!
Some Interesting Thing:
- when Padding, Margin implementing on Inline Elements. it will only affect Left and Right. 
- when Padding, Margin on Block (div) Elements. It affects everywhere. for some reason.

### 10 - Something Random
idk bro pdf thyo

### 11 - Inline-Block
Combination of Both. 
This is how each products are shown. 
their margin and paddings can be affected anywhere, and they act like inline so they are right beside each other. 

Important: We can't make Div Block, "Inline" since it will break cause nothing is applied into that div element now that it's inline, so we use 
Inline-Block Element. Bro.....it Gliches and JPT 3ta Lines Dekahuxa kina ho.

This will apply those other properties that started to glitch.
#third{
    display:none;
}
to not show that element, like magic. maybe we can control it like when pc css vs mobile css different things showing.

### 12 - Relative Units (percentage)
- Size relative to element's parent tag.
[Good Information]


### 13 - em/rem (RELATIVE units ho)
- Everything about "EM" (use this more often cause it's changes relatively when other stuff of same element changes)
when using typographical properties like font-size, weight, it's Relative to Parent.
but when element of itself like width, padding, margin, it's alone. 
remember example of 2 divs one outside parent, another is child inside div. 
when we change the fontsize of inner to 2em, then if outside font is 20px then inner is 40px. 
but when we used different property like padding and used 1em....... then.............so it's relative to element itself. so normally zati xa or font-size xa vane mathi tira.. tesko relative. aafnai properties ko relative... this makes any property multiply.
!REMINDER: SNOWBALL DRAWBACK. (how small snowball grows down...)

- Abuot REM (Root Em)
We use this Most cause no Drawbacks like Snowball of em. and everything else same
Root Element ko Relative Works. Not "Relative-Em" but "Root-Em"


Let's Get to Work. 

1,2 showed how to download file stuff.

---

### 3 - Universal Selectors
we used to use like elements or tags as selecter like h1, p, textarea, select, option.
css have 3 things that makes structure works, 

selector{
    property:value;
}

* - selects everything as selector

---

### 4 - Element Selector
tag selector. but major Parent Tag that has collection of other tags is Element.
h1, h3 {
    property:value;
}

---

### 5 - Id selector

#id {
    property:value;
}

id name we put is case-sensitive so value of id attribute, we have on html tag needs to be same.

#signup {
    background-color: red;
    color: white;
}

Brooo Yetii ko lagi maile sala ai lai harrase nai gareko xu mula kassammm.

---

### 6 - Class Selector

.classname {
    property: value;
}

hmmmmm class attribute of html tag.
idk why we have class and id and name and ..idk 

---

### 7 - practice question
idk bro. 
ok i care cause new concept.

it says we can use css using this style but bro do i need this??? idk

div[id="myId"] p {
    color:green;
}

#myId p {
    property: value;
}

hmmmm first one is just those divs that has id that while second one might select every one right??? idk not trying that right now.
yeah only 'p' tag inside 'div' tag.

---

### 8 - Descendant Selector
Bro we used this above... that's why it mattered cause i didn't know but i know it's imp. see me genuis turtle. bruh.

div p {
    property: value;
}
this has element selector and descendant selector both concepts applied.

we can even go 3 levels, 4??? idk.
like 
div ol li {
    hehe: haha;
}

---

### 9 - Adjacent Sibling
do i need to learn all this???
ok.
p + h3 {
    nothing: bro;
}
same sibling huda.... Hmmmm. like every h3 after p will get affected. 
not if div aayera different level ma shift huda stuff. idk bro i know sakyo kurai.
- h3 should be followed by p in html file. 

### 10 - Child Combinator
JUST ONLY - directly under wala. just 1 level down directly only affected. 
span > button {
    property: value;
}
this symbol ">"

### 11 - Attribute Selector
Html_Tag[attr="value"] {
    property: value;
}
i know this one. cause i have seen this before.
This is UNIVERSAL SO CLOSE EYES AND REMEMBER and RECALL. 
nice.

### 12 - Practice Questions
Imp xa.
when h1, #id, .class
all have different values for same element. WHICH ONE AFFECTS that Tag.
OHHHHH. it's not Tag like H1. cause it's Broad rather "ID" cause it's going deep individual identification.
id > class > element
- - - 
what does this mean if we using 
div p {property:value;}
then it's 0 0 2. and class ko is 0 1 0 so 10 is more than 2. 


### 13 - Pseudo Class
:hover
:active
:checked
:nth-of-type
- checked is for like radio or checkbox ones.

### 14 - Pseudo Elements
::first-letter
::first-line
::selection
aru ni k k hola idc bro.

### 15 - Css Cascading StyleSheets
cascade is algorithm, to select which order ma properties ko changes are applied.
rule:
- Last one is applied if properties defined for same Element or something. Even Whole File itself, like `<script rel='stylesheet' href='style.css'>` won't be valued if `<script rel='stylesheet' href="style2.css">` has so many same Elements ko properties defined here. 
- talking about Specificity: 3 places value calculated to see which one has more priority to be applied the property or something. 
id      class/attribute/pseudo-class      element/pseudo-element
id > class > tags(elements)
- IMPORTANT: INLINE STYLING HAS THE MOST PRIORITY. so if something not write with css files then directly go to HTML file and make Necessary Changes.
[Note:] but we can't change it through css files.

### 16 - Practice Question
There are multiple ways to apply for same Element.


### 17 - !important
I think i just used 'important' only somewhere like idiot.
so it's about using it as "!important"
Yeahhhh

### 18 - Inheritance
If we change property of parent, it will affect every other childs inside it. 
like div ko background color changed then... other <p> <inputs> saab ko change hunxa.
- input ko box itself doesn't inherit but we can do it by saying
input {
    background-color: inherit;
}
this makes it inherit the bkg color of div or anything above it to come inside writing input box itself. 

- Yeah We need to be able to Change things in browser itself then make changes in css file. I KNOW BRO.

- Cooolers.co Vanne website bate we can see Which Color Pallets would look great on our website. 


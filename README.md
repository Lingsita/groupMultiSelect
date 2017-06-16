# GroupMultiSelect
Jquery Plugin to make a multi select with grouped options

Usefull when you need to know which category and which items the user has been selected

## Requirements

* jquery3.2.1

## How to Use

You need to import the javascript and css files in your template.

Then you just have to set up the widget configuration as follows:
```HTML
 <div class="groupMultiSelect">
 </div>
```

```javascript
var groupselect =$(".groupMultiSelect").groupMultiSelect({
      options:[
        {
          label:'Category 1',
          subItems:[]
        },
        {
          label:'Category 2',
          subItems:[
            'SubItem 1',
            'SubItem 1',
            'SubItem 1'
          ]
        }
      ],
      placeholder:"Reasons",
      initial: {
          parent: 'Category 2',
          children:[
              "SubItem 1",
              "SubItem 3"
          ]
      },
      onChange: function (parent, children) {
      //Do stuff with the user selection
      }
    });
```
or with <optgroup> Tag you we just have to put the HTML inside our div like this:
```HTML
<div class="groupMultiSelect1">
        <select>
          <optgroup label="Swedish Cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
          </optgroup>alue="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </optgroup>
        </select>
      </div>
```
![alt text](https://github.com/Lingsita/groupMultiSelect/blob/master/example.png)

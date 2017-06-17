# GroupMultiSelect
Jquery Plugin to make a multi select with grouped options

Useful when we need to know which category and which items selected by the user

## Requirements

* jquery3.2.1

## How to Use

We need to import the javascript and css files in your template.

Then just set up the widget configuration as follows:
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
or with ```<optgroup>``` tag we just have to put the HTML inside our div:
```HTML
<div class="groupMultiSelect1">
  <select>
    <optgroup label="Swedish Cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
    </optgroup>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </optgroup>
  </select>
</div>
```

<h3>Note:</h3> For this second approach you must not set the options in the plugin constructor.

![alt text](https://github.com/Lingsita/groupMultiSelect/blob/master/example.png)

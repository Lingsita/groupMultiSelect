# groupMultiSelect
Jquery Plugin to make a multi select with grouped options

Usefull when you need to know which category and which items the user has been selected


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
      onChange: function (parent, children) {
      //Do stuff with the user selection
      }
    });
```
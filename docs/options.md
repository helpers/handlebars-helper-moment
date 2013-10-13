The moment.js lib has plenty of features and options, these examples are just the tip of the iceberg of what [moment.js](http://momentjs.com/docs/) can do.

As a tip, remember that `\{{moment method=null}}`  means `moment().method()` and `\{{moment somedate method="something"}}` means `moment(somedate).method("something")`. Also, the handlebars syntax does not let you pass some values (like arrays and objects) directly from the tag, so you may need to use the yaml frontmatter to run those.

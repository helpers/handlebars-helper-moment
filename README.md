assemble-handlebars-momentjs 0.0.1
==================================

Combines the powers of Assemble, Handlebars.js and Moment.js into a great helper to master time.

# Crash course

Install these with npm:
* grunt
* assemble
* moment
* lodash

Get your assemble project running, drop the helper from src/helpers/ to your project directory, enjoy.

# Using this repository

Just download, run
```
npm install
```
and then test out generating src/index.html.hbs to build/index.html with:
```
grunt
```
Hopefully an updated version of index.html will be generated for you.

# Examples

These are in the frontmatter, these are not needed, but I use them as an example:
```
---
sampledate: <%=new Date("Sun Jun 30 2011 01:53:23 GMT+0300 (EEST)")%>
sampletextdate: 'Sun, 30 Jun 2012 11:19:15 +0300'
inputformats: ["ddd, DD MMM YYYY HH:mm:ss ZZ", "MMMM YYYY"]
daysadd: {days: 5}
fiveyearsago: {years: 5}
duration: {hours: 2, minutes: 33}
--- 

```

Unix timestamp of now
```
{{moment}}
```
```
1372599296756
```

Current time with formatting 
```
{{moment format="HH:mm:ss"}}
```
```
16:34:56
```

Specific time with formatting
```
{{moment sampledate format="HH:mm:ss"}}
```
```
01:53:23
```

Specific unix timestamp with formatting
```
{{moment unixtimestamp format="HH:mm:ss"}}
```
```
19:17:56
```

Specific datetime with formatting
```
{{moment sampledate format="dddd, DD MMMM YYYY HH:mm:ss ZZ"}}
```
```
Sunday, 30 June 2013 01:53:23 +0300
```

Language support
```
{{moment sampledate lang="fi" format="dddd, DD MMMM YYYY HH:mm:ss ZZ"}}
```
```
sunnuntai, 30 kesäkuu 2013 01:53:23 +0300
```

Is the added date valid?
```
{{moment sampledate isValid=null}}
```
```
true
```

Input as a string, with defined format
```
{{moment [sampletextdate,"ddd, DD MMM YYYY HH:mm:ss ZZ"] format="MMMM YYYY"}}
```
```
June 2013
```

Multiple formats, moment.js tries to figure out what's the correct one
```
{{moment [sampletextdate,formats] format="MMMM YYYY"}}
```
```
June 2013
```

Specific datetime with formatting, converted to utc
```
{{moment sampledate utc=null format="dddd, DD MMMM YYYY HH:mm:ss ZZ"}}
```
```
Saturday, 29 June 2013 22:53:23 +0000
```

Getters and setters, example: get week of year, depends on lang (see (moment.js)[http://momentjs.com/docs/#/get-set/] documentation for more details)
```
The week number in Finland is {{moment sampledate lang="fi" week=null}}
```
```
The week number in Finland is 26
```

Manipulate, example: add days, (see (moment.js)[http://momentjs.com/docs/#/manipulating/] documentation for more details)
```
{{moment sampledate format="dddd"}}-{{moment sampledate add=daysadd format="dddd"}}
```
```
Sunday-Friday
```

Manipulate, example: subtract years, (see (moment.js)[http://momentjs.com/docs/#/manipulating/] documentation for more details)
```
{{moment sampledate subtract=fiveyearsago format="YYYY"}}-{{moment sampledate format="YYYY"}}
```
```
2008-2013
```

Manipulate, example: startOf month, (see (moment.js)[http://momentjs.com/docs/#/manipulating/] documentation for more details)
```
{{moment sampledate startOf="month" format="dddd, DD MMMM YYYY HH:mm:ss ZZ"}}
```
```
Saturday, 01 June 2013 00:00:00 +0300
```

Manipulate, example: endOf week, (see (moment.js)[http://momentjs.com/docs/#/manipulating/] documentation for more details)
```
{{moment sampledate endOf="week" format="dddd, DD MMMM YYYY HH:mm:ss ZZ"}}
```
```
Saturday, 06 July 2013 23:59:59 +0300
```

Time from now
```
After this page is rendered, the week will end {{moment endOf="week" fromNow=null}}
```
```
After this page is rendered, the week will end in 6 days
```

Time from X
```
This helper was coded {{moment from=sampledate}}
```
```
This helper was coded in 15 hours
```

Calendar time
```
The coding started {{moment sampledate calendar=null}}
```
```
The coding started Today at 1:53 AM
```

Diff
```
The difference between those two moments is {{moment diff=sampledate}}
```
```
The difference between those two moments is 52893769
```

Days in Month
```
This month has {{moment daysInMonth=null}} days
```
```
This month has 30 days
```

Days in Month
```
This month has {{moment daysInMonth=null}} days
```
```
This month has 30 days
```

Duration, with humanization
```
The event will last {{duration duration humanize=null}}
```
```
The event will last 3 hours
```

The moment.js has plenty of features and these examples are just the tip of the iceberg of what moment.js can do. Just remember, ```{{moment method=null}}```  means ```moment().method()``` and ```{{moment somedate method="something"}}``` means ```moment(somedate).method("something")```. Also, the handlebars syntax does not let you pass some values (like arrays and objects) directly from the tag, so you may need to use the yaml frontmatter to run those.

## Copyright and license
Copyright 2013 Mikko Tapionlinna

[MIT License](LICENSE-MIT)
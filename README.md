# friends-app

I tried to find a good middle ground between building a true production ready app and building a standalone POC.  

It can sometimes be hard to judge where to stop on something like this. 

Additionally, I chose to add a few features that weren't spelled out in the AC such as the ability to edit and delete friends. 

This sort of just made sense to me to have plus let me show off usage of the store more. 

The biggest leap in decision making however was the actual layout. I don't have as deep of a pure design background and usually 

get design mocks in Figma that I build out to be pixel perfect so I looked around and made something I thought looked nice for the app flow. 

Another specific design choice I made was to use the mat-table instead of building a table in d3. I was nervous doing this since it

sorta goes against the AC but I wanted to leverage the built in capabilities of the mat-table and felt that building them out on my own in d3 

would be a huge time sink. 

On a production level app I would probably opt to lazy load the modules and would also abstract strings to an i8n json file

for translation. 

Finally, I am new to d3 and would have liked to make more visualizations however I was obviously constrained on time so I went with pretty basic charts.

If I had more time to work on this I would have tried to build some network diagram visuals that display the friend relationships. 


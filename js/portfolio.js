// This script loads the portfolio items from the CloudStitch Api

$.getJSON('https://api.cloudstitch.com/jefflombardjr/portfolio-api-1/datasources/sheet?_shape=items',function(data){
    // Setup
    let a, div, h3, ptag, pdescription;
    let portfolioContainer = document.getElementById('jetsContent');
    let rows = data.Sheet1;

    // Transform / Output
    for (row of rows){

        // Create Node Prototypes
        a = document.createElement('a');
        div = document.createElement('div');
        h3 = document.createElement('h3');
        ptag = document.createElement('p');
        pdescription = document.createElement('p');

        // Append HTML Classes to Node Prototypes
        ptag.className = "tags";
        pdescription.className = "description";

        // Assign Values
        a.href = row.Weblink;
        h3.innerText = row.Title;
        pdescription.innerText = row.Description;
        ptag.innerHTML = "<img src='images/cah.png'>" + row.Tags;

        // Stack Nodes into Single Node
        div.appendChild(h3);
        div.appendChild(pdescription);
        div.appendChild(ptag);
        a.appendChild(div);

        // Add Node to Container
        portfolioContainer.appendChild(a);
        }

    jets = new Jets({
      searchTag: '#jetsSearch',
      contentTag: '#jetsContent',
        });

    });

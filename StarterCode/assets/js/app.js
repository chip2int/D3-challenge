
// Dimensions of the plot
let dim = {
  top: 20, 
  right: 30, 
  bottom: 100, 
  left: 60
};
let width = 800 - dim.left - dim.right;
let height = 500 - dim.top - dim.bottom;

// Append SVG element to the ID
let svg = d3.select("#scatter")
  .append("svg")
  .attr("width", width + dim.left + dim.right)
  .attr("height", height + dim.top + dim.bottom)
  .append("g")
  .attr("transform",
        "translate(" + dim.left + "," + dim.top + ")");

// Create X and Y Scales

let x = d3.scaleLinear()
  .domain([0, 30])
  .range([ 0, width ]);

let y = d3.scaleLinear()
  .domain([0, 25])
  .range([ height, 0]);


// X Axis    
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

// Y axis
  
svg.append("g")
    .call(d3.axisLeft(y));

// X Label
svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width-100)
    .attr("y",height+40)
    .text("In Poverty(%)");

// Y Label
svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", -50)
    .attr("dy", ".90em")
    .attr("transform", "rotate(-90)")
    .text("Lacks Healthcare(%)");

//Read the data
d3.csv("assets/data/data.csv", function(data) {
  // Create Circle
  svg.append("circle")
    .attr("r", 10 )
    .attr("stroke","black")
    .attr("fill", "white")
    .attr("cx", d =>  x(data.poverty))
    .attr("cy", d =>  y(data.healthcare))
    .transition()
    .duration(1000)

  // Add text to the Circle
  svg.append("text")
  .attr("text-anchor", "middle")
  .attr("font-size", "10px")
  .attr("dx", d =>  x(data.poverty))
  .attr("dy", d =>  y(data.healthcare) + 5)
  .style("fill", "red")
  .text(() => data.abbr)
})


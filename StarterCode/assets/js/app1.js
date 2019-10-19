// @TODO: YOUR CODE HERE!
// var w = 940,
// h = 300,
// pad = 20,
// left_pad = 100,
// Data_url = '/data.json';

// var svg = d3.select("body")
//         .append("svg")
//         .attr("width", w)
//         .attr("height", h);
 


// var x = d3.scaleLinear().domain([0, 23]).range([left_pad, w-pad]),
//     y = d3.scaleLinear().domain([0, 6]).range([pad, h-pad*2]);
 
// var xAxis = d3.axisBottom(x)
//         .ticks(24),
       
//     yAxis = d3.axisLeft(y)
//         .ticks(7)
//         .tickFormat(function (d, i) {
//             return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d];
//         });
 
// svg.append("g")
//     .attr("class", "axis")
//     .attr("transform", "translate(0, "+(h-pad)+")")
//     .call(xAxis);
 
// svg.append("g")
//     .attr("class", "axis")
//     .attr("transform", "translate("+(left_pad-pad)+", 0)")
//     .call(yAxis);
 
// d3.csv('assets/data/data.csv', function (censusData) {
//     let { healthcare, poverty } = censusData;
	
//                         svg.append("circle")
//                           .attr("cx", healthcare)
//                             .attr("cy", poverty)
//                        .attr("r", 10)
//                        .style("fill", "purple")
//                        .transition()
//                         .duration(800)


// });
// //     // var max_r = d3.max(punchcard_data.map(
// //     //                    function (d) { return d[2]; })),
// //         // r = d3.scaleLinear()
// //         //     .domain([0, d3.max(punchcard_data, function (d) { return d[2]; })])
// //         //     .range([0, 12]);
// // console.log("Data", circles)
// // // .attr("cx", function (d) { console.log("CX", +censusData.healthcare); tx = x(+censusData.healthcare); console.log("TX", tx); return tx;})
// // // .attr("cy", function (d) { console.log("CY", +censusData.poverty); ty = y(+censusData.poverty); console.log("TY", ty); return ty; })
// // svg.selectAll("circle")
// // .data(circles)
// // .enter()
// // .append("circle")
// // .attr("cx", 20)
// // .attr("cy", 20)
// // .transition()
// // .duration(800)
// // .attr("r", "50")
// // .style("fill", "purple")





// <script>

// // set the dimensions and margins of the graph
// var margin = {top: 10, right: 30, bottom: 30, left: 60},
//     width = 460 - margin.left - margin.right,
//     height = 400 - margin.top - margin.bottom;

// // append the svg object to the body of the page
// var svg = d3.select("#my_dataviz")
//   .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform",
//           "translate(" + margin.left + "," + margin.top + ")");

var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom

var svg = d3.select("#scatter")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

d3.csv('assets/data/data.csv', function(data) {

  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 4000])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 500000])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Add dots
  svg.append('g')
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.healthcare); } )
      .attr("cy", function (d) { return y(d.poverty); } )
      .attr("r", 1.5)
      .style("fill", "#69b3a2")

})








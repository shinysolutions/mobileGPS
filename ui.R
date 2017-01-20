## Load libraries;
library(rCharts)

shinyUI(bootstrapPage(
  ## Include custom css and js;
  tagList(
    tags$head(
      tags$style("hr {margin: 5px 0;} body {margin: 15px;}"),
      tags$link(rel="stylesheet", type="text/css",href="style.css"),
      tags$script(type="text/javascript", src = "app.js")
    )
  ),
  
  # Database, Group, Subgroup and Year; 
  div(class = "Input",
      uiOutput("uiRecord")
  ),
  
  div(class = "output", showOutput("myMap", "leaflet"))
  
))

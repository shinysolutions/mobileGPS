shinyServer(function(input, output, session) {
  
  ## Source input and output;
  source("RScript/input.R",  local = TRUE)
  source("RScript/jsFun.R", local = TRUE)
  source("RScript/output.R", local = TRUE)
  
})

## Data selection button;
output$uiRecord <- renderUI({
  HTML(paste('<button style="width:130px; border-radius: 8px; background-color:green;" id="record" onclick="getLocation()">', 
             "Start recording...", '</button>', sep = ""))
})

output$uiStop <- renderUI({
  HTML(paste('<button style="cursor:pointer" id="stop" onclick="StopRec()">', 
             "Stop", '</button>', sep = ""))
})

output$uiRouter <- renderUI({
  
  #names(Items) <- HF$Virkelignavn
  selectInput(inputId = "router", 
              label   = "Routers", 
              choices = "", 
              multiple = TRUE)
})



output$uiHF <- renderUI({
  Items <- HF$Brukernavn
  #names(Items) <- HF$Virkelignavn
  selectInput(inputId = "HF", 
              label   = "Hospital", 
              choices = Items)
})
    

output$uiMapType <- renderUI({
  radioButtons(inputId = "mapType", 
               label   = "",
               c("Open street" = "openstreet", 
                 "Open cycle"  = "opencycle", 
                 "ESRI image"  = "statllite"))
})
   
output$uiHeatmap <- renderUI({
  checkboxInput(inputId = "heatmap",
                label   = "Heat map",
                value   = FALSE)
})

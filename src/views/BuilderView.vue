<template>
<main>
    
    <section id="yankee-config-section" class="yankee">
        <div class="section-header">

          options
          <div class="yankee-tool-buttons">
            <button class="yankee-tool-button" id="yankee-download-button" width="32px" height="32px">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--! Font Awesome Pro 6.2.0 by @- https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zM432 456c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"/>
            </svg>
          </button>
          </div>

        </div>
            <div class="notebook">
            <div class="header">
                <button  target="style">style</button>
                <button  target="config" class="active">config</button>
            </div>
            <div class="tabs">
            <div class="tab config active" >

            </div>
            <div class="tab style">

            </div>
            </div>

            </div>


    </section>
    <iframe  frameborder="0" height="100%"></iframe>
    <section id="ui-section" class="yankee">
    <div class="section-header">
           <span style="margin: auto ;">DOM</span> 
    </div>
    <div style="overflow: auto; width:100% ;height:100%;">
       <div id="ui-view"></div> 
    </div>
    
    </section>
</main>
</template>

<script setup lang="ts">
import main from "./builder.js"

document.querySelector("body").id="yankee-body"
</script>

module.exports = ({image, alt, content}) => `<tr>
<td valign="top" align="center">
  	<!-- CENTERING TABLE // -->
  	<table cellspacing="0" cellpadding="0" border="0" width="100%">
      	<tbody><tr>
          	<td valign="top" align="center">
              	<!-- FLEXIBLE CONTAINER // -->
              	<table class="flexibleContainer" cellspacing="0" cellpadding="0" border="0" width="600">
                  	<tbody><tr>
                      	<td class="flexibleContainerCell bottomShim" width="600" valign="top" align="center">
                          	<table class="nestedContainer" cellspacing="0" cellpadding="0" border="0" width="100%">
                              	<tbody><tr>
                                  	<td class="nestedContainerCell" valign="top">


                                          <!-- CONTENT TABLE // -->
                                          <table class="flexibleContainer" cellspacing="0" cellpadding="0" border="0" width="200" align="Right">
                                              <tbody><tr>
                                                  <td class="imageContent" valign="top" align="Left">
                                                      <img src="${image}" alt="${alt}" class="flexibleImage" style="max-width:200px;" width="200">
                                                  </td>
                                              </tr>
                                          </tbody></table>
                                          <!-- // CONTENT TABLE -->


                                          <!-- CONTENT TABLE // -->
                                          <table class="flexibleContainer" cellspacing="0" cellpadding="0" border="0" width="280" align="Left">
                                              <tbody><tr>
                                                  <td class="textContent" valign="top">
                                                      ${content}
                                                  </td>
                                              </tr>
                                          </tbody></table>
                                          <!-- // CONTENT TABLE -->


                                      </td>
                                  </tr>
                              </tbody></table>
                          </td>
                      </tr>
                  </tbody></table>
                  <!-- // FLEXIBLE CONTAINER -->
              </td>
          </tr>
      </tbody></table>
      <!-- // CENTERING TABLE -->
  </td>
</tr>`

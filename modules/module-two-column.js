module.exports = ({content1, content2}) => `
<!-- MODULE ROW // -->
<tr>
  	<td align="center" valign="top">
      	<!-- CENTERING TABLE // -->
      	<table border="0" cellpadding="0" cellspacing="0" width="100%">
          	<tr>
              	<td align="center" valign="top">
                  	<!-- FLEXIBLE CONTAINER // -->
                  	<table border="0" cellpadding="0" cellspacing="0" width="600" class="flexibleContainer">
                      	<tr>
                          	<td valign="top" width="600" class="flexibleContainerCell">


                                  <!-- CONTENT TABLE // -->
                                  <!--
                                  	In multi-column content blocks, the
                                      content tables are given set widths
                                      and the flexibleContainer class.
                                  -->
                                  <table align="Left" border="0" cellpadding="0" cellspacing="0" width="260" class="flexibleContainer">
                                      <tr>
                                          <td valign="top" class="textContent">
                                          ${content1}
                                          </td>
                                      </tr>
                                  </table>
                                  <!-- // CONTENT TABLE -->


                                  <!-- CONTENT TABLE // -->
                                  <table align="Right" border="0" cellpadding="0" cellspacing="0" width="260" class="flexibleContainer">
                                      <tr>
                                          <td valign="top" class="textContentLast">
                                          ${content2}
                                          </td>
                                      </tr>
                                  </table>
                                  <!-- // CONTENT TABLE -->


                              </td>
                          </tr>
                      </table>
                      <!-- // FLEXIBLE CONTAINER -->
                  </td>
              </tr>
          </table>
          <!-- // CENTERING TABLE -->
      </td>
  </tr>
  <!-- // MODULE ROW -->
`;

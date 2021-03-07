<?php
// URL TARGET
$url = 'http://sipp.dilmil-surabaya.go.id/list_jadwal_sidang/search/2/08/03/2021';
//end
// get / mengambil content berdasarkan url yang akan di curi datanya
$content = file_get_contents($url);
//
// STEP 1 mengambil syntax pembuka
$first_step = explode( "<table id="tablePerkaraAll">" , $content );
//
// STEP 2 mengambil syntax penutup
$second_step = explode("</table>" , $first_step[1] );
//
// Replace syntax </tbody> dengan </tbody></table>
$text1 = $second_step[0];
//Tampilkan 
echo $text1;
?>
</table>
$(document).ready(function () {
                 $('#reader').html5_qrcode(function (data) {
                    alert(data);
             },
                    function (error) {
                        console.log(error);
                   }, function (videoError) {
                        console.log(videoError);
                  }
               );
         });   
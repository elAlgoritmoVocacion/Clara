

var ClaraApp = angular.module('ClaraApp', []);
var URL_WATSON = 'http://localhost:6001/classify?text=';


ClaraApp.controller('claraController', function($scope,$http) {


        $scope.askClara = function(text){
            if (text.length <3 ) {
                $scope.resp ='';
                return;
            }
            var fullPath = URL_WATSON+text;

            $http.get(fullPath)
                .then(function(response) {

                    getRespuesta(response.data.top_class,response.data.classes[0].confidence,response.data.classes[1].class_name,function(err,res){
                        console.log(res);
                        $scope.resp = res;

                    });


                });

        }

        function getRespuesta(intend,confidence,intend2 , respCB){

            console.log('INTENTION-->'+intend);
            console.log('CONFIDENCE-->'+confidence*100+"%");
            console.log('2nd INTENTION-->'+intend2);
            switch(intend){
                case 'PreguntarSobreCUIL':
                {

                    respCB(null,"Vos me estas preguntando sobre el CUIL , Aca tenes toda la info sobre eso :)");
                    $(document).ready(function(){
                        $("#CUIL").fadeIn(1000);
                    });

                }
                    break;
                case 'ReclamarPagosHaberes':
                {

                    respCB(null,"Vos me estas preguntando sobre Haberes , Aca tenes toda la info sobre eso :)");
                    $(document).ready(function(){
                        $("#haberes").fadeIn(1000);
                    });

                }
                    break;
                case '':
                {

                    respCB(null,"");
                }
                    break;
                case '':
                {
                    respCB(null,"");

                }
                    break;
                case '':
                {

                    respCB(null,"");
                }
                    break;
                case '':
                {

                    respCB(null,"");
                }
                    break;
                case '':
                {

                    respCB(null,"");
                }
                    break;
                case '':
                {

                    respCB(null,"");
                }
                    break;
                case '':
                {

                    respCB(null,"");
                }
                    break;
                case '':
                {

                    respCB(null,"");
                }
                    break;
                case '':
                {

                    respCB(null,"");
                }
                    break;

                case '':
                {

                    respCB(null,"");
                }

                    break;
                case '':
                {

                    respCB(null,"");
                }
                    break;

                case '':
                {

                    respCB(null,"");
                }
                    break;

                default :{
                    respCB(null,"");
                }
                    break;

            }
        }



    }


);



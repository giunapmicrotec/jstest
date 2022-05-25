         if(1==1)
         {


               $(document).ready(function () {


                 

                   
                    $('#div-operazione-massiva').hide();


                   // $('#select-gruppi-merceologici-filtro').select2({
                   //  language: "it",
                   //  //minimumInputLength: 3,
                   //  //allowClear: true,
                   //  //placeholder: '',
                   //   maximumSelectionSize: 3
                   //});


                     $('#select-gruppi-merceologici-filtro').selectpicker();

                      $('#select-articoli-filtro').selectpicker();



                       $("#select-gruppi-merceologici-filtro").change(function (event) 
                       {
                                   
                          $('#select-articoli-filtro').find('option').remove();
  
                          $('#select-articoli-filtro').selectpicker('refresh');

                          var data = $("#select-gruppi-merceologici-filtro").val()
             
                          if(data!=null && data.length>0)
                          {
                                    var settingsListaArticoli = {
                            "url": "/api/Articoli/GetListaVistaArticoli/?ListaIdGruppiMerceologici=" + data,
                            "method": "GET",
                            "timeout": 0,
                            "async": false
                           };
                         
                          $.ajax(settingsListaArticoli).done(function (response) {
                  
                               for (var i = 0; i < response.length; i++) {
                                 
                                    $("#select-articoli-filtro").append($('<option>', {
                                       value: response[i]['codiceArticolo'],
                                       text: response[i]['titoloArticolo']
                                      }));
             
                               }

                                $('#select-articoli-filtro').prop('disabled', false);
                                $('#select-articoli-filtro').selectpicker('refresh');
                          
                             }).fail(function (response) {

                            alert("Attenzione: Errore nella ricerca articoli!");

                          });
                          
                    
                       }
                          else
                          {

                              $('#select-articoli-filtro').prop('disabled', true);
                              $('#select-articoli-filtro').selectpicker('refresh');



                           //    var settingsListaArticoli = {
                           // "url": "/api/Articoli/GetListaVistaArticoli/?ListaIdGruppiMerceologici=NessunGruppoMerceologicoSelezionato",
                           // "method": "GET",
                           // "timeout": 0,
                           // "async": true
                           //};
                          }


                      });

                       $("#table-anagrafica-articolo td:nth-child(" + 9 + ")").hide();
                        $("#table-anagrafica-articolo td:nth-child(" + 10 + ")").hide();
                        $("#table-anagrafica-articolo td:nth-child(" + 11 + ")").hide();
                        $("#table-anagrafica-articolo td:nth-child(" + 12 + ")").hide();
                        $("#table-anagrafica-articolo td:nth-child(" + 13 + ")").hide();
                        $("#table-anagrafica-articolo td:nth-child(" + 14 + ")").hide();
                        $("#table-anagrafica-articolo td:nth-child(" + 15 + ")").hide();
                        $("#table-anagrafica-articolo td:nth-child(" + 16 + ")").hide();
                        $("#table-anagrafica-articolo td:nth-child(" + 17 + ")").hide();
                        $("#table-anagrafica-articolo td:nth-child(" + 18 + ")").hide();
                        $("#table-anagrafica-articolo td:nth-child(" + 19 + ")").hide();
                        $("#table-anagrafica-articolo td:nth-child(" + 20 + ")").hide();
                        $("#table-anagrafica-articolo td:nth-child(" + 21 + ")").hide();
                        $("#table-anagrafica-articolo td:nth-child(" + 22 + ")").hide();
                        $("#table-anagrafica-articolo td:nth-child(" + 23 + ")").hide();
                        $("#table-anagrafica-articolo td:nth-child(" + 24 + ")").hide();
                        $("#table-anagrafica-articolo td:nth-child(" + 25 + ")").hide();
                        $("#table-anagrafica-articolo td:nth-child(" + 26 + ")").hide();
                        $("#table-anagrafica-articolo td:nth-child(" + 27 + ")").hide();
                        $("#table-anagrafica-articolo td:nth-child(" + 28 + ")").hide();
                        $("#table-anagrafica-articolo td:nth-child(" + 29 + ")").hide();
                        $("#table-anagrafica-articolo td:nth-child(" + 30 + ")").hide();
                        $("#table-anagrafica-articolo td:nth-child(" + 31 + ")").hide();

                        $("#table-listini-prezzi-articolo td:nth-child(" + 1 + ")").hide();
                        $("#table-listini-prezzi-articolo td:nth-child(" + 2 + ")").hide();
                        $("#table-listini-prezzi-articolo td:nth-child(" + 3 + ")").hide();
                        $("#table-listini-prezzi-articolo td:nth-child(" + 4 + ")").hide();
                        $("#table-listini-prezzi-articolo td:nth-child(" + 5 + ")").hide();
                        $("#table-listini-prezzi-articolo td:nth-child(" + 6 + ")").hide();
                        $("#table-listini-prezzi-articolo td:nth-child(" + 7 + ")").hide();
                        $("#table-listini-prezzi-articolo td:nth-child(" +8 + ")").hide();


                       
                        $("#table-listini-prezzi-articolo td:nth-child(" +30 + ")").hide();
                        $("#table-listini-prezzi-articolo td:nth-child(" +31 + ")").hide();
                        $("#table-listini-prezzi-articolo td:nth-child(" +32 + ")").hide();
                        $("#table-listini-prezzi-articolo td:nth-child(" +33 + ")").hide();
                        $("#table-listini-prezzi-articolo td:nth-child(" +34 + ")").hide();
                        $("#table-listini-prezzi-articolo td:nth-child(" +35 + ")").hide();
                        $("#table-listini-prezzi-articolo td:nth-child(" +36 + ")").hide();





                        $('#form-filtri-ricerca-listini-prezzi-articoli').bind('keypress', function (e) {

                           //Se digito il tasto invio nella form 'form-filtri-ricerca-listini-prezzi-articoli' inibisco il submit
                           if (e.keyCode == 13) {
                              return false;
                           }
                           else
                           {
                             return true;
                           }
                         });


                        $('#form-salva-listini-prezzi-articoli').bind('keypress', function (e) {

                           //Se digito il tasto invio nella form 'form-salva-listini-prezzi-articoli' inibisco il submit
                           if (e.keyCode == 13) {
                              return false;
                           }
                           else
                           {
                             return true;
                           }
                         });



                        var i = 0;
                        $('#table-listini-prezzi-articoli tbody tr').each(function () {



                           if($('#input-costo-trasporto-standard-articolo-'+i.toString()).length > 0)
                           {
                               $('#input-costo-trasporto-standard-articolo-'+i.toString()).inputFilter(function(value) {
                                return /^\d*[,]?\d*$/.test(value); });
                           }





                           if($('#input-prezzo-iniziale-ivato-'+i.toString()).length > 0)
                           {
                               $('#input-prezzo-iniziale-ivato-'+i.toString()).inputFilter(function(value) {
                                return /^\d*[,]?\d*$/.test(value); });
                           }

                            if($('#input-percentuale-ricarico-'+i.toString()).length > 0)
                           {
                               $('#input-percentuale-ricarico-'+i.toString()).inputFilter(function(value) {
                               return /^-?\d*[,]?\d*$/.test(value); });
                           }


                            if($('#input-valore-ricarico-'+i.toString()).length > 0)
                           {
                               $('#input-valore-ricarico-'+i.toString()).inputFilter(function(value) {
                                return /^-?\d*[,]?\d*$/.test(value); });
                           }

                            if($('#input-prezzo-trasporto-'+i.toString()).length > 0)
                           {
                               $('#input-prezzo-trasporto-'+i.toString()).inputFilter(function(value) {
                                return /^\d*[,]?\d*$/.test(value); });
                           }

                             if($('#input-percentuale-commissioni-'+i.toString()).length > 0)
                           {
                               $('#input-percentuale-commissioni-'+i.toString()).inputFilter(function(value) {
                              return /^-?\d*[,]?\d*$/.test(value); });
                           }

                              if($('#input-prezzo-listino-ivato-'+i.toString()).length > 0)
                           {
                               $('#input-prezzo-listino-ivato-'+i.toString()).inputFilter(function(value) {
                                return /^\d*[,]?\d*$/.test(value); });
                           }


                           if($('#input-quantita-minima-articolo-'+i.toString()).length > 0)
                           {
                               $('#input-quantita-minima-articolo-'+i.toString()).inputFilter(function(value) {
                                return /^\d*$/.test(value); });
                           }



                         i++;
                      });


                      AggiornaTabellaListiniPrezzi();

               });





                function ApriGestioneOperazioneMassiva() {


                   $('#button-apri-div-operazione-massiva').hide();
                   $('#div-operazione-massiva').show();
                }

                 function ChiudiGestioneOperazioneMassiva() {
                     $('#button-apri-div-operazione-massiva').show();
                   $('#div-operazione-massiva').hide();
                }



               function ApriModaleCalendarioPrezzi() {

                   $('#modale-calendario-prezzi').show();
              }



               function ChiudiModaleCalendarioPrezzi() {
                  $('#modale-calendario-prezzi').hide();
               }




                function MessaggioCercaListiniPrezziArticoli() {

                    //Solo se è selezionato almeno un gruppo merceologico
                    if($('#select-gruppi-merceologici-filtro :selected').length>0)
                    {
                         $("#button-filtri").css("background-color","yellow");
                         $("#button-filtri").html("Attendere: Ricerca listini prezzi articoli in corso...");
                         $("#button-filtri-loading").show();
                    }
                }


              function MessaggioSalvataggioListinoPrezzi() {

                 $("#button-salva-listino-prezzi").css("background-color","yellow");
                 $("#button-salva-listino-prezzi").html("Attendere: Salvataggio dati in corso...");
                 $("#button-salva-listino-prezzi-loading").show();
              }



           function CalcolaValoreRicaricoRiga(i) {

                var input_prezzo_iniziale_ivato = 0;
                var input_prezzo_iniziale_ivato_applicabile = 0;
                var input_percentuale_ricarico = 0;
                var input_percentuale_ricarico_applicabile = 0;
                var input_valore_ricarico = 0;
                var percentuale_ricarico = 0;
                var valore_ricarico = 0;


                //Prezzo iniziale ivato
                if($('#input-prezzo-iniziale-ivato-'+i.toString()).val()!='')
                {
                    input_prezzo_iniziale_ivato = $('#input-prezzo-iniziale-ivato-'+i.toString()).val().toString().replace(",",".");
                }

                if($('#input-prezzo-iniziale-ivato-applicabile-'+i.toString()).val()!='')
                {
                    input_prezzo_iniziale_ivato_applicabile = $('#input-prezzo-iniziale-ivato-applicabile-'+i.toString()).val().toString().replace(",",".");
                }

                //Percentuale ricarico
                if($('#input-percentuale-ricarico-'+i).val()!='')
                {
                    input_percentuale_ricarico = $('#input-percentuale-ricarico-'+i.toString()).val().toString().replace(",",".");;
                }

                if($('#input-percentuale-ricarico-applicabile-'+i.toString()).val()!='')
                {
                    input_percentuale_ricarico_applicabile = $('#input-percentuale-ricarico-applicabile-'+i.toString()).val().toString().replace(",",".");;
                }

                var prezzoInizialeIvato =  Number(input_prezzo_iniziale_ivato)*Number(input_prezzo_iniziale_ivato_applicabile);
                var percentualeRicarico =  Number(input_percentuale_ricarico)*Number(input_percentuale_ricarico_applicabile);


                //Calcolo valore ricarico
                valore_ricarico = Number(prezzoInizialeIvato*percentualeRicarico/100).toFixed(2);

                $('#input-valore-ricarico-'+i.toString()).val(valore_ricarico.toString().replace(".",","));
           }

           function CalcolaPercentualeRicaricoRiga(i) {


                var input_prezzo_iniziale_ivato = 0;
                var input_prezzo_iniziale_ivato_applicabile = 0;
                var input_percentuale_ricarico = 0;
                var input_percentuale_ricarico_applicabile = 0;
                var input_valore_ricarico = 0;
                var percentuale_ricarico = 0;
                var valore_ricarico = 0;

                //Prezzo iniziale ivato
                if($('#input-prezzo-iniziale-ivato-'+i.toString()).val()!='')
                {
                    input_prezzo_iniziale_ivato = $('#input-prezzo-iniziale-ivato-'+i.toString()).val().toString().replace(",",".");
                }

                 if($('#input-prezzo-iniziale-ivato-applicabile-'+i.toString()).val()!='')
                {
                    input_prezzo_iniziale_ivato_applicabile = $('#input-prezzo-iniziale-ivato-applicabile-'+i.toString()).val().toString().replace(",",".");
                }

                //Valore ricarico
                if($('#input-valore-ricarico-'+i).val()!='')
                {
                    input_valore_ricarico = $('#input-valore-ricarico-'+i.toString()).val().toString().replace(",",".");;
                }

                if($('#input-percentuale-ricarico-applicabile-'+i.toString()).val()!='')
                {
                    input_percentuale_ricarico_applicabile = $('#input-percentuale-ricarico-applicabile-'+i.toString()).val().toString().replace(",",".");;
                }


                //Calcolo percentuale ricarico
                if(
                    input_prezzo_iniziale_ivato>0
                    &&
                    input_prezzo_iniziale_ivato_applicabile==1
                    &&
                    input_percentuale_ricarico_applicabile == 1
                  )
                {


                    var prezzoInizialeIvato = Number(input_prezzo_iniziale_ivato)*Number(input_prezzo_iniziale_ivato_applicabile);
                    var valoreRicarico = Number(input_valore_ricarico);
                    var percentualeRicaricoApplicabile = Number(input_percentuale_ricarico_applicabile);

                    percentuale_ricarico = Number((valoreRicarico*100)/prezzoInizialeIvato).toFixed(2);
                }

                $('#input-percentuale-ricarico-'+i.toString()).val(percentuale_ricarico.toString().replace(".",","));
           }


             function UtilizzaBlocchiRiga(i) {


           

              var input_livello_ramo_canale_vendita=0;
              var input_prezzo_listino_ivato = 0;

               var input_prezzo_listino_ivato_calcolato_hidden = 0;

              var input_listino_01 = 0;
              var input_valore_ricarico = 0;
              var select_blocco="";

               //Livello ramo canale vendita
               if($('#input-livello-ramo-canale-vendita-'+i.toString()).val()!='')
              {
                  input_livello_ramo_canale_vendita = $('#input-livello-ramo-canale-vendita-'+i.toString()).val().toString().replace(",",".");
              }

               //Valore ricarico
              if($('#input-valore-ricarico-'+i.toString()).val()!='')
              {
                  input_valore_ricarico = $('#input-valore-ricarico-'+i.toString()).val().toString().replace(",",".");
              }

               //Listino01
              if($('#input-listino-01-'+i.toString()).val()!='')
              {
                  input_listino_01 = $('#input-listino-01-'+i.toString()).val().toString().replace(",",".");
              }




              //Prezzo listino ivato
               if($('#input-prezzo-listino-ivato-'+i.toString()).val()!='')
              {
                  input_prezzo_listino_ivato = $('#input-prezzo-listino-ivato-'+i.toString()).val().toString().replace(",",".");
              }


               //Prezzo listino ivato calcolato hidden
               if($('#input-prezzo-listino-ivato-calcolato-hidden-'+i.toString()).val()!='')
              {
                  input_prezzo_listino_ivato_calcolato_hidden = $('#input-prezzo-listino-ivato-calcolato-hidden-'+i.toString()).val().toString().replace(",",".");
              }



              //Blocco
              select_blocco = $('#select-blocco-'+i.toString()).val();

              if(select_blocco=="B")
              {
                   var message3 = '';

                     $('#label-prezzo-listino-ivato-message1-'+i.toString()).html("");

                     if(Number(input_valore_ricarico)<=0)
                     {

                       var message3 = "*Nessun guadagno. ";
                     }
                     else
                     {
                       $('#label-prezzo-listino-ivato-message3-'+i.toString()).html("");
                     }


                     message3+="*Prezzo canale intermedio bloccato e indipendente dal valore calcolato: "+input_prezzo_listino_ivato_calcolato_hidden.toString().replace(".",",");

                   //$('#input-prezzo-listino-ivato-'+i.toString()).val("0");
                   $('#label-prezzo-listino-ivato-message3-'+i.toString()).html(message3);
              }
              else
              {
                  $('#label-prezzo-listino-ivato-message3-'+i.toString()).html("");


                   $('#input-prezzo-listino-ivato-'+i.toString()).val(input_prezzo_listino_ivato_calcolato_hidden.toString().replace(".",","));

                  

                  

              if(
                   Number(input_livello_ramo_canale_vendita) == 1
                   &&
                   Number(input_prezzo_listino_ivato_calcolato_hidden)>Number(input_listino_01)
                   &&
                   (select_blocco=="" || select_blocco=="S")
                )
              {
                 

                  $('#input-prezzo-listino-ivato-'+i.toString()).val(input_listino_01.toString().replace(".",","));


                  if(select_blocco=="S")
                  {
                    $('#select-blocco-'+i.toString()).val("");
                    $('#label-prezzo-listino-ivato-message1-'+i.toString()).html(
                        "*Prezzo canale intermedio ["+
                        input_prezzo_listino_ivato.toString().replace(".",",")+
                        "] forzato al valore del listino01 ["+
                        input_listino_01.toString().replace(".",",")+
                        "] e blocco forzato da 'S' a ''"
                        );

                  }
                  else
                  {
                     $('#label-prezzo-listino-ivato-message1-'+i.toString()).html("*Prezzo canale intermedio ["+input_prezzo_listino_ivato_calcolato_hidden.toString().replace(".",",")+"] forzato al valore del listino01 ["+input_listino_01.toString().replace(".",",")+"]");
                  }
              
              }
              else
              {
                   $('#label-prezzo-listino-ivato-message1-'+i.toString()).html("");
              }


              if(Number(input_valore_ricarico)<=0)
              {

                  if(select_blocco=="S")
                  {
                      $('#select-blocco-'+i.toString()).val("");

                      CalcolaPrezzoListinoIvatoConValoriDaConfigurazioneRiga(i);

                       //$('#input-prezzo-listino-ivato-'+i.toString()).val("ricalcola");


                      $('#label-prezzo-listino-ivato-message3-'+i.toString()).html(
                          "*Prezzo canale intermedio ricalcolato usando i costi e le percentuali salvate in configurazione e blocco forzato da 'S' a ''"
                      );
                  }
                  else
                  {
                       $('#label-prezzo-listino-ivato-message3-'+i.toString()).html("*Nessun guadagno");
                  }

                   
              }
              else
              {
                   $('#label-prezzo-listino-ivato-message3-'+i.toString()).html("");
              }
 
            }

         }


          
           function ControllaCostoAMGPrezzoListinoIvatoRiga(i) {

              var input_costo_amg = 0;
              var input_prezzo_listino_ivato = 0;
             

              //Costo AMG
              if($('#input-costo-amg-'+i.toString()).val()!='')
              {
                  input_costo_amg = $('#input-costo-amg-'+i.toString()).val().toString().replace(",",".");
              }
             

               //Prezzo Listino Ivato
              if($('#input-prezzo-listino-ivato-'+i.toString()).val()!='')
              {
                  input_prezzo_listino_ivato = $('#input-prezzo-listino-ivato-'+i.toString()).val().toString().replace(",",".");
              }



              if(Number(input_costo_amg)>Number(input_prezzo_listino_ivato))
              {
                $('#input-prezzo-listino-ivato-'+i.toString()).css('background-color', 'red');
                $('#input-percentuale-ricarico-'+i.toString()).css('background-color', 'red');
                $('#input-valore-ricarico-'+i.toString()).css('background-color', 'red');

                $('#label-prezzo-listino-ivato-message2-'+i.toString()).html("*Prezzo canale intermedio ["+input_prezzo_listino_ivato.toString().replace(".",",")+"] minore del costo AMG ["+input_costo_amg.toString().replace(".",",")+"]");


              }
             else
             {
                 $('#input-prezzo-listino-ivato-'+i.toString()).css('background-color', 'white');
                 $('#input-percentuale-ricarico-'+i.toString()).css('background-color', 'white');
                 $('#input-valore-ricarico-'+i.toString()).css('background-color', 'white');

                 $('#label-prezzo-listino-ivato-message2-'+i.toString()).html("");
             }

           }


           function CalcolaPrezzoListinoIvatoRiga(i) {

               
                var input_prezzo_iniziale_ivato = 0;
                var input_prezzo_iniziale_ivato_applicabile = 0;
                var input_valore_ricarico = 0;
                var input_percentuale_ricarico = 0;
                var input_percentuale_ricarico_applicabile = 0;
                var input_prezzo_trasporto = 0;
                var input_prezzo_trasporto_applicabile = 0;
                var input_percentuale_commissioni = 0;
                var input_percentuale_commissioni_applicabile = 0;
                var percentuale_ricarico = 0;
                var valore_ricarico = 0;


                //Prezzo Iniziale Ivato
                if($('#input-prezzo-iniziale-ivato-'+i.toString()).val()!='')
                {
                    input_prezzo_iniziale_ivato = $('#input-prezzo-iniziale-ivato-'+i.toString()).val().toString().replace(",",".");
                }
                else
                {
                    $('#input-prezzo-iniziale-ivato-'+i.toString()).val(0);
                }


                if($('#input-prezzo-iniziale-ivato-applicabile-'+i.toString()).val()!='')
                {
                    input_prezzo_iniziale_ivato_applicabile = $('#input-prezzo-iniziale-ivato-applicabile-'+i.toString()).val().toString().replace(",",".");
                }


                //Percentuale ricarico
                if($('#input-percentuale-ricarico-'+i.toString()).val()!='')
                {
                    input_percentuale_ricarico = $('#input-percentuale-ricarico-'+i.toString()).val().toString().replace(",",".");;
                }

                if($('#input-percentuale-ricarico-applicabile-'+i.toString()).val()!='')
                {
                    input_percentuale_ricarico_applicabile = $('#input-percentuale-ricarico-applicabile-'+i.toString()).val().toString().replace(",",".");;
                }

                var prezzoInizialeIvato =  Number(input_prezzo_iniziale_ivato)*Number(input_prezzo_iniziale_ivato_applicabile);
                var percentualeRicarico =   Number(input_percentuale_ricarico)*Number(input_percentuale_ricarico_applicabile);



                //Valore ricarico
                 input_valore_ricarico = Number(Number(prezzoInizialeIvato)*Number(percentualeRicarico)/100).toFixed(2);

                 $('#input-valore-ricarico-'+i.toString()).val(input_valore_ricarico.toString().replace(".",","));



                //Prezzo trasporto
                if($('#input-prezzo-trasporto-'+i.toString()).val()!='')
                {
                    input_prezzo_trasporto = $('#input-prezzo-trasporto-'+i.toString()).val().toString().replace(",",".");;
                }
                else
                {
                    $('#input-prezzo-trasporto-'+i.toString()).val(0);
                }


                if($('#input-prezzo-trasporto-applicabile-'+i.toString()).val()!='')
                {
                    input_prezzo_trasporto_applicabile = $('#input-prezzo-trasporto-applicabile-'+i.toString()).val().toString().replace(",",".");
                }


                //Percentuale commissioni
                if($('#input-percentuale-commissioni-'+i.toString()).val()!='')
                {
                    input_percentuale_commissioni = $('#input-percentuale-commissioni-'+i.toString()).val().toString().replace(",",".");;
                }
                else
                {
                    $('#input-percentuale-commissioni-'+i.toString()).val(0);
                }


                if($('#input-percentuale-commissioni-applicabile-'+i.toString()).val()!='')
                {
                    input_percentuale_commissioni_applicabile = $('#input-percentuale-commissioni-applicabile-'+i.toString()).val().toString().replace(",",".");
                }

               var valoreRicarico = Number(input_valore_ricarico)*Number(input_percentuale_ricarico_applicabile);

              var prezzoTrasporto = Number(input_prezzo_trasporto)*Number(input_prezzo_trasporto_applicabile);

              var percentualeCommissioni =  Number(input_percentuale_commissioni)*Number(input_percentuale_commissioni_applicabile);
             
              
              var  prezzo_listino_ivato =  Number(
                  
                  (Number(prezzoInizialeIvato) + Number(valoreRicarico) + Number(prezzoTrasporto))/Number(1- Number(percentualeCommissioni/100))
                 
              ).toFixed(2);


                //Valore Commissioni
              var valoreCommissioni = Number(Number(prezzo_listino_ivato)*Number(percentualeCommissioni)/100).toFixed(2);
               
               $('#input-valore-commissioni-'+i.toString()).val(valoreCommissioni.toString().replace(".",","));



                //$('#input-prezzo-listino-ivato-'+i.toString()).val(prezzo_listino_ivato.toString().replace(".",","));

                $('#input-prezzo-listino-ivato-calcolato-hidden-'+i.toString()).val(prezzo_listino_ivato.toString().replace(".",","));

              
               UtilizzaBlocchiRiga(i);

               ControllaCostoAMGPrezzoListinoIvatoRiga(i);

           }


            function CalcolaPrezzoListinoIvatoConValoriDaConfigurazioneRiga(i) {


              var input_prezzo_iniziale_ivato = 0;
              var input_prezzo_iniziale_ivato_applicabile = 0;
              var input_valore_ricarico = 0;
              var input_percentuale_ricarico = 0;
              var input_percentuale_ricarico_applicabile = 0;
              var input_prezzo_trasporto = 0;
              var input_prezzo_trasporto_applicabile = 0;
              var input_percentuale_commissioni = 0;
              var input_percentuale_commissioni_applicabile = 0;
              var percentuale_ricarico = 0;
              var valore_ricarico = 0;





              //Prezzo Iniziale Ivato
              if($('#input-prezzo-iniziale-ivato-'+i.toString()).val()!='')
              {
                  input_prezzo_iniziale_ivato = $('#input-prezzo-iniziale-ivato-'+i.toString()).val().toString().replace(",",".");
              }
              else
              {
                  $('#input-prezzo-iniziale-ivato-'+i.toString()).val(0);
              }


              if($('#input-prezzo-iniziale-ivato-applicabile-'+i.toString()).val()!='')
              {
                  input_prezzo_iniziale_ivato_applicabile = $('#input-prezzo-iniziale-ivato-applicabile-'+i.toString()).val().toString().replace(",",".");
              }


              //Percentuale ricarico
              if($('#input-percentuale-ricarico-salvata-in-configurazione-'+i.toString()).val()!='')
              {
                  input_percentuale_ricarico = $('#input-percentuale-ricarico-salvata-in-configurazione-'+i.toString()).val().toString().replace(",",".");;
              }


              if($('#input-percentuale-ricarico-applicabile-'+i.toString()).val()!='')
              {
                  input_percentuale_ricarico_applicabile = $('#input-percentuale-ricarico-applicabile-'+i.toString()).val().toString().replace(",",".");;
              }


              var prezzoInizialeIvato =  Number(input_prezzo_iniziale_ivato)*Number(input_prezzo_iniziale_ivato_applicabile);

              var percentualeRicarico =   Number(input_percentuale_ricarico)*Number(input_percentuale_ricarico_applicabile);


              $('#input-percentuale-ricarico-'+i.toString()).val(percentualeRicarico.toString().replace(".",","));



               //Valore ricarico
              input_valore_ricarico = Number(Number(prezzoInizialeIvato)*Number(percentualeRicarico)/100).toFixed(2);

              $('#input-valore-ricarico-'+i.toString()).val(input_valore_ricarico.toString().replace(".",","));

              var valoreRicarico = Number(input_valore_ricarico)*Number(input_percentuale_ricarico_applicabile);

              //Prezzo trasporto
              if($('#input-prezzo-trasporto-salvato-in-configurazione-'+i.toString()).val()!='')
              {
                  input_prezzo_trasporto = $('#input-prezzo-trasporto-salvato-in-configurazione-'+i.toString()).val().toString().replace(",",".");;
              }
              else
              {
                  $('#input-prezzo-trasporto-'+i.toString()).val(0);
              }


              if($('#input-prezzo-trasporto-applicabile-'+i.toString()).val()!='')
              {
                  input_prezzo_trasporto_applicabile = $('#input-prezzo-trasporto-applicabile-'+i.toString()).val().toString().replace(",",".");
              }

              var prezzoTrasporto = Number(input_prezzo_trasporto)*Number(input_prezzo_trasporto_applicabile);

              $('#input-prezzo-trasporto-'+i.toString()).val(prezzoTrasporto.toString().replace(".",","));




              //Percentuale commissioni
              if($('#input-percentuale-commissioni-salvata-in-configurazione-'+i.toString()).val()!='')
              {
                  input_percentuale_commissioni = $('#input-percentuale-commissioni-salvata-in-configurazione-'+i.toString()).val().toString().replace(",",".");;
              }
              else
              {
                  $('#input-percentuale-commissioni-'+i.toString()).val(0);
              }


              if($('#input-percentuale-commissioni-applicabile-'+i.toString()).val()!='')
              {
                  input_percentuale_commissioni_applicabile = $('#input-percentuale-commissioni-applicabile-'+i.toString()).val().toString().replace(",",".");
              }

              var percentualeCommissioni =  Number(input_percentuale_commissioni)*Number(input_percentuale_commissioni_applicabile);

              $('#input-percentuale-commissioni-'+i.toString()).val(percentualeCommissioni.toString().replace(".",","));




              var  prezzo_listino_ivato =  Number(

                  (Number(prezzoInizialeIvato) + Number(valoreRicarico) + Number(prezzoTrasporto))/Number(1- Number(percentualeCommissioni/100))

              ).toFixed(2);


              //Valore Commissioni
              var valoreCommissioni = Number(Number(prezzo_listino_ivato)*Number(percentualeCommissioni)/100).toFixed(2);

              $('#input-valore-commissioni-'+i.toString()).val(valoreCommissioni.toString().replace(".",","));



              //$('#input-prezzo-listino-ivato-'+i.toString()).val(prezzo_listino_ivato.toString().replace(".",","));

               $('#input-prezzo-listino-ivato-calcolato-hidden-'+i.toString()).val(prezzo_listino_ivato.toString().replace(".",","));

              

              UtilizzaBlocchiRiga(i);

              ControllaCostoAMGPrezzoListinoIvatoRiga(i);

         }



             function CalcolaPercentualeRicaricoValoreRicaricoValoreCommissioniRiga(i) {

              var input_costo_amg = 0;
              var input_prezzo_iniziale_ivato = 0;
              var input_prezzo_iniziale_ivato_applicabile = 0;
              var input_percentuale_ricarico = 0;
              var input_percentuale_ricarico_applicabile = 0;
              var input_prezzo_trasporto = 0;
              var input_prezzo_trasporto_applicabile = 0;
              var input_percentuale_commissioni = 0;
              var input_percentuale_commissioni_applicabile = 0;
              var percentuale_ricarico = 0;
              var valore_ricarico = 0;
              var input_prezzo_listino_ivato = 0;



               //Costo AMG
              if($('#input-costo-amg-'+i.toString()).val()!='')
              {
                  input_costo_amg = $('#input-costo-amg-'+i.toString()).val().toString().replace(",",".");
              }



              //Prezzo Iniziale ivato
              if($('#input-prezzo-iniziale-ivato-'+i).val()!='')
              {
                  input_prezzo_iniziale_ivato = $('#input-prezzo-iniziale-ivato-'+i).val().toString().replace(",",".");
              }
              else
              {
                  $('#input-prezzo-iniziale-ivato-'+i).val(0);
              }


              if($('#input-prezzo-iniziale-ivato-applicabile-'+i).val()!='')
              {
                  input_prezzo_iniziale_ivato_applicabile = $('#input-prezzo-iniziale-ivato-applicabile-'+i).val().toString().replace(",",".");
              }


              //Percentuale Ricarico
              if($('#input-percentuale-ricarico-'+i).val()!='')
              {
                  input_percentuale_ricarico = $('#input-percentuale-ricarico-'+i).val().toString().replace(",",".");
              }
              else
              {
                  $('#input-valore-ricarico-'+i).val(0);
              }

              if($('#input-percentuale-ricarico-applicabile-'+i).val()!='')
              {
                  input_percentuale_ricarico_applicabile = $('#input-percentuale-ricarico-applicabile-'+i).val().toString().replace(",",".");
              }



              //Prezzo Trasporto
              if($('#input-prezzo-trasporto-'+i).val()!='')
              {
                  input_prezzo_trasporto = $('#input-prezzo-trasporto-'+i).val().toString().replace(",",".");;
              }
              else
              {
                  $('#input-prezzo-trasporto-'+i).val(0);
              }


              if($('#input-prezzo-trasporto-applicabile-'+i).val()!='')
              {
                  input_prezzo_trasporto_applicabile = $('#input-prezzo-trasporto-applicabile-'+i).val().toString().replace(",",".");
              }


              //Percentuale Commissioni
              if($('#input-percentuale-commissioni-'+i).val()!='')
              {
                  input_percentuale_commissioni = $('#input-percentuale-commissioni-'+i).val().toString().replace(",",".");
              }
              else
              {
                  $('#input-percentuale-commissioni-'+i).val(0);
              }


              if($('#input-percentuale-commissioni-applicabile-'+i).val()!='')
              {
                  input_percentuale_commissioni_applicabile = $('#input-percentuale-commissioni-applicabile-'+i).val().toString().replace(",",".");
              }




              //Prezzo Listino Ivato
              if($('#input-prezzo-listino-ivato-'+i).val()!='')
              {
                   input_prezzo_listino_ivato = $('#input-prezzo-listino-ivato-'+i).val().toString().replace(",",".");
              }
              else
              {
                  $('#input-prezzo-listino-ivato-'+i).val(0);
              }

              $('#input-prezzo-listino-ivato-calcolato-hidden-'+i.toString()).val(input_prezzo_listino_ivato.toString().replace(".",","));

              //Calcolo della percentuale di ricarico e valore ricarico
              if(
                  input_prezzo_iniziale_ivato_applicabile == 1
                  &&
                  input_prezzo_iniziale_ivato!=0
                 )
              {

                  var prezzoListinoIvato = Number(input_prezzo_listino_ivato);
                  var prezzoInizialeIvato = Number(input_prezzo_iniziale_ivato)*Number(input_prezzo_iniziale_ivato_applicabile);
                  var prezzoTrasporto = Number(input_prezzo_trasporto)*Number(input_prezzo_trasporto_applicabile);
                  var valorePercentualeCommissioni =  Number(Number(input_prezzo_listino_ivato)*Number(input_percentuale_commissioni)*Number(input_percentuale_commissioni_applicabile)/100);


                  percentuale_ricarico = Number(((prezzoListinoIvato-prezzoInizialeIvato-prezzoTrasporto-valorePercentualeCommissioni)/prezzoInizialeIvato)*100).toFixed(2);;


                   valore_ricarico = Number(prezzoInizialeIvato*percentuale_ricarico/100).toFixed(2);;

                   $('#input-percentuale-ricarico-'+i).val(percentuale_ricarico.toString().replace(".",","));


                   $('#input-valore-ricarico-'+i).val(valore_ricarico.toString().replace(".",","));

               }


               //Calcolo del valore delle commissioni

               var valoreCommissioni = Number(Number(input_prezzo_listino_ivato)*Number(input_percentuale_commissioni)*Number(input_percentuale_commissioni_applicabile)/100).toFixed(2);

               $('#input-valore-commissioni-'+i.toString()).val(valoreCommissioni.toString().replace(".",","));




                if(Number(input_costo_amg)>Number(input_prezzo_listino_ivato))
              {
                $('#input-prezzo-listino-ivato-'+i.toString()).css('background-color', 'red');
                $('#input-percentuale-ricarico-'+i.toString()).css('background-color', 'red');
                $('#input-valore-ricarico-'+i.toString()).css('background-color', 'red');

                $('#label-prezzo-listino-ivato-message2-'+i.toString()).html("*Prezzo canale intermedio ["+input_prezzo_listino_ivato.toString().replace(".",",")+"] minore del costo AMG: "+input_costo_amg.toString().replace(".",","));



              }
             else
             {
                 $('#input-prezzo-listino-ivato-'+i.toString()).css('background-color', 'white');
                 $('#input-percentuale-ricarico-'+i.toString()).css('background-color', 'white');
                 $('#input-valore-ricarico-'+i.toString()).css('background-color', 'white');
                 $('#label-prezzo-listino-ivato-message2-'+i.toString()).html("");
             }
         }



           function AggiornaPrezzoInizialeIvatoRamiCanaliVenditaSuccessivi(i) {


                var prezzoListinoIvato = $('#input-prezzo-listino-ivato-'+i.toString()).val();


                var codiceArticolo = $('#input-codice-articolo-'+i.toString()).val();
                var idCanaleVendita = $('#input-id-canale-vendita-'+i.toString()).val();
                var livelloRamoCanaleVendita = $('#input-livello-ramo-canale-vendita-'+i.toString()).val();

                var numeroRighe = $('#input-numero-righe-tabella-listini-prezzi-articoli').val();



                  var stop = false;

                  for(var j= i+1;j<numeroRighe && !stop;j++)
                  {

                      var codiceArticolo_j = $('#input-codice-articolo-'+j.toString()).val();

                       if(
                           $('#input-codice-articolo-'+j.toString()).val() != codiceArticolo
                         )
                      {
                          stop = true;
                      }
                      else
                      {
                           var idCanaleVendita_j = $('#input-id-canale-vendita-'+j.toString()).val();
                           var livelloRamoCanaleVendita_j = $('#input-livello-ramo-canale-vendita-'+j.toString()).val();

                           var livelloRamoCanaleVenditaSuccessivo = Number(livelloRamoCanaleVendita)+1;


                      if(
                           $('#input-id-canale-vendita-'+j.toString()).val() == idCanaleVendita
                           &&
                           $('#input-livello-ramo-canale-vendita-'+j.toString()).val() == livelloRamoCanaleVenditaSuccessivo
                         )
                      {
                          $('#input-prezzo-iniziale-ivato-'+j.toString()).val(prezzoListinoIvato);



                         CalcolaPrezzoListinoIvatoRiga(j);

                         ApplicaScraperPrezzoListinoIvatoFinaleRiga(j);




                       }
                     }
                  }
           }


           function PrezzoInizialeIvatoChange(i) {
       
                 CalcolaValoreRicaricoRiga(i);
                 
                 CalcolaPrezzoListinoIvatoRiga(i);
                
            
                ApplicaScraperPrezzoListinoIvatoFinaleRiga(i);
                
                AggiornaPrezzoInizialeIvatoRamiCanaliVenditaSuccessivi(i);
           }



           function PercentualeRicaricoChange(i) {

                CalcolaValoreRicaricoRiga(i);
              
              CalcolaValoreRicaricoRiga(i);   
               
              CalcolaPrezzoListinoIvatoRiga(i);
              
              ApplicaScraperPrezzoListinoIvatoFinaleRiga(i);
                
              AggiornaPrezzoInizialeIvatoRamiCanaliVenditaSuccessivi(i);
           }


           function ValoreRicaricoChange(i) {


                CalcolaPercentualeRicaricoRiga(i);
              
              CalcolaPrezzoListinoIvatoRiga(i);
               
              
              ApplicaScraperPrezzoListinoIvatoFinaleRiga(i);
                
              AggiornaPrezzoInizialeIvatoRamiCanaliVenditaSuccessivi(i);
           }

           function PrezzoTrasportoChangeRiga(i) {

                CalcolaPrezzoListinoIvatoRiga(i);
               
              
              ApplicaScraperPrezzoListinoIvatoFinaleRiga(i);
                
              AggiornaPrezzoInizialeIvatoRamiCanaliVenditaSuccessivi(i);
           }

           function PercentualeCommissioniChange(i) {

                CalcolaPrezzoListinoIvatoRiga(i);

             
              ApplicaScraperPrezzoListinoIvatoFinaleRiga(i);
                
              AggiornaPrezzoInizialeIvatoRamiCanaliVenditaSuccessivi(i);
           }


           function PrezzoListinoIvatoChange(i) {


                CalcolaPercentualeRicaricoValoreRicaricoValoreCommissioniRiga(i);

                UtilizzaBlocchiRiga(i);

           
                ApplicaScraperPrezzoListinoIvatoFinaleRiga(i);

                AggiornaPrezzoInizialeIvatoRamiCanaliVenditaSuccessivi(i);

           }


            function CostoTrasportoStandardArticoloRigaChange(i) {



                var input_costo_trasporto_standard_articolo = 0;

                if($('#input-costo-trasporto-standard-articolo-'+i.toString()).val()!='')
                {
                    input_costo_trasporto_standard_articolo = $('#input-costo-trasporto-standard-articolo-'+i.toString()).val();
                }


                var codiceArticolo = $('#input-codice-articolo-'+i.toString()).val();


                var idCanaleVendita = $('#input-id-canale-vendita-'+i.toString()).val();


                var numeroRighe = $('#input-numero-righe-tabella-listini-prezzi-articoli').val();



                  var stop = false;

                  for(var j= i+1;j<numeroRighe && !stop;j++)
                  {

                      var codiceArticolo_j = $('#input-codice-articolo-'+j.toString()).val();

                       if(
                           $('#input-codice-articolo-'+j.toString()).val() != codiceArticolo
                         )
                      {
                          stop = true;
                      }
                      else
                      {

                          $('#input-prezzo-trasporto-'+j.toString()).val(input_costo_trasporto_standard_articolo);

                          CalcolaPrezzoListinoIvatoRiga(j);
                          AggiornaPrezzoInizialeIvatoRamiCanaliVenditaSuccessivi(j);

                     }
                  }
           }




            function AggiornaDisponibilitaArticoloRamoCanaleVenditaRiga(i) {

                var input_disponibilita_articolo = 0;

                if($('#input-disponibilita-articolo-'+i.toString()).val()!='')
                {
                    input_disponibilita_articolo = $('#input-disponibilita-articolo-'+i.toString()).val();
                }


                var input_quantita_minima_articolo = 0;


                if($('#input-quantita-minima-articolo-'+i.toString()).val()!='')
                {
                    input_quantita_minima_articolo = $('#input-quantita-minima-articolo-'+i.toString()).val();
                }



                var diponibilita_per_canale = Number(input_disponibilita_articolo) - Number(input_quantita_minima_articolo);


                 $('#input-disponibilita-articolo-per-ramo-canale-vendita-'+i.toString()).val(diponibilita_per_canale);
           }


            function CalcolaDisponibilitaArticoloRamoCanaleVenditaRiga(i) {


                AggiornaDisponibilitaArticoloRamoCanaleVenditaRiga(i);


                var codiceArticolo = $('#input-codice-articolo-'+i.toString()).val();


                var idCanaleVendita = $('#input-id-canale-vendita-'+i.toString()).val();


                var livelloRamoCanaleVendita = $('#input-livello-ramo-canale-vendita-'+i.toString()).val();


                  var numeroRighe = $('#input-numero-righe-tabella-listini-prezzi-articoli').val();


                  var stop = false;

                  for(var j= i+1;j<numeroRighe && !stop;j++)
                  {

                      var codiceArticolo_j = $('#input-codice-articolo-'+j.toString()).val();



                       if(
                           $('#input-codice-articolo-'+j.toString()).val() != codiceArticolo
                         )
                      {
                          stop = true;
                      }
                      else
                      {
                           var idCanaleVendita_j = $('#input-id-canale-vendita-'+j.toString()).val();
                           var livelloRamoCanaleVendita_j = $('#input-livello-ramo-canale-vendita-'+j.toString()).val();

                           var livelloRamoCanaleVenditaSuccessivo = Number(livelloRamoCanaleVendita)+1;


                      if(
                           $('#input-id-canale-vendita-'+j.toString()).val() == idCanaleVendita
                           &&
                           $('#input-livello-ramo-canale-vendita-'+j.toString()).val() == livelloRamoCanaleVenditaSuccessivo
                         )
                      {
                          $('#input-quantita-minima-articolo-'+j.toString()).val($('#input-quantita-minima-articolo-'+i.toString()).val());

                          AggiornaDisponibilitaArticoloRamoCanaleVenditaRiga(j);

                       }
                     }
                  }
           }

            function SelectBloccoChange(i)
            {

                 CalcolaPrezzoListinoIvatoRiga(i);

              ApplicaScraperPrezzoListinoIvatoFinaleRiga(i);

              AggiornaPrezzoInizialeIvatoRamiCanaliVenditaSuccessivi(i);

            }



                  function ApplicaScraperPrezzoListinoIvatoFinaleRiga(i) {


                      var input_prezzo_listino_ivato = $('#input-prezzo-listino-ivato-'+i.toString()).val();

                      var input_prezzo_listino_ivato_finale = $('#input-prezzo-listino-ivato-finale-'+i.toString()).val();

                      var input_prezzo_proposto_da_scraper = $('#input-prezzo-proposto-da-scraper-'+i.toString()).val();

                      var input_gestione_scraper_applicabile = $('#input-gestione-scraper-applicabile-'+i.toString()).val();


                        if(input_gestione_scraper_applicabile==0)
                        {

                             $('#input-prezzo-listino-ivato-finale-'+i).val(input_prezzo_listino_ivato);
                        }
                        else
                        {

                              if($('#select-escludi-scraper-'+i).val()==1)
                              {

                                $('#input-prezzo-listino-ivato-finale-'+i).val(input_prezzo_listino_ivato);
                              }
                             else
                              {

                              $('#input-prezzo-listino-ivato-finale-'+i).val(input_prezzo_proposto_da_scraper);
                             }
                        }


                  }




            function ChiudiListinoPrezziArticolo(i) {



                $('#button-chiudi-listino-prezzi-articolo-'+i.toString()).hide();
                $('#button-apri-listino-prezzi-articolo-'+i.toString()).show();

               var codiceArticolo = $('#input-codice-articolo-'+i.toString()).val();



                $('#table-listini-prezzi-articolo > tbody  > tr').each(function(index, tr)
                {


                   var row_index = $(tr).find("td input[id^='input_row_index']").val();

                     var input_codice_articolo = "input-codice-articolo-"+(row_index).toString();


                    var codiceArticolo_row_index = $(tr).find("td input[id^='"+input_codice_articolo+"']").val();

                    if(codiceArticolo_row_index == codiceArticolo)
                    {

                         $(tr).hide();
                     }


                });


           }


            function ApriListinoPrezziArticolo(i) {


                $('#button-chiudi-listino-prezzi-articolo-'+i.toString()).show();
                $('#button-apri-listino-prezzi-articolo-'+i.toString()).hide();

               var codiceArticolo = $('#input-codice-articolo-'+i.toString()).val();


                $('#table-listini-prezzi-articolo > tbody  > tr').each(function(index, tr)
                {

                    var row_index = $(tr).find("td input[id^='input_row_index']").val();

                     var input_codice_articolo = "input-codice-articolo-"+(row_index).toString();


                    var codiceArticolo_row_index = $(tr).find("td input[id^='"+input_codice_articolo+"']").val();


                    if(codiceArticolo_row_index == codiceArticolo)
                    {

                         $(tr).show();
                     }


                });


           }


           function AggiornaTabellaListiniPrezzi() {


             

              var numeroRighe = $('#input-numero-righe-tabella-listini-prezzi-articoli').val();



                for(var j= 0;j<numeroRighe;j++)
                {

                    var codiceArticolo = $('#input-codice-articolo-'+j.toString()).val();

                    var idCanaleVendita = $('#input-id-canale-vendita-'+j.toString()).val();

                    var livelloRamoCanaleVendita = $('#input-livello-ramo-canale-vendita-'+j.toString()).val();





                     if(Number(livelloRamoCanaleVendita) == 1)
                    
                    {
                          CalcolaPrezzoListinoIvatoRiga(j);
                   
                         ApplicaScraperPrezzoListinoIvatoFinaleRiga(j);

                         AggiornaPrezzoInizialeIvatoRamiCanaliVenditaSuccessivi(j);

                    
                   }
                }
         }


      }

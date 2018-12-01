console.log('js connected');







var player = "x";

var grid = document.querySelectorAll('.grid');
//alert(grid);

grid.forEach(function (g) {


    g.addEventListener('click', function () {
    //alert(" hi we have click event ", this.id);



        if (player == "x" && g.innerHTML == "") {


            player = "o"

            g.innerHTML = "x"

           alert("player1")

            XwinCases()

        } else if (player == "o" && g.innerHTML == "") {
         // check if the player cant alter the same grid to change the value




            //alert("player 2 ", player)
            player = "x";

            //alert("g", g)

            g.innerHTML = "o"
           alert('player2')
            OwinCases()




        }

        else {

           alert('it is a draw')
        }


    });

    //-------------------------------------------------------------------------//



    function XwinCases() {

        //alert( document.querySelector('#grid1').innerHTML ,document.querySelector('#grid2').innerHTML,document.querySelector('#grid3').innerHTML)
        if ((document.querySelector('#grid1').innerHTML == "x") && (document.querySelector('#grid2').innerHTML == "x") && (document.querySelector('#grid3').innerHTML == "x")) {
            alert('Congratulations x wins')
            return true;
        }
        else if ((document.querySelector('#grid4').innerHTML == "x") && (document.querySelector('#grid5').innerHTML == "x") && (document.querySelector('#grid6').innerHTML == "x")) {
           alert('Congratulations x wins')
            return true;
        }

        else if ((document.querySelector('#grid7').innerHTML == "x") && (document.querySelector('#grid8').innerHTML == "x") && (document.querySelector('#grid9').innerHTML == "x")) {
           alert('Congratulations x wins')
            return true;
        }

        else if ((document.querySelector('#grid1').innerHTML == "x") && (document.querySelector('#grid4').innerHTML == "x") && (document.querySelector('#grid7').innerHTML == "x")) {
           alert('Congratulations x wins')
            return true;
        }

        else if ((document.querySelector('#grid2').innerHTML == "x") && (document.querySelector('#grid5').innerHTML == "x") && (document.querySelector('#grid8').innerHTML == "x")) {
           alert('Congratulations x wins')
            return true;
        }

        else if ((document.querySelector('#grid3').innerHTML == "x") && (document.querySelector('#grid6').innerHTML == "x") && (document.querySelector('#grid9').innerHTML == "x")) {
           alert('Congratulations x wins')
            return true;
        }

        else if ((document.querySelector('#grid1').innerHTML == "x") && (document.querySelector('#grid5').innerHTML == "x") && (document.querySelector('#grid9').innerHTML == "x")) {
           alert('Congratulations x wins')
            return true;
        }

        else if ((document.querySelector('#grid3').innerHTML == "x") && (document.querySelector('#grid5').innerHTML == "x") && (document.querySelector('#grid7').innerHTML == "x")) {
           alert('Congratulations x wins')
            return true;
        }
        else {
            
            return false
        }
    }
    // my problem was calling back the functions

    function OwinCases() {
        if ((document.querySelector('#grid1').innerHTML == "o") && (document.querySelector('#grid2').innerHTML == "o") && (document.querySelector('#grid3').innerHTML == "o")) {
           alert('Congratulations o wins')
            return true;
        }

        else if ((document.querySelector('#grid4').innerHTML == "o") && (document.querySelector('#grid5').innerHTML == "o") && (document.querySelector('#grid6').innerHTML == "o")) {
           alert('Congratulations o wins')
            return true;
        }

        else if ((document.querySelector('#grid7').innerHTML == "o") && (document.querySelector('#grid8').innerHTML == "o") && (document.querySelector('#grid9').innerHTML == "o")) {
           alert('Congratulations o wins')
            return true;
        }

        else if ((document.querySelector('#grid1').innerHTML == "o") && (document.querySelector('#grid4').innerHTML == "o") && (document.querySelector('#grid7').innerHTML == "o")) {
           alert('Congratulations o wins')
            return true;
        }

        else if ((document.querySelector('#grid2').innerHTML == "o") && (document.querySelector('#grid5').innerHTML == "o") && (document.querySelector('#grid8').innerHTML == "o")) {
           alert('Congratulations o wins')
            return true;
        }

        else if ((document.querySelector('#grid3').innerHTML == "o") && (document.querySelector('#grid6').innerHTML == "o") && (document.querySelector('#grid9').innerHTML == "o")) {
           alert('Congratulations o wins')
            return true;
        }

        else if ((document.querySelector('#grid1').innerHTML == "o") && (document.querySelector('#grid5').innerHTML == "o") && (document.querySelector('#grid9').innerHTML == "o")) {
           alert('Congratulations o wins')
            return true;
        }

        else if ((document.querySelector('#grid3').innerHTML == "o") && (document.querySelector('#grid5').innerHTML == "o") && (document.querySelector('#grid7').innerHTML == "o")) {
           alert('Congratulations o wins')
            return true;
        }
        else {
            return false



        }
    }

})



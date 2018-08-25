//Wait until the document is fully loaded before processing the main method
$(document).ready(main);

function main(){
    $('btn-collapse').click(function (e){
        //Prevent default behaviour for the button, so that it can be handled by JQuery code
        e.preventDefault()
        var $this = $(this);
        //Find the closest collapse class within the collapse group
        var $collapse = $this.closest('.collapse-group').find('.collapse');
        //Toggle between showing the text and not showing it
        $collapse.collapse('toggle');
    });
}
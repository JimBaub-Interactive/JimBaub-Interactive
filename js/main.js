document.addEventListener('DOMContentLoaded',function(){
    //Initialise everything
    M.AutoInit();
    //Initialise things that need custom options
    var dropDowns = document.querySelectorAll('.dropdown-trigger');
    var dropInit = M.Dropdown.init(dropDowns,{'coverTrigger':false});

    var currentDate = new Date();
    var dateLabel = document.querySelector('.date');
    dateLabel.textContent=currentDate.getFullYear();
});
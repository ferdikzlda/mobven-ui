$(function () {
    $('[data-toggle="popover"]').popover();
    $('.search-input').on('keyup',(e)=>{
      let value=e.target.value;
      if(value==''){
        $(e.target.dataset.btn).removeClass('active');
      }else{
        $(e.target.dataset.btn).addClass('active');
        debugger;
      }
    });
    $('#daskSearch').on('click',(e)=>{
      if(e.target.classList.value==='disable-btn') return false;
      $('#daskCheckIcon').addClass('show');
      $('#daskNumberImg').addClass('hide');
      $('#daskSearch').removeClass('active');
      $('#daskSearch').text('DEĞİŞTİR');
    });
  })
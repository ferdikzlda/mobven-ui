$(function () {
    $('[data-toggle="popover"]').popover();
    $('.search-input').on('keyup',(e)=>{
      let value=e.target.value;
      if(value==''){
        $(e.target.dataset.btn).removeClass('active');
      }else{
        $(e.target.dataset.btn).addClass('active');
      }
    });
    $('.sms-code-box .search-input').on('keyup',(e)=>{
      let value=e.target.value;
      if(value==''){
        $('.sms-code-box').removeClass('active');
        $('.sms-timer').removeClass('error');
      }else{
        $('.sms-code-box').addClass('active');
        $('.sms-timer').addClass('error');
      }
    });
    $('#daskSearch').on('click',(e)=>{
      if(e.target.classList.value==='disable-btn') return false;
      $('#daskCheckIcon').addClass('show');
      $('#daskNumberImg').addClass('hide');
      $('#daskSearch').removeClass('active');
      $('#daskSearch').text('DEĞİŞTİR');
    });
    $('#invoiceModal').modal('show');
  })
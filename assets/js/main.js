$(function () {
  $('[data-toggle="popover"]').popover();
  $('.search-input').on('keyup', (e) => {
    let value = e.target.value;
    if (value == '') {
      $(e.target.dataset.btn).removeClass('active');
    } else {
      $(e.target.dataset.btn).addClass('active');
    }
  });
  $('.sms-code-box .search-input').on('keyup', (e) => {
    let value = e.target.value;
    if (value == '') {
      $('.sms-code-box').removeClass('active');
      $('.sms-timer').removeClass('error');
    } else {
      $('.sms-code-box').addClass('active');
      $('.sms-timer').addClass('error');
    }
  });
  $('#daskSearch').on('click', (e) => {
    if (e.target.classList.value === 'disable-btn' && e.currentTarget.textContent === 'DEVAM') return false;
    if (e.target.classList.value === 'disable-btn active' && e.currentTarget.textContent === 'DEVAM') {
      $(e.target.dataset.hideDescription).addClass('hide');
      $(e.target.dataset.hideImg).addClass('hide');
      $(e.target.dataset.hideAlertBox).addClass('hide');
      $(e.target.dataset.hideIcon).addClass('show');
      $(e.target.dataset.hideInputIcon).addClass('hide');
      $(e.target).removeClass('active');
      $(e.target.dataset.showPage).removeClass('hide');
      $(e.target).text('DEĞİŞTİR');
      $('html, body').animate({
        scrollTop: $(e.target.dataset.showPage).offset().top
      }, 1000);
      $('.pagination span:eq(0)').removeClass('active')
      $('.pagination span:eq(1)').addClass('active')
    }
    if (e.target.classList.value === 'disable-btn active' && e.currentTarget.textContent === 'DEĞİŞTİR') {
      $(e.target.dataset.hideIcon).addClass('show');
      $(e.target).removeClass('active');
      $(e.target.dataset.passiveBtn).addClass('active');
    }
  });
  $('#daskSearchBox .search-input').on('keyup', (e) => {
    let value = e.target.value;
    if (value !== '' && $('#daskSearch').text() === 'DEĞİŞTİR') {
      $(e.target.dataset.hideIcon).removeClass('show');
      $(e.target.dataset.passiveBtn).removeClass('active');
    }
  });
  $('#securityDepositBtn').on('click', (e) => {
    $(e.target).addClass('hide');
    $(e.target.dataset.hideImg).addClass('hide');
    $(e.target.dataset.hideDescription).addClass('hide');
    $(e.target.dataset.hideIcon).addClass('show');
    $(e.target.dataset.showPage).removeClass('hide');
    $('html, body').animate({
      scrollTop: $(e.target.dataset.showPage).offset().top
    }, 1000);
    $('.pagination span:eq(1)').removeClass('active');
    $('.pagination span:eq(2)').addClass('active');
  });
  $('#postRequest').on('click', (e) => {
    $('#hideSignatureSelected').addClass('hide');
    $('#postRequestResult').removeClass('hide');
  });
  $('#appointmentRequest').on('click', (e) => {
    $('#hideSignatureSelected').addClass('hide');
    $('#appointmentRequestResult').removeClass('hide');
  });
  $('#appointmentContinueBtn').on('click', (e) => {
    $(e.target).addClass('hide');
    $('#appointmentContinueLine').addClass('hide');
    goToFourPage();
  });
  $('#addressBoxSelected').on('click', (e) => {
    $('#hideAddressBoxSelected').addClass('hide');
    $('#addressBoxSelectedResult').removeClass('hide')
    let address = $('#addressValue').text();
    $('#addressFormValue').val(address);
    goToFourPage();
  });
  $('#changeAddressSelected').on('click', (e) => {
    $('#hideAddressBoxSelected').addClass('hide');
    $('#changeAddressForm').removeClass('hide')
  });
  $('#changeAddressBtn').on('click', (e) => {
    $('#addressBoxSelectedResult').addClass('hide');
    $('#changeAddressForm').removeClass('hide')
  });
  $('#addressChangeGiveUp').on('click', (e) => {
    $('#hideAddressBoxSelected').removeClass('hide');
    $('#changeAddressForm').addClass('hide');
    let address = $('#addressValue').text();
    $('#addressFormValue').val(address);
  });
  $('#addressSave').on('click', (e) => {
    $('#changeAddressForm').addClass('hide');
    $('#addressBoxSelectedResult').removeClass('hide');
    let address = $('#addressFormValue').val()
    $('#addressValue').text(address);
    $('#addressValue2').text(address);
    goToFourPage();
  });
  $('#communicationBtn').on('click', (e) => {
    let invoiceSms = $('input[name="invoice-sms"]').is(':checked');
    let invoiceEmail = $('input[name="invoice-email"]').is(':checked');
    if (invoiceSms || invoiceEmail) {
      goToFivePage();
    } else {
      $('#invoiceModal').modal('show');
    }
  });
  $('#invoiceModalApprove').on('click', (e) => {
    goToFivePage();
  });
  $('.communication-settings').on('click', (e) => {
    let checked = $(e.target).is(':checked');
    $(e.target.dataset.check).prop('checked', checked);
  })
  $('#contractModalApprove').on('click', (e) => {
    $('#contractFirstView').addClass('hide');
    $('#contractSecondView').removeClass('hide');
    $('#contractModal').modal('hide');
  });
  $('#showContractLink').on('click', (e) => {
    $('#contractModal').modal('show');
    $('#contractModalApprove').addClass('hide');
  });
  $('#contractSearchBox .search-input').on('keyup', (e) => {
    $('#changeMail').text('KAYDET');
    $('#formPostSection').addClass('hide');
  });
  $('#changeMail').on('click', (e) => {
    if ($('#changeMail').text() === 'DEĞİŞTİR') return false;
    $(e.target).text('DEĞİŞTİR');
    $('#contractCheckIcon').addClass('show');
    $(e.target).removeClass('active');
    $('#formPostSection').removeClass('hide')
  });
  $('#smsConfirmBtn').on('click', (e) => {
    if(e.target.classList.value === 'disable-btn active'){
      $('#requestForm').submit();
    }
    e.preventDefault();
  });
  $('#applicationComplete').on('click', (e) => {
    if (formValidate()) {
      $('#smsModal').modal('show');
    } else {
      alert('Lütfen değişiklikleri kaydediniz.');
    }
  })
  $('#requestForm').on('submit',(e)=>{
    console.log($('#requestForm').serializeArray());
    window.location.href = 'result.html';
    e.preventDefault();
  })
})

const goToFourPage = () => {
  $('#signatureCheckIcon').addClass('show');
  $('#fourPage').removeClass('hide');
  $('html, body').animate({
    scrollTop: $('#fourPage').offset().top
  }, 1000);
  if ($('.pagination span:eq(2)')[0].classList.value === "active") {
    $('.pagination span:eq(2)').removeClass('active');
    $('.pagination span:eq(3)').addClass('active');
  }
}

const goToFivePage = () => {
  $('#activeCheckboxes').addClass('hide');
  $('#selectedCheckboxes').removeClass('hide');
  $('#communicationImg').addClass('hide');
  $('#communicationIcon').addClass('show');
  $('#invoiceModal').modal('hide');
  $('#fivePage').removeClass('hide');
  $('html, body').animate({
    scrollTop: $('#fivePage').offset().top
  }, 1000);
  $('.pagination span:eq(3)').removeClass('active');
  $('.pagination span:eq(4)').addClass('active');
}

const formValidate = () => {
  if(
    $('#daskCheckIcon').is(':visible') &&
    $('#securityDepositCheckIcon').is(':visible') &&
    $('#signatureCheckIcon').is(':visible') &&
    $('#communicationIcon').is(':visible') &&
    $('#contractCheckIcon').is(':visible')
  ){
    return true;
  }else{
    return false;
  }
}
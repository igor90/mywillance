$(document).bind('ready',function(){    
    $('[placeholder]').focus(function() {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
        input.val('');
        input.removeClass('placeholder');
      }
    }).blur(function() {
      var input = $(this);
      if (input.val() == '' || input.val() == input.attr('placeholder')) {
        input.addClass('placeholder');
        input.val(input.attr('placeholder'));
      }
    }).blur().parents('form').submit(function() {
      $(this).find('[placeholder]').each(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
          input.val('');
        }
      })
    });    
});

function anchor_link(){
    $('.anchor').click(function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);

      e.preventDefault();
    });
}
/*
$(window).bind('load',function(){

    $('aside ol button').on('click', function(){
      $(this).parent().find('ul').toggle('slow');
      alert( $('.main').outerHeight() );
      $('.main .wrapper').css({'min-height': $('.main').outerHeight()+'px'});
    });

  //var asideHeight = $('.main').outerHeight();
  
});
*/
$(document).bind('ready',function(){
    $('a.phone').each(function() {
      $(this).attr('href','tel:+'+ $(this).text().replace(/[^0-9]/g,'') );
    });

    //$('.main aside').css({'min-height': $('.main').outerHeight()+'px'});

    $('aside ol button').on('click', function(){
      $(this).parent().find('ul').toggle('slow');
    });

    $('.show_hide_text').on('click', function(){
      var show_text = 'Подробнее';
      var hide_text = 'Свернуть';

      if($(this).text() == show_text){
        $(this).text(hide_text);
      }
      else{
        $(this).text(show_text);
      }

      $(this).parents('.solution_list').find('.hide_text').toggle('slow');
    });

    $('form button').on('click', function(cancel){
      cancel.preventDefault();
    });

    $('.solution_select').on('click', function(){
      var default_text = 'Выбрать решение';

      if( $(this).text() == default_text ){
        var solution_name = $(this).parents('.solution_list').find('.h2').text();
        $('#solution_card_list').append('<div class="item"><span>'+solution_name+'</span><button class="del">Удалить</button></div>');
        $('.overlay, .popup#solution_select').show();
        $(this).text('Решение выбрано');
      }
    });

    $('body').on('click', '#solution_card_list button.del', function(){
      var remove_solution = $(this).parent().find('span').text();
      $(this).parent().remove();

      $('.solution_list .h2').each(function() {
        if( $(this).text() == remove_solution ){
          $(this).parents('.solution_list').find('.solution_select').text('Выбрать решение');
        }
      });
      if( $('#solution_card_list .item').length == 0 ){
        $('.overlay, .popup#solution_card').hide();
      }
    });


    $('.open_add_document').on('click', function(){
      $(this).parents('.document_list').find('.add_document_step_1').show();
      $(this).hide();
    });

    $('.hide_add_document').on('click', function(){
      $(this).parents('.add_document_step_1').hide();
      $(this).parents('.document_list').find('.open_add_document').show();
    });

    $('.show_next_add_document').on('click', function(){
      $(this).parents('.add_document_step_1').hide();
      $(this).parents('.document_list').find('.add_document_step_2').show();
    });


    $('.open_edit_document').on('click', function(){
      $('.download_document_list').hide();
      $(this).parents('.document_list').find('.edit_document').show();
    });

    $('.hide_current_block').on('click', function(){
      $(this).parents('.add_document').hide();
      $('.download_document_list').hide();
    });




    $('.download_inputs button.download').on('click', function(){
      $(this).parent().find('input').trigger('click');
    });

    $('.download_inputs input').on('change', function(){
      var parent = $(this).parent();
      parent.find('.download').hide();
      parent.find('b, .del').show();
      parent.find('b').text( $(this).val() );
    });

    $('.download_inputs button.del').on('click', function(){
      var parent = $(this).parent();
      parent.find('.download').show();
      parent.find('b, .del').hide();
      parent.find('input').val('');
    });

    $('.close_download_document').on('click', function(){
      $('.download_document_list').hide();
    });
    $('.open_download_document').on('click', function(){
      $('.download_document_list').show();
      $(this).parents('.document_list').find('.edit_document').hide();
    });


    $('.del_profile').on('click', function(){
      $('.overlay, .popup#del_profile').show();
    });


    $('#test').on('click', function(){
      $('.overlay, .popup#solution_card').show();
    });


    $('.overlay, .close').on('click', function(){
      $('.overlay, .popup').hide();
    });

    $('.tip_button').on('mouseover', function(){
      $(this).parent().find('.tip_text').show();
    }).mouseout(function(){
      $(this).parent().find('.tip_text').hide();
    });    

    anchor_link();
});


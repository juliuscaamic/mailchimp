!function(t){t(document).ready(function(){t.fn.mailchimp=function(){t(this).submit(function(e){var s=t(this).serializeArray(),a=t(this).attr("action"),r=t(this);r.find('button[type="submit"]').html("Loading ..."),t.ajax({url:a,type:"POST",data:s,dataType:"JSON",success:function(t){t.success?r.prev("p.alert").removeClass("alert-warning").addClass("alert-success").text(t.message).show():r.prev("p.alert").removeClass("alert-success").addClass("alert-warning").text(t.message).show(),r.find('button[type="submit"]').text("Subscribe"),r.trigger("reset")}}),e.preventDefault()})}})}(jQuery);
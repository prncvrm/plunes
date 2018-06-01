
jQuery(document).ready(function()
{
	/* Add New Concern */
	$('#form_ownwall_concern').on('submit', function(e) 
	{
		message	=	jQuery('#concern_msz').val();
		
		e.preventDefault();
		
		jQuery.ajax(
		{
			type	: 'POST',
			url		: 'ajax_forall.php',
			data	: 
			{
				type		:	'addconcern',
				message 	:	message   
			},
			beforeSend:function()
			{
				//$(".loader-box").show();
			},
			success: function(output)
			{
				outputs = output.split('***');
				
				if(outputs[0]=='added')
				{
					jQuery('#concern_msz').val('');
					jQuery('#DivNewEntity').prepend(outputs[1]);
				}
				else
				{
					jQuery('#concern_msz').val('');
					alert('there are some issues');
				}
			}
		});
    });
	
	/* Add New Achievement */
	$('#form_ownwall_achievement').on('submit', function(e) 
	{
		message	=	jQuery('#achievement_msz').val();
		
		e.preventDefault();
		
		jQuery.ajax(
		{
			type	: 'POST',
			url		: 'ajax_forall.php',
			data	: 
			{
				type		:	'addachievement',
				message 	:	message   
			},
			beforeSend:function()
			{
				//$(".loader-box").show();
			},
			success: function(output)
			{
				outputs = output.split('***');
				
				if(outputs[0]=='added')
				{
					jQuery('#achievement_msz').val('');
					jQuery('#DivNewEntity').prepend(outputs[1]);
				}
				else
				{
					jQuery('#achievement_msz').val('');
					alert('there are some issues');
				}
			}
		});
    });
	
	/* Add New Note */
	$('#form_ownwall_note').on('submit', function(e) 
	{
		message	=	jQuery('#note_msz').val();
		
		e.preventDefault();
		
		jQuery.ajax(
		{
			type	: 'POST',
			url		: 'ajax_forall.php',
			data	: 
			{
				type		:	'addnote',
				message 	:	message   
			},
			beforeSend:function()
			{
				//$(".loader-box").show();
			},
			success: function(output)
			{
				outputs = output.split('***');
				
				if(outputs[0]=='added')
				{
					jQuery('#note_msz').val('');
					jQuery('#DivNewEntity').prepend(outputs[1]);
				}
				else
				{
					jQuery('#note_msz').val('');
					alert('there are some issues');
				}
			}
		});
	
    });
	
	/* Add Problem */
	$('#form_problem').on('submit', function(e) 
	{
		message	=	jQuery('#problem_message').val();
		
		event.preventDefault();
		
		jQuery.ajax(
		{
			type	: 'POST',
			url		: 'ajax_forall.php',
			data	: 
			{
				type		:	'addproblem',
				message 	:	message   
			},
			beforeSend:function()
			{
				//$(".loader-box").show();
			},
			success: function(output)
			{
				outputs = output.split('***');
				
				jQuery('#problem_message').val('');
				jQuery('#problem_msz').html(outputs[1]);
			}
		});
    });	
	
	/* Add Feedback */
	$('#form_feedback').on('submit', function(e) 
	{
		title	=	jQuery('#feedback_title').val();
		message	=	jQuery('#feedback_message').val();
		
		event.preventDefault();
		
		jQuery.ajax(
		{
			type	: 'POST',
			url		: 'ajax_forall.php',
			data	: 
			{
				type		:	'addfeedback',
				title 		:	title   ,
				message 	:	message   
			},
			beforeSend:function()
			{
				//$(".loader-box").show();
			},
			success: function(output)
			{
				outputs = output.split('***');
				
				jQuery('#feedback_title').val('');
				jQuery('#feedback_message').val('');
				jQuery('#feedback_msz').html(outputs[1]);
			}
		});
    });	
	
	/* Add Debate Comment */
	$('#form_debate_comment').on('submit', function(e) 
	{
		message		=	jQuery('#debate_comment_msz').val();
		debateid	=	jQuery('#finaldebateid').val();
		
		e.preventDefault();
		
		jQuery.ajax(
		{
			type	: 'POST',
			url		: 'ajax_forall.php',
			data	: 
			{
				type		:	'adddebatecomment',
				debateid 	:	debateid,
				message 	:	message   
			},
			beforeSend:function()
			{
				//$(".loader-box").show();
			},
			success: function(output)
			{
				outputs = output.split('***');
				
				if(outputs[0]=='added')
				{
					jQuery('#debate_comment_msz').val('');
					jQuery('#DivDebateComment').append(outputs[1]);
				}
				else
				{
					jQuery('#debate_comment_msz').val('');
					alert('there are some issues');
				}
			}
		});
    });
	
	/* Add Debate Comment */
	$('#form_debate_mob_comment').on('submit', function(e) 
	{
		message		=	jQuery('#debate_comment_msz').val();
		debateid	=	jQuery('#finaldebateid').val();
		
		e.preventDefault();
		
		jQuery.ajax(
		{
			type	: 'POST',
			url		: 'ajax_forall.php',
			data	: 
			{
				type		:	'adddebatecomment_mob',
				debateid 	:	debateid,
				message 	:	message   
			},
			beforeSend:function()
			{
				//$(".loader-box").show();
			},
			success: function(output)
			{
				outputs = output.split('***');
				
				if(outputs[0]=='added')
				{
					jQuery('#debate_comment_msz').val('');
					jQuery('#DivDebateComment').append(outputs[1]);
				}
				else
				{
					jQuery('#debate_comment_msz').val('');
					alert('there are some issues');
				}
			}
		});
    });
	
	/* Add Chat On Demand */
	$('#form_chat_ondemand').on('submit', function(e) 
	{
		var formData = new FormData($(this)[0]);

		e.preventDefault();
		
		jQuery.ajax(
		{
			url		: 'ajax_forall.php?type=addchatondemand',
			type	: 'POST',
			data	: formData,
			async	: false,
			success: function(output)
			{
				outputs = output.split('***');
				
				if(outputs[0]=='added')
				{
					jQuery('.textarea-size').html('');
					
					jQuery('#ondemandchat_msz').val('');
					
					jQuery('#chatdoc').val('');
					jQuery('#DivChatOnDemand').append(outputs[1]);
				}
				else
				{
					jQuery('#ondemandchat_msz').val('');
					jQuery('#chatdoc').val('');
					alert('there are some issues');
				}
			},
			cache		: false,
			contentType	: false,
			processData	: false
		});
    });
	
	/* Add User Step 0 */
	$('#form_user_reg1').on('submit', function(e) 
	{
		rules 		= 	validationRule();
		messages 	= 	validationMessage();

		jQuery('.error').html('');
		
		f_firstname	=	jQuery('#firstname').val();
		f_lastname	=	jQuery('#lastname').val();	
		
		var variable 	= 	[ "firstname", "lastname" ];  		
		var totalvar 	= 	2;
		var focuscount 	= 	0;
		var count 	 	= 	0;
		
		/* For Required */
		for(i=0;i<totalvar;i++)
		{
			fieldname 	= 	variable[i];
			
			if(rules[fieldname]['required']==true)
			{
				if(jQuery('#'+fieldname).val()=='')
				{
					jQuery('#'+fieldname+'-error').html(messages[fieldname]['required']);
					if(focuscount==0) { jQuery('#'+fieldname).focus(); focuscount++;}
					count++;
				}
			}
		}
		if(count>0){ return false; count = 0;}
		
		/* For Minimum Length */
		for(i=0;i<totalvar;i++)
		{
			fieldname 	= 	variable[i];
			
			if(rules[fieldname]['minlength']==true)
			{
				if(jQuery('#'+fieldname).val().length<rules[fieldname]['minlengthval'])
				{
					jQuery('#'+fieldname+'-error').html(messages[fieldname]['minlength']);
					if(focuscount==0) { jQuery('#'+fieldname).focus(); focuscount++;}
					count++;
				}
			}
		}
		if(count>0){ return false; count = 0;}
		
		$('#form_user_reg1').submit();
    });
	
	/* Add User Step 1 */
	$('#form_user_step1').on('submit', function(e) 
	{
		rules 		= 	validationRule();
		messages 	= 	validationMessage();

		jQuery('.error').html('');
		
		f_firstname			=	jQuery('#firstname').val();
		f_lastname			=	jQuery('#lastname').val();	
		f_contactno			=	jQuery('#contactno').val();
		f_reg_emailid		=	jQuery('#reg_emailid').val();	
		f_reg_passwordd		=	jQuery('#reg_passwordd').val();
		f_reg_repasswordd	=	jQuery('#reg_repasswordd').val();	
		
		var variable 	= 	[ "firstname", "lastname", "contactno", "gender", "reg_emailid", "reg_passwordd", "reg_repasswordd" ];  		
		var totalvar 	= 	7;
		var focuscount 	= 	0;
		var count 	 	= 	0;
		
		/* For Required */
		for(i=0;i<totalvar;i++)
		{
			fieldname 	= 	variable[i];
			
			if(rules[fieldname]['required']==true)
			{
				if(jQuery('#'+fieldname).attr('type')=='text')
				{
					if(jQuery('#'+fieldname).val()=='')
					{
						jQuery('#'+fieldname+'-error').html(messages[fieldname]['required']);
						if(focuscount==0) { jQuery('#'+fieldname).focus(); focuscount++;}
						count++;
					}
				}
				if(jQuery('#'+fieldname).attr('type')=='radio')
				{
					if(!$('input[id='+fieldname+']:checked').val())
					{
						jQuery('#'+fieldname+'-error').html(messages[fieldname]['required']);
						if(focuscount==0) { jQuery('#'+fieldname).focus(); focuscount++;}
						count++;
					}
				}
			}
		}
		if(count>0){ return false; count = 0;}
		
		/* For Minimum Length */
		for(i=0;i<totalvar;i++)
		{
			fieldname 	= 	variable[i];
			
			if(rules[fieldname]['minlength']==true)
			{
				if(jQuery('#'+fieldname).val().length<rules[fieldname]['minlengthval'])
				{
					jQuery('#'+fieldname+'-error').html(messages[fieldname]['minlength']);
					if(focuscount==0) { jQuery('#'+fieldname).focus(); focuscount++;}
					count++;
				}
			}
		}
		if(count>0){ return false; count = 0;}
		
		/* For Fix Length */
		for(i=0;i<totalvar;i++)
		{
			fieldname 	= 	variable[i];
			
			if(rules[fieldname]['length']==true)
			{
				if(jQuery('#'+fieldname).val().length!=rules[fieldname]['lengthval'])
				{
					jQuery('#'+fieldname+'-error').html(messages[fieldname]['length']);
					if(focuscount==0) { jQuery('#'+fieldname).focus(); focuscount++;}
					count++;
				}
			}
		}
		if(count>0){ return false; count = 0;}
		
		/* For Format */
		for(i=0;i<totalvar;i++)
		{
			fieldname 	= 	variable[i];
			
			if(rules[fieldname]['format']==true)
			{
			var r = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
				
				if(jQuery('#'+fieldname).val().match(r) == null)
				{
					jQuery('#'+fieldname+'-error').html(messages[fieldname]['format']);
					if(focuscount==0) { jQuery('#'+fieldname).focus(); focuscount++;}
					count++;
				}
			}
		}
		if(count>0){ return false; count = 0;}
		
		/* For Equal To */
		for(i=0;i<totalvar;i++)
		{
			fieldname 	= 	variable[i];
			
			if(rules[fieldname]['equalTo']==true)
			{
				if(jQuery('#'+fieldname).val()!=jQuery('#reg_passwordd').val())
				{
					jQuery('#'+fieldname+'-error').html(messages[fieldname]['equalTo']);
					if(focuscount==0) { jQuery('#'+fieldname).focus(); focuscount++;}
					count++;
				}
			}
		}
		
		if(count>0){ return false; count = 0;}		
		
		$('#form_user_step1').submit();
    });
	
	/* Add Lawyer Step 1 */
	$('#form_lawyer_step1').on('submit', function(e) 
	{
		rules 		= 	validationRule();
		messages 	= 	validationMessage();

		jQuery('.error').html('');
		
		f_firstname			=	jQuery('#firstname').val();
		f_lastname			=	jQuery('#lastname').val();	
		f_contactno			=	jQuery('#contactno').val();
		f_reg_emailid		=	jQuery('#reg_emailid').val();	
		f_reg_passwordd		=	jQuery('#reg_passwordd').val();
		f_reg_repasswordd	=	jQuery('#reg_repasswordd').val();	
		
		var variable 	= 	[ "firstname", "lastname", "contactno", "gender", "reg_emailid", "reg_passwordd", "reg_repasswordd" ];  		
		var totalvar 	= 	7;
		var focuscount 	= 	0;
		var count 	 	= 	0;
		
		/* For Required */
		for(i=0;i<totalvar;i++)
		{
			fieldname 	= 	variable[i];
			
			if(rules[fieldname]['required']==true)
			{
				if(jQuery('#'+fieldname).attr('type')=='text')
				{
					if(jQuery('#'+fieldname).val()=='')
					{
						jQuery('#'+fieldname+'-error').html(messages[fieldname]['required']);
						if(focuscount==0) { jQuery('#'+fieldname).focus(); focuscount++;}
						count++;
					}
				}
				if(jQuery('#'+fieldname).attr('type')=='radio')
				{
					if(!$('input[id='+fieldname+']:checked').val())
					{
						jQuery('#'+fieldname+'-error').html(messages[fieldname]['required']);
						if(focuscount==0) { jQuery('#'+fieldname).focus(); focuscount++;}
						count++;
					}
				}
			}
		}
		if(count>0){ return false; count = 0;}
		
		/* For Minimum Length */
		for(i=0;i<totalvar;i++)
		{
			fieldname 	= 	variable[i];
			
			if(rules[fieldname]['minlength']==true)
			{
				if(jQuery('#'+fieldname).val().length<rules[fieldname]['minlengthval'])
				{
					jQuery('#'+fieldname+'-error').html(messages[fieldname]['minlength']);
					if(focuscount==0) { jQuery('#'+fieldname).focus(); focuscount++;}
					count++;
				}
			}
		}
		if(count>0){ return false; count = 0;}
		
		/* For Fix Length */
		for(i=0;i<totalvar;i++)
		{
			fieldname 	= 	variable[i];
			
			if(rules[fieldname]['length']==true)
			{
				if(jQuery('#'+fieldname).val().length!=rules[fieldname]['lengthval'])
				{
					jQuery('#'+fieldname+'-error').html(messages[fieldname]['length']);
					if(focuscount==0) { jQuery('#'+fieldname).focus(); focuscount++;}
					count++;
				}
			}
		}
		if(count>0){ return false; count = 0;}
		
		/* For Format */
		for(i=0;i<totalvar;i++)
		{
			fieldname 	= 	variable[i];
			
			if(rules[fieldname]['format']==true)
			{
			var r = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
				
				if(jQuery('#'+fieldname).val().match(r) == null)
				{
					jQuery('#'+fieldname+'-error').html(messages[fieldname]['format']);
					if(focuscount==0) { jQuery('#'+fieldname).focus(); focuscount++;}
					count++;
				}
			}
		}
		if(count>0){ return false; count = 0;}
		
		/* For Equal To */
		for(i=0;i<totalvar;i++)
		{
			fieldname 	= 	variable[i];
			
			if(rules[fieldname]['equalTo']==true)
			{
				if(jQuery('#'+fieldname).val()!=jQuery('#reg_passwordd').val())
				{
					jQuery('#'+fieldname+'-error').html(messages[fieldname]['equalTo']);
					if(focuscount==0) { jQuery('#'+fieldname).focus(); focuscount++;}
					count++;
				}
			}
		}
		
		if(count>0){ return false; count = 0;}		
		
		$('#form_lawyer_step1').submit();
    });
	
	/* Add Lawyer Step 2 */
	$('#form_lawyer_step2__').on('submit', function(e) 
	{
		rules 		= 	validationRule();
		messages 	= 	validationMessage();

		jQuery('.error').html('');
		
		f_license		=	jQuery('#license').val();
		f_experienc		=	jQuery('#experience').val();
		f_expertise		=	jQuery('#expertise').val();	
		
		var variable 	= 	[ "license", "experience", "expertise" ];  		
		var totalvar 	= 	3;
		var focuscount 	= 	0;
		var count 	 	= 	0;
		
		/* For Required */
		for(i=0;i<totalvar;i++)
		{
			fieldname 	= 	variable[i];
			
			if(rules[fieldname]['required']==true)
			{
				if(jQuery('#'+fieldname).val()=='' || jQuery('#'+fieldname).val()==null)
				{
					jQuery('#'+fieldname+'-error').html(messages[fieldname]['required']);
					if(focuscount==0) { jQuery('#'+fieldname).focus(); focuscount++;}
					count++;
				}
			}
		}
		if(count>0){ return false; count = 0;}	
		
		$('#form_lawyer_step2').submit();
    });
	
	/* Edit User Profile */
	$('#form_user_profile').on('submit', function(e) 
	{
		rules 		= 	validationRule();
		messages 	= 	validationMessage();

		jQuery('.error').html('');
		
		f_firstname			=	jQuery('#firstname').val();
		f_lastname			=	jQuery('#lastname').val();	
		f_contactno			=	jQuery('#contactno').val();	
		
		var variable 	= 	[ "firstname", "lastname", "contactno", "gender" ];  		
		var totalvar 	= 	4;
		var focuscount 	= 	0;
		var count 	 	= 	0;
		
		/* For Required */
		for(i=0;i<totalvar;i++)
		{
			fieldname 	= 	variable[i];
			
			if(rules[fieldname]['required']==true)
			{
				if(jQuery('#'+fieldname).attr('type')=='text')
				{
					if(jQuery('#'+fieldname).val()=='')
					{
						jQuery('#'+fieldname+'-error').html(messages[fieldname]['required']);
						if(focuscount==0) { jQuery('#'+fieldname).focus(); focuscount++;}
						count++;
					}
				}
				if(jQuery('#'+fieldname).attr('type')=='radio')
				{
					if(!$('input[id='+fieldname+']:checked').val())
					{
						jQuery('#'+fieldname+'-error').html(messages[fieldname]['required']);
						if(focuscount==0) { jQuery('#'+fieldname).focus(); focuscount++;}
						count++;
					}
				}
			}
		}
		if(count>0){ return false; count = 0;}
		
		/* For Minimum Length */
		for(i=0;i<totalvar;i++)
		{
			fieldname 	= 	variable[i];
			
			if(rules[fieldname]['minlength']==true)
			{
				if(jQuery('#'+fieldname).val().length<rules[fieldname]['minlengthval'])
				{
					jQuery('#'+fieldname+'-error').html(messages[fieldname]['minlength']);
					if(focuscount==0) { jQuery('#'+fieldname).focus(); focuscount++;}
					count++;
				}
			}
		}
		if(count>0){ return false; count = 0;}
		
		/* For Fix Length */
		for(i=0;i<totalvar;i++)
		{
			fieldname 	= 	variable[i];
			
			if(rules[fieldname]['length']==true)
			{
				if(jQuery('#'+fieldname).val().length!=rules[fieldname]['lengthval'])
				{
					jQuery('#'+fieldname+'-error').html(messages[fieldname]['length']);
					if(focuscount==0) { jQuery('#'+fieldname).focus(); focuscount++;}
					count++;
				}
			}
		}
		if(count>0){ return false; count = 0;}	
		
		$('#form_user_profile').submit();
    });
	
	/* Edit Professional Profile */
	$('#form_professional_profile').on('submit', function(e) 
	{
		rules 		= 	validationRule();
		messages 	= 	validationMessage();

		jQuery('.error').html('');
		
		f_firstname			=	jQuery('#firstname').val();
		f_lastname			=	jQuery('#lastname').val();	
		f_contactno			=	jQuery('#contactno').val();	
		
		var variable 	= 	[ "firstname", "lastname", "contactno", "gender" ];  		
		var totalvar 	= 	4;
		var focuscount 	= 	0;
		var count 	 	= 	0;
		
		/* For Required */
		for(i=0;i<totalvar;i++)
		{
			fieldname 	= 	variable[i];
			
			if(rules[fieldname]['required']==true)
			{
				if(jQuery('#'+fieldname).attr('type')=='text')
				{
					if(jQuery('#'+fieldname).val()=='')
					{
						jQuery('#'+fieldname+'-error').html(messages[fieldname]['required']);
						if(focuscount==0) { jQuery('#'+fieldname).focus(); focuscount++;}
						count++;
					}
				}
				if(jQuery('#'+fieldname).attr('type')=='radio')
				{
					if(!$('input[id='+fieldname+']:checked').val())
					{
						jQuery('#'+fieldname+'-error').html(messages[fieldname]['required']);
						if(focuscount==0) { jQuery('#'+fieldname).focus(); focuscount++;}
						count++;
					}
				}
			}
		}
		if(count>0){ return false; count = 0;}
		
		/* For Minimum Length */
		for(i=0;i<totalvar;i++)
		{
			fieldname 	= 	variable[i];
			
			if(rules[fieldname]['minlength']==true)
			{
				if(jQuery('#'+fieldname).val().length<rules[fieldname]['minlengthval'])
				{
					jQuery('#'+fieldname+'-error').html(messages[fieldname]['minlength']);
					if(focuscount==0) { jQuery('#'+fieldname).focus(); focuscount++;}
					count++;
				}
			}
		}
		if(count>0){ return false; count = 0;}
		
		/* For Fix Length */
		for(i=0;i<totalvar;i++)
		{
			fieldname 	= 	variable[i];
			
			if(rules[fieldname]['length']==true)
			{
				if(jQuery('#'+fieldname).val().length!=rules[fieldname]['lengthval'])
				{
					jQuery('#'+fieldname+'-error').html(messages[fieldname]['length']);
					if(focuscount==0) { jQuery('#'+fieldname).focus(); focuscount++;}
					count++;
				}
			}
		}
		if(count>0){ return false; count = 0;}	
		
		$('#form_professional_profile').submit();
    });
	
	/* Edit Professional Bank Info */
	$('#form_professional_bank').on('submit', function(e) 
	{
		rules 		= 	validationRule();
		messages 	= 	validationMessage();

		jQuery('.error').html('');
		
		f_bankname			=	jQuery('#bankname').val();
		f_accountno			=	jQuery('#accountno').val();	
		f_ifsccode			=	jQuery('#ifsccode').val();	
		f_panno				=	jQuery('#panno').val();
		f_beneficiaryname	=	jQuery('#beneficiaryname').val();	
		
		var variable 	= 	[ "bankname", "accountno", "ifsccode", "panno", "beneficiaryname" ];  		
		var totalvar 	= 	5;
		var focuscount 	= 	0;
		var count 	 	= 	0;
		
		/* For Required */
		for(i=0;i<totalvar;i++)
		{
			fieldname 	= 	variable[i];
			
			if(rules[fieldname]['required']==true)
			{
				if(jQuery('#'+fieldname).attr('type')=='text')
				{
					if(jQuery('#'+fieldname).val()=='')
					{
						jQuery('#'+fieldname+'-error').html(messages[fieldname]['required']);
						if(focuscount==0) { jQuery('#'+fieldname).focus(); focuscount++;}
						count++;
					}
				}
				if(jQuery('#'+fieldname).attr('type')=='radio')
				{
					if(!$('input[id='+fieldname+']:checked').val())
					{
						jQuery('#'+fieldname+'-error').html(messages[fieldname]['required']);
						if(focuscount==0) { jQuery('#'+fieldname).focus(); focuscount++;}
						count++;
					}
				}
			}
		}
		if(count>0){ return false; count = 0;}
		
		$('#form_professional_bank').submit();
    })
	
	/* Edit User Password */
	$('#form_change_password_old').on('submit', function(e) 
	{
		rules 		= 	validationRule();
		messages 	= 	validationMessage();

		jQuery('.error').html('');
		
		f_profile_oldpassword	=	jQuery('#profile_oldpassword').val();
		f_profile_passwordd		=	jQuery('#profile_passwordd').val();	
		f_profile_repasswordd	=	jQuery('#profile_repasswordd').val();	
		
		var variable 	= 	[ "profile_oldpassword", "profile_passwordd", "profile_repasswordd" ];  		
		var totalvar 	= 	3;
		var focuscount 	= 	0;
		var count 	 	= 	0;
		
		/* For Required */
		for(i=0;i<totalvar;i++)
		{
			fieldname 	= 	variable[i];
			
			if(rules[fieldname]['required']==true)
			{
				if(jQuery('#'+fieldname).attr('type')=='text')
				{
					if(jQuery('#'+fieldname).val()=='')
					{
						jQuery('#'+fieldname+'-error').html(messages[fieldname]['required']);
						if(focuscount==0) { jQuery('#'+fieldname).focus(); focuscount++;}
						count++;
					}
				}
				if(jQuery('#'+fieldname).attr('type')=='radio')
				{
					if(!$('input[id='+fieldname+']:checked').val())
					{
						jQuery('#'+fieldname+'-error').html(messages[fieldname]['required']);
						if(focuscount==0) { jQuery('#'+fieldname).focus(); focuscount++;}
						count++;
					}
				}
			}
		}
		if(count>0){ return false; count = 0;}
		
		/* For Old Password - Match woth DB */
		jQuery.ajax(
		{
			type	: 'POST',
			url		: 'ajax_forall.php',
			data	: 
			{
				type		:	'matcholdpassword' ,
				password 	:	f_profile_oldpassword 
			},
			beforeSend:function()
			{
				//$(".loader-box").show();
			},
			success: function(output)
			{
				if(output=='Match')
				{
					jQuery('#profile_oldpassword-error').css("color",'green');
					jQuery('#profile_oldpassword-error').html("Old Password matched");
				}
				else
				{
					jQuery('#profile_oldpassword-error').css("color",'red');
					jQuery('#profile_oldpassword-error').html("Old Password doesn't match");
					jQuery('#profile_oldpassword').focus();
					count++;
				}
			}
		});
		
		if(count>0){ return false; count = 0;}
		
		/* For Minimum Length */
		for(i=0;i<totalvar;i++)
		{
			fieldname 	= 	variable[i];
			
			if(rules[fieldname]['minlength']==true)
			{
				if(jQuery('#'+fieldname).val().length<rules[fieldname]['minlengthval'])
				{
					jQuery('#'+fieldname+'-error').html(messages[fieldname]['minlength']);
					if(focuscount==0) { jQuery('#'+fieldname).focus(); focuscount++;}
					count++;
				}
			}
		}
		if(count>0){ return false; count = 0;}
		
		/* For Equal To */
		for(i=0;i<totalvar;i++)
		{
			fieldname 	= 	variable[i];
			
			if(rules[fieldname]['equalTo']==true)
			{
				if(jQuery('#'+fieldname).val()!=jQuery('#profile_passwordd').val())
				{
					jQuery('#'+fieldname+'-error').html(messages[fieldname]['equalTo']);
					if(focuscount==0) { jQuery('#'+fieldname).focus(); focuscount++;}
					count++;
				}
			}
		}
		
		if(count>0){ return false; event.preventDefault(); }
		else { $('#form_change_password').submit(); }	
    });
	
	/* Forgot Password */
	$('#form_forgot_password').on('submit', function(e) 
	{
		emailid	=	jQuery('#forgot_emailid').val();
	
		e.preventDefault();
		
		jQuery.ajax(
		{
			type	: 'POST',
			url		: 'ajax_forall.php',
			data	: 
			{
				type		:	'forgotpassword',
				emailid 	:	emailid   
			},
			beforeSend:function()
			{
				//$(".loader-box").show();
			},
			success: function(output)
			{
				if(output=='Match')
				{
					window.location.href = 'thank-you-forgot-your-password.html';
				}
				else
				{
					jQuery('#forgot_emailid-error').html("Email ID doesn't exist");
				}
			}
		});	
    });	
	
	/* Ask - In Utility */
	$('.utility_ask').click(function()
	{
		var lawyerid 		= 	$(this).attr('data-userid');
		var visitorproid 	= 	$(this).attr('data-visitorproid');
		
		jQuery('#askingto').val(lawyerid);
		jQuery('#visitorproid').val(visitorproid);
		
		if(lawyerid)
		{
			jQuery.ajax(
			{
				type	: 'POST',
				url		: 'ajax_forall.php',
				data	: 
				{
					type		:	'addaskquestion_utility' ,
					lawyerid 	:	lawyerid 
				},
				beforeSend:function()
				{
					//$(".loader-box").show();
				},
				success: function(output)
				{
					outputs = output.split('***');
					
					jQuery('#form_utility_question').attr('action',outputs[0]);
					jQuery('#question_fk_expertiseid').html(outputs[1]);
				}
			});
		}
		else
		{
			jQuery('#form_utility_question').attr('action','');
			jQuery('#question_fk_expertiseid').html();
		}
	});	
	
	/* Ask - Without Login - Click */
	$('.nologin_ask').click(function()
	{
		var lawyerid 		= 	$(this).attr('data-userid');
		var visitorproid 	= 	$(this).attr('data-visitorproid');
		var expertisename 	= 	$('#autosearch_indexexpertise').val(); 
		
		jQuery('#askingto').val(lawyerid);
		jQuery('#visitorproid').val(visitorproid);
		
		if(lawyerid)
		{
			jQuery.ajax(
			{
				type	: 'POST',
				url		: 'ajax_forall.php',
				data	: 
				{
					type			:	'addaskquestion_nologin' ,
					lawyerid 		:	lawyerid ,
					expertisename 	:	expertisename 
				},
				beforeSend:function()
				{
					//$(".loader-box").show();
				},
				success: function(output)
				{
					outputs = output.split('***');
					
					jQuery('#question_fk_expertiseid').html(outputs[0]);
				}
			});
		}
		else
		{
			jQuery('#question_fk_expertiseid').html();
		}
	});
	
	/* Ask - Without Login - Submit */	
	$('#form_nologin_question').on('submit', function(e) 
	{
		e.preventDefault();
		
		lawyerid 				= 	jQuery('#askingto').val();
		
		reg_firstname			=	jQuery('#reg_firstname').val();
		reg_lastname			=	jQuery('#reg_lastname').val();	
		reg_emailid				=	jQuery('#reg_emailid').val();
		reg_passwordd			=	jQuery('#reg_passwordd').val();	
		reg_repasswordd			=	jQuery('#reg_repasswordd').val();	
		gender					=	jQuery('#gender').val();
		reg_phone				=	jQuery('#reg_phone').val();
		askingto				=	jQuery('#askingto').val();	
		question				=	jQuery('#question').val();
		question_fk_expertiseid	=	jQuery('#question_fk_expertiseid').val();
		status					=	jQuery('input[name=reg_status]:checked').val();	
		
		if(lawyerid)
		{
			jQuery.ajax(
			{
				type	: 'POST',
				url		: 'ajax_forall.php',
				data	: 
				{
					type						:	'addaskquestion_nologin_submit',
					reg_firstname 				:	reg_firstname ,
					reg_lastname 				:	reg_lastname ,
					reg_emailid 				:	reg_emailid ,
					reg_passwordd 				:	reg_passwordd   ,
					gender 						:	gender   ,
					reg_phone 					:	reg_phone   ,
					askingto 					:	askingto   ,
					question 					:	question   ,
					question_fk_expertiseid 	:	question_fk_expertiseid   ,
					status 						:	status     
				},
				beforeSend:function()
				{
					//$(".loader-box").show();
				},
				success: function(output)
				{
					outputs = output.split('***');
					
					if(outputs[0]=='nobug')
					{
						if(outputs[1]=='notexist')
						{
							//alert(outputs[2]);
							window.location.href = outputs[2];
						}
						else
						{
							alert('Email ID already exist.');
						}
					}
					else
					{
						alert('bug');
					}
				}
			});
		}
		else
		{
			jQuery('#question_fk_expertiseid').html();
			alert('there are some issues.');
		}
	});	
	
	/* Ask - Without Login - Submit */	
	$('#form_nologin_index_question').on('submit', function(e) 
	{
		e.preventDefault();
		
		reg_firstname			=	jQuery('#reg_firstname').val();
		reg_lastname			=	jQuery('#reg_lastname').val();	
		reg_emailid				=	jQuery('#reg_emailid').val();
		reg_passwordd			=	jQuery('#reg_passwordd').val();	
		reg_repasswordd			=	jQuery('#reg_repasswordd').val();	
		gender					=	jQuery('#gender').val();
		reg_phone				=	jQuery('#reg_phone').val();
		question				=	jQuery('#question').val();
		question_fk_expertiseid	=	jQuery('#question_fk_expertiseid').val();
		status					=	jQuery('input[name=reg_status]:checked').val();	

		jQuery.ajax(
		{
			type	: 'POST',
			url		: 'ajax_forall.php',
			data	: 
			{
				type						:	'addaskquestion_nologin_indexpage_submit',
				reg_firstname 				:	reg_firstname ,
				reg_lastname 				:	reg_lastname ,
				reg_emailid 				:	reg_emailid ,
				reg_passwordd 				:	reg_passwordd   ,
				gender 						:	gender   ,
				reg_phone 					:	reg_phone   ,
				question 					:	question   ,
				question_fk_expertiseid 	:	question_fk_expertiseid   ,
				status 						:	status     
			},
			beforeSend:function()
			{
				//$(".loader-box").show();
			},
			success: function(output)
			{
				outputs = output.split('***');
				
				if(outputs[0]=='nobug')
				{
					if(outputs[1]=='notexist')
					{
						//alert(outputs[2]);
						window.location.href = outputs[2];
					}
					else
					{
						alert('Email ID already exist.');
					}
				}
				else
				{
					alert('bug');
				}
			}
		});
	});
	
	/* Quick Login - Content Page - Submit */	
	$('#form_quick_signup_content').on('submit', function(e) 
	{
		e.preventDefault();
		
		reg_firstname			=	jQuery('#reg_firstname').val();
		reg_lastname			=	jQuery('#reg_lastname').val();	
		reg_emailid				=	jQuery('#reg_emailid').val();
		reg_passwordd			=	jQuery('#reg_passwordd').val();	
		reg_repasswordd			=	jQuery('#reg_repasswordd').val();	
		gender					=	jQuery('#gender').val();
		reg_phone				=	jQuery('#reg_phone').val();
		
		jQuery.ajax(
		{
			type	: 'POST',
			url		: 'ajax_forall.php',
			data	: 
			{
				type						:	'addquicksignup_contentpage_submit',
				reg_firstname 				:	reg_firstname ,
				reg_lastname 				:	reg_lastname ,
				reg_emailid 				:	reg_emailid ,
				reg_passwordd 				:	reg_passwordd   ,
				gender 						:	gender   ,
				reg_phone 					:	reg_phone  
			},
			beforeSend:function()
			{
				//$(".loader-box").show();
			},
			success: function(output)
			{
				outputs = output.split('***');
				
				if(outputs[0]=='nobug')
				{
					if(outputs[1]=='notexist')
					{
						//alert(outputs[2]);
						window.location.href = outputs[2];
					}
					else
					{
						alert('Email ID already exist.');
					}
				}
				else
				{
					alert('bug');
				}
			}
		});
	});
	
	/* Tabs */
	$('.panel-heading').click(function()
	{
		var tabid 	= 	$(this).attr('id');
		
		$('#'+tabid+'-content').slideToggle();
		$('#'+tabid+'-sym-add').toggle();
		$('#'+tabid+'-sym-min').toggle();
	});	
	
	/* Add Argument - On Debate */
	$('#form_debate_argument').on('submit', function(e) 
	{
		var formData = new FormData($(this)[0]);

		e.preventDefault();
		
		argument	=	jQuery('#argument').val();
		doc			=	jQuery('#document').val();
		
		$('#image_preview').css("display", "none");
		$("#message").empty(); 
		$('#loading').empty(); 
		$('#image_remove').empty();
		
		if(argument=='' && doc=='')
		{
			alert('Write some argument or upload any relative doc/image');
		}
		else
		{
			jQuery.ajax(
			{
				url		: 'ajax_forall.php?type=addargumentondebate',
				type	: 'POST',
				data	: formData,
				async	: false,
				success: function(output)
				{
					jQuery('#title').val('');
					jQuery('#argument').val('');
					jQuery('#document').val('');
					
					if(output=='added')
					{
						debate_argu_bar();
					}
					if(output=='imageinvalid')
					{
						alert('Please upload jpg and png format only and size should not be more than 500 kb');
					}
					if(output=='bug')
					{
						alert('there are some issues');
					}
				},
				cache		: false,
				contentType	: false,
				processData	: false
			});
		}
    });
	
	/* Add Invitation for Colleague - On Debate */
	$('#form_deabte_invite_colleague').on('submit', function(e) 
	{
		var formData = new FormData($(this)[0]);

		e.preventDefault();
		
		colleague_id = $("input[name=colleague_id]:checked").map(
		function () {return this.value;}
		).get().join(",");
		
		
		if(colleague_id=='')
		{
			alert('please choose at least one colleague for invite');
		}
		else
		{
			var ids = colleague_id.split(",");

			if(ids.length > 2)
			{
				alert('Invite Colleagues on Debate - Maximum 1');
			}
			else
			{
				debateid	=	jQuery('#finaldebateid').val();
				
				jQuery.ajax(
				{
					type	: 'POST',
					url		: 'ajax_forall.php',
					data	: 
					{
						type			:	'invitecolleagueondebate',
						debateid 		:	debateid ,
						colleague_id 	:	colleague_id   
					},
					beforeSend:function()
					{
						//$(".loader-box").show();
					},
					success: function(output)
					{
						if(output!='added')
						{
							alert(output);
						}
						else
						{
							window.location.href = 'single-debate-'+debateid+'.html';
						}
					}
				});
			}
		}
    });
	
});

$(document).delegate('form', 'submit', function(event) 
{
    var formtype 	= $(this).attr('form-type');
	var formid	 	= $(this).attr('id');
	
    /* Add Comment on Entity */
	if(formtype=='form_entities_comment')
	{
		var entityid 	= 	$(this).attr('form-entity');
		var message		=	jQuery('#comment_'+entityid).val();
	
		event.preventDefault();
		
		jQuery.ajax(
		{
			type	: 'POST',
			url		: 'ajax_forall.php',
			data	: 
			{
				type		:	'addentitycomment' ,
				entityid 	:	entityid  , 
				message 	:	message 
			},
			beforeSend:function()
			{
				//$(".loader-box").show();
			},
			success: function(output)
			{
				outputs = output.split('***');

				if(outputs[0]=='added')
				{
					jQuery('.textarea').css('height','30px');

					jQuery('#comment_'+entityid).val('');
					totalcomment = parseInt(jQuery('#DivEntityTotalComment_'+entityid).html());
					jQuery('#DivEntityTotalComment_'+entityid).html(totalcomment+1);
					jQuery('#DivEntityComment_'+entityid).prepend(outputs[1]);
				}
				else
				{
					jQuery('#comment_'+entityid).val('');
					alert('there are some issues');
				}
			}
		});
	}
	
	 /* Add Solution on Entity */
	if(formtype=='form_entities_solution')
	{
		var entityid 	= 	$(this).attr('form-entity');
		var message		=	jQuery('#solution_'+entityid).val();
	
		event.preventDefault();
		
		jQuery.ajax(
		{
			type	: 'POST',
			url		: 'ajax_forall.php',
			data	: 
			{
				type		:	'addentitysolution' ,
				entityid 	:	entityid  , 
				message 	:	message 
			},
			beforeSend:function()
			{
				//$(".loader-box").show();
			},
			success: function(output)
			{
				outputs = output.split('***');
				
				if(outputs[0]=='added')
				{
					jQuery('.textarea').css('height','30px');
					
					jQuery('#solution_'+entityid).val('');
					totalcomment = parseInt(jQuery('#DivEntityTotalSolution_'+entityid).html());
					jQuery('#DivEntityTotalSolution_'+entityid).html(totalcomment+1);
					jQuery('#DivEntitySolution_'+entityid).append(outputs[1]);
				}
				else
				{
					jQuery('#solution_'+entityid).val('');
					alert('there are some issues');
				}
			}
		});
	}
	
	/* Add Rating on Demand */
	if(formtype=='dashboard_ratingd')
	{
		var formData = new FormData($(this)[0]);
		
		var ondemandid 		= 	$(this).attr('form-ondemand');

		event.preventDefault();
		
		jQuery.ajax(
		{
			url		: 'ajax_forall.php?type=addondemandrating&ondemandid='+ondemandid,
			type	: 'POST',
			data	: formData,
			async	: false,
			beforeSend:function()
			{
				//$(".loader-box").show();
			},
			success: function(output)
			{
				outputs = output.split('***');

				if(outputs[0]=='added')
				{
					jQuery('#DivRate'+ondemandid).html(outputs[1]);
				}
				else
				{
					alert('there are some issues');
				}
			},
			cache		: false,
			contentType	: false,
			processData	: false
		});
	}
	
	/* Share on Entity [Video] */
	if(formtype=='form_entities_share')
	{
		var entityid 		= 	$(this).attr('form-entity');
		var actualentityid 	= 	$(this).attr('form-actualentity');
		
		jQuery('#form_entities_share_'+actualentityid).html('Wait...');
		//jQuery('#videosharepopup_container_'+actualentityid).html('Wait...');
		
		event.preventDefault();
		
		jQuery.ajax(
		{
			type	: 'POST',
			url		: 'ajax_forall.php',
			data	: 
			{
				type		:	'addshareentity' ,
				entityid 	:	entityid 
			},
			beforeSend:function()
			{
				//$(".loader-box").show();
			},
			success: function(output)
			{
				outputs = output.split('***');

				if(outputs[0]=='added')
				{
					//jQuery('#videosharepopup_container_'+actualentityid).html(outputs[1]);
					jQuery('#form_entities_share_'+actualentityid).html(outputs[1]);
				}
				else
				{
					alert('there are some issues');
				}
			}
		});
	}
    
});





function LawyerProfessionalForm()
{
	license		=	jQuery('#license').val();
	experience	=	jQuery('#experience').val();
	expertise	=	jQuery('#expertise').val();
	pincode		=	jQuery('#pincode').val();
	
	event.preventDefault();
		
	jQuery.ajax(
	{
		type	: 'POST',
		url		: 'ajax_forall.php',
		data	: 
		{
			type		:	'checkpincode' ,
			pincode 	:	pincode 
		},
		beforeSend:function()
		{
			//$(".loader-box").show();
		},
		success: function(output)
		{
			outputs = output.split('***');
			
			if(outputs[0]=='added')
			{
				jQuery('#comment_'+entityid).val('');
				totalcomment = parseInt(jQuery('#DivEntityTotalComment_'+entityid).html());
				jQuery('#DivEntityTotalComment_'+entityid).html(totalcomment+1);
				jQuery('#DivEntityComment_'+entityid).append(outputs[1]);
			}
			else
			{
				jQuery('#comment_'+entityid).val('');
				alert('there are some issues');
			}
		}
	});
	
}

function checkTextareaForm(e,inputid)
{
	var unicode=e.charCode? e.charCode : e.keyCode
	if (unicode==13)	
	{	
		formid = jQuery('#'+inputid).attr('data-from-id');
		jQuery('#'+formid).submit();
	}
	else
	{
		//return false;
	}
}

function EntityAppreciation(entityid)
{
	jQuery.ajax(
	{
		type	: 'POST',
		url		: 'ajax_forall.php',
		data	: 
		{
			type		:	'entityappreciation' ,
			entityid 	:	entityid
		},
		beforeSend:function()
		{
			//$(".loader-box").show();
		},
		success: function(output)
		{
			outputs = output.split('***');
			
			if(outputs[0]=='added')
			{
				jQuery('#DivEntityLike_'+entityid).html(outputs[1]);
			}
			else
			{
				alert('there are some issues');
			}
		}
	});
}

function EntitySolutionAppreciation(entityid,solutionid)
{
	jQuery.ajax(
	{
		type	: 'POST',
		url		: 'ajax_forall.php',
		data	: 
		{
			type		:	'entitysolutionappreciation' ,
			entityid 	:	entityid ,
			solutionid 	:	solutionid
		},
		beforeSend:function()
		{
			//$(".loader-box").show();
		},
		success: function(output)
		{
			outputs = output.split('***');
			
			if(outputs[0]=='added')
			{
				jQuery('#DivEntitySolutionLike_'+entityid+'_'+solutionid).html(outputs[1]);
			}
			else
			{
				alert('there are some issues');
			}
		}
	});
}

function EntityCommentAppreciation(entityid,commentid)
{
	jQuery.ajax(
	{
		type	: 'POST',
		url		: 'ajax_forall.php',
		data	: 
		{
			type		:	'entitycommentappreciation' ,
			entityid 	:	entityid ,
			commentid 	:	commentid
		},
		beforeSend:function()
		{
			//$(".loader-box").show();
		},
		success: function(output)
		{
			outputs = output.split('***');
			
			if(outputs[0]=='added')
			{
				jQuery('#DivEntityCommentLike_'+entityid+'_'+commentid).html(outputs[1]);
			}
			else
			{
				alert('there are some issues');
			}
		}
	});
}


/*  Form Validation Rules & Messages */

function onKeyPressValidation(e,fieldname,fieldvalue)
{
	rules 		= 	validationRule();
	messages 	= 	validationMessage();

	jQuery('#'+fieldname+'-error').html('');
	
	/* For Required */
	if(rules[fieldname]['required']==true)
	{
		if(fieldvalue=='')
		{
			jQuery('#'+fieldname+'-error').html(messages[fieldname]['required']);
			return false;
		}
	}
	
	/* For Minimum Length */
	if(rules[fieldname]['minlength']==true)
	{
		if(fieldvalue.length<rules[fieldname]['minlengthval'])
		{
			jQuery('#'+fieldname+'-error').html(messages[fieldname]['minlength']);
			return false;
		}
	}
	
	/* For Length */
	if(rules[fieldname]['length']==true)
	{
		if(fieldvalue.length!=rules[fieldname]['lengthval'])
		{
			jQuery('#'+fieldname+'-error').html(messages[fieldname]['length']);
			return false;
		}
	}
	
	/* For Format */
	if(rules[fieldname]['format']==true)
	{
		var r = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
   		
		if(fieldvalue.match(r) == null)
		{
			jQuery('#'+fieldname+'-error').html(messages[fieldname]['format']);
			return false;
		}
	}
	
	/* For Equal To */
	if(rules[fieldname]['equalTo']==true)
	{
		if(fieldname=='reg_repasswordd')
		{
			if(jQuery('#reg_passwordd').val()!=fieldvalue)
			{
				jQuery('#'+fieldname+'-error').html(messages[fieldname]['equalTo']);
				return false;
			}
		}
		
		if(fieldname=='profile_repasswordd')
		{
			if(jQuery('#profile_passwordd').val()!=fieldvalue)
			{
				jQuery('#'+fieldname+'-error').html(messages[fieldname]['equalTo']);
				return false;
			}
		}
	}
	
	jQuery('#'+fieldname+'-error').html('');
}

function onClickValidation(e,fieldname)
{
	rules 		= 	validationRule();
	messages 	= 	validationMessage();

	/* For Required */
	if(rules[fieldname]['required']==true)
	{
		if(jQuery('#'+fieldname).attr('type')=='radio')
		{
			if(!$('input[id='+fieldname+']:checked').val())
			{
				jQuery('#'+fieldname+'-error').html(messages[fieldname]['required']);
				return false;
			}
		}	
	}
	
	jQuery('#'+fieldname+'-error').html('');
}

function onChangeValidation(e,fieldname)
{
	rules 		= 	validationRule();
	messages 	= 	validationMessage();

	/* For Required */
	if(rules[fieldname]['required']==true)
	{
		fieldvalue = jQuery('#'+fieldname).val();
		
		if(fieldvalue=='')
		{
			jQuery('#'+fieldname+'-error').html(messages[fieldname]['required']);
			return false;
		}
	}
	
	jQuery('#'+fieldname+'-error').html('');
}

function validationRule()
{
	var rules = 
	{
		firstname		:	
						{
							required		: 	true,
							alphanumeric	: 	true,
							minlength		: 	true,
							minlengthval	: 	3,
						}, 
						
		lastname		:	
						{
							required		: 	true,
							alphanumeric	: 	true,
							minlength		: 	true ,
							minlengthval	: 	3,
						},	
						
		contactno		:	
						{
							required		: 	true,
							numeric			: 	true,
							length			: 	true,
							lengthval		: 	10,
						}, 				
						
		gender			:	
						{
							required		: 	true,
						}, 	
		
		reg_emailid		:	
						{
							required		: 	true,
							format			: 	true
						}, 
										
		reg_passwordd	:	
						{
							required		: 	true,
							minlength		: 	true,
							minlengthval	: 	5,
						}, 
						
		reg_repasswordd	:	
						{
							required		: 	true,
							minlength		: 	true,
							minlengthval	: 	5,
							equalTo			:	true
						},
		
		profile_oldpassword	:	
						{
							required		: 	true
						},
		
		profile_passwordd	:	
						{
							required		: 	true,
							minlength		: 	true,
							minlengthval	: 	5,
						}, 
						
		profile_repasswordd	:	
						{
							required		: 	true,
							equalTo			:	true
						},	
						
		license	:	
						{
							required		: 	true,
						},	
						
		experience	:	
						{
							required		: 	true,
						},
		
		bankname	:	
						{
							required		: 	true,
						},
						

		accountno	:	
						{
							required		: 	true,
						},
		
		ifsccode	:	
						{
							required		: 	true,
						},
						
		panno	:	
						{
							required		: 	true,
						},
		
		beneficiaryname	:	
						{
							required		: 	true,
						}								
	};
	
	return rules;
}

function validationMessage()
{
	var messages = 
	{
		firstname		:	
						{
							required		: 	"Please enter your firstname",
							alphanumeric	: 	"Your firstname should be alphanumeric",
							minlength		: 	"Your firstname must be at least 3 characters long",
						}, 
						
		lastname		:	
						{
							required		: 	"Please enter your lastname",
							alphanumeric	: 	"Your lastname should be alphanumeric",
							minlength		: 	"Your lastname must be at least 3 characters long" ,
						},
						
		contactno		:	
						{
							required		: 	"Please enter your contact number",
							numeric			: 	"Your contact number should be numeric",
							length			: 	"Your contact number must be 10 digit long",
						}, 
						
		gender			:	
						{
							required		: 	"Please choose gender",
						}, 
						
		reg_emailid		:	
						{
							required		: 	"Please enter your email id",
							format			: 	"Your email id should be valid",
						},
						
		reg_passwordd	:	
						{
							required		: 	"Please enter your password",
							minlength		: 	"Your password must be at least 5 characters long",
						}, 
						
		reg_repasswordd	:	
						{
							required		: 	"Please enter your re password",
							minlength		: 	"Your re password must be at least 5 characters long" ,
							equalTo			: 	"Please enter the same password as above" ,
						},
						
		profile_oldpassword:	
						{
							required		: 	"Please enter your old password",
						},
		
		profile_passwordd	:	
						{
							required		: 	"Please enter your new password",
							minlength		: 	"Your new password must be at least 5 characters long",
						}, 
						
		profile_repasswordd	:	
						{
							required		: 	"Please enter your confirm password",
							equalTo			: 	"Please enter the same password as above" ,
						},
						
		license	:	
						{
							required		: 	"Please enter your license no",
						},
						
		experience	:	
						{
							required		: 	"Please choose your experience",
						},
						
		expertise	:	
						{
							required		: 	"Please choose your expertise",
						},
						
		bankname	:	
						{
							required		: 	"Please enter your bank name",
						},
						
		accountno	:	
						{
							required		: 	"Please enter your account no",
						},
		
		ifsccode	:	
						{
							required		: 	"Please enter your ifsc code",
						},
						
		panno	:	
						{
							required		: 	"Please enter your pan no",
						},
		
		beneficiaryname	:	
						{
							required		: 	"Please enter your beneficiary name",
						}
																																										
	};
	
	return messages;
}


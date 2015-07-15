Template.appChat.helpers({

	messages : function ()
	{
		return Messages.find({},{sort: {createdAt: -1}, limit: 10})
	}
});



Template.appChat.events({

	"click .btnDelete": function (event)
	{
		Messages.remove(this._id);
		return false; 
	},
	"keyup .txtText": function (event){

		if (event.keyCode == 13) {
			Messages.insert({
				SN: $(".txtSN").val(),
				C: $(".txtC").val(),
				name: $(".txtName").val(),
				DOB: $(".txtDOB").val(),
				CS: $(".txtCS").val(),
				G: $(".txtG").val(),
				BT: $(".txtBT").val(),
				H: $(".txtH").val(),
				W: $(".txtW").val(),
				text: $(".txtText").val(),
				createdAt: new Date()

			});
			text: $(".txtText").val("");
			text: $(".txtText").focus();
		}

		return false;
	}
});
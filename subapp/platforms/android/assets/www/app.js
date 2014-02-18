
requirejs.config({
	urlArgs: "bust=" + (new Date()).getTime(),  
});

require(['libs/text!header.html', 'libs/text!home.html', 'libs/text!footer.html', 'libs/text!locations.html'], function (headerTpl, homeTpl, footerTpl, locationsTpl) {
	
	var ApplicationRouter = Backbone.Router.extend({
		history : [],
		routes	: {
			""				: "home",
			'locations' 	: 'locations'
		},
		initialize: function() {
			this.headerView 		= new HeaderView();
			this.headerView.router 	= this;
			this.headerView.render();
			this.footerView 		= new FooterView();
			this.footerView.render();
		},
		home: function() {
			this.homeView 			= new HomeView();
			this.homeView.router 	= this;
			this.homeView.render();
		},
		locations : function() {
			this.locationsView = new LocationView();
			this.locationsView.render();
		}
	});


	LocationView = Backbone.View.extend({
		el 			: "#content",
		template 	: locationsTpl,
		events 		: {
			"click .btn-disaster-type" : 'openDisasterModal'
		},
		openDisasterModal : function() {
			console.log('test');
			$("#disaster-type-modal").modal('show');
		},
		initialize 	: function() {

		},
		render 		: function() {
			$(this.el).html(_.template(this.template));
			$("#fromPicker").datetimepicker();
			$("#toPicker").datetimepicker();

			$("#fromPicker").on('change.dp', function(e) {
				$(this).data("DateTimePicker").hide();
			});

			$("#toPicker").on('change.dp', function(e) {
				$(this).data('DateTimePicker').hide();
			});

			 $("#fromPicker").on("change.dp",function (e) {
               $('#toPicker').data("DateTimePicker").setStartDate(e.date);
            });
            $("#toPicker").on("change.dp",function (e) {
               $('#fromPicker').data("DateTimePicker").setEndDate(e.date);
            });
		}
	});

	HeaderView = Backbone.View.extend({
		el: "#header",
		templateFileName: "header.html",
		template: headerTpl,
		events : {
			"click .openOptions" 	: 'toggleMenu',
			'click .btn-location' 	: 'openLocation'
		},
		openLocation: function() {
			this.router.navigate("#locations", {trigger: true});
			closeMenu($('.slide-menu'));
		},
		initialize: function() {
			document.addEventListener('deviceready', onDR, false);		
			// document.addEventListener("deviceready", Siminov.initialize, false);
		},
		render: function() {
			$(this.el).html(_.template(this.template));
		},
		toggleMenu : function() {
			toggleMenu();
		}
	});

	FooterView = Backbone.View.extend({
		el: "#footer",
		template: footerTpl,
		render: function() {
			this.$el.html(_.template(this.template));
		}
	})
	HomeView = Backbone.View.extend({
		el: "#content",
		// template: "home.html",
		template: homeTpl,
		events : {
			"click .btn-location" : 'openLocation',
		},
		openLocation : function() {
			this.router.navigate("#locations", {trigger : true});
			closeMenu($('slide-menu'));
		},
		initialize: function() {

		},
		render: function() {
			$(this.el).html(_.template(this.template));
		}
	});
	
	
	app = new ApplicationRouter();
	Backbone.history.start();	
});
function toggleMenu() {
	var slideMenu = $('.slide-menu');
	if(slideMenu.data("toggle") == "closed") {
		openMenu(slideMenu);
		slideMenu.data("toggle","open");
	}else {
		closeMenu(slideMenu);
		slideMenu.data("toggle","closed");
	}
}

function openMenu(slideMenu) {
		slideMenu.animate({
			"left" : "0px"
		}, 200);
}

function closeMenu(slideMenu) {
	slideMenu.animate({
			"left" : "-80%"
		}, 200);
}

function onDR() {
	document.addEventListener("backbutton", backKeyDown, true);
	document.addEventListener("menubutton", onMenuKeyDown, true);
}


function onMenuKeyDown() {
	toggleMenu();

}
function backKeyDown() {
	if($('.slide-menu').data('toggle') == 'closed') {
		app.navigate('#', {trigger : true});
	}else {
		closeMenu($('slide-menu'));
	}
}
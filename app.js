(function(){
	var app = angular.module('store',[]);

	app.controller('StoreController',function(){
		this.product = gem;
	});
	app.controller('PanelController',function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		}
	});
	app.controller('ReviewController',function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review)
			this.review = {};
		};
	});
	app.directive('productTitle',function(){
		return{
			restrict: 'E',
			templateUrl: 'product-title.html'
		};
	});

	var gem = [
		{
			name: "Dodecahedron",
			price: 2.95,
			description: 'Description for Dodecahedron Gem.',
			images:[
				{
					full: 'http://ecx.images-amazon.com/images/I/41dWBw25W4L._SY300_.jpg'
				}
			],
			reviews:[
				{
					stars: 5,
					body: 'This is a very nice product.',
					author: 'iam@happy.com'
				},
				{
					stars: 4,
					body: 'This is an okay product.',
					author: 'weare@happy.com'
				}
			],
			canPurchase: true,
			soldOut: false,
		},
		{
			name: "Pentagonal Gem",
			price: 5.95,
			description: 'Description for Pentagonal Gem.',
			images:[
				{
					full: 'http://www.rockhounds.com/tucson_show/reports/denver98/topaz1.jpg'
				}
			],
			reviews:[
				{
					stars: 3,
					body: 'This is a very nice product.',
					author: 'iam@veryhappy.com'
				},
				{
					stars: 4,
					body: 'This is an okay product.',
					author: 'weare@happiest.com'
				}
			],
			canPurchase: false,
			soldOut: false,
		},
	];
})();
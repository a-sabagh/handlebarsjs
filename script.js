let wrapperNode = document.getElementById("post_archive").innerHTML;
let postItem = document.getElementById("post_item").innerHTML;
let collection = {
	title:"Post Archive",
	description:"category all posts",
	posts:[
		{
			title: "hello world",
			content: "this is a first post in wordpress",
			sticky: true,
		},
		{
			title: "Array",
			content: "array is data structure for store multipel data from same type", 
			sticky: false,
		},
	]
}
let template = Handlebars.compile(wrapperNode);
Handlebars.registerPartial('postItem',Handlebars.compile(postItem));
let result = template(collection);
document.getElementById("main_content").innerHTML = result;

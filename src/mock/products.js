const Products = [
	{
		id: 1,
		name: "Nike Air Force 1 '07",
		category: "Men's Shoes",
		price: 7495,
		images: [
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/33533fe2-1157-4001-896e-1803b30659c8/air-force-1-07-shoes-WrLlWX.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a0a300da-2e16-4483-ba64-9815cf0598ac/air-force-1-07-shoes-WrLlWX.png",
		],
		description:
			"The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
		labels: ["Just In", "Highly Rated"],
		color: "White/White",
		style: "CW2288-111",
	},
	{
		id: 2,
		name: "Air Jordan 1 Retro High OG",
		category: "Men's Shoes",
		price: 16995,
		images: [
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1c2dfd0c-cd48-46c4-829a-4b5d93f27f83/air-jordan-1-retro-high-og-shoes-Pz6fZ9.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/71fcee3e-07d3-4cbf-bf2f-b20dbc9de658/air-jordan-1-retro-high-og-shoes-Pz6fZ9.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0b9cf205-0f71-4911-9b48-cef54cd08021/air-jordan-1-retro-high-og-shoes-Pz6fZ9.png",
		],
		description:
			"The Air Jordan 1 Retro High remakes the classic sneaker, giving you a fresh look with a familiar feel. Premium materials with new colours and textures give modern expression to an all-time favourite.",
		labels: ["Just In", "Highly Rated"],
		color: "Black/White/Lucky Green",
		style: "DZ5485-031",
	},
	{
		id: 3,
		name: "Air Jordan 11 Retro",
		category: "Men's Shoes",
		price: 20295,
		images: [
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8dae38f3-b4c4-4752-bdea-b32ac7d937c8/air-jordan-11-retro-shoes-gMjfzz.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/84d070dc-9ecc-4e2c-8b85-38d91f6bad85/air-jordan-11-retro-shoes-gMjfzz.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8fce10cd-312c-4d6e-9a6d-47027cddf397/air-jordan-11-retro-shoes-gMjfzz.png",
		],
		description:
			"Let's cut to the chase—the AJ11 is all-time. MJ won 72 games and a title while wearing 'em. Now, the icon returns in classic colours. From its slick patent leather mudguard to the frosted outsole, this Tinker Hatfield design brings the off-court allure. And for the final touch? Full-length Air cushioning is the cherry on top (er, bottom).",
		labels: ["Just In", "Highly Rated"],
		color: "White/Black/Varsity Red",
		style: "CT8012-116",
	},
	{
		id: 4,
		name: "Nike Air Max LTD 3",
		category: "Men's Shoes",
		price: 10995,
		images: [
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c6d8acef-cdde-4b49-b50c-e61a4c226218/air-max-ltd-3-shoe-3X870s.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fd754708-faae-4dc9-ab35-bb368a041b89/air-max-ltd-3-shoe-3X870s.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/028a2523-57f8-4c84-8356-0a6d965aebea/air-max-ltd-3-shoe-3X870s.png",
		],
		description:
			"The Nike Air Max LTD 3 gives you comfort with a real and synthetic leather upper and cushioning with a Max Air unit under the heel. Flex grooves in the outsole promote full range of motion for your feet.",
		labels: ["Just In", "Highly Rated"],
		color: "White/Black/University Red",
		style: "BV1171-100",
	},
	{
		id: 5,
		name: "Nike Dunk High Retro",
		category: "Men's Shoes",
		price: 9295,
		images: [
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5e7687f1-c13e-4bac-8ffa-a6f863ae9157/dunk-high-retro-shoe-DdRmMZ.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ac4c2d4d-06fc-4e92-9fec-c78cbb110c5f/dunk-high-retro-shoe-DdRmMZ.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/811b9857-d626-46d0-b2ff-7a8858717fc6/dunk-high-retro-shoe-DdRmMZ.png",
		],
		description:
			"Created for the hardwood but taken to the streets, the '80s basketball icon returns with perfectly sheened overlays and original university colours. With its classic hoops design, the Nike Dunk High Retro channels '80s vintage back onto the streets while its padded, high-top collar adds an old-school look rooted in comfort.",
		labels: ["Just In", "Highly Rated"],
		color: "White/Total Orange/Black",
		style: "DD1399-105",
	},
	{
		id: 6,
		name: "Nike Air Max 270",
		category: "Men's Shoes",
		price: 14995,
		images: [
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/08de128a-b6c9-4543-8339-cdf0281ab95a/air-max-270-shoes-g3G7Fd.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dfedefad-22d8-4202-9bb3-e986b188cc9e/air-max-270-shoes-g3G7Fd.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ff29efe9-69f4-4047-9aa3-b944183953f0/air-max-270-shoes-g3G7Fd.png",
		],
		description:
			"Legendary Air gets lifted. Our first lifestyle Air Max brings you style, comfort and a whole lot of Air. An extra-large window in the heel lets you show off one of our greatest innovations while experiencing plush cushioning. Add a lightweight upper, low-cut collar and fresh pops of colour and you've got the perfect kicks for everyday fun.",
		labels: ["Just In", "Highly Rated"],
		color: "White/University Blue/Deep Royal Blue/White",
		style: "FJ4230-100",
	},
	{
		id: 7,
		name: "Air Jordan 13 Retro",
		category: "Men's Shoes",
		price: 16595,
		images: [
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/00d5c20e-8eec-48ac-94e1-384b8bfa5cb2/air-jordan-13-retro-shoes-xcK6vg.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/81d93688-a5f2-4872-9db0-b2550302b57d/air-jordan-13-retro-shoes-xcK6vg.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/866bff0e-2091-4dbb-8653-ec0102941a2e/air-jordan-13-retro-shoes-xcK6vg.png",
		],
		description:
			"Michael Jordan earned the nickname 'Black Cat' for his superior athletic ability and prowess at both ends of the court. That nickname became the muse for the Tinker Hatfield-designed Air Jordan 13. Featuring a panther-paw-like sole and 'cat eye' holograph, Michael rode the mid-top shoe all the way to his 6th ring in '98, the last triumph of his legendary career. The Air Jordan 13 Retro brings back the stealthy, shrouded design with a fresh mix of colours and textures.",
		labels: ["Just In", "Highly Rated"],
		color: "Black/Flint Grey/White/University Red",
		style: "DJ5982-060",
	},
	{
		id: 8,
		name: "Nike Air Max TW",
		category: "Men's Shoes",
		price: 14995,
		images: [
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/568bf1b3-9ff9-4dfd-bc47-b576a6b3b5ae/air-max-tw-shoes-DhpWvV.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/70f2c6e7-c33a-4663-b63e-407a210030f3/air-max-tw-shoes-DhpWvV.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8214b2fc-df5b-4766-9bb4-2e044931c7b2/air-max-tw-shoes-DhpWvV.png",
		],
		description:
			"So you're in love with the classic look of the '90s, but you've got a thing for today's fast-paced culture. Meet the Air Max TW. Ready to highlight any outfit, its lightweight upper pairs angular and organic lines to create an entrancing haptic effect. The contrasting colourways make it easy to style. And if you're ready for the next step, the 5 windows underfoot deliver a modern edge to visible Nike Air cushioning.",
		labels: ["Just In", "Highly Rated"],
		color: "Flat Pewter/White/Black/Obsidian",
		style: "DV7721-001",
	},
	{
		id: 9,
		name: "Air Jordan 1 Mid SE",
		category: "Men's Shoes",
		price: 12295,
		images: [
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ca113e5f-2165-476a-8dcf-ce7a0d85356c/air-jordan-1-mid-se-shoes-CQ6f9G.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/266f9922-ec59-41e3-9b36-85c5fab5c1ec/air-jordan-1-mid-se-shoes-CQ6f9G.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0911dfdd-0bbd-41e2-aa3c-576b77cbf788/air-jordan-1-mid-se-shoes-CQ6f9G.png",
		],
		description:
			"Every time the AJ1 gets a remake, you get the classic sneaker in new colours and textures for an exciting, revamped look but with all the familiar comforts you know. Premium materials and accents give modern expression to an all-time favourite.",
		labels: ["Just In", "Highly Rated"],
		color: "White/Black/Ice Blue",
		style: "DV1308-104",
	},
	{
		id: 10,
		name: "Nike Air Max 90 SE",
		category: "Men's Shoes",
		price: 12795,
		images: [
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/67cf2b36-73ef-443a-8e99-a496eff525d6/air-max-90-se-shoes-7dKD8F.png",
			"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5,q_80/26fd032c-f377-4d9e-864e-2b7fe6ba883f/air-max-90-se-shoes-7dKD8F.png",
			"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5,q_80/ff15c794-e8bf-41d5-a2c1-b44aa9ef7990/air-max-90-se-shoes-7dKD8F.png",
		],
		description:
			"Step into the history books. Paying homage to Frank Rudy, the man who created the coveted cornerstone of cushioning—Air—these sneakers celebrate his legacy with fun details. From the release year proudly stamped on the Air unit to the see-through 'Air pocket' heel logo, striking visuals deliver a lesson in comfort.",
		labels: ["Just In", "Highly Rated"],
		color: "Summit White/Sesame/Lemon Wash/Safety Orange",
		style: "FB4315-100",
	},
	{
		id: 11,
		name: "Tatum 1 'St. Louis' PF",
		category: "Basketball Shoes",
		price: 10795,
		images: [
			"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/42cba1bc-3a7b-44df-a026-3c416d1d80b2/tatum-1-st-louis-pf-basketball-shoes-LDFvBJ.png",
			"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/d8072761-321c-4ef1-bd5c-5c7806380cac/tatum-1-st-louis-pf-basketball-shoes-LDFvBJ.png",
			"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/5c8ab217-cfb9-4a61-8a76-0c0a7574ef53/tatum-1-st-louis-pf-basketball-shoes-LDFvBJ.png",
		],
		description:
			"'Everybody who knows me knows that my love for St. Louis runs deep … '' So deep that we made a special-edition colourway to celebrate Jay's hometown. The bold combo of red and white will make anyone from The Lou do a double-take. Fleur-de-lis designs on the heel and insole nod to the city's flag. And Archer Avenue? Well, that's where it all started for Jayson. Continue the journey by honouring his roots in the Tatum 1 'St. Louis'.",
		labels: ["Just In", "Highly Rated"],
		color: "White/University Blue/University Gold/University Red",
		style: "DX6732-100",
	},
	{
		id: 12,
		name: "Jordan Retro 6 G NRG",
		category: "Men's Golf Shoes",
		price: 19695,
		images: [
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/81c57e35-2f71-467d-89df-3b73fc8c3608/jordan-retro-6-g-nrg-golf-shoes-wrVjdt.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/311c7307-7327-432b-b0d4-da4ede57c9a5/jordan-retro-6-g-nrg-golf-shoes-wrVjdt.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/504e559a-8cca-488b-87fe-2ceea4789367/jordan-retro-6-g-nrg-golf-shoes-wrVjdt.png",
		],
		description:
			"Feel unbeatable from the tee box to the final putt in a design is pure early MJ: speed, class and laden with true early '90s touches like visible Air and a translucent plastic sole that continue to stand the test of time. This model fuses the strut of 1st MJ's championship with some of our best golf technology, helping you make a statement of confidence when it comes time to tame the course. With its deep, rich red accents and creamy white tones, this version celebrates MJ's favourite beverage, 1 that goes down smooth with a big plate of barbecue and a side of American cobbler while basking in warm-hearted hospitality.",
		labels: ["Just In", "Highly Rated"],
		color: "White/Bordeaux/White",
		style: "DV6796-116",
	},
	{
		id: 13,
		name: "Jordan Nu Retro 1 Low",
		category: "Men's Shoes",
		price: 9195,
		images: [
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb1660cd-dddb-446f-8b8f-7790f4988e49/jordan-nu-retro-1-low-shoes-8294mJ.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3b0e6149-f8d1-4a76-9882-6b594f6a2936/jordan-nu-retro-1-low-shoes-8294mJ.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5cdeaa60-e0a6-42c8-8af2-13898bd91b3d/jordan-nu-retro-1-low-shoes-8294mJ.png",
		],
		description:
			"Twenty years later and these low tops are back. Inspired by the original Wings logo and design of the Jordan 1, these all-day, everyday shoes are ready for whatever. Rock 'em with some baggy jeans, skate in 'em or just look fly—it's up to you. Smooth leather uppers and a big embossed logo will help you stand out whether you're dressed up or down.",
		labels: ["Just In", "Highly Rated"],
		color: "White/Light Smoke Grey/Varsity Red/Black",
		style: "DV5141-106",
	},
	{
		id: 14,
		name: "Air Jordan 6 Retro",
		category: "Men's Shoes",
		price: 18395,
		images: [
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b56de370-c5b8-43d3-bbd1-e9c44f4ed247/air-jordan-6-retro-shoes-fjwJgW.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4b5ae472-ff1e-4bfd-a47c-d46f73665a9e/air-jordan-6-retro-shoes-fjwJgW.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/285d16bf-dba4-4726-a62f-80b79f888fc3/air-jordan-6-retro-shoes-fjwJgW.png",
		],
		description:
			"Championship vibes. MJ's 6th signature shoe debuted in '91—the year he earned his first ring—making the AJ6 an instant icon. This fresh take on the series-clinching classic has a sleek upper made from synthetic leather. Metallic accents add extra off-court flair, making these kicks your outfit MVPs.",
		labels: ["Just In", "Highly Rated"],
		color: "Black/Black/Metallic Silver",
		style: "DX2836-001",
	},
	{
		id: 15,
		name: "Jordan Stay Loyal 2",
		category: "Men's Shoes",
		price: 10295,
		images: [
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/87ed4c68-acd2-403a-9323-a31f4e96b7de/jordan-stay-loyal-2-shoes-sDkgDk.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6da5dd01-ef28-46ce-9371-050f6273d730/jordan-stay-loyal-2-shoes-sDkgDk.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/210093af-3486-4e2d-95ea-91e2078be851/jordan-stay-loyal-2-shoes-sDkgDk.png",
		],
		description:
			"Inspired by generations of Js, these kicks are a collage of cool. Design details recall decades of legendary shoes while paying homage to MJs storied career. Breathable mesh, sturdy leather and lightweight Air cushioning in the heel make it that much easier to walk in the footsteps of greatness.",
		labels: ["Just In", "Highly Rated"],
		color: "White/White/Pure Platinum",
		style: "DQ8401-102",
	},
	{
		id: 16,
		name: "Zion 2 PF",
		category: "Men's Basketball Shoes",
		price: 10795,
		images: [
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/21c76718-37e5-472f-b4b6-59dcba9fe038/zion-2-pf-basketball-shoes-XCTSr4.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4bdbe623-4cbf-422a-84b3-13bd08b17a20/zion-2-pf-basketball-shoes-XCTSr4.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/97b9d264-3256-4f07-bad7-8cb5177d555e/zion-2-pf-basketball-shoes-XCTSr4.png",
		],
		description:
			"Channel new levels of speed and power in shoes designed for Zion and built for ballers at any level. An adjustable strap up top helps lock your foot in while a firm midsole supports high-paced play. Make this your number 1 pick for the court.",
		labels: ["Just In", "Highly Rated"],
		color: "University Red/Bright Crimson/Gum Yellow/Black",
		style: "DO9072-600",
	},
	{
		id: 17,
		name: "Air Jordan XXXVII Low PF",
		category: "Men's Basketball Shoes",
		price: 16295,
		images: [
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ba98ed6b-72f7-4ba8-81a1-bb336fad67f5/air-jordan-xxxvii-low-pf-basketball-shoes-7z7ltC.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cf132716-ebc3-4bf0-897e-7e9c03490b1e/air-jordan-xxxvii-low-pf-basketball-shoes-7z7ltC.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f4ba14b3-febc-4e74-b2d6-c8d657087429/air-jordan-xxxvii-low-pf-basketball-shoes-7z7ltC.png",
		],
		description:
			"You've got the hops and the speed—lace up in shoes that enhance what you bring to the court. The latest AJ is all about take-offs and landings, with multiple Air units to get you off the ground. The upper is made with strong, reinforced leno-weave fabric that'll keep you contained and leave your game uncompromised. This low-top model is designed for playing on outdoor courts.",
		labels: ["Just In", "Highly Rated"],
		color: "Lapis/Black/Crimson Bliss/Saturn Gold",
		style: "DQ4123-400",
	},
	{
		id: 18,
		name: "Jordan Play",
		category: "Men's Shoes",
		price: 2995,
		images: [
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2cd71c2e-e805-4c1e-ac32-364674cff58b/jordan-play-slides-2mCjgT.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/af849ea0-8846-43a3-b8e1-8fb90bd1ddc8/jordan-play-slides-2mCjgT.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/43ce2d77-61b2-48bf-a4e4-acae5db08dfb/jordan-play-slides-2mCjgT.png",
		],
		description:
			"Get all of the underfoot support you need with these essential slides. Enjoy the cushioning of thick, lightweight foam for beach days or post-game hangouts.",
		labels: ["Just In", "Highly Rated"],
		color: "Anthracite/Black/Cool Grey/University Red",
		style: "DC9835-061",
	},
];

export default Products;

document.getElementById('generate-btn').addEventListener('click', () => {
    const preference = document.getElementById('preference').value;
    const activity = document.getElementById('activity').value;
    const budget = document.getElementById('budget').value;

    const recommendations = {
        Beach: {
            Adventure: {
                Low: [
                    "Goa's serene beaches offer a mix of adventure and relaxation. Try budget-friendly water sports like parasailing or jet skiing, explore nearby shacks serving local cuisine, and soak in the colorful sunsets that make every moment memorable. Perfect for budget-conscious travelers seeking a little thrill without spending too much!",
                    "The beaches of Goa are perfect for a low-budget adventure, offering a variety of water sports like parasailing and jet skiing. Explore local shacks and enjoy the sunset at the beach.",
                    "Varkala, Kerala offers a tranquil yet adventurous atmosphere. You can enjoy budget-friendly surfing lessons, explore local markets, and unwind with a sunset view over the cliffs.",
                    "Kanyakumari, the southernmost tip of India, offers budget-friendly options for adventure, such as boat rides to nearby islands and visits to the Vivekananda Rock Memorial."
                ],
                Medium: [
                    "Bali is a paradise for adventure seekers and nature lovers. Engage in thrilling water sports such as surfing and snorkeling, visit its iconic temples, and wander through lush rice terraces. This medium-budget destination offers an ideal balance of excitement, culture, and relaxation.",
                    "For a medium budget, Bali offers exciting adventures like surfing and snorkeling. You can also explore temples and enjoy cultural experiences while surrounded by lush scenery.",
                    "Costa Rica is a haven for adventure lovers. Engage in zip-lining, white-water rafting, and explore the rainforest, all while staying in eco-friendly accommodations.",
                    "The Canary Islands offer a balance of adventure and relaxation. Hike along volcanic trails, try windsurfing, or explore charming coastal towns at a medium-budget price."
                ],
                High: [
                    "The Maldives is the ultimate luxury escape for adventure lovers. Stay in stunning water villas, dive into crystal-clear waters teeming with marine life, and enjoy private snorkeling excursions. This destination redefines adventure and indulgence for high-budget travelers.",
                    "Luxury meets adventure in the Maldives. Stay in overwater villas, enjoy exclusive snorkeling excursions, and dive into some of the clearest waters on the planet.",
                    "The French Polynesia is the ultimate escape for those with a high budget. Explore pristine coral reefs, engage in deep-sea fishing, or embark on luxurious boat trips surrounded by clear blue waters.",
                    "Zanzibar offers exclusive luxury adventure experiences, including private boat tours, scuba diving, and luxury beach resorts with breathtaking views."
                ]
            },
            Relaxation: {
                Low: [
                    "Gokarna's tranquil beaches provide a peaceful escape from the hustle of everyday life. Perfect for budget travelers, enjoy simple beachside accommodations, serene yoga sessions, and scenic views that calm your soul.",
                    "For a peaceful and budget-friendly escape, Gokarna offers serene beaches, simple accommodations, and a peaceful atmosphere perfect for unwinding.",
                    "Pondicherry offers a blend of French colonial charm and serene beaches. Relax on its quiet shores or enjoy a peaceful yoga retreat at one of its many affordable centers.",
                    "Alleppey, Kerala, is famous for its backwaters. Experience serene houseboat cruises at an affordable price, with the calming sound of water and lush landscapes surrounding you."
                ],
                Medium: [
                    "Seychelles offers a perfect blend of comfort and pristine natural beauty. Stay in charming beachside villas, indulge in fresh seafood, and take leisurely walks along the picture-perfect beaches.",
                    "With its white sandy beaches and charming villas, Seychelles offers the perfect destination for a mid-budget relaxing vacation. Enjoy walks along stunning coastlines and fresh seafood.",
                    "The Whitsundays in Australia offer a beautiful combination of relaxation and adventure. Stay in beachfront resorts, explore Whitehaven Beach, and indulge in fresh seafood.",
                    "Zanzibar is a fantastic mid-range destination with stunning beaches, relaxing resorts, and great opportunities for water sports and exploring local culture."
                ],
                High: [
                    "Bora Bora’s overwater bungalows provide unparalleled relaxation with stunning views of turquoise waters and lush mountains. Enjoy world-class spa treatments, private dining on the beach, and luxurious amenities.",
                    "Experience the ultimate in luxury relaxation in Bora Bora, where overwater bungalows offer the perfect setting to unwind with breathtaking views and world-class amenities.",
                    "The Maldives offers ultra-luxurious resorts with private villas, world-class spas, and gourmet dining, making it the ultimate high-budget destination for relaxation.",
                    "Fiji is the ultimate island escape for luxury relaxation. Overwater bungalows, private beaches, and exclusive spa treatments await you in this tropical paradise."
                ]
            }
        },
        Mountains: {
            Adventure: {
                Low: [
                    "Himachal Pradesh is a haven for adventurers on a budget. Trek through rugged trails in places like Kasol or Triund, camp under the stars, and immerse yourself in the region's breathtaking beauty without breaking the bank. This destination is perfect for nature enthusiasts seeking affordable thrills.",
                    "Explore the rugged terrains of Himachal Pradesh for an adventurous trip on a budget. Go trekking, camp under the stars, and enjoy the natural beauty.",
                    "Spiti Valley is a lesser-known gem in the Indian Himalayas, offering budget-friendly trekking and exploration options. Camp at high-altitude locations and enjoy breathtaking views.",
                    "Nagaland offers a unique adventure with its scenic hills, tribal villages, and trekking opportunities, perfect for those on a budget looking for something off-the-beaten-path."
                ],
                Medium: [
                    "The Swiss Alps are synonymous with adventure and elegance. Explore scenic hiking trails, enjoy cable car rides with panoramic views, and savor delicious Swiss chocolate and cheese. This medium-budget destination combines natural beauty with cultural richness.",
                    "Take a trip to the Swiss Alps for a blend of adventure and comfort. Hike, take cable car rides with stunning views, and enjoy Swiss chocolates and cheese.",
                    "Queenstown, New Zealand, is the adventure capital of the world. You can bungee jump, go skydiving, or explore beautiful hiking trails amidst stunning landscapes.",
                    "Banff National Park in Canada offers a mix of skiing, snowboarding, and hiking. Enjoy breathtaking views of the mountains and pristine lakes at a medium budget."
                ],
                High: [
                    "Mount Kilimanjaro offers the adventure of a lifetime for high-budget travelers. Experience the thrill of climbing Africa's tallest peak with expert guides, stunning vistas, and a deep sense of accomplishment.",
                    "Climb Mount Kilimanjaro for the ultimate adventure. Expert guides will lead you to the top of Africa's tallest mountain, where you can experience breathtaking views and unforgettable challenges.",
                    "Everest Base Camp in Nepal offers an unparalleled adventure experience. Trek through stunning landscapes and reach the base camp for an unforgettable adventure of a lifetime.",
                    "The Rocky Mountains in Canada offer high-budget adventure experiences including guided heli-skiing, ice climbing, and exclusive outdoor experiences in pristine environments."
                ]
            },
            Relaxation: {
                Low: [
                    "The hill stations of Uttarakhand are perfect for a peaceful retreat. Explore quaint towns like Nainital or Rishikesh, enjoy serene lakeside views, and savor warm local cuisine.",
                    "Uttarakhand offers a tranquil escape for those looking for a peaceful getaway. Explore towns like Nainital, enjoy lakeside views, and indulge in warm local delicacies.",
                    "Kodaikanal is a peaceful hill station perfect for a budget-friendly retreat. Explore the lush green hills, enjoy boating on the lake, and take long walks amidst nature.",
                    "Darjeeling offers a charming hill station atmosphere with stunning views of the Kanchenjunga range. Enjoy the cool weather, and visit tea gardens and monasteries for a relaxing retreat."
                ],
                Medium: [
                    "Banff, Canada, offers a serene escape amidst majestic mountains. Stay in cozy lodges, take scenic drives through breathtaking landscapes, and enjoy leisurely hikes surrounded by natural beauty.",
                    "Banff is a serene mountain retreat offering cozy lodges and stunning landscapes. Explore scenic drives and leisurely hikes in this tranquil setting.",
                    "Shimla is a wonderful mid-budget destination with cozy resorts, scenic views, and a laid-back atmosphere. It’s perfect for a peaceful getaway amidst the hills.",
                    "The Cotswolds in England offers a relaxing countryside retreat with charming villages, peaceful walks, and cozy bed-and-breakfast accommodations."
                ],
                High: [
                    "Aspen’s luxurious chalets redefine mountain relaxation. Enjoy world-class spas, gourmet dining, and breathtaking views of snow-capped peaks.",
                    "Aspen offers luxury like no other. Stay in upscale chalets, enjoy spa treatments, and dine on gourmet meals while surrounded by stunning mountain views.",
                    "The Swiss Alps offer the ultimate luxury mountain retreat. Stay in five-star resorts, enjoy private ski lessons, and indulge in gourmet dining with views of the majestic Alps.",
                    "Zermatt in Switzerland offers high-end relaxation with luxury ski resorts, private chalets, and world-class spa services in a breathtaking alpine setting."
                ]
            }
        }
    };

    // Randomize the recommendation to make it more dynamic
    const getRandomRecommendation = (array) => array[Math.floor(Math.random() * array.length)];

    // Get the random recommendation based on the user's input
    const recommendation = recommendations[preference] && recommendations[preference][activity] && recommendations[preference][activity][budget]
        ? getRandomRecommendation(recommendations[preference][activity][budget])
        : "Please make valid selections.";

    // Display the result in the output div
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = recommendation;
    outputDiv.classList.remove('hidden');
    outputDiv.classList.add('fade-in');
});

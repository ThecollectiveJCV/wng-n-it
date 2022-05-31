require 'faker'

require "HTTParty"






response = HTTParty.get("https://api.yelp.com/v3/businesses/search?&term=chicken_wings&location=san+diego",
    
    :headers => { "Authorization" => "Bearer NG-qveheCHm_HzfYjX9sVUNPO9NVCpL_fo0Ag4k-lfi8SmgjcKd-0F3MKusY3mTJfNyRezv8d6rL4hndzT-lKlpFnSQKdn6nKNGIKT_dNAcYbD3lDe6hzWJq5LiOYnYx"})
puts response


# 10.times do 

#     restaurant=Restaurant.create(
#         name: Faker::Restaurant.name, 
#         zip: Faker::Address.zip, 
#         img: Faker::LoremFlickr.image(search_terms: ['chicken wings']), 
#         avg_rating: rand(1..5).to_f
#         )
#     restaurant.save!
# end

# user = User.where(email: 'test@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')


# Restaurant.all.each do |restaurant|
#     restaurant.reviews.create(
#                 user_id: 1,
#                 restaurant_id: restaurant.id,
#                 restaurant_name: restaurant.name,
#                 text_review: Faker::Restaurant.review,
#                 img: Faker::LoremFlickr.image(search_terms: ['chicken wings']), 
#                 rating: rand(1..5)
#     )
#     puts "creating review #{restaurant}"
# end

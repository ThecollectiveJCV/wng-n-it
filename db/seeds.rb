require 'faker'

require "HTTParty"


response = HTTParty.get("https://api.yelp.com/v3/businesses/search?&term=chicken_wings&location=san+diego",
    
    :headers => { "Authorization" => Rails.application.credentials.yelp_key})
    # INCORRECT SYNTAX TO CALL ON API KEY



parsed_response = JSON.parse(response&.body || "{}")
    
parsed_response['businesses'].each do |restaurants|
    restaurant=Restaurant.new(
        name: restaurants['name'], 
        zip: restaurants['location']['zip_code'], 
        img: restaurants['image_url'], 
        avg_rating: restaurants['rating']
        # avg_rating: rand(1.0..5.0).round(2)
        )
    restaurant.save!
end

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

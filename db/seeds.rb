require 'faker'

require "httparty"


response = HTTParty.get("https://api.yelp.com/v3/businesses/search?&term=chicken_wings&location=san+diego",
    
    :headers => { "Authorization" => Rails.application.credentials.yelp.api})
    



parsed_response = JSON.parse(response&.body || "{}")
    
parsed_response['businesses'].each do |restaurants|
    restaurant=Restaurant.new(
        name: restaurants['name'], 
        zip: restaurants['location']['zip_code'], 
        img: restaurants['image_url'], 
        avg_rating: restaurants['rating']
        
        )
    restaurant.save!
end

user = User.where(email: 'test@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')


Restaurant.all.each do |restaurant|
    restaurant.reviews.create(
                user_id: 1,
                restaurant_id: restaurant.id,
                restaurant_name: restaurant.name,
                text_review: Faker::Restaurant.review,
                img: restaurant.img, 
                rating: restaurant.avg_rating
    )
    puts "creating review #{restaurant}"
end

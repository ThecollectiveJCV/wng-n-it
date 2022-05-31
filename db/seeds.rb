require 'faker'

    10.times do 

        restaurant=Restaurant.create(
            name: Faker::Restaurant.name, 
            zip: Faker::Address.zip, 
            img: Faker::LoremFlickr.image(search_terms: ['chicken wings']), 
            avg_rating: rand(1..5).to_f
            )
        restaurant.save!
    end
# 50.times do
#     user=User.new(
#       name: Faker::Internet.user_name,
#       email: Faker::Internet.email,
#       password: Faker::Internet.password
#     )
#     user.save!
#   end
user = User.where(email: 'test@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')



    
    # 50.times do |id|
        # review=Review.create(
        #         user_id: 1,
        #         restaurant_id: 1,
        #         text_review: Faker::Restaurant.review,
        #         img: Faker::LoremPixel.image(size: "50x60"), 
        #         rating: rand(1..5)
        #         )
        # review.save!
  


Restaurant.all.each do |restaurant|
    restaurant.reviews.create(
                user_id: 1,
                restaurant_id: restaurant.id,
                restaurant_name: restaurant.name,
                text_review: Faker::Restaurant.review,
                img: Faker::LoremFlickr.image(search_terms: ['chicken wings']), 
                rating: rand(1..5)
    )
    puts "creating review #{restaurant}"
end

# review.each do |each_review|
#     Restaurant.reviews.create each_review
#     puts "creating review #{each_review}"
# end


require 'faker'

50.times do |id|
    Restaurant.create(
        id: id,
        name: Faker::Restaurant.name, 
        zip: Faker::Address.zip, 
        img: Faker::LoremPixel.image(size: "50x60"), 
        avg_rating: rand(1..5)
        )
end


user = User.where(email: 'test@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')



50.times do |id, restaurant_id|
    Review.create(
        id: id,
        restaurant_id: restaurant_id,
        img: Faker::LoremPixel.image(size: "50x60"), 
        rating: rand(1..5)
        )
end


require 'faker'

50.times do |id|
    Restaurant.create(
        id: id,
        name: Faker::Restaurant.name, 
        zip: Faker::Address.zip, 
        img:Faker::LoremPixel.image(size: "50x60"), 
        avg_rating: rand(1..5)
        )
end


user = User.where(email: 'test@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')

review.each do |each_review|
    user.reviews.create each_review
    puts "creating review #{each_review}"
end
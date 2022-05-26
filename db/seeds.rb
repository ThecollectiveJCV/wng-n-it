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
require 'rails_helper'

RSpec.describe Restaurant, type: :model do
  describe "Create restaurant validations" do
    it "must contain a zip" do
      restaurant = Restaurant.create name: 'Wingstop', avg_rating: 3.4, img: 'https://images.unsplash.com/photo-1596474252356-40a385da8686?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80' 
      expect(restaurant.errors[:zip]).to_not be_empty
    end
    it "must contain a name" do
      restaurant = Restaurant.create zip: 77373, avg_rating: 3.4, img: 'https://images.unsplash.com/photo-1596474252356-40a385da8686?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80' 
      expect(restaurant.errors[:name]).to_not be_empty
    end
    it "must contain a rating" do
      restaurant = Restaurant.create name: 'Wingstop', zip: 77372, img: 'https://images.unsplash.com/photo-1596474252356-40a385da8686?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80' 
      expect(restaurant.errors[:avg_rating]).to_not be_empty
    end
    it "must contain a zip" do
      restaurant = Restaurant.create name: 'Wingstop', avg_rating: 3.4, img: 'https://images.unsplash.com/photo-1596474252356-40a385da8686?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80' 
      expect(restaurant.errors[:zip]).to_not be_empty
    end
    it "must contain an image" do
      restaurant = Restaurant.create name: 'Wingstop', avg_rating: 3.4 
      expect(restaurant.errors[:img]).to_not be_empty
    end
  end
end

require 'rails_helper'

RSpec.describe Review, type: :model do
  describe "Create review validations" do
    it "must contain a restaurant name" do
      review = Review.create rating: 3, img: 'https://images.unsplash.com/photo-1596474252356-40a385da8686?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80', text_review: "testing validations for reviews" 
      expect(review.errors[:restaurant_name]).to_not be_empty
    end
    it "must contain an image" do
      review = Review.create restaurant_name: 'Wingstop', rating: 3, text_review: "testing validations for reviews"
      expect(review.errors[:img]).to_not be_empty 
    end
    it "must contain a rating" do
      review = Review.create restaurant_name: "Wingstop", text_review: "testing validations for", img: 'https://images.unsplash.com/photo-1596474252356-40a385da8686?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80'
      expect(review.errors[:rating]).to_not be_empty
    end
    it "must contain a review" do
      review = Review.create restaurant_name: "Wingstop", rating: 3, img: 'https://images.unsplash.com/photo-1596474252356-40a385da8686?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80'
      expect(review.errors[:text_review]).to_not be_empty
    end
  end
end

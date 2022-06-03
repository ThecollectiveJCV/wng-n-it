class ReviewsController < ApplicationController
    def index 
        reviews = Review.all
        render json: reviews
    end

    def create
        review = Review.create(review_params)
        if review.valid?
            render json: review
        else
            render json: review.errors, status: 422
        end
    end
    private 
    def review_params 
        params.require(:review).permit(:restaurant_name, :img, :text_review, :rating, :user_id, :restaurant_id)
    end 

end

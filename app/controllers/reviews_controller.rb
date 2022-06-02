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

end

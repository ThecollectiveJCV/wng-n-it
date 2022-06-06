class Restaurant < ApplicationRecord
    has_many :reviews, dependent: :destroy
    validates :name, :zip, :avg_rating, :img, presence: true 
end

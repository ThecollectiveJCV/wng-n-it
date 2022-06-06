class Review < ApplicationRecord
    belongs_to :user
    belongs_to :restaurant
    validates :text_review, presence: true
end

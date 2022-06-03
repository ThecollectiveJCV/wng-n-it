class CreateReviews < ActiveRecord::Migration[7.0]
    def change
      create_table :reviews do |t|
        t.string :restaurant_name
        t.string :img
        t.string :text_review
        t.integer :rating
        t.references :restaurant, foreign_key: true
        t.references :user, foreign_key: true
  
        t.timestamps
      end
    end
  end
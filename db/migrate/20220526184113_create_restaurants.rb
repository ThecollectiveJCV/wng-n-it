class CreateRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :img
      t.integer :zip
      t.integer :avg_rating

      t.timestamps
    end
  end
end

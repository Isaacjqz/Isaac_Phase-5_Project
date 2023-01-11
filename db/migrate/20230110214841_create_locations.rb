class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.string :current_country
      t.string :current_state
      t.string :current_city
      t.integer :zip_code

      t.timestamps
    end
  end
end

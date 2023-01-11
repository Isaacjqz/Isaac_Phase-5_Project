class CreateMatches < ActiveRecord::Migration[6.1]
  def change
    create_table :matches do |t|
      t.string :user_id
      t.string :location_id
      t.string :status
      t.text :message
      t.date :match_time

      t.timestamps
    end
  end
end

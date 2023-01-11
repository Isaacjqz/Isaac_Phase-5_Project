class CreateGoals < ActiveRecord::Migration[6.1]
  def change
    create_table :goals do |t|
      t.string :user_id
      t.text :goals

      t.timestamps
    end
  end
end

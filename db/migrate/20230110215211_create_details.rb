class CreateDetails < ActiveRecord::Migration[6.1]
  def change
    create_table :details do |t|
      t.string :user_id
      t.string :questions

      t.timestamps
    end
  end
end

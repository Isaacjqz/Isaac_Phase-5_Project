class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.integer :age
      t.integer :zip_code
      t.string :user_name
      t.string :password_digest
      t.string :current_country
      t.string :current_state
      t.string :current_city

      t.timestamps
    end
    add_index :users, :email, unique: true
  end
end

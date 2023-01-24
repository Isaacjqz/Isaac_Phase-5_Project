class User < ApplicationRecord
  has_secure_password
  
  # user will only be deleted upon dependent data
  has_many :matches, dependent: :destroy
  # has_many :locations, through: :matches 
  has_many :details, dependent: :destroy
  has_many :goals, dependent: :destroy
  has_many :user_locations
  has_many :locations, through: :user_locations 

  validates :email, uniqueness: true 
  validates :password, length: {minimum: 5}, on: :create
  validates :password, length: {minimum: 5}, if: :password_exist? 

  def password_exist? 
    password
  end
end

class User < ApplicationRecord
  has_secure_password
  
  # user will only be deleted upon dependent data
  has_many :matches, dependent: :destroy
  has_many :locations, through: :matches 
  has_many :details, dependent: :destroy
  has_many :goals, dependent: :destroy

  validates :email, uniqueness: true 
  validates :password, length: {minimum: 5}
end

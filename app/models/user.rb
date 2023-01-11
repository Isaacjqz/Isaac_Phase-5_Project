class User < ApplicationRecord
  has_secure_password

  has_many :matches
  has_many :locations, through: :matches 
  has_many :details
  has_many :goals
end

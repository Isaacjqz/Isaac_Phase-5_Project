class Location < ApplicationRecord

    has_many :matches
    has_many :users, through: :matches
end

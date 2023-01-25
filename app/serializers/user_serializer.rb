class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :zip_code, :user_name, :password, :current_country, :current_state, :current_city, :img_url
  has_many :goals
end

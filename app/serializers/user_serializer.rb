class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :zip_code, :user_name, :password, :current_country, :current_state, :current_city
  has_many :goals
end

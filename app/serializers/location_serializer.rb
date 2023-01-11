class LocationSerializer < ActiveModel::Serializer
  attributes :id, :current_country, :current_state, :current_city, :zip_code
end

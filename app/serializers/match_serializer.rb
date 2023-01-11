class MatchSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :location_id, :status, :message, :match_time
end
